import { useState } from 'react';
import { FaTriangleExclamation } from "react-icons/fa6";


// Images
import arrowIcon from './assets/images/icon-arrow.svg';

const SearchBox = ( { handleApiSearch } ) => {

    const [ip, setIp] = useState('');  // Input value
    const [isValid, setIsValid] = useState(true);

    // Ip Validation threshold
    const ipRegex = /^(25[0-5]|2[0-4]\d|1\d{2}|\d{1,2})\.(25[0-5]|2[0-4]\d|1\d{2}|\d{1,2})\.(25[0-5]|2[0-4]\d|1\d{2}|\d{1,2})\.(25[0-5]|2[0-4]\d|1\d{2}|\d{1,2})$/;

    const handleChange = (e) => {
        const value = e.target.value;
        setIp(value);
        setIsValid(ipRegex.test(value)); // Checks input valididty
    };

    
    // Checks if the inputField is empty
    const isEmpty = (value) => {
        return value.trim() === '';
    };

    
    const handleSubmit = (e) => {
        e.preventDefault();
        isValid && handleApiSearch(ip);
        isValid && setIp(''); // clears form
    };
    

    return ( 
        <>
            <form 
             onSubmit={handleSubmit}
             className='flex justify-center text-lg font-normal'>

                <input type="text" 
                    className='rounded-s-2xl px-3 py-4 indent-2 outline-none w-full max-w-[400px] lg:max-w-[490px]'
                    placeholder="Search for any IP address or domain"
                    value={ip}
                    onChange={handleChange}
                />

                <button
                    className='px-6 duration-500 bg-black rounded-e-2xl hover:bg-veryDarkGray hover:transition-colors'>
                    <img src={arrowIcon} alt="Image of a 'greater than' sign in math" />
                </button>
            </form>
            
            {/* Error message for form validation */}
            { !isValid && !isEmpty(ip) 
                && 
                <div className='flex text-[#ed4337] gap-3 px-4 mx-auto mt-2 bg-white rounded-lg w-fit'>
                    <FaTriangleExclamation className='self-center' />
                    
                    <p className='text-lg midLg:text-xl'>
                        Invalid IP address format
                    </p> 
                </div>
            }
        </>
    );
}
    
export default SearchBox;