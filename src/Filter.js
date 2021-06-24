const Filter=({changeFilter,changeRate})=>{
    
    return (
      <form>
          <input type="text"onChange={(e)=>changeFilter(e.target.value)} placeholder="search by name"/>
          <input type="number" onChange={(e)=>changeRate(e.target.value)} placeholder="search by star Number"/>
      </form>
  )
}
export default Filter 