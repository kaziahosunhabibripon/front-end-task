import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example"));
    return (
        <section>
            <div className="login">
                <h1 className="title">
                    Login to your account
                </h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label > <h3> Email ID / Phone Number </h3> </label>
                    <input type="text"
                        placeholder="Email"
                        name="email"
                        {...register("email", {
                            required: "Email should be like this name@something.com",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "Please Provide Valid Email ID or Phone Number"
                            }
                        })} />
                    {errors.email ? (
                        <>
                            {errors.email.type === "required" && (
                                <h3 style={{ color: "red" }}>
                                    {errors.email.message}
                                </h3>
                            )}
                            {errors.email.type === "pattern" && (
                                <h3 style={{ color: "orange" }}>
                                    {errors.email.message}
                                </h3>
                            )}
                        </>
                    ) : null}

                    <label><h3> Password </h3></label>
                    <input
                        type="password"
                        placeholder="password"
                        name="password"
                        {...register("password", {
                            required: "Please Provide At least one capital letter and one small letter and symbol and one number",
                            pattern: {
                                value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                                message: "Password Required",
                            }
                        })} />

                    {errors.password ? (
                        <>
                            {errors.password.type === "required" && (
                                <h3 style={{ color: "red" }}>
                                    {errors.password.message}
                                </h3>
                            )}
                            {errors.password.type === "pattern" && (
                                <h3 style={{ color: "orange" }}>
                                    {errors.password.message}
                                </h3>
                            )}
                        </>
                    ) : null}

                    <input type="submit" />
                </form>
                <div className="loginFooter">
                    <span><Link to="/login"> Forgot Password </Link> </span>
                    <span> /<Link to="/signup"> Create Your Account </Link></span>
                </div>
            </div>
        </section>
    )
}

export default Login;
