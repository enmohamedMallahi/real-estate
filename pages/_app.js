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
		</>
	);
}

export default MyApp;
