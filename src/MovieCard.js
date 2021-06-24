import {useState} from 'react'
const Add=(props)=>{
  const [state,setState]=useState({title:"",description:"",posterURL:"",rating:1})
  const handleChange=(e)=>{
    
    setState({...state,[e.target.id]:e.target.value}) 
   
    } 
    const handleSave=(e)=>{
      e.preventDefault()
      props.handleState(state)
      setState({title:"",description:"",posterURL:"",movieURL:"",rating:1})
    }
    return (
      <form id="add">
          
          <input value={state.title} id="title" placeholder="title" onChange={handleChange}/>
          <input value={state.description}  id="description" placeholder="description" onChange={handleChange}/>
          <input value={state.posterURL} id="posterURL" placeholder="picture" onChange={handleChange}/>
          <input value={state.movieURL} id="movieURL" placeholder="youtube link" onChange={handleChange}/>
          <input value={state.rating} type="number" id="rating" placeholder="Number of star" onChange={handleChange}/>

          <button onClick={handleSave}>Add a  Movie</button> 
          <button  onClick={()=>props.history.push("/")}>Go to Home</button>

          
         
      </form>
  )
}
export default Add