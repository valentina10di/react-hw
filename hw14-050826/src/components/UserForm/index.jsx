import { useState } from "react";
import { setUserInfo } from "../../redux/actions/actions";
import { connect } from "react-redux";
import styles from './UserForm.module.css';



function UserForm ({setUserInfo}) {
    const [name, setName] = useState ('');
    const [status, setStatus] = useState('');
    const [error, setError] = useState(''); // Состояние для сообщения об ошибке

    const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Проверка на пустые поля
    if (!name.trim() || !status.trim()) {
      setError('Please fill in all fields!');
      return;
    } 
    
    // 2. Проверка длины имени
    if (name.trim().length < 2) {
      setError('Name must be at least 2 characters long.');
      return;
    }

    // Если всё в порядке — отправляем данные в Redux и очищаем форму
    setUserInfo({ name: name.trim(), status: status.trim() });
    setName('');
    setStatus('');
    setError(''); // Сбрасываем ошибку
  };

  return (
    <div className={styles.container}>
      <h2>Edit User Information</h2>

      {/* Выводим ошибку, если она есть */}
      {error && <p className={styles.errorText}>{error}</p>}

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (error) setError(''); // Убираем ошибку при вводе
            }}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="status">Status: </label>
          <input
            id="status"
            type="text"
            value={status}
            onChange={(e) =>{
              setStatus(e.target.value);
              if (error) setError(''); // Убираем ошибку при вводе
            }}
          />
        </div>

        <button type="submit" className={styles.button}>Save</button>
      </form>
    </div>
  );
};

const mapDispathToProps = {
    setUserInfo,
};

export default connect(null,  mapDispathToProps) (UserForm);