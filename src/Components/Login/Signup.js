import React from 'react';
import { useForm } from 'react-hook-form';

const Signup = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example"));
    return (
        <div>
            <h1 className="title">
               Create a new account
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
        </div>
    )
}

export default Signup
