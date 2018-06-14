import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import FriendCard from "./components/FriendCard";
import cats from "./cats.json";
import "./App.css";

class App extends Component {
  state = {
    cats,
    clickedCats: [],
    score: 0
  };


  imageClick = event => {
    const currentCat = event.target.alt;
    const CatsAlreadyClicked =
      this.state.clickedCats.indexOf(currentCat) > -1;


    if (CatsAlreadyClicked) {
      this.setState({
        cats: this.state.cats.sort(function (a, b) {
          return 0.5 - Math.random();
        }),
        clickedCats: [],
        score: 0
      });
      alert("You lose. Play again?");

    } else {
      this.setState(
        {
          cats: this.state.cats.sort(function (a, b) {
            return 0.5 - Math.random();
          }),
          clickedCats: this.state.clickedCats.concat(
            currentCat
          ),
          score: this.state.score + 1
        },
        () => {
          if (this.state.score === 12) {
            alert("Yay! You Win!");
            this.setState({
              cats: this.state.cats.sort(function (a, b) {
                return 0.5 - Math.random();
              }),
              clickedCats: [],
              score: 0
            });
          }
        }
      );
    }
  };


  render() {
    return (
      <div>
        <Navbar
          score={this.state.score}
        />
        <Jumbotron />
        <div class="wrapper">
          <div class="col-lg-8">
              {this.state.cats.map(cats => (
                <FriendCard
                  imageClick={this.imageClick}
                  id={cats.id}
                  key={cats.id}
                  image={cats.image}
                />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default App;