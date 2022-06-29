import React from "react";

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <>
      <div className="my-3">
        <div className="card">
          <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
            {source}
          </span>
          <img src={!imageUrl ? "https://www.telugu360.com/wp-content/uploads/2022/03/RRR-Movie-pre-release-business.jpg" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}...
            </p>
            <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
      </>
    );
}

export default NewsItem;
