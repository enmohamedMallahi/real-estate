import { createClient } from 'contentful';
import Head from 'next/head';
import Image from 'next/image';
import PropertyCard from '../components/PropertyCard';
// import { data } from '../data';

export default function Properties({ properties }) {
	// console.log(data);
	// const [props, setProps] = useState([...data]);

	return (
		<>
			{/* Properties For Sale */}
			<section className='max-w-4xl mx-auto p-4'>
				<h2 className='text-3xl font-bold text-center'>Properties For Sale</h2>
				<div className='p-2'></div>
				<div className='grid gap-3'>
					{properties.map((property) => (
						<PropertyCard key={property.address} property={property} />
					))}
				</div>
			</section>
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
