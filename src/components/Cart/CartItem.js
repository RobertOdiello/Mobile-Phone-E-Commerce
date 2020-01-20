import React from "react";
import styled from "styled-components";

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <Styles>
      <div className="row my-2 text-capitalize text-center">
        <div className="col-10 mx-auto col-lg-2">
          <img
            src={img}
            style={{ width: "5rem", height: "5rem" }}
            className="img-fluid"
            alt="product"
          ></img>
        </div>

        <div className="col-10 mx-auto col-lg-2">
          <span className="d-lg-none">product :</span>
          {title}
        </div>

        <div className="col-10 mx-auto col-lg-2">
          <span className="d-lg-none">price :</span>
          {price}
        </div>

        <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
          <div className="d-felx justify-content-center">
            <span className="btn btn-black mx-1" onClick={() => decrement(id)}>
              -
            </span>
            <span className="btn btn-black mx-1">{count}</span>
            <span className="btn btn-black mx-1" onClick={() => increment(id)}>
              +
            </span>
          </div>
        </div>

        <div className="col-10 mx-auto col-lg-2">
          <div className="cart-icon" onClick={() => removeItem(id)}>
            <i className="fas fa-trash"></i>
          </div>
        </div>

        <div className="col-10 mx-auto col-lg-2">
          <strong>item total : $ {total}</strong>
        </div>
      </div>
    </Styles>
  );
}

const Styles = styled.div`
  .btn-black {
    background: transparent;
    rext-transform: capitalize;
    font-size: 0.8rem !important;
    color: var(--mainDark);
    border-radius: 0 !important;
    border: 0.1rem solid var(--mainDark) !important;
  }

  .btn-black:hover {
    background: var(--mainDark) !important;
    color: var(--mainWhite) !important;
  }

  .cart-icon {
    cursor: pointer;
    font-size: 1.2rem;
    color: var(--mainYellow);
  }
`;
