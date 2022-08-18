const Escrow = artifacts.require ("Escrow");
let escrow;

contract( "Escrow", (accounts) => {
    beforeEach (async ()=>{
        escrow = await Escrow.deployed();

    })

    it("Should allow only the payer to deposit funds ", async() => {
        escrow = await  Escrow.new (accounts[1], accounts[2],500);
     try {
        await escrow.deposit({from:accounts[0]})
     }
     catch(error) {
        error.message.includes("Only the payer can deposit funds into the escrow s")
        return;
     }
     assert(false)
    })

    it ("The contract should not be able to accept more than the amount, declared in the constructoe", async () =>{
        escrow = await  Escrow.new (accounts[1], accounts[2],500);
        try {
        await escrow.deposit ({from: accounts[1], value:501});
        }
        catch (error){
            error.message.includes("he balance of the escrow will exceed the amount requested by the recipient");
            return;
        }
        assert(false)

    })


    it("Should allow only the intermediary  to release the funds to the beneficiary ", async() => {
        escrow = await  Escrow.new (accounts[1], accounts[2],500, {from:accounts[0]});
        try {
           await escrow.sendFunds({from:accounts[0]})
        }
        catch(error) {
           error.message.includes("Only the deployer of the escrow can execute this fn .")
           return;
        }
        assert(false)
       })







})