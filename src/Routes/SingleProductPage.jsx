/* 
function SingleProductPage(){

    return (
        <div data-testid="products-container">   
            <div>
                <h3 data-testid="product-brand"></h3>
            </div>
            <div >
            <img data-testid="product-image"/>
            </div>
            <div data-testid="product-category">
            </div>
           
            <div data-testid="product-details">
            </div>
            <div data-testid="product-price">
            </div>

            </div>
    )
}
export default SingleProductPage */

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SingleProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products/${id}`);
            setProduct(response.data.data);
            setLoading(false);
        };
        fetchProduct();
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div style={styles.container}>
            <h2 style={styles.header}>Product Details</h2>
            <img src={product.img} alt={product.brand} data-testid="product-image" style={styles.image} />
            <p style={styles.text} data-testid="product-brand">Brand: {product.brand}</p>
            <p style={styles.text} data-testid="product-category">Category: {product.category}</p>
            <p style={styles.text} data-testid="product-price">Price: ${product.price}</p>
            <p style={styles.text} data-testid="product-details">Details: {product.details}</p>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        maxWidth: '600px',
        margin: 'auto',
        backgroundColor: '#f9f9f9',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    header: {
        textAlign: 'center',
        color: '#333',
    },
    image: {
        display: 'block',
        margin: '20px auto',
        maxWidth: '300px',
        maxHeight: '300px',
        borderRadius: '10px',
    },
    text: {
        fontSize: '18px',
        color: '#555',
        marginBottom: '10px',
    },
};

export default SingleProductPage;
