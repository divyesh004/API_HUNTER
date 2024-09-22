import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, brand, category, price }) => {
    return (
        <tr data-testid="item">
            <td>{id}</td>
            <td data-testid="brand">
                <Link to={`/products/${id}`}>{brand}</Link>
            </td>
            <td data-testid="category">{category}</td>
            <td data-testid="price">{price}</td>
        </tr>
    );
};

export default ProductCard;
