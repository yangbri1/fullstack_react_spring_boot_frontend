// import useParams hook (acts similarly to access Express' HTTP req.params) to allow dynamically updating some element
// import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";
// <Link> components to navigate to other pages via visible button, links, etc.
import { Link } from "react-router-dom";

// import custom loading spinner from <Loading /> functional component
import Loading from "../../components/Loading";

export default function Moderators(){
    // declare variable to store parameters
    // Note: if know params' name can useParams() hook to destructure in place otw will have to use dot notation to call upon properties from params obj {}
    // const { name } = useParams();

    const [moderators, setModerators] = useState(null);
    // return(
    //     // use previously destructured params here for dynamic
    //     <h1>Welcome {name}!!</h1>
    // )

    // useEffect setup w/ arrow fn
    useEffect(() => {
        // async function to retrieve data from MongoDB db
        async function getData(){
            try {
                let res = await fetch(`http://localhost:8080/moderators`);
                let data = await res.json();    // this step automatically done if using axios
                
                setModerators(data);
            } catch (err) {
                console.error(err);
            }
        }
        // invoke getData() fn to connect to custom server-side db & retrieve collections from db
        getData();
    }, []); // dependencies array set to empty -- only run once on initial render

    return(
        <>
            <h1>List of Moderators</h1>
            <div className="moderators">
                {/* create a copy of moderators using array .map() method where ... */}
                {moderators ? moderators.map((piece) => {
                    // destructure out "props" in 'Moderators' obj dataset from backend 
                    const { username, email } = piece;
                    // create some <link> components to listed moderators dynamically
                    return(
                        // populate page with fetched moderators datasets & dynamically <Link> up each one to own page
                        <Link key={piece._id} to={`/moderators/${piece._id}`}>
                            <h3>{username} [{email}]</h3>
                        </Link>
                    );
                }) : <h1>Loading <Loading /> </h1>}
            </div>
        </>
    
    );
}
