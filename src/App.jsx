import React, {useEffect} from 'react'
import { ajax } from './tools/ajax'

useEffect(()=>{
  const countries =ajax({
    method : 'GET',
    url : 'aed0c1526690ebee1cf583d848ea272b'
  })
},[]);

const App = () => {
  return (
    <div>
      <div>
      <label>Eligue un pais</label>
        <select name=''>
          <option value="">A</option>
          <option value="">A</option>
          <option value="">A</option>
          <option value="">A</option>
          <option value="">A</option>
          <option value="">A</option>
        </select>
      </div>
    </div>
  )
}

export default App
