
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import { Box, CssBaseline, Typography } from '@mui/material';
import './App.css';
import { useMemo, useState } from 'react';

// 2. Создание светлой и тёмной тем
const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

// 3.стилизация кнопки 
//styled('button') — функция из библиотеки @emotion/styled. Она говорит React и Material-UI: «Создай обычный HTML-тег <button>, но добавь к нему наши кастомные стили».
//(({ theme }) => ({ ... })) — это функция-стрелка, которая принимает объект theme (текущую тему Material-UI, которая передается через ThemeProvider). Благодаря этому мы можем динамически брать цвета из темы (светлой или темной) прямо в стилях
const StyledButton = styled('button')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,  //theme.palette.primary.main — берем основной цвет палитры из текущей темы Material-UI (в светлой теме он синий, но может меняться).
  color: theme.palette.primary.contrastText,  //theme.palette.primary.contrastText — специальный цвет текста от MUI, который автоматически подбирается так, чтобы быть идеально контрастным и читаемым на фоне primary.main
  padding: '10px 20px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '1rem', //Задает размер шрифта текста внутри кнопки (равен 1 базовому размеру шрифта страницы).
  transition: 'background-color 0.2s', //Включает плавную анимацию изменения цвета фона
  '&:hover': {
    backgroundColor: theme.palette.primary.dark, 
  },
}));

function App() {
  // 4. Состояние для переключения темы
  const [mode, setMode] = useState('light');

  const theme = useMemo(() => (mode === 'light' ? lightTheme : darkTheme), [mode]);

  
  //  const toggleTheme = () => {
  //   setMode(mode === 'light' ? 'dark' : 'light');
  // };

//защищает от возможных багов при асинхронных или быстрых (множественных) обновлениях состояния, когда значение mode может не успеть обновиться в памяти.
  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    // 5. Рендеринг
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ p: '40px', textAlign: 'center' }}>
        <Typography 
        variant="h3" 
        gutterBottom>
          {mode === 'light' ? 'Light Mode' : 'Dark Mode'}
        </Typography>
        <StyledButton onClick={toggleTheme}>
          Toggle Theme
        </StyledButton>
      </Box>
    </ThemeProvider>
  );
}

export default App;




// 1 Создание темы
// Откройте файл `App.js` в вашем текстовом редакторе.
// Импортируйте необходимые модули из Material UI для создания и предоставления темы:
// `ThemeProvider` для предоставления темы всему приложению.
// `createTheme` для создания кастомной темы.
// `CssBaseline` для нормализации базовых стилей по умолчанию.


// 2 Создайте светлую и тёмную темы:
// Определите палитру цветов для светлой темы.
// Определите палитру цветов для тёмной темы.

// 3 Стилизация компонентов с помощью Emotion
// Импортируйте `styled` из Emotion.
// Создайте стилизованную кнопку:
// Определите стили для кнопки, такие как цвет фона, цвет текста, радиус границы и состояние при наведении.
// Используйте тему для получения цветов.

// 4 Создание функциональности для переключения темы
// Создайте функциональный компонент `App`.
// Используйте состояние (`useState`) для отслеживания текущего режима темы (светлый или тёмный).
// Создайте функцию для переключения между светлой и тёмной темой.

// 5 Рендеринг компонентов
// Оберните основной контент приложения в компонент `ThemeProvider`, передав ему текущую тему.
// ключите компонент `CssBaseline` для нормализации базовых стилей.
// Добавьте заголовок (`Typography`), который будет изменять текст в зависимости от текущей темы.
// Добавьте стилизованную кнопку, которая будет изменять тему при нажатии.

// 6 Запуск приложения
// Запустите приложение командой:
// npm start




