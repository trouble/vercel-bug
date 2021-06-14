import React from 'react';

const Page = (props) => {
	return (
		<h1>Test</h1>
	);
};

export default Page;

export const getStaticProps = async ({ params, locale }) => {
	console.log('test');

	return {
		props: {
			page: {},
		},
		revalidate: 2,
	};
};

export const getStaticPaths = async ({ locales }) => {
	return {
		paths: [
			{
				params: { slug: ['test'] },
			},
			{
				params: { slug: ['test-1'] },
			},
			{
				params: { slug: ['test-2'] },
			},
			{
				params: { slug: ['test-3'] },
			},
		],
		fallback: true,
	};
};
