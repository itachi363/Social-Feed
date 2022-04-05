import { useState } from "react";
import './AddEntry.css'


const AddEntry = (props) => {

    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [post, setPost] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        let newEntry = {
            name: name,
            date: date,
            post: post
        }
        props.addNewEntry(newEntry)
    }

    return ( 
        <form onSubmit={handleSubmit} className="border-entry">
            <div className="margin">
                <label>Name </label>
                <textarea rows="1" cols="80" value={name} onChange={(event) => setName(event.target.value)}></textarea>
            </div>
            <div className="margin">
                <label>Date </label>
                <input type="date" value={date} onChange={(event) => setDate(event.target.value)} />
            </div>
            <div className="margin">
                <label>Post </label>
                <textarea rows="4" cols="80" value={post} onChange={(event) => setPost(event.target.value)}></textarea>
                <button type="submit">Create</button>
            </div>
        </form>
     );
}
 
export default AddEntry;