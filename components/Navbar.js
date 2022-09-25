import React from 'react';
import Link from 'next/link';

const Navbar = () => {
	return (
		<nav className='sticky top-0 z-10 bg-black text-white md:text-black md:bg-white border-b-gray-200'>
			<div className='max-w-4xl mx-auto p-4 flex items-center justify-between'>
				<Link href='/'>
					<a className='text-xl font-bold'>
						{/* <img width={260} src='/logo.png' alt='' /> */}
						EastDaleReality
					</a>
				</Link>
				<button
					id='mobile-open-button'
					class='text-3xl sm:hidden focus:outline-none'
				>
					&#9776;
				</button>
				<ul className='hidden md:flex gap-4 text-sm'>
					<li>
						<Link href='/properties'>
							<a className='hover:underline transition duration-100'>
								Properties
							</a>
						</Link>
					</li>
					<li>
						<a className='hover:underline transition duration-100' href='#'>
							About
						</a>
					</li>
					<li>
						<Link href='/contact'>
							<a className='hover:underline transition duration-100'>Contact</a>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
