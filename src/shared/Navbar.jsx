import { Link } from "react-router-dom";
import navImg from "../assets/15.jpg"
import logo from "../assets/logo1.png"

const Navbar = () => {
    return (
        <div className="relative ">
            <img className="w-full object-cover h-20" src={navImg} alt="" />
            <Link to="/">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-3 ">
                    <img className="w-12" src={logo} alt="" />
                    <h2 className="text-3xl font-rancho text-white">Espresso Emporium</h2>
                </div>
            </Link>
        </div>
    );
};

export default Navbar;