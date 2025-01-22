import React from 'react'

const Footer = () => {
  return (
    <footer class="bg-light text-center py-4" style={{marginBottom:'0'}}>
  <div class="container">
    <p class="mb-0" style={{color:'blueviolet'}}>© 2025 Laroche. All rights reserved.</p>
    <ul class="list-unstyled d-flex justify-content-center mt-3">
      <li class="mx-2" style={{color:'blueviolet'}}><a href="#"  style={{color:'blueviolet'}}>Privacy Policy</a></li>
      <li class="mx-2"><a href="#"  style={{color:'blueviolet'}}>Terms of Service</a></li>
      <li class="mx-2"><a href="#" style={{color:'blueviolet'}}>Contact Us</a></li>
    </ul>
  </div>
</footer>
  )
}

export default Footer;