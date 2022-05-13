import { Link } from "react-router-dom";
const NotFound = () => {
    return (  
        <div className="not-found">
            <h2>sorry</h2>
            <p>That Page Cannot be found</p>
            <Link to="/"> Back To Homepage</Link>
        </div>
    );
}
 
export default NotFound;