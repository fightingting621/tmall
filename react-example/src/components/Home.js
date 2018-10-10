import React, { Component } from 'react'
import { NavBar, Icon, SearchBar, Grid,WhiteSpace} from 'antd-mobile';
import './../assets/css/home.css';
import Three from './Three';
import { List } from 'antd-mobile';
import Container from './Container';
import Product from './Product';
import 'whatwg-fetch';


const Item = List.Item;
const Brief = Item.Brief;

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[
                    {
                        icon:require('./../assets/img/img1.png'),
                        text:"美食"
                    },
                    {
                        icon:require('./../assets/img/img2.png'),
                        text:"电影"
                    },
                    {
                        icon:require('./../assets/img/img3.png'),
                        text:"酒店"
                    },
                    {
                        icon:require('./../assets/img/img4.png'),
                        text:"娱乐"
                    },
                    {
                        icon:require('./../assets/img/img5.png'),
                        text:"外卖"
                    },
                    {
                        icon:require('./../assets/img/img6.png'),
                        text:"ktv"
                    },
                    {
                        icon:require('./../assets/img/img7.png'),
                        text:"周边游"
                    },
                    {
                        icon:require('./../assets/img/img8.png'),
                        text:"丽人"
                    },
                    {
                        icon:require('./../assets/img/img9.png'),
                        text:"小吃"
                    },
                    {
                        icon:require('./../assets/img/img10.png'),
                        text:"机票"
                    },
                    {
                        icon:require('./../assets/img/img1.png'),
                        text:"美食"
                    },
                    {
                        icon:require('./../assets/img/img8.png'),
                        text:"电影"
                    },
                    {
                        icon:require('./../assets/img/img9.png'),
                        text:"美食"
                    },
                    {
                        icon:require('./../assets/img/img2.png'),
                        text:"电影"
                    }
            ],
            product:[]
        }
    }
    componentWillMount(){
        fetch('http://www.xiechenxi.cn/')
            .then((response) => {
                return response.json()
            }).then((data) => {
            this.setState({
                product:data
            });
            console.log(data)
        });
    }
    render(props) {
    
    return (
        <div>
            <NavBar
                mode="light"
                leftContent="哈尔滨"
                rightContent={[
                    <Icon key="1" type="ellipsis" />,
                ]}
                >
                <SearchBar placeholder="输入搜索内容" maxLength={8} />
            </NavBar>
            <Grid itemStyle={{height:'120px'}} data={this.state.data} isCarousel columnNum={5} />
            <WhiteSpace size="lg"></WhiteSpace>
            <Three></Three>
            <WhiteSpace size="lg"></WhiteSpace>
            <Container title="猜你喜欢">
                {
                    this.state.product.map((elem,index)=>{

                        return <Product key={elem.product_id} elem={elem}></Product>
                    })
                }
            </Container>
        </div>
    )
  }
}
