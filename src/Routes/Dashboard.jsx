import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import ProductsTable from "../Components/ProductsTable";
import { AuthContext } from '../Context/AuthContext';


const Dashboard = () => {
  const { authState, logoutUser } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products');
      setProducts(response.data.data);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  const handleLogout = () => {
    logoutUser();
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Dashboard</h2>
      <button data-testid="logout-btn" onClick={handleLogout} style={styles.logoutBtn}>Logout</button>
      <div data-testid="user-token" style={styles.token}>Token: {authState.token}</div>
      {loading ? <p style={styles.loading}>Loading...</p> : <ProductsTable data={products} />}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: 'auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  },
  logoutBtn: {
    display: 'block',
    margin: '10px auto',
    padding: '10px 20px',
    backgroundColor: 'green',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  token: {
    textAlign: 'center',
    fontSize: '14px',
    color: '#666',
    marginTop: '10px',
  },
  loading: {
    textAlign: 'center',
    fontSize: '16px',
  },
};

export default Dashboard;
