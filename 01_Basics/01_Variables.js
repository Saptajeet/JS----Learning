const accountId = 1224456
let accountEmail = "aditya@google.com"
var accountPassword = "54321"
accountCity = "Mumbai"
let accountState

// accountId = 2 // Not Allowed
console.log(accountId);

accountEmail = "adi@hotmail.com"
accountPassword = "12345"
accountCity = "Delhi"

/*
Prefer not to use var,
because of issues in block scope and functional scope.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
