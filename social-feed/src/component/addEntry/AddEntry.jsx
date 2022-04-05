import { useState } from "react";
import './AddEntry.css'


const AddEntry = (props) => {

    const [name, setName] = useState('')
    const [post, setPost] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        let newEntry = {
            name: name,
            post: post
        }
        props.addNewEntry(newEntry)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div className="margin">
                <label>Name </label>
                <textarea className="form-control" rows="1" cols="80" value={name} onChange={(event) => setName(event.target.value)}></textarea>
            </div>
            <div className="margin">
                <label>Post </label>
                <textarea className="form-control" rows="4" cols="80" value={post} onChange={(event) => setPost(event.target.value)}></textarea>
                <button type="submit">Create</button>
            </div>
        </form>
     );
}
 
export default AddEntry;