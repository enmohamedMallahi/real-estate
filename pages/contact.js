import React from 'react'

const contact = () => {
  return (
    	<section id='contact' className='md:flex'>
				<div className='flex-grow flex flex-col justify-center items-center py-12 bg-black text-white'>
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
				<div className='flex-grow flex flex-col justify-center items-center py-12'>
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
  )
}

export default contact