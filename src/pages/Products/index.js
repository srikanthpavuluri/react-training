import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import products from './mockdata';
import classes from './Product.module.css';

const Product = (props) => {
    const {data} = props;
   //  console.log(data, 'data');
    // string concatination
    // 'product' + data.id
    return ( 
        <article className={classes.card} key={data.id}>
            <p>{data.name}</p>
            <p>{data.description}</p>
            <Link to={`/products/${data.id}`}> {/* string concatination */}
                <button>View Details</button>
            </Link>
        </article>
    );
};

const Products = () => {
    // const [products, setProducts] = useState([]);
    
    // // api integration
    // useEffect(() => {
    //     // make api call
    //     // setProducts(apiResponse)
    // }, []),

    const renderProductsList = () => {
        // map iteration
        return products.map(product => {
        //    console.log({...product}, 'destructing object');
            return <Product data={product} />
        })
    };

    return (
        <section className={classes.cards}>
            {renderProductsList()}
        </section>
    );
};

export default Products;