import React from 'react';
import './BannerItem.css';

const BannerItem = ({ slide }) => {
    const { image, prev, next, id } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-image'>
                <img src={image} className="w-full rounded-xl" alt="" />
            </div>
            <div className="carousel-info absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                <h1 className='text-xl text-white font-bold md:text-4xl lg:text-6xl'>
                    Affordable <br />
                    Price For Car <br />
                    Servicing
                </h1>
            </div>
            <div className="absolute flex justify-end w-2/5 transform -translate-y-1/2 left-24 top-1/2">
                <p className='text-xl text-white hidden lg:block md:block'>
                    There are many variations of passages of  available, but the majority have suffered alteration in some form
                </p>
            </div>
            <div className="absolute flex justify-start w-2/5 transform -translate-y-1/2 left-24 top-3/4">
                <button className="btn border-0 bg-orange-600 hover:bg-orange-600 normal-case mr-5">Discover More</button>
                <button className="btn btn-outline btn-warning hidden md:block">Latest Project</button>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5 hover:bg-amber-500 border-0">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle hover:bg-amber-500 border-0">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;