import './ProductList.css'
import products from '../../api/products.json'
import BeforeCart from './CartButtons/BeforeCart'
import AfterCart from './CartButtons/AfterCart'
import { useSelector } from 'react-redux'
const ProductList = () => {
    const { cartCount } = useSelector((state) => state.cart)
    
    
    
    return <section className='container'>
        {products?.map((product, key) => (
            <div className="product-container" key={key}>
                <img src={product?.image} alt="" />
                <h3>{product?.title}</h3>
                {cartCount > 0 ? <AfterCart/> :  <BeforeCart  />}
               
                
            </div>
        ))}
      
  </section>
    
  
}

export default ProductList