import { React } from 'react';
import './App.scss';
import Square from './components/Square';
import Rectangle from './components/Rectangle';
import Circle from './components/Circle';

const App = () =>
	<div className="App"> <center>
		<Square/>
		<Rectangle/>
		<div className="square"> </div>
		<Circle/>
		<button>clickMe</button>
	</center>
	</div>;

export default App;
