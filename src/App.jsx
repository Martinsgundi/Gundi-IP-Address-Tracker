import SearchBox from './search-box';
import InfoBox from './info-box';
import Map from './Map';
import { useEffect, useState } from 'react';
import useFetch from './useFetch';

function App() {

  const [response, setResponse] = useState(null);

  // Invoke useFetch on component mount
  useEffect(() => {
    useFetch('', setResponse)
  }, []);
  
  // Invoke useFetch on form submit
  const handleApiSearch = (ip) => {
    useFetch(ip, setResponse);
  }

  
  return (
    <>
      <div className='text-xl md:text-[1.3rem] midLg:text-[1.5rem]  
      bg-black text-veryDarkGray font-medium font-Rubik'>

        {/* Blue background */}
        <div className="bg-[url('./assets/images/pattern-bg-mobile.png')] 
        bg-no-repeat bg-cover pt-6 px-[7vw] text-center xl:px-[11vw]
        midLg:bg-[url('./assets/images/pattern-bg-desktop.png')] ">


          <h1 className='text-2xl font-semibold mb-7'> 
            Gundi's <span className='text-white'> IP Address Tracker </span>
          </h1>

          <SearchBox handleApiSearch={handleApiSearch} />
          <InfoBox response={response} />
        </div>
        
        <Map response={response} /> 
        
      </div>
      
    </>
  )
}

export default App
