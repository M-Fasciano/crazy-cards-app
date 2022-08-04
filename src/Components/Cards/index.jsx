import React, { useState } from "react";
import cards from "../../Data/cards.json";
import * as Styled from "./styled";

const Cards = (data) => {
  const [credit, setCredit] = useState(0);

  const cardsList = cards.cards
    .filter((card) => card.minIncome <= data.income)
    .filter(
      (card) => card.empStatus == null || card.empStatus === data.empStatus
    )
    .map((card) => {
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
              className="card__button"
              onClick={() => {
                const newCredit = credit + card.credit;
                setCredit(newCredit);
              }}
            >
              Select card
            </button>
          </div>
        </div>
      );
    });

  return (
    <>
      <h2>Availble credit: £{credit}</h2>
      <Styled.Wrapper>{cardsList}</Styled.Wrapper>
    </>
  );
};

export default Cards;
