export default {
    address:"0x262f78cce9894b703157d4d042b986f1e925f2b3",
    decimal:5,
    name: "BearToken",
    symbol:"Bear",
    icon: "bear_x28.png",
    abi: [
      {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_spender",
            "type": "address"
          },
          {
            "name": "_value",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_from",
            "type": "address"
          },
          {
            "name": "_to",
            "type": "address"
          },
          {
            "name": "_value",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [
          {
            "name": "",
            "type": "uint32"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_spender",
            "type": "address"
          },
          {
            "name": "_subtractedValue",
            "type": "uint256"
          }
        ],
        "name": "decreaseApproval",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_owner",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_to",
            "type": "address"
          },
          {
            "name": "_value",
            "type": "uint256"
          }
        ],
        "name": "transfer",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_spender",
            "type": "address"
          },
          {
            "name": "_addedValue",
            "type": "uint256"
          }
        ],
        "name": "increaseApproval",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_owner",
            "type": "address"
          },
          {
            "name": "_spender",
            "type": "address"
          }
        ],
        "name": "allowance",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_newOwner",
            "type": "address"
          }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "previousOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipRenounced",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "spender",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "to",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      }
    ],
    "bytecode": "0x60806040523480156200001157600080fd5b5033600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040805190810160405280600481526020017f424541520000000000000000000000000000000000000000000000000000000081525060069080519060200190620000a0929190620001fb565b506040805190810160405280600981526020017f42656172546f6b656e000000000000000000000000000000000000000000000081525060059080519060200190620000ee929190620001fb565b506005600760006101000a81548163ffffffff021916908363ffffffff16021790555064174876e80060048190555033600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506004546000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503373ffffffffffffffffffffffffffffffffffffffff1660007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef6004546040518082815260200191505060405180910390a3620002aa565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200023e57805160ff19168380011785556200026f565b828001600101855582156200026f579182015b828111156200026e57825182559160200191906001019062000251565b5b5090506200027e919062000282565b5090565b620002a791905b80821115620002a357600081600090555060010162000289565b5090565b90565b61166180620002ba6000396000f3006080604052600436106100d0576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100d5578063095ea7b31461016557806318160ddd146101ca57806323b872dd146101f5578063313ce5671461027a57806366188463146102b157806370a0823114610316578063715018a61461036d5780638da5cb5b1461038457806395d89b41146103db578063a9059cbb1461046b578063d73dd623146104d0578063dd62ed3e14610535578063f2fde38b146105ac575b600080fd5b3480156100e157600080fd5b506100ea6105ef565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561012a57808201518184015260208101905061010f565b50505050905090810190601f1680156101575780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561017157600080fd5b506101b0600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061068d565b604051808215151515815260200191505060405180910390f35b3480156101d657600080fd5b506101df61077f565b6040518082815260200191505060405180910390f35b34801561020157600080fd5b50610260600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610785565b604051808215151515815260200191505060405180910390f35b34801561028657600080fd5b5061028f610b40565b604051808263ffffffff1663ffffffff16815260200191505060405180910390f35b3480156102bd57600080fd5b506102fc600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b56565b604051808215151515815260200191505060405180910390f35b34801561032257600080fd5b50610357600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610de8565b6040518082815260200191505060405180910390f35b34801561037957600080fd5b50610382610e30565b005b34801561039057600080fd5b50610399610f35565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156103e757600080fd5b506103f0610f5b565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610430578082015181840152602081019050610415565b50505050905090810190601f16801561045d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561047757600080fd5b506104b6600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610ff9565b604051808215151515815260200191505060405180910390f35b3480156104dc57600080fd5b5061051b600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611219565b604051808215151515815260200191505060405180910390f35b34801561054157600080fd5b50610596600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611415565b6040518082815260200191505060405180910390f35b3480156105b857600080fd5b506105ed600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061149c565b005b60058054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106855780601f1061065a57610100808354040283529160200191610685565b820191906000526020600020905b81548152906001019060200180831161066857829003601f168201915b505050505081565b600081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b60045481565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111515156107d457600080fd5b600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561085f57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561089b57600080fd5b6108ec826000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461150490919063ffffffff16565b6000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061097f826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461151d90919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610a5082600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461150490919063ffffffff16565b600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b600760009054906101000a900463ffffffff1681565b600080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508083101515610c68576000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610cfc565b610c7b838261150490919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a3600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610e8c57600080fd5b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167ff8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c6482060405160405180910390a26000600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60068054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ff15780601f10610fc657610100808354040283529160200191610ff1565b820191906000526020600020905b815481529060010190602001808311610fd457829003601f168201915b505050505081565b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561104857600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561108457600080fd5b6110d5826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461150490919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611168826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461151d90919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b60006112aa82600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461151d90919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156114f857600080fd5b61150181611539565b50565b600082821115151561151257fe5b818303905092915050565b6000818301905082811015151561153057fe5b80905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561157557600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505600a165627a7a72305820486dc7ca5792c6b214f96ee384d0cfff137ad3c610d4414e87b447c8f9dbfa5f0029",
    "deployedBytecode": "0x6080604052600436106100d0576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100d5578063095ea7b31461016557806318160ddd146101ca57806323b872dd146101f5578063313ce5671461027a57806366188463146102b157806370a0823114610316578063715018a61461036d5780638da5cb5b1461038457806395d89b41146103db578063a9059cbb1461046b578063d73dd623146104d0578063dd62ed3e14610535578063f2fde38b146105ac575b600080fd5b3480156100e157600080fd5b506100ea6105ef565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561012a57808201518184015260208101905061010f565b50505050905090810190601f1680156101575780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561017157600080fd5b506101b0600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061068d565b604051808215151515815260200191505060405180910390f35b3480156101d657600080fd5b506101df61077f565b6040518082815260200191505060405180910390f35b34801561020157600080fd5b50610260600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610785565b604051808215151515815260200191505060405180910390f35b34801561028657600080fd5b5061028f610b40565b604051808263ffffffff1663ffffffff16815260200191505060405180910390f35b3480156102bd57600080fd5b506102fc600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b56565b604051808215151515815260200191505060405180910390f35b34801561032257600080fd5b50610357600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610de8565b6040518082815260200191505060405180910390f35b34801561037957600080fd5b50610382610e30565b005b34801561039057600080fd5b50610399610f35565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156103e757600080fd5b506103f0610f5b565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610430578082015181840152602081019050610415565b50505050905090810190601f16801561045d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561047757600080fd5b506104b6600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610ff9565b604051808215151515815260200191505060405180910390f35b3480156104dc57600080fd5b5061051b600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611219565b604051808215151515815260200191505060405180910390f35b34801561054157600080fd5b50610596600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611415565b6040518082815260200191505060405180910390f35b3480156105b857600080fd5b506105ed600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061149c565b005b60058054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106855780601f1061065a57610100808354040283529160200191610685565b820191906000526020600020905b81548152906001019060200180831161066857829003601f168201915b505050505081565b600081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b60045481565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111515156107d457600080fd5b600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561085f57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561089b57600080fd5b6108ec826000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461150490919063ffffffff16565b6000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061097f826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461151d90919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610a5082600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461150490919063ffffffff16565b600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b600760009054906101000a900463ffffffff1681565b600080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508083101515610c68576000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610cfc565b610c7b838261150490919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a3600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610e8c57600080fd5b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167ff8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c6482060405160405180910390a26000600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60068054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ff15780601f10610fc657610100808354040283529160200191610ff1565b820191906000526020600020905b815481529060010190602001808311610fd457829003601f168201915b505050505081565b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561104857600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561108457600080fd5b6110d5826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461150490919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611168826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461151d90919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b60006112aa82600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461151d90919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156114f857600080fd5b61150181611539565b50565b600082821115151561151257fe5b818303905092915050565b6000818301905082811015151561153057fe5b80905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561157557600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505600a165627a7a72305820486dc7ca5792c6b214f96ee384d0cfff137ad3c610d4414e87b447c8f9dbfa5f0029",
    "sourceMap": "160:449:0:-;;;328:276;8:9:-1;5:2;;;30:1;27;20:12;5:2;328:276:0;575:10:5;567:5;;:18;;;;;;;;;;;;;;;;;;360:15:0;;;;;;;;;;;;;;;;;;:6;:15;;;;;;;;;;;;:::i;:::-;;386:18;;;;;;;;;;;;;;;;;;:4;:18;;;;;;;;;;;;:::i;:::-;;426:1;415:8;;:12;;;;;;;;;;;;;;;;;;452;438:11;:26;;;;485:10;477:5;;:18;;;;;;;;;;;;;;;;;;529:11;;506:8;:20;515:10;506:20;;;;;;;;;;;;;;;:34;;;;572:10;558:38;;567:3;558:38;584:11;;558:38;;;;;;;;;;;;;;;;;;160:449;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
    "deployedSourceMap": "160:449:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;245:18;;8:9:-1;5:2;;;30:1;27;20:12;5:2;245:18:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;245:18:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1814:188:9;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1814:188:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;212:26:0;;8:9:-1;5:2;;;30:1;27;20:12;5:2;212:26:0;;;;;;;;;;;;;;;;;;;;;;;726:470:9;;8:9:-1;5:2;;;30:1;27;20:12;5:2;726:470:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;297:22:0;;8:9:-1;5:2;;;30:1;27;20:12;5:2;297:22:0;;;;;;;;;;;;;;;;;;;;;;;;;;;3679:432:9;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3679:432:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1149:99:6;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1149:99:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1001:111:5;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1001:111:5;;;;;;238:20;;8:9:-1;5:2;;;30:1;27;20:12;5:2;238:20:5;;;;;;;;;;;;;;;;;;;;;;;;;;;270::0;;8:9:-1;5:2;;;30:1;27;20:12;5:2;270:20:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;270:20:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;626:321:6;;8:9:-1;5:2;;;30:1;27;20:12;5:2;626:321:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2926:296:9;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2926:296:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2321:153;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2321:153:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1274:103:5;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1274:103:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;245:18:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1814:188:9:-;1881:4;1925:6;1893:7;:19;1901:10;1893:19;;;;;;;;;;;;;;;:29;1913:8;1893:29;;;;;;;;;;;;;;;:38;;;;1963:8;1942:38;;1951:10;1942:38;;;1973:6;1942:38;;;;;;;;;;;;;;;;;;1993:4;1986:11;;1814:188;;;;:::o;212:26:0:-;;;;:::o;726:470:9:-;832:4;864:8;:15;873:5;864:15;;;;;;;;;;;;;;;;854:6;:25;;846:34;;;;;;;;904:7;:14;912:5;904:14;;;;;;;;;;;;;;;:26;919:10;904:26;;;;;;;;;;;;;;;;894:6;:36;;886:45;;;;;;;;960:1;945:17;;:3;:17;;;;937:26;;;;;;;;988:27;1008:6;988:8;:15;997:5;988:15;;;;;;;;;;;;;;;;:19;;:27;;;;:::i;:::-;970:8;:15;979:5;970:15;;;;;;;;;;;;;;;:45;;;;1037:25;1055:6;1037:8;:13;1046:3;1037:13;;;;;;;;;;;;;;;;:17;;:25;;;;:::i;:::-;1021:8;:13;1030:3;1021:13;;;;;;;;;;;;;;;:41;;;;1097:38;1128:6;1097:7;:14;1105:5;1097:14;;;;;;;;;;;;;;;:26;1112:10;1097:26;;;;;;;;;;;;;;;;:30;;:38;;;;:::i;:::-;1068:7;:14;1076:5;1068:14;;;;;;;;;;;;;;;:26;1083:10;1068:26;;;;;;;;;;;;;;;:67;;;;1162:3;1146:28;;1155:5;1146:28;;;1167:6;1146:28;;;;;;;;;;;;;;;;;;1187:4;1180:11;;726:470;;;;;:::o;297:22:0:-;;;;;;;;;;;;;:::o;3679:432:9:-;3785:4;3799:16;3818:7;:19;3826:10;3818:19;;;;;;;;;;;;;;;:29;3838:8;3818:29;;;;;;;;;;;;;;;;3799:48;;3877:8;3857:16;:28;;3853:165;;;3927:1;3895:7;:19;3903:10;3895:19;;;;;;;;;;;;;;;:29;3915:8;3895:29;;;;;;;;;;;;;;;:33;;;;3853:165;;;3981:30;3994:16;3981:8;:12;;:30;;;;:::i;:::-;3949:7;:19;3957:10;3949:19;;;;;;;;;;;;;;;:29;3969:8;3949:29;;;;;;;;;;;;;;;:62;;;;3853:165;4049:8;4028:61;;4037:10;4028:61;;;4059:7;:19;4067:10;4059:19;;;;;;;;;;;;;;;:29;4079:8;4059:29;;;;;;;;;;;;;;;;4028:61;;;;;;;;;;;;;;;;;;4102:4;4095:11;;3679:432;;;;;:::o;1149:99:6:-;1205:7;1227:8;:16;1236:6;1227:16;;;;;;;;;;;;;;;;1220:23;;1149:99;;;:::o;1001:111:5:-;719:5;;;;;;;;;;;705:19;;:10;:19;;;697:28;;;;;;;;1077:5;;;;;;;;;;;1058:25;;;;;;;;;;;;1105:1;1089:5;;:18;;;;;;;;;;;;;;;;;;1001:111::o;238:20::-;;;;;;;;;;;;;:::o;270::0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;626:321:6:-;689:4;719:8;:20;728:10;719:20;;;;;;;;;;;;;;;;709:6;:30;;701:39;;;;;;;;769:1;754:17;;:3;:17;;;;746:26;;;;;;;;802:32;827:6;802:8;:20;811:10;802:20;;;;;;;;;;;;;;;;:24;;:32;;;;:::i;:::-;779:8;:20;788:10;779:20;;;;;;;;;;;;;;;:55;;;;856:25;874:6;856:8;:13;865:3;856:13;;;;;;;;;;;;;;;;:17;;:25;;;;:::i;:::-;840:8;:13;849:3;840:13;;;;;;;;;;;;;;;:41;;;;913:3;892:33;;901:10;892:33;;;918:6;892:33;;;;;;;;;;;;;;;;;;938:4;931:11;;626:321;;;;:::o;2926:296:9:-;3027:4;3081:46;3115:11;3081:7;:19;3089:10;3081:19;;;;;;;;;;;;;;;:29;3101:8;3081:29;;;;;;;;;;;;;;;;:33;;:46;;;;:::i;:::-;3041:7;:19;3049:10;3041:19;;;;;;;;;;;;;;;:29;3061:8;3041:29;;;;;;;;;;;;;;;:87;;;;3160:8;3139:61;;3148:10;3139:61;;;3170:7;:19;3178:10;3170:19;;;;;;;;;;;;;;;:29;3190:8;3170:29;;;;;;;;;;;;;;;;3139:61;;;;;;;;;;;;;;;;;;3213:4;3206:11;;2926:296;;;;:::o;2321:153::-;2420:7;2444;:15;2452:6;2444:15;;;;;;;;;;;;;;;:25;2460:8;2444:25;;;;;;;;;;;;;;;;2437:32;;2321:153;;;;:::o;1274:103:5:-;719:5;;;;;;;;;;;705:19;;:10;:19;;;697:28;;;;;;;;1343:29;1362:9;1343:18;:29::i;:::-;1274:103;:::o;1060:116:4:-;1120:7;1148:2;1142;:8;;1135:16;;;;;;1169:2;1164;:7;1157:14;;1060:116;;;;:::o;1238:128::-;1298:9;1324:2;1319;:7;1315:11;;1344:2;1339:1;:7;;1332:15;;;;;;1360:1;1353:8;;1238:128;;;;:::o;1512:171:5:-;1603:1;1582:23;;:9;:23;;;;1574:32;;;;;;;;1645:9;1617:38;;1638:5;;;;;;;;;;;1617:38;;;;;;;;;;;;1669:9;1661:5;;:17;;;;;;;;;;;;;;;;;;1512:171;:::o",
    "source": "pragma solidity ^0.4.19;\r\n\r\nimport \"zeppelin-solidity/contracts/token/ERC20/StandardToken.sol\";\r\nimport \"zeppelin-solidity/contracts/ownership/Ownable.sol\";\r\n\r\ncontract BearToken is StandardToken, Ownable {\r\n    uint256 public totalSupply;\r\n    string public name;\r\n    string public symbol;\r\n    uint32 public decimals;\r\n\r\n    constructor() public {\r\n        symbol = \"BEAR\";\r\n        name = \"BearToken\";\r\n        decimals = 5;\r\n        totalSupply = 100000000000;\r\n\r\n        owner = msg.sender;\r\n        balances[msg.sender] = totalSupply;\r\n\r\n        emit Transfer(0x0, msg.sender, totalSupply);\r\n    }\r\n\r\n}\r\n",
    "sourcePath": "K:\\code\\TokenZendR\\contracts\\BearToken.sol",
    "ast": {
      "absolutePath": "/K/code/TokenZendR/contracts/BearToken.sol",
      "exportedSymbols": {
        "BearToken": [
          55
        ]
      },
      "id": 56,
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 1,
          "literals": [
            "solidity",
            "^",
            "0.4",
            ".19"
          ],
          "nodeType": "PragmaDirective",
          "src": "0:24:0"
        },
        {
          "absolutePath": "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol",
          "file": "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol",
          "id": 2,
          "nodeType": "ImportDirective",
          "scope": 56,
          "sourceUnit": 1006,
          "src": "28:67:0",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "zeppelin-solidity/contracts/ownership/Ownable.sol",
          "file": "zeppelin-solidity/contracts/ownership/Ownable.sol",
          "id": 3,
          "nodeType": "ImportDirective",
          "scope": 56,
          "sourceUnit": 588,
          "src": "97:59:0",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "baseContracts": [
            {
              "arguments": null,
              "baseName": {
                "contractScope": null,
                "id": 4,
                "name": "StandardToken",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 1005,
                "src": "182:13:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_StandardToken_$1005",
                  "typeString": "contract StandardToken"
                }
              },
              "id": 5,
              "nodeType": "InheritanceSpecifier",
              "src": "182:13:0"
            },
            {
              "arguments": null,
              "baseName": {
                "contractScope": null,
                "id": 6,
                "name": "Ownable",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 587,
                "src": "197:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_Ownable_$587",
                  "typeString": "contract Ownable"
                }
              },
              "id": 7,
              "nodeType": "InheritanceSpecifier",
              "src": "197:7:0"
            }
          ],
          "contractDependencies": [
            587,
            683,
            726,
            758,
            1005
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "id": 55,
          "linearizedBaseContracts": [
            55,
            587,
            1005,
            683,
            726,
            758
          ],
          "name": "BearToken",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "constant": false,
              "id": 9,
              "name": "totalSupply",
              "nodeType": "VariableDeclaration",
              "scope": 55,
              "src": "212:26:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 8,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "212:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 11,
              "name": "name",
              "nodeType": "VariableDeclaration",
              "scope": 55,
              "src": "245:18:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage",
                "typeString": "string"
              },
              "typeName": {
                "id": 10,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "245:6:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 13,
              "name": "symbol",
              "nodeType": "VariableDeclaration",
              "scope": 55,
              "src": "270:20:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage",
                "typeString": "string"
              },
              "typeName": {
                "id": 12,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "270:6:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 15,
              "name": "decimals",
              "nodeType": "VariableDeclaration",
              "scope": 55,
              "src": "297:22:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint32",
                "typeString": "uint32"
              },
              "typeName": {
                "id": 14,
                "name": "uint32",
                "nodeType": "ElementaryTypeName",
                "src": "297:6:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint32",
                  "typeString": "uint32"
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 53,
                "nodeType": "Block",
                "src": "349:255:0",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 20,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 18,
                        "name": "symbol",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13,
                        "src": "360:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "hexValue": "42454152",
                        "id": 19,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "369:6:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_643a8833f8add9aaea0adf6118bbf4a4463211ea6ab9945f36fc25ff198ce6e1",
                          "typeString": "literal_string \"BEAR\""
                        },
                        "value": "BEAR"
                      },
                      "src": "360:15:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "id": 21,
                    "nodeType": "ExpressionStatement",
                    "src": "360:15:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 24,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 22,
                        "name": "name",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11,
                        "src": "386:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "hexValue": "42656172546f6b656e",
                        "id": 23,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "393:11:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_2b6cb161b6588f5a3f11f3fb448edb89c5985335f60b942e182d0e23763f56bf",
                          "typeString": "literal_string \"BearToken\""
                        },
                        "value": "BearToken"
                      },
                      "src": "386:18:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "id": 25,
                    "nodeType": "ExpressionStatement",
                    "src": "386:18:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 28,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 26,
                        "name": "decimals",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 15,
                        "src": "415:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint32",
                          "typeString": "uint32"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "hexValue": "35",
                        "id": 27,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "426:1:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_5_by_1",
                          "typeString": "int_const 5"
                        },
                        "value": "5"
                      },
                      "src": "415:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint32",
                        "typeString": "uint32"
                      }
                    },
                    "id": 29,
                    "nodeType": "ExpressionStatement",
                    "src": "415:12:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 32,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 30,
                        "name": "totalSupply",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          9
                        ],
                        "referencedDeclaration": 9,
                        "src": "438:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "hexValue": "313030303030303030303030",
                        "id": 31,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "452:12:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_100000000000_by_1",
                          "typeString": "int_const 100000000000"
                        },
                        "value": "100000000000"
                      },
                      "src": "438:26:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 33,
                    "nodeType": "ExpressionStatement",
                    "src": "438:26:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 37,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 34,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 505,
                        "src": "477:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 35,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1020,
                          "src": "485:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 36,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "485:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "477:18:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 38,
                    "nodeType": "ExpressionStatement",
                    "src": "477:18:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 44,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 39,
                          "name": "balances",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 600,
                          "src": "506:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 42,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 40,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1020,
                            "src": "515:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 41,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "515:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "506:20:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 43,
                        "name": "totalSupply",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          9
                        ],
                        "referencedDeclaration": 9,
                        "src": "529:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "506:34:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 45,
                    "nodeType": "ExpressionStatement",
                    "src": "506:34:0"
                  },
                  {
                    "eventCall": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "307830",
                          "id": 47,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "567:3:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0x0"
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 48,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1020,
                            "src": "572:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 49,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "572:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 50,
                          "name": "totalSupply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            9
                          ],
                          "referencedDeclaration": 9,
                          "src": "584:11:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 46,
                        "name": "Transfer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 757,
                        "src": "558:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,address,uint256)"
                        }
                      },
                      "id": 51,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "558:38:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 52,
                    "nodeType": "EmitStatement",
                    "src": "553:43:0"
                  }
                ]
              },
              "documentation": null,
              "id": 54,
              "implemented": true,
              "isConstructor": true,
              "isDeclaredConst": false,
              "modifiers": [],
              "name": "",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 16,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "339:2:0"
              },
              "payable": false,
              "returnParameters": {
                "id": 17,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "349:0:0"
              },
              "scope": 55,
              "src": "328:276:0",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            }
          ],
          "scope": 56,
          "src": "160:449:0"
        }
      ],
      "src": "0:611:0"
    },
    "legacyAST": {
      "absolutePath": "/K/code/TokenZendR/contracts/BearToken.sol",
      "exportedSymbols": {
        "BearToken": [
          55
        ]
      },
      "id": 56,
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 1,
          "literals": [
            "solidity",
            "^",
            "0.4",
            ".19"
          ],
          "nodeType": "PragmaDirective",
          "src": "0:24:0"
        },
        {
          "absolutePath": "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol",
          "file": "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol",
          "id": 2,
          "nodeType": "ImportDirective",
          "scope": 56,
          "sourceUnit": 1006,
          "src": "28:67:0",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "zeppelin-solidity/contracts/ownership/Ownable.sol",
          "file": "zeppelin-solidity/contracts/ownership/Ownable.sol",
          "id": 3,
          "nodeType": "ImportDirective",
          "scope": 56,
          "sourceUnit": 588,
          "src": "97:59:0",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "baseContracts": [
            {
              "arguments": null,
              "baseName": {
                "contractScope": null,
                "id": 4,
                "name": "StandardToken",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 1005,
                "src": "182:13:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_StandardToken_$1005",
                  "typeString": "contract StandardToken"
                }
              },
              "id": 5,
              "nodeType": "InheritanceSpecifier",
              "src": "182:13:0"
            },
            {
              "arguments": null,
              "baseName": {
                "contractScope": null,
                "id": 6,
                "name": "Ownable",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 587,
                "src": "197:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_Ownable_$587",
                  "typeString": "contract Ownable"
                }
              },
              "id": 7,
              "nodeType": "InheritanceSpecifier",
              "src": "197:7:0"
            }
          ],
          "contractDependencies": [
            587,
            683,
            726,
            758,
            1005
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "id": 55,
          "linearizedBaseContracts": [
            55,
            587,
            1005,
            683,
            726,
            758
          ],
          "name": "BearToken",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "constant": false,
              "id": 9,
              "name": "totalSupply",
              "nodeType": "VariableDeclaration",
              "scope": 55,
              "src": "212:26:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 8,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "212:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 11,
              "name": "name",
              "nodeType": "VariableDeclaration",
              "scope": 55,
              "src": "245:18:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage",
                "typeString": "string"
              },
              "typeName": {
                "id": 10,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "245:6:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 13,
              "name": "symbol",
              "nodeType": "VariableDeclaration",
              "scope": 55,
              "src": "270:20:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage",
                "typeString": "string"
              },
              "typeName": {
                "id": 12,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "270:6:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 15,
              "name": "decimals",
              "nodeType": "VariableDeclaration",
              "scope": 55,
              "src": "297:22:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint32",
                "typeString": "uint32"
              },
              "typeName": {
                "id": 14,
                "name": "uint32",
                "nodeType": "ElementaryTypeName",
                "src": "297:6:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint32",
                  "typeString": "uint32"
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 53,
                "nodeType": "Block",
                "src": "349:255:0",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 20,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 18,
                        "name": "symbol",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13,
                        "src": "360:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "hexValue": "42454152",
                        "id": 19,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "369:6:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_643a8833f8add9aaea0adf6118bbf4a4463211ea6ab9945f36fc25ff198ce6e1",
                          "typeString": "literal_string \"BEAR\""
                        },
                        "value": "BEAR"
                      },
                      "src": "360:15:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "id": 21,
                    "nodeType": "ExpressionStatement",
                    "src": "360:15:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 24,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 22,
                        "name": "name",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11,
                        "src": "386:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "hexValue": "42656172546f6b656e",
                        "id": 23,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "393:11:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_2b6cb161b6588f5a3f11f3fb448edb89c5985335f60b942e182d0e23763f56bf",
                          "typeString": "literal_string \"BearToken\""
                        },
                        "value": "BearToken"
                      },
                      "src": "386:18:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "id": 25,
                    "nodeType": "ExpressionStatement",
                    "src": "386:18:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 28,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 26,
                        "name": "decimals",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 15,
                        "src": "415:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint32",
                          "typeString": "uint32"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "hexValue": "35",
                        "id": 27,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "426:1:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_5_by_1",
                          "typeString": "int_const 5"
                        },
                        "value": "5"
                      },
                      "src": "415:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint32",
                        "typeString": "uint32"
                      }
                    },
                    "id": 29,
                    "nodeType": "ExpressionStatement",
                    "src": "415:12:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 32,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 30,
                        "name": "totalSupply",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          9
                        ],
                        "referencedDeclaration": 9,
                        "src": "438:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "hexValue": "313030303030303030303030",
                        "id": 31,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "452:12:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_100000000000_by_1",
                          "typeString": "int_const 100000000000"
                        },
                        "value": "100000000000"
                      },
                      "src": "438:26:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 33,
                    "nodeType": "ExpressionStatement",
                    "src": "438:26:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 37,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 34,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 505,
                        "src": "477:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 35,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1020,
                          "src": "485:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 36,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "485:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "477:18:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 38,
                    "nodeType": "ExpressionStatement",
                    "src": "477:18:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 44,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 39,
                          "name": "balances",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 600,
                          "src": "506:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 42,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 40,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1020,
                            "src": "515:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 41,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "515:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "506:20:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 43,
                        "name": "totalSupply",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          9
                        ],
                        "referencedDeclaration": 9,
                        "src": "529:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "506:34:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 45,
                    "nodeType": "ExpressionStatement",
                    "src": "506:34:0"
                  },
                  {
                    "eventCall": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "307830",
                          "id": 47,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "567:3:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0x0"
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 48,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1020,
                            "src": "572:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 49,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "572:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 50,
                          "name": "totalSupply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            9
                          ],
                          "referencedDeclaration": 9,
                          "src": "584:11:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 46,
                        "name": "Transfer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 757,
                        "src": "558:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,address,uint256)"
                        }
                      },
                      "id": 51,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "558:38:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 52,
                    "nodeType": "EmitStatement",
                    "src": "553:43:0"
                  }
                ]
              },
              "documentation": null,
              "id": 54,
              "implemented": true,
              "isConstructor": true,
              "isDeclaredConst": false,
              "modifiers": [],
              "name": "",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 16,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "339:2:0"
              },
              "payable": false,
              "returnParameters": {
                "id": 17,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "349:0:0"
              },
              "scope": 55,
              "src": "328:276:0",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            }
          ],
          "scope": 56,
          "src": "160:449:0"
        }
      ],
      "src": "0:611:0"
    },
    "compiler": {
      "name": "solc",
      "version": "0.4.24+commit.e67f0147.Emscripten.clang"
    },
    "networks": {
      "1541541263882": {
        "events": {},
        "links": {},
        "address": "0x297f672cb84c6627f70f60a02c3fa08716b6c09e",
        "transactionHash": "0x48338f02f07b815722af56e42358ffdccb9eeab6a7dc4d77b3437d79165d8465"
      },
      "1541627014513": {
        "events": {},
        "links": {},
        "address": "0x262f78cce9894b703157d4d042b986f1e925f2b3",
        "transactionHash": "0x48338f02f07b815722af56e42358ffdccb9eeab6a7dc4d77b3437d79165d8465"
      }
    },
    "schemaVersion": "2.0.1",
    "updatedAt": "2018-11-07T21:44:32.910Z"
  }