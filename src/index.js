import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//import App from './App';
import registerServiceWorker from './registerServiceWorker';
class ParentCatClicker extends React.Component {
	constructor (props){
		super (props);
		this.state = {data:[ {address: "https://i.ytimg.com/vi/3dzUgmpXPX0/hqdefault.jpg", count:0, name: "catty"},
                {address: "https://s-media-cache-ak0.pinimg.com/736x/7a/ee/6f/7aee6f1493f9a8e9da7372c410783e39--cute-cats-adorable-animals.jpg", count:0,name: "waffy"},
                {address: "http://images6.fanpop.com/image/photos/33700000/Cute-kittens-33701174-500-468.jpg", count: 0, name: "tucky"},
                {address: "https://s-media-cache-ak0.pinimg.com/736x/8c/6e/da/8c6eda27fdc4f81c4390bc9e1bafba81--super-cute-kittens-cute-kittens-and-cats.jpg",count:0, name: "mishi"},
				{address: "http://images4.fanpop.com/image/photos/16100000/Cute-Kittens-kittens-16123995-500-313.jpg",count:0, name: "micky"}],
				currentCat: 0
			};
			this.handleCatListClick= this.handleCatListClick.bind(this);
			this.handleCatImageClick = this.handleCatImageClick.bind(this);
	}
		handleCatListClick(currentCat){
			this.setState({currentCat:currentCat});
		}

		handleCatImageClick(currentCat){
			let oldCat= this.state.data[currentCat];
				let nextCat= Object.assign({},oldCat, {count:oldCat.count+1});
				console.log(this.state.data.length);
				const arr= [...this.state.data.slice(currentCat+1)];
				console.log(arr);
				const nextState= {data: [...this.state.data.slice(0,currentCat),nextCat,...this.state.data.slice(currentCat+1)]};
                this.setState(nextState);
		}
		
	render () {
       const noOfCats = this.state.data.length;
		return (
			<div>
			   <h1>Welcome to Cat Clicker Application!</h1>
			   <CatList noOfCats= {noOfCats} onCatListClick = {this.handleCatListClick}/>
			    <CatImage currentCat= {this.state.currentCat} data = {this.state.data} onCatImageClick = {this.handleCatImageClick}/> 
				
			</div>
			);
	}
}

class CatList extends React.Component {
	constructor (props) {
		super (props);
		//this.state= {currentCat : 0};
		this.handleClick= this.handleClick.bind(this);
		
	}
			handleClick(e) {
                  this.props.onCatListClick(Number(e.target.id));
		}
	render () {
					// 	const dataArray= props.data;
					const noOfCats=this.props.noOfCats;
					const noOfCatsArray= [];
					noOfCatsArray.length= noOfCats;
					for(var j = 0 ; j < noOfCats; j ++ )
						{
							noOfCatsArray[j]=j;
						}
				    const listItems = noOfCatsArray.map((i)=>
						<li key = {i} onClick = {this.handleClick} id = {i}>Cat {(i+1).toString()}</li>
					);
					
			return (
				<div>
				    <p> In the cat list Component </p>
                    <ul>{listItems}</ul>
				</div>
			);
		}

}

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

// class Admin extends React.Component {
// 	constructor (props) {
// 		super (props);
// 		this.handleClick= this.handleClick.bind(this);
// 	}
// 	handleClick(e) {

// 	}
// 	render(){
// 		return(
// 			<button>
// 		);
// 	}
// }
ReactDOM.render(<ParentCatClicker/>, 
	document.getElementById('root'));
registerServiceWorker();




