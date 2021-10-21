import CareScale from './CareScale.js'
import '../styles/PlantItem.css';

function PlantItem({id, name, cover, water, light}){
  function handleClick( plantName){
      if(water > light){
        alert( `la plante ${plantName}  requiert beaucoup d'arrosage`)
      }if (water < light) {
        alert(`la plante ${plantName}  requiert beaucoup de lumiere`)
      } 
      
  }
      return (       
            <li key={id} className='lmj-plant-item' >
                <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover` } />
                {name}
                <div  onClick={()=>{handleClick(name)}}>
                    <CareScale scareType = "water" scareValue = {water} />
                    <CareScale scareType = "light" scareValue = {light} />
                </div>
            </li>
      )
     
    
}

export default PlantItem;