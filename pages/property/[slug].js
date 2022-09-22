import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { data } from '../../data';

export default function Property({ property }) {
	const router = useRouter();
	const { slug } = router.query;
	// console.log(property);

	if (!property) return 'lofing';

	return (
		<>
			{/* Properties For Sale */}
			<section className='w-10/12 my-8 mx-auto '>
				<div className='flex flex-col md:flex-row gap-8'>
					<div className='md:w-1/3'>
						{/* <h3 className='text-2xl my-2 font-bold'>More Details</h3> */}
						<img className='w-full' src={property.image} alt='' />
					</div>
					<div className='md:w-2/3'>
						<h2 className='text-2xl my-2 font-bold'>Property Details</h2>
						<p>{property.details}</p>
					</div>
				</div>
				<table className='my-8 table text-left w-full'>
					<tbody>
						<tr>
							<th>Address</th>
							<td>{property.address}</td>
						</tr>
						<tr>
							<th>Propert Type</th>
							<td>{property.propertyType}</td>
						</tr>
						<tr>
							<th>Square Foot:</th>
							<td>{property.squareFoot}</td>
						</tr>
						<tr>
							<th>Price</th>
							<td>{property.price}</td>
						</tr>
					</tbody>
				</table>
			</section>
		</>
	);
}

export const getStaticProps = (context) => {
	console.log(context);
	return {
		props: { property: data[context.params.slug] },
	};
};

export const getStaticPaths = () => {
	return {
		paths: [],
		fallback: true,
	};
};
