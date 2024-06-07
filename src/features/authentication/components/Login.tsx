import { Link, Outlet } from 'react-router-dom'
import LoginForm from './LoginForm'
import { useState } from 'react'

const Login = () => {
    const [errorMessage, setErrorMessage] = useState<string | null>(null)
    return (
        <div className=" mx-auto flex w-full max-w-screen-lg flex-auto flex-col-reverse items-center justify-between font-montserrat md:flex-row md:items-stretch">
            <div className=" flex w-full max-w-xl flex-1 flex-shrink flex-col items-center pb-5 pt-10 text-secondary md:items-baseline md:border-r md:border-accent md:pl-7">
                <div className=" flex flex-col items-center md:items-stretch">
                    <div className=" text-center md:text-start">
                        <p className="  mb-5 max-w-md text-2xl font-bold sm:text-3xl ">
                            <span className=" text-primary">
                                See what`s happening
                            </span>{' '}
                            <br />
                            around you right now
                        </p>
                        <p className=" text-md mb-5 ">
                            Join your friends on Twitter today!
                        </p>
                    </div>
                    <img
                        className=" min-w-[400px] max-w-full "
                        src="/social-girl1.png"
                        alt="socials"
                    />
                </div>
                <div className=" flex w-full max-w-[415px] flex-1 flex-col items-center justify-end text-sm text-base-content">
                    © 2024 Twitter-Clone, Inc.
                </div>
            </div>
            <div className=" flex w-full max-w-md flex-col gap-10 px-5 py-5 sm:px-10 sm:py-10">
                <div className=" flex items-center justify-between">
                    <svg
                        width="26"
                        height="25"
                        viewBox="0 0 16 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M5.20002 0.0749817H0.212524L6.09777 7.92246L0.533149 14.325H2.42127L6.97272 9.08882L10.9 14.325H15.8875L9.75432 6.14691L15.0325 0.0749817H13.1444L8.87937 4.98126L5.20002 0.0749817ZM11.6125 12.9L3.06252 1.49998H4.48752L13.0375 12.9H11.6125Z"
                            fill="white"
                        />
                    </svg>
                    <p className=" text-sm">
                        Don`t have an account?{' '}
                        <Link to="signup" className=" link text-primary ">
                            Signup
                        </Link>
                    </p>
                </div>
                <p className=" text-2xl font-bold text-secondary sm:text-3xl">
                    Find out what's trending.
                </p>
                <div>
                    <LoginForm setErrorMessage={setErrorMessage} />
                    {errorMessage && (
                        <p className=" mt-2 text-center text-sm text-error">
                            {errorMessage}
                        </p>
                    )}
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default Login
