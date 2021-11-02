let typewriter = function () {
const sentence = "hello there from lighthouse labs";
const NewSentence = sentence + '\n'; //appending new line break at the end
let counter = 0;

for (const char of NewSentence) { 
  counter += 50; 
  setTimeout(() => { 
    process.stdout.write(char); // in place of console.log.. 
  } , counter) 
 };
};
typewriter();
