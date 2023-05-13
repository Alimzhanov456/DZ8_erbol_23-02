import React from "react";
// import Container from "./Container";
import Card from "./Card";

// Первый пример
// const App = () => {
//   return (
//     <Container>
//       <h1>Привет, мир!</h1>
//       <p>Это содержимое контейнера.</p>
//     </Container>
//   );
// };

// Второй пример
const App = () => {
  return (
    <Card title="Заголовок карточки">
      <p>Это содержимое карточки.</p>
      <p>Дополнительный текст.</p>
    </Card>
  );
};

export default App;


