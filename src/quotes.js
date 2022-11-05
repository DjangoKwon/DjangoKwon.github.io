const quotes = [
  {
    quote1:
      "You will face many defeats in life, but never let yourself be defeated.",
    quote2: "인생에서 많은 패배에 직면하겠지만 결코 패배하지 말라.",
    author: "Maya Angelou"
  },
  {
    quote1:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    quote2:
      "인생에서 가장 큰 영광은 넘어지지 않는 것에 있는 것이 아니라 매번 일어선다는 데 있다.",
    author: "Nelson Mandela"
  },
  {
    quote1:
      "Never let the fear of striking out keep you from playing the game.",
    quote2: "스트라이크아웃에 대한 두려움이 게임을 못하게 하지 말라.",
    author: "Babe Ruth"
  },
  {
    quote1: "Being happy never goes out of style.",
    quote2: "즐거움은 영원히 유행에 뒤떨어지지 않는다.",
    author: "Lilly Pulitzer"
  },
  {
    quote1:
      "Life is a mountain. Your goal is to find your path, not to reach the top.",
    quote2:
      "인생은 산이다. 당신의 목표는 정상에 도달하는 것이 아니라 당신의 길을 찾는 것이다.",
    author: "Maxime Lagacé"
  },
  {
    quote1: "Keep your eyes on the stars and your feet on the ground.",
    quote2: "별을 바라보고 땅을 밟는다.",
    author: "Theodore Roosevelt"
  },
  {
    quote1: "Despite the forecast, live like it's spring.",
    quote2: "일기예보에도 불구하고, 봄처럼 살아라.",
    author: "Lilly Pulitzer"
  },
  {
    quote1: "The way to get started is to quit talking and begin doing.",
    quote2: "일을 시작하는 방법은 말하는 것을 멈추고 행동으로 옮기는 것이다.",
    author: "Walt Disney"
  },
  {
    quote1: "It is better to fail in originality than to succeed in imitation.",
    quote2: "모방에서 성공하기보다는 독창성에서 실패하는 것이 낫다.",
    author: "Herman Melville"
  },
  {
    quote1:
      "Success is walking from failure to failure with no loss of enthusiasm.",
    quote2: "성공은 실패에서 실패로, 열정을 잃지 않는 것이다.",
    author: "Winston Churchill"
  }
];

const quote1 = document.querySelector("#quote span:first-child");
const quote2 = document.querySelector("#quote span:nth-child(3)");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote1.innerText = todaysQuote.quote1;
quote2.innerText = todaysQuote.quote2;
author.innerText = todaysQuote.author;
