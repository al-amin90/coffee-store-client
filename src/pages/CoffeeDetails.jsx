import { useLoaderData, useNavigate } from "react-router-dom";
import banner from "../assets/11.png"
import { FaArrowLeft } from "react-icons/fa6";

const CoffeeDetails = () => {
    const navigate = useNavigate()
    const coffee = useLoaderData();
    const { _id, name, chef, price, taste, category, details, photo } = coffee;

    return (
        <div style={{ backgroundImage: `url(${banner})`, backgroundRepeat: "no-repeat", backgroundSize: "contain" }}>
            <div className='pb-24 md:w-[80%] px-4 pt-12 mx-auto'>
                <div>
                    <button onClick={() => navigate(-1)} className="py-2 px-5  mb-12 bg-transparent flex items-center gap-3 rounded-md  hover:bg-[#D2B48C] font-semibold text-xl text-[#242222] font-rancho"><FaArrowLeft /> Back to home</button>
                </div>
                <div className=" w-full mx-auto bg-[#F5F4F1] py-6 pl-4 pr-10 rounded-lg">
                    <div className=' w-2/3 mx-auto flex gap-4 justify-between'>
                        <img className="w-1/2" src={photo} alt="" />
                        <div className="flex flex-col text-base justify-center space-y-1">
                            <h2 className="font-semibold text-3xl mb-4 text-[#331A15] font-rancho">Niceties</h2>

                            <h4 className="text-[#1B1A1A] font-bold">Name: <span className="font-normal">{name}</span></h4>
                            <h4 className="text-[#1B1A1A] font-bold">Chef: <span className="font-normal">{chef}</span></h4>
                            <h4 className="text-[#1B1A1A] font-bold">Price:  <span className="font-normal">{price}</span></h4>
                            <h4 className="text-[#1B1A1A] font-bold">Taste:  <span className="font-normal">{taste}</span></h4>
                            <h4 className="text-[#1B1A1A] font-bold">Category:  <span className="font-normal">{category}</span></h4>
                            <h4 className="text-[#1B1A1A] font-bold">Details:  <span className="font-normal">{details}</span></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;