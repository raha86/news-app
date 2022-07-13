import React from 'react'
import './NewsItem.css'

export default function NewsItem(props) {
  let {title, desc, source, imgUrl} = props;
  return (
    <div className='card'>
        <div className="imgCont">
            <img src={imgUrl?imgUrl:"https://images.pexels.com/photos/1888015/pexels-photo-1888015.jpeg?cs=srgb&dl=pexels-ann-h-1888015.jpg&fm=jpg"} alt="" />
        </div>
        <div className="details">
            <h3 className="newsTitle">{title}</h3>
            <p className="newsDesc">{desc}</p>
            <p className="source">{source}</p>
            <p className="author">author</p>
            <p className='time'>2022-06-29T15:34:00Z"</p>
        </div>
    </div>
  )
}
