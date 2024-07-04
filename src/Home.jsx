import React from "react";
import './App.css'
import Show from "./Show";
const data=[
    {
        id:1,
        img:'images/iphone.webp',
        desc:'Apple iPhone 15 (Blue, 128 GB)'
    },
    {
        id:2,
        img:'images/poco.webp',
        desc:'POCOC61(Ethereal Blue,64GB)'
    },
    {
        id:'3',
        img:'./images/realme.webp',
        desc:'Realme 12x 5G (Twilight Purple, 128 GB)(6 GB RAM)'
    },

    {
        id:'4',
        img:'./images/vivo.webp',
        desc:'Vivo T2 Pro 5G (New Moon Black, 256 GB)(8 GB RAM)'
    },
    
    {
        id:'5',
        img:'./images/redmi.webp',
        desc:'REDMI Note 13 5G (Stealth Black, 256 GB)'
    },
    {
        id:'6',
        img:'./images/moto.webp',
        desc:'Motorola Edge 50 Fusion( Blue,8GB RAM)'
    },
    {
        id:'7',
        img:'./images/samsung.webp',
        desc:'SAMSUNG Galaxy S23 Ultra5G(Cream, 256 GB)'
    },
    {
        id:'8',
        img:'./images/oneplus.webp',
        desc:'OnePlus 12 (Flowy Emerald,12GB RAM, 256GB Storage)'
    }
    
    
]
const home=()=>{
return(
<>
    <div className="container-fluid p-0">
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner h-4">
                <div class="carousel-item active " data-bs-interval="1000">
                    <img src="./images/caro-3.jpg" class="d-block w-100" alt="" height="530px" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Enjoy Online Shopping</h5>
                        <p>Get awesome items only in zest online shopping.</p>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                    <img src="./images/caro2.webp" class="d-block w-100" alt="..." height="530px" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                    <img src="./images/caro4.jpg" class="d-block w-100" alt="..." height="530px" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>


    <div className="container mt-5">
        <div className="row">
            <div className="col-md-12">
            <h2 className="text-center " style={{fontFamily:'small-caps'}}>TRENDING PRODUCTS</h2>
            </div>
        </div>

        <div className="row">
            {
                data.map((v)=>{
                    return(

                        <div className="col-lg-3 col-md-6 my-3">
                          <Show
                           img={v.img}
                           desc={v.desc}
                          />
                        </div>  
                    )
                })
            }
        </div>
        


    </div>
</>
)
}

export default home;