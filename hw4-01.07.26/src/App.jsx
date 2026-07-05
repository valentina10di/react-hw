import { useState } from "react";
import "./App.css";
 import CitySelector from "./components/CitySelector";
 import CityCard from "./components/CityCard";
import MathQuiz from "./components/MathQuiz";


function App() {

  const citiesData = [
    {
      name: "Токио",
      description:
        "Столица Японии, известная своими неоновыми огнями, многолюдностью и современной архитектурой.",
      imageUrl:
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80",
      facts: [
        "Токио - самый населенный мегаполис в мире.",
        "Здесь расположена самая высокая башня в Японии - Токийская башня.",
        "В Токио проходят множество культурных событий и фестивалей.",
      ],
    },

    {
      name: "Киото",
      description:
        "Город на острове Хонсю, известный своими многочисленными классическими буддийскими храмами, а также садами, императорскими дворцами, синтоистскими святилищами и традиционными деревянными домами.",
      imageUrl:
          "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
      facts: [
        "В Киото насчитывается более 1600 буддийских храмов.",
        "Этот город был столицей Японии более тысячи лет.",
      ],
    },

    {
      name: "Осака",
      description:
        "Город в центральной части острова Хонсю, известен своими современными достопримечательностями и активной ночной жизнью.",
      imageUrl:
        "https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&w=1200&q=80",
      facts: [
        "Осака известна своим замком, который играл ключевую роль в объединении Японии в XVI веке.",
        "Город является кулинарной столицей Японии.",
      ],
    },

    {
      name: "Хоккайдо",
      description:
        "Самый северный остров Японии, известный своей природой, снежными фестивалями и уникальной культурой.",
      imageUrl:
        "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=1200&q=80",
      facts: [
        "Хоккайдо предлагает отличные условия для зимних видов спорта, особенно для лыжного спорта и сноубординга.",
        "Летом остров привлекает туристов своими цветущими лавандовыми полями.",
      ],
    },

    {
      name: "Нагоя",
      description:
        "Город в центре Хонсю, известен своим отраслевым влиянием и историческими достопримечательностями.",
      imageUrl:
        "https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=1200&q=80",
      facts: [
        "Нагоя - один из важнейших промышленных городов Японии, центр автомобилестроения.",
        "Здесь находится известный Нагойский замок с позолоченными делфинами на крыше.",
      ],
    },
  ];

 const [selectedCity, setSelectedCity] = useState(citiesData[0]);

  return (
    <div className="app">
      <h1>Города Японии</h1>

      <CitySelector
        cities={citiesData}
        onSelectCity={setSelectedCity}
      />

      <CityCard city={selectedCity} />

    <MathQuiz/>

    </div>
  );
}

export default App;
