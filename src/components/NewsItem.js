
import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className="my-3">
        <div className="card" >
          <div style={ {display: 'flex',
        justifyContent: 'flex-end',
        position: 'absolute',
        right:'0' }}>
        <span className=" badge rounded-pill bg-danger" > {source}
   </span>
   </div>
          {/*style={{width: "18rem"}}*/}
  <img src={!imageUrl?"https://images.indianexpress.com/2022/12/MIUI-14.jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...
  </h5> <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-danger">By {!author? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
    {/*<p className="card-text"><small className="text-muted">By {!author? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>*/}
    <a href= {newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read more</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
