
import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import '../css/movie.css'

import Services from '../services'

export default class Movie extends Component{
	constructor({history}){
		super();
		//console.log(rest);
		this.state = {	
			leftCheck:true,
			rightCheck: true,
			moviesData:[],
			history,
			moviesData01:[]
		}
	}
	render(){
		var leftStyle={
			color:this.state.leftCheck?"#fe6e00":"#6a6a6a",
			borderBottom:this.state.leftCheck?"solid":"none"
		}
		var rightStyle={
			color:this.state.rightCheck?"#6a6a6a":"#fe6e00",
			borderBottom:this.state.rightCheck?"none":"solid"
		}
		return (
			<div class='page movie'>
				<div class='movietop'>
				   <a >
				        <span class='moviehot' onClick={this.chackActionLeft.bind(this)} style={leftStyle}>正在热映</span>
				   </a>
				   <a >
				       <span class='moviecoming' onClick={this.chackActionRight.bind(this)} style={rightStyle}>即将上映</span>
				    </a>
				</div>
				<ul class='movie-list'>
				   {    this.state.leftCheck ?
				    	this.state.moviesData.map((item,index)=>{
				    		return (
				    			<li key={index}>
									<div class='movies-cont' onClick={this.goDetilAction.bind(this,item.id)}>
										<div class='imgae-cont'>
                                            <div class='image'>
												<img src={item.poster.origin}/>
											</div>								
										</div>
										<div class='text-cont'>
											<h2>
												{item.name}
												<i class='iconfont icon-arrow-right'></i>
												<span>{item.grade}</span>
											</h2>
											<p>{item.intro}</p>
											<div class='grade'>
												<i>
													{item.cinemaCount}
												</i>
												<span>家影院上映</span>
												&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
												<i>
													{item.watchCount}												    
												</i>
												<span>人购票</span>
											</div>
										</div>
									</div>
								</li>
				    		)
				    	}):this.state.moviesData01.map((item,index)=>{
				    		return (
				    			<li key={index}>
									<div class='movies-cont' onClick={this.goDetilAction.bind(this,item.id)}>
										<div class='imgae-cont'>
                                            <div class='image'>
												<img src={item.poster.origin}/>
											</div>								
										</div>
										<div class='text-cont'>
											<h2>
												{item.name}
												<i class='iconfont icon-arrow-right'></i>
											</h2>
											<p>{item.intro}</p>
											<div class='grade'>
												<span class='date'>{new Date(item.premiereAt).toLocaleDateString()}上映</span>
												&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
												<span></span>
											</div>
										</div>
									</div>
								</li>
				    		)
				    	})
				    }
				</ul>
			</div>
		)
	}
	componentWillMount(){ 
		//请求电影部分热映电影数据
		Services.getMoviesDataPlay()
		.then((res)=>{
			//console.log(res)
		    this.setState({moviesData:res});	
		})
       //请求电影部分即将上映电影数据  
		Services.getMoviesDataComing()
		.then((res)=>{
			console.log(res)
		    this.setState({moviesData01:res});	
		})
	}
	chackActionLeft(){
		
		this.setState({leftCheck:!this.state.leftCheck});
		this.setState({rightCheck:!this.state.rightCheck});	
	}
	chackActionRight(){
		this.setState({rightCheck:!this.state.rightCheck});
		this.setState({leftCheck:!this.state.leftCheck});
	}
	goDetilAction(id){
		console.log(id)
		this.state.history.push({
			pathname:'/moviedetil',
			search: `?id=${id}`			
		})
	}

}
