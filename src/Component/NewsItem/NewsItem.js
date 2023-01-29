import React from 'react'
import './NewsItem.css';
const Newsitem = (props) => {
  let { title, description, imgUrl, newsUrl, author, date, source } = props;
  return (
    <div>
      <div className="card">
        <div style={{
          display: "flex",
          justifyContent: "flex-end",
          position: "absolute",
          right: "0",
        }}><span className="badge rounded-pill bg-danger">{source}</span></div>
        <img src={!imgUrl ? "https://cdn.abcotvs.com/dip/images/12701302_011423-wabc-mega-img.jpg?w=1600" : imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toUTCString()}</small></p>
          <a href={newsUrl} target="_blank" rel='noreferrer' className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
    </div>
  )
}
export default Newsitem;
