import axios from "axios";
import React  from "react";
import Card from "../components/Card/Card";
import AppContext from "../context";


function Orders() {
    const {onAddToCart, onAddToFavorite}=React.useContext(AppContext);
    const [orders, setOrders] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
  
React.useEffect(()=> {
  async function fetchD() {
try {
    const {data}= await axios.get('https://632f49ebb56bd6ac45ae29cb.mockapi.io/orders');
    setOrders(data.reduce((prev, obj)=>[...prev, ...obj.items],[]));
    setIsLoading(false);
} catch (error) {
   alert('Не удалось загрузить заказы');
   console.error(error); 
}
   }
   fetchD();
}, []);
  
    return(
<div className="content p-40">
<div className="d-flex align-center justify-between">
   <h1 className="mb-40">Мои заказы</h1> 

</div>
   
    
<div className="d-flex flex-wrap">
{ (isLoading? [...Array(9)]:orders)
   .map((item, index)=>(
        <Card
        key={index}    
        loading={isLoading}
        {...item}
        />
      
    ))
}

</div>

</div>
    );
}
export default Orders;