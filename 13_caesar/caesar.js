const caesar = function(str, num) {
    // define new word
    let newSecret = '';

   // loop through the string to be encrypted
   for (let i = 0; i < str.length; i++)
   {
       // get ascii of the letter
       asciiVal = str.charCodeAt(i)
       // modify on the capital letters
       if (asciiVal >= 65 && asciiVal <= 90){
           
           let addedVal = (asciiVal + num);
           if(addedVal < 65){
               let newVal = (26 + addedVal);      
               let char = String.fromCharCode(newVal);
               newSecret += char;   
           }
           else{
               addedVal = (asciiVal + num) - 65;
               let newVal = (addedVal % 26) + 65;
               let char = String.fromCharCode(newVal);
               newSecret += char;
           }          
       }
       // modifiy the small letters
       else if (asciiVal >= 97 && asciiVal <= 122){
           
           let addedVal = (asciiVal + num);
           if(addedVal < 97){
               let newVal = (26 + addedVal);  
               let char = String.fromCharCode(newVal);
               newSecret += char;
           }
           else{
               addedVal = (asciiVal + num) - 97;
               let newVal = (addedVal % 26) + 97;
               let char = String.fromCharCode(newVal);
               newSecret += char;
           }           
           }         
       //if not a letter, do not modify
       else{
           newSecret += str[i]
       }
   }
   
   // return the new encoded string
   return newSecret;
};


// Do not edit below this line
module.exports = caesar;
