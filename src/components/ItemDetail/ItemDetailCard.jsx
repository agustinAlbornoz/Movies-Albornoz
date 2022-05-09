import React from 'react'



const ItemDetailCard = ({movie}) => {
  const imagePath = "https://image.tmdb.org/t/p/w500/"
  const { title, color, overview, poster_path, runtime, popularity, revenue } = movie

  return (
      <>

      
      <div className="container" >
          <div className="row">
              <div className="col-12-md" > 
          <div className={`card bg-${color}`} style={{ width: "20rem", margin: "30px" }}>
              <img className="card-img-top" src={`${imagePath}${poster_path}`} alt={title} />
              <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <h6>{`duration:${runtime} sec`}</h6>
                  <h6>{`popularity:${popularity} likes`}</h6>
                  <h6>{`revenue: $${revenue}`}</h6>
                  <p className="card-text">{overview}</p>
                    

              </div>
          </div>
      </div>
      </div>
      </div>
      
      </>
  )
}

export default ItemDetailCard