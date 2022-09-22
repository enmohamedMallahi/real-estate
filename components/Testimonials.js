import { useState } from 'react';

const tests = [
	{
		name: 'John',
		paragraph:
			'	Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime eiusducimus voluptas autem facilis laborum fugit repudiandae incidunt animinostrum',
	},
	{
		name: 'Jane',
		paragraph:
			'	Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quos voluptas accusantium aut dolorum unde, explicabo, corrupti aliquid ratione non hic, fuga laudantium.',
	},
	{
		name: 'Mark',
		paragraph:
			'	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas temporibus possimus velit, ullam in voluptatibus laboriosam quidem earum veritatis suscipit qui ipsum consequatur unde dicta necessitatibus nam nobis reprehenderit excepturi. Est corporis molestiae quaerat.',
	},
];

const Testimonials = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const nextSlide = () => {
		if (currentSlide === tests.length - 1) {
			setCurrentSlide(0);
		} else {
			setCurrentSlide((prev) => prev + 1);
		}
	};

	const prevSlide = () => {
		if (currentSlide === 0) {
			setCurrentSlide(tests.length - 1);
		} else {
			setCurrentSlide((prev) => prev - 1);
		}
	};

	return (
		<div className='h-64 grid place-content-center p-4 text-center bg-black text-white'>
			{tests.map((test, index) => {
				if (index === currentSlide) {
					return (
						<div>
							<h3 className='font-bold text-xl'>{test.name}</h3>
							<p>{test.paragraph}</p>
						</div>
					);
				}
			})}
			<div className='flex justify-center gap-2'>
				<button
					onClick={prevSlide}
					className='py-3 px-4 bg-green-400 text-white rounded-md inline-block hover:opacity-80 transition duration-100'
				>
					Prev
				</button>
				<button
					onClick={nextSlide}
					className='py-3 px-4 bg-green-400 text-white rounded-md inline-block hover:opacity-80 transition duration-100'
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default Testimonials;
