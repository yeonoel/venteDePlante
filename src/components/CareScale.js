import sun from "../assets/sun.svg"
import water from "../assets/water.svg"


function CareScale ({scareValue, scareType}){
    

    const scaleType  = scareType === "light"? (<img src={sun} alt="sun" />): (<img src={water} alt="water" />);
    const rang =  [1, 2 , 3] ;
    return (
        <div>
            {
            rang.map((rangElem)=>
            scareValue >= rangElem? <span key={rangElem.toString()}>{scaleType} </span> : null)
        }
        </div>
    )
    
}

export default CareScale;