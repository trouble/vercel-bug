import React from 'react';

const TestApp = (appProps) => {
	const { Component, pageProps } = appProps;

	return (
		<div>
			<Component {...pageProps} />
		</div>
	);
};

TestApp.getInitialProps = async () => {
	console.log('test 2');
	return {
		test: 'hello'
	}
}

export default TestApp;
