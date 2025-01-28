const Header = ({ setFilter }) => {
	return (
		<header>
			<button onClick={() => setFilter(0)}>Default</button>
			<button onClick={() => setFilter(1)}>Name</button>
			<button onClick={() => setFilter(2)}>Price</button>
		</header>
	);
};

export default Header;
