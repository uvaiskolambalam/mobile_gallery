import './ProductList.css'
import products from '../../api/products.json'
import BeforeCart from './CartButtons/BeforeCart'
import AfterCart from './CartButtons/AfterCart'
import { useSelector } from 'react-redux'
import CartButtons from './CartButtons'
const ProductList = () => {
    const { cartCount,cartList } = useSelector((state) => state.cart)
    
    console.log(cartList);
    
    return <section className='container'>
        {products?.map((product, key) => (
            <div className="product-container" key={key}>
                <img src={product?.image} alt="" />
                <h3>{product?.title}</h3>
                <CartButtons product={product} />
            </div>
        ))}
      
  </section>
    
  
}

export default ProductList