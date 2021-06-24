import { Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactStars from "react-rating-stars-component";
import {Link} from 'react-router-dom'

const List=({state})=>{
const ratingChanged = (newRating) =>console.log(newRating);

return(<div className="container">
{state.map(({title,description,posterURL,rating},index)=><Card style={{ width: '18rem' ,marginRight:20}} key={index}>
  <Link to={`/description/${index+1}`} ><Card.Img variant="top" src={posterURL} height="400px" /></Link>
  <Card.Body>
    <Card.Title >{title}</Card.Title>
    <Card.Text>
     {description}
    </Card.Text>
    <ReactStars
    edit={false}
    value={rating}
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
  />
  </Card.Body>
</Card>)}
</div>)
}
export default List