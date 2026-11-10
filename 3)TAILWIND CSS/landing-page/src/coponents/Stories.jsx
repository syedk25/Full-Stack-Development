import React from "react";

function Stories() {
  return (
    <div className="container mx-auto mt-12">
      <div className="text-center">
        <h1>Recent Updates</h1>
        <h1 className="text-5xl">Featured Stories</h1>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-14 md:gap-4 mx-10">
        <div className="hover:shadow-2xl bg-gray-200 rounded-2xl text-center">
            <img className="h-60 w-full mt-4" src="https://picsum.photos/200" alt="" />
            <h1 className="mx-4 text-2xl text-indigo-500">Google Rankings</h1>
            <p className="font-thin mt-4">Make it connect with every client worlwide</p>
            <a href="" className="text-indigo-500 font-bold">Read More</a>
        </div> 
        <div className="hover:shadow-2xl bg-gray-200 rounded-2xl truncate text-center">
            <img className=" h-60 w-full mt-4" src="https://picsum.photos/200" alt="" />
            <h1 className="mx-4 text-2xl text-indigo-500">Communication</h1>
            <p className="font-thin mt-4">Best communication for the business</p>
            <a href="" className="text-indigo-500 font-bold">Read More</a>
        </div> 
        <div className="hover:shadow-2xl bg-gray-200 rounded-2xl text-center">
            <img className="h-60 w-full mt-4" src="https://picsum.photos/200" alt="" />
            <h1 className="mx-4 text-2xl text-indigo-500">Remote Working</h1>
            <p className="font-thin mt-4">Remote connectivity for consintancy</p>
            <a href="" className="text-indigo-500 font-bold">Read More</a>
        </div> 
      </div>
    </div>
  );
}

export default Stories;
