
import './App.css'
import CircleImage from './CircleImage'
import Header from './Header'
import ImageCart from './ImageCart'
import ProductCard from './ProductCard'

function App() {
 

  return (
    <>
      <>
  <Header />
  <main>
    <section id="section1">
      <div className="container">
        <div id="images">
          <ImageCart image="https://virgio.com/cdn/shop/files/VWWDR2418855001_5_375x_crop_center.jpg?v=1715770550"/>
          <ImageCart image="https://virgio.com/cdn/shop/files/VWWDR2418855001_1_375x_crop_center.jpg?v=1715770550"/>
          <ImageCart image="https://virgio.com/cdn/shop/files/VWWDR2418855001_2_375x_crop_center.jpg?v=1715770550"/>
          <ImageCart image="https://virgio.com/cdn/shop/files/VWWDR2418855001_3_375x_crop_center.jpg?v=1715770550"/>
          <img
            id="mainImage"
            src="https://virgio.com/cdn/shop/files/VWWDR2418855001_5_640x_crop_center.jpg?v=1715770550"
            alt=""
          />
        </div>
        <div>
          <h1 id="productTitle">Breathable Poly Crinkle Ruffled Sleeve Dress</h1>
          <span className="h3 price">
            MRP ₹<span id="price">1,490</span>
          </span>
          <ul className="variants">
            <CircleImage image="https://cdn.shopify.com/s/files/1/0785/1674/8585/files/1_7_d7422ac9-99ce-4139-a411-b060389684bc.jpg?v=1715791697"/>
            <CircleImage image="https://cdn.shopify.com/s/files/1/0785/1674/8585/files/1_8_2faf0bcb-afbe-452a-9fd2-7cf9c5d54453.jpg?v=1715791698"/>
            <CircleImage image="https://cdn.shopify.com/s/files/1/0785/1674/8585/files/1_6_6b4ca9f0-59b2-467e-993c-647528e0aee3.jpg?v=1715791697"/>
          </ul>
          <p id="productDescription">
          Experience effortless style with this fit. This stunning ruffle sleeve dress is our take on the classic little black dress. Crafted from luxurious poly crinkle fabric, slip into a cocoon of comfort and style. The relaxed fit and mandarin collar adds to the easy-going, breezy vibe. Take it from your work day to a casual dinner night effortlessly.
          </p>
          <div className="buttonHolder">
            <button className="button buttonPrimary">Add to cart</button>
            <a className="button buttonSecondary" href="#">
              Buy now
            </a>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <h2>Similar products</h2>
        <div className="productsList" id="listingDiv">
          <ProductCard tittle="versetile visco tittle" price={3000} image="https://virgio.com/cdn/shop/files/7thMayVirgio-7778_375x_crop_center.jpg?v=1715695354"/>
          <ProductCard tittle="Prety cotton schifil" price={2500} image="https://virgio.com/cdn/shop/files/7thMayVirgio-6207_375x_crop_center.jpg?v=1715696567"/>
          <ProductCard tittle="Gorgous poly mass sholder" price={2300} />
          <ProductCard tittle="comfy poly crinkle" price={5000}/>
          <ProductCard tittle="Glan visco strappuy" price={2540}/>
        </div>
      </div>
    </section>
  </main>
  <footer />
</>

    </>
  )
}

export default App
