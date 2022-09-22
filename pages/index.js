import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

import Header from '../components/Header';
import Testimonials from '../components/Testimonials';
import { data } from '../data';

export default function Home() {
	console.log(data);
	const [props, setProps] = useState([...data]);

	return (
		<>
			<Header />
			{/* Who Are We */}
			<section className='w-10/12 my-8 mx-auto text-center'>
				<h2 className='text-3xl font-bold'>Who Are We</h2>
				<div className='py-3'></div>
				<div className='flex justify-center gap-8'>
					<div className='border'>
						<img
							className='w-full h-60 object-cover hover:opacity-80 transition duration-100'
							src='/IMG_3450.webp'
						/>
						<ul className='p-4'>
							<li className='font-bold text-xl'>Lee McWaters</li>
							<li>Sales Associate</li>
							<li>334 207-9724</li>
							<li>leemc@eastdalerealty.com</li>
						</ul>
					</div>
					<div className='border'>
						<img
							className='w-full h-60 object-cove hover:opacity-80 transition duration-100'
							src='/Bonny1.webp'
						/>
						<ul>
							<li className='font-bold text-xl'>Bonny Wilson</li>
							<li> Broker/Owner ABR, SRS, MRP</li>
							<li>256-749-8772</li>
							<li>bonny@eastdalerealty.com</li>
						</ul>
					</div>
				</div>
			</section>
			{/* Properties For Sale */}
			<section className='w-10/12 my-8 mx-auto text-center'>
				<h2 className='text-3xl font-bold py-4'>Properties For Sale</h2>
				<div className='grid md:grid-cols-3 gap-4'>
					{props.map((prop) => (
						<div className='relative border border-black rounded'>
							<img
								className='w-full hover:opacity-80 transition duration-100'
								src={prop.image}
								alt=''
							/>
							<div className='h-14 font-bold  p-2 overflow-hidden text-ellipsis inline-block '>
								{prop.address}
							</div>
						</div>
					))}
				</div>
			</section>
			{/* WHAT PEOPLE SAY */}
			<section className='w-10/12 my-6 mx-auto'>
				<h2 className='text-3xl font-bold text-center'>WHAT PEOPLE SAY</h2>
				<div className='py-3'></div>
				<Testimonials />
			</section>
			{/* Contact Us */}
			<section id='contact' className='md:flex'>
				<div className='flex-grow flex flex-col justify-center items-center py-8 bg-black text-white'>
					<h2 className='text-4xl p-4 '>Contact Us</h2>
					<form className='w-80'>
						<div className='flex flex-col'>
							<label htmlFor=''>Full Name</label>
							<input
								className='w-full outline-0 p-2 text-slate-700'
								type='text'
							/>
						</div>
						<div className='p-2'></div>
						<div className='flex flex-col'>
							<label htmlFor=''>Email Adress</label>
							<input
								className='w-full outline-0 p-2 text-slate-700'
								type='text'
							/>
						</div>
						<div className='p-2'></div>
						<div className='flex flex-col'>
							<label htmlFor=''>Message</label>
							<textarea
								className='w-full outline-0 p-2 text-slate-700'
								type='text'
							/>
						</div>
						<div className='p-2'></div>
						<button className='px-3 py-2 bg-green-400 rounded border-0 hover:opacity-80 transition duration-100	'>
							Send It
						</button>
					</form>
				</div>
				<div className='flex-grow flex flex-col justify-center items-center py-8'>
					<h2 className='text-4xl p-4'>Info</h2>

					<ul className='list-disc font-bold'>
						<li>
							<a href='mailto:leemc@eastdalerealty.com'>
								leemc@eastdalerealty.com
							</a>
						</li>
						<li>334 207-9724</li>
						<li>157 Main Street Alexander City, AL. 35010 </li>
					</ul>
					<div className='p-2'></div>

					<div className='relative w-3/4 overflow-hidden aspect-video'>
						<iframe
							className='absolute top-0 bottom-0 left-0 right-0 w-full h-full'
							id='gmap_canvas'
							src='https://maps.google.com/maps?q=W2VW+6Q%20Alexander%20City,%20Alabama,%20USA&t=&z=13&ie=UTF8&iwloc=&output=embed'
							frameborder='0'
							scrolling='no'
							marginheight='0'
							marginwidth='0'
						></iframe>
					</div>
				</div>
			</section>
			<footer className='text-center py-6 font-bold'>
				<p>&copy; All rights reserved to EastDaleReality.</p>
			</footer>
		</>
	);
}
