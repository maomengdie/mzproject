
import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import '../css/mine.css'

export default class Mine extends Component{
	constructor(...rest){
		super();
		//console.log(rest);
		this.state = {	
			
		}
	}
	render(){
		
		return (
			<div class='page mine'>
				<div class='login'>
					<div class='Phonenumber'>
						<input placeholder='请输入手机号/邮箱'/>
					</div>
				</div>
				<div class='login'>
					<div class='Phonenumber'>
						<input placeholder='请输入密码/验证码'/>
					</div>
				</div>
			    <button>登录</button>
			</div>
		)
	}
		
}
