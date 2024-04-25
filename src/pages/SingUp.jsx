import { useState } from "react";
import { useForm } from "react-hook-form"
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth"
import { baseURL } from "../utilits/url";


const SingUp = () => {
    const [isShowed, setIsShowed] = useState(true)

    const { createUser, logOut } = useAuth()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()


    const onSubmit = (data) => {
        const { email, password, name } = data;

        createUser(email, password)
            .then(result => {
                console.log(result.user);

                const user = {
                    email,
                    createdAt: result?.user?.metadata?.creationTime
                }
                // send to database
                fetch(`${baseURL}/user`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.insertedId) {
                            alert("added to database")
                        }
                    })

            })
            .catch(error => {
                console.log(error);
            })
    }


    const handleLogout = () => {
        logOut()
            .then(result => console.log("log out successfully"))
    }

    return (
        <div>
            <div className="hero ">
                <div className="flex items-center justify-center py-20 w-full">
                    <div className="card shrink-0 md:w-1/2 lg:w-2/6  rounded-lg shadow-2xl bg-[#372727] ">
                        <h1 className='font-bold text-2xl mt-8 text-center text-white'>Register</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body font-montserrat p-6 ">
                            <div className="form-control">
                                <label className="label mb-1">
                                    <span className="label-text text-white">Your Name</span>
                                </label>
                                <input
                                    {...register("name", { required: true })}
                                    type="text" placeholder="Your Name" className="input input-bordered rounded-md " />
                                {errors.name && <span className="mt-2 text-red-500">This Name field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label mb-1">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input
                                    {...register("email", { required: true })}
                                    type="email" placeholder="email" className="input input-bordered rounded-md " />
                                {errors.email && <span className="mt-2 text-red-500"> This Email field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label mb-1">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <div className="relative flex">
                                    <input
                                        {...register("password", { required: true })}

                                        type={isShowed ? "password" : "text"} placeholder="Password" className="input w-full input-bordered rounded-md " />

                                    <div
                                        onClick={() => setIsShowed(!isShowed)}
                                        className="absolute right-4 text-xl top-4">
                                        {isShowed ?
                                            <FaEyeSlash></FaEyeSlash>
                                            : <FaEye />
                                        }
                                    </div>
                                </div>
                                {errors.password && <span className="mt-2 text-red-500"> This Password field is required</span>}
                            </div>

                            <div className="form-control mt-6">
                                <button type="submit" className="btn border-none text-white text-base bg-[#3baaff]"> Register</button>
                            </div>
                        </form>

                        <div className='text-white px-6 mb-6 text-center font-medium text-base'>Already have an account? <Link to="/login" className=" font-normal text-[#3baaff] underline">
                            Login
                        </Link></div>
                        <button onClick={handleLogout} className="btn btn-primary">Log out</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingUp;