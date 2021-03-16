import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import NProgress from 'nprogress';
import Router from 'next/router';

import '@/styles/css/nprogress.css';
import '@/styles/scss/style.scss';

const ScrollToTop: any = dynamic(
	() => {
		return import('@/components/utils/scrolltotop');
	},
	{ loading: () => null, ssr: false }
);

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Component {...pageProps} />
			<ScrollToTop />
		</>
	);
}

export default App;
