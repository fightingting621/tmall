import React, { Component } from 'react';
import DImg from './Detail/DImg';
import 'whatwg-fetch';

export default class Detail extends Component {
    constructor(props){
        super(props);
    }
   componentWillMount(){

      fetch("http://www.xiechenxi.cn/welcome/detail/"+this.props.match.params.id)
   }

  render() {
    return (
      <div>
        <DImg></DImg>
      </div>
    )
  }
}
