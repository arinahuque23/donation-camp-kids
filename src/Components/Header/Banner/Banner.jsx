
const Banner = () => {
    
    

    
    return (
        <div className="">
            <div className=" relative h-[70vh] mt-0  ">
                <h2 className="bg-[url('/src/assets/bannerdonate.jpg')] opacity-5 bg-cover bg-no-repeat h-full bg-center bg-fixed ">  </h2>
                <div className="flex justify-center text-center text-black font-bold text-3xl">
                    <div className="absolute top-20 ">
                        <h2>I Grow By Helping People In Need</h2>
                        <div className="my-4">
                            
                        <input type="text" placeholder="Type here" className="input  font-thin  w-full max-w-xs" />
                        <button className="text-base bg-red-500 p-3  rounded-r-md text-white font-thin">Search</button>

                        </div>
                        <div>
                          
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div> 
    );
};

export default Banner;