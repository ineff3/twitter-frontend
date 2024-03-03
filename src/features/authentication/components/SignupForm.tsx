import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import Input from '../../../components/form/Input'
import { requiredStringFieldSchema } from '../../../utils/schemeTransformations'
import { AxiosError } from 'axios'
import { useSignup } from '..'

const validationSchema = z
    .object({
        firstName: requiredStringFieldSchema('First name', 3),
        secondName: requiredStringFieldSchema('Second name', 3),
        email: z
            .string()
            .min(1, 'Email is a required filed')
            .regex(
                /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                'Email address is not valid'
            )
            .trim(),
        password: requiredStringFieldSchema('Password', 6),
        confirmPassword: requiredStringFieldSchema('Confirm password', 6),
    })
    .refine(
        (data) => {
            return data.password === data.confirmPassword
        },
        {
            message: 'Passwords do not match',
            path: ['confirmPassword'],
        }
    )
type formType = z.infer<typeof validationSchema>

interface Props {
    setErrorMessage: (value: string) => void
}
const SignupForm = ({ setErrorMessage }: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<formType>({
        resolver: zodResolver(validationSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    })

    const signupMutation = useSignup()

    const onSubmit: SubmitHandler<formType> = (data) => {
        signupMutation.mutate(data, {
            onError: (err) => {
                console.log(err)
                if (err instanceof AxiosError) {
                    if (err.response?.status === 409) {
                        setErrorMessage('User with such email already exists')
                    }
                } else {
                    setErrorMessage('Something went wrong. Please try again!')
                }
            },
            onSuccess: () => {
                console.log('Successfully signuped')
            },
        })
    }
    return (
        <form
            className=" flex w-full flex-col gap-2"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className=" flex flex-col sm:flex-row sm:gap-3">
                <Input
                    {...register('firstName')}
                    isInvalid={!!errors.firstName}
                    errorMessage={errors?.firstName?.message}
                    placeholder="First name"
                />
                <Input
                    {...register('secondName')}
                    isInvalid={!!errors.secondName}
                    errorMessage={errors?.secondName?.message}
                    placeholder="Second name"
                />
            </div>
            <Input
                {...register('email')}
                isInvalid={!!errors.email}
                errorMessage={errors?.email?.message}
                placeholder="Email"
            />
            <Input
                {...register('password')}
                isInvalid={!!errors.password}
                errorMessage={errors?.password?.message}
                placeholder="Password"
                type="password"
            />
            <Input
                {...register('confirmPassword')}
                isInvalid={!!errors.confirmPassword}
                errorMessage={errors?.confirmPassword?.message}
                placeholder="Confirm your password"
                type="password"
            />
            <button
                type="submit"
                className="btn btn-primary mt-5 w-fit  self-center px-10"
            >
                Sign Up
            </button>
        </form>
    )
}

export default SignupForm
