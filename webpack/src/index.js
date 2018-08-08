import css from'./css/style.css';
import scss from'./scss/common.scss';
import $ from 'jquery';
let json=require("../author.json");
document.querySelector('#json').innerHTML=`作者:${json.name}`,
// var Odiv=document.getElementById("div1");
// Odiv.innerHTML="wo jia de shi div1";

$('#div1').html('wechuang');


