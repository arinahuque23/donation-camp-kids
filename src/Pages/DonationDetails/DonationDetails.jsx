/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationDetailsCard from "../DonationDetailsCard/DonationDetailsCard";


const DonationDetails = () => {

    const [datas,setDatas] = useState()

    const {id} = useParams()
   
    const data = useLoaderData()
    
    useEffect(()=>{

        const findDonationDetails = data?.find(datas=>datas.id == id)
            
        setDatas(findDonationDetails)

    },[id,data])


    return (
        <div>
        <div className="">
        <DonationDetailsCard datas={datas}></DonationDetailsCard>
        </div>
        </div>
    );
};

export default DonationDetails;