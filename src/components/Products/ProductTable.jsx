import React from 'react';

const ProductTable = ({ products }) => {
    return (
        <table className="product-table" role="table">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Title</th>
                    <th scope="col">Price</th>
                    <th scope="col">Rating</th>
                </tr>
            </thead>
            <tbody>
                {products.map(product => (
                    <tr key={product.id}>
                        <td>
                            <img 
                                src={product.image} 
                                alt={`Image of ${product.title}`} 
                                style={{ width: '50px' }} 
                            />
                        </td>
                        <td>{product.title}</td>
                        <td>${product.price}</td>
                        <td>{product.rating?.rate}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ProductTable;