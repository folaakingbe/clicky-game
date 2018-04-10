import React, {Component} from "react";
import Wrapper from "../Wrapper";
import Title from "../Title";
import Score from "../Score"
import SignCard from "../SignCard";
import signs from "../../signs.json";

class Memory extends Component {
    state = {
        count: 0,
        memory: [],
        hiScore: 0,
        cards: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    };

handleIncrement = () => {
    // Increment the score by one and then randomize the cards
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
    this.randomize();
};

randomize = () => {
    var numArray = [];
    var randCards = [];
    var numCards = signs.length;
    for (let i = 0; i < signs.length; i++) {
        numArray.push(i);
    }
    for (let j = 0; j < signs.length; j++) {
        var rand = Math.floor(Math.random() * numCards);
        randCards.push(numArray[rand]);
        numArray.splice(rand,1);
        numCards--;
    }
    this.setState({cards: randCards})
}

memoryCheck = key => {
    var found = false;
    var clicked = this.state.memory;
    if (this.state.memory.length == 0) {
        clicked.push(key-1);
        this.setState({ memory: clicked })
        this.handleIncrement();
    }
    else {
        for (var i = 0; i < this.state.memory.length; i++) {
            if (this.state.memory[i] == key-1) {
                found = true;
            }
        }
        if (found) {
            if (this.state.count > this.state.hiScore) {
                this.setState({hiScore: this.state.count});
            }
            this.setState({ count: 0 });
            this.setState({ memory: [] });
            this.randomize();
        }
        else {
            clicked.push(key-1);
            this.setState({ memory: clicked });
            this.handleIncrement();
        }
    }
}

render() {
    return (
<Wrapper>
    <Title>Memory Game</Title>
    <Score>Score: {this.state.count}</Score>
    <Score>High Score: {this.state.hiScore}</Score>
    <SignCard 
      image={signs[this.state.cards[0]].image}
      memoryCheck={() => this.memoryCheck(signs[this.state.cards[0]].id)}
    />
    <SignCard
      image={signs[this.state.cards[1]].image}
      memoryCheck={() => this.memoryCheck(signs[this.state.cards[1]].id)}
    />
    <SignCard
      image={signs[this.state.cards[2]].image}
      memoryCheck={() => this.memoryCheck(signs[this.state.cards[2]].id)}
    />
    <SignCard
      image={signs[this.state.cards[3]].image}
      memoryCheck={() => this.memoryCheck(signs[this.state.cards[3]].id)}
    />
    <SignCard
      image={signs[this.state.cards[4]].image}
      memoryCheck={() => this.memoryCheck(signs[this.state.cards[4]].id)}
    />
    <SignCard
      image={signs[this.state.cards[5]].image}
      memoryCheck={() => this.memoryCheck(signs[this.state.cards[5]].id)}
    />
    <SignCard
      image={signs[this.state.cards[6]].image}
      memoryCheck={() => this.memoryCheck(signs[this.state.cards[6]].id)}
    />
    <SignCard
      image={signs[this.state.cards[7]].image}
      memoryCheck={() => this.memoryCheck(signs[this.state.cards[7]].id)}
    />
    <SignCard
      image={signs[this.state.cards[8]].image}
      memoryCheck={() => this.memoryCheck(signs[this.state.cards[8]].id)}
    />
    <SignCard
      image={signs[this.state.cards[9]].image}
      memoryCheck={() => this.memoryCheck(signs[this.state.cards[9]].id)}
    />
    <SignCard
      image={signs[this.state.cards[10]].image}
      memoryCheck={() => this.memoryCheck(signs[this.state.cards[10]].id)}
    />
    <SignCard
      image={signs[this.state.cards[11]].image}
      memoryCheck={() => this.memoryCheck(signs[this.state.cards[11]].id)}
    />
  </Wrapper>
);
}
}

export default Memory;