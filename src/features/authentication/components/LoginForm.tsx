import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import Input from '../../../components/form/Input'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuthentication, useLogin } from '..'
import { pageRoutes } from '../../../routes'
import { AxiosError } from 'axios'

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
    persist: z.boolean().optional(),
})
type formType = z.infer<typeof validationSchema>

interface Props {
    setErrorMessage: (value: string) => void
}

const LoginForm = ({ setErrorMessage }: Props) => {
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
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || pageRoutes.home
    const { setAuthData } = useAuthentication()

    const onSubmit: SubmitHandler<formType> = (data) => {
        loginMutation.mutate(data, {
            onError: (err) => {
                if (err instanceof AxiosError) {
                    if (err.response?.status === 401) {
                        setErrorMessage(
                            'Wrong credentials: invalid email or password'
                        )
                    }
                } else {
                    setErrorMessage('Something went wrong. Please try again!')
                }
            },
            onSuccess(result) {
                if (data.persist) {
                    localStorage.setItem('persist', 'persist')
                }
                navigate(from, { replace: true })
                setAuthData({
                    accessToken: result.accessToken,
                })
            },
        })
    }
    return (
        <div className=" flex flex-col gap-8">
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
                />
                <div className=" flex flex-1 items-center justify-between ">
                    <label className="label cursor-pointer gap-2">
                        <input
                            {...register('persist')}
                            type="checkbox"
                            defaultChecked
                            className="checkbox-primary checkbox checkbox-sm"
                        />
                        <span className="label-text">Stay signed in</span>
                    </label>
                    <p className=" text-sm">Forgot password?</p>
                </div>
                <button
                    type="submit"
                    className={` ${loginMutation.isPending ? 'btn-disabled' : ''} btn btn-primary btn-block mt-3 `}
                >
                    {loginMutation.isPending && (
                        <span className="loading loading-spinner"></span>
                    )}
                    Connect now
                </button>
            </form>
        </div>
    )
}

export default LoginForm
