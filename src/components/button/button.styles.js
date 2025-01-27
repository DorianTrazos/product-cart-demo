import styled from 'styled-components';

const StyledButton = styled.button`
	font-size: ${({ $fontSize }) => $fontSize};
	background-color: ${({ $colorButton }) => $colorButton};

	@media screen and (width>768px) {
		background-color: #fff;
	}

	@media (hover: hover) {
		&:hover {
			background-color: red;
		}
	}
`;

export { StyledButton };
