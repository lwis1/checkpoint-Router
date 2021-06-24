import List from './MovieList'
import Add from './MovieCard'
import Filter from './Filter'
import {useState,Fragment} from 'react'
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom'

import './style.css'
import Description from './Description'
const App=(e)=>{
  const [state,setState]=useState([{title:"First Movie ",description:" Movie 1 description",posterURL:"movie1.jpg",movieURL:"https://www.youtube.com/embed/Qc5sc0Wq8aU",rating:2},{title:"Second Movie ",description:"Movie 2 description",posterURL:"movie2.jpg",movieURL:"https://www.youtube.com/embed/pgWeSDHmezk",rating:5},
  {title:"Third Movie",description:"Movie 3 description",posterURL:"movie3.jpg",movieURL:"https://www.youtube.com/embed/szjstVEdLP4",rating:3}])
  const [filter,setFilter]=useState("")
  const [rateFilter, setRateFilter] = useState(0)
  const handleState=(newMovie)=>{setState([...state,newMovie])}
  const changeFilter=(val)=>{setFilter(val)}
  const changeRate=(val)=>{setRateFilter(val)}
  const filteration=(filter)=>{
    return state.filter(el=>el.title.toLowerCase().includes(filter.toLowerCase())&& el.rating>=rateFilter)
  }
  return(
  <BrowserRouter>
  <div className="App">      
  <Link to="/addMovie" className="link"> + Add a New movie</Link>
  <Switch>
  <Route exact path="/"  
    render={()=>
      <Fragment>
        <Filter changeFilter={changeFilter} changeRate={changeRate}/>
        <List state={filteration(filter)}/>
      </Fragment>}/>
      <Route  path="/addMovie" render={(props)=><Add {...props} handleState={handleState}/>}/>
      <Route  path="/description/:index" render={(props)=><Description {...props}  state={state}/>}/>
      </Switch>
  </div>
  </BrowserRouter>
  )
}
export default App 