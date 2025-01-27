import { StyledButton } from './button.styles';

const Button = ({ children, color, fontSize }) => {
	return (
		<StyledButton $colorButton={color} $fontSize={fontSize}>
			{children}
		</StyledButton>
	);
};

export default Button;
