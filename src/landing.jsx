import React from 'react'
// import apkFile from "./assets/app-debug.apk";
import d from "./w.png"
const landing = () => {

    // const handleDownload = () => {
    //     const link = document.createElement("a");
    //     link.href = apkFile;
    //     link.download = "app-debug.apk";
    //     link.click();
    // };
    return (
        <div>
            <div className='flex flex-col sm:flex-row'>
                <div className='w-[100%] sm:w-[50%] flex justify-center items-center sm:h-[71vh] h-[52vh] '>
                    {/* <div id="lottie-container" style={{ width: '600px', height: '600px' }} /> */}
                    <img src={d} alt='dd' />
                </div>
                <div className='w-[100%] sm:w-[50%] flex flex-col justify-center items-center'>
                    <p className='font-bold text-xl sm:text-5xl text-green-600'>Welcome to Java Tutorial</p>
                    <p className='font-bold text-lg sm:text-4xl mt-4 text-green-600'>Learn Java With Us !!</p>
                    <a
                        href="app-debug.apk"
                        download="app-debug.apk"
                    ><button  className='px-5 py-1 text-white font-bold bg-green-700 rounded-md mt-10'>Download App</button>
                    </a>
                </div>

            </div>
        </div>
    )
}

export default landing
