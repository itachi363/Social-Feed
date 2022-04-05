import React, { useState } from 'react';
import AddEntry from './component/addEntry/AddEntry';
import DisplayEntry from './component/displayEntry/DisplayEntry';
import './App.css'


function App() {

  const [entries, setEntries] = useState([{name: "Matt", post: "Had a fun time in Japan!!!", date: '11-23-2021'}, {name: "Jake", post: "Just finished work!!!", date: '11-24-2021'}])

  function addNewEntry(entry){
    let tempEntries = [...entries, entry]

    setEntries(tempEntries)
  }

  return (
    <div>
      <div>
        <h3 style={{margin: '1em'}}>
          Social<medium className='text-color'>Feed</medium>
        </h3>
        <div>
          <div className='border-box-create'>
            <AddEntry addNewEntry={addNewEntry} />
          </div>
          <div className='border-box-display'>
            <DisplayEntry parentEntries = {entries} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
