
import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import '../css/card.css'

export default class Card extends Component{
	constructor(...rest){
		super();
		//console.log(rest);
		this.state = {	
			show:true,
			actinShowe01:true,
			actinShowe02:false
			
		}
	}
	render(){
		
		var active01={
			borderBottom:this.state.actinShowe01?'4px solid #ff7100':null,
			color:this.state.actinShowe01?'#ff7100':'#333'
		}
	
		var active02={
			borderBottom:this.state.actinShowe02?'4px solid #ff7100':null,
			color:this.state.actinShowe02?'#ff7100':'#333'
		}
		return (
			<div class='page card'>
				<div class='cardtop'>
					<span onClick={this.changeAction01.bind(this)} style={active01}>
						卖座卡
					</span>
					<span onClick={this.changeAction02.bind(this)} style={active02}>
						电子卖座卡						
					</span>
				</div>
				{
					this.state.show?<div class='cardmain'>
					    
                             <div class='cardnumber'>
                                  <label>卡号 ：</label>
								  <input placeholder='请输入卡号'/>
								  <div></div>
							 </div>
							 <div class='cardnumber'>
                                  <label>密码 ：</label>
								  <input placeholder='请输入密码'/>
								  <div></div>
							 </div>
							<button>查询</button>
					</div>:<div class='cardmain'>
						    <div class='cardnumber'>
                                  <label>卡号 ：</label>
								  <input placeholder='请输入15电子卖座卡号'/>
								  <div></div>
							 </div>
							<button>查询</button>
					</div>
				}
			</div>
		)
	}
	changeAction01(){
		this.setState({show:true})
		this.setState({actinShowe01:true})
		this.setState({actinShowe02:false})			
	}
	changeAction02(){
		this.setState({show:false})
		this.setState({actinShowe01:false})
		this.setState({actinShowe02:true})			
	}
		
}
