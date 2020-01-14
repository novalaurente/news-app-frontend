import React, { useEffect, useState, Fragment } from 'react';
import { NewsCard, Pagination } from '.';
import axios from 'axios';
import { Spinner } from 'reactstrap';

const baseUrl = process.env.REACT_APP_API_URL;

const Content = props => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(10);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    const fetchArticles = async () => {
      setIsLoading(true);
      setNews([]);

      const response = await axios.get(baseUrl + '/news?source=' + props.selectedSource);

      setIsLoading(false);
      setNews(response.data);
    };

    fetchArticles();
  }, [props.selectedSource]);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = news.slice(indexOfFirstArticle, indexOfLastArticle);

  return (
    <Fragment>
      <div className='col-lg-10 pt-5 pl-5 d-flex flex-wrap'>
        {isLoading && (
          <div className='d-flex flex-column justify-content-center align-items-center vw-100 vh-100'>
            <Spinner />
          </div>
        )}

        {currentArticles.map((newsArticle, index) => (
          <NewsCard key={index} newsArticle={newsArticle} />
        ))}
        <div style={{flexBasis: '100%', height: '0'}}></div>
        <div className='d-flex mt-auto ml-auto'>
          <Pagination articlesPerPage={articlesPerPage} totalArticles={news.length} paginate={paginate} />
        </div>
        <div style={{flexBasis: '100%', height: '0'}}></div>
        <div className='d-flex mx-auto my-3'>
          <a href="https://newsapi.org" className="small">Powered by News API</a>
        </div>
      </div>
    </Fragment>
  );
};

export default Content;
