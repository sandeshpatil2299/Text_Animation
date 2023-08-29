const divEl= document.querySelector(".container");

const attributes= ["Programmer", "Artist", "WebDeveloper"];
let wordIndex= 0;
let charIndex= 0;

const updateText= () =>
{
   charIndex++;
   divEl.innerHTML= `<h1> I am Sandehs Patil ${attributes[wordIndex].slice(0, charIndex)}`

   if(charIndex === attributes[wordIndex].length)
   {
      charIndex= 0;
      wordIndex++;
   }

   if(wordIndex === attributes.length)
   {
      wordIndex= 0;
   }
      
   setTimeout(() =>
   {
      updateText();
   }, 400);
}

updateText();