import { FaBasketShopping } from "react-icons/fa6";
const Sectionf = () => {
    return ( <>
     <section className="section feature" id="pro" aria-label="feature-label">
        <div className="container">

          <h2 className="h2 section-title title text-center" id="feature-label">Featured products</h2>

          <ul className="feature-list">

            <li>
              <div className="product-card text-center">

                <div className="card-banner">

                  <figure className="product-banner img-holder" >
                    <img src="./images/product-4.png" loading="lazy"
                      alt="Acne Baseball Cap" className="img-cover"/>
                  </figure>

                  <a href="#" className="btn product-btn">
                  <FaBasketShopping />
                    <span className="span">Add To Cart</span>
                  </a>

                </div>

                <div className="card-content">
                  <h3 className="h3 title">
                    <a href="#" className="card-title">Acne Baseball Cap</a>
                  </h3>

                  <span className="price">$80.00</span>
                </div>

              </div>
            </li>

            <li>
              <div className="product-card text-center">

                <div className="card-banner">

                  <figure className="product-banner img-holder" >
                    <img src="./images/product-5.png" loading="lazy"
                      alt="Short Sleeve Shirt" className="img-cover"/>
                  </figure>

                  <a href="#" className="btn product-btn">
                
                  <FaBasketShopping />
                    <span className="span">Add To Cart</span>
                  </a>

                </div>

                <div className="card-content">
                  <h3 className="h3 title">
                    <a href="#" className="card-title">Short Sleeve Shirt</a>
                  </h3>

                  <span className="price">$170.00</span>
                </div>

              </div>
            </li>

            <li>
              <div className="product-card text-center">

                <div className="card-banner">

                  <figure className="product-banner img-holder">
                    <img src="./images/product-6.png"loading="lazy"
                      alt="Garcons Parfums" className="img-cover"/>
                  </figure>

                  <a href="#" className="btn product-btn">
                  <FaBasketShopping />

                    <span className="span">Add To Cart</span>
                  </a>

                </div>

                <div className="card-content">
                  <h3 className="h3 title">
                    <a href="#" className="card-title">Garcons Parfums</a>
                  </h3>

                  <span className="price">$190.00</span>
                </div>

              </div>
            </li>

            <li>
              <div className="product-card text-center">

                <div className="card-banner">

                  <figure className="product-banner img-holder" >
                    <img src="./images/product-7.png" loading="lazy"
                      alt="Salomon Sneaker" className="img-cover"/>
                  </figure>

                  <a href="#" className="btn product-btn">
                  <FaBasketShopping />

                    <span className="span">Add To Cart</span>
                  </a>

                </div>

                <div className="card-content">
                  <h3 className="h3 title">
                    <a href="#" className="card-title">Salomon Sneaker</a>
                  </h3>

                  <span className="price">$450.00</span>
                </div>

              </div>
            </li>

            <li>
              <div className="product-card text-center">

                <div className="card-banner">

                  <figure className="product-banner img-holder">
                    <img src="./images/product-8.png" loading="lazy"
                      alt="Ribbed Beanie Hat" className="img-cover"/>
                  </figure>

                  <a href="#" className="btn product-btn">
                  <FaBasketShopping />

                    <span className="span">Add To Cart</span>
                  </a>

                </div>

                <div className="card-content">
                  <h3 className="h3 title">
                    <a href="#" className="card-title">Ribbed Beanie Hat</a>
                  </h3>

                  <span className="price">$120.00</span>
                </div>

              </div>
            </li>

            <li>
              <div className="product-card text-center">

                <div className="card-banner">

                  <figure className="product-banner img-holder" >
                    <img src="./images/product-9.png" loading="lazy" alt="Acronym Khaki"
                      className="img-cover"/>
                  </figure>

                  <a href="#" className="btn product-btn">
                  <FaBasketShopping />

                    <span className="span">Add To Cart</span>
                  </a>

                </div>

                <div className="card-content">
                  <h3 className="h3 title">
                    <a href="#" className="card-title">Acronym Khaki</a>
                  </h3>

                  <span className="price">$220.00</span>
                </div>

              </div>
            </li>

          </ul>

          <a href="#" className="btn btn-secondary">View All Products</a>

        </div>
      </section>






    </> );
}
 
export default Sectionf;