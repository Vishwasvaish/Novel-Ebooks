import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1 className='hero-title'>Novel Ebooks</h1>
      </div>
      <div className="hero-content">
        <h1>Welcome to Novel E-Books</h1>
        <p>Discover a world of captivating stories.</p>
        <Link to="/browse" className="btn btn-lg btn-dark">Browse Novel Ebooks</Link>
      </div>

      <div className='row mt-5'>
        <div className="col-md-2">
          <div className="card">
            <img className='card-img-top' src="https://m.media-amazon.com/images/I/71HbYElfY0L._AC_UF1000,1000_QL80_.jpg" alt="" />
            <div className="card-body">
              <h5 className="card-title">Harry Potter</h5>
              <p className="card-text">J.K. Rowling</p>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="card">
            <img className='card-img-top' src="https://m.media-amazon.com/images/I/71HbYElfY0L._AC_UF1000,1000_QL80_.jpg" alt="" />
            <div className="card-body">
              <h5 className="card-title">Harry Potter</h5>
              <p className="card-text">J.K. Rowling</p>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="card">
            <img className='card-img-top' src="https://m.media-amazon.com/images/I/71HbYElfY0L._AC_UF1000,1000_QL80_.jpg" alt="" />
            <div className="card-body">
              <h5 className="card-title">Harry Potter</h5>
              <p className="card-text">J.K. Rowling</p>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="card">
            <img className='card-img-top' src="https://m.media-amazon.com/images/I/71HbYElfY0L._AC_UF1000,1000_QL80_.jpg" alt="" />
            <div className="card-body">
              <h5 className="card-title">Harry Potter</h5>
              <p className="card-text">J.K. Rowling</p>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="card">
            <img className='card-img-top' src="https://m.media-amazon.com/images/I/71HbYElfY0L._AC_UF1000,1000_QL80_.jpg" alt="" />
            <div className="card-body">
              <h5 className="card-title">Harry Potter</h5>
              <p className="card-text">J.K. Rowling</p>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="card">
            <img className='card-img-top' src="https://m.media-amazon.com/images/I/71HbYElfY0L._AC_UF1000,1000_QL80_.jpg" alt="" />
            <div className="card-body">
              <h5 className="card-title">Harry Potter</h5>
              <p className="card-text">J.K. Rowling</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
