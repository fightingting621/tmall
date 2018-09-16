import React, { Component } from 'react';
import store from './../store';
import {connect} from 'react-redux';


//action  是对象  对象中必须有个type
const add = (text) => {
	return {
		type:'ADD',
		text:text
	}
};


class App extends Component {
	addHandle(num){
		//触发action
		store.dispatch(add(num));
	}
	render() {
		return (
			<div>
				<h1>{this.props.count}</h1>
				<button onClick={()=>{
					this.props.add(4);
				}}>+++</button>
				<button onClick = {this.addHandle.bind(this,2)}>click</button>
			</div>
		);
	}
}
const mapStateToProps=(state)=>{
	return{
		count:state.count
	}
};
const mapDispatchToProps=(dispatch)=>{
	return {
		add:(can)=>{
			dispatch(add(can))
		}
	}
};
export default connect(mapStateToProps,mapDispatchToProps)(App);
