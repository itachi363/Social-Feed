import './DisplayEntry.css'
import CustomButton from '../customButton/CustomButton';
import DislikeButton from '../dislikeButton/DislikeButton'

const DisplayEntry = (props) => {

    return ( 
        <tbody>
            {props.parentEntries.map((entry) => {
                return( 
                    <body className='container'>                  
                        <div>
                            <h3>
                                {entry.name}
                            </h3>
                        </div>
                        <div className='margin-date'>
                            {entry.date}
                        </div>
                        <div>
                            {entry.post}
                        </div>
                        <div className='buttons'>
                            <CustomButton Like="button"/>
                            <DislikeButton Dislike="button"/>
                        </div>
                    </body>
                )
            })}
        </tbody>
     );
}
 
export default DisplayEntry;