import React, { useState, useEffect } from "react";
import "../style.css";
import Spinner from "./Spinner";
import NewsItem from "../Components/NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    document.title = `${props.category.charAt(0).toUpperCase() + props.category.slice(1)} - News`;
    fetchNews();

  }, []);

  const fetchNews = async (page = 1) => {
    props.setProgress(50);
    setLoading(true);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&page=${page}&pageSize=${props.pageSize}&apiKey=f06d304604074d0b82ce12af9826a17d`;
    const response = await fetch(url);
    props.setProgress(70);
    const parseData = await response.json();

    setArticles((prevArticles) => (page === 1 ? parseData.articles : prevArticles.concat(parseData.articles)));
    setLoading(false);
    setTotalResults(parseData.totalResults);
    setPage(page);
    props.setProgress(100);
  };

  const fetchMoreData = async () => {
    if (articles.length < totalResults) {
      fetchNews(page + 1);
    }
  };

  return (
    <div className="container my-2">
      <h2 className="my-5 text-center">
        <strong>
          Top Headlines - {props.category.charAt(0).toUpperCase() + props.category.slice(1)}
        </strong>
      </h2>

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={<Spinner />}
      >
        {loading && <Spinner />}
        {Array.isArray(articles) && (
          <div className="container">
            <div className="row">
              {articles.map((article, index) => (
                <div className="col-md-4" key={index}>
                  <NewsItem
                    title={article.title}
                    description={article.description}
                    imageUrl={article.urlToImage}
                    newsUrl={article.url}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </InfiniteScroll>
    </div>
  );
};

export default News;
