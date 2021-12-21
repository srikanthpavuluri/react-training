import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import mockProducts from '../Products/mockdata';

const ProductDetail = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
 

useEffect(() => {
  // make api call
  fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then(res => {
          console.log(res, 'res');
          return res.json()
      })
      .then(json=>{
          console.log(json)
          setProduct(json)
      }) 
  }, []);

  console.log(params, 'productID');

  return (
    <section>
      <h1>Product Detail</h1>
      <p>Id: {product.id}</p>
      <p>Name: {product.title}</p>
      <p>Description: {product.description}</p>
      <img src={product.image} style={{width:'300px', height:'300px'}} />
      <p>Rating: {product.rating?.rate} ({product.rating?.count}) </p>
    </section>
  );
};

export default ProductDetail;
