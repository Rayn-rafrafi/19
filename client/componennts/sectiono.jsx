import { FaBasketShopping } from "react-icons/fa6";
const Sectiono = () => {
    return ( <>
    <section className="offer has-bg-image" id="promo" >
        <div className="container">

          <div className="offer-card">

            <h2 className="title card-title">35% Off</h2>

            <p className="card-text">
              This is the main factor that sets us apart our competition and allows us deliver a specialist business
              consultancy service
            </p>

            <a href="#" className="btn btn-secondary">
              <span className="span">Shop Now</span>

              < FaBasketShopping/>
            </a>

          </div>

        </div>
        <div>
            <img src="../images/product-33.jpg" className="theback2"/>
        </div>
      </section>
    </> );
}
 
export default Sectiono;