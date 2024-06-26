import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import SocialMediaLogin from "../components/SocialMediaLogin";
import useAuth from "../Hooks/useAuth";
import { baseURL } from "../utilits/url";

const SingIn = () => {
    const { singInUser } = useAuth()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()


    const onSubmit = (data) => {
        const { email, password } = data;
        console.log(data);

        singInUser(email, password)
            .then(result => {
                console.log(result.user);
                //send to database
                const user = {
                    email,
                    lastLoginAt: result?.user?.metadata?.lastSignInTime
                }

                fetch(`${baseURL}/user`, {
                    method: "PATCH",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        alert("update succesfully")
                    })
            })
            .catch(error => {
                console.log(error);
            })


    }
    return (
        <div>
            <div className="hero relative">
                <div className="flex items-center justify-center py-20 w-full">
                    <div className="card shrink-0 md:w-1/2 lg:w-2/6 rounded-lg shadow-2xl bg-[#372727] ">
                        <h1 className='font-bold text-2xl mt-8 text-center text-white'>Log In</h1>

                        <form onSubmit={handleSubmit(onSubmit)} className="card-body font-montserrat p-6 pb-2">
                            <div className="form-control">
                                <label className="label mb-1">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input
                                    {...register("email", { required: true })}
                                    type="email" placeholder="email" className="input input-bordered rounded-md " required />

                            </div>
                            <div className="form-control">
                                <label className="label mb-1">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <input
                                    {...register("password", { required: true })}
                                    type="password" placeholder="Password" className="input input-bordered rounded-md " required />

                            </div>

                            <div className="form-control mt-6">
                                <button type="submit" className="btn border-none text-white text-base bg-[#3baaff]">Login</button>
                            </div>
                        </form>
                        <div className="divider divider-info w-2/3 mx-auto text-white ">OR</div>
                        {<SocialMediaLogin></SocialMediaLogin>}
                        <div className='text-white px-6 my-6 text-center font-medium text-base'> Don’t have an account? <Link to="/singup" className=" font-normal text-[#3baaff] underline">
                            Register
                        </Link></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingIn;