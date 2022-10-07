import React from "react";
import Header from "../client_dashboard/ClientDashboard";
import Card from "../admin_dashboard/userCard";

function admin() {
	return (
		<>
			<Header />
			<div className='text-4xl text-black text-center font-semibold mt-4'>User Verification</div>
			<div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-8 mt-10 ml-4  '>
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</>
	);
}

export default admin;
