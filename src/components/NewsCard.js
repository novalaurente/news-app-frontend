import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import moment from 'moment';

const NewsCard = (props) => { 

  const newsArticle = props.newsArticle;

  return (
    <div className="col-lg-4 d-flex my-3">
      <Card className="flex-fill">
        <CardImg top width="100%" height="auto" src={newsArticle.urlToImage} alt="article image" />
        <CardBody className="d-flex flex-column">
          <CardTitle className="font-weight-bold" style={{fontSize: '16px'}}>{newsArticle.title}</CardTitle>
          <CardSubtitle className="small">
          {moment(newsArticle.publishedAt).format('LLL')} 
          </CardSubtitle>
          <CardText className="mt-3">{newsArticle.description}</CardText>
          <div className="d-flex mt-auto">
            <a className='btn btn-success d-flex ml-auto' href={newsArticle.url} target="_blank" rel="noopener noreferrer">
              View Article
            </a>
          </div>         
        </CardBody>
      </Card>
    </div>
  );
};

export default NewsCard;