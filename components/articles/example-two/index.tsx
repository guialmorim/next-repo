import React from 'react';
import {
	genTitle,
	genMediumParagraph,
	genSmallParagraph,
	genImagePath,
} from '@/utils/generator';

const ArticleExampleTwo: React.FC = () => {
	const repeatTime = 4;

	return (
		<section className="example-two">
			<div className="container container--pall">
				<div className="example-two__intro">
					<h2>{genTitle()}</h2>
					<p>{genSmallParagraph()}</p>
				</div>
				<div className="example-two__grid">
					{[...Array(repeatTime)].map((_item, index) => (
						<div key={index} className="example-two__item">
							<div
								className="example-two__icon"
								style={{ backgroundImage: `url('${genImagePath()}')` }}
							></div>
							<div className="example-two__title">{genTitle()}</div>
							<div className="example-two__description">
								{genMediumParagraph()}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ArticleExampleTwo;
