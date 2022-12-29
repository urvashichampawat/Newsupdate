import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }
  capitalizeFirstLetter =(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  

constructor(props){
  super(props);
 // console.log("Hello i am constructor");
  this.state = {
   articles: [],
   loading: true,
   page:1,
   totalResults: 0
  }
  document.title = `Newsupdate-${this.capitalizeFirstLetter(this.props.category)}`;
 }
 
 async updateNews(pageNo){
  this.props.setProgress(10);
  const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  this.setState({loading: true});
  let data = await fetch (url);
  this.props.setProgress(30);
  let parsedData = await data.json();
 // console.log(parsedData);
 this.props.setProgress(70);
  this.setState({
    articles: parsedData.articles, 
   totalResults: parsedData.totalResults, 
   loading: false
  })
  this.props.setProgress(100);
 }
 async componentDidMount(){
  //let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=72902be3906e4bd180acbf40d202ea73&page=1&pageSize=${this.props.pageSize}`;
  //this.setState({loading: true});
  //let data = await fetch (url);
  //let parsedData = await data.json()
  //console.log(parsedData);
  //this.setState({articles: parsedData.articles, 
  // totalResults: parsedData.totalResults, 
  // loading: false})
    this.updateNews() ;
}
    handlePrevClick = async()=>{
  // console.log("Previous");
   // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=72902be3906e4bd180acbf40d202ea73&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
   // this.setState({loading: true});
   // let data = await fetch (url);
   // let parsedData = await data.json()
   // console.log(parsedData);
   // this.setState({
   //   page: this.state.page - 1,
   //   articles: parsedData.articles,
   //   loading: false
    //})
    this.setState({page: this.state.page -1 });
    this.updateNews()
   }
   
    handleNextClick = async  ()=>{
   // console.log("Next");
   // if (!(this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
   // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=72902be3906e4bd180acbf40d202ea73&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
   // this.setState({loading: true});
   // let data = await fetch (url);
   // let parsedData = await data.json()
   // 
   // this.setState({
   //   page: this.state.page + 1,
   //   articles: parsedData.articles,
   //   loading: false
   // })}
   this.setState({page: this.state.page +1 });
  this.updateNews()
  }
  fetchMoreData =async () => {
      this.setState({page: this.state.page +1 }) 
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}  &page=${this.state.page}&pageSize=${this.props.pageSize}`;
      //this.setState({loading: true});
      let data = await fetch (url);
      let parsedData = await data.json();
     // console.log(parsedData);
      this.setState({
        articles: this.state.articles.concat(parsedData.articles), 
       totalResults: parsedData.totalResults
      // loading: false
      }) 
  };
 render() 
 {
    return (
     <>
        <h1 className="text-center" style={{margin: '40px 0px'}} >Newsupdate - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
        {this.state.loading && <Spinner/>}
        {/* it means if this.state.loading true then show spinner*/}
       
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
       <div className="container">
        <div className="row">
        {this.state.articles.map((element)=>{
               return <div className="col-md-4" key={element.url} >
                 {/* col-md- means there are total 12 grid boxes so how much space required to distribute even space among desired rows*/}
                 <NewsItem title={element.title?element.title.slice(0, 54):""} description={element.description?element.description.slice(0, 79):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                </div>
               })}
              </div>
              </div>
              </InfiniteScroll>
            {/*  <div className="container d-flex justify-content-between">*/}
            {/*  <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>*/}
            {/*  <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark mx-3" onClick={this.handleNextClick} >Next &rarr;</button>*/}
            {/*  </div>*/}
              </>
    )
  }
}

export default News
//72902be3906e4bd180acbf40d202ea73&page
//72902be3906e4bd180acbf40d202ea73