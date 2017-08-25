import React, {Component} from 'react'
import {BrowserRouter, Route,Link} from 'react-router-dom'
 
import './css/app.css'

import Home from './pages/home.js'
import Movie from './pages/movie.js'
import Cinema from './pages/cinema.js'
import Store from './pages/store.js'
import Mine from './pages/mine.js'
import Card from './pages/card.js'
import City from './pages/city.js'

import Aside from './views/common/aside.js'
import Moviedetil from './views/common/moviedetil.js'
 
export default class App extends Component{
	constructor({history}){
		super();
		//console.log(rest);
		this.state = {	
			header:'卖座电影',
			aisdeShow:false,
			history
		}
	}
	render(){
		return (
			<BrowserRouter>
				<div class='wrap'>
					<header class="app-header">
					    <a  class='menu' onClick={this.asideAction.bind(this)}>
					      <i class='iconfont icon-menu'></i>
					    </a>
					    <div class='table' onClick={this.asideAction.bind(this)}>
					      {this.state.header}
					    </div>
					    <Link to='/mine' class='person'>
					      <i class='iconfont icon-person'></i>
					    </Link>
					   <Link to='/city' class='city' >
					      <span>深圳</span>
					      <i class='iconfont icon-arrow-down'></i>
					    </Link>
					</header>
					<Route path="/" render={({history, location})=>{
						return <Aside history={history} 
									      show={this.state.aisdeShow}
									      asideAction={this.asideAction.bind(this)}
									      asideChangeAction={this.asideChangeAction.bind(this)}/>
					}}/>
					
					<Route path="/" exact component={Home}/>
					<Route path="/home" exact component={Home}/>
					<Route path="/movie" component={Movie}/>
					<Route path="/cinema" component={Cinema}/>
					<Route path="/store" component={Store}/>
					<Route path="/mine" component={Mine}/>
					<Route path="/card" component={Card}/>
					<Route path="/city" component={City}/>
					<Route path="/moviedetil" component={Moviedetil}/>															
				</div>
			</BrowserRouter>
		)
	}
	asideAction(){
		this.setState({aisdeShow:!this.state.aisdeShow})
		
	}
	asideChangeAction(head){
		console.log(head)
		this.setState({header:head})
		this.setState({aisdeShow:!this.state.aisdeShow})
	}
	
}




