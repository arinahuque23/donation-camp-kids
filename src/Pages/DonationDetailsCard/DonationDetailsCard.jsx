/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import swal from "sweetalert";


const DonationDetailsCard = ({datas}) => {
    const {id,picture,price,title_color,description,category,category_bg,card_bg} = datas ||{};

    const handleAddtoDonation = ()=> {

        const addedDonationArray = [];


        const donationItems = JSON.parse(localStorage.getItem("donationitems"));
        
        if(!donationItems){
            addedDonationArray.push(datas)
            localStorage.setItem('donationitems', JSON.stringify(addedDonationArray));
            swal("Thanks For donation!");
        }
        else{

            const isExits = donationItems.find(datas => datas.id ==id);
            
            if(!isExits){
                addedDonationArray.push( ...donationItems,datas);
                localStorage.setItem('donationitems',JSON.stringify(addedDonationArray));
                swal(" Thanks For Donation!!");

            }
            else{
                swal("Error", "Donation Complete!", "error");
            }

           
        }

        

    }

    return (
        <div>
            
            <div className="justify-center items-center h-[80vh]">
                 <div className="card-body ">
                        <div className="relative justify-center items-center flex  ">
                            <img className="h-96 w-[900px]  p-6  " src={picture} alt="" />
                            <div className="bg-black   opacity-40 h-[100px] flex w-[853px]  
                             absolute bottom-6  left-[240px] ">
                                   <button className="btn flex  btn-disabled">Donation</button>
                            </div>
                            <div className="absolute bottom-6 left-[350px] pb-4">
                                <button onClick={handleAddtoDonation} style={{background:card_bg,}} className=" p-2 rounded-sm text-center text-black p-l-r-2">Donation: {price}</button>
                            </div>
                             
                             
                         </div>
                </div>
                <div>
                <div className=" ">
                                <p className="text-4xl p-6 pl-20  font-semibold">{category}</p>
                                <p className="border p-6 pl-20   text-xl">{description}</p>
                             </div>
                </div>

             </div>
            
        </div>
    );
};




export default DonationDetailsCard;