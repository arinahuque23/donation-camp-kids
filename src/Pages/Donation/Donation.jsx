import { useEffect, useState } from "react";

import DonationPage from "./DonationPage";


const Donation = () => {
    const [donation,setDonation]= useState([])

    const [noFound,setNoFound] = useState(false);
    const [isShow, setIsShow] = useState(false)
    
    useEffect (()=>{
        const donationItems = JSON.parse(localStorage.getItem('donationitems'));
        if(donationItems){
            setDonation(donationItems)

        }
        else{
           setNoFound('No Data Found')
        }
             
    },[])
    
    const handleReamove = ()=>{
        localStorage.clear()
        setDonation([])
        setNoFound("No Data Found");
    };

    console.log(isShow);




    return (
        <div >{noFound ? <p className="h-[80vh] flex justify-center items-center ">{noFound}</p>
        :

         <div>
            {donation.length >0 && <button onClick={handleReamove} className="px-5 bg-red-400 block mx-auto rounded-sm ">
                Deleted All Donation</button> } <br />
            <div className="grid grid-cols-2 gap-5">
                {
                    isShow? donation.map((datas)=>( <DonationPage key={datas.id} datas={datas} ></DonationPage>))
                    :donation.slice(0,4).map((datas)=>( <DonationPage key={datas.id} datas={datas} ></DonationPage>))
                }
            </div> <br />
            

            {
                donation.length > 4 && <button onClick={()=> setIsShow(!isShow)} className="px-8 p-4 bg-red-400 block mx-auto rounded-lg text-black font-mono ">
                {isShow? "See Less" : "See All"} </button> 
 
            }
         </div>
        }
            
        </div>
    );
};

export default Donation;