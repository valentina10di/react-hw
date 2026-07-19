import { useState, useEffect } from 'react';
import styles from './ListItems.module.css';

function ListItems() {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('');

    //  Внедряю НАМЕРЕННУЮ ошибку
//   useEffect(() => {
//     console.log("Компонент ListItems обновлен");
//   }, [items]); 
  //убираю ошибку: заменяю второй аргумент в useEffect на пустой массив
  useEffect(() => {
    console.log("Компонент ListItems обновлен");
  }, []); 

    // добавляю елемент
    const addItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue(''); // Очищаю поле ввода
    }
  };

    return(
        <div className={styles.container}>
      <h2 className={styles.title}>Мой список элементов</h2>
      
      <div className={styles.inputArea}>
        <input
          type="text"
          className={styles.input}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Введите название..."
        />
        <button className={styles.button} onClick={addItem}>
          Добавить
        </button>
      </div>

      <ul className={styles.list}>
        {items.map((item, index) => (
          <li key={index} className={styles.listItem}>
            {item}
          </li>
        ))}
      </ul>
    </div>
    )
}

export default ListItems;