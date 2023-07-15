function getQuotes() {
  var msg = document.querySelector("#quotes");

  /* array of object   */
  var quotes = [
    {
      quoteAuthor: "― Oscar Wilde",
      quoteText: "Be yourself; everyone else is already taken.",
    },
    {
      quoteAuthor: "― Marilyn Monroe",
      quoteText: "Be yourself; everyone else is already taken.",
    },
    {
      quoteAuthor: "― Albert Einstein",
      quoteText:
        "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    },
    {
      quoteAuthor: "― Frank Zappa",
      quoteText: "So many books, so little time.",
    },
  ];

  var lastNumber = null;
  let num = Math.floor(Math.random() * quotes.length + 1);

  if (num === lastNumber) {
    num = Math.floor(Math.random() * quotes.length + 1);
  }
  lastNumber = num;
  msg.innerHTML = `<div>${quotes[num].quoteText}</div>
    <div>${quotes[num].quoteAuthor} `;
}
