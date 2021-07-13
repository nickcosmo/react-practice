import React, { Component } from 'react';
import './Hangman.css';
import { randomWord } from './words';
import GameEnd from './GameEnd';
import ButtonArea from './ButtonArea';
import img0 from './0.jpg';
import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';
import img5 from './5.jpg';
import img6 from './6.jpg';

class Hangman extends Component {
    /** by default, allow 6 guesses and use provided gallows images. */
    static defaultProps = {
        maxWrong: 6,
        images: [img0, img1, img2, img3, img4, img5, img6],
        letters: 'abcdefghijklmnopqrstuvwxyz',
    };

    constructor(props) {
        super(props);
        this.state = { nWrong: 0, guessed: new Set(), answer: randomWord(), winner: false };
        this.handleGuess = this.handleGuess.bind(this);
        this.restart = this.restart.bind(this);
    }

    /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
    guessedWord() {
        return this.state.answer.split('').map((ltr) => (this.state.guessed.has(ltr) ? ltr : '_'));
    }

    /** handleGuess: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
    handleGuess(evt) {
        let ltr = evt.target.value;
        this.setState(
            (st) => ({
                guessed: st.guessed.add(ltr),
                nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1),
            }),
            () => {
                if (this.guessedWord().findIndex((element) => element === '_') < 0) {
                    this.setState((st) => ({
                        winner: true,
                    }));
                }
            }
        );
    }

    /** generateButtons: return array of letter buttons to render */
    // generateButtons() {
    //     return 'abcdefghijklmnopqrstuvwxyz'.split('').map((ltr, i) => (
    //         <button key={ltr + i} value={ltr} onClick={this.handleGuess} disabled={this.state.guessed.has(ltr)}>
    //             {ltr}
    //         </button>
    //     ));
    // }

    // restart: restart the game by resetting state and getting new word
    restart() {
        this.setState((state) => {
            return {
                nWrong: 0,
                guessed: new Set(),
                answer: randomWord(),
                winner: false,
            };
        });
    }

    /** render: render game */
    render() {
        return (
            <div className="Hangman">
                <h1>Hangman</h1>
                {this.state.nWrong >= this.props.maxWrong ? (
                    <GameEnd winner={this.state.winner} word={this.state.answer} restart={this.restart} />
                ) : null}
                {this.state.winner ? <GameEnd winner={this.state.winner} word={this.state.answer} restart={this.restart} /> : null}
                <img src={this.props.images[this.state.nWrong]} alt="hangman" />
                <p className="Hangman-word">{this.guessedWord()}</p>
                <p>Wrong Guesses: {this.state.nWrong}</p>
                {/* <p className="Hangman-btns">{this.generateButtons()}</p> */}
                <ButtonArea letters={this.props.letters} guessed={this.state.guessed} handleGuessParent={this.handleGuess} />
            </div>
        );
    }
}

export default Hangman;
