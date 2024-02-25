import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import Input from '../../../components/form/Input'

const validationSchema = z
    .object({
        fullName: z
            .string()
            .min(1, 'Full name is a required field')
            .min(3, 'Full name must be at least 3 characters')
            .trim(),
        email: z
            .string()
            .min(1, 'Email is a required filed')
            .regex(
                /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                'Email address is not valid'
            )
            .trim(),
        password: z
            .string()
            .min(1, 'Password is a required field')
            .min(6, 'Password must be at least 6 characters')
            .trim(),
        confirmPassword: z
            .string()
            .min(1, 'Confirm password is a required filed')
            .min(6, 'Confirm password must be at least 6 characters')
            .trim(),
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

const SignupForm = () => {
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
    const onSubmit: SubmitHandler<formType> = (data) => {
        console.log(data)
    }
    return (
        <form
            className=" flex w-full flex-col gap-2"
            onSubmit={handleSubmit(onSubmit)}
        >
            <Input
                {...register('fullName')}
                isInvalid={!!errors.fullName}
                errorMessage={errors?.fullName?.message}
                placeholder="Full name"
            />
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
