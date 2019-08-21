import React from 'react';
import 'tachyons'; 

function Card({id,name,email}){
	console.log(id);
	return(
		<div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
			<img alt = 'robophoto' src={`https://robohash.org/robo${id}?`} width="200px" height="200px" />
			<div>
				<h1>{name}</h1>
				<h2>{email}</h2>
			</div>	
		</div>
		);
}

export default Card;