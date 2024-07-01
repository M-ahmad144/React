import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../Styles/ticTaocToe.css';

export default function TicTacToe() {

    const [squares, setSquares] = useState(Array(9).fill(''));
    const [isXTurn, setIsXTurn] = useState(true);
    const [status, setStatus] = useState('');

    function handleClick(index) {
        // Check if the clicked square is already filled or if there's already a game result
        if (squares[index] || status) return;

        // Create a copy of the current squares array
        const newSquares = squares.slice();

        // Assign 'X' or 'O' to the clicked square based on whose turn it is
        newSquares[index] = isXTurn ? 'X' : 'O';

        // Update the squares state with the new array
        setSquares(newSquares);

        // Toggle the player turn for the next move
        setIsXTurn(!isXTurn);

        // Check if the current move resulted in a win or draw
        checkWinner(newSquares);
    }

    function checkWinner(squares) {
        // Define all possible winning combinations (indices of winning lines)
        const lines = [
            [0, 1, 2],  // Top row
            [3, 4, 5],  // Middle row
            [6, 7, 8],  // Bottom row
            [0, 3, 6],  // Left column
            [1, 4, 7],  // Middle column
            [2, 5, 8],  // Right column
            [0, 4, 8],  // Diagonal from top-left to bottom-right
            [2, 4, 6]   // Diagonal from top-right to bottom-left
        ];

        // Iterate through each winning line
        for (let line of lines) {
            const [a, b, c] = line;

            // Check if all three squares in the line are filled with the same symbol (either 'X' or 'O')
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                // Set the game status to indicate the winner
                setStatus(`Player ${squares[a]} Wins!`);
                return; // Exit function since we found a winner
            }
        }

        // If no winner is found and all squares are filled, it's a draw
        if (squares.every(square => square)) {
            setStatus('It\'s a Draw!');
        }
    }

    function resetGame() {
        // Reset the game state: clear all squares, set X's turn, and clear status message
        setSquares(Array(9).fill('')); // Reset squares to an array of 9 empty strings
        setIsXTurn(true); // Set the first move to X
        setStatus(''); // Clear any status message (winner or draw)
    }

    function Square({ value, onClick }) {
        // Render each square button with its value ('X', 'O', or empty) and an onClick handler
        return (
            <button
                className="square"
                onClick={onClick}
            >
                {value}
            </button>
        );
    }



    return (
        <div className="game-container">
            <h1 className="title">Tic Tac Toe</h1>
            <div className="status">{status}</div>
            <div className="board">
                <div className="row">
                    <Square value={squares[0]} onClick={() => handleClick(0)} />
                    <Square value={squares[1]} onClick={() => handleClick(1)} />
                    <Square value={squares[2]} onClick={() => handleClick(2)} />
                </div>
                <div className="row">
                    <Square value={squares[3]} onClick={() => handleClick(3)} />
                    <Square value={squares[4]} onClick={() => handleClick(4)} />
                    <Square value={squares[5]} onClick={() => handleClick(5)} />
                </div>
                <div className="row">
                    <Square value={squares[6]} onClick={() => handleClick(6)} />
                    <Square value={squares[7]} onClick={() => handleClick(7)} />
                    <Square value={squares[8]} onClick={() => handleClick(8)} />
                </div>
            </div>
            {status && <button className="reset-button" onClick={resetGame}>Reset Game</button>}
        </div>
    );
}
