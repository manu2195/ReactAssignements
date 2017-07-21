import React from 'react';


class Admin extends React.Component {
	constructor (props) {
		super (props);
		this.handleSubmit= this.handleSubmit.bind(this);
		this.handleChangeOfName= this.handleChangeOfName.bind(this);
		this.handleChangeOfCount= this.handleChangeOfCount.bind(this);
		this.state = {value1 : props.name, value2:props.count};
    }
    componentWillReceiveProps(nextProps) {
    this.setState({value2:nextProps.count});
  }
	handleChangeOfName (e){
		this.setState({value1: e.target.value});
	}
	handleChangeOfCount (e){
		this.setState({value2: e.target.value});
	}
	handleSubmit(e) {
        this.props.onSubmitHit(this.state.value1,Number(this.state.value2));
    }
    
	render(){
		return(
			<div>
			 <label>
				  Name: <input type = "text" value = {this.state.value1} onChange = {this.handleChangeOfName}/>
				 
			  </label>
			  <label>
				   Count : <input type = "text" value = {this.state.value2} onChange = {this.handleChangeOfCount}/>

				  </label>
			  <button  onClick = {this.handleSubmit}>Save</button>
			</div>
			
		);
	}
}

export default Admin;