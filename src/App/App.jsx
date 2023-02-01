import React, { useState } from 'react';
import './App.css';
import WishInput from './WishInput';
import WishList from './WishList';

const initialWishes = [
  { text: 'Travel', done: false },
  { text: 'Paying everything', done: true },
  { text: 'Going to the gym', done: true },
];

export default function App() {
  const [wishes, setWishes] = useState(initialWishes);

  return (
    <div className="app">
      <h1>My wishlist</h1>
      <WishInput onNewWish={(wish) => setWishes([wish, ...wishes])} />
      <WishList wishes={wishes} onWishesChange={setWishes} />
      <button
        type="button"
        className="wish-clear"
        onClick={() => setWishes(wishes.filter((wish) => !wish.done))}
      >
        Archivar completados
      </button>
    </div>
  );
}
