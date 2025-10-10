// import useEffect() to fetch data from backend
// import useState() to hold state
import { useEffect, useState } from "react";
// <Link> component to re-direct to other pages
import { Link } from "react-router-dom";

// in this case import axios to delete a post from backend
/* Note: axios works even when using "fetch" to access backend on other route */
import axios from 'axios';

/* Note: "Components (little pieces add to a page) are parts of a page (entire URL)" */
// create React functional component
export default function Jobs(){

    // set state jobs initially to null (NOT "null" (not a falsy value))
    let [jobs, setJobs] = useState(null);

    useEffect(() => {
        async function getData(){
            try {
                // fetch data from forums endpoint in backend
                let res = await fetch(`http://localhost:8080/jobs`);
                // convert to usable JSON string format (obj)
                let data = await res.json();    // omit this step while using axios (inherently done)
                // sets "jobs" state to retrieved data aka get ALL posts from backend
                setJobs(data);
            } catch (err) {
                // console out error in encounter any
                console.error(err);
            }
        }
        // invoke above asynchronous fn
        getData();
    }, []); // dependencies list/array set to empty -- only render initially (once)
    
    // handler for delete functionality -- always need "async" to pair w/ "await" to fetch data from BE & try-catch (as precaution)
    async function handleDelete(id){
        try {
            const res = await axios.delete(`http://localhost:8080/jobs/${id}`)
            // redeclare state to new changes
            // Recall: Do NOT include {} -- else filter will encapsulate ALL jobs at hand (delete all when pressed)"
            setPosts(jobs.filter(job =>
            // if job's unique "_id" does NOT equal to backend, keep it
            job._id !== id
        ));
        } catch (err) {
            console.error(err);
        }
        
    }
    return(
        <>
            <h1 title="Job offerings here" alt="Job Offerings">Job Offerings Page</h1>
            <div className="job_board" alt="List of jobs below">
                {/* if jobs exists, call JS array method .map() on it to create a new copy w/ wanted filters */}
                {jobs ? jobs.map((offering) => {
                {/* {getJob() ? getJob().map((offering) => { */}
                    // destructure out wanted info
                    const { title, description, company } = offering;
                    return(
                        <div key={offering._id}>
                            
                            {/* // populate page with fetched job offering data & dynamically <Link> up each one to own page */}
                            <Link to={`/jobs/${offering._id}`}>
                                <h2 style={{fontStyle: "italic", color: "aqua"}} title="Some jobs">{title} [{company}]</h2>
                                <p style={{}}>{description}</p>
                            </Link>
                            <Link to={`/jobs/update_offering/${offering._id}`}>
                                <button id="edit-btn" title="Redo or undo">Edit📝</button>
                            </Link>
                            {/* <Link to={`/jobs/delete_offering/${offering._id}`}>Delete</Link> */}
                            {/* DeleteJob(offering._id); */}

                            <label id="delete-btn">
                                <input type="button" id="delete-btn" value="Delete🗑️" title="Are you sure?"
                                    onClick={() => {
                                        handleDelete(offering._id);
                                    }}
                                        // dispatch({ type: ACTION.REMOVETASK, payload: { id: task.id}})} 
                                    // https://www.geeksforgeeks.org/how-to-disable-a-button-in-reactjs/
                                    // Aside: DN know "disabled" could be written this way 
                                    // ternary operator to conditionally enable "Delete" functionality when task's complete status is true
                                    // Notice: "Delete" button availability depends on "Toggle" (green -- task.complete == true, red -- task.complete == false)
                                    // disabled={task.complete ? false : true} // disabled={!task.complete} works too
                                />
                            </label>
                        </div>
                        /* Note: "Warning: Each child in a list should have a unique 'key' prop 
                         appeared when 2nd <Link> component was added... {heading} & {index} after setting .map(mention, index) DN work either" */
                        
                        // <>
                        //     <h2>{heading}</h2>
                        //     <h4>{message}</h4>
                        //     <h3><b>Username</b>: <i>{signed}</i></p>
                        // </> 
                    );
                // if posts do NOT exist push out "Loading ..." indicator
                }) : <h1>Loading ...</h1>}
            </div>
        </>
    );
}