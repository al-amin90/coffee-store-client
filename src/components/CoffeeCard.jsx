import { IoMdEye } from "react-icons/io";
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee, handleDelete }) => {
    const { _id, name, chef, price, photo } = coffee;



    return (
        <div className='bg-[#F5F4F1] py-6 pl-4 pr-9 rounded-lg flex gap-4 justify-between'>
            <img className="" src={photo} alt="" />
            <div className="flex flex-col  justify-center space-y-1">
                <h4 className="text-[#1B1A1A] font-semibold">Name: <span className="font-normal">{name}</span></h4>
                <h4 className="text-[#1B1A1A] font-semibold">Chef: <span className="font-normal">{chef}</span></h4>
                <h4 className="text-[#1B1A1A] font-semibold">Price:  <span className="font-normal">{price}</span></h4>
            </div>
            <div className="flex flex-col justify-center gap-3">
                <Link to={`/coffeeDetails/${_id}`}>
                    <button className="text-white p-3 text-xl rounded-md bg-[#D2B48C]">
                        <IoMdEye />
                    </button>
                </Link>
                <Link to={`/updateCoffee/${_id}`}>
                    <button className="text-white p-3 text-xl rounded-md bg-[#3C393B]">
                        <MdModeEditOutline />
                    </button>
                </Link>
                <button
                    onClick={() => handleDelete(_id)}
                    className="text-white p-3 text-xl rounded-md bg-[#EA4744]">
                    <MdDelete />
                </button>
            </div>
        </div>
    );
};

export default CoffeeCard;