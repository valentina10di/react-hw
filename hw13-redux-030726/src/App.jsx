import Filter from './components/Filter';
import UserList from './components/UserList';
import './App.css'

function App() {
  return (
    <div className="app">
      <h1 className='title'>User List</h1>
      <Filter />
      <UserList />
    </div>
  );
}

export default App;


// Задание
// Создание приложения для фильтрации списка пользователей с использованием React и Redux

// 1 Установка зависимостей
// Создайте новый проект с помощью Create React App.
// Перейдите в директорию проекта.2
// Установите необходимые зависимости: `npm install react-redux redux`.

// 2 Структура проекта
// Организуйте структуру проекта следующим образом:
// /src
//   /components
//     /Filter
//      index.jsx
//      Filter.module.css
//     /UserItem
//      index.jsx
//       UserItem.module.css
//     /UserList
//      index.jsx
//      UserList.module.css
//   /redux
//     actions.js
//     reducer.js
//     store.js
//   App.js
//   index.js

// 3 Создание Redux Store
// Создайте файл `store.js` в папке `redux`:
// Импортируйте функцию `createStore` из Redux.
// Импортируйте редьюсер из `reducer.js`.
// Создайте store, используя `createStore`, и экспортируйте его.
// Создайте файл `reducer.js` в папке `redux`:
// Определите начальное состояние, содержащее список пользователей и строку фильтра.
// Создайте редьюсер, который будет обрабатывать действия `SET_FILTER`.
// Возвращайте новое состояние на основе действия.
// Создайте файл `actions.js` в папке `redux`:
// Определите действие `setFilter`.
// Действие должно возвращать объект с типом действия и полезной нагрузкой (payload).

// 4 Создание компонентов
// Создайте `Filter.jsx` в папке `components`:
// Импортируйте `connect` из `react-redux`.
// Создайте компонент `Filter`, который будет подключен к Redux store.
// В компоненте `Filter` используйте функцию `setFilter` из пропсов для установки нового фильтра.
// Создайте `UserItem.jsx` в папке `components`:
// Получите данные о пользователе через пропсы.
// Отобразите имя пользователя.
// Создайте `UserList.jsx` в папке `components`:
// Импортируйте `connect` из `react-redux`.
// Создайте компонент `UserList`, который будет подключен к Redux store.
// В компоненте `UserList` используйте функцию `setFilter` из пропсов для установки нового фильтра.

//  5 Модульные стили
// Создайте файлы стилей для каждого компонента:
// `Filter.module.css`
// `UserItem.module.css`
// `UserList.module.css`
// Определите стили для каждого компонента в соответствующих файлах CSS.
// Импортируйте стили в соответствующие компоненты.

// 6 Главные файлы
// Настройте `App.js`:
// Импортируйте компоненты `Filter` и `UserList`.
// Подключите компоненты к Redux store, используя `connect`.
// Организуйте компоненты внутри контейнера и добавьте заголовок.
// Добавьте стили, используя модульные стили.
// Настройте `index.js`:
// Импортируйте `Provider` из `react-redux` и `store` из `redux/store`.
// Импортируйте компонент `App`.
// Оберните компонент `App` в `Provider` и передайте `store` как пропс.
// Используйте `ReactDOM.render`, чтобы отобразить приложение в DOM.

// 7 Запуск приложения
// Запустите приложение и проверьте его работоспособность.

