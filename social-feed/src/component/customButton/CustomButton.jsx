import { useState } from "react";
import "./CustomButton.css"

const CustomButton = (props) => {

    const [buttonClass, setButtonClass] = useState("inactive");

    function handleClick(){
        if(buttonClass === "inactive"){
            setButtonClass("active")
        }
        else {
            setButtonClass("inactive")
        }

    }

    return ( 
        <div>
            <button className={buttonClass} onClick={handleClick}>Like</button>
        </div>
     );
}
 
export default CustomButton;