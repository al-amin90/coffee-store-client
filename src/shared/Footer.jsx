import footer from "../assets/13.jpg"
import social from "../assets/Group 27.png"
import logo from "../assets/logo1.png"
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


const Footer = () => {
    return (
        <div className="w-full" style={{ backgroundImage: `url(${footer})`, backgroundRepeat: "no-repeat", backgroundSize: "contain" }}>
            <div className="md:w-[80%] px-4 md:px-0 pt-16 pb-5 mx-auto grid grid-cols-2 gap-28">
                <div>
                    <img className="w-16" src={logo} alt="" />
                    <h1 className="my-7 text-4xl text-[#331A15] font-semibold font-rancho">Espresso Emporium</h1>
                    <p className="mb-5 text-[#1B1A1A] text-sm font-raleway">Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                    <img className="w-1/3" src={social} alt="" />
                    <h1 className="my-7 text-4xl text-[#331A15] font-semibold font-rancho">Get in Touch</h1>
                    <div className="text-[#1B1A1A] text-sm font-raleway">
                        <div className="flex mb-3 items-center gap-4">
                            <FaPhone className="text-base" />
                            <p>+88 01533 333 333</p>
                        </div>
                        <div className="flex mb-3 items-center gap-4">
                            <MdEmail className="text-base" />
                            <p>info@gmail.com</p>
                        </div>
                        <div className="flex mb-3 items-center gap-4">
                            <FaLocationDot className="text-base" />
                            <p>72, Wall street, King Road, Dhaka</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="my-7 text-4xl text-[#331A15] font-semibold font-rancho">Connect with Us</h1>
                    <form >
                        <div className="flex flex-col gap-4">
                            <input type="text" placeholder="Name" className="input px-3 py-1" />
                            <input type="email" placeholder="Email" className="input px-3 py-1" />
                            <textarea name="Message" className="input h-28 px-3" placeholder="Message" id="" cols="30" rows="10"></textarea>
                        </div>
                        <button type="submit" className="py-2 px-5 mt-6 bg-transparent border border-[#331A15] rounded-full hover:bg-[#D2B48C] text-[#331A15] text-xl font-rancho">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Footer;