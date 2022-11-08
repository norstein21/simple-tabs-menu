import React, { useState, useEffect } from 'react'
import Loader from './Loading';
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [loading,setLoading] = useState(true);
  const [isiList,setIsiList] = useState([]);
  const [nomor,setNomor] = useState(0);

  const ambilData = async() => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setIsiList(data);
    setInterval(()=>{
      setLoading(false);
    },3000);
  }

  useEffect(()=>{
    ambilData();
  },[])

  if (loading){
    return (
    <>
       <section>
        <Loader />
       </section>
    </>);
  }

  const {title,dates,duties,company} = isiList[nomor];

  return (

  <main>
    <section className='section'>
      <div className='title'>
        <h2>Pengalaman</h2>
        <div className='underline'></div>
      </div>
    <div className='jobs-center'>
    {/* btn container */}
      <div className='btn-container'>
        {isiList.map((isi,index)=>{
          return (
            <button onClick={()=>setNomor(index)} key={isi.id} className={`job-btn ${index === nomor && "active-btn"}`}>
              {isi.company}
            </button>
          )
        })
        }
      </div>
      <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {duties.map((d,index)=>{
            return (
              <div className='job-desc' key={index}>
                <FaAngleDoubleRight className='job-icon'/>
                <p>{d}</p>
              </div>
            );
          })}
        </article>
    </div>
    </section>
  </main>
  );

}

export default App;
