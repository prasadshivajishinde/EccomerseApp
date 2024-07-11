import React, { Component } from 'react';
import iphonedata from './iphonedata.js';
import Redmidata from './Redmidata.js'
// import motoroladata from './motoroladata';
// import pocodata from './pocodata';
 import oneplusdata from './oneplusdata.js';
import Mobileshow from './Mobileshow';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class MobileComponent extends Component {
  constructor() {
    super();
    this.state = {
      currentData: iphonedata,
      currentPage: 1,
      itemsPerPage: 6,
    };
  }

  setData = (data) => {
    this.setState({
      currentData: data,
      currentPage: 1, // Reset to the first page
    });
  }

  handlePageChange = (pageNumber) => {
    this.setState({
      currentPage: pageNumber,
    });
  }

  render() {
    const { currentData, currentPage, itemsPerPage } = this.state;

    // Calculate indexes for current items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = currentData.slice(indexOfFirstItem, indexOfLastItem);

    // Generate page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(currentData.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <div>
        <div className="container-fluid p-0 " id="logo">
          <div className=" " id="logo">
            <div className="text">
              <h1 className=" text-light " style={{ fontFamily: 'small-caps' }}>Enjoy Online Shopping</h1>
              <p className="text-light">Get awesome items only in zest online shopping.</p>
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row">
            <div className="col-md-12">
              <h5 className="text-dark">Select Categories</h5>
            </div>
            <div className="col-lg-12 col-md-12">
              <button className="btn btn-info  mx-3 my-3 fw-bold bt" onClick={() => this.setData(iphonedata)}>Iphone</button>
              <button className="btn btn-info  mx-3 my-3 fw-bold bt" onClick={() => this.setData()}>Motorola</button>
              <button className="btn btn-info  mx-3 my-3 fw-bold bt" onClick={() => this.setData()}>Poco</button>
              <button className="btn btn-info  mx-3 my-3 fw-bold bt" onClick={() => this.setData(Redmidata)}>Redmi</button>
              <button className="btn btn-info  mx-3 my-3 fw-bold bt" onClick={() => this.setData(oneplusdata)}>One Plus</button>
            </div>
          </div>

          <div className="row my-2">
            {
              currentItems.map((v, i) => (
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
              ))
            }
          </div>

          <nav>
            <ul className="pagination">
              {pageNumbers.map(number => (
                <li key={number} className={`page-item ${this.state.currentPage === number ? 'active' : ''}`}>
                  <button className="page-link" onClick={() => this.handlePageChange(number)}>
                    {number}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
