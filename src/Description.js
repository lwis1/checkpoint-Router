
const Description=(props)=>{
    
console.log(props.state[props.match.params.index-1].movieURL)
    return (
        <div className="desc">
           <h1>{props.state[props.match.params.index-1].description}</h1>  
            <iframe width="560" height="315" 
            src={props.state[props.match.params.index-1].movieURL} title="YouTube video player" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            <br/>

            <button  onClick={()=>props.history.push("/")}>Go to Home</button>
        </div>
    )
}
export default Description