import React from 'react'

const Show = (props) => {
  return (
    <div>
   <div className="container">
    <div className="card " style={{maxWidth:'250px'}} id="homecard">
        {/* <div className="card-header">

        </div> */}
        <div className="card-body text-center">
     <img src={props.img} alt="" height="180px" />
    
        </div>
        <div className="card-footer text-center" style={{maxHeight:'70px',fontFamily:'cursive'}}>
        <h6 style={{fontSize:'15px'}}>{props.desc}</h6>
        </div>
    </div>
   </div>
    </div>
  )
}

export default Show