import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import products from './mockdata';
import classes from './Product.module.css';

const Product = (props) => {
    const {data} = props;
   
    // string concatination
    // 'product' + data.id
    return ( 
        <article className={classes.card} key={data.id}>
            <p>{data.title}</p>
            <p>Cost: ${data.price}</p>
            {/* <p>{data.description}</p> */}
            <Link to={`/products/${data.id}`} product={props}> {/* string concatination */}
                <button>View Details</button>
            </Link>
        </article>
    );
};


const Products = () => {
    const [products, setProducts] = useState([]);
    // componentDidComponent 
    useEffect(() => {
        // make api call
        fetch('https://fakestoreapi.com/products')
            .then(res => {
                console.log(res, 'res');
                return res.json()
            })
            .then(json=>{
                console.log(json)
                setProducts(json)
            }) 
    }, []);

    const renderProductsList = () => {
        // map iteration
        return products.map(product => {
        //    console.log({...product}, 'destructing object');
            return <Product data={product} />
        });
    };

    return (
        <section className={classes.cards}>
            {renderProductsList()}
        </section>
    );
};

export default Products;

// How DOM nodes are generated 
// <section className={classes.cards}>  // parent 
//     <article className={classes.card} key={1}> // 1st child
//         <p>iPhone 12</p>        // 1.1
//         <p>{iPhone 12 | 8GB RAM | 128 GB Storage} <label></label>
//         </p> // 1.2 //1.2.1
//         </section>
//         <Link to={`/products/1`}> {/* string concatination */}
//             <button>View Details</button>
//         </Link>
//     </article>

//     <article className={classes.card} key={1}>  // 2nd child
//         <p>iPhone 12</p>
//         <p>{iPhone 12 | 8GB RAM | 128 GB Storage}</p>
//         <Link to={`/products/1`}> {/* string concatination */}
//             <button>View Details</button>
//         </Link>
//     </article>

//     <article className={classes.card} key={1}> // 3rd child
//         <p>iPhone 12</p>
//         <p>{iPhone 12 | 8GB RAM | 128 GB Storage}</p>
//         <Link to={`/products/1`}> {/* string concatination */}
//             <button>View Details</button>
//         </Link>
//     </article>

//     <article className={classes.card} key={1}>
//         <p>iPhone 12</p>
//         <p>{iPhone 12 | 8GB RAM | 128 GB Storage}</p>
//         <Link to={`/products/1`}> {/* string concatination */}
//             <button>View Details</button>
//         </Link>
//     </article>
// </section>

// 1. section
//     1.1 article
//         1.1.1 <p />
//             1.1.1.1 <label />
//         1.1.2 <p />
//         1.1.3 <a />
//     1.2 article
//     1.3 article
//     1.4 article
    
