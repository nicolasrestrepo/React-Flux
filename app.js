/*
*Module dependencies
*/

import Reac from 'react';
import ImageGrid from './components/ImageGrid';
import ImageAction from './actions/ImageActions';

//Actialice cada 5 segundos, para eso setiamos un timeout
setInterval(() =>{
	ImageAction.fetchList();
}, 5000);

React.render( //Hacemos un render de nuestro ImageGrid
	<ImageGrid/>,
	document.getElementById('container')
)
