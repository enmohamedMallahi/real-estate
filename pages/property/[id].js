import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import client from '../../config/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import SkeletonDetails from '../../components/SkeletonDetails';

export default function Property({ property }) {
	if (!property) return <SkeletonDetails />;

	return (
		<>
			<Head>
				<title>{property.fields.address}</title>
				<meta name='description' content={property.fields.details} />
			</Head>
			{/* Properties For Sale */}
			<section className='max-w-4xl mx-auto p-4'>
				<div className='flex flex-col md:flex-row gap-8'>
					<div className='md:w-1/3'>
						{/* <h3 className='text-2xl my-2 font-bold'>More Details</h3> */}
						<div className='relative w-full h-64 object-cover'>
							<Image
								src={'https:' + property.fields.image.fields.file.url}
								alt=''
								layout='fill'
							/>
						</div>
						<img className='w-full rounded-md' />
					</div>
					<div className='md:w-2/3'>
						<h2 className='text-2xl my-2 font-bold'>Property Details</h2>
						<p>{documentToReactComponents(property.fields.details)}</p>
					</div>
				</div>
				<table className='my-8 table text-left w-full'>
					<tbody>
						<tr>
							<th>Address</th>
							<td>{property.fields.address}</td>
						</tr>
						<tr>
							<th>Propert Type</th>
							<td>Residential</td>
						</tr>
						<tr>
							<th>Square Foot:</th>
							<td>{property.fields.squareFoot}</td>
						</tr>
						<tr>
							<th>Bedrooms:</th>
							<td>{property.fields.bedrooms}</td>
						</tr>
						<tr>
							<th>Bathrooms:</th>
							<td>{property.fields.bathrooms}</td>
						</tr>
						<tr>
							<th>Square Foot:</th>
							<td>{property.fields.squareFoot}</td>
						</tr>
						<tr>
							<th>Price</th>
							<td>{property.fields.price}</td>
						</tr>
					</tbody>
				</table>
			</section>
		</>
	);
}

export const getStaticProps = async (context) => {
	const entry = await client.getEntry(context.params.id);
	// console.log(context);

	return {
		props: { property: entry },
	};
};

export const getStaticPaths = () => {
	return {
		paths: [],
		fallback: true,
	};
};
