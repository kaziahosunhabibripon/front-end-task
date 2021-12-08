import React from 'react';
import { useForm } from 'react-hook-form';
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
                    <input  {...register("Email", { required: true })} />
                    {errors.Email && <span> Please Provide Valid Email ID or Phone Number </span>}

                    <br />
                    <label><h3> Password </h3></label>
                    <input {...register("Password", { required: true })} />

                    {errors.Password && <span>Please Provide Valid Password</span>}
                    <br />
                    <input type="submit" />
                </form>
                <div className="loginFooter">
                    <span><a href="/login"> Forgot Password </a> </span>
                    <span> /<a href="/login"> Create Your Account </a></span>
                </div>
            </div>
        </section>
    )
}

export default Login;
