import styled from "styled-components";
import { ComponetWrapper, primaryButton } from "../Global/CSS/_mixins";
import { color } from "../Global/variables";

export const Wrapper = styled.div`
  ${ComponetWrapper}

  .form {
    width: 100%;

    &__field {
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
    }

    &__row {
      display: flex;
      justify-content: space-between;
    }

    &__col {
      width: calc(100% / 3 - 10px);
    }

    &__error {
      color: ${color.red};
      margin: 8px;
    }
  }
`;

export const Button = styled.button`
  ${primaryButton}
  margin-top: 2rem;
`;
