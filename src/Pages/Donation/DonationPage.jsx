/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */


const DonationPage = ({datas}) => {
    const { id,price, picture,title_color, category,title,card_bg,category_bg}= datas || {};

    

    return (
        <div>
            

             <div className="card card-side bg-base-100 shadow-xl">
                     <figure><img className="h-[30vh]" src={picture} alt="Movie"/></figure>
                     <div style={{background:category_bg}} className="card-body">
                        <h2 style={{color:title_color}} className="card-title">{title}</h2>
                        <p className="font-mono">{category}</p>
                        <p style={{color:title_color}}>{price}</p>
                         <div className="card-actions justify-end">
                         <button style={{background:title_color}} className="btn border-gray-700 ">View Details</button>
                         </div>
                      </div>
                </div>
                <div>
                   
                </div>
        </div>
    );
};

export default DonationPage;