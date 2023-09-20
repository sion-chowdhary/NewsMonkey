import React from 'react'

const NewsItem = (props) => {

        let {title,description,imgUrl,newsUrl,author,date} = props;
        return (
            <div className='my-3'>
                <div className="card">
                    <img src={!imgUrl?"//www.digitaltrends.com/wp-content/uploads/2022/11/among-us-vr-imposter-next-to-body.png":imgUrl} 
                    className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
}

export default NewsItem