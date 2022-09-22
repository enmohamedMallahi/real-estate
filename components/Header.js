import React from 'react';

const Header = () => {
	return (
		<header className='border-t'>
			<div className='w-10/12 py-4 mx-auto flex flex-col gap-4 md:flex-row items-center'>
				<div>
					<h1 className='text-5xl font-bold'>
						Buying, Selling, Rentals, Property Management
					</h1>
					<div className='py-2'></div>
					<p className='text-2xl'>
						Call today for all of your real estate needs!
					</p>
					<div className='py-2'></div>
					<a
						className='py-3 px-4 bg-black text-white rounded-md inline-block hover:opacity-80 transition duration-100'
						href='#'
					>
						Call Us
					</a>
				</div>
				<div>
					<img className='w-full block' src='/bg.jpg' alt='EastDaleRealty' />
					<div className='w-full h-full bg-black'></div>
				</div>
			</div>
		</header>
	);
};

export default Header;
