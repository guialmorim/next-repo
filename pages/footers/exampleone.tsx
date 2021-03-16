import FooterOne from '@/components/footers/example-one';

const FooterExampleOne = () => (
	<>
		<div
			style={{
				height: '80vh',
				display: 'flex',
				alignContent: 'center',
				justifyContent: 'center',
			}}
		>
			<h2>{`Blank space just to show the footer :)`}</h2>
		</div>
		<FooterOne />
	</>
);

export default FooterExampleOne;
