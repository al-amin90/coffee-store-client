import test from "../assets/rwst.png";
import { IoMdEye } from "react-icons/io";
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const PopularProducts = () => {
    return (
        <div>
            <div className="my-24 md:w-[80%] px-4 mx-auto">
                <h4 className="text-center text-[#1B1A1A]">--- Sip & Savor ---</h4>
                <h1 className="mb-5 text-4xl text-[#331A15] text-center font-semibold mt-2 font-rancho">Our Popular Products</h1>
                <div className='flex items-center justify-center mb-16'>
                    <Link to="/addCoffee">
                        <button className="py-2 px-5 hover:text-white hover:bg-transparent border rounded-md border-[#331A15] bg-[#E3B577] text-xl text-[#242222] font-rancho">Add Coffee</button>
                    </Link>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <div className='bg-[#F5F4F1] py-4 pr-9 rounded-lg flex gap-4 justify-between'>
                        <img className="" src={test} alt="" />
                        <div className="flex flex-col  justify-center space-y-1">
                            <h4 className="text-[#1B1A1A] font-semibold">Name: <span className="font-normal">Americano Coffee</span></h4>
                            <h4 className="text-[#1B1A1A] font-semibold">Chef: <span className="font-normal">Mr. Matin Paul</span></h4>
                            <h4 className="text-[#1B1A1A] font-semibold">Price:  <span className="font-normal">890 Taka</span></h4>
                        </div>
                        <div className="flex flex-col justify-center gap-3">
                            <button className="text-white p-3 text-xl rounded-md bg-[#D2B48C]">
                                <IoMdEye />
                            </button>
                            <button className="text-white p-3 text-xl rounded-md bg-[#3C393B]">
                                <MdModeEditOutline />
                            </button>
                            <button className="text-white p-3 text-xl rounded-md bg-[#EA4744]">
                                <MdDelete />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularProducts;