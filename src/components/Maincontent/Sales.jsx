import React, {useEffect, useState} from 'react';
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import 'bootstrap-icons/font/bootstrap-icons.css'; 

// Enregistrer les composants de Chart.js
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);


const Sales = () => {

  const [chartData, setChartData] = useState(null);
  const [salesData, setSalesData] = useState([]);
  const [countries, setCountries] = useState([]);

  // Récupérer les données géographiques des pays
  const fetchCountryData = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();

      const countryInfo = data.map((country) => ({
        name: country.name.common,
        lat: country.latlng[0], // Latitude
        lng: country.latlng[1], // Longitude
      }));
      //console.log(data);

      setCountries(countryInfo);
    } catch (error) {
      console.error("Erreur lors de la récupération des pays :", error);
    }
  };


  // Fonction pour récupérer les données de l'API
  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/carts");
      const data = await response.json();

      // Extraire les périodes et les ventes
      const periods = data.carts.map((cart) => ` ${cart.id}`);
      const sales = data.carts.map((cart) => cart.total);
      const limitedData = periods.slice(-10);

      //console.log(data);

      

      // Définir les données pour le graphique
      setChartData({
        labels: limitedData,
        datasets: [
          {
            label: "Ventes totales ($)",
            data: sales,
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderWidth: 2,
            tension: 0.4, // Lissage des lignes
          },
        ],
      });
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
    }
  };

  // Récupérer les données des ventes
  const fetchSalesData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/carts");
      const data = await response.json();

      // Exemple simplifié : Attribuer des pays fictifs aux ventes
      const sales = data.carts.map((cart, index) => ({
        country: ["France", "Russia", "Germany", "India", "Canada", "Brazil", "Mexico","Spain", "Denmark"][index %9],
        total: cart.total,
      }));
     // console.log(data);

      setSalesData(sales);
    } catch (error) {
      console.error("Erreur lors de la récupération des ventes :", error);
    }
  };

 
   
  useEffect(() => {
   
    fetchData();
    fetchSalesData();
    fetchCountryData();
  }, []);

  if (!chartData)  {
    return <div>Chargement des données...</div>;
  }

// Fusionner les ventes avec les coordonnées des pays
const mappedSales = salesData
.map((sale) => {
  const country = countries.find((c) => c.name === sale.country);
  return country
    ? {
        ...sale,
        lat: country.lat,
        lng: country.lng,
      }
    : null;
})
.filter((item) => item !== null); // Exclure les données non trouvées


  return (
    <div class="row">
    <div class="col-lg-7">

  <div class="card z-idex-2 ">
    <div class="card-header pb-0 bg-white">
      <h3>Sales overview</h3>
      <p class="text-sm">
        <i class="fa fa-arrow-up text-success"></i>
        <span class="font-weight-bold">2% more</span> in 2025
      </p>
    </div>
    <div class="card-body p-1">
      <div class="chart">
      <div style={{ width: "500px", margin: "15px auto", height:'100%' }}>
        <Line data={chartData} options={{ responsive: true, plugins: { legend: { position: "top" } } }} />
      </div>
      </div>
    </div>
  </div>
    </div>
    <div class="col-lg-5">
      <div class="card  bg-white">
      <div class="card-header pb-0 bg-white">
      <h3>Sales Map</h3>
    </div>
    <div class="card-body p-1">
      <MapContainer center={[10, 0]} zoom={1} style={{ height: "400px", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {mappedSales.map((sale, index) => (
          <Marker key={index} position={[sale.lat, sale.lng]}  
          icon={
            L.divIcon({
              className: 'custom-marker',
              html: <i className="bi bi-pin-fill" style={{ fontSize: '24px', color: 'blue' }}></i>,  // Correcte utilisation de l’icône Bootstrap
            })
          }
        >
      
            <Popup>
              <strong>{sale.country}</strong>
              <br />
              Ventes totales : ${sale.total}
            </Popup>
          </Marker>
        ))}
      </MapContainer></div>
      </div>
    </div>
    
    </div>
  )
};

export default Sales;