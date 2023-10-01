import React from "react";

const Plan =()=>{ 
     return (
      <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
         <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
            <img className="row-span-3 object-cover w-full h-full p-2" src="src/assets/me.jpg" alt="/"/>
            <img className="row-span-2 object-cover w-full h-full p-2" src="src/assets/me2.jpg" alt="/"/>
            <img className="row-span-2 object-cover w-full h-full p-2" src="src/assets/me4.jpg" alt="/"/>
            <img className="row-span-3 object-cover w-full h-full p-2" src="src/assets/me5.jpg" alt="/"/>
            <img className="row-span-2 object-cover w-full h-full p-2" src="src/assets/me6.jpg" alt="/"/>
         </div>
            <div className="flex flex-col h-full justify-between">
                 <h3 className="text-5xl md:text-6xl font-bold"> Plan Your Next Trip </h3>
                 <p className="text-2xl py-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, magni consequuntur aliquam eveniet fugiat laborum totam illum quia doloremque voluptates explicabo omnis asperiores nisi numquam atque tempore. Reprehenderit, quae eveniet.</p>
                 <p clasName="pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ratione eos architecto iusto commodi exercitationem blanditiis repellendus itaque ducimus quae, explicabo, tempora consequuntur deserunt maxime suscipit alias iure veniam quibusdam.</p>
               <div>
                   <button className="border-black mr-4 hover:shadow-xl ">Learn More</button>
                   <button className="bg-black text-white border-black hover:shadow-xl">Book Your Trip</button>
             </div>
            </div>
         </div>

     );
};

export default Plan;


