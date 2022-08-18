A simple  escrow contract with a frontend, developed with React (components). Although they are rarely used nowadays, I  practice them from time to time, as I will most probably encounter them in the future.


Technologies used:
-Solidity for the contract
-Web3.js to help the UI communicate with the contract
-React and Bootsrap for the frontend



Note:
- The escrow accepts a maximum amount of 1000 Wei.
- Only the payer address,defined upon deployment ( in the contract's migration file) can deposit into the escrow.
- Only the deployer address can invoke the function, triggered upon the click of the "Release" button
 ** All other circumstances will throw an error


The contract can be found at: https://ropsten.etherscan.io/address/0xbc8575676ab797829f22b1fd1bb0e190b9671c72
