import React from "react";

const Hero = () =>{
    return ( 
      <div className="w-full h-screen">
            <img className="top-0 left-0 w-full object-cover" src="/src/assets/me3.jpg" />
            <div className="bg-black/30 absolute top-0 left-0  "/>
            <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white ">
              <div className="md:left-[10%] max-x-[1100px] m-auto absolute p-4">
              <p>All inclusice</p>
              <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl ">Private Beachs & Getaways</h1>
              <p className="max-x-[600px] drop-shadow-2xl py-2 text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est debitis esse corrupti earum perspiciatis, dolorum explicabo enim odit, dolores harum cumque tenetur adipisci officia? Labore eaque aliquid nisi expedita vero!</p>
                <button class='bg-white text-black'>Reserve Now</button>
              </div>
            </div>
      
      </div> 
    );
}

export default Hero;