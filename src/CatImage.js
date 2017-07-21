import React from 'react';

class CatImage extends React.Component {
	constructor (props) {
		super (props);
		this.handleClick= this.handleClick.bind(this);
	}
	handleClick(e){
             this.props.onCatImageClick(Number(e.target.id));
	}

	render () {
		return(
            		<div>
			<h1>{this.props.data[this.props.currentCat].name}</h1>
			<img src = {this.props.data[this.props.currentCat].address} id= {this.props.currentCat} onClick= {this.handleClick}/>
			<h3> count: {this.props.data[this.props.currentCat].count} </h3>
		</div>);
	}
}

export default CatImage ;