import React from "react";
import './App.css'
import Show from "./Show";
const data=[
    {
        id:1,
        img:'../images/iphone.webp',
        desc:'Apple iPhone 15 (Blue, 128 GB)',
        price:70999,
        details:[
            "128 GB ROM || ",
           " 15.49 cm (6.1 inch) Super Retina XDR Display || ",
            "48MP + 12MP | 12MP Front Camera || ",
           " A16 Bionic Chip, 6 Core Processor Processor"]
    },
    {
        id:2,
        img:'../images/poco.webp',
        desc:'POCOC61(Ethereal Blue,64GB)',
        price:6499,
        details:[
            "4 GB RAM | 64 GB ROM | Expandable Upto 1 TB",
            "17.04 cm (6.71 inch) HD+ Display",
         "   8MP Rear Camera | 5MP Front Camera",
         "   5000 mAh Battery",
          "  Helio G36 Processor"]
    },
    {
        id:'3',
        img:'../images/realme.webp',
        desc:'Realme 12x 5G (Twilight Purple, 128 GB)(6 GB RAM)',
        price:13499,
        details:[
            "6 GB RAM | 128 GB ROM | Expandable Upto 2 TB",
           " 17.07 cm (6.72 inch) Full HD+ Display",
           " 50MP + 2MP | 8MP Front Camera",
            "5000 mAh Battery",
         "   Dimensity 6100+ Processor"]
    },

    {
        id:'4',
        img:'../images/vivo.webp',
        desc:'Vivo T2 Pro 5G (New Moon Black, 256 GB)(8 GB RAM)',
        price:23999,
        details:[
           " 8 GB RAM | 256 GB ROM",
           " 17.22 cm (6.78 inch) Full HD+ Display",
           " 64MP + 2MP | 16MP Front Camera",
            "4600 mAh Battery",
           " Dimensity 7200 Processor"]
    },
    
    {
        id:'5',
        img:'../images/redmi.webp',
        desc:'REDMI Note 13 5G (Stealth Black, 256 GB)',
        price:18999,
        details:[
           " 8 GB RAM | 256 GB ROM | Expandable Upto 1 TB",
            "16.94 cm (6.67 inch) Full HD+ Display",
           " 108MP + 2MP | 16MP Front Camera",
            "5000 mAh Battery",
            "Dimensity 6080 Processor"]
    },
    {
        id:'6',
        img:'../images/moto.webp',
        desc:'Motorola Edge 50 Fusion( Blue,8GB RAM)',
        price:22999,
        details:[
           " 8 GB RAM | 128 GB ROM",
           " 17.02 cm (6.7 inch) Full HD+ Display",
            "50MP + 13MP | 32MP Front Camera",
           " 5000 mAh Battery",
            "7s Gen 2 Processor"]
    },
    {
        id:'7',
        img:'../images/samsung.webp',
        desc:'SAMSUNG Galaxy S23 Ultra5G(Cream, 256 GB)',
        price:89999,
        details:[
            "12 GB RAM | 256 GB ROM",
           " 17.27 cm (6.8 inch) Quad HD+ Display",
            "200MP + 10MP + 12MP + 10MP | 12MP Front Camera",
           " 5000 mAh Lithium Ion Battery",
           " Qualcomm Snapdragon 8 Gen 2 Processor"]
    },
    {
        id:'8',
        img:'../images/oneplus.webp',
        desc:'OnePlus 12 (Flowy Emerald,12GB RAM, 256GB Storage)',
        price:59999,
        details:[
           " 12 GB RAM | 256 GB ROM",
            "17.32 cm (6.82 inch) Display",
           " 64MP Rear Camera",
          "  5400 mAh Battery"]
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
                          id= {v.id}
                           img={v.img}
                           desc={v.desc}
                           price={v.price}
                           details={v.details}
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