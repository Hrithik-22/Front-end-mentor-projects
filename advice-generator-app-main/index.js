const adviceNo = document.getElementById("advice__no");
const adviceQuote = document.getElementById("advice__quote");
const btn = document.getElementById("btn");
const generateJokes = async () => {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();
  adviceNo.innerText = `# ${data.slip.id}`;
  adviceQuote.innerText = `"${data.slip.advice}"`;
};

btn.addEventListener("click", generateJokes);
