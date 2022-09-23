import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import SkeletonDetails from '../../components/SkeletonDetails';

export default function Property({ property }) {
	// const router = useRouter();
	// const { id } = router.query;
	// // console.log(property);

	if (!property) return <SkeletonDetails />;

	return (
		<>
			{/* Properties For Sale */}
			<section className='w-10/12 my-8 mx-auto '>
				<div className='flex flex-col md:flex-row gap-8'>
					<div className='md:w-1/3'>
						{/* <h3 className='text-2xl my-2 font-bold'>More Details</h3> */}
						<img
							className='w-full'
							src={'https:' + property.fields.image.fields.file.url}
							alt=''
						/>
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
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
	});
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
