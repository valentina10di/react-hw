// Создадим простое приложение с возможностью менять рейтинг.
// Создайте новый файл Rating.jsx.

// Внутри файла Rating.jsx импортируйте useState из React.

// Создайте функциональный компонент Rating.

// Внутри компонента Rating используйте useState для создания состояния ratingValue, начальное значение которого будет равно 0.

// Определите массив ratingList, содержащий ссылки на изображения для разных значений рейтинга.

// Верните JSX в компоненте Rating, который будет содержать:

//    Изображение текущего рейтинга из массива ratingList.

//    Кнопки с различными значениями рейтинга (например, "Плохо", "Приемлемо", "Хорошо", "Отлично").

// Для каждой кнопки установите обработчик события onClick, который будет обновлять состояние ratingValue в соответствии с выбранным значением рейтинга.

// Внутри компонента Rating определите возвращаемый JSX так, чтобы изображение рейтинга и кнопки располагались внутри контейнера <div>.

// В файле App.js импортируйте компонент Rating из файла Rating.jsx.

// В компоненте App используйте компонент Rating.

// Стилизуйте приложение на ваш вкус: задайте цвет и размер кнопкам, задайте размер изображениям и т.п.

// Запустите ваше React-приложение и убедитесь, что компонент Rating отображается и работает корректно, позволяя пользователю выбирать разные значения рейтинга.

import { useState } from "react";
import styles from "./Rating.module.css";

const ratingList = [
  "https://fonts.gstatic.com/s/e/notoemoji/latest/1f621/512.webp",
  "https://fonts.gstatic.com/s/e/notoemoji/latest/1f610/512.webp",
  "https://fonts.gstatic.com/s/e/notoemoji/latest/1f642/512.webp",
  "https://fonts.gstatic.com/s/e/notoemoji/latest/1f929/512.webp",
];

function Rating({title}) {
  const [ratingValue, setRatingValue] = useState(0);

  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <img
        className={styles.image}
        src={ratingList[ratingValue]}
        alt="Рейтинг"
      />
      <div className={styles.buttons}>
        <button onClick={() => setRatingValue(0)}>Плохо</button>
        <button onClick={() => setRatingValue(1)}>Приемлемо</button>
        <button onClick={() => setRatingValue(2)}>Хорошо</button>
        <button onClick={() => setRatingValue(3)}>Отлично</button>
      </div>
    </div>
  );
}
export default Rating;
