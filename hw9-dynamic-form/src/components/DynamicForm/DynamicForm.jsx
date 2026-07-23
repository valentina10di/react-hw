import { useForm} from "react-hook-form";
import styles from './DynamicForm.module.css';


const MIN_LENGTH = 5;

function DynamicForm() {
    const {
      register,
      handleSubmit,
      watch,
      formState: {errors}     
    } = useForm({
        mode: 'onChange'
    });

    const firstFieldValue = watch('firstField', '');

    const showSecondField = firstFieldValue.length >= MIN_LENGTH;

    const onSubmit = (data) => {
        console.log('Данные формы:', data)
        alert('Форма успешно отправлена!\n' + JSON.stringify(data, null, 2));    
    };

    return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit(onSubmit)}>
    
        <div className={styles.fieldGroup}>

          <label className={styles.label} htmlFor="firstField">
            First Field
          </label>

          <input
            id="firstField"
            className={styles.input}
            type="text"
            {...register('firstField', {
              required: 'Обязательное поле',
              minLength: {
                value: MIN_LENGTH,
                message: `Минимальная длина — ${MIN_LENGTH} символов`
              }
            })}
          />

          {errors.firstField && (
            <span className={styles.error}>{errors.firstField.message}</span>
          )}
          
        </div>

        {/* Второе поле */}
        {showSecondField && (
          <div className={styles.fieldGroup}>
            <label className={styles.label} htmlFor="secondField">
              Second Field
            </label>
            <input
              id="secondField"
              className={styles.input}
              type="text"
              {...register('secondField', {
                required: 'Обязательное поле'
              })}
            />
            {errors.secondField && (
              <span className={styles.error}>{errors.secondField.message}</span>
            )}
          </div>
        )}

        <button type="submit" className={styles.submitBtn}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default DynamicForm;



// Задание
// Создание приложения, в котором второе поле ввода появляется только после того, как первое поле успешно прошло проверку на минимальную длину.


// 1. Установка и настройка проекта
// Создайте новый проект React: В терминале выполните команду:
// npx create-react-app dynamic-form
// Это создаст новый проект React с именем `dynamic-form`.
// Перейдите в директорию проекта:
// cd dynamic-form
// Установите `react-hook-form`:
// npm install react-hook-form

// 2. Создание структуры проекта
// Создайте директорию для компонентов:
// В директории `src` создайте папку `components`.
// Создайте файл для компонента формы:
// В папке `components` создайте файл `DynamicForm.jsx`.
// Создайте файл для модульных стилей:
// В папке `components` создайте файл `DynamicForm.module.css`.

// 3. Создание компонента `DynamicForm`
// Импортируйте необходимые модули в `DynamicForm.jsx`:
// Импортируйте `React` из `react`.
// Импортируйте необходимые функции из `react-hook-form`.
// Импортируйте стили из `DynamicForm.module.css`.
// Создайте компонент `DynamicForm`:
// Используйте хук `useForm` для управления состоянием и валидацией формы.
// Создайте функцию `onSubmit`, которая будет обрабатывать отправку формы.
// Используйте `watch` для отслеживания значений полей ввода.
// Определите условие для отображения второго поля ввода на основе значения первого поля.
// Реализуйте JSX-разметку формы, добавив стили из CSS-модуля.


// 4.Создание модульных стилей
// Откройте файл `DynamicForm.module.css`:
// Определите стили для различных элементов формы, включая контейнеры, метки, поля ввода, сообщения об ошибках и кнопку отправки.

// 6. Настройка главного компонента приложения
// Откройте файл `App.jsx` в корневой директории `src`:
// Импортируйте `React` и компонент `DynamicForm`.
// Создайте компонент `App`, который будет рендерить заголовок и компонент `DynamicForm`.

// 6. Запуск приложения
// Запустите проект:
// В терминале выполните команду:

// pm start

// 7. Тестирование и отладка
// Проверьте функциональность формы:
// Убедитесь, что первое поле ввода отображается и валидируется правильно.
// Введите значение, соответствующее условиям валидации, и проверьте, что второе поле ввода появляется.
// Проверьте, что ошибки валидации отображаются корректно.

// Отладка при необходимости:
// Если что-то не работает, откройте консоль разработчика в браузере и посмотрите на сообщения об ошибках.
// Проверьте, правильно ли импортированы и подключены все файлы и стили.

