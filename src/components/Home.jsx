import React from 'react';
import { Link } from 'react-router';

const Home = () => {
    return (
        <main style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Welcome to the Store</h1>
            <Link 
                to="/product-list" 
                style={{ fontSize: '20px', textDecoration: 'none', color: 'blue' }}
                aria-label="Go to Product List Page"
            >
                Go to Product List
            </Link>
        </main>
    );
};

export default Home;