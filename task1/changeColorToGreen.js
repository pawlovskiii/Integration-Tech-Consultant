// Znajdź przycisk "Dodaj do koszyka" na stronie
const addToCartButton = document.querySelector('.add-cart');

// Sprawdź, czy w pamięci przeglądarki jest zapisana informacja o zmienionym kolorze przycisku
const addToCartButtonColor = localStorage.getItem('addToCartButtonColor');

// Jeśli tak, to ustaw taki kolor przycisku
if (addToCartButtonColor) {
	addToCartButton.style.backgroundColor = addToCartButtonColor;
} else {
	// Jeśli nie, to zmień kolor przycisku na zielony i zapisz informację w pamięci przeglądarki
	const greenColor = '#037100';
	addToCartButton.style.backgroundColor = greenColor;
	localStorage.setItem('addToCartButtonColor', greenColor);
}
