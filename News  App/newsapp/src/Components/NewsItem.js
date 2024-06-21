import React from "react";
import "../style.css";

const NewsItem = (props) => {

  const { title, description, imageUrl, newsUrl } = props;
  const defaultImageUrl =
    "https://aicl-mum-bucket.s3.ap-south-1.amazonaws.com/Production/www-tatamotors-com-NEW/wp-content/uploads/2024/06/th-7624.jpg";
  return (
    <div className="card my-3 bg-dark text-light">
      <img
        src={imageUrl || defaultImageUrl}
        className="card-img-top"
        alt="News"
        onError={(e) => {
          e.target.onerror = null; // prevents looping
          e.target.src = defaultImageUrl;
        }}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {description}
        </p>
        <a href={newsUrl} className="btn btn-primary">
          Read more
        </a>
      </div>

    </div>
  );

}

export default NewsItem;
