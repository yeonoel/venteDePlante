import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')
	function handleInput(e) {
		setInputValue(e.target.value)
	}
function manquant(){
	if (!inputValue.includes('@')){
		return alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.")
	}
	}
	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :
			<input type ="text" value = {inputValue} onChange={handleInput}  onBlur={manquant} />
			<button type="submit">Enter</button>
			 </div>
		</footer>
	)
}

export default Footer