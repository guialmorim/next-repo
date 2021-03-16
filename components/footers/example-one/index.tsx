import React from 'react';
import {
	AiFillFacebook,
	AiFillInstagram,
	//@ts-ignore
} from 'react-icons/ai';

const FooterExampleOne: React.FC = () => {
	return (
		<footer className="example-one-footer">
			<a href="#" className="footer__logo">
				<img src="/images/footers/exampleone/logo.png" width="50px" />
			</a>

			<div className="example-one-footer__social">
				<a href="#">
					<AiFillFacebook />
				</a>
				<a href="#">
					<AiFillInstagram />
				</a>
			</div>

			<div className="example-one-footer__links col1">
				<a href="#">About Us</a>
				<a href="#">Contact</a>
			</div>
			<div className="example-one-footer__links col2">
				<a href="#">Suport</a>
			</div>

			<div className="example-one-footer__cta">
				<a href="#" className="button">
					Request Invite
				</a>
				<div className="example-one-footer__copyright">
					&copy; Ristorante. All Rights Reserved.
				</div>
			</div>
		</footer>
	);
};

export default FooterExampleOne;
