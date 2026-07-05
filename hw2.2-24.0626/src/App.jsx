import './App.css'
import Greeting from './components/Greeting';
import OrderStatus from './components/OrderStatus';
import ShoppingList from './components/ShoppingList';

function App() {
  const name = 'Anry'

  const items = ['Apple', 'Ananas', 'Orange']

   const orders = [
    { orderId: 123, status: 'в пути' },
    { orderId: 456, status: 'обработан' },
    { orderId: 789, status: 'доставлен' },
  ]

  return (
    <>
      <Greeting name = {name}/>


      <h2>Список покупок</h2>
      <ShoppingList items={items}/>

       <h2>Статусы заказов</h2>
      {orders.map((order)=>(
        <OrderStatus key={order.orderId} orderId={order.orderId} status={order.status}/>
      ))}
    </>
  )
}

export default App;
