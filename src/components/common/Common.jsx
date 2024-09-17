import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Common({title}) {
  return (
    <div>
       <div className="common">
        <h4>{title}</h4>
        <MoreVertIcon/>
       </div>
    </div>
  )
}

export default Common