
import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import Services from '../../services'

import '../../css/moviedetil.css'

export default class Moviedetil extends Component{
	constructor({history}){
		super();
		//console.log(history)
		this.state = {	
			history:history,
			moviesDetilData:{},
			actorArr:[]
		}
	}
	render(){		
	
		return (
			<div class='page moviedetil'>
				<div class='img'>
				    <img src={this.state.moviesDetilData.imgPaht}/>
				</div>
				<div class='detiltext'>
					<h2>影片简介</h2>
					<div class='direct'>
						<span>导&emsp;&emsp;演&nbsp;:&nbsp;</span>
						<span>{this.state.moviesDetilData.director}</span>
					</div>
					<div class='actor'>
                         <span>演&emsp;&emsp;员&nbsp;:&nbsp;</span>
						 {
							this.state.actorArr.map((item,index)=>{
								return (
                                    <span key={index}>{item.name}&nbsp;|&nbsp;</span>
								)
							})
						 }
					</div>
					<div class='language'>
                         <span>地区语言&nbsp;:&nbsp;</span>
						 <span>{this.state.moviesDetilData.nation}({this.state.moviesDetilData.language})</span>
					</div>
					<div class='type'>
                         <span>类&emsp;&emsp;型&nbsp;:&nbsp;</span>
						 <span>{this.state.moviesDetilData.category}</span>
					</div>
					<div class='date'>
                         <span>上映日期&nbsp;:&nbsp;</span>
						 <span>{new Date(this.state.moviesDetilData.premiereAt).toLocaleDateString()}上映</span>
					</div>
					<div class='describe'>{this.state.moviesDetilData.synopsis}</div>
				</div>
				<div class='btn'>
					<button onClick={this.goCinemaAction.bind(this)}>立即购票</button>
				</div>
			</div>
		)
	}
	componentWillMount(){
		  
		var id=this.state.history.location.search
		var aid=id.slice(id.indexOf('=')+1,id.length)

		Services.getMoviesDetilData(aid)
		.then((res)=>{
			
			 this.setState({moviesDetilData:res})
			 this.setState({actorArr:res.actors})
			 // console.log(res)

		})
	}
	goCinemaAction(){
		this.props.history.push('/cinema')
	}
}

