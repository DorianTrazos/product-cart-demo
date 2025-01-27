import Button from './components/button/Button';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<div>
			<GlobalStyles />
			<Button color='red' fontSize='20px'>
				Click Me Red!
			</Button>
			<Button color='blue' fontSize='30px'>
				Click Me Blue!
			</Button>
			<Button color='green' fontSize='10px'>
				Click Me Blue!
			</Button>
		</div>
	);
};

export default App;
