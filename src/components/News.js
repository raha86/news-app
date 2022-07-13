import React from 'react'
import { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';

import NewsItem from './NewsItem'
import './News.css'

export default function News(props) {
  const [articles, setArticles] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  News.defaultProps = {
    category: "general",
    country:'in'
  }

  let pageSize = 0;

  const updateNews = async () =>{
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${pageNo}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
  }

  useEffect(() => {
    updateNews(); 
  }, [])

  const fetchMore = async () =>{
      setPageNo(pageNo+1)
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${pageNo}`;
      let data = await fetch(url);
      let parsedData = await data.json()
      setArticles(articles.concat(parsedData.articles));
  }

  

  return (
    <>
      <h1 className="pageHeading">News app - {props.category==="general"?"top":props.category} headlines</h1>
      <InfiniteScroll
        dataLength={articles.length} //This is important field to render the next data
        next={fetchMore}
        hasMore={totalResults>articles.length}
        loader={<h4>Loading...</h4>}
        >
            <div className='newsItemCont'>
              {articles.map(element=>{
                pageSize = pageSize + 1;
                return <a href={element.url}>
                  <NewsItem key={element.url} title={element.title} desc={element.description} source={element.source.name} imgUrl={element.urlToImage} publishedAt={element.publishedAt}/>
                  </a>
              })}
            </div>
      </InfiniteScroll>
    </>
  )
}
