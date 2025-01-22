import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Invoices = () => {

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Récupérer les données depuis l'API
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Traiter les données pour les rendre lisibles
        const formattedTransactions = data.map((transaction, index) => ({
          id: transaction.id,
          name: transaction.name,
          symbol: transaction.symbol,
          current_price: transaction.current_price          ,
          date: new Date().toLocaleDateString(), // Date actuelle pour simuler
          totalAmount: transaction.total_supply
        }));
        setTransactions(formattedTransactions);
      })
      .catch((error) => console.error("Erreur lors de la récupération des données:", error));
  }, []);

  return (
    <div class="row m-2">
       <h3 className="mb-4">Last Transactions</h3>
      <table className="table">
        <thead>
          <tr>
            <th>ID Transaction</th>
            <th>Client</th>
            <th>Date</th>
            <th>Montant total</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
               <td>{transaction.symbol}</td>
              <td>{transaction.name}</td>
              <td>{transaction.date}</td>
              <td>${transaction.totalAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Invoices;