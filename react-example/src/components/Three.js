import React, { Component } from 'react';
import '../assets/css/Three.css';
import { Flex } from 'antd-mobile';
import './../assets/js/rem.js';

export default class Three extends React.Component{
    render(){
        return(
            <div>
                <Flex>
                    <Flex.Item>
                        <div className="F">
                            <ul className="first">
                                我们约会吧
                            </ul>
                            <ul className="des">
                                恋人家人好朋友
                            </ul>
                            <ul>
                                <img className="act" src={require("./../assets/img/activity1.png")} alt=""/>
                            </ul>
                        </div>
                    </Flex.Item>
                    <Flex.Item>
                        <div className="T">
                            <ul className="second">
                                低价超值
                            </ul>
                            <ul className="des">
                                十元惠生活
                            </ul>
                            <ul>
                                <img className="act" src={require("./../assets/img/activity2.jpg")} alt=""/>
                            </ul>
                        </div>
                    </Flex.Item>
                    <Flex.Item>
                        <div className="C">
                            <ul className="third">
                                工作简餐
                            </ul>
                            <ul className="des">
                                实惠方便选择多
                            </ul>
                            <ul>
                                <img className="act" src={require("./../assets/img/activity3.png")} alt=""/>
                            </ul>
                        </div>
                    </Flex.Item>
                </Flex>

            </div>

        )
    }
}
