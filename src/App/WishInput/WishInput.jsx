/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function WishInput({ onNewWish }) {
  const [newWishText, setNewWishText] = useState('');

  return (
    <fieldset className="wish-input">
      <legend className="wish-input__label">Nuevo deseo</legend>
      <input
        placeholder="Añade tu deseo aquí"
        className="wish-input__field"
        value={newWishText}
        onChange={(e) => setNewWishText(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === 'Enter' && newWishText.length) {
            onNewWish({ done: false, text: newWishText });
          }
        }}
      />
    </fieldset>
  );
}

WishInput.propTypes = {
  onNewWish: PropTypes.func,
};

WishInput.defaultProps = {
  onNewWish: () => {},
};
