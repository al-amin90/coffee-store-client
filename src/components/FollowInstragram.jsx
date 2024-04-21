import img1 from "../assets/Rectangle 9.png"
import img2 from "../assets/Rectangle 10.png"
import img3 from "../assets/Rectangle 11.png"
import img4 from "../assets/Rectangle 12.png"
import img5 from "../assets/Rectangle 13.png"
import img6 from "../assets/Rectangle 14.png"
import img7 from "../assets/Rectangle 15.png"
import img8 from "../assets/Rectangle 16.png"

const FollowInstragram = () => {
    return (
        <div className="my-24 md:w-[80%] px-4 mx-auto">
            <h4 className="text-center text-[#1B1A1A]">Follow Us Now</h4>
            <h1 className="mb-5 text-4xl text-[#331A15] text-center font-semibold mt-2 font-rancho">Follow on Instagram</h1>
            <div className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
                <img className="w-full" src={img1} alt="" />
                <img className="w-full" src={img2} alt="" />
                <img className="w-full" src={img3} alt="" />
                <img className="w-full" src={img4} alt="" />
                <img className="w-full" src={img5} alt="" />
                <img className="w-full" src={img6} alt="" />
                <img className="w-full" src={img7} alt="" />
                <img className="w-full" src={img8} alt="" />
            </div>
        </div>
    );
};

export default FollowInstragram;