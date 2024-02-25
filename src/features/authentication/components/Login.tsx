import { Link, Outlet } from 'react-router-dom'
import LoginForm from './LoginForm'

const Login = () => {
    return (
        <div className=" mx-auto flex w-full max-w-screen-lg flex-auto justify-between font-montserrat">
            <div className=" flex w-full max-w-xl flex-col border-r border-accent pb-5 pl-7 pt-10 text-secondary">
                <div>
                    <p className="  mb-5 max-w-md text-3xl font-bold ">
                        <span className=" text-primary">
                            See what`s happening
                        </span>{' '}
                        around you right now
                    </p>
                    <p className=" text-md mb-5 ">
                        Join your friends on Twitter today!
                    </p>
                    <img
                        className=" max-w-[415px] "
                        src="/social-girl1.png"
                        alt="socials"
                    />
                </div>
                <div className=" flex max-w-[415px] flex-1 flex-col items-center justify-end text-[12px] text-base-content">
                    © 2024 Twitter-Clone, Inc.
                </div>
            </div>
            <div className=" flex w-full max-w-md flex-col gap-10 px-10 py-10">
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
                    <p className=" text-[12px]">
                        Don`t have an account?{' '}
                        <Link to="signup" className=" link text-primary ">
                            Signup
                        </Link>
                    </p>
                </div>
                <p className=" text-3xl font-bold text-secondary">
                    Find out what's trending.
                </p>
                <LoginForm />
            </div>
            <Outlet />
        </div>
    )
}

export default Login
