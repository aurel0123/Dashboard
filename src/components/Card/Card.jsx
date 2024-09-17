import React from 'react';
import './Card.css' ;
import Common from '../common/Common'; 
import ReactApexChart from 'react-apexcharts'; 
import TimelineIcon from '@mui/icons-material/Timeline';
import Progress from '../Card/Progres'

function Card() {
  const data = {
    series: [58],
    options: {
      chart: {
        height: 150,
        type: "radialBar",
        foreColor: "grey",
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "58%",
          },
          dataLabels: {
            value: {
              show: false,
            },
          },
        },
      },
      labels: ["58"],
      colors: ["#ff5b5b"],
    },
  }
  const data1 = {
    series: [80],
    options: {
      chart: {
        height: 150,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "58%",
          },
          //add it
          dataLabels: {
            value: {
              show: false,
            },
          },
        },
      },
      labels: ["80"],
      colors: ["#E9B251"],
    },
  }
  return (
    <section className='Cards grid'>
      <div className="Cardbox">
        <Common title= {"Total Revenue"}/>
        <div className="circle center">
          <div className="row">
            <ReactApexChart options={data.options} series={data.series} type='radialBar' height={150}/>
          </div>
          <div className="title rows">
            <h1>258</h1>
            <p>Revenu Today</p>
          </div>
        </div>
      </div>
      <div className="Cardbox">
        <Common title={"Sales Analytic"}/>
        <div className="circle">
          <div className="batch rows">
            <span>32%</span>
            <TimelineIcon className='batchicon'/>
          </div>
          <div className="title rows">
            <h1>8451</h1>
            <p>Revenue Today</p>
          </div>
        </div>
        <Progress done ={60} />

      </div>
      <div className="Cardbox">
        <Common title= {"Total Revenue"}/>
        <div className="circle">
          <div className="row">
            <ReactApexChart options={data1.options} series={data1.series} type='radialBar' height={150}/>
          </div>
          <div className="title rows ">
            <h1>256</h1>
            <p>Revenu Today</p>
          </div>
        </div>
      </div>
      <div className="Cardbox">
        <Common title={"Sales Analytic"}/>
        <div className="circle">
          <div className="batch rows color">
            <span>32%</span>
            <TimelineIcon className='batchicon'/>
          </div>
          <div className="title rows">
            <h1>8451</h1>
            <p>Revenue Today</p>
          </div>
        </div>
        <Progress done={70}/>
      </div>
    </section>
  )
}

export default Card