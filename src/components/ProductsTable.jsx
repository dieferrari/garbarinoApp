import React from 'react';
import '../styles/ProductsTable.scss';
import spinner from "../assets/loading-spinner.gif";

export default ({ products, loading }) => (
  <div>
    {loading ? <img className="loading-spinner" src={spinner} alt="Loading Spinner"/> : ( // if loading is true then show the loading gif, if loading is false display the products table
      <div className="container mt-3">
        <h1 className="mb-3">
          Productos{' '}
        </h1>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Marca</th>
              <th>Precio</th>
              <th>Precio de Lista</th>
              <th>Categoría</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => ( // map all products in the products array to display the information from each of them
              <tr key={product.name}>
                <td>{product.name}</td>
                <td>{product.brand}</td>
                <td>{`$ ${product.price}`}</td>
                <td>{`$ ${product.list_price}`}</td>
                <td>{product.category_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
    )}
  </div>
)