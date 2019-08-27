import React from 'react';
import Card from './Card';


function CardArray({robots}) {
	return (
		<div className = 'ma5'>
			{robots.map((el) => {
				return <Card name={el.name} email = {el.email} key ={el.id} id = {el.id}/>
			})}
		</div>
	);
}

export default CardArray;