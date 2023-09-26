/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import DonationCard from "../../Components/DonationsCard/DonationCard";
import Banner from "../../Components/Header/Banner/Banner";

const Home = () => {

    const data = useLoaderData()
    

    return (
        <div>
            <Banner></Banner> <br /> <br />
            <DonationCard data = {data} ></DonationCard>
        </div>
    );
};

export default Home;
