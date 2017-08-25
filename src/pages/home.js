
import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import '../css/home.css'

import Services from '../services'

let mySwiper=null

export default class Home extends Component{
	constructor(...rest){
		super();
		//console.log(rest[0]);
		this.state = {	
			bannerData:[],
			hotMoviesData:[],
			upComingMoviesData:[],
			history:rest[0].history
		}
	}
	render(){
		
		return (
			<div class='page home'>
				<div ref='banner' class="swiper-container">
				    <div class="swiper-wrapper">
				        {
				        	this.state.bannerData.map((item,index)=>{
				        		return (
				        			<div key={index} class="swiper-slide">	
				        			   <img src={item.imageUrl}/>
				                   </div>
				        		)
				        	})				        	
				        }
				    </div>
				</div>
				<div class='hotmovies'>
				    <ul class='hotmovies-list'>
				        {
				        	this.state.hotMoviesData.map((item,index)=>{
				        		return (
				        			<li key={index} onClick={this.goDetilAction.bind(this,item.id)}>
				        			    <img src={item.cover.origin}/>
				        			    <div class='movieinfo'>
				        			       <h3>{item.name}</h3>
				        			       <p>{item.cinemaCount}家影院上映{item.watchCount}人购票</p>
				        			       <span>{item.grade}</span>
				        			    </div>
				                   </li>
				        		)
				        	})				        	
				        }
				    </ul>
				    <div class='morehotmovies'>
				       <span>更多热映电影</span>
				    </div>
				</div>
				<div class='upcomingmovies'>
				    <div class='comingtop'>
				        <span>即将上映</span>
				    </div>
				    <ul class='upcomingmovies-list'>
				        {
				        	this.state.upComingMoviesData.map((item,index)=>{
				        		return (
				        			<li key={index} onClick={this.goDetilAction.bind(this,item.id)}>
				        			    <img src={item.cover.origin}/>
				        			    <div class='movieinfo'>
				        			       <h3>{item.name}</h3>				    
				        			       <span>{new Date(item.premiereAt).toLocaleDateString()}上映</span>
				        			    </div>
				                   </li>
				        		)
				        	})				        	
				        }
				    </ul>
				    <div class='moreupcomingmovies'>
				       <span>更多即将上映电影</span>
				    </div>
				</div>
			</div>
		)
	}
	componentWillMount(){ 
		
		//请求banner图数据
		Services.getHomeBannerData()
		.then((data)=>{
			data.push(data[0]);
			this.setState({bannerData:data})
			mySwiper.update()
		})
	
		//请求热门电影数据  
		Services.getHomeHotMoviesData()
		.then((data)=>{
			//console.log(data)
			this.setState({hotMoviesData:data})
		})
		
		//请求即将上映电影数据
		Services.getHomeUpComingMoviesData()
		.then((data)=>{
			//console.log(data)
			this.setState({upComingMoviesData:data})
		})
		
		
	}
	componentDidMount(){     
	    mySwiper = new Swiper (this.refs.banner, {
		    loop: true,
		    autoplay:1500
	    })        
	}
	goDetilAction(id){
	    console.log(id)
		this.state.history.push({
			pathname:'/moviedetil',
			search: `?id=${id}`			
		})
	}	
}
