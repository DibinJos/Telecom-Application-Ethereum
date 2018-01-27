# Telecom-Application-Ethereum
A basic etherum application


The application is extremely simple, all it does is initialize a set of cities with 5 towers each (which belongs to the tower company)and telecom operator can get the towers one at a time , the front-end application display the total towers and towers left for that city after each transaction.

How to set up the development enviroment:

Install Visual Studio Community Edition. If you choose a custom installation, the bare minimum items that need to be checked are all pertaining to Visual C++ (Current version is VS 2017)


Install the Windows SDK for Windows (If you are in Windows 10 install SDK for Windows 10)


Install Python 2.7 if not already installed, and make sure to add its install location to your PATH.


Install OpenSSL from here. Make sure to choose the right package for your architecture, and only install the full package (not the light version). You must install OpenSSL at its recommended location — do not change the install path.


Download and install node v8.1.2. Version v6.11.0 is not recommended with VS2017


Execute the command npm install ganache-cli web3@0.20.0

Start the ganache-cli(virtual etherum platform)

get to location - ./node-module/.bin

type ganache-cli----->This would fire up the ganache


How to compile and deploy the project:

npm install solc(Solidity Compiler)

Type Node

> Web3 = require('web3')
> web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
> code = fs.readFileSync('Telecom.sol').toString()
> solc = require('solc')
> compiledCode = solc.compile(code)
> abiDefinition = JSON.parse(compiledCode.contracts[':BidTelecom'].interface)
> VotingContract = web3.eth.contract(abiDefinition)
> byteCode = compiledCode.contracts[':BidTelecom'].bytecode
> deployedContract = VotingContract.new(['Pune','Mumbai','Kochi','Delhi','Hyderabad','Gurugram'],{data: byteCode, from: web3.eth.accounts[0], gas: 4700000})
> deployedContract.address
> contractInstance = VotingContract.at(deployedContract.address)

To run the Front-end:

Run the TelecomTowerApplication.html
