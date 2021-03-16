import { loremIpsum, name, fullname } from 'react-lorem-ipsum';

const paragraph = loremIpsum({
	p: 1,
	random: true,
	startWithLoremIpsum: false,
})[0];

export const genName = () => name();

export const genFullName = () => fullname();

export const genTitle = () => paragraph.substring(0, 30);

export const genSmallParagraph = () => paragraph.substring(0, 100);

export const genMediumParagraph = () => paragraph.substring(0, 200);

export const genLargeParagraph = () => paragraph;

export const genImagePath = () => {
	const min = 1;
	const max = 2;
	const imageNumber = Math.floor(Math.random() * (max - min + 1) + min);
	return `/images/${imageNumber}.jpg`;
};

export const genUserImageProfilePath = () => {
	const min = 1;
	const max = 4;
	const imageNumber = Math.floor(Math.random() * (max - min + 1) + min);
	return `/images/users/${imageNumber}.png`;
};

export const genUserList = (numberOfUsers: number) => {
	return [...Array(numberOfUsers)].map((i) => {
		return {
			id: i,
			name: genName(),
			fullName: genFullName(),
		};
	});
};
