
import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Aside extends Component{
	constructor(...rest){
		super();
		//console.log(rest);
		this.state = {	
			tableList:[
			    {tittle:'首页',path:'/home',header:'卖座电影'},
			    {tittle:'影片',path:'/movie',header:'卖座电影'},
			    {tittle:'影院',path:'/cinema',header:'全部影院'},
			    {tittle:'商城',path:'/store',header:'卖座商城'},
			    {tittle:'我的',path:'/mine',header:'我的'},
			    {tittle:'卖座卡',path:'/card',header:'查询/绑定/激活卖座卡'}
			]
		}
	}
	render(){
		
		//console.log(this.props.show)
		
		var asideAction={
			transform:this.props.show?'none':'translateX(-100%)'
		}
		var asideOpacity={
			background:this.props.show?'rgba(0,0,0,.3)':'rgba(0,0,0,0)',
			display:this.props.show?'block':'none'
		}
		return (
			<div>
				<div class='mask' style={asideOpacity} onClick={this.asideAction.bind(this)}>
				</div>
				<div class='aside' style={asideAction}>
				   <ul class='table-list'>
					    {this.state.tableList.map((item,index)=>{
					      	return (
					      		<li key={index} onClick={this.pageAction.bind(this,item)}>
						      		{item.tittle}
						      		<i class='iconfont icon-arrow-right'></i>
					      		</li>
					      	)
					    })}
				   </ul>
				</div>
			</div>
		)
	}
	asideAction(){
		this.props.asideAction()
	}
	pageAction(item){
		this.props.history.push(item.path)
		this.props.asideChangeAction(item.header)
	}
	
}

















