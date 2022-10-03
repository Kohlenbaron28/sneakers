import './Footer.css';
import MyLupa from './lupa.svg'

function Footer() {
    return (
      <div className="footer">
      <button><a href="#">Search</a><img src={MyLupa} alt="search" /></button>
     
      </div>
    );
  }
  export default Footer;