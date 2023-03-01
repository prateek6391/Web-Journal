import React from 'react'

const NewsItem =(props) => {

    let {title, description, imageUrl, newsUrl, author, date} = props;
    return (
        <div className='my-3'>
            <div className="card">
                <img src={imageUrl?imageUrl:"https://bsmedia.business-standard.com/_media/bs/img/article/2022-08/03/full/1659512756-1667.jpg"} className="card-img-top" alt="..." style={{height: "200px"}} />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p> 
                    <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem