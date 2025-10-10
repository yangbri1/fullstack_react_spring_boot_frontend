// import useState() hook for state to hold formData
import { useState } from "react";
// import useNavigate() hook to navigate elsewhere upon presence of events (interactions) 
// <Link> component from react-router-dom requires a button, useNavigate() does NOT
import { useNavigate } from "react-router-dom";

// incorporate axios library to fetch data from backend
import axios from 'axios';

function CreateJob(){
    // prepare an instance of useNavigate() for later use
    const nav = useNavigate();

    // declare an state w/ initial values of ...
    const [formData, setFormData] = useState({
        // must match "forumSchema" schema fields in backend
        title: '',
        description: '',
        company: '',
        location: '',
        year_of_experience: 1,
        work_arrangement: hybrid,
        email: '',
        mod_id: '1',
        created_on: 0
    });

    // testing useState() for each props in object
    // const [heading, setHeading] = useState('');
    // const [urgency, setUrgency] = useState(1);
    // const [message, setMessage] = useState('');
    // const [signed, setSigned] = useState('');
    // const [human, setHuman] = useState(false);

    /* component (event) handler functions */
    // function handleClick(event){
    //     // recall: `http://localhost:3000/jobs` (from controllers.mjs)
    //     nav('/jobs');   // navigate to endpoint /jobs
    // }
    
    // for a checkbox -- toggle
    function handleChange(event){
        // if input field is "human"
        if(event.target.type == 'checkbox'){
            setFormData({
                // spread operator to fill in missing data
                ...formData,
                human: event.target.checked // set key "human" to event.target.checked -- "checked" b/c it's a checkbox
            });
        }
        // if its any other input fields
        else{
            setFormData({
                ...formData,
                // access rest of keys in obj {} using [] notation & establish value to inputted event.target.value
                [event.target.name]: event.target.value
            });
        }
    }

    // "async" (always when accessing BE) handler function to create msg to backend
    async function handleSubmit(event){
        // prevent default behavior (refresh)
        event.preventDefault();
        try {
            // create response
            // let res = await createMsg(formData);
            const res = await axios.post('http://localhost:3000/jobs', formData);
            // const res = await axios.post('http://localhost:3000/jobs', {
            //      description, company, location, year_of_experience, work_arrangement, email, mod_id, created_on
            // });
            console.log("Job offering created successfully", res);
            // navigate to /jobs after
            nav('/jobs');
        } catch (err) {
            console.error(err);
        }
    }

    return(
        // React fragments to as overhead parent element else error
        <>
            <h1>Create Job Offering</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">
                    <h3>
                        Title:{"\t"}
                        <input value={formData.title} onChange={handleChange} id="title" type="text" name="title" alt="job offering title" placeholder="Topic" required />
                    </h3> 
                </label>
        year_of_experience: 1,
        work_arrangement: hybrid,
        email: '',
        mod_id: '1',
        created_on: 0
                {/* <br /> */}
                <label htmlFor="description">
                    <h3>
                        Description: {" "}
                        <textarea value={formData.description} onChange={handleChange} id="description" type="textarea" name="description" alt="job description body" placeholder="Job description tied to role" required />
                    </h3>
                </label>
                {/* <br /> */}
                <label htmlFor="company">
                    <h3>
                        Company: {" "}
                        <textarea value={formData.company} onChange={handleChange} id="company" type="text" name="Work will be done here" required 
                                        />
                    </h3>
                    
                </label>
                {/* <br /> */}
                <label htmlFor="location">
                    <h3>
                        Location: {" "}
                        <input value={formData.location} onChange={handleChange} id="location" type="text" name="location" alt="company" placeholder="Company's Name" />
                    </h3>
                   
                </label>
                {/* <br /> */}
                <label htmlFor="year_of_experience">
                    <h3>
                        Years of Experience: {" "}
                        <input value={formData.signed} onChange={handleChange} id="year_of_experience" type="range" name="year_of_experience" alt="year_of_experience" placeholder="Years of experience desired" />
                    </h3>
                   
                </label>
                {/* <br /> */}
                {/* <br /> */}
                <label htmlFor="work_arrangement">
                    <h3>
                        Work Arrangement: {" "}
                        <input value={formData.signed} onChange={handleChange} id="work_arrangement" type="text" name="work_arrangement" alt="work_arrangement" placeholder="ONSITE, REMOTE, or HYBRID" />
                    </h3>
                   
                </label>
                {/* <br /> */}
                <label htmlFor="email">
                    <h3>
                        Registered Email: {" "}
                        <input value={formData.email} onChange={handleChange} id="email" type="email" name="email" alt="email" placeholder="Company's formal email" />
                    </h3>
                   
                </label>

                {/* Aside: 'mod_id' & 'created_on' are supposed to be generated by JPA --- aka not manually inputted ... unsure if include*/}
                
                {/* possibly include a human/machine detector --- captcha */}
                {/* <label htmlFor="human"> */}
                    {/* <h3> */}
                        {/* Human Test: {" "} */}
                        {/* Notice: "checked" property here instead of "value" as this is of type checkbox */}
                        {/* <input checked={formData.human} onChange={handleChange} id="human" type="checkbox" name="human" alt="are you real?" placeholder="Captcha" /> */}
                    {/* </h3> */}
    
                    {/* dropdown menu of options */}
                    {/* <select onChange={handleChange} id="human" type="text" name="human" placeholder="Captcha">
                        <option value="false">BEEP BOOP R.O.B.O.T I A.M.🤖</option>
                        <option value="true">Let me in! I'm human!!🙂</option>
                    </select> */}
                {/* </label> */}
                {/* <br /> */}
                {/* <button onClick={handleClick}>Send It!</button> */}
                <button id="forum-btn"type="submit">Send 🔍</button>

            </form>
        </>
    )
}   

export default CreateJob;