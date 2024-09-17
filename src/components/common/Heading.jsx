import React from 'react'; 
import './Heading.css'

function Heading({title}) {
  return (
    <div>
        <h2 className='heading'>
            {title}
        </h2>
    </div>
  )
}

export default Heading