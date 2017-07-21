import React from 'react';

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



export default CatList;
