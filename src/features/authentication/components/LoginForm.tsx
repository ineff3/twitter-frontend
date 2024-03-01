import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import Input from '../../../components/form/Input'
import { useLogin } from '../services/auth-actions'
import Cookies from 'js-cookie'
import { useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '..'
import { ACCESS_TOKEN_KEY } from '../../../routes'

const validationSchema = z.object({
    email: z
        .string()
        .min(1, 'Email is a required filed')
        .regex(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Email address is not valid')
        .trim(),
    password: z
        .string()
        .min(1, 'Password is a required field')
        .min(6, 'Password must be at least 6 characters')
        .trim(),
})
type formType = z.infer<typeof validationSchema>

const LoginForm = () => {
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
    const loginMutation = useLogin()
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const { setAuth } = useAuth()

    const onSubmit: SubmitHandler<formType> = (data) => {
        loginMutation.mutate(data, {
            onError: (err) => {
                console.log(err)
            },
            onSuccess(data) {
                console.log(data)
                navigate('/')
                queryClient.invalidateQueries()
                queryClient.setQueryData([ACCESS_TOKEN_KEY], data.accessToken)
            },
        })
    }
    return (
        <div className=" flex flex-col gap-5">
            <p>Login to Twitter.</p>
            <form
                className=" flex flex-col gap-2"
                onSubmit={handleSubmit(onSubmit)}
            >
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
                    rightLabel="Forgot password?"
                />
                <button
                    type="submit"
                    className="btn btn-primary btn-block mt-5"
                >
                    Connect now
                </button>
            </form>
        </div>
    )
}

export default LoginForm
