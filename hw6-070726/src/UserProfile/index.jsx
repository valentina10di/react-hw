import styles from "./UserProfile.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

function UserProfile() {
  const [user, setUser] = useState(null);
  
  const [loading, setLoading] = useState(true);
  
  const [error, setError] = useState("");

  const fetchUser = () => {
    const url = "https://randomuser.me/api/0.8";

    setLoading(true);
    setError("");

    axios
      .get(url)
      .then((response) => {
        setUser(response.data.results[0].user);
      })
      .catch((error) => {
        console.error(error.message);
        setError(`Ошибка при загрузке данных: ${error.message}`);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.loading}>{error}</div>;
  }

  if (!user) {
    return <div className={styles.loading}>Данные не найдены</div>;
  }

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <div className={styles.card}>
      <div className={styles.avatarContainer}>
        <img 
          src={user.picture.large} 
          alt={`${user.name.first} ${user.name.last}`} 
          className={styles.avatar} 
        />
      </div>
      
      <h2 className={styles.name}>
        {capitalize(user.name.first)} {capitalize(user.name.last)}
      </h2>
      
      <p className={styles.info}>
        Email: <span className={styles.text}>{user.email}</span>
      </p>
      
      <p className={styles.info}>
        Phone: <span className={styles.text}>{user.phone}</span>
      </p>
      
      <button className={styles.button} onClick={fetchUser}>
        Load New User
      </button>
    </div>
  )
}

export default UserProfile;
