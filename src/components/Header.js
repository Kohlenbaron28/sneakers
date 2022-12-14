import {Link} from "react-router-dom";

function Header(props) {
    return(
        
       <header className="d-flex justify-between align-center p-40">
        
       <div className="d-flex align-center">
         <Link to="/" target="_blank">
      <div className="d-flex flex-row">
      <img width={50} height={40} src="/images/logo.png" alt="img" />
        <div className="headerInfo d-flex flex-column">
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
        </div> 
      </div>
        </Link>
       </div>
      
      <ul className="cu-p d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p d-flex align-center">
            <img className="mr-10" src="images/bascket.png" width={18} height={18} alt="bsk" />1250 руб.
        </li>
        <li className="mr-30 d-flex align-center cu-p">
        <Link to="/favorites" target="_blank">
        <img className="mr-10" src="images/heart.svg" width={18} height={18} alt="like" />
        </Link>
        </li>
        <li>
         <img src="/images/user.png" width={18} height={18} alt="user" />
        </li>
      </ul>
     </header>
    );
}
export default Header;