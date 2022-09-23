import Navbar from '../components/Navbar';
import Head from 'next/head';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>EastDaleReality</title>
			</Head>
			<Navbar />
			<main>
				<Component {...pageProps} />
			</main>
			<footer className='text-center py-6 font-bold'>
				<p>&copy; All rights reserved to EastDaleReality.</p>
			</footer>
		</>
	);
}

export default MyApp;
