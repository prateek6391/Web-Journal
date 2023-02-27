import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
        <div className='my-3'>
            <div className="card">
                <img src={imageUrl?imageUrl:"https://bsmedia.business-standard.com/_media/bs/img/article/2022-08/03/full/1659512756-1667.jpg"} className="card-img-top" alt="..." style={{height: "200px"}} />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p> 
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
  }
}

export default NewsItem