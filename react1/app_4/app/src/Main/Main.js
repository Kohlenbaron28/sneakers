import './Main.css';
import MyImage from'./ill.svg';

function Main() {
    return (
      
      <div className="main">
        <div className="main_text">
     <p className='main-p1'>Bring Your Design </p>
     <p className='main-p2'>Into Reality With Us</p>
     </div>
     <img src={MyImage} alt="girl" />
    
      </div>
      
    );
  }
  
  export default Main;