import { useState } from 'react';

const testimonials = [
	{
		name: 'Jeff',
		paragraph:
			'I decided to invest in rental property. I contacted Bonny Wilson at East Dale Realty and explained to her what I was looking for. Bonny worked tirelessly to find two properties that suited my needs. Now she manages the properties making sure my renters and rentals are taken care of. Bonny handles business in a professional manner, taking a huge burden off me. This has proven to be one of the best business decisions I have ever made. If you are looking for a realtor that will take care of you….look no further. Bonny is the one you need.',
	},
	{
		name: 'Jerri',
		paragraph:
			'East Dale Realty did a wonderful job helping me find the perfect house. Bonny was kind and patient with me as I explained all my wants and needs. She continued to focus on me the buyer as we looked at different houses. After finding the right house, she once again worked for me through the negotiation process and got the house for exactly the right price. We are now happy in our new house. Thank you East Dale Realty and Bonny Wilson!!',
	},
	{
		name: 'Angi and Tim',
		paragraph:
			"Tim and I just wanted to thank you for all of your help with the purchase of our home. You were so helpful throughout the entire process and very easy to work with. Returning every call in a timely manner means so much these days. Honesty and your sweet personality made us feel at ease and for that we can’t thank you enough.",
	},
	{
		name: 'Jennifer',
		paragraph:
			"Mrs. Wilson and East Dale Realty sold me my first home. She new exactly what I wanted and found the perfect home quickly. I don’t know what I would have done without her. Now, our family has grown and we need a bigger home. I have my home listed with East Dale and know they will do the best job to get it sold. Thanks East Dale. You're great!!!!"
	},
	{
		name: 'Justin & Tabitha',
		paragraph:"Thank you so much for making our first time home buying process easy. The first day we came into your office we were clueless about what we wanted or needed in our first home. You were always willing to share your knowledge and answer any questions we had. It put us at ease to know you were just a phone call away. It was truly a blessing to have your expertise of the business through the entire process. Thank you for helping us find the perfect home to grow our family."
	},
];

const Testimonials = () => {
	return (
		<div>
			{testimonials.map(testimonial => (
				<>
				<div class=' p-4 text-gray-800 bg-white border rounded-md shadow-md shadow-cyan-700/50'>
				<div class='mb-2'>
					<div class='h-3 text-3xl text-left text-green-500'>“</div>
					<p class='px-4 text-center text-gray-500'>
						{testimonial.paragraph}
					</p>
					<div class='h-3 text-3xl text-right text-green-500'>”</div>
					<div class='text-center'>
						<h5 class='font-bold text-green-500'>{testimonial.name}</h5>
					</div>
				</div>
			</div>
			<div className="py-3"></div>
			</>
			))}
		</div>
	);
};

export default Testimonials;
