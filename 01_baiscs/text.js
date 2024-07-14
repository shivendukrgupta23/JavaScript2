const accountId= 43353
let accountEmail= "hitesh@google.com"
var accountPassword= "12345"
accountCity= "Jaipur"
let accountState;

// accountId=2//not allowed

/*

Prefer not to use var
because of issue in block scope and functional scope

*/

accountEmail="hc@hc.com"
accountPassword= "2122"
accountCity="Bengaluru"


console.log(accountId);

console.table([accountId, accountEmail,accountPassword,accountCity,accountState])