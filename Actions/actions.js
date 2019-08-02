export const constants = {
	ADD: "ADD",
	REMOVE: "REMOVE",
	CLEAR: "CLEAR",
	COMPUTE: "COMPUTE"
}

export const addAction = (value)=>({type:constants.ADD, payload: value})

export const removeAction = ()=> ({type: constants.REMOVE})

export const clearAction = ()=>({type:constants.CLEAR})

export const computeAction = ()=> ({type:constants.COMPUTE})

