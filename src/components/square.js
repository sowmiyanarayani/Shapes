import { React } from 'react';

const square = ({ size, colour }) => {
	const squareStyle = {
		width: size,
		height: size,
		backgroundColor: colour,

	};

	return <div style={ squareStyle }/>;
};
