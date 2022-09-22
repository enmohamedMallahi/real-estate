import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import PropertyCard from '../components/PropertyCard';
import { data } from '../data';

export default function Home() {
	console.log(data);
	const [props, setProps] = useState([...data]);

	return (
		<>
			{/* Properties For Sale */}
			<section className='w-10/12 my-8 mx-auto '>
				<h2 className='text-3xl h-14 font-bold my-4 text-center'>
					Properties For Sale
				</h2>
				<div className='grid gap-3'>
					{props.map((property) => (
						<PropertyCard key={property.address} property={property} />
					))}
				</div>
			</section>
		</>
	);
}
