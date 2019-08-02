import React, {useContext} from 'react';
import "./Screen.css"
//import Context from '../Reducers/reducers.js'




export default function Screen(props){
	
	
	return(
		<div className = "screen">
			{props.screenString}
		</div>
		)
}
