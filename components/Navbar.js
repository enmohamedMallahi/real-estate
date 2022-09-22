import React from 'react';
import Link from 'next/link';

const Navbar = () => {
	return (
		<nav className=' text-black text-lg'>
			<div className=' w-10/12 mx-auto py-4 flex items-center justify-between'>
				<Link href='/'>
					<a className='text-xl font-bold'>
						{/* <img width={260} src='/logo.png' alt='' /> */}
						EastDaleReality
					</a>
				</Link>
				<ul className='flex gap-4'>
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
						<a className='hover:underline transition duration-100' href='#'>
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
