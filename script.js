let motivationalQuotes = {
    problem: [`You can't pour from an empty cup.`, `No one can give you what you want but yourself.`, `Change may be hard.`, `Healing comes in waves.`, `Your only limit is your mind.`],
    solution: [`Look after yourself.`, `Take it one day at a time.`, `Breathe, darling. It's just a chapter, it's not you full story.`],
    motivation: [`Your mind, body and spirit deserve to be well.`, `Love yourself unconditionally.`, `No matter what happens, you'll be okay.`],
};

function randomizer (array) {
  let randomNumber = Math.floor(Math.random()*array.length);
  return randomNumber;
};

function motivationalSpeaker () {
  let firstNumber = randomizer(motivationalQuotes.problem) - 1;
  let firstPart = motivationalQuotes.problem[firstNumber];
  let secondNumber = randomizer(motivationalQuotes.solution) -1;
  let secondPart = motivationalQuotes.solution[secondNumber];
  let thirdNumber = randomizer(motivationalQuotes.motivation);
  let thirdPart = motivationalQuotes.motivation[thirdNumber];
  let quoteOfTheDay =  firstPart + ' ' + secondPart + ' ' + thirdPart;
  return quoteOfTheDay;
};

console.log(motivationalSpeaker());


