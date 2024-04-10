import { React } from 'react';

const Rectangle = () => {
	const rectangleStyle = {
		width: '500px',
		height: '200px',
		backgroundColor: 'red',
		border: '5px solid blue',
	};

	return <div style={ rectangleStyle }/>;
};

export default Rectangle;
