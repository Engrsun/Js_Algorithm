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