import loading from '../images/loading.gif'
// this loading spinner (in this case a loading .gif image would give the illusion of something is being loaded/buffering)
export default function Loading(){
    return(
        <img src={loading} alt="loading icon" />
    );
}