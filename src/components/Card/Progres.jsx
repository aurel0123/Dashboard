import React from 'react'

function Progres({done}) {
  return (
    <div>
        <div className="progress">
            <div className="progress-done"
            style={{
                width: `${done}%`,
                opacity : 1
            }}
            >

            </div>
        </div>
    </div>
  )
}

export default Progres