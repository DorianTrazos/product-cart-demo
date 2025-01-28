import { useState } from 'react';
import { PRODUCTS } from './constants/products';
import { GlobalStyles } from './styles/GlobalStyles';
import Header from './components/header/Header';

const App = () => {
	const [filter, setFilter] = useState(0);
	const [cart, setCart] = useState([]);
	const filteredProducts = filterProducts(PRODUCTS, filter);

	return (
		<>
			<GlobalStyles />
			<h1>Desserts</h1>
			<Header setFilter={setFilter} />
			<main>
				{filteredProducts.map(product => {
					const isInCart = cart.find(
						productInCart => productInCart.id === product.id
					);
					return (
						<div key={product.id}>
							<img src={product.imgMobile} alt={product.name + ' image'} />
							<h2>{product.name}</h2>
							<p>${product.price.toFixed(2)}</p>
							{!isInCart && (
								<button onClick={() => addToCart(cart, setCart, product)}>
									Add To Cart
								</button>
							)}
							{isInCart && (
								<p>
									<span>-</span>
									<span>{isInCart.quantity}</span>
									<span
										onClick={() => incrementQuantity(product.id, cart, setCart)}
									>
										+
									</span>
								</p>
							)}
						</div>
					);
				})}

				{cart.length === 0 && <h2>NO PRODUCTS</h2>}

				{cart.length > 0 &&
					cart.map(productInCart => (
						<div key={productInCart.id}>
							<h2>{productInCart.name}</h2>
							<p>Cantidad: {productInCart.quantity}</p>
						</div>
					))}
			</main>
		</>
	);
};

const filterProducts = (products, filter) => {
	const sortedProducts = [...products];
	if (filter === 0) return sortedProducts;
	if (filter === 1) {
		return sortedProducts.sort((a, b) =>
			a.name.localeCompare(b.name.localeCompare)
		);
	}

	if (filter === 2) {
		return sortedProducts.sort((a, b) => a.price - b.price);
	}
};

const addToCart = (cart, setCart, product) => {
	setCart([...cart, { ...product, quantity: 1 }]);
};

const incrementQuantity = (id, cart, setCart) => {
	const updatedCart = cart.map(product => {
		if (product.id === id) {
			product.quantity++;
		}
		return product;
	});

	setCart(updatedCart);
};

export default App;
