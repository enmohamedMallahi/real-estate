import React from 'react';

const SkeletonDetails = () => {
	return (
		<section className='max-w-4xl mx-auto p-4'>
			<div className='flex flex-col md:flex-row gap-8'>
				<div className='md:w-1/3 h-64'>
					{/* <h3 className='text-2xl my-2 font-bold'>More Details</h3> */}
					<div className='w-full h-full border bg-gray-300' />
				</div>
				<div className='md:w-2/3'>
					<h2 className='text-2xl my-2 font-bold'>Property Details</h2>
					<p className='h-32 bg-gray-300'></p>
				</div>
			</div>
			<table className='my-8 table text-left w-full'>
				<tbody>
					<tr>
						<th>Address</th>
						<td>
							<p className='bg-gray-300 h-6 w-4/5'></p>
						</td>
					</tr>
					<tr>
						<th>Propert Type</th>
						<td>
							<p className='bg-gray-300 h-6 w-3/5'></p>
						</td>
					</tr>
					<tr>
						<th>Square Foot:</th>
						<td>
							<p className='bg-gray-300 h-6 w-2/5'></p>
						</td>
					</tr>
					<tr>
						<th>Bedrooms:</th>
						<td>
							<p className='bg-gray-300 h-6 w-1/5'></p>
						</td>
					</tr>
					<tr>
						<th>Bathrooms:</th>
						<td>
							<p className='bg-gray-300 h-6 w-1/5'></p>
						</td>
					</tr>
					<tr>
						<th>Square Foot:</th>
						<td>
							<p className='bg-gray-300 h-6 w-2/5'></p>
						</td>
					</tr>
					<tr>
						<th>Price</th>
						<td>
							<p className='bg-gray-300 h-6 w-3/5'></p>
						</td>
					</tr>
				</tbody>
			</table>
		</section>
	);
};

export default SkeletonDetails;
