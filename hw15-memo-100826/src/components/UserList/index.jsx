import { useState, useCallback, useMemo } from 'react';
import styles from './UserList.module.css';



function UserList({ users }) {
     
    // Состояние для фильтрации (пункт 4)
  const [filter, setFilter] = useState('');

  // Функция фильтрации пользователей (пункт 5)
  // Мемоизируем с помощью useCallback (пункт 6)
  const filterUsers = useCallback((searchText, list) => {
    return list.filter((user) =>
      user.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }, []);

  // Мемоизация отфильтрованного списка (пункт 7)
  const filteredUsers = useMemo(() => {
    return filterUsers(filter, users);
  }, [filter, filterUsers, users]);

  return (
    <div className={styles.container}>
  <h2>Список пользователей</h2>
  
  <input
    type="text"
    placeholder="Фильтр по имени..."
    value={filter}
    onChange={(e) => setFilter(e.target.value)}
    className={styles.input}
  />

  {/* Если список пустой */}
  {filteredUsers.length === 0 && (
    <p className={styles.emptyText}>Ничего не найдено</p>
  )}

  {/* Если в списке есть элементы */}
  {filteredUsers.length > 0 && (
    <ul className={styles.list}>
      {filteredUsers.map((user) => (
        <li key={user.id} className={styles.listItem}>
          {user.name}
        </li>
      ))}
    </ul>
  )}
</div>
  );
}

export default UserList;


/* Создайте новый проект React или используйте существующий.
1 Создание компонента списка пользователей:
-Создайте функциональный компонент `UserList`, который будет отображать список пользователей.
- Принимайте в качестве пропса массив объектов пользователей.

3 Инициализация списка пользователей:
Создайте массив объектов пользователей `userList` с несколькими пользователями. Каждый объект должен содержать поля `id` и `name`.

4 Создание состояния для фильтрации:
Используйте хук `useState`, чтобы создать состояние `filter`, которое будет хранить текст фильтрации.

5 Функция фильтрации пользователей:
- Создайте функцию `filterUsers`, которая принимает текст фильтрации и возвращает отфильтрованный список пользователей.
- Функция должна фильтровать пользователей по имени, игнорируя регистр.

6 Мемоизация функции фильтрации:
Мемоизируйте функцию `filterUsers` с помощью хука `useCallback`, чтобы она не пересоздавалась при каждом рендере.

7 Мемоизация отфильтрованного списка:
- Используйте хук `useMemo`, чтобы мемоизировать отфильтрованный список пользователей.
- Зависимостью `useMemo` должны быть состояние `filter` и функция `filterUsers`.

8 Разметка JSX:
- Создайте разметку JSX для приложения, включая поле ввода для фильтрации и компонент `UserList`.
- Передайте отфильтрованный список пользователей в компонент `UserList`.

9 Тестирование:
- Запустите ваше приложение и проверьте, что фильтрация пользователей работает корректно.
- Убедитесь, что список пользователей перерендеривается только при изменении текста фильтра. */
