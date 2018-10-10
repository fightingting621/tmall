import React,{Component} from 'react';
import Product from './../assets/css/Product.css';
import {withRouter} from 'react-router-dom';

export default withRouter((props)=>{
    return(
        <div className="like" onClick={
            ()=>{
                props.history.push('/detail/'+props.elem.product_id);
            }
        }>
            <div className="like-pic">
                <img src={props.elem.img} alt=""/>
            </div>
            <div className="like-con">
                <h2 className="like-title">{props.elem.product_name}</h2>
                <p className="like-des">{props.elem.description}</p>
                <span className="like-price">{props.elem.discount_price}</span>
                <span className="pre-price">门市价：{props.elem.price}</span>
                <span className="like-right">已售{props.elem.num}</span>
            </div>
        </div>

    )
})
