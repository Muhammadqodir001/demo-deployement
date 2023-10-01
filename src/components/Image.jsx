import React, {useState} from "react";
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

const Image =()=>{
    const slides = [
         {
            
            url: 'src/assets/Foods/Beshbarmoq.jpg',
            title: 'Beshbarmoq',
         },  
         {
            url: 'src/assets/Foods/Sushi.jpg',
            title: 'Sushi',
         },
         {
            url: 'src/assets/Foods/Plov.jpg',
            title:'Plov',
         },
         {
            url: 'src/assets/Foods/Salmon.webp',
            title: 'Salmon',
         },
];
   
 const [currentIndex, setCurrentIdex] = useState(0)
 const prevSlide = () => {
    
   const isFirst = currentIndex === 0;
   const newSlide = isFirst ? slides.length -1 : currentIndex-1;
   setCurrentIdex(newSlide);

} 
 const nextSlide = () => {
     const isLast = currentIndex === slides.length-1;
     const newIdex = isLast? 0 : currentIndex+1;
     setCurrentIdex(newIdex);

 };
  
 const goto = (slideIdex) =>{
   setCurrentIdex(slideIdex)

 };

 return(
   <div className="max-w-[1000px] h-[680px] w-full m-auto py-16 px-4 relative group">
         <div
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
          style={{ backgroundImage: `url(${slides[currentIndex].url})`}}>
         </div>

         <div className="absolute top-[50%] -translate-x-0 transl-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20
          text-white cursor-pointer ">
          <BsChevronCompactLeft onClick={prevSlide} size={30}/>
         </div>
         <div className="absolute top-[50%] -translate-x-0 transl-y-[-50%] right-5 text-2xl rounded-full p-2
          bg-black/20 text-white cursor-pointer ">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
         </div>
         <div className="flex top-4 justify-center py-2">
            {slides.map((slide, slideIdex) => (
                    <div className="text-2xl cursor-pointer" key={slideIdex} onClick={() => goto(slideIdex)}>   
                        <RxDotFilled/>
                   </div>  
               
            ))}

         </div>

    </div>
       
   );
};

export default Image;