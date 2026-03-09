const accountId = 1442
let accountName = 'John Doe'
var accountBalance = '1000'
// accountId = 2

accountName = 'papun'
accountBalance = '3000'

console.log(accountId);

console.table([accountId, accountName, accountBalance])

/* 
1. var

var is function scoped, not block scoped.
It can be re-declared and re-assigned.
It is hoisted and initialized with undefined.
Because of these behaviors, it can cause bugs and is not recommended in modern JavaScript.

2. let
let is block scoped, meaning it is only accessible within the block it is defined in.
It can be re-assigned but cannot be re-declared in the same scope.
It is hoisted but not initialized, so it cannot be accessed before its declaration.

3. const
const is also block scoped.
It cannot be re-assigned or re-declared.
It must be initialized at the time of declaration.
Like let, it is hoisted but not initialized, so it cannot be accessed before its declaration.
*/