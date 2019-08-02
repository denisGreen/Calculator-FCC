import React, {useState, useReducer} from 'react'
import CalculatorButton from './Components/CalculatorButton.js'
import Screen from './Components/Screen.js'

import {addAction, removeAction, clearAction, computeAction} from './Actions/actions.js'
import {calcReducer} from './Reducers/reducers.js'
import {constants} from './Actions/actions.js'
import checkFunctions from './check-func.js'
import './Calculator.css'

//Array  of values for buttons
const woKeysArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "*", "/", "+", "-"]

//here we add keys and generate objects for buttons
const buttonsArray = woKeysArray.map(item => {
		
		return {key: woKeysArray.indexOf(item), value: item}
	})

//filtering data for number buttons
const numbersArray = buttonsArray.filter(item => (item.value.search(/\d/) !== -1))

//filtering data for operators buttons
const operatorsArray = buttonsArray.filter(item => (item.value.search(/\d/)=== -1))

//initiating the State
const initialState = {
	screenArr: ["0"],
 	result: "clear",
 }




const Calculator = () =>{
	//const [screenArr, setScreenArr] = useState([0])
	const [state, dispatch] = useReducer(
    calcReducer,
    initialState,
  );
	
	//let screenString = screenArr.join("")

	//check functions
	
   

 	

	const handleClear = () => dispatch(clearAction())

	const handleRemove = () => dispatch(removeAction())
	

	const handleEQUAL = ()=> dispatch(computeAction())

	const handlePoint = ()=>{

	}

	const handleClick = (e)=>{
		e.preventDefault()
		
		
		//value = checkFunctions
		if(state.screenArr.length <18){
			return(dispatch(addAction(e.target.value)))
		}			
	}
				
	const numberButtons = numbersArray.map((item) =>{
		return(
				<CalculatorButton
				 	key={item.key}
					value={item.value}
					content={item.value}
					onClick={handleClick}
					/>
			)
	})

	const operatorsButtons = operatorsArray.map((item) =>{
		return(
				<CalculatorButton
				 	key={item.key}
					value={item.value}
					content={checkFunctions.mathToUnicode(item.value)}
					onClick={handleClick}
					/>
			)
	})
    
	return(
		<div className="calculator">
			{console.log(state)}
			<Screen screenString={checkFunctions.mathToUnicode(state.screenArr.join(""))}/>
			{numberButtons}
			{operatorsButtons}
			<CalculatorButton
				value="."
				content="."
				onClick={handleClick}
			/>
			<CalculatorButton
				content="="
				onClick={handleEQUAL}
			/>
			<CalculatorButton
				content="C"
				onClick={handleRemove}
			/>
			<CalculatorButton
				content="AC"
				onClick={handleClear}
			/>
		</div>
		)
} 

export default Calculator