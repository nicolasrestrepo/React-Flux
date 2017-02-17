/*
* Module Dependences
*/

import React from 'react';
import Reflux from 'reflax';
import ImageStore from '../stores/ImageStore';

let ImageGrid = React.createClass({

	mixins: [Reflux.connect(ImageStore, 'imagestore')],

	render: function (){
		if(this.state.imagestore) {
			return <div>
					{
						this.state.imagestore.map((image) =>{
								return <div classNAme="image">
								<a href={image.link}>
									<img src={image.media.m} />
									</a>
							});
					}
			</div>
		} else{

			return <p> No hay imagenes disponible </p>
		}
	}

});

export default ImageGrid;