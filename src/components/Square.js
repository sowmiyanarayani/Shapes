import { React } from 'react';

const Square = () => {
	const squareStyle = {
		width: '100px',
		height: '100px',
		backgroundColor: 'red',
		border: '5px solid green',

	};

	return <div style={ squareStyle }/>;
};

export default Square;
