const arr1 = [5, 2, 3];
const arr2 = [1, 5, 3, 9, 6, 1];

const poll = {
  question: "What is your favorite programming language?",
  options: ["0: Javascript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    let vote = prompt(`${this.question}\n${this.options.join("\n")}`);
    while (!["0", "1", "2", "3"].includes(vote)) {
      vote = prompt(`${this.question}\n${this.options.join("\n")}`);
    }
    this.answers[parseInt(vote)]++;
    this.displayResults();
  },

  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are ${this.answers.join(", ")}`);
    }
  },
};

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector("button")
    .addEventListener("click", poll.registerNewAnswer.bind(poll));
});

poll.displayResults.call({ answers: arr1 }, 'string');
poll.displayResults.call({ answers: arr2 }, 'string');
