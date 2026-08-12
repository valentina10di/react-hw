import { useState } from 'react';
import './App.css';
import UserList from './components/UserList';

const initialUsers = [
  { id: 1, name: 'Anry' },
  { id: 2, name: 'Nataly' },
  { id: 3, name: 'Serg' },
  { id: 4, name: 'Mary' },
  { id: 5, name: 'Alex' },
];

function App() {
  // Хук useState вызывается на верхнем уровне компонента
  const [userList] = useState(initialUsers);

  return (
    <div className="app" style={{ padding: '20px' }}>
      <h1>Главная страница</h1>
      {/* Передаем массив пользователей через пропсы */}
      <UserList users={userList} />
    </div>
  );
}

export default App;
