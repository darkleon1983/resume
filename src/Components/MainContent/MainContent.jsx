import React from "react";
import Mocks from "../../Mocks/cards.json";

const MainContent = () => {
  const cards = Mocks;
  return (
    <div className="mainContentField">
      <div className="cardField item">
        <h2>Переведи слово</h2>
        <div className="taskCard card">{cards.word}</div>
      </div>
      <div className="translationField item">
        <h2>Перевод</h2>
        <div className="translationCard card">{cards.translation}</div>
        <div className="translationCard card">Округ</div>
        <div className="translationCard card">Прострация</div>
      </div>
      <div className="positiveResultfIeld item">
        <h2>Верно</h2>
        <div className="positiveResultCard card">distinct</div>
        <div className="positiveResultCard card">divide</div>
        <div className="positiveResultCard card">distinguish</div>
        <div className="positiveResultCard card">permeate</div>
      </div>
      <div className="percentField item">
        <h2>Рузультативность</h2>
        <div className="percentCard card">88%</div>
      </div>
      <div className="negativeResultField item">
        <h2>Пока неточно</h2>
        <div className="negativeResultCard card">maintain</div>
        <div className="negativeResultCard card">consiquently</div>
      </div>
    </div>
  );
};

export default MainContent;
