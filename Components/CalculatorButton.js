import React from 'react';
import './CalculatorButton.css'




const CalculatorButton = (props) =>{
	/*const operatorsHandler = (value) =>{
	switch(value){
		case "+":
			return (`&times;`)
		default:
			return value
	}
}*/
	return (<div  className="calculator-button">
			<button  onClick = {props.onClick} value = {props.value}>
				{props.content}
			</button>
			</div>
		)
}




export default CalculatorButton