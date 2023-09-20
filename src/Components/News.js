import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
// import axios from 'axios';
// import {Link} from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    
    const  updateNews = async()=> {
        props.setProgress(10);
        const url = `//newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=938531da5fd547b6980c902ad18fed93&page=${page}&pageSize=${props.pgsize}`;
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await  data.json()
        props.setProgress(50);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)

        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `${props.category} - NewsMonkey`;
        updateNews();      
    }, [])
    
    const fetchMoreData = async() => {
        const url = `//newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=938531da5fd547b6980c902ad18fed93&page=${page+1}&pageSize=${props.pgsize}`;
        setPage(page+1)
        let data = await fetch(url);
        let parsedData = await  data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
      };

        return (
            <>
                <h1 className="text-center" style={{margin:'30px 0px', marginTop: '90px'}}>NewsMonkey - Top {props.category} Headlines</h1>
                {loading && <Spinner/>}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner/>}
            >
                <div className="container"> 
                <div className="row">
                {articles.map((element)=>{
                 return <div className="col-md-4" key={element.url}>
                < NewsItem title= {element.title?element.title:""} description={element.description?element.description:""} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
                </div>  
                })}
                </div>
                </div>
            </InfiniteScroll>
            </>
        )
} 

News.defaultProps = {
    country:"in",
    pgsize: 6,
    category: "general",
   }

News.propTypes = {
    country: PropTypes.string,
    pgsize: PropTypes.number,
    category: PropTypes.string,
   }


export default News