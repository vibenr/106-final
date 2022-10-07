import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Button, Center } from "@chakra-ui/react";

export default function AddLand() {
    return (
        <div className="mt-8">
            <div>
                <div className='text-center font-bold text-3xl text-indigo-600'>
                    Land Registration Form
                </div>
                <div className='mt-4 mb-4 sm:mt-0 w-1/2 mx-auto '>
                    <div className='md:grid md:grid-cols-2 md:gap-6 mt-8 justify-center'>
                        <div className='mt-5 md:col-span-2 md:mt-0'>
                            <form action='#' method='POST'>
                                <div className='overflow-hidden shadow sm:rounded-md'>
                                    <div className='bg-white px-4 py-5 sm:p-6'>
                                        <div className='p-4 w-full'>
                                            <div className='justify-items-center sm:col-span-3 mx-auto'>
                                                <label
                                                    htmlFor='first-name'
                                                    className='block text-sm text-left font-medium text-gray-700'>
                                                    Area in Square
                                                </label>
                                                <input
                                                    type='text'
                                                    name='first-name'
                                                    id='first-name'
                                                    autoComplete='given-name'
                                                    className='mt-4 mb-4 block w-full  rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                                                />
                                            </div>

                                            {/* Email address */}
                                            <div className='col-span-6 sm:col-span-4'>
                                                <label
                                                    htmlFor='email-address'
                                                    className='block text-left text-sm font-medium text-gray-700'>
                                                    Address
                                                </label>
                                                <textarea
                                                    type='text'
                                                    name='email-address'
                                                    id='email-address'
                                                    autoComplete='email'
                                                    className='mt-4 mb-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                                                    rows='4'
                                                    cols='50'
                                                />
                                            </div>
                                            {/* Phone No. */}
                                            {/* <div className='col-span-6 sm:col-span-3 lg:col-span-2'>
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
												className='mt-4 mb-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
											/>
										</div> */}
                                            {/* Aadhar card no. */}
                                            <div className=' sm:col-span-3 lg:col-span-2'>
                                                <label
                                                    htmlFor='postal-code'
                                                    className='block text-sm text-left font-medium text-gray-700'>
                                                    Land Price
                                                </label>
                                                <input
                                                    type='text'
                                                    name='postal-code'
                                                    id='postal-code'
                                                    autoComplete='postal-code'
                                                    className='mt-4 mb-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                                                />
                                            </div>
                                            {/* Pan card no. */}
                                            <div className='col-span-6 sm:col-span-3 lg:col-span-2'>
                                                <label
                                                    htmlFor='postal-code'
                                                    className='block text-sm text-left font-medium text-gray-700'>
                                                    Survey No.
                                                </label>
                                                <input
                                                    type='text'
                                                    name='postal-code'
                                                    id='postal-code'
                                                    autoComplete='postal-code'
                                                    className='mt-4 mb-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                                                />
                                            </div>
                                            {/* address */}
                                            <div className='col-span-6'>
                                                <label
                                                    htmlFor='street-address'
                                                    className='block text-left text-sm font-medium text-gray-700'>
                                                    Coordinates of Land
                                                </label>
                                                <div className='mt-4 mb-4'>
                                                    <textarea
                                                        id='about'
                                                        name='about'
                                                        rows='12'
                                                        cols='50'
                                                        className='mt-4 mb-4 p-1 h-auto block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                                                        placeholder='12.695732116699219,45.61956059488118'
                                                        defaultValue={""}
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label
                                                    class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                                                    for='file_input'>
                                                    Upload file
                                                </label>
                                                <input
                                                    class='block w-full text-sm p-2  text-gray-900 bg-blue-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-blue-700 dark:border-gray-600 dark:placeholder-gray-400'
                                                    aria-describedby='file_input_help'
                                                    id='file_input'
                                                    type='file'
                                                />
                                                <p
                                                    class='mt-1 text-sm text-gray-500 dark:text-gray-300'
                                                    id='file_input_help'>
                                                    SVG, PNG, JPG or GIF (MAX. 800x400px).
                                                </p>
                                            </div>

                                            {/* City */}
                                            {/* <div className='col-span-6 sm:col-span-6 lg:col-span-2'>
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
													className='mt-4 mb-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
												/>
											</div> */}
                                            {/* State / Province */}
                                            {/* <div className='col-span-6 sm:col-span-3 lg:col-span-2'>
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
													className='mt-4 mb-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
												/>
											</div> */}
                                            {/* Zip postal code */}
                                            {/* <div className='col-span-6 sm:col-span-3 lg:col-span-2'>
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
													className='mt-4 mb-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
												/>
											</div> */}
                                        </div>
                                    </div>
                                    <div className='bg-gray-50 px-4 py-3 text-center sm:px-6'>
                                        <button
                                            type='submit'
                                            className='inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}