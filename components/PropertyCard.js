import Link from 'next/link';

const PropertyCard = ({ property }) => {
	return (
		<article className='relative border'>
			{/* Header */}
			<header className='p-3 bg-black text-white text-center'>
				<h2 className=' '>{property.address}</h2>
			</header>
			{/* Body */}
			<div className='flex flex-col md:flex-row'>
				{/* Image */}
				<img
					className='w-full md:w-1/3 hover:opacity-80 transition duration-100'
					src={property.image}
					alt=''
				/>
				{/* Details */}
				<div className='p-4'>
					<ul>
						<li>
							<label className='inline-block w-40 font-bold' htmlFor=''>
								Property Type:
							</label>
							<p className='ml-4 inline-block'>{property.propertyType}</p>
						</li>
						<li>
							<label className='inline-block w-40 font-bold' htmlFor=''>
								Sale/Rent:
							</label>
							<p className='ml-4 inline-block'>{property.status}</p>
						</li>
						<li>
							<label className='inline-block w-40 font-bold' htmlFor=''>
								Bedrooms:
							</label>
							<p className='ml-4 inline-block'>{property.bedrooms}</p>
						</li>
						<li>
							<label className='inline-block w-40 font-bold' htmlFor=''>
								Bathrooms:
							</label>
							<p className='ml-4 inline-block'>{property.bathrooms}</p>
						</li>
						<li>
							<label className='inline-block w-40 font-bold' htmlFor=''>
								Square Foot:
							</label>
							<p className='ml-4 inline-block'>{property.squareFoot}</p>
						</li>
						<li>
							<label className='inline-block w-40 font-bold' htmlFor=''>
								Price:
							</label>
							<p className='ml-4 inline-block'>{property.price} $</p>
						</li>
					</ul>

					{/* Actions */}
					<div className='my-4'>
						<a
							className='py-3 px-4 bg-black border-2 text-white font-bold rounded-md inline-block hover: hover: transition duration-100'
							href='#'
						>
							{property.price} $
						</a>
						<Link href='/property/1'>
							<a className='py-3 px-4 border-2 font-bold rounded-md inline-block hover:bg-black hover:text-white transition duration-100'>
								See Full Details
							</a>
						</Link>
					</div>
				</div>
				<div></div>
			</div>
		</article>
	);
};

export default PropertyCard;
