/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import './DonationCard'

const DonatesAllCard = ({datas}) => {

    const {id,picture,title,title_color, category,category_bg,card_bg}= datas ||{}


    return (
        <div>
            
            <div className="flex ">

        
              <div className="card w-96  border-3 shadow-sm h-84 ">
                
                <Link to={`/data/${id}`}> 
                 <figure><img className="h-64" src={picture}  /></figure>
                  <div style={{background:category_bg}} className="card-bg pl-4 pt-2 pb-10 ">
                  <button style={{background:title_color, color:card_bg} } className="p-2 rounded-md btn-active  ">{title}</button>
                    <p style={{color:card_bg}}>{category}</p>
                    
                 </div>

                 </Link>


                </div>
                
            </div>
      </div>
    );
};

export default DonatesAllCard;