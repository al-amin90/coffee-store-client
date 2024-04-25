import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";
import { useState } from "react";
import Swal from "sweetalert2";
import background from "../assets/background.png"
import { baseURL } from "../utilits/url";

const PopularProducts = () => {
    const loadedCoffees = useLoaderData()
    const [coffees, setCoffees] = useState(loadedCoffees)

    const handleDelete = id => {

        Swal.fire({
            title: "Are you sure?",
            text: "Are you sure that you want to delete it?",
            icon: "warning",
            confirmButtonColor: "#E64942",
            confirmButtonText: "OK"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`${baseURL}/coffee/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        const remaining = coffees.filter(coffee => coffee._id !== id)
                        setCoffees(remaining)

                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Good Luck !!!!",
                                text: "Deleted coffee details",
                                icon: "success"
                            });
                        }
                    })
            }
        });


    }

    return (
        <div style={{ backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize: "contain" }}>
            <div className="my-24 md:w-[80%] px-4 mx-auto">
                <h4 className="text-center text-[#1B1A1A]">--- Sip & Savor ---</h4>
                <h1 className="mb-5 text-4xl text-[#331A15] text-center font-semibold mt-2 font-rancho">Our Popular Products: {coffees.length}</h1>
                <div className='flex items-center justify-center mb-16'>
                    <Link to="/addCoffee">
                        <button className="py-2 px-5 hover:text-white hover:bg-transparent border rounded-md border-[#331A15] bg-[#E3B577] text-xl text-[#242222] font-rancho">Add Coffee</button>
                    </Link>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    {
                        coffees.map(coffee =>
                            <CoffeeCard
                                key={coffee._id}
                                coffee={coffee}
                                handleDelete={handleDelete}
                            ></CoffeeCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default PopularProducts;