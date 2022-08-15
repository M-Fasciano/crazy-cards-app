import React, { useState } from "react";
import cards from "../../Data/cards.json";
import * as Styled from "./styled";

const Cards = (data) => {
  const [credit, setCredit] = useState(0);
  const [selected, setSelected] = useState([]);

  const cardsData = cards.cards.filter(
    (card) =>
      card.minIncome <= data.income &&
      (card.empStatus == null || card.empStatus === data.empStatus)
  );

  const handleSelectCard = (e, index) => {
    const creditAvailable = e.target.getAttribute("data-credit");
    const newCredit = credit + parseInt(creditAvailable);
    const updatedCredit = credit - parseInt(creditAvailable);
    const idx = selected.indexOf(index);

    if (selected.indexOf(index) === -1) {
      setSelected([...selected, index]);
      setCredit(newCredit);
    } else if (idx > -1) {
      selected.splice(idx, 1);
      setCredit(updatedCredit);
    }
  };

  const cardsList = cardsData.map((card, idx) => {
    return (
      <div key={card.name} className="card">
        <h1>{card.name}</h1>
        <p>
          Apr: <span className="card__text-bold">{card.apr}%</span>
        </p>
        <p>
          Balance Transfer Offer Duration:{" "}
          <span className="card__text-bold">
            {card.balanceTransferOfferDuration} months
          </span>
        </p>
        <p>
          Purchase Offer Duration:{" "}
          <span className="card__text-bold">
            {card.purchaseOfferDuration} months
          </span>
        </p>
        <p>
          Credit Available:{" "}
          <span className="card__text-bold">£{card.credit}</span>
        </p>
        <div className="card__overlay">
          <button
            className={`card__button${
              selected.indexOf(idx) !== -1 ? " active" : ""
            }`}
            onClick={(e) => handleSelectCard(e, idx)}
            data-credit={card.credit}
          >
            {selected.indexOf(idx) !== -1 ? "Unselect card" : "Select card"}
          </button>
        </div>
      </div>
    );
  });

  return (
    <>
      <h2>Available credit: £{credit}</h2>
      <Styled.Wrapper>{cardsList}</Styled.Wrapper>
    </>
  );
};

export default Cards;
