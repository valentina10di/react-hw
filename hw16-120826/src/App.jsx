import { useState } from 'react'
import './App.css'
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Container, 
  Dialog,      //всплывающее диалоговое окно
  DialogActions, //контейнер для размещения интерактивных элементов (обычно кнопок) внизу диалога
  DialogContent, //контейнер для основного текста или элементов диалогового окна
  DialogContentText, //компонент для стилизации абзацев текста внутри диалога
  DialogTitle    ////отображение заголовка внутри диалогового окна
} from '@mui/material'



function App() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
   <div className="app">
      <AppBar position="static">
        <Toolbar>
          <Typography 
          variant="h6" 
          component="p"
          sx={{ fontSize: '1.1rem' }}
          >
            My Material UI App
          </Typography>
        </Toolbar>
      </AppBar>

      <Container
      maxWidth="md"
      sx={{ pt: 4, pl: 4 }}
      >
        <Typography 
        variant="h3"
        component="h1"
        gutterBottom
        sx={{ fontSize: '2rem' }}
        >
          Welcome to our app
        </Typography>
        <Button
        variant="contained" 
          color="primary" 
          onClick={handleClickOpen}
        >
          Open dialog
        </Button>
      </Container>

      <Dialog 
      open={open} 
      onClose={handleClose}
      sx={{mt: '150px'}} //сдвигает диалоговое окно вниз
      >
        <DialogTitle>
          Использовать Material UI?
        </DialogTitle>
        
        <DialogContent>
          <DialogContentText>
            Это просто React приложение с использованием Material UI. Вы можете настроить его по своему усмотрению.
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Отмена
          </Button>

          <Button onClick={handleClose} color="primary">
            Согласен
          </Button>
        </DialogActions>

      </Dialog>

   </div>
  )
}

export default App


// Задание
// Создание React приложения с использованием Material UI.
// При возникновении трудностей обратитесь к документации Material UI - Material UI components
// 1 Настройка проекта React.
// Создайте новый проект при помощи Create React App
// В терминале выполните команду для установки пакетов Material UI:
// npm install @mui/material @emotion/react @emotion/styled @mui/icons-material

// 2 Написание кода
// Откройте файл App
// Импортируйте необходимые компоненты Material UI, такие как `AppBar`, `Toolbar`, `Typography`, `Button`, `Container`, `Dialog`, `DialogActions`, `DialogContent`, `DialogContentText`, и `DialogTitle`.
// Создайте верхнюю панель навигации (`AppBar`) с заголовком (`Typography`).
// Добавьте контейнер (`Container`) для основной части приложения.
// В контейнере разместите приветственный текст (`Typography`) и кнопку (`Button`), которая будет открывать диалоговое окно.
// Создайте состояние для управления отображением диалогового окна.
// Реализуйте функции для открытия и закрытия диалогового окна.
// бавьте диалоговое окно (`Dialog`) с текстом и кнопками для закрытия.

// 3 Запуск приложения
// Сохраните изменения в файле App.js.
// Вернитесь в терминал и выполните команду для запуска приложения.

// 4 Что должно получиться
// AppBar: Верхняя панель навигации с заголовком.
// Container: Контейнер для основной части приложения.
// Typography: Компонент для текста, отображающий приветственное сообщение.
// Button: Кнопка, при нажатии на которую открывается диалоговое окно.
// Dialog: Диалоговое окно с текстом и кнопками для закрытия.