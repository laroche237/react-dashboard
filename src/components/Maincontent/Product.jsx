import React , { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Pie } from "react-chartjs-2";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Enregistrer les composants nécessaires
ChartJS.register(ArcElement, Tooltip, Legend);

// Exemple d'API gratuite pour les produits
const API_URL = "https://dummyjson.com/products";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();

        // Grouper les produits par catégorie et calculer les ventes totales
        const categoryData = data.products.reduce((acc, product) => {
          const category = product.category;
         // console.log(data.products);
          if (!acc[category]) {
            acc[category] = product.rating; // Utilisation du stock comme estimation des ventes
          } else {
            acc[category] += product.rating;
          }
          return acc;
        }, {});

        const sortedCategories = Object.entries(categoryData)
        .sort(([, a], [, b]) => b - a) // Trier par ventes décroissantes
        .slice(0, 6); // Garder les 6 premières
      
      const labels = sortedCategories.map(([category]) => category);
      const sales = sortedCategories.map(([, sales]) => sales);

      

        // Configurer les données pour Chart.js
        setChartData({
          labels,
          datasets: [
            {
              label: "Ventes par catégorie",
              data: sales,
              backgroundColor: [
                "blueviolet",
                "rgb(85, 244, 255)",
                "rgb(255, 85, 164)",
                "rgb(85, 96, 255)",
                "#9966FF",
                "#FF9F40",
              ],
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };

    fetchData();
  }, []);

  // Fetch data from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();

        const sortedProducts = data.products
        .sort((a, b) => b.rating - a.rating) // Trier par `rating` (ou remplacez par `sales`)
        .slice(0, 4); // Prendre les 5 premiers produits

        setProducts(sortedProducts); // Extract the products array
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center mt-5">Chargement des produits...</div>;
  }

  return (
    <div class="row  m-2">
   <div class="col-lg-7 bg-white p-3 m-3 rounded">
   <h3 className="text-center  mb-4">Top Selling Products</h3>
      <table className="table table-hover">
        <thead className="thead-dark" >
          <tr>
            <th >Image</th>
            <th >Nom</th>
            <th >Prix</th>
            <th >Stock</th>
            <th >Description</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  style={{ width: '100px', height: 'auto' }}
                />
              </td>
              <td>{product.title}</td>
              <td>${product.price}</td>
              <td>{product.stock}</td>
              <td>{product.description.slice(0, 110)}...</td>
            </tr>
          ))}
        </tbody>
      </table>
   </div>
   <div class="col-lg-4 bg-white rounded my-3 mx-4">
   <h3 class="text-center ">Most sells categories</h3>
   <br/>
   <br/>
      {chartData ? (
        <Pie data={chartData} />
      ) : (
        <p>Chargement des données...</p>
      )}
   </div>
  </div>
  )
};

export default Product;