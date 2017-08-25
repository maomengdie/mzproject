
import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import '../css/store.css'

import Services from '../services'

let mySwiper=null
export default class Store extends Component{
	constructor(...rest){
		super();
		//console.log(rest);
		this.state = {	
			bannerData:[],
			bannerImg:[],
			classifyData:[],
			centerData:[],
			bigClassifyData:[],
			storeListData:[]
		}
	}
	render(){
		
		return (
			<div class='page store'>
				<div ref='storebanner' class="swiper-container">
				    <div class="swiper-wrapper">
				        {
				        	this.state.bannerImg.map((item,index)=>{
				        		return (
				        			<div key={index} class="swiper-slide">	
                                         <a href={item.url}><img src={item.imageSrc}/></a>
									</div>
				        		)
				        	})				        	
				        }
				    </div>
					<div class="swiper-pagination"></div>
				</div>
			    <div class='storemain'>
					<ul class='littlecly'>
                       	{
							this.state.classifyData.map((item,index)=>{
								return(
									<li key={index}>
										<a href={item.url}>
											<img src={item.imageSrc}/>
											<span>{item.name}</span>
										</a>
									</li>
								)
							})
						}
					</ul>
					<div class='center'>
						{
							this.state.centerData.map((item,index)=>{
				        		return (
				        			<div key={index}>	
                                         <a href={item.url}><img src={item.imageSrc}/></a>
									</div>
				        		)
				        	})
						}
					</div>
					<div class='bigclassify'>
						{
							this.state.bigClassifyData.map((item,index)=>{
				        		return (
				        			<div key={index} class='classify-cont'>	
                                         <a href={item.url}><img src={item.imageSrc}/></a>
										 <div class='small-classify-cont'>
											{
												item.products.map((it,i)=>{
													return (
                                                        <div key={i} class='small-classify'>
															<a>
																<img src={it.image}/>
																<p>{it.name}</p>
																<span>￥{it.price/100+'.00'}</span>
															</a>
													    </div>
													 )
												 })
											}
											<div class='last-small-classify'>
												<a>
                                                    <span>
													   全部
												    </span>
												</a>												
											</div>
										 </div>
									</div>
				        		)
				        	})
						}
					</div>
				</div>
				
				<div class='store-list'>
					<div class='tittle'>
						-&nbsp;好货精选&nbsp;-
				    </div>
					<div class='store-list-cont'>
						{
							this.state.storeListData.map((item,index)=>{
								return (
									<div key={index} class='store-list-detil'>
										<div class='detil-cont'>
												<a>
													<img src={item.skuList[0].image}/>
												    <p>{item.masterName}</p>
													<div>
														<span>￥{item.maxPrice/100}</span>
														    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
														已售{item.displaySalesCount}
													</div>
												</a>
										</div>											
									</div>
								)
							})
						}
					</div>
				</div>
			</div>
		)
	}
	componentWillMount(){

		//请求banner图以及商品分类数据
		Services.getStoreBannerData()
		.then((data)=>{
			//console.log(data)
			this.setState({bannerData:data})
			data.splice(10,0,data[8]);
			this.setState({bannerImg:data.slice(8,11)})
			this.setState({classifyData:data.slice(0,8)})
			this.setState({centerData:data.slice(11,13)})
			this.setState({bigClassifyData:data.slice(13,20)})
		})

		//请求商品列表数据
		Services.getStoreListData()
		.then((data)=>{
			//console.log(data)
			this.setState({storeListData:data})
		})

	}
	componentDidMount(){     
		mySwiper = new Swiper (this.refs.storebanner, {
			loop: true,
			autoplay:1500,
			observer:true,//修改swiper自己或子元素时，自动初始化swiper
			observeParents:true,//修改swiper的父元素时，自动初始化swiper
		    pagination: '.swiper-pagination'
		})        
	}
	goDetilAction(url){
		console.log(url)
	}
}
