import '../styles/globals.css'
// import Layout from '../layout/layout'
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