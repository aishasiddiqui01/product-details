import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider} from 'react-router';
import Home from './components/Home';
import ProductList from './components/Products/ProductList';

const App = () => {
    return (
        <Home />
    );
};

const appRouter = createBrowserRouter([
    {
    path: '/home',
    element: <App />,
   }, 
   {
    path: '/product-list',
    element: <ProductList />,
    },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);

export default App;