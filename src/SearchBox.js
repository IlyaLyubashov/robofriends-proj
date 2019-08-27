import React from 'react';
import 'tachyons';

function SearchBox({onSearchChange}){
	return(
		<input className='bg-light-green' placeholder ='insert robofriend' onChange = {onSearchChange} />)
}

export default SearchBox;