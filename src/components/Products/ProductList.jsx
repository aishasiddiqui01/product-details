import React, { useState, useMemo } from 'react';
import useProducts from './hooks/useProducts';
import { Shimmer } from '../ShimmerUI/Shimmer';
import ProductCard from './ProductCard';
import ProductTable from './ProductTable';
import {SORT_ORDER, VIEW} from './Products.constants';
import './ProductList.css';

const ProductList = () => {
    const { products, loading } = useProducts();
    const [viewMode, setViewMode] = useState(VIEW.GRID); // 'grid' or 'table'
    const [sortOrder, setSortOrder] = useState(null); // 'asc' or 'desc'

    const sortedProducts = useMemo(() => {
        if (!sortOrder) return products;
        return [...products].sort((a, b) =>
            sortOrder === SORT_ORDER.ASC ? a.price - b.price : b.price - a.price
        );
    }, [products, sortOrder]);

    return (
        <main>
            <div className="controls" role="toolbar" aria-label="View and Sort Controls">
                <button 
                    disabled={viewMode === VIEW.GRID}
                    onClick={() => setViewMode(VIEW.GRID)} 
                    aria-pressed={viewMode === VIEW.GRID}
                    aria-label="Switch to Grid View"
                >
                    Grid View
                </button>
                <button 
                     disabled={viewMode === VIEW.TABLE}
                    onClick={() => setViewMode(VIEW.TABLE)} 
                    aria-pressed={viewMode === VIEW.TABLE}
                    aria-label="Switch to Table View"
                >
                    Table View
                </button>
                <button 
                    disabled={sortOrder === SORT_ORDER.ASC}
                    onClick={() => setSortOrder(SORT_ORDER.ASC)} 
                    aria-label="Sort by Price: Low to High"
                >
                    Sort by Price: Low to High
                </button>
                <button 
                    disabled={sortOrder === SORT_ORDER.DESC} 
                    onClick={() => setSortOrder(SORT_ORDER.DESC)} 
                    aria-label="Sort by Price: High to Low"
                >
                    Sort by Price: High to Low
                </button>
            </div>
            {loading ? (
                <Shimmer />
            ) : viewMode === 'grid' ? (
                <div className="grid-view" role="grid">
                    {sortedProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <ProductTable products={sortedProducts} />
            )}
        </main>
    );
};

export default ProductList;