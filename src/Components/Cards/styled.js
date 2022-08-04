import styled from "styled-components";
import { primaryButton } from "../Global/CSS/_mixins";
import { color } from "../Global/variables";

export const Wrapper = styled.div`
  .card {
    background-color: ${color.offWhite};
    border: 1px solid ${color.border};
    border-radius: 10px;
    margin: 2rem 0;
    padding: 1rem;
    position: relative;

    &:hover {
      .card__overlay {
        opacity: 1;
        transition: opacity 0.35s ease;
      }
    }

    &__text-bold {
      font-weight: bold;
    }

    &__overlay {
      align-items: center;
      background-color: ${color.white09};
      border: 1px solid ${color.border};
      border-radius: 10px;
      display: flex;
      height: 100%;
      justify-content: center;
      left: 0;
      opacity: 0;
      position: absolute;
      top: 0;
      transition: opacity 0.35s ease;
      width: 100%;
    }

    &__button {
      ${primaryButton}
      padding: 0 20px;
    }
  }
`;
