# PEthShop

An Ethereum based distributed application, using a private local blockchain, made for fun \& educational purpose, largely inspired from [Truffle Pet Shop](http://truffleframework.com/tutorials/pet-shop). **Project still in development**.

### Run your private blockchain

First, build your own blockchain using the genesis file.
```
geth init ./genesis.json --datadir pethshop-chaindata
```

Connect to the blockchain using IPC and make your mining account. Note: `geth attach` only supports absolute path.

```
geth attach ~/repos/pethshop/pethshop-chaindata/geth.ipc
> personal.newAccount("my_secure_password")
"0x6923b81b6816f029037c43a32fa9caf4fd9bcb780"
```
    
Update truffle.js with your account Id.
Finally, start a new shell and begin mining:

```
geth --datadir ./pethshop-chaindata --rpc --rpcaddr "localhost" --rpcport 8545 --rpcapi eth,web3,personal,net --rpccorsdomain "*" --nodiscover --unlock 0 --mine 1 --targetgaslimit 0xffffffff
```

### Begin with Truffle

Truffle should be installed on your system:
```
npm install -g truffle
```

Compile the smart contracts
```
$ truffle compile
Compiling ./contracts/Adoption.sol...
Compiling ./contracts/Migrations.sol...
Writing artifacts to ./build/contracts
```

All the tests should pass:
```
$ truffle test --network geth
  TestAdoption
    ✓ testUserCanAdoptPet (86ms)
    ✓ testGetAdopterAddressByPetId (109ms)
    ✓ testGetAdopterAddressByPetIdInArray (145ms)
  3 passing (1s)
```

### User Interface

**Work in progress**

### References
- [Truffle Pet Shop](http://truffleframework.com/tutorials/pet-shop)
- [Udemy Ethereum Developper MooC](https://www.udemy.com/blockchain-developer/)
- [Geth CLI Doc](https://github.com/ethereum/go-ethereum/wiki/Command-Line-Options)
