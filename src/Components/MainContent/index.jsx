import React, { useState } from "react";
import cards from "../../Mocks/cards.json";
import cn from "classnames";
import styles from "../Header/header.module.scss";
import getRandomArbitrary from "../../utils/stuffMethods";

const MainContent = () => {
  const wordPeeker = () => {
    let array = [];
    for (let i = 0; i < cards.length; i++) {
      array.push(cards[i].id);
    }
    console.log(array);
    return array;
  };

  const [visibleWord, setVisibleWord] = useState(0);

  return (
      <div className={cn(styles.mainContentField)}>
      <div className={cn(styles.cardField, styles.item)}>
        <h2>Переведи слово</h2>
        {visibleWord === 0 && (
          <button onClick={() => setVisibleWord(1)}>Start the test</button>
        )}
        {
          // cards.map((card) => <div>{card.word}</div>)
          visibleWord !== 0 && (
            <div
              onClick={() => {
                if (visibleWord === cards.length - 1) {
                  setVisibleWord(0);
                  return;
                }
                setVisibleWord(visibleWord + 1);
              }}
              className={cn(styles.taskCard)}
            >
              {cards[visibleWord].word}
            </div>
          )
        }
        {/* <div className={cn(styles.taskCard, styles.card)}>{cards.word}</div> */}
      </div>
      <div className={cn(styles.translationField, styles.item)}>
        <h2>Перевод</h2>
        <div className={cn(styles.translationCard, styles.card)}>
          {cards[getRandomArbitrary(0, cards.length - 1)].translation}
        </div>
        <div className={cn(styles.translationCard, styles.card)}>{cards[getRandomArbitrary(0, cards.length - 2)].translation}</div>
        <div className={cn(styles.translationCard, styles.card)}>
        {cards[visibleWord].translation}
        </div>
      </div>
      <div className={cn(styles.positiveResultfIeld, styles.item)}>
        <h2>Верно</h2>
        <div className={cn(styles.positiveResultCard, styles.card)}>
          distinct
        </div>
        <div className={cn(styles.positiveResultCard, styles.card)}>divide</div>
        <div className={cn(styles.positiveResultCard, styles.card)}>
          distinguish
        </div>
        <div className={cn(styles.positiveResultCard, styles.card)}>
          permeate
        </div>
      </div>
      <div className={cn(styles.percentField, styles.item)}>
        <h2>Рузультативность</h2>
        <div className={cn(styles.percentCard, styles.card)}>88%</div>
      </div>
      <div className={cn(styles.negativeResultField, styles.item)}>
        <h2>Пока неточно</h2>
        <div className={cn(styles.negativeResultCard, styles.card)}>
          maintain
        </div>
        <div className={cn(styles.negativeResultCard, styles.card)}>
          consiquently
        </div>
      </div>
    </div>
  );
};

export default MainContent;
