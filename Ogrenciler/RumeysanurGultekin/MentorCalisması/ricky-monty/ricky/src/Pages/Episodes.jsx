import React from 'react'
import { useState, useEffect } from 'react'
import Cards from '../components/Cards/Cards'
import InputGroup from '../components/Filters/Category/InputGroup'

const Episodes = () => {
  let [id, setID] = useState(1)
  let [info, setInfo] = useState([]);
  let {air_date, name } = info;
  let [results, setResults] = useState([]);

  let api= `https://rickandmortyapi.com/api/episode/${id}`

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);
      
      let a = await Promise.all(
        data.characters.map((x)=> {
          return fetch(x).then((res) => res.json())
        })
      );
      setResults(a);
    })();
  }, [api]);

  return (
    <div className='container'>

      <div className='row mb-4'>
        <h1 className='text-center mb-4'>
          Episode : <span className='text-info'>{name === "" ? "Unknown" : name} </span></h1>
        <h5 className='text-center'>
          Air Date {air_date ==="" ? "Unknown" : air_date}</h5>
      </div>

      <div className='row'>
        <div className='col-lg-3 col-12'>
          <h4 className="text-center mb-4"> Pick Episodes</h4>
          <InputGroup total={51} name="Episodes" setID={setID}/>
        </div>
        <div className='col-lg-8 col-12'>
          <div className='row'>
            <Cards results={results} page="/episodes/"/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Episodes