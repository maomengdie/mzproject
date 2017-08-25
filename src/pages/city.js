
import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import '../css/city.css'

import Services from '../services'

export default class City extends Component{
	constructor(...rest){
		super();
		//console.log(rest);
		this.state = {	
			letterArr:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
			cityData:[]
		}
	}
	render(){		
		return (
			<div class='page citys'>
				<div class='citytop'>
                    <div class='gpscity'>
					   <div><span>GPS定位你所在的城市</span></div>
					   <ul>
						   <li>深圳</li>
					   </ul>
				    </div>
					<div class='gpscity'>
					   <div><span>热门城市</span></div>
					   <ul class='hotcitylist'>
						   <li>北京</li>
						   <li>上海</li>
						   <li>广东</li>
						   <li>深圳</li>
					   </ul>
				    </div>
					<div class='gpscity'>
					   <div><span>按字母排序</span></div>
				    </div>
				</div>
				<ul class='letterArr'>
                     {
						 this.state.letterArr.map((item,index)=>{
							 return(
								 <li key={index} onClick={this.goAction.bind(this,index)}>
									 <a href={"#"+item}>{item}</a>
								 </li>
							 )
						 })
					 }
				</ul>
			    <ul class='citymain'>
                    {
                        this.state.letterArr.map((item,index)=>{ 
							return (
								<li key={index} id={item}>
						
									<div class='lettertop'>{item}</div>
									<ul class='lettercity'>
										{ 
											this.state.cityData.map((it,i)=>{
												if(it.pinyin.indexOf(item)==0){
													return(
														<li key={i}>{it.name}</li>
													)
												}
											})
										}
									</ul>
								
								</li>
							)   
                           							
						})
					}
				</ul>
			</div>
		)
	}
	componentWillMount(){ 
		Services.getCityData()
		.then((data)=>{
			console.log(data)
			this.setState({cityData:data})
		})
	}
    goAction(index){
		console.log(index)
        location.href = "#Z"
	}
	
}
