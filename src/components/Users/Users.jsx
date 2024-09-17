import React from 'react'
import './Users.css'; 
import data from './data'
function Users() {
  return (
    <section className='Users grid'>
        {
            data.map((val)=> (
                <div className="Cardbox Users-content" key={val.id}>
                    <div className="content-left">
                        <div className="img">
                            <img src={val.cover} alt="" className='imageCircle'/>
                        </div>
                    </div>
                    <div className="content-right">
                        <h4>{val.title}</h4>
                        <p>{val.email}</p>
                        <span>{val.user}</span>
                    </div>
                </div>
            ))
        }
    </section>
  )
}

export default Users