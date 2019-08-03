// To Convert Celsius to Fahrenheit
function convertToF(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    console.log(fahrenheit);
    }
    convertToF(30);

    // Reverse a String
    function reverseString(str) {
        let res = str.split('').reverse().join('');
        console.log(res);

    }
        reverseString("engineer");

        // Factorialize a Number

        function factorialize(num) {
            let fac = 1;
            for(let n = 1; n <= num; n++){
                fac *=n;
            }
            console.log(fac);
        }
            factorialize(4);

            // Find the Longest Word in a String AND Return the number

            function findLongestWordLength(str){
                let newArr = str.split(" ");
                let longstr = 0;
                for(let i = 0; i < newArr.length; i++){
                    if(newArr[i].length > longstr){
                        longstr = newArr[i].length;
                    }
                }
                console.log(longstr);
            }

            findLongestWordLength("The quick brown fox jumped over the lazy dog");

            
        function fib(n) {
            if (n <= 1) {
              return n;
            } else {
               return  fib(n - 1) + fib(n - 2);
              
            }
          }
            console.log(fib(10));

            function getIndexToIns(arr, num) { 
                // Find my place in this sorted array. 
                let res; 
                arr.push(num);
                 arr.sort((a,b) => { return a - b});
                  for(let i = 0; i<arr.length; i++){
                       if(arr[i] === num){ 
                           res = arr.indexOf(arr[i]);
                         } 
                        } console.log(res); 
                    } getIndexToIns([40, 60], 50);
               
                    
function reverseNum(num){
    num = num + "";
    return num.split("").reverse().join("");
    
    }
    console.log(reverseNum(1234));
                      

    function palindrome(str){
    let str1 = str.toLowerCase();
    let str2 = str1.split('').reverse().join('');
    if(str1 == str2){
        return true;
    }else{
        return false;
    }
    }
    console.log(palindrome('madam'));

    //avaScript function that returns a passed string with letters in alphabetical order
    
    function alphabeticalOrder(str){
        return str.split('').sort().join('');
    }

    console.log(alphabeticalOrder('sunday'));

        //Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

        function strUp(str){
            let arr = str.split(' ');
            let newArr = [];
             for(let i = 0; i < arr.length; i++){
              newArr.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1));
             }
             return newArr.join(' ');
             
           }
           console.log(strUp('converts the first letter'));


        //Find the longest word within a string
           function longest_word(str){
               arr = str.split(' ');
               newArr = arr[0];
               for(let i =0; i<arr.length; i++){
                   if(newArr.length < arr[i].length){
                    newArr = arr[i];
                   }  
               }
               return newArr;
           }
           console.log(longest_word('Web Development Tutorial'));

           //Counts the number of vowels within a string

           function numVowels(str) {
            // let newStr = str.replace(/\s/g,"").match(/[a||e||i||o||u]/gi)
            // return newStr.length
            return str.match(/[aeiou]/gi).length;

            }
            console.log(numVowels("Web development tutorial"));

            function isPrime(num) {
                for(let i = 2; i < num; i++)
                  if(num % i === 0) return false;
                return num > 1;
              }
              console.log(isPrime(2));

              function typeVal(val){
                return typeof(val);
              }
              console.log(typeVal(true));


              function firstNonRepeatedCharacter(string) {
                for (var i = 0; i < string.length; i++) {
                  var c = string.charAt(i);
                  if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
                    return c;
                  }
                }
                return null;
              }
              console.log(firstNonRepeatedCharacter('abacddbec'));

               