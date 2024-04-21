import Banner from "../components/Banner";
import FollowInstragram from "../components/FollowInstragram";
import PopularProducts from "../components/PopularProducts";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularProducts></PopularProducts>
            <FollowInstragram></FollowInstragram>
        </div>
    );
};

export default Home;