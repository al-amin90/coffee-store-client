import banner from "../assets/3.png";
import coffee from "../assets/1.png"
import batch from "../assets/2.png"
import bean from "../assets/3.1.png"
import jar from "../assets/4.png"
import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div>
            <div className="hero lg:h-[calc(100vh-80px)]" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-content text-white">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div>
                        </div>
                        <div>
                            <Link to="/users">
                                <h1 className="mb-5 text-4xl text-white font-rancho">Would you like a Cup of Delicious Coffee?</h1>
                            </Link>
                            <p className="mb-5 text-sm w-4/5 font-raleway">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                            <Link to="singUp">
                                <button className="py-2 px-5 hover:text-white hover:bg-transparent hover:border border-white bg-[#E3B577] text-xl text-[#242222] font-rancho">Learn More</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#ECEAE3] ">
                <div className="lg:w-[80%] px-4 py-12 mx-auto text-[#331A15] grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="card ">
                        <div className="">
                            <img src={coffee} alt="" />
                            <h2 className="font-rancho  py-3 font-medium text-3xl">Awesome Aroma</h2>
                            <p className="text-sm">You will definitely be a fan of the design & aroma of your coffee</p>
                        </div>
                    </div>
                    <div className="card ">
                        <div className="">
                            <img src={batch} alt="" />
                            <h2 className="font-rancho  py-3 font-medium text-3xl">High Quality</h2>
                            <p className="text-sm">We served the coffee to you maintaining the best quality</p>
                        </div>
                    </div>
                    <div className="card ">
                        <div className="">
                            <img src={bean} alt="" />
                            <h2 className="font-rancho  py-3 font-medium text-3xl">Pure Grades</h2>
                            <p className="text-sm">The coffee is made of the green coffee beans which you will love</p>
                        </div>
                    </div>
                    <div className="card ">
                        <div className="">
                            <img src={jar} alt="" />
                            <h2 className="font-rancho  py-3 font-medium text-3xl">Proper Roasting</h2>
                            <p className="text-sm">Your coffee is brewed by first roasting the green coffee beans</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;