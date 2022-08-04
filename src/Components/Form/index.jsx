import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { employmentOptionsList, titleOptionsList } from "./helpers";
import Cards from "../Cards";
import * as Styled from "./styled";

const Form = () => {
  const [formComplete, setFormComplete] = useState(false);
  const [empStatus, setEmpStatus] = useState("");
  const [income, setIncome] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSelectChange = (event) => {
    setEmpStatus(event.target.value);
  };

  const handleInputChange = (event) => {
    setIncome(event.target.value);
  };

  const onSubmit = () => {
    setFormComplete(true);
  };

  return (
    <Styled.Wrapper>
      {formComplete ? (
        <Cards empStatus={empStatus} income={income} />
      ) : (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form__field">
            <label htmlFor="title">
              Title <sup>*</sup>
            </label>
            <select id="title" {...register("title", { required: true })}>
              {titleOptionsList}
            </select>
            {errors.title && (
              <span className="form__error">This field is required</span>
            )}
          </div>

          <div className="form__field">
            <label htmlFor="first-name">
              First name <sup>*</sup>
            </label>
            <input
              id="first-name"
              name="first-name"
              placeholder="First name"
              {...register("firstName", { required: true })}
            />
            {errors.firstName && (
              <span className="form__error">This field is required</span>
            )}
          </div>

          <div className="form__field">
            <label htmlFor="last-name">
              Last name <sup>*</sup>
            </label>
            <input
              id="last-name"
              name="last-name"
              placeholder="Last name"
              {...register("lastName", { required: true })}
            />
            {errors.lastName && (
              <span className="form__error">This field is required</span>
            )}
          </div>

          <div className="form__field">
            <label htmlFor="dob">
              Date of birth <sup>*</sup>
            </label>
            <div className="form__row">
              <input
                id="dd"
                name="dd"
                placeholder="DD"
                type="number"
                className="form__col"
                {...register("dd", { required: true })}
              />
              <input
                id="mm"
                name="mm"
                placeholder="MM"
                type="number"
                className="form__col"
                {...register("mm", { required: true })}
              />
              <input
                id="yyyy"
                name="yyyy"
                placeholder="YYYY"
                type="number"
                className="form__col"
                {...register("yyyy", { required: true })}
              />
            </div>
            {errors.dd && (
              <span className="form__error">
                Something is wrong with this date.
              </span>
            )
              ? errors.mm && (
                  <span className="form__error">
                    Something is wrong with this date.
                  </span>
                )
              : errors.yyyy && (
                  <span className="form__error">
                    Something is wrong with this date.
                  </span>
                )}
          </div>

          <div className="form__field">
            <label htmlFor="employment">
              Employment status <sup>*</sup>
            </label>
            <select
              id="employment"
              {...register("employment", { required: true })}
              onChange={handleSelectChange}
            >
              {employmentOptionsList}
            </select>
            {errors.employment && (
              <span className="form__error">This field is required</span>
            )}
          </div>

          <div className="form__field">
            <label htmlFor="income">
              Annual income<sup>*</sup>
            </label>
            <input
              id="income"
              name="income"
              type="number"
              placeholder="Annual income per year"
              pattern="^[0-9]*$"
              {...register("income", { required: true })}
              onChange={handleInputChange}
            />
            {errors.income && (
              <span className="form__error">This field is required</span>
            )}
          </div>

          <div className="form__field">
            <label htmlFor="house-number">
              House number <sup>*</sup>
            </label>
            <input
              id="house-number"
              name="house-number"
              placeholder="House number"
              {...register("houseNumber", { required: true })}
            />
            {errors.houseNumber && (
              <span className="form__error">This field is required</span>
            )}
          </div>

          <div className="form__field">
            <label htmlFor="postcode">
              Postcode <sup>*</sup>
            </label>
            <input
              id="postcode"
              name="postcode"
              placeholder="Postcode"
              {...register("postcode", { required: true })}
            />
            {errors.postcode && (
              <span className="form__error">This field is required</span>
            )}
          </div>

          <div className="form__field">
            <Styled.Button type="submit">Send</Styled.Button>
          </div>
        </form>
      )}
    </Styled.Wrapper>
  );
};

export default Form;
