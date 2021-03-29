import React from 'react';

const NavbarExampleTwo: React.FC = () => {
	const [mobileOpen, setMobileOpen] = React.useState(false);
	return (
		<nav className="example-two-nav">
			<div className="example-two-nav__logo">
				<h4>Awesome Navbar</h4>
			</div>
			<ul
				className={`example-two-nav__links ${
					mobileOpen ? 'active' : ''
				} hide-for-mobile`}
			>
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#">About</a>
				</li>
				<li>
					<a href="#">Work</a>
				</li>
				<li>
					<a href="#">Projects</a>
				</li>
			</ul>
			<div
				className={`example-two-nav__burger ${
					mobileOpen ? 'toggle' : ''
				} hide-for-desktop`}
				onClick={() => setMobileOpen(!mobileOpen)}
			>
				<div className="line"></div>
				<div className="line"></div>
				<div className="line"></div>
			</div>
		</nav>
	);
};

export default NavbarExampleTwo;
