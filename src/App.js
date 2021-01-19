import React from 'react';
import './index.css';

function App(){

let currTime = new Date().getHours();
let greeting = '';
let cssStyle={color:''};

	if(currTime=1 && currTime<12){
		greeting = 'Good Morning';
		cssStyle.color = 'green';
	}
	else if(currTime=12 && currTime<19){
		greeting = 'Good Afternoon';
		cssStyle.color = 'orange';
	}else{
		greeting = 'GoodNight';
		cssStyle.color = 'grey';
	}
	return(
	<>
    <div>
    <h1>Hello Sir, <span style={cssStyle}>{greeting}</span></h1>
    </div>
    </>
    );
};

export default App;