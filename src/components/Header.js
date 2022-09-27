function Header(props) {
    return(
        
       <header className="d-flex justify-between align-center p-40">
       <div className="d-flex align-center">
      <img width={50} height={40} src="/images/logo.png" alt="img" />
        <div className="headerInfo">
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
       </div>
      <ul className="cu-p d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p"><img src="images/bascket.png" width={18} height={18} alt="bsk" />1250 руб.</li>
        <li>
         <img src="/images/user.png" width={18} height={18} alt="user" />
        </li>
      </ul>
     </header>
    );
}
export default Header;