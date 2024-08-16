const InfoBox = ( {response} ) => {
    
    return ( 
        <>
            {
                response &&
                
                <div className="bg-white relative z-10 grid gap-4 rounded-2xl w-full mt-6 py-4 
                mb-[-20rem] vSm:grid-cols-2 vSm:mb-[-11rem] vSm:gap-y-7 max-w-[455px] midLg:gap-y-4 
                mx-auto midLg:max-w-full midLg:grid-cols-4 min-[900px]:mb-[-6rem] min-[991px]:mb-[-5rem]
                midLg:gap-x-0 midLg:px-8 min-[1080px]:mb-[-6.1rem] lgXl:py-7 lgXl:text-left">
                    
                    <div className= "midLg:w-fit">
                        <h2 className="responseHeader"> IP ADDRESS </h2>
                        <span> {response.ip} </span>
                    </div>

                    <div className= "responseDiv">
                        <h2 className="responseHeader"> LOCATION </h2>
                        <span> {response.location}, {response.country_code} </span>
                    </div>

                    <div className= "w-auto midLg:pl-8 midLg:border-l-2">
                        <h2 className="responseHeader"> ZIPCODE </h2>
                        <span> {response.zipcode} </span>
                    </div>

                    <div className= "grid responseDiv justify-self-center">
                        <h2 className="responseHeader"> COUNTRY FLAG </h2>
                        <span className='justify-self-center'>
                            <img src={response.country_flag} 
                            alt={`${response.country_name} Flag`} />
                        </span>
                    </div>
                    
                    <div className= "midLg:w-fit">
                        <h2 className="responseHeader"> COUNTRY CAPITAL </h2>
                        <span> {response.country_capital} </span>
                    </div>
                    
                    <div className= "responseDiv">
                        <h2 className="responseHeader"> ISP </h2>
                        <span> {response.isp} </span>
                    </div>
                    
                    <div className= "responseDiv">
                        <h2 className="responseHeader"> CURRENCY </h2>
                        <span> {response.currency} </span>
                    </div>
                    
                    <div className= "text-center responseDiv justify-self-center">
                        <h2 className="responseHeader"> CALLING CODE </h2>
                        <span> {response.calling_code} </span>
                    </div>
                </div>
            }
            
        </>
    );
}
 
export default InfoBox;