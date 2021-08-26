import { useParams } from 'react-router-dom';
import mockProducts from '../Products/mockdata';

const ProductDetail = () => {
  const params = useParams();

  // map 
  // filter or find
  // filter() -> array -> return all the matching objects in array
  // find() - > single object 
  // console.log(params.id);
  // find the product and show the product details

// data type - number, string, object 
// const product = mockProducts.filter(item => item.id == params.id);

  const product = mockProducts.find(item => item.id == params.id);
  
  return (
    <section>
      <h1>Product Detail</h1>
      <p>Id: {product.id}</p>
      <p>Name: {product.name}</p>
      <p>Description: {product.description}</p>
    </section>
  );
};

export default ProductDetail;