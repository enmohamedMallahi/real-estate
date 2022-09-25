import { createClient } from 'contentful';
import Head from 'next/head';
import Image from 'next/image';

import Header from '../components/Header';
import Testimonials from '../components/Testimonials';
import { data } from '../data';

export default function Home({ properties }) {
	console.log(properties);
	// const [props, setProps] = useState([...data]);
	return (
		<>
			<Header />
			{/* Who Are We */}
			<main>
				<section className='max-w-4xl mx-auto p-4 my-8 text-center'>
					<h2 className='text-3xl font-bold'>Who Are We</h2>
					<div className='py-3'></div>
					<div className='flex flex-col sm:flex-row justify-center gap-4 md:gap-8'>
						<div className='border'>
							<img
								className='w-full md:h-60 object-cover hover:opacity-80 transition duration-100'
								src='/IMG_3450.webp'
								alt='Lee McWaters'
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
								className='w-full md:h-60 object-cover hover:opacity-80 transition duration-100'
								src='/Bonny1.webp'
								alt='Bonny Wilson'
							/>
							<ul className='p-4'>
								<li className='font-bold text-xl'>Bonny Wilson</li>
								<li> Broker/Owner ABR, SRS, MRP</li>
								<li>256-749-8772</li>
								<li>bonny@eastdalerealty.com</li>
							</ul>
						</div>
					</div>
				</section>
				{/* Properties For Sale */}
				<section className='max-w-4xl mx-auto p-4 my-8 text-center'>
					<h2 className='text-3xl font-bold py-4'>Properties For Sale</h2>
					<div className='grid md:grid-cols-3 gap-4'>
						{properties.map((property) => (
							<div
								key={property.sys.id}
								className='relative border shadow-md rounded'
							>
								<img
									className='w-full hover:opacity-80 transition duration-100'
									src={'https:' + property.fields.image.fields.file.url}
									alt={property.i}
								/>
								<div className='h-10 font-bold p-2 overflow-hidden text-ellipsis inline-block '>
									{property.fields.address}
								</div>
							</div>
						))}
					</div>
				</section>
				{/* WHAT PEOPLE SAY */}
				<section className='max-w-4xl mx-auto p-4 my-6'>
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
								<label htmlFor='fullname'>Full Name</label>
								<input
									id='fullname'
									className='w-full outline-0 p-2 text-slate-700'
									type='text'
								/>
							</div>
							<div className='p-2'></div>
							<div className='flex flex-col'>
								<label htmlFor='email'>Email Adress</label>
								<input
									id='email'
									className='w-full outline-0 p-2 text-slate-700'
									type='text'
								/>
							</div>
							<div className='p-2'></div>
							<div className='flex flex-col'>
								<label htmlFor='message'>Message</label>
								<textarea
									id='message'
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
								title='GoogleMaps'
								src='https://maps.google.com/maps?q=W2VW+6Q%20Alexander%20City,%20Alabama,%20USA&t=&z=13&ie=UTF8&iwloc=&output=embed'
								frameBorder='0'
								scrolling='no'
								marginHeight='0'
								marginWidth='0'
							></iframe>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}

export const getStaticProps = async () => {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
	});
	const res = await client.getEntries({ content_type: 'property' });
	console.log(res.items);
	return {
		props: {
			properties: res.items,
		},
	};
};
