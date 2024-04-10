import { React } from 'react';

const Circle = () => {
	const circleStyle = {
		width: '300px',
		height: '300px',
		backgroundColor: 'blue',
		borderRadius: '50%',
		border: '5px solid green',

	};

	return <div style={ circleStyle }/>;
};

export default Circle;
