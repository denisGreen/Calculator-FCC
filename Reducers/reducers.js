import {constants} from '../Actions/actions.js'




export function reducer(state, action) {
  switch (action.type) {
    case 'reset':
      return {count: action.payload};
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default: return state
  }
}


//calculator reducers
const lastIndx = (inputArray) =>  inputArray.length - 1;
const addValue = (array, value)=> array.concat(value)

//check state array length
function checkScreenArrLength(inputArray, value){
		if(inputArray.length < 17){
         
		return value
		
      }else if(inputArray.length === 17){
        return "E"
         
      }
	}
//reducer to add value to the array
const addNumber = (array, value) =>{
	let lastSimbIndx = lastIndx(array)
		    
		    if(array[lastSimbIndx]=== "0"){
				console.log("case array[lastSimbIndx]=== 0", array[lastSimbIndx] === 0, lastSimbIndx)
		        if(lastSimbIndx === 0 || 
		         array[lastSimbIndx - 1] === '+' ||
		          array[lastSimbIndx - 1] === '-' || 
		          array[lastSimbIndx - 1] === '*'|| 
		          array[lastSimbIndx - 1] === '/'){
		         	 //removing
		         	 console.log("case lastSimbIndx === 0", lastSimbIndx === 0, lastSimbIndx)
		         	 
		         	array = array.splice(0,(array.length - 1))
		             
		        }
		    }else{console.log("ne proshel", array[lastSimbIndx] ==="0", lastSimbIndx, array[lastSimbIndx], array)}
	return addValue(array, value)
}

const addDecimalPoint = (array, value)=>{
	let lastSimbIndx = lastIndx(array)
	if(array[lastSimbIndx]!== "."){
		console.log(array[lastSimbIndx], (array[lastSimbIndx]!== "."))
		if(array[lastSimbIndx] === '+' ||
	      array[lastSimbIndx] === '-' || 
	      array[lastSimbIndx] === '*'|| 
	      array[lastSimbIndx] === '/'){
			return array.concat("0", ".")

		}else{

			if(array.indexOf(".")!== -1){
				
				if(array.lastIndexOf(".")<array.lastIndexOf("+")||
					array.lastIndexOf(".")<array.lastIndexOf("-")||
					array.lastIndexOf(".")<array.lastIndexOf("*")||
					array.lastIndexOf(".")<array.lastIndexOf("/")){
					return addValue(array, value)
				}else{
					return array
				}
				
			}else{	
				return addValue(array, value)
			}
			
		}
	}else{	
		return array
	}

}

const addOperators = (array, value)=>{
	let lastSimbIndx = lastIndx(array)
	if(array[lastSimbIndx] === '+' ||
	      array[lastSimbIndx] === '-' || 
	      array[lastSimbIndx] === '*'|| 
	      array[lastSimbIndx] === '/'||
	      array[lastSimbIndx] === '.'){
		         	 //removing
		         	 console.log("case lastSimbIndx === 0", lastSimbIndx === 0, lastSimbIndx)
		         	 
		         	array = array.splice(0,(array.length - 1))
	}
	return addValue(array, value)
}

const add = (state, value)=>{
	console.log(state)
	if(state.screenArr.length < 18){
		value = checkScreenArrLength(state.screenArr, value)
		//add number
		if(value.search(/\d/) !== -1){
			return addNumber(state.screenArr, value)
		}else if(value === "."){
			return addDecimalPoint(state.screenArr, value)
		}else{
			return addOperators(state.screenArr, value)
		}
	}
}

const remove = (array) => {
	if(array.length === 1){
		return [0];
	}else{
		return array.splice(0,(array.length - 1))
	}
	
}


 


export function calcReducer(state, action){
	switch(action.type) {
		case constants.ADD:
			console.log(typeof(action.payload))
			return {...state, screenArr: add(state, action.payload)}
		case constants.REMOVE:
			//console.log(action.type)
			return {...state, screenArr: remove(state.screenArr)}
		case constants.CLEAR:
			return {screenArr: ["0"], result: "clear"}
		case constants.COMPUTE:
			let result = eval(state.screenArr.join(""))
			return {screenArr: [result], result: result}
		default:
			//console.log(action.type)
			return state
	}
}