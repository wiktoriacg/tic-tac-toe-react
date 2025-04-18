import React, { useState } from "react";
import "./TicTacToe.css";

const TicTacToe = () => {
  const initialBoard = Array(9).fill(null);
  //Ustawienie zmiennych tablicy i czyja jest tora
  const [board, setBoard] = useState(initialBoard);
  const [isXTurn, setIsXTurn] = useState(true);

  const winner = calculateWinner(board);

  const handleClick = (index) => {
    //jeśli pole nie jest puste albo jest już wygrany nie robi nic
    if (board[index] || winner) return;

    //w przeciwnym wypadku kopiujmy plansze
    const newBoard = [...board];
    //wstawiamy x albo o zależności od gracza
    newBoard[index] = isXTurn ? "X" : "O";
    //zmieniamy tablicę i zmieniamy gracza
    setBoard(newBoard);
    setIsXTurn(!isXTurn);
  };

  //resetownie planszy
  const resetGame = () => {
    setBoard(initialBoard);
    setIsXTurn(true);
  };

  return (
    <div className="game-container">
      <h1 className="title">Tic Tac Toe</h1>
      <div className="board">
        {board.map((value, index) => (
          <button key={index} className="cell" onClick={() => handleClick(index)}>
            {value}
          </button>
        ))}
      </div>
      <p className="status">
        {winner
          ? `Winner: ${winner}`
          : board.includes(null)
          ? `Turn: ${isXTurn ? "X" : "O"}`
          : "It's a draw!"}
      </p>
      <button className="reset-btn" onClick={resetGame}>Reset</button>
    </div>
  );
};

function calculateWinner(squares) {
    //dzielimy tablice na 
    //0 1 2
    //3 4 5
    //6 7 9
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];
  //sprawdza kombinację znaków czy są te same i są wygrywające
  for (const [a, b, c] of lines) {
    //czy nie jest puste&& czy znak a jest taki sam jak b i czy znak a jest taki sam jak c
    //wtedy winner
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default TicTacToe;
