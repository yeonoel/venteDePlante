import '../styles/Cart.css'

function Cart(){
    const prixM = 8;
    const prixL = 10;
    const prixB = 15;
const total = prixM + prixL + prixB ;

    return (<div className = "lmj-cart">
            <h3>Panier</h3>
            <ul>
                <li>un monstera: {prixM} €</li>
                <li>un lierre: {prixL} €</li>
                <li>un bouquet de fleurs: {prixB}€</li>
            </ul>
            <p> Total montant panier :<strong>{total}</strong> € </p>
        </div> )
}

export default Cart;