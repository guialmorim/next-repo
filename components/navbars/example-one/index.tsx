import React, { useState } from 'react';

const NavbarExampleOne: React.FC = () => {
	const [mobileOpen, setMobileOpen] = useState(false);

	return (
		<header className={`example-one-header ${mobileOpen ? 'open' : ''}`}>
			<div
				className={`example-one-overlay has-fade ${
					mobileOpen ? 'fade-in' : 'fade-out'
				}`}
			></div>

			<nav className="container--pall flex flex-jc-sb flex-ai-c">
				<a href="#" className="example-one-header__logo">
					<img src="/images/navbars/exampleone/logo.png" alt="Ristorante" />
				</a>

				<a
					className="example-one-header__toggle hide-for-desktop"
					onClick={() => setMobileOpen(!mobileOpen)}
				>
					<span></span>
					<span></span>
					<span></span>
				</a>

				<div className="example-one-header__links hide-for-mobile">
					<a href="#">Home</a>
					<a href="#">About</a>
					<a href="#">Contact</a>
					<a href="#">Blog</a>
					<a href="#">Something</a>
				</div>

				<a href="#" className="button example-one-header__cta hide-for-mobile">
					Request Invite
				</a>
			</nav>

			<div
				className={`example-one-header__menu ${
					mobileOpen ? 'fade-in' : 'fade-out'
				}`}
			>
				<a href="#">Home</a>
				<a href="#">About</a>
				<a href="#">Contact</a>
				<a href="#">Something</a>
			</div>
		</header>
	);
};

export default NavbarExampleOne;
