import React from 'react'
import Video from '../vids/Sequence_01.mp4'


const Body = () => {
    return (
        <div>
        <div className="relative flex items-center justify-center h-screen overflow-hidden">
                <video src={Video}  autoplay="{true}" loop muted className='absolute w-auto min-w-full min-h-max max-w-none'>
                
                </video>
                
            </div>
            
        </div>
        
    )
    
}



export default Body