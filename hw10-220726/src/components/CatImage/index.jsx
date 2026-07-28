import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./CatImage.module.css";

const CAT_API_URL = "https://api.thecatapi.com/v1/images/search";

function CatImage() {
  const [imageUrl, setImageUrl] = useState("");

  const fetchCatImage = async () => {
    try {
      const response = await axios.get(CAT_API_URL);
      setImageUrl(response.data[0].url);
    } catch (error) {
      console.error("Ошибка при загрузке котика:", error);
    }
  };

  useEffect(() => {
    fetchCatImage();
  }, []);

  return (
    <div className={styles.card}>
      <h1 className={styles.title}>Random Cat Image</h1>

      <div className={styles.imageWrapper}>
        {imageUrl && (
          <img src={imageUrl} alt="Random Cat" className={styles.image} />
        )}
      </div>

      <button onClick={fetchCatImage} className={styles.button}>
        Load New Image
      </button>
    </div>
  );
}

export default CatImage;

// // Записываем URL API CatAPI в константу, чтобы не дублировать строку в коде
// const CAT_API_URL = "https://api.thecatapi.com/v1/images/search";

// // Объявляем и экспортируем по умолчанию функциональный компонент CatImage
//    function CatImage() {
//   // Создаем состояние imageUrl для хранения ссылки на текущую картинку кота (изначально пустая строка)
//   const [imageUrl, setImageUrl] = useState("");

//   // Создаем состояние loading для отслеживания процесса загрузки (true — загружается, false — нет)
//   const [loading, setLoading] = useState(false);

//   // Объявляем асинхронную функцию для получения случайного изображения кота с сервера
//   const fetchCatImage = async () => {
//     try {
//       // Устанавливаем статус загрузки в true, чтобы показать пользователю индикатор и заблокировать кнопку
//       setLoading(true);

//       // Делаем GET-запрос к API и ждем ответ с помощью await
//       const response = await axios.get(CAT_API_URL);

//       // API возвращает массив с объектом, например: [{ url: "https://cdn2.thecatapi.com/images/..." }]
//       // Сохраняем ссылку на картинку (из первого элемента массива) в состояние imageUrl
//       setImageUrl(response.data[0].url);
//     } catch (error) {
//       // В случае ошибки при запросе выводим ее в консоль браузера
//       console.error("Ошибка при загрузке котика:", error);
//     } finally {
//       // Блок finally выполняется всегда после завершения запроса (успешного или с ошибкой).
//       // Возвращаем статус загрузки в false
//       setLoading(false);
//     }
//   };

//   // Пустой массив зависимостей [] гарантирует, что эффект сработает только 1 раз
//   useEffect(() => {
//     fetchCatImage();
//   }, []);

//   // Возвращаем JSX-разметку компонента
//   return (

//     <div className={styles.card}>
//       <h1 className={styles.title}>Random Cat Image</h1>

//       <div className={styles.imageWrapper}>
//         {/* Тернарный оператор: если идет загрузка, показываем надпись "Загрузка...", иначе — картинку */}
//         {loading ? (
//           <div className={styles.loader}>Загрузка...</div>
//         ) : (
//           /* Рендерим тег img только если в imageUrl есть ссылка */
//           imageUrl && (
//             <img src={imageUrl} alt="Random Cat" className={styles.image} />
//           )
//         )}
//       </div>

//       <button
//         // При клике на кнопку вызываем функцию fetchCatImage
//         onClick={fetchCatImage}
//         // Отключаем кнопку во время загрузки, чтобы избежать спам-кликов
//         disabled={loading}
//         // Применяем стили кнопки из CSS-модуля
//         className={styles.button}
//       >
//         {/* Меняем текст на кнопке в зависимости от состояния загрузки */}
//         {loading ? "Загрузка..." : "Load New Image"}
//       </button>
//     </div>
//   );
// }
// export default CatImage;
