import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Example() {
	const navigate = useNavigate();
	const [fname, setfname] = useState(" ");
	const [lname, setlname] = useState(" ");
	const [email, setemail] = useState(" ");
	const [state, setstate] = useState(" ");
	const [city, setcity] = useState(" ");
	const [pin, setpin] = useState(" ");
	const [phone, setphone] = useState(" ");
	const [aadhar, setaadhar] = useState(" ");
	const [pan, setpan] = useState(" ");
	const [address, setaddress] = useState(" ");

	const loginCred = async () => {
		const crediantials = {
			fname: fname,
			lname: lname,
			email: email,
			phone: phone,
			aadhar: aadhar,
			pan: pan,
			address: address,
			state: state,
			city: city,
			pin: pin,
		};
		const data = await axios.post("/login", crediantials);
		navigate("/forms");
		console.log(data);
	};

	return (
		<>
			<div className='text-center mt-12 font-bold text-3xl text-indigo-600'>
				User Registration
			</div>
			<div className='mt-10 sm:mt-0 flex justify-center'>
				<div className='md:grid md:grid-cols-2 md:gap-6 mt-8 justify-center'>
					<div className='mt-5 md:col-span-2 md:mt-0'>
						<form action='#' method='POST'>
							<div className='overflow-hidden shadow sm:rounded-md'>
								<div className='bg-white px-4 py-5 sm:p-6'>
									<div className='grid grid-cols-6 gap-6'>
										<div className='col-span-6 sm:col-span-3'>
											<label
												htmlFor='first-name'
												className='block text-sm text-left font-medium text-gray-700'>
												First name
											</label>
											<input
												type='text'
												name='first-name'
												id='first-name'
												autoComplete='given-name'
												className='mt-1 block w-full  rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
												onChange={(e) => {
													setfname(e.target.value);
												}}
											/>
										</div>

										<div className='col-span-6 sm:col-span-3'>
											<label
												htmlFor='last-name'
												className='block text-left text-sm font-medium text-gray-700'>
												Last name
											</label>
											<input
												type='text'
												name='last-name'
												id='last-name'
												autoComplete='family-name'
												className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
												onChange={(e) => {
													setlname(e.target.value);
												}}
											/>
										</div>
										{/* Email address */}
										<div className='col-span-6 sm:col-span-4'>
											<label
												htmlFor='email-address'
												className='block text-left text-sm font-medium text-gray-700'>
												Email address
											</label>
											<input
												type='text'
												name='email'
												id='email-address'
												autoComplete='email'
												className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
												onChange={(e) => {
													setemail(e.target.value);
												}}
											/>
										</div>
										{/* Phone No. */}
										<div className='col-span-6 sm:col-span-3 lg:col-span-2'>
											<label
												htmlFor='postal-code'
												className='block text-sm text-left font-medium text-gray-700'>
												Phone No.
											</label>
											<input
												type='text'
												name='postal-code'
												id='postal-code'
												autoComplete='postal-code'
												className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
												onChange={(e) => {
													setphone(e.target.value);
												}}
											/>
										</div>
										{/* Aadhar card no. */}
										<div className='col-span-6 sm:col-span-3 lg:col-span-2'>
											<label
												htmlFor='postal-code'
												className='block text-sm text-left font-medium text-gray-700'>
												Aadhar card no.
											</label>
											<input
												type='text'
												name='postal-code'
												id='postal-code'
												autoComplete='postal-code'
												className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
												onChange={(e) => {
													setaadhar(e.target.value);
												}}
											/>
										</div>
										{/* Pan card no. */}
										<div className='col-span-6 sm:col-span-3 lg:col-span-2'>
											<label
												htmlFor='postal-code'
												className='block text-sm text-left font-medium text-gray-700'>
												Pan card no.
											</label>
											<input
												type='text'
												name='postal-code'
												id='postal-code'
												autoComplete='postal-code'
												className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
												onChange={(e) => {
													setpan(e.target.value);
												}}
											/>
										</div>
										{/* address */}
										<div className='col-span-6'>
											<label
												htmlFor='street-address'
												className='block text-left text-sm font-medium text-gray-700'>
												Address
											</label>
											<div className='mt-1'>
												<textarea
													id='about'
													name='about'
													rows={3}
													className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
													defaultValue={""}
													onChange={(e) => {
														setaddress(e.target.value);
													}}
												/>
											</div>
										</div>
										{/* City */}
										<div className='col-span-6 sm:col-span-6 lg:col-span-2'>
											<label
												htmlFor='city'
												className='block text-left text-sm font-medium text-gray-700'>
												City
											</label>
											<input
												type='text'
												name='city'
												id='city'
												autoComplete='address-level2'
												className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
												onChange={(e) => {
													setcity(e.target.value);
												}}
											/>
										</div>
										{/* State / Province */}
										<div className='col-span-6 sm:col-span-3 lg:col-span-2'>
											<label
												htmlFor='region'
												className='block text-left text-sm font-medium text-gray-700'>
												State / Province
											</label>
											<input
												type='text'
												name='region'
												id='region'
												autoComplete='address-level1'
												className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
												onChange={(e) => {
													setstate(e.target.value);
												}}
											/>
										</div>
										{/* Zip postal code */}
										<div className='col-span-6 sm:col-span-3 lg:col-span-2'>
											<label
												htmlFor='postal-code'
												className='block text-left text-sm font-medium text-gray-700'>
												ZIP / Postal code
											</label>
											<input
												type='text'
												name='postal-code'
												id='postal-code'
												autoComplete='postal-code'
												className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
												onChange={(e) => {
													setpin(e.target.value);
												}}
											/>
										</div>
									</div>
								</div>
								<div className='bg-gray-50 px-4 py-3 text-center sm:px-6'>
									<button
										type='submit'
										className='inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
										onClick={loginCred}>
										Submit
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>

			<div className='hidden sm:block' aria-hidden='true'>
				<div className='py-5'>
					<div className='border-t border-gray-200' />
				</div>
			</div>
		</>
	);
}
