
import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import '../css/cinema.css'

import Services from '../services'

export default class Cinema extends Component{
	constructor(){
		super();
		//console.log(rest);
		this.state = {	
			cinemaData:[],
			areaArr:[],
			show:true
		}
	}
	render(){

	
		
		return (
			<div class='page cinema' >
				<ul class='cinemalist'>
				    {   
					 
					    this.state.cinemaData.map((item,index)=>{


						    if(this.state.areaArr.indexOf(item.district.name)==-1){
							    this.state.areaArr.push(item.district.name)
								var areaName=item.district.name
								//console.log(this)
                                return(
									<li key={index}>
						                <div class='area-name' onClick={this.cineamShowAction.bind(this,index)}>
											{item.district.name}
										</div>
									    <ul class='cinema-small-list'>
										   {	
					                            this.state.cinemaData.map((it,i)=>{
                                                    if(it.district.name==areaName){
														//console.log(this)
                                                        return( 
															<li key={i}>
															    <h2>
																	<strong>{it.name}</strong>
																	<span class='zuo'>座</span>
                                                                    <span class='tong'>通</span>
																	<i class='iconfont icon-arrow-right'></i>
																</h2>
																<div class='activity'>
																	{
																		it.labels.map((itm,inx)=>{
																			return(
																				<span key={inx} class={itm.type==''?'hid':itm.type}>
																					 {itm.name=="观影小食"?"可乐爆米花":itm.name}
																				</span>
																			)
																		})
																	}
																</div>
																<p>{it.address}</p>
																<div class='distance'>
																	<span>
																		距离未知
																	</span>
																</div>
															</li>
														)
												    }
											    })											  											  
										   }
									    </ul>
									</li>
								)	
						   } 										  
					   }) 

				  } 
				</ul>
			</div>
		)
	}

	cineamShowAction(i){
		console.log(i)
		//console.log(this)
		this.setState({show:!this.state.show})
			console.log(this.state.show)
	}

	componentWillMount(){ 
		Services.getCinemaData()
		.then((data)=>{
			console.log(data)
		    this.setState({cinemaData:data})
		})
	}		
}
