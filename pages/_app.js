import '../styles/globals.css'
// import Layout from '../layout/layout'

import '/styles/nprogress.css';
import 'nprogress/nprogress.css';
import NProgress from 'nprogress';
import Router from 'next/router';


Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
	// console.log(Component)
	// color = will be tailwind class color or for custom write like [#969600] this
 	const Layout = Component.PageLayout;
	if (Layout)
			if (Component.displayName === "Home"){
				return(
			<Layout color='[#000000]'>
				<Component {...pageProps} />
			</Layout>
			);
			}
			else{
			return (
				<Layout color='[#000000]'>
				<Component {...pageProps} />
			</Layout>
			);
		}
	return <Component {...pageProps} />;
}

export default MyApp;