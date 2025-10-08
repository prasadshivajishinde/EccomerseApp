// import React, { Component } from 'react';
// import iphonedata from './iphonedata.js';
// import Redmidata from './Redmidata.js'
//  import Motoroladata from './motoroladata.js';
// import Pocodata from './Pocodata.js';
//  import oneplusdata from './oneplusdata.js';
// import Mobileshow from './Mobileshow';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Footer from './Footer.jsx';

// export default class MobileComponent extends Component {
//   constructor() {
//     super();
//     this.state = {
//       currentData: iphonedata,
//       currentPage: 1,
//       itemsPerPage: 6,
//     };
//   }

//   setData = (data) => {
//     this.setState({
//       currentData: data,
//       currentPage: 1, // Reset to the first page
//     });
//   }

//   handlePageChange = (pageNumber) => {
//     this.setState({
//       currentPage: pageNumber,
//     });
//   }

//   render() {
//     const { currentData, currentPage, itemsPerPage } = this.state;

//     // Calculate indexes for current items
//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const currentItems = currentData.slice(indexOfFirstItem, indexOfLastItem);

//     // Generate page numbers
//     const pageNumbers = [];
//     for (let i = 1; i <= Math.ceil(currentData.length / itemsPerPage); i++) {
//       pageNumbers.push(i);
//     }

//     return (
//       <div>
//         <div className="container-fluid p-0 " id="logo">
//           <div className=" " id="logo">
//             <div className="text">
//               <h1 className=" text-light " style={{ fontFamily: 'small-caps' }}>Enjoy Online Shopping</h1>
//               <p className="text-light">Get awesome items only in zest online shopping.</p>
//             </div>
//           </div>
//         </div>

//         <div className="container mt-5">
//           <div className="row">
//             <div className="col-md-12">
//               <h5 className="text-dark">Select Categories</h5>
//             </div>
//             <div className="col-md-12 col-sm-6">
//               <button className="btn btn-info  mx-3 my-3 fw-bold bt" onClick={() => this.setData(iphonedata)}>Iphone</button>
//               <button className="btn btn-info  mx-3 my-3 fw-bold bt" onClick={() => this.setData(Motoroladata)}>Motorola</button>
//               <button className="btn btn-info  mx-3 my-3 fw-bold bt" onClick={() => this.setData(Pocodata)}>Poco</button>
//               <button className="btn btn-info  mx-3 my-3 fw-bold bt" onClick={() => this.setData(Redmidata)}>Redmi</button>
//               <button className="btn btn-info  mx-3 my-3 fw-bold bt" onClick={() => this.setData(oneplusdata)}>One Plus</button>
//             </div>
//           </div>

//           <div className="row my-2">
//             {
//               currentItems.map((v, i) => (
//                 <div className="col-lg-3 col-md-6 my-1" key={i}>
//                   <Mobileshow
//                     id={v.id}
//                     img={v.img}
//                     desc={v.desc}
//                     price={v.price}
//                     details={v.details}
//                     offers={v.offers}
                   

//                   />
//                 </div>
//               ))
//             }
//           </div>

//           <nav>
//             <ul className="pagination">
//               {pageNumbers.map(number => (
//                 <li key={number} className={`page-item ${this.state.currentPage === number ? 'active' : ''}`}>
//                   <button className="page-link" onClick={() => this.handlePageChange(number)}>
//                     {number}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </nav>
//         </div>
      

//       </div>
      
//     );
//   }
// }





// MobileComponent.jsx
import React, { Component } from 'react';
import iphonedata from './iphonedata.js';
import Redmidata from './Redmidata.js';
import Motoroladata from './motoroladata.js';
import Pocodata from './Pocodata.js';
import oneplusdata from './oneplusdata.js';
import Mobileshow from './Mobileshow';
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';
export default class MobileComponent extends Component {
  constructor() {
    super();
    this.state = {
      currentData: iphonedata,
      searchTerm: '', // Controlled by Navbar
      currentPage: 1,
      itemsPerPage: 6,
    };
  }

  setData = (data) => {
    this.setState({ currentData: data, currentPage: 1, searchTerm: '' });
  }

  handleSearch = (query) => {
    this.setState({ searchTerm: query, currentPage: 1 });
  }

  handlePageChange = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  }

  render() {
    const { currentData, searchTerm, currentPage, itemsPerPage } = this.state;

    const filteredData = currentData.filter(item =>
      item.desc.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredData.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <div>
        <Navbar onSearch={this.handleSearch} />

        <div className="container mt-5">
          {/* Category Buttons */}
          <div className="row mb-3">
            <div className="col-md-12">
              <h5 className="text-dark">Select Categories</h5>
            </div>
            <div className="col-md-12 col-sm-6">
              <button className="btn btn-info mx-3 my-3 fw-bold bt" onClick={() => this.setData(iphonedata)}>Iphone</button>
              <button className="btn btn-info mx-3 my-3 fw-bold bt" onClick={() => this.setData(Motoroladata)}>Motorola</button>
              <button className="btn btn-info mx-3 my-3 fw-bold bt" onClick={() => this.setData(Pocodata)}>Poco</button>
              <button className="btn btn-info mx-3 my-3 fw-bold bt" onClick={() => this.setData(Redmidata)}>Redmi</button>
              <button className="btn btn-info mx-3 my-3 fw-bold bt" onClick={() => this.setData(oneplusdata)}>One Plus</button>
            </div>
          </div>

          {/* Products */}
          <div className="row my-2">
            {currentItems.map((v, i) => (
              <div className="col-lg-3 col-md-6 my-1" key={i}>
                <Mobileshow
                  id={v.id}
                  img={v.img}
                  desc={v.desc}
                  price={v.price}
                  details={v.details}
                  offers={v.offers}
                />
              </div>
            ))}
          </div>

          {/* Pagination */}
          <nav>
            <ul className="pagination">
              {pageNumbers.map(number => (
                <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                  <button className="page-link" onClick={() => this.handlePageChange(number)}>
                    {number}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <Footer />
      </div>
    );
  }
}

