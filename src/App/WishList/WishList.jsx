/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import WishItem from './WishItem';

export default function WishList({ wishes, onWishesChange }) {
  return (
    <ul className="wish-list">
      {wishes.map(({ text, done }, i) => (
        // <li
        //   className={`wish-list__item ${done ? 'wish-list__item--done' : ''}`}
        // >
        <WishItem
          text={text}
          done={done}
          id={`wish${i}`}
          key={text}
          onDoneChange={(value) => {
            const updatedWishes = [...wishes];
            updatedWishes[i].done = value;
            onWishesChange(updatedWishes);
          }}
        />
      ))}
    </ul>
  );
}

WishList.propTypes = {
  wishes: PropTypes.arrayOf(
    PropTypes.shape({
      done: PropTypes.bool,
      text: PropTypes.string,
    }),
  ),
  onWishesChange: PropTypes.func,
};

WishList.defaultProps = {
  wishes: [],
  onWishesChange: () => {},
};
