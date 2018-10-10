import React,{Component} from 'react';
import './../assets/css/Container.css';


export default class Container extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div className="container">
                <div className="con-title">{this.props.title}</div>
                <div className="con-content">{this.props.children}</div>
            </div>
        )
    }
}