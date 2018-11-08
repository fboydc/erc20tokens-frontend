export default {
    address:"0x33c5857a59fa4b26985976bf0d042d7ac8e5a396",
    decimal:5,
    name: "CubToken",
    symbol:"Cub",
    icon: "cub_x28.png",
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
    "bytecode": "0x60806040523480156200001157600080fd5b5033600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040805190810160405280600381526020017f435542000000000000000000000000000000000000000000000000000000000081525060069080519060200190620000a0929190620001fb565b506040805190810160405280600881526020017f437562546f6b656e00000000000000000000000000000000000000000000000081525060059080519060200190620000ee929190620001fb565b506005600760006101000a81548163ffffffff021916908363ffffffff16021790555064174876e80060048190555033600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506004546000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503373ffffffffffffffffffffffffffffffffffffffff1660007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef6004546040518082815260200191505060405180910390a3620002aa565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200023e57805160ff19168380011785556200026f565b828001600101855582156200026f579182015b828111156200026e57825182559160200191906001019062000251565b5b5090506200027e919062000282565b5090565b620002a791905b80821115620002a357600081600090555060010162000289565b5090565b90565b61166180620002ba6000396000f3006080604052600436106100d0576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100d5578063095ea7b31461016557806318160ddd146101ca57806323b872dd146101f5578063313ce5671461027a57806366188463146102b157806370a0823114610316578063715018a61461036d5780638da5cb5b1461038457806395d89b41146103db578063a9059cbb1461046b578063d73dd623146104d0578063dd62ed3e14610535578063f2fde38b146105ac575b600080fd5b3480156100e157600080fd5b506100ea6105ef565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561012a57808201518184015260208101905061010f565b50505050905090810190601f1680156101575780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561017157600080fd5b506101b0600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061068d565b604051808215151515815260200191505060405180910390f35b3480156101d657600080fd5b506101df61077f565b6040518082815260200191505060405180910390f35b34801561020157600080fd5b50610260600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610785565b604051808215151515815260200191505060405180910390f35b34801561028657600080fd5b5061028f610b40565b604051808263ffffffff1663ffffffff16815260200191505060405180910390f35b3480156102bd57600080fd5b506102fc600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b56565b604051808215151515815260200191505060405180910390f35b34801561032257600080fd5b50610357600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610de8565b6040518082815260200191505060405180910390f35b34801561037957600080fd5b50610382610e30565b005b34801561039057600080fd5b50610399610f35565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156103e757600080fd5b506103f0610f5b565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610430578082015181840152602081019050610415565b50505050905090810190601f16801561045d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561047757600080fd5b506104b6600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610ff9565b604051808215151515815260200191505060405180910390f35b3480156104dc57600080fd5b5061051b600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611219565b604051808215151515815260200191505060405180910390f35b34801561054157600080fd5b50610596600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611415565b6040518082815260200191505060405180910390f35b3480156105b857600080fd5b506105ed600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061149c565b005b60058054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106855780601f1061065a57610100808354040283529160200191610685565b820191906000526020600020905b81548152906001019060200180831161066857829003601f168201915b505050505081565b600081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b60045481565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111515156107d457600080fd5b600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561085f57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561089b57600080fd5b6108ec826000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461150490919063ffffffff16565b6000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061097f826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461151d90919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610a5082600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461150490919063ffffffff16565b600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b600760009054906101000a900463ffffffff1681565b600080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508083101515610c68576000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610cfc565b610c7b838261150490919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a3600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610e8c57600080fd5b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167ff8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c6482060405160405180910390a26000600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60068054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ff15780601f10610fc657610100808354040283529160200191610ff1565b820191906000526020600020905b815481529060010190602001808311610fd457829003601f168201915b505050505081565b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561104857600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561108457600080fd5b6110d5826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461150490919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611168826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461151d90919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b60006112aa82600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461151d90919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156114f857600080fd5b61150181611539565b50565b600082821115151561151257fe5b818303905092915050565b6000818301905082811015151561153057fe5b80905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561157557600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505600a165627a7a723058209469dcca512d76f3b56aeeaa9abec69328ff3ea54b5a2b1fbc786080c91423e70029",
    "deployedBytecode": "0x6080604052600436106100d0576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100d5578063095ea7b31461016557806318160ddd146101ca57806323b872dd146101f5578063313ce5671461027a57806366188463146102b157806370a0823114610316578063715018a61461036d5780638da5cb5b1461038457806395d89b41146103db578063a9059cbb1461046b578063d73dd623146104d0578063dd62ed3e14610535578063f2fde38b146105ac575b600080fd5b3480156100e157600080fd5b506100ea6105ef565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561012a57808201518184015260208101905061010f565b50505050905090810190601f1680156101575780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561017157600080fd5b506101b0600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061068d565b604051808215151515815260200191505060405180910390f35b3480156101d657600080fd5b506101df61077f565b6040518082815260200191505060405180910390f35b34801561020157600080fd5b50610260600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610785565b604051808215151515815260200191505060405180910390f35b34801561028657600080fd5b5061028f610b40565b604051808263ffffffff1663ffffffff16815260200191505060405180910390f35b3480156102bd57600080fd5b506102fc600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b56565b604051808215151515815260200191505060405180910390f35b34801561032257600080fd5b50610357600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610de8565b6040518082815260200191505060405180910390f35b34801561037957600080fd5b50610382610e30565b005b34801561039057600080fd5b50610399610f35565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156103e757600080fd5b506103f0610f5b565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610430578082015181840152602081019050610415565b50505050905090810190601f16801561045d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561047757600080fd5b506104b6600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610ff9565b604051808215151515815260200191505060405180910390f35b3480156104dc57600080fd5b5061051b600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611219565b604051808215151515815260200191505060405180910390f35b34801561054157600080fd5b50610596600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611415565b6040518082815260200191505060405180910390f35b3480156105b857600080fd5b506105ed600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061149c565b005b60058054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106855780601f1061065a57610100808354040283529160200191610685565b820191906000526020600020905b81548152906001019060200180831161066857829003601f168201915b505050505081565b600081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b60045481565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111515156107d457600080fd5b600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561085f57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561089b57600080fd5b6108ec826000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461150490919063ffffffff16565b6000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061097f826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461151d90919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610a5082600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461150490919063ffffffff16565b600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b600760009054906101000a900463ffffffff1681565b600080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508083101515610c68576000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610cfc565b610c7b838261150490919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a3600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610e8c57600080fd5b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167ff8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c6482060405160405180910390a26000600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60068054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ff15780601f10610fc657610100808354040283529160200191610ff1565b820191906000526020600020905b815481529060010190602001808311610fd457829003601f168201915b505050505081565b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561104857600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561108457600080fd5b6110d5826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461150490919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611168826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461151d90919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b60006112aa82600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461151d90919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156114f857600080fd5b61150181611539565b50565b600082821115151561151257fe5b818303905092915050565b6000818301905082811015151561153057fe5b80905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561157557600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505600a165627a7a723058209469dcca512d76f3b56aeeaa9abec69328ff3ea54b5a2b1fbc786080c91423e70029",
    "sourceMap": "160:444:1:-;;;327:274;8:9:-1;5:2;;;30:1;27;20:12;5:2;327:274:1;575:10:5;567:5;;:18;;;;;;;;;;;;;;;;;;359:14:1;;;;;;;;;;;;;;;;;;:6;:14;;;;;;;;;;;;:::i;:::-;;384:17;;;;;;;;;;;;;;;;;;:4;:17;;;;;;;;;;;;:::i;:::-;;423:1;412:8;;:12;;;;;;;;;;;;;;;;;;449;435:11;:26;;;;482:10;474:5;;:18;;;;;;;;;;;;;;;;;;526:11;;503:8;:20;512:10;503:20;;;;;;;;;;;;;;;:34;;;;569:10;555:38;;564:3;555:38;581:11;;555:38;;;;;;;;;;;;;;;;;;160:444;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
    "deployedSourceMap": "160:444:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;244:18;;8:9:-1;5:2;;;30:1;27;20:12;5:2;244:18:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;244:18:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1814:188:9;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1814:188:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;211:26:1;;8:9:-1;5:2;;;30:1;27;20:12;5:2;211:26:1;;;;;;;;;;;;;;;;;;;;;;;726:470:9;;8:9:-1;5:2;;;30:1;27;20:12;5:2;726:470:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;296:22:1;;8:9:-1;5:2;;;30:1;27;20:12;5:2;296:22:1;;;;;;;;;;;;;;;;;;;;;;;;;;;3679:432:9;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3679:432:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1149:99:6;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1149:99:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1001:111:5;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1001:111:5;;;;;;238:20;;8:9:-1;5:2;;;30:1;27;20:12;5:2;238:20:5;;;;;;;;;;;;;;;;;;;;;;;;;;;269::1;;8:9:-1;5:2;;;30:1;27;20:12;5:2;269:20:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;269:20:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;626:321:6;;8:9:-1;5:2;;;30:1;27;20:12;5:2;626:321:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2926:296:9;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2926:296:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2321:153;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2321:153:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1274:103:5;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1274:103:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;244:18:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1814:188:9:-;1881:4;1925:6;1893:7;:19;1901:10;1893:19;;;;;;;;;;;;;;;:29;1913:8;1893:29;;;;;;;;;;;;;;;:38;;;;1963:8;1942:38;;1951:10;1942:38;;;1973:6;1942:38;;;;;;;;;;;;;;;;;;1993:4;1986:11;;1814:188;;;;:::o;211:26:1:-;;;;:::o;726:470:9:-;832:4;864:8;:15;873:5;864:15;;;;;;;;;;;;;;;;854:6;:25;;846:34;;;;;;;;904:7;:14;912:5;904:14;;;;;;;;;;;;;;;:26;919:10;904:26;;;;;;;;;;;;;;;;894:6;:36;;886:45;;;;;;;;960:1;945:17;;:3;:17;;;;937:26;;;;;;;;988:27;1008:6;988:8;:15;997:5;988:15;;;;;;;;;;;;;;;;:19;;:27;;;;:::i;:::-;970:8;:15;979:5;970:15;;;;;;;;;;;;;;;:45;;;;1037:25;1055:6;1037:8;:13;1046:3;1037:13;;;;;;;;;;;;;;;;:17;;:25;;;;:::i;:::-;1021:8;:13;1030:3;1021:13;;;;;;;;;;;;;;;:41;;;;1097:38;1128:6;1097:7;:14;1105:5;1097:14;;;;;;;;;;;;;;;:26;1112:10;1097:26;;;;;;;;;;;;;;;;:30;;:38;;;;:::i;:::-;1068:7;:14;1076:5;1068:14;;;;;;;;;;;;;;;:26;1083:10;1068:26;;;;;;;;;;;;;;;:67;;;;1162:3;1146:28;;1155:5;1146:28;;;1167:6;1146:28;;;;;;;;;;;;;;;;;;1187:4;1180:11;;726:470;;;;;:::o;296:22:1:-;;;;;;;;;;;;;:::o;3679:432:9:-;3785:4;3799:16;3818:7;:19;3826:10;3818:19;;;;;;;;;;;;;;;:29;3838:8;3818:29;;;;;;;;;;;;;;;;3799:48;;3877:8;3857:16;:28;;3853:165;;;3927:1;3895:7;:19;3903:10;3895:19;;;;;;;;;;;;;;;:29;3915:8;3895:29;;;;;;;;;;;;;;;:33;;;;3853:165;;;3981:30;3994:16;3981:8;:12;;:30;;;;:::i;:::-;3949:7;:19;3957:10;3949:19;;;;;;;;;;;;;;;:29;3969:8;3949:29;;;;;;;;;;;;;;;:62;;;;3853:165;4049:8;4028:61;;4037:10;4028:61;;;4059:7;:19;4067:10;4059:19;;;;;;;;;;;;;;;:29;4079:8;4059:29;;;;;;;;;;;;;;;;4028:61;;;;;;;;;;;;;;;;;;4102:4;4095:11;;3679:432;;;;;:::o;1149:99:6:-;1205:7;1227:8;:16;1236:6;1227:16;;;;;;;;;;;;;;;;1220:23;;1149:99;;;:::o;1001:111:5:-;719:5;;;;;;;;;;;705:19;;:10;:19;;;697:28;;;;;;;;1077:5;;;;;;;;;;;1058:25;;;;;;;;;;;;1105:1;1089:5;;:18;;;;;;;;;;;;;;;;;;1001:111::o;238:20::-;;;;;;;;;;;;;:::o;269::1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;626:321:6:-;689:4;719:8;:20;728:10;719:20;;;;;;;;;;;;;;;;709:6;:30;;701:39;;;;;;;;769:1;754:17;;:3;:17;;;;746:26;;;;;;;;802:32;827:6;802:8;:20;811:10;802:20;;;;;;;;;;;;;;;;:24;;:32;;;;:::i;:::-;779:8;:20;788:10;779:20;;;;;;;;;;;;;;;:55;;;;856:25;874:6;856:8;:13;865:3;856:13;;;;;;;;;;;;;;;;:17;;:25;;;;:::i;:::-;840:8;:13;849:3;840:13;;;;;;;;;;;;;;;:41;;;;913:3;892:33;;901:10;892:33;;;918:6;892:33;;;;;;;;;;;;;;;;;;938:4;931:11;;626:321;;;;:::o;2926:296:9:-;3027:4;3081:46;3115:11;3081:7;:19;3089:10;3081:19;;;;;;;;;;;;;;;:29;3101:8;3081:29;;;;;;;;;;;;;;;;:33;;:46;;;;:::i;:::-;3041:7;:19;3049:10;3041:19;;;;;;;;;;;;;;;:29;3061:8;3041:29;;;;;;;;;;;;;;;:87;;;;3160:8;3139:61;;3148:10;3139:61;;;3170:7;:19;3178:10;3170:19;;;;;;;;;;;;;;;:29;3190:8;3170:29;;;;;;;;;;;;;;;;3139:61;;;;;;;;;;;;;;;;;;3213:4;3206:11;;2926:296;;;;:::o;2321:153::-;2420:7;2444;:15;2452:6;2444:15;;;;;;;;;;;;;;;:25;2460:8;2444:25;;;;;;;;;;;;;;;;2437:32;;2321:153;;;;:::o;1274:103:5:-;719:5;;;;;;;;;;;705:19;;:10;:19;;;697:28;;;;;;;;1343:29;1362:9;1343:18;:29::i;:::-;1274:103;:::o;1060:116:4:-;1120:7;1148:2;1142;:8;;1135:16;;;;;;1169:2;1164;:7;1157:14;;1060:116;;;;:::o;1238:128::-;1298:9;1324:2;1319;:7;1315:11;;1344:2;1339:1;:7;;1332:15;;;;;;1360:1;1353:8;;1238:128;;;;:::o;1512:171:5:-;1603:1;1582:23;;:9;:23;;;;1574:32;;;;;;;;1645:9;1617:38;;1638:5;;;;;;;;;;;1617:38;;;;;;;;;;;;1669:9;1661:5;;:17;;;;;;;;;;;;;;;;;;1512:171;:::o",
    "source": "pragma solidity ^0.4.19;\r\n\r\nimport \"zeppelin-solidity/contracts/token/ERC20/StandardToken.sol\";\r\nimport \"zeppelin-solidity/contracts/ownership/Ownable.sol\";\r\n\r\ncontract CubToken is StandardToken, Ownable {\r\n    uint256 public totalSupply;\r\n    string public name;\r\n    string public symbol;\r\n    uint32 public decimals;\r\n\r\n    constructor() public {\r\n        symbol = \"CUB\";\r\n        name = \"CubToken\";\r\n        decimals = 5;\r\n        totalSupply = 100000000000;\r\n\r\n        owner = msg.sender;\r\n        balances[msg.sender] = totalSupply;\r\n\r\n        emit Transfer(0x0, msg.sender, totalSupply);\r\n    }\r\n}",
    "sourcePath": "K:\\code\\TokenZendR\\contracts\\CubToken.sol",
    "ast": {
      "absolutePath": "/K/code/TokenZendR/contracts/CubToken.sol",
      "exportedSymbols": {
        "CubToken": [
          111
        ]
      },
      "id": 112,
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 57,
          "literals": [
            "solidity",
            "^",
            "0.4",
            ".19"
          ],
          "nodeType": "PragmaDirective",
          "src": "0:24:1"
        },
        {
          "absolutePath": "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol",
          "file": "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol",
          "id": 58,
          "nodeType": "ImportDirective",
          "scope": 112,
          "sourceUnit": 1006,
          "src": "28:67:1",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "zeppelin-solidity/contracts/ownership/Ownable.sol",
          "file": "zeppelin-solidity/contracts/ownership/Ownable.sol",
          "id": 59,
          "nodeType": "ImportDirective",
          "scope": 112,
          "sourceUnit": 588,
          "src": "97:59:1",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "baseContracts": [
            {
              "arguments": null,
              "baseName": {
                "contractScope": null,
                "id": 60,
                "name": "StandardToken",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 1005,
                "src": "181:13:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_StandardToken_$1005",
                  "typeString": "contract StandardToken"
                }
              },
              "id": 61,
              "nodeType": "InheritanceSpecifier",
              "src": "181:13:1"
            },
            {
              "arguments": null,
              "baseName": {
                "contractScope": null,
                "id": 62,
                "name": "Ownable",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 587,
                "src": "196:7:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_Ownable_$587",
                  "typeString": "contract Ownable"
                }
              },
              "id": 63,
              "nodeType": "InheritanceSpecifier",
              "src": "196:7:1"
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
          "id": 111,
          "linearizedBaseContracts": [
            111,
            587,
            1005,
            683,
            726,
            758
          ],
          "name": "CubToken",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "constant": false,
              "id": 65,
              "name": "totalSupply",
              "nodeType": "VariableDeclaration",
              "scope": 111,
              "src": "211:26:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 64,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "211:7:1",
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
              "id": 67,
              "name": "name",
              "nodeType": "VariableDeclaration",
              "scope": 111,
              "src": "244:18:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage",
                "typeString": "string"
              },
              "typeName": {
                "id": 66,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "244:6:1",
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
              "id": 69,
              "name": "symbol",
              "nodeType": "VariableDeclaration",
              "scope": 111,
              "src": "269:20:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage",
                "typeString": "string"
              },
              "typeName": {
                "id": 68,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "269:6:1",
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
              "id": 71,
              "name": "decimals",
              "nodeType": "VariableDeclaration",
              "scope": 111,
              "src": "296:22:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint32",
                "typeString": "uint32"
              },
              "typeName": {
                "id": 70,
                "name": "uint32",
                "nodeType": "ElementaryTypeName",
                "src": "296:6:1",
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
                "id": 109,
                "nodeType": "Block",
                "src": "348:253:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 76,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 74,
                        "name": "symbol",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 69,
                        "src": "359:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "hexValue": "435542",
                        "id": 75,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "368:5:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_9d366d6a99ab94536fc04431e3faee5e17210c6fa8ec02bf5002c851ba6cbc2b",
                          "typeString": "literal_string \"CUB\""
                        },
                        "value": "CUB"
                      },
                      "src": "359:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "id": 77,
                    "nodeType": "ExpressionStatement",
                    "src": "359:14:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 80,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 78,
                        "name": "name",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67,
                        "src": "384:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "hexValue": "437562546f6b656e",
                        "id": 79,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "391:10:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_e1b4257b0563ec4ac85db61a37f9aef53f068b1669f37a57641c5999bcd1132a",
                          "typeString": "literal_string \"CubToken\""
                        },
                        "value": "CubToken"
                      },
                      "src": "384:17:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "id": 81,
                    "nodeType": "ExpressionStatement",
                    "src": "384:17:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 84,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 82,
                        "name": "decimals",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 71,
                        "src": "412:8:1",
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
                        "id": 83,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "423:1:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_5_by_1",
                          "typeString": "int_const 5"
                        },
                        "value": "5"
                      },
                      "src": "412:12:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint32",
                        "typeString": "uint32"
                      }
                    },
                    "id": 85,
                    "nodeType": "ExpressionStatement",
                    "src": "412:12:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 88,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 86,
                        "name": "totalSupply",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          65
                        ],
                        "referencedDeclaration": 65,
                        "src": "435:11:1",
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
                        "id": 87,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "449:12:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_100000000000_by_1",
                          "typeString": "int_const 100000000000"
                        },
                        "value": "100000000000"
                      },
                      "src": "435:26:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 89,
                    "nodeType": "ExpressionStatement",
                    "src": "435:26:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 93,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 90,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 505,
                        "src": "474:5:1",
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
                          "id": 91,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1020,
                          "src": "482:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 92,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "482:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "474:18:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 94,
                    "nodeType": "ExpressionStatement",
                    "src": "474:18:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 100,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 95,
                          "name": "balances",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 600,
                          "src": "503:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 98,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 96,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1020,
                            "src": "512:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 97,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "512:10:1",
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
                        "src": "503:20:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 99,
                        "name": "totalSupply",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          65
                        ],
                        "referencedDeclaration": 65,
                        "src": "526:11:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "503:34:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 101,
                    "nodeType": "ExpressionStatement",
                    "src": "503:34:1"
                  },
                  {
                    "eventCall": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "307830",
                          "id": 103,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "564:3:1",
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
                            "id": 104,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1020,
                            "src": "569:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 105,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "569:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 106,
                          "name": "totalSupply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            65
                          ],
                          "referencedDeclaration": 65,
                          "src": "581:11:1",
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
                        "id": 102,
                        "name": "Transfer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 757,
                        "src": "555:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,address,uint256)"
                        }
                      },
                      "id": 107,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "555:38:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 108,
                    "nodeType": "EmitStatement",
                    "src": "550:43:1"
                  }
                ]
              },
              "documentation": null,
              "id": 110,
              "implemented": true,
              "isConstructor": true,
              "isDeclaredConst": false,
              "modifiers": [],
              "name": "",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 72,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "338:2:1"
              },
              "payable": false,
              "returnParameters": {
                "id": 73,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "348:0:1"
              },
              "scope": 111,
              "src": "327:274:1",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            }
          ],
          "scope": 112,
          "src": "160:444:1"
        }
      ],
      "src": "0:604:1"
    },
    "legacyAST": {
      "absolutePath": "/K/code/TokenZendR/contracts/CubToken.sol",
      "exportedSymbols": {
        "CubToken": [
          111
        ]
      },
      "id": 112,
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 57,
          "literals": [
            "solidity",
            "^",
            "0.4",
            ".19"
          ],
          "nodeType": "PragmaDirective",
          "src": "0:24:1"
        },
        {
          "absolutePath": "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol",
          "file": "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol",
          "id": 58,
          "nodeType": "ImportDirective",
          "scope": 112,
          "sourceUnit": 1006,
          "src": "28:67:1",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "zeppelin-solidity/contracts/ownership/Ownable.sol",
          "file": "zeppelin-solidity/contracts/ownership/Ownable.sol",
          "id": 59,
          "nodeType": "ImportDirective",
          "scope": 112,
          "sourceUnit": 588,
          "src": "97:59:1",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "baseContracts": [
            {
              "arguments": null,
              "baseName": {
                "contractScope": null,
                "id": 60,
                "name": "StandardToken",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 1005,
                "src": "181:13:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_StandardToken_$1005",
                  "typeString": "contract StandardToken"
                }
              },
              "id": 61,
              "nodeType": "InheritanceSpecifier",
              "src": "181:13:1"
            },
            {
              "arguments": null,
              "baseName": {
                "contractScope": null,
                "id": 62,
                "name": "Ownable",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 587,
                "src": "196:7:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_Ownable_$587",
                  "typeString": "contract Ownable"
                }
              },
              "id": 63,
              "nodeType": "InheritanceSpecifier",
              "src": "196:7:1"
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
          "id": 111,
          "linearizedBaseContracts": [
            111,
            587,
            1005,
            683,
            726,
            758
          ],
          "name": "CubToken",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "constant": false,
              "id": 65,
              "name": "totalSupply",
              "nodeType": "VariableDeclaration",
              "scope": 111,
              "src": "211:26:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 64,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "211:7:1",
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
              "id": 67,
              "name": "name",
              "nodeType": "VariableDeclaration",
              "scope": 111,
              "src": "244:18:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage",
                "typeString": "string"
              },
              "typeName": {
                "id": 66,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "244:6:1",
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
              "id": 69,
              "name": "symbol",
              "nodeType": "VariableDeclaration",
              "scope": 111,
              "src": "269:20:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage",
                "typeString": "string"
              },
              "typeName": {
                "id": 68,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "269:6:1",
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
              "id": 71,
              "name": "decimals",
              "nodeType": "VariableDeclaration",
              "scope": 111,
              "src": "296:22:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint32",
                "typeString": "uint32"
              },
              "typeName": {
                "id": 70,
                "name": "uint32",
                "nodeType": "ElementaryTypeName",
                "src": "296:6:1",
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
                "id": 109,
                "nodeType": "Block",
                "src": "348:253:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 76,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 74,
                        "name": "symbol",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 69,
                        "src": "359:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "hexValue": "435542",
                        "id": 75,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "368:5:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_9d366d6a99ab94536fc04431e3faee5e17210c6fa8ec02bf5002c851ba6cbc2b",
                          "typeString": "literal_string \"CUB\""
                        },
                        "value": "CUB"
                      },
                      "src": "359:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "id": 77,
                    "nodeType": "ExpressionStatement",
                    "src": "359:14:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 80,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 78,
                        "name": "name",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 67,
                        "src": "384:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "hexValue": "437562546f6b656e",
                        "id": 79,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "391:10:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_e1b4257b0563ec4ac85db61a37f9aef53f068b1669f37a57641c5999bcd1132a",
                          "typeString": "literal_string \"CubToken\""
                        },
                        "value": "CubToken"
                      },
                      "src": "384:17:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "id": 81,
                    "nodeType": "ExpressionStatement",
                    "src": "384:17:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 84,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 82,
                        "name": "decimals",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 71,
                        "src": "412:8:1",
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
                        "id": 83,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "423:1:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_5_by_1",
                          "typeString": "int_const 5"
                        },
                        "value": "5"
                      },
                      "src": "412:12:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint32",
                        "typeString": "uint32"
                      }
                    },
                    "id": 85,
                    "nodeType": "ExpressionStatement",
                    "src": "412:12:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 88,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 86,
                        "name": "totalSupply",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          65
                        ],
                        "referencedDeclaration": 65,
                        "src": "435:11:1",
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
                        "id": 87,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "449:12:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_100000000000_by_1",
                          "typeString": "int_const 100000000000"
                        },
                        "value": "100000000000"
                      },
                      "src": "435:26:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 89,
                    "nodeType": "ExpressionStatement",
                    "src": "435:26:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 93,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 90,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 505,
                        "src": "474:5:1",
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
                          "id": 91,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1020,
                          "src": "482:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 92,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "482:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "474:18:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 94,
                    "nodeType": "ExpressionStatement",
                    "src": "474:18:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 100,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 95,
                          "name": "balances",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 600,
                          "src": "503:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 98,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 96,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1020,
                            "src": "512:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 97,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "512:10:1",
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
                        "src": "503:20:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 99,
                        "name": "totalSupply",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          65
                        ],
                        "referencedDeclaration": 65,
                        "src": "526:11:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "503:34:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 101,
                    "nodeType": "ExpressionStatement",
                    "src": "503:34:1"
                  },
                  {
                    "eventCall": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "307830",
                          "id": 103,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "564:3:1",
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
                            "id": 104,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1020,
                            "src": "569:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 105,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "569:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 106,
                          "name": "totalSupply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            65
                          ],
                          "referencedDeclaration": 65,
                          "src": "581:11:1",
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
                        "id": 102,
                        "name": "Transfer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 757,
                        "src": "555:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,address,uint256)"
                        }
                      },
                      "id": 107,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "555:38:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 108,
                    "nodeType": "EmitStatement",
                    "src": "550:43:1"
                  }
                ]
              },
              "documentation": null,
              "id": 110,
              "implemented": true,
              "isConstructor": true,
              "isDeclaredConst": false,
              "modifiers": [],
              "name": "",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 72,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "338:2:1"
              },
              "payable": false,
              "returnParameters": {
                "id": 73,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "348:0:1"
              },
              "scope": 111,
              "src": "327:274:1",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            }
          ],
          "scope": 112,
          "src": "160:444:1"
        }
      ],
      "src": "0:604:1"
    },
    "compiler": {
      "name": "solc",
      "version": "0.4.24+commit.e67f0147.Emscripten.clang"
    },
    "networks": {
      "1541541263882": {
        "events": {},
        "links": {},
        "address": "0x1412958f316bd1f93f231cdb10c91672254f7c6f",
        "transactionHash": "0x1eda6743c66f7eefff2adc78a75aa9e505b62d78d57fc41e3aa5cdea4bd3e01e"
      },
      "1541627014513": {
        "events": {},
        "links": {},
        "address": "0x33c5857a59fa4b26985976bf0d042d7ac8e5a396",
        "transactionHash": "0x1eda6743c66f7eefff2adc78a75aa9e505b62d78d57fc41e3aa5cdea4bd3e01e"
      }
    },
    "schemaVersion": "2.0.1",
    "updatedAt": "2018-11-07T21:44:33.105Z"
  }