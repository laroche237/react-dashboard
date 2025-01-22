import React from 'react';

const Statistic = () => {
  return (
    

    <div class="row flex-row " style={{ paddingTop:'10px'}}>
      <div class="col-sm-2 col-xs-8 col-12 p-3  m-3 rounded text-white" style={{backgroundColor:'blueviolet'}}> 
        <span class="fw-bold fs-3 text-center ">  156 <i class="bi bi-wallet"></i></span>
        <p class="fs-6 text-center">Month Orders</p> 
        <span class="fw-normal fs-6 text-center"><i class="text-green">2% </i> From last Week</span>
        </div>
      <div class="col-md-2 col-sm-2 col-12  p-3 m-3 rounded bg-dark text-white" >
      <span class="fw-bold fs-3 text-center ">  35200 <i class="bi bi-currency-dollar"></i></span>
      <p class="fs-6 text-center">Today's Revenue</p>
      <span class="fw-normal fs-6 text-center"><i class="text-green">1.02% </i> From last Week</span>
      </div>
      <div class="col-sm-2 bg-dark text-white col-12  p-3 m-3 rounded">
      <span class="fw-bold fs-3 text-center ">  35412 <i class="fas fa-chart-line"></i></span>
      <p class="fs-6 text-center">Month Visitors</p>
      <span class="fw-normal fs-6 text-center"><i class="text-green">5% </i> From last Week</span>
      </div>
      <div class="col-sm-2 bg-dark text-white col-12  p-3 m-3 rounded">
      <span class="fw-bold fs-3 text-center ">  72 <i class="fas fa-users"></i></span>
      <p class="fs-6 text-center"> New Clients</p>
      <span class="fw-normal fs-6 text-center"><i class="text-green">1.5% </i> From last Week</span>
      </div>
     <div class="col-sm-2 bg-dark text-white col-12 p-3 m-3 rounded"> 
      <span class="fw-bold fs-3 text-center ">  72 <i class="fas fa-hourglass"></i></span>
      <p class="fs-6 text-center">Pending order</p>
      <span class="fw-normal fs-6 text-center"><i class="text-green">1% </i> From last Week</span></div>
    </div> 
  );
};

export default Statistic;