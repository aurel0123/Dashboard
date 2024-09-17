import React from 'react'
import Heading from '../common/Heading';
import Card from '../Card/Card';
import Charts from '../Charts/Charts';
import Users from '../Users/Users';
import Tabledata from '../Table/Tabledata';
function Home() {
  return (
    <>
        <section className='Home'>
            <div className="container">
                <div className="Heading flexSB">
                    <Heading title={"Dashboard"}/>
                    <p style={{color: "#fff"}}>Adminto / Dashboard</p>
                </div>
                <Card/>
                <Charts/>
                <Users/>
                <Tabledata/>
            </div>
        </section>
    </>
  )
}

export default Home