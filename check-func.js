const lastIndx = (inputArray) =>  inputArray.length - 1;

function checkScreenArrLength(inputArray, value){
		if(inputArray.length < 17){
         
		return value
		console.log(value)
      }else if(inputArray.length === 17){
        return "E"
         
      }
	}

/*function goToNextCheck(value){
	return (value === "E")? value : "next"
	
}*/

function checkForNumber(value, array, result){
    let lastSimbIndx = lastIndx(array)
    if(result != "clear"){
        result = "clear";
        array = ["0"];
        
    }
    if(array[lastSimbIndx]=== "0"){
        if(lastSimbIndx === 0 || 
         array[lastSimbIndx - 1] === '+' || array[lastSimbIndx - 1] === '-' || array[lastSimbIndx - 1] === '*'|| array[lastSimbIndx - 1] === '/'){
            return {screenArr: [value]}
        }
    }
    
}

function unicodeToMath(inputString){
    
    let newDisplayString = inputString.replace(/(\u00D7)|(\u00F7)|(\u002B)|(\u2212)/g, function(match, p1, p2, p3, p4){
        //console.log(match)
        switch(match){
            case p1: return "*";
            case p2: return "/";
            case p3: return "+";
            case p4: return "-";
            default: return match;
                    }
        });
    	return newDisplayString;
    }
    
   function mathToUnicode(inputString){
   	let newDisplayString = inputString.replace(/(\*)|(\/)|(\+)|(\-)/g, function(match, p1, p2, p3, p4){
        //console.log(match)
        switch(match){
            case p1: return "\u00D7";
            case p2: return "\u00F7";
            case p3: return "\u002B";
            case p4: return "\u2212";
            default: return match;
                    }
        });
    	return newDisplayString;
    }

const checkFunctions = {
	checkScreenArrLength: checkScreenArrLength,
	unicodeToMath: unicodeToMath,
	mathToUnicode: mathToUnicode,
	checkForNumber: checkForNumber,
	
}

export default checkFunctions