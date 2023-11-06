import React, { useEffect } from 'react'
import lottie from 'lottie-web';
import animationData from "./uu.json"

const landing = () => {
    useEffect(() => {
        const anim = lottie.loadAnimation({
            container: document.getElementById('lottie-container'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: animationData, // Your animation data
        });
        return () => anim.destroy();
    }, [])
    return (
        <div>
            <div className='flex flex-col sm:flex-row'>
                <div className='w-[100%] h-[50vh] sm:h-full sm:w-[50%] flex justify-center items-center'>
                    <div id="lottie-container" style={{ width: '600px', height: '600px' }} />
                </div>
                <div className='w-[100%] sm:w-[50%] flex flex-col justify-center items-center'>
                    <p className='font-bold text-xl sm:text-5xl text-green-600'>Welcome to Java Tutorial</p>
                    <p className='font-bold text-lg sm:text-4xl mt-4 text-green-600'>Learn Java With Us !!</p>
                    <button className='px-5 py-1 text-white font-bold bg-green-700 rounded-md mt-10'>Download App</button>
                </div>

            </div>
        </div>
    )
}

export default landing
