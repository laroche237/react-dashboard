import React from 'react';
import Product from './Maincontent/Product';
import Sales from './Maincontent/Sales';
import Todo from './Maincontent/Todo';
import Faq from './Maincontent/Faq';
import Invoices from './Maincontent/Invoices';
import Statistic from './Maincontent/Statistic';
import Calendar from './Maincontent/Calendar';
import './Maincontent.css';



const Maincontent = () => {
  return (
    <div className='main-app'>
      <div class=" px-4 main-content bg-light">
       <Statistic/>        
       <Sales/>
       <Product/>
       <Todo/>
       <Calendar/>
       <Faq/>
       <Invoices/>
    </div> </div>
  )
}

export default Maincontent;