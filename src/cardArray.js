import React from 'react';
import Card from './Card';
import robots from './robots';

function CardArray() {
	return (
		<div>
			{robots.map((el) => {
				return <Card name={el.name} email = {el.email} key ={el.id} id = {el.id}/>
			})}
		</div>
	);
}

export default CardArray;