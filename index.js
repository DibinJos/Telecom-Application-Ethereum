web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
abi = JSON.parse('[{ constant: true,inputs: [Array],name: 'city',outputs: [Array],payable: false,stateMutability: 'view',type: 'function' },{ constant: true,inputs: [Array],name: 'validcity',outputs: [Array],payable: false,stateMutability: 'view',type: 'function' },{ constant: false,inputs: [Array],name: 'voteForcity',outputs: [],payable: false,stateMutability: 'nonpayable',type: 'function' },{ constant: true,inputs: [Array],name: 'noOfTowers',outputs: [Array],payable: false,stateMutability: 'view',type: 'function' },{ constant: true,inputs: [Array],name: 'totalTowersIn',outputs: [Array],payable: false,stateMutability: 'view',type: 'function' },{ inputs: [Array],payable: false,stateMutability: 'nonpayable',type: 'constructor' }]'  );
VotingContract = web3.eth.contract(abi);
// In your nodejs console, execute contractInstance.address to get the address at which the contract is deployed and change the line below to use your deployed address
contractInstance = VotingContract.at('0x2a9c1d265d06d47e8f7b00ffa987c9185aecf672');
candidates = {"Kochi": "city-1", "Delhi": "city-2", "Pune": "city-3","Mumbai": "city-3","Gurugram": "city-3"}

function voteForcity() {
	console.log("Inside method")
  cityName = $("#candidate").val();
  contractInstance.voteForcity(cityName, {from: web3.eth.accounts[0]}, function() {
    let div_id = candidates[cityName];
    $("#" + div_id).html(contractInstance.totalTowersIn.call(cityName).toString());
  });
}

$(document).ready(function() {
  cityNames = Object.keys(candidates);
  for (var i = 0; i < cityNames.length; i++) {
    let name = cityNames[i];
    let val = contractInstance.totalTowersIn.call(name).toString()
    $("#" + candidates[name]).html(val);
  }
});
