//Bad Code
const accounts = {
  a: 100,
  b: 0,
  c: 20
};
function getAccount() {
  let accountName = prompt("Enter an account name");
  if (!accounts.hasOwnProperty(accountName)) {
    throw new Error(`No such account: ${accountName}`);
  }
  return accountName;
}
function transfer(from, amount) {
  if (accounts[from] < amount) return;
  accounts[from] -= amount;
  accounts[getAccount()] += amount;
}
/*Transfer first removes the money from the account and then calls
  getAccount before it adds it to another account. If it is broken off by an
  exception at that point, it’ll just make the money disappear.*/

function transfer(from, amount) {
  if (accounts[from] < amount) return;
  let progress = 0;
  try {
    accounts[from] -= amount;
    progress = 1;
    accounts[getAccount()] += amount;
    progress = 2;
  } finally {
    if (progress == 1) {
      accounts[from] += amount;
    }
  }
}
/*
  A finally block says “no matter what happens, run this code after trying to run
  the code in the try block.”
  */
