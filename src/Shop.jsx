import React, { Component } from 'react'
// import './App.css'
import iphonedata from './iphonedata.js'
import Mobileshow from './Mobileshow'
import Shop1 from './Shop1'
import Shop2 from './Shop2.jsx'
export default class  extends Component {

  constructor()
  {
    super()
    this.state=({
      Iphonedata:true,
      Redmidata:false,
      Motorolodata:false,
      Pocodata:false,
      Oneplusdata:false
    })
  }

  IphoneHandler=()=>{
    this.setState({
      Iphonedata:true,
      Redmidata:false,
      Motorolodata:false,
      Pocodata:false,
      Oneplusdata:false

    })
  }
  MotoroloHandler=()=>{
    this.setState({
      Motorolodata:true,
      Iphonedata:false

    })
  }

  PocoHandler=()=>{
    this.setState({
      Pocodata:true,
      Iphonedata:false,
      Redmidata:false,
      Motorolodata:false,
      Oneplusdata:false
    })
  }
  render() {
    return (
      <div>
             {/* <div className="container-fluid p-0 " id="logo">
                <div className=" " id="logo">
                <div className="text">
                <h1 className=" text-light " style={{fontFamily:'small-caps'}}>Enjoy Online Shopping</h1>
                <p className="text-light">Get awesome items only in zest online shopping.</p>

                </div>
                
                </div>
 
             </div>

  
             <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12 ">
                    <h5 className="  text-dark">Select Categories</h5>
                    </div>
                <div className="col-lg-12 col-md-12">
                    <button className="btn btn-primary mx-3 my-3 fw-bold  bt " onClick={()=>this.IphoneHandler()} >Iphone</button>
                    <button className="btn btn-primary mx-3 my-3 fw-bold  bt "  onClick={()=>this.MotoroloHandler()}>Motorolo</button>
                    <button className="btn btn-primary mx-3 my-3 fw-bold  bt " onClick={()=>this.PocoHandler()}>Poco</button>
                    <button className="btn btn-primary mx-3 my-3 fw-bold  bt " >Redmi</button>
                    <button className="btn btn-primary mx-3 my-3 fw-bold  bt " >One Plus</button>
                </div>
                
                </div>

                <div className="row my-5">
                    {
                      this.state.Iphonedata ?
                      <>
                       {
                          iphonedata.map((v,i)=>{
                            return(
                              <div className="col-lg-3 col-md-6 my-3">
                                <Mobileshow
                                img={v.img}
                                desc={v.desc}
                                price={v.price}
                                />
                              </div>
                            )
                          })
                       }
                      </>:null
                    }
                </div>
             </div>   */}

             <Shop1/>
            
      </div>
    )
  }
}
