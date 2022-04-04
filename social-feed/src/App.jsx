import React, { useState } from 'react';
import AddEntry from './component/addEntry/AddEntry';
import DisplayEntry from './component/displayEntry/DisplayEntry';
import './App.css'

function App() {

  const [entries, setEntries] = useState([{name: "Matt", post: "Had a fun time in Japan!!!"}, {name: "Jake", post: "Just finished work!!!"}])

  function addNewEntry(entry){
    let tempEntries = [...entries, entry]

    setEntries(tempEntries)
  }

  return (
    <div>
      <div>
        <h3 style={{margin: '1em'}}>
          SocialFeed
        </h3>
        <div>
          <div className='border-box'>
            <AddEntry addNewEntry={addNewEntry} />
          </div>
          <div className='border-box'>
            <DisplayEntry parentEntries = {entries} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
