import React from 'react';
import './TopLoadingBar.css';

export default function TopLoadingBar(props) {

  return (
    <div className='topLoadingBar' style={{width:`${props.progress}`}}>
    </div>
  )
}
