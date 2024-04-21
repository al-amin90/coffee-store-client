import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";


const AddCoffee = () => {
    const navigate = useNavigate()

    return (
        <div className='mb-24 md:w-[80%] px-4 mx-auto'>
            <div>
                <button onClick={() => navigate(-1)} className="py-2 px-5  my-12 bg-transparent flex items-center gap-3 rounded-md  hover:bg-[#D2B48C] font-semibold text-xl text-[#242222] font-rancho"><FaArrowLeft /> Back to home</button>
            </div>
            <div className='py-10 px-16 bg-[#F4F3F0] rounded-lg'>
                <h1 className="mb-5 text-4xl text-[#374151] text-center font-semibold mt-2 font-rancho">Add New Coffee</h1>
                <p className="mb-5 text-[#1B1A1AB3] text-center text-sm w-4/5 font-raleway mx-auto">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                <form >
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-base">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Enter coffee name" className="input px-3 py-1" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-base">Chef</span>
                            </label>
                            <input type="text" name='chef' placeholder="Enter coffee chef" className="input px-3 py-1" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-base">Supplier</span>
                            </label>
                            <input type="text" name='supplier' placeholder="Enter coffee supplier" className="input px-3 py-1" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-base">Taste</span>
                            </label>
                            <input type="text" name='taste' placeholder="Enter coffee taste" className="input px-3 py-1" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-base">Category</span>
                            </label>
                            <input type="text" name='category' placeholder="Enter coffee category" className="input px-3 py-1" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-base">Details</span>
                            </label>
                            <input type="text" name='details' placeholder="Enter coffee details" className="input px-3 py-1" />
                        </div>
                        <div className="form-control col-span-2">
                            <label className="label">
                                <span className="label-text font-semibold text-base">Photo</span>
                            </label>
                            <input type="text" name='photo' placeholder="Enter photo URL" className="input  px-3 py-1" />
                        </div>
                    </div>
                    <button type="submit" className="py-2 px-5 w-full mt-4 hover:bg-transparent border rounded-md border-[#331A15] bg-[#D2B48C] text-xl text-[#242222] font-rancho">Add Coffee</button>
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;