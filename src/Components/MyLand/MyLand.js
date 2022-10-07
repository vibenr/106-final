import React from "react";
import Header from "../Header/Header";
import Card from "../MyLand/landCard";

export default function MyLand() {
    return (
        <>
            {/* <Header/> */}
            <div className='text-4xl text-black text-center font-semibold mt-4'>Lands</div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-8 mt-10 ml-4  '>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </>
    );
}


