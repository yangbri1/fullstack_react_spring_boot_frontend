// import useState() hook for state to hold formData
import { useState } from "react";
// import useNavigate() hook to navigate elsewhere upon presence of events (interactions) 
// <Link> component from react-router-dom requires a button, useNavigate() does NOT
import { useNavigate } from "react-router-dom";

/* IMPORTANT: imported React 'useEffect()' hook in order to fetch from exposed '/moderators' API endpoint ...
** */
import { useEffect } from "react";

// incorporate axios library to fetch data from backend
import axios from 'axios';

function CreateJob(){
    // prepare an instance of useNavigate() for later use
    const nav = useNavigate();

    // manage/hold the 'moderators' state for later handling
    const [moderators, setModerators] = useState([]);

    // actual fetching of all the 'moderators' DB table records
    useEffect(() => {
        axios.get('http://localhost:8080/moderators')
            .then(res => setModerators(res.data))
            .catch(err => console.error("Error fetching moderators:", err));
    }, []); // '[]' empty array prevents default, constant re-render/refreshing (run once only)

    // declare an state w/ initial values of ...
    const [formData, setFormData] = useState({
        // must match "forumSchema" schema fields in backend
        title: '',
        description: '',
        company: '',
        location: '',
        year_of_experience: 1,
        work_arrangement: 'HYBRID',
        yearly_salary: 0,
        email: '',
        mod_id: 1
        // created_on: 0
    });

    // testing useState() for each props in object
    // const [heading, setHeading] = useState('');
    // const [urgency, setUrgency] = useState(1);
    // const [message, setMessage] = useState('');
    // const [signed, setSigned] = useState('');
    // const [human, setHuman] = useState(false);

    /* component (event) handler functions */
    // function handleClick(event){
    //     // recall: `http://localhost:8080/jobs` (from controllers.mjs)
    //     nav('/jobs');   // navigate to endpoint /jobs
    // }
    
    // for a checkbox -- toggle
    // function handleChange(event){
    //     // if input field is "human"
    //     if(event.target.type == 'checkbox'){
    //         setFormData({
    //             // spread operator to fill in missing data
    //             ...formData,
    //             human: event.target.checked // set key "human" to event.target.checked -- "checked" b/c it's a checkbox
    //         });
    //     }
    //     // if its any other input fields
    //     else{
    //         setFormData({
    //             ...formData,
    //             // access rest of keys in obj {} using [] notation & establish value to inputted event.target.value
    //             [event.target.name]: event.target.value
    //         });
    //     }
    // }
    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : (type === 'number' ? Number(value) : value),
        });
    }


    // // "async" (always when accessing BE) handler function to create msg to backend
    // async function handleSubmit(event){
    //     // prevent default behavior (refresh)
    //     event.preventDefault();
    //     try {
    //         // create response
    //         // let res = await createMsg(formData);
    //         const res = await axios.post('http://localhost:8080/jobs', formData);
    //         // const res = await axios.post('http://localhost:8080/jobs', {
    //         //      description, company, location, year_of_experience, work_arrangement, email, mod_id, created_on
    //         // });
    //         console.log("Job offering created successfully", res);
    //         // navigate to /jobs after
    //         nav('/jobs');
    //     } catch (err) {
    //         console.error(err);
    //     }
    // }
    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const payload = {
                title: formData.title,
                description: formData.description,
                company: formData.company,
                location: formData.location,
                yearOfExperience: parseInt(formData.year_of_experience),
                workArrangement: formData.work_arrangement.toUpperCase(),
                yearlySalary: parseFloat(formData.yearly_salary),
                hiringTeamEmail: formData.email,
                moderator: {
                    modId: parseInt(formData.mod_id)
                }
            };

            const res = await axios.post('http://localhost:8080/jobs', payload);
            console.log("Job created:", res.data);
            nav("/jobs");
        } catch (err) {
            console.error("Failed to create job:", err.response?.data || err.message);
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
                        {/* Recall: `name` attribute must match key in 'formData' (schema) otw 'handleChange()' would NOT work */}
                        <input value={formData.title} onChange={handleChange} id="title" type="text" name="title" alt="job offering title" placeholder="Topic" required />
                    </h3> 
                </label>
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
                        <input value={formData.company} onChange={handleChange} id="company" type="text" name="company" required 
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
                        <input value={formData.year_of_experience} onChange={handleChange} id="year_of_experience" type="number" name="year_of_experience" alt="year_of_experience" placeholder="Years of experience desired" />
                    </h3>
                </label>
                {/* <br /> */}

                <label htmlFor="work_arrangement">
                    <h3>
                        Work Arrangement: {" "}
                        <input value={formData.work_arrangement} onChange={handleChange} id="work_arrangement" type="text" name="work_arrangement" alt="work_arrangement" placeholder="ONSITE, REMOTE, or HYBRID" />
                    </h3>
                </label>
                {/* <br /> */}

                <label htmlFor="yearly_salary">
                    <h3>
                        Yearly Salary:{" "}
                        <input
                            value={formData.yearly_salary || ''}
                            onChange={handleChange}
                            id="yearly_salary"
                            type="number"
                            name="yearly_salary"
                            placeholder="120000"
                        />
                    </h3>
                </label>
                {/* <br /> */}

                <label htmlFor="email">
                    <h3>
                        Registered Email: {" "}
                        <input value={formData.email} onChange={handleChange} id="email" type="email" name="email" alt="email" placeholder="Company's formal email" />
                    </h3>
                </label>

                 {/* <br /> */}
                {/* <label htmlFor="mod_id">
                    <h3>
                        Moderator ID: {" "}
                        <input value={formData.mod_id} onChange={handleChange} id="mod_id" type="number" name="mod_id" alt="mod_id" placeholder="Id of moderator who posted/approved this job offering" />
                    </h3>
                </label> */}

                {/* converted input field for 'mod_id' into a dropdown select instead of type=numbers
                that way the user that creates a job would NOT have to guess which are valid moderator ID (when they could just select one) */}
                <label htmlFor="mod_id">
                    <h3>
                        Moderator ID:
                        <select
                            id="mod_id"
                            name="mod_id"
                            value={formData.mod_id}
                            onChange={handleChange}
                            required
                        >
                            <option value="">-- Select Moderator --</option>
                            {moderators.map((mod) => (
                                <option key={mod.modId} value={mod.modId}>
                                    {mod.username} ({mod.modId})
                                </option>
                            ))}
                        </select>
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