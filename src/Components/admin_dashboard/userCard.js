import React from "react";

function userCard() {
	return (
		<>
			<div className='max-w-sm rounded overflow-hidden shadow-lg p-4 border-2 border-black rounded-md'>
				<div class='px-6 py-4'>
					<div class='font-bold text-xl mb-2'>User 1</div>
					<div class='font-bold text-sm mb-2 text-blue-600'>
						Wallet ID:1J7mdg5rbQyUHENYdx39WVWK7fsLpEoXZy{" "}
					</div>
					<div>
						<button className='btn text-white bg-indigo-600 p-2 rounded-md text-lg hover:bg-indigo-400 '>Verify</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default userCard;
