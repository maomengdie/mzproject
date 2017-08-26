
import axios from 'axios'
import API from '../api' 

var date=new Date().getTime()

//首页的数据请求

//请求banner图数据
//http://m.maizuo.com/v4/api/billboard/home?__t=1503106957090   http://localhost:8080/v4/api/billboard/home?__t=1503111197454
function getHomeBannerData(){
    return new Promise((resolve, reject)=>{
    	axios.get(`${API.homeData}/billboard/home?__t=${date}`)
    	.then((res)=>{
    		//console.log(res)
    		resolve(res.data.data.billboards)
    	})
    	.catch((error)=>{
    		console.log(error)
    	})
    })
}

//请求正在热映电影数据
// http://m.maizuo.com/v4/api/film/now-playing?__t=1503106957098&page=1&count=5
function getHomeHotMoviesData(){
    return new Promise((resolve, reject)=>{
    	axios.get(`${API.homeData}/film/now-playing?__t=${date}&page=1&count=5`)
    	.then((res)=>{
    		//console.log(res)
    		resolve(res.data.data.films)
    	})
    	.catch((error)=>{
    		console.log(error)
    	})
    })
}

//请求即将上映电影数据
//  http://m.maizuo.com/v4/api/film/coming-soon?__t=1503106957105&page=1&count=3
function getHomeUpComingMoviesData(){
    return new Promise((resolve, reject)=>{
    	axios.get(`${API.homeData}/film/coming-soon?__t=${date}&page=1&count=3`)
    	.then((res)=>{
    		//console.log(res)
    		resolve(res.data.data.films)
    	})
    	.catch((error)=>{
    		console.log(error)
    	})
    })
}


//请求电影部分数据  正在热映
//http://m.maizuo.com/v4/api/film/now-playing?page=1&count=7
function getMoviesDataPlay(n){
    return new Promise((resolve, reject)=>{
    	axios.get(`${API.homeData}/film/now-playing?page=${n}&count=7`)
    	.then((res)=>{
    		//console.log(res)
    		resolve(res.data.data.films)
    	})
    	.catch((error)=>{
    		console.log(error)
    	})
    })
}


//请求电影部分数据  即将上映
//http://m.maizuo.com/v4/api/film/coming-soon?page=1&count=7
function getMoviesDataComing(m){
    return new Promise((resolve, reject)=>{
    	axios.get(`${API.homeData}/film/coming-soon?page=${m}&count=7`)
    	.then((res)=>{
    		//console.log(res)
    		resolve(res.data.data.films)
    	})
    	.catch((error)=>{
    		console.log(error)
    	})
    })
}


//请求电影详情数据
//http://m.maizuo.com/v4/api/film/3828?__t=1503304564170
function getMoviesDetilData(aid){
	console.log(aid)
    return new Promise((resolve, reject)=>{
    	axios.get(`${API.homeData}/film/${aid}?__t=${date}`)
    	.then((res)=>{
			//console.log(res)
			res.data.data.film.imgPaht=res.data.data.film.cover.origin
			
			resolve(res.data.data.film);
			
    	})
    	.catch((error)=>{
    		console.log(error)
    	})
    })
}

//请求全国各地城市数据
//http://m.maizuo.com/v4/api/city?__t=1503389159351
function getCityData(){
    return new Promise((resolve, reject)=>{
    	axios.get(`${API.homeData}/city?__t=${date}`)
    	.then((res)=>{
			//console.log(res)
			resolve(res.data.data.cities);
			
    	})
    	.catch((error)=>{
    		console.log(error)
    	})
    })
}

//请求全国电影院数据
//http://m.maizuo.com/v4/api/cinema?__t=1503453272908
function getCinemaData(){
    return new Promise((resolve, reject)=>{
    	axios.get(`${API.homeData}/cinema?__t=${date}`)
    	.then((res)=>{
			resolve(res.data.data.cinemas)	
    	})
    	.catch((error)=>{
    		console.log(error)
    	})
    })
}

//请求商城banner图数据
//http://aura.maizuo.com/api/ad/list
function getStoreBannerData(){
    return new Promise((resolve, reject)=>{
    	axios.get(`${API.storeData}/ad/list`)
    	.then((res)=>{
			//console.log(res)
			resolve(res.data.data)	
    	})
    	.catch((error)=>{
    		console.log(error)
    	})
    })
}

//请求商城商品列表数据
//http://aura.maizuo.com/api/recommend/home?page=1&num=20
function getStoreListData(x){
	console.log('服务部分的X:   '+x)
    return new Promise((resolve, reject)=>{
    	axios.get(`${API.storeData}/recommend/home?page=${x}&num=20`)
    	.then((res)=>{
			//console.log(res)
			resolve(res.data.data.list)	
    	})
    	.catch((error)=>{
    		console.log(error)
    	})
    })
}


export default {
	getHomeBannerData,
	getHomeHotMoviesData,
	getHomeUpComingMoviesData,
	getMoviesDataPlay,
	getMoviesDataComing,
	getMoviesDetilData,
	getCityData,
	getCinemaData,
	getStoreBannerData,
	getStoreListData
}













