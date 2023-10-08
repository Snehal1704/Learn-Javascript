const accountId=123456        // can't change value

//accountId=123654  // not allowed

let accountName="SnehalG"

var accountEmail="sa@google.com"
/**
   refer not to use var
   beacuse of issue in block scope and functional scope 
**/

accountCity="Pune"

accountState="Maharashtra"  // can't use this 

let accountCountry; // undefined  

console.table([accountId, accountName,accountEmail,accountCity,accountState,accountCountry]);