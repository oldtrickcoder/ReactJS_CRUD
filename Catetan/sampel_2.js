
// bagian ini sample untuk functional manipulation dan event trigger button untuk bagian button ddisimpan pada bagian Home.js
const Home = () => {
    const handleClick = (e) =>{
        console.log("Hello, Ninjasss", e);
    }

    const handleClickAgain = (name, e)=>{
        console.log("hello "+name, e);
    }
    return ( 
<div className="home">
<h2>Homepage</h2>
<button onClick={handleClick}>Click me</button>
<button onClick={(e)=>handleClickAgain("Mario",e)}> Click Me Again </button>
</div>
     );
}
 
export default Home;