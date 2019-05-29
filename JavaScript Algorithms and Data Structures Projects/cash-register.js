const REGISTER_STATUS = {
  closed: 'CLOSED',
  insufficientFunds: 'INSUFFICIENT_FUNDS',
  open: 'OPEN'
 };

function checkCashRegister(price, cash, cid) {
  // cash register holds an empty string
  let registerArr = { status: '', change: cid};
  const changeWanted = parseFloat(cash - price).toFixed(2); // we need to make sure it has 2 decimal points
  const changeAvailable = getTotalRegisterChange(cid);
  console.log(changeAvailable);
  registerArr.status = getTotalRegisterStatus(changeWanted, changeAvailable);
  
  // We don't have enough change, so we give nothing.
  if (registerArr.status === REGISTER_STATUS.insufficientFunds) {
    registerArr.change = [];
    
    return registerArr;
  }

 function getCustomersChange(changeWanted, changeInDrawer) {
  const change = [];

  // objects will hold the value of each bill/coin
  const billsCoins = {
    "PENNY": 0.01,
    "NICKEL" : 0.05,
    "DIME" : 0.10,
    "QUARTER" : 0.25,
    "ONE": 1.00,
    "FIVE": 5.00,
    "TEN": 10.00,
    "TWENTY": 20.00,
    "ONE HUNDRED": 100.00
  };

  // this is where I wasn't sure what to do, had to look on youtube for this solution
  for (let i = changeInDrawer.length - 1; i >= 0; i--)    {
    const coinName = changeInDrawer[i][0];
    const coinTotal = changeInDrawer[i][1];
    const coinValue = billsCoins[coinName];
    let coinAmount = (coinTotal / coinValue).toFixed(2);
    let coinsToReturn = 0;  
   }

    while (changeWanted >= coinValue && coinAmount > 0)    {
      changeWanted -= coinValue;
      changeWanted = changeWanted.toFixed(2);
      coinAmount--; // remove a coin
      coinsToReturn++; // we need to return a coin
    }

    if (coinsToReturn > 0) {
      change.push([coinName, coinsToReturn * coinValue]      )
    }

    return change;
}
 
 
  registerArr.change = getCustomersChange(changeWanted, cid);

  if (changeWanted > getTotalRegisterChange(registerArr.change)) {
    registerArr.status = REGISTER_STATUS.insufficientFunds;
    registerArr.change = [];
  }

  if (registerArr.status === REGISTER_STATUS.closed) {
    registerArr.change = [...cid];
  }

  return registerArr;
}



function getTotalRegisterStatus (changeWanted, changeAvailable) {
  
  if (Number(changeWanted) > Number(changeAvailable)) {
    return REGISTER_STATUS.insufficientFunds;
  }

  if (Number(changeWanted) < Number(changeAvailable)) {
    return REGISTER_STATUS.open;
  }

  // We are done checking the register. Close it!
  return REGISTER_STATUS.closed;

}

function getTotalRegisterChange(changeInDrawer) {
  let total = 0;

  for (let change of changeInDrawer) {
    // target the index holding the value
    let changeValue = change[1];
    total += changeValue;
  }
  // round to 2 decimal places
  return total.toFixed(2);
}


  

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);