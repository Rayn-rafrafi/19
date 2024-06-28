import { FaBasketShopping } from "react-icons/fa6";
const Sectionp = () => {
    return (<>
    <section className="section product"  id="arrt" aria-label="product">
        <div className="container">

          <h2 className="h2 section-title title text-center">Explore new arrivals</h2>

          <ul className="product-list has-scrollbar">

            <li className="scrollbar-item">
              <div className="product-card text-center">

                <div className="card-banner">

                  <figure className="product-banner img-holder">
                    <img src="images/product-1.png" loading="lazy"
                      alt="Short Sleeve Shirt" className="img-cover"/>
                  </figure>

                  <a href="#" className="btn product-btn">
                  <FaBasketShopping />
                    

                    <span className="span">Add To Cart</span>
                  </a>

                </div>

                <div className="card-content">

                  <h3 className="h4 title">
                    <a href="#" className="card-title">Short Sleeve Shirt</a>
                  </h3>

                  <span className="price">$170.00</span>

                </div>

              </div>
            </li>
            
            <li className="scrollbar-item">
              <div className="product-card text-center">

                <div className="card-banner">

                  <figure className="product-banner img-holder" >
                    <img src="./images/product-2.png" loading="lazy"
                      alt="Dead Sunglasses" className="img-cover"/>
                  </figure>

                  <a href="#" className="btn product-btn">
                  <FaBasketShopping />
                    

                    <span className="span">Add To Cart</span>
                  </a>

                </div>

                <div className="card-content">

                  <h3 className="h4 title">
                    <a href="#" className="card-title">Dead Sunglasses</a>
                  </h3>

                  <span className="price">$210.00</span>

                </div>

              </div>
            </li>

            <li className="scrollbar-item">
              <div className="product-card text-center">

                <div className="card-banner">

                  <figure className="product-banner img-holder" >
                    <img src="./images/product-3.png" loading="lazy"
                      alt="Studios Trouser" className="img-cover"/>
                  </figure>

                  <a href="#" className="btn product-btn">
                  <FaBasketShopping />
                  

                    <span className="span">Add To Cart</span>
                  </a>

                </div>

                <div className="card-content">

                  <h3 className="h4 title">
                    <a href="#" className="card-title">Studios Trouser</a>
                  </h3>

                  <span className="price">$90.00</span>

                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>

    
    </>);
}
 
export default Sectionp;