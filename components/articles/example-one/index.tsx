import {
	genImagePath,
	genMediumParagraph,
	genName,
	genTitle,
} from '@/utils/generator';
import React from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const ArticleExampleOne: React.FC = () => {
	const repeatTime = 4;

	return (
		<section className="example-one-articles">
			<div className="container container--pall">
				<div className="example-one__section__title">
					<h2>Our Hightlights</h2>
				</div>
				<div className="example-one__grid">
					{[...Array(repeatTime)].map((_item, index) => (
						<div key={index} className="example-one__item">
							<div
								className="example-one__image"
								style={{ backgroundImage: `url('${genImagePath()}')` }}
							></div>
							<div className="example-one__text">
								<div className="example-one__author flex flex-jc-sb flex-ai-c">
									<div className="example-one__author__main">
										{index % 2 === 0 ? <FaRegHeart /> : <FaHeart />}
										<span>{genName()}</span>
									</div>
									<div className="example-one__author__secondary">
										<span>an external link</span>
										<FiExternalLink />
									</div>
								</div>
								<div className="example-one__title">{genTitle()}</div>
								<div className="example-one__description">
									{genMediumParagraph()}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ArticleExampleOne;
