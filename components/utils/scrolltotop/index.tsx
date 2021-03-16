import React, { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

const ScrollArrow: React.FC = () => {
	const [showScroll, setShowScroll] = useState(false);

	const checkScrollTop = () => {
		if (!showScroll && window.pageYOffset > 400) {
			setShowScroll(true);
		} else if (showScroll && window.pageYOffset <= 400) {
			setShowScroll(false);
		}
	};

	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	window.addEventListener('scroll', checkScrollTop);

	return (
		<FaArrowCircleUp
			style={{ opacity: '0.5' }}
			className={`scrollTop ${showScroll ? 'fade-in' : 'fade-out'}`}
			onClick={scrollTop}
		/>
	);
};

export default ScrollArrow;
