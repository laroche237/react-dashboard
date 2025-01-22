
import Mainmenu from './components/Mainmenu';
import Header from './components/Header';
import Footer from './components/Footer';
import Maincontent from './components/Maincontent';

const Dashboard = () => {
 
  return (
    <div class="bg-light"><Mainmenu/>
    <Header/>
    <Maincontent/>
    <Footer/>
    </div>
  );
};

export default Dashboard;
