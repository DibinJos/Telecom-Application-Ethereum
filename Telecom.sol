pragma solidity ^0.4.18;
// We have to specify what version of compiler this code will compile with

contract BidTelecom {
  /* mapping field below is equivalent to an associative array or hash.
  The key of the mapping is city name stored as type bytes32 and value is
  an unsigned integer to store the vote count
  */
  
  mapping (bytes32 => uint8) public noOfTowers;
  
  /* Solidity doesn't let you pass in an array of strings in the constructor (yet).
  We will use an array of bytes32 instead to store the list of citys
  */
  
  bytes32[] public city;

  /* This is the constructor which will be called once when you
  deploy the contract to the blockchain. When we deploy the contract,
  we will pass an array of citys who will be consiting of a set of  towers which a telecom operator can bid for
  */
  function BidTelecom(bytes32[] names) public {
    city = names;
	for(uint i = 0; i < city.length; i++) {
	noOfTowers[city[i]]=5;
	}
	
  }

  // This function returns the total votes a city has received so far
  function totalTowersIn(bytes32 cityP) view public returns (uint8) {
    require(validcity(cityP));
    return noOfTowers[cityP];
  }

  // This function increments the vote count for the specified city. This
  // is equivalent to casting a vote
  function voteForcity(bytes32 cityP) public {
    require(validcity(cityP));
	if(noOfTowers[cityP]>=1){
    noOfTowers[cityP] -= 1;
	}
  }

  function validcity(bytes32 cityP) view public returns (bool) {
    for(uint i = 0; i < city.length; i++) {
      if (city[i] == cityP) {
        return true;
      }
    }
    return false;
  }
}
