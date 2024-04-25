import { FaGithub, FaGoogle } from "react-icons/fa";


const SocialMediaLogin = () => {


    return (
        <div className=" mt-2 mx-6">
            <button className="btn w-full  border-none text-black text-base bg-white "><FaGoogle /> Google</button>
            <button className="btn w-full mt-3 border-none text-black text-base bg-white"><FaGithub /> GitHub</button>

        </div>
    );
};

export default SocialMediaLogin;