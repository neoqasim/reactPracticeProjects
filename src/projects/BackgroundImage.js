import React, { useState } from 'react';

const BackgroundImage = () => {


    const images = [
        "https://img.freepik.com/free-photo/autumn-leaf-falling-revealing-intricate-leaf-vein-generated-by-ai_188544-9869.jpg",
        "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
        "https://cdn.pixabay.com/photo/2018/09/23/18/30/drop-3698073_640.jpg",
        "https://wallpapers.com/images/featured/hd-car-o3yvt8dloqz5cvm4.jpg"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const bgChanger = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);

    };


    return (
        <div className='container  h-max m-auto py-3 px-8 bg-white shadow-lg shadow-gray-400 '>
            <div className='flex flex-col shadow-xl  border border-white '>
                <img src={images[currentIndex]} alt='Background' className='max-w-full w-full h-[50rem] object-cover' />
                <button onClick={bgChanger} className='px-8 py-3 text-2xl text-white capitalize rounded-md font-bold bg-purple-700 w-max mx-auto my-8'>
                    Change URL
                </button>
            </div>
        </div>
    );
};

export default BackgroundImage;
