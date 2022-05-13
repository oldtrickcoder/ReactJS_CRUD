
import BlogList from "../Components/bloglist";
import useFetch from "../Functional/usefetch";
const Home = () => {  
const {data:blogs,isPending,error}=useFetch('http://localhost:8000/blogs');


return ( 
<div className="home">
{error && <div>{error}</div>}
{isPending && <div>Loading....</div>}
{blogs && <BlogList blogs={blogs} title="Semua Artikel" />}
</div>
     );
}
 
export default Home;



