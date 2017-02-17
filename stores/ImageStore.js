/* 
* Module Dependences  
*/

import Reflux from 'reflux';
import $ from 'jquery';
import ImageActions from '../actions/imagesActions';

let ImageStore = Reflux.createStore({
	url: 'https://api.flickr.com/services/feeds/photos_public.gne?format=json',
	listenables: [ImageActions], 
	imagelist[], //declaramos la variable que usamos abajo this.imagelist = data.items; 
	init: function (){
		this.fetchList();
	},
	fetchList: function(){
			let tags = [ 'animals', 'nature', 'food', 'travel', 'cars', 'sport' ];
			let randomTag = tags[Math.floor(Math.random()*tags.length)];
		$.ajax({
			url: this.url + `&tag=${randomTag}`,
			dataType: 'jsonp',
			jsonpCallback: 'jsonFlickrFeed',
			cache: false,
			contex: this,
			success: function(data){
				console.log('fetch ok');
				this.imagelist = data.items; // variable para guadar lo que nos retorna 
				this.trigger(this.imagelist); //llamamos el metodo trigger, hace que se dispare la actualizacion de las vistas
			}
		})
	}
});

export default ImageStore;




















