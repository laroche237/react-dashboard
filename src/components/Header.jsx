import React from 'react'
import './Header.css';

const Header = () => {
  return (
    <header class="top_nav bg-light">
        <div class="nav_menu mx-4">
          <div class="navright">
        
   
        <div class="left">
          <form class="d-flex xline">
        <input class="form-control me-2 xline" type="search" placeholder="Type Here" aria-label="Search"/>
        <button class="btn btn-outline-success xline" type="submit">Search</button>
      </form>
      </div>


      <div class="right">
      <ul class="navbar-nav nav navbar mr-auto user_menu flex-row m-1">
      <li class="nav-item px-2  mx-1">
        <a class="nav-link" href="#">
           <i class="far fa-bell icon fa-lg"></i>
        </a>
      </li>
      <li class="nav-item px-2 mx-3 ">
        <a class="nav-link" href="#">
           <i class="fas fa-envelope icon fa-lg"></i>
        </a>
      </li>

      <li class="nav-item dropdown px-2 mx-3 " style={{paddingLeft: '15px'}}>
      <a href="" class="user-profile dropdown-toggle" aria-haspopup="true" id="navbarDropdown" data-toggle="dropdown" aria-expanded="false">
                    <img src="img.jpeg" alt=""/>
                  </a>       
      </li>
      </ul>
      </div>
     
          </div>
        </div>
        <hr/>
    </header>
  );
}

export default Header;