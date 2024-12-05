
// This line of code will make sure the page is fully loaded
window.onload = function () {
    // Write the logic in this function

    // 1. Get the excuse element
    const excuse = document.getElementById('excuse');
    console.log(excuse);

    const part1 = ["my fake eyelashes","my grandmother's body", "my cat", "I", " someone " ];
    const part2 = ["got", "was exhumed", "found out", "got bit", "glued"];
    const part3 = ["stuck ", "for", "where", "by", "my doors and windows"];
    const part4 = ["together", "a police investigation", "I'm ticklish", "a duck", "shut"];


    // 2. Generate a random excuse

    // const indexPart1 = [Math.floor(Math.random()*part1.length)];
    // const indexPart2 = Math.floor(Math.random()*part2.length);
    // const indexPart3 = Math.floor(Math.random()*part3.length);
    // const indexPart4 = Math.floor(Math.random()*part4.length);

    const index = Math.floor(Math.random()*part1.length);
  

    const excuseText = `${part1[index]} ${part2[index]} ${part3[index]} ${part4[index]}`;
    console.log(excuseText);
    
   

    // 3. Inseart the excuse into the excuse element
    excuse.innerHTML = excuseText;
}