import React from 'react'
import './Mainmenu.css';

const Mainmenu=()=> {
  return (
   <div class="contain">
    <div class="left_col bg-light">
    <nav class="navbar navbar-expand-lg flex-column navbar-light">
  <a class="navbar-brand my-3" href="#" style={{color:"blueviolet"}}><i class="fas fa-trademark "></i>Brand</a>

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav flex-column">
      <li class="nav-item active my-2">
        <a class="nav-link active " href="#"><i class="fas fa-home bg-white p-2 rounded shadow-sm"></i> Dashboard </a>
      </li>
      <li class="nav-item my-2">
        <a class="nav-link" href="#"><i class="fas fa-chart-pie bg-white p-2 rounded shadow-sm"></i> Statistics</a>
      </li>
      <li class="nav-item my-2">
        <a class="nav-link" href="#"><i class="fas fa-box bg-white p-2 rounded shadow-sm"></i> Products</a>
      </li>
      <li class="nav-item my-2">
        <a class="nav-link" href="#"><i class="fas fa-dollar-sign bg-white p-2 rounded shadow-sm"></i> Sales</a>
      </li>
      <li class="nav-item my-2">
        <a class="nav-link" href="#"><i class="fas fa-project-diagram bg-white p-2 rounded shadow-sm"></i> Project Management</a>
      </li>
      <li class="nav-item my-2">
        <a class="nav-link" href="#"><i class="fas fa-file-invoice bg-white p-2 rounded shadow-sm"></i> Invoices</a>
      </li>
      <li class="nav-item my-2">
        <a class="nav-link" href="#"><i class="fas fa-gear bg-white p-2 rounded shadow-sm"></i> Settings</a>
      </li>
    </ul>
  </div>
</nav>

    </div>
   </div>
  );
}

export default Mainmenu;