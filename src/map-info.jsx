// Icons
import { FaInfoCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

// Hooks
import { useState } from "react";

const MapInfo = () => {
    
    const [isTooltipVisible, setTooltipVisible] = useState(false);
    const [isInfoVisible, setInfoVisible] = useState(false);
    
    const showToolTip = () => {
        !isInfoVisible && setTooltipVisible(true); // Show tooltip only when info is invisible
    }

    const hideToolTip = () => {
        setTooltipVisible(false);
    }

    const showInfo = () => {
        setInfoVisible(true);
        setTooltipVisible(false); // Hide tooltip when info is shown
    }
    
    const hideInfo = () => {
        setInfoVisible(false);
    }
        
    
    return ( 
        <div className='hidden lg:block lg:absolute lg:text-base 
            lg:z-50 lg:top-[21rem] lg:left-3 xl:top-[21.5rem]'>
          
            {/* Info-Icon */}
            <button 
                onMouseEnter={showToolTip}
                onMouseLeave={hideToolTip}
                onFocus={showToolTip}
                onBlur={hideToolTip}
                onClick={showInfo}
                
                aria-expanded={isInfoVisible}
                aria-labelledby="tooltip">
            
                <FaInfoCircle className='text-3xl text-blue-600' />
            </button>
          
          
            {/* Tooltip */}
            <div id="tooltip" role="tooltip" 
                aria-hidden={!isTooltipVisible}
                className={ `${isTooltipVisible ? 'show' : 'hide'} 
                absolute w-[11.5rem] py-2 px-3 bg-white rounded-md`}>
                    
                <p> Click for map control </p>
            </div>
            

            {/* Info-Modal */}
            <div role="dialog"
                aria-modal="true"
                aria-hidden={!isInfoVisible}
                aria-describedby="modal-desc"
                className={`${isInfoVisible ? 'show' : 'hide'} relative bg-white 
                mt-1 max-w-[20ch] rounded-md px-5 py-5`}>
                
                {/* Close Icon */}
                <button 
                    onClick={hideInfo}
                    aria-label="close"
                    className='absolute text-2xl text-[#ed4337] right-2 top-2'>
                    <IoMdCloseCircle />
                </button>
                
                <p id="modal-desc"> 
                    Hold the <code className="bg-blue-300">Shift</code> key and  
                    left-click twice (or double-tap) to    
                    <code  className="bg-blue-300"> ZoomOut</code> on the map. 
                </p>
                
            </div>
        </div>
    );
}
 
export default MapInfo;