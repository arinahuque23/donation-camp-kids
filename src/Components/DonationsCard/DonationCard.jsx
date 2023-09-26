/* eslint-disable react/prop-types */
import DonatesAllCard from "./DonatesAllCard";
import './DonationCard.css'
const DonationCard = ({data}) => {
    console.log(data);
    return (
        <div >
        

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-6  ">
                {
                    data?.map(datas=> <DonatesAllCard key={datas.id} datas={datas}></DonatesAllCard> )
                }
            </div>

        </div>
    );
};

export default DonationCard;