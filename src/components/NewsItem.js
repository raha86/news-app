import React from 'react'
import './NewsItem.css'

export default function NewsItem(props) {
  let {title, desc, source, imgUrl, publishedAt} = props;
  return (
    <div className='card'>
        <div className="imgCont">
            <img src={imgUrl?imgUrl:"https://images.pexels.com/photos/1888015/pexels-photo-1888015.jpeg?cs=srgb&dl=pexels-ann-h-1888015.jpg&fm=jpg"} alt="" />
        </div>
        <div className="details">
            <h3 className="newsTitle">{title}</h3>
            <p className="newsDesc">{desc}</p>
            <p className='time'>{publishedAt.substring(0,10)} at {publishedAt.substring(11,19)}</p>
            <p className="source">{source}</p>
        </div>
    </div>
  )
}
