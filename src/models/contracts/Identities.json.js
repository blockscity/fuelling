export default {
  "contractName": "Identities",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "migrationNewAddress",
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
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "migrationInitiated",
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
      "inputs": [
        {
          "name": "_userTimeLock",
          "type": "uint256"
        },
        {
          "name": "_adminTimeLock",
          "type": "uint256"
        },
        {
          "name": "_adminRate",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "identity",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "creator",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "recoveryKey",
          "type": "address"
        }
      ],
      "name": "LogIdentityCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "identity",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "instigator",
          "type": "address"
        }
      ],
      "name": "LogOwnerAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "identity",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "instigator",
          "type": "address"
        }
      ],
      "name": "LogOwnerRemoved",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "identity",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "recoveryKey",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "instigator",
          "type": "address"
        }
      ],
      "name": "LogRecoveryChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "identity",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newIdManager",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "instigator",
          "type": "address"
        }
      ],
      "name": "LogMigrationInitiated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "identity",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newIdManager",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "instigator",
          "type": "address"
        }
      ],
      "name": "LogMigrationCanceled",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "identity",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newIdManager",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "instigator",
          "type": "address"
        }
      ],
      "name": "LogMigrationFinalized",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        },
        {
          "name": "recoveryKey",
          "type": "address"
        }
      ],
      "name": "createIdentity",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        },
        {
          "name": "recoveryKey",
          "type": "address"
        },
        {
          "name": "destination",
          "type": "address"
        },
        {
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "createIdentityWithCall",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        },
        {
          "name": "recoveryKey",
          "type": "address"
        }
      ],
      "name": "registerIdentity",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "identity",
          "type": "address"
        },
        {
          "name": "destination",
          "type": "address"
        },
        {
          "name": "value",
          "type": "uint256"
        },
        {
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "forwardTo",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "identity",
          "type": "address"
        },
        {
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "addOwner",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "identity",
          "type": "address"
        },
        {
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "addOwnerFromRecovery",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "identity",
          "type": "address"
        },
        {
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "removeOwner",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "identity",
          "type": "address"
        },
        {
          "name": "recoveryKey",
          "type": "address"
        }
      ],
      "name": "changeRecovery",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "identity",
          "type": "address"
        },
        {
          "name": "newIdManager",
          "type": "address"
        }
      ],
      "name": "initiateMigration",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "identity",
          "type": "address"
        }
      ],
      "name": "cancelMigration",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "identity",
          "type": "address"
        }
      ],
      "name": "finalizeMigration",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "identity",
          "type": "address"
        },
        {
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "isOwner",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "identity",
          "type": "address"
        },
        {
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "isOlderOwner",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "identity",
          "type": "address"
        },
        {
          "name": "recoveryKey",
          "type": "address"
        }
      ],
      "name": "isRecovery",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b50604051606080612afe83398101806040528101908080519060200190929190805190602001909291908051906020019092919050505082821015151561005657600080fd5b816000819055508260018190555080600281905550505050612a818061007d6000396000f3006080604052600436106100e6576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806311fe12b3146100eb57806316d390bf1461016657806332967ea0146101c95780633c8ac88e146102445780633dcf59ca1461030d578063422e33f3146103705780635143eea2146103f357806353faa9a914610456578063633b1954146104b95780636f022ac4146104fc57806373b40a5c1461053f578063781f5a83146105f25780637ddc02d414610655578063c778427b146106d0578063d10e73ab14610727578063fbe5ce0a1461078a575b600080fd5b3480156100f757600080fd5b5061014c600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506107ed565b604051808215151515815260200191505060405180910390f35b34801561017257600080fd5b506101c7600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610885565b005b3480156101d557600080fd5b5061022a600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610add565b604051808215151515815260200191505060405180910390f35b34801561025057600080fd5b5061030b600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610bf2565b005b34801561031957600080fd5b5061036e600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610f34565b005b34801561037c57600080fd5b506103b1600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506110e0565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156103ff57600080fd5b50610454600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611113565b005b34801561046257600080fd5b506104b7600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506113eb565b005b3480156104c557600080fd5b506104fa600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611664565b005b34801561050857600080fd5b5061053d600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611a4b565b005b34801561054b57600080fd5b506105f0600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050611c00565b005b3480156105fe57600080fd5b50610653600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611d45565b005b34801561066157600080fd5b506106b6600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611fb6565b604051808215151515815260200191505060405180910390f35b3480156106dc57600080fd5b50610711600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506120cb565b6040518082815260200191505060405180910390f35b34801561073357600080fd5b50610788600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506120e3565b005b34801561079657600080fd5b506107eb600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506122fa565b005b60008173ffffffffffffffffffffffffffffffffffffffff16600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614905092915050565b816108908133610add565b151561089b57600080fd5b826002544203600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410151561092a57600080fd5b42600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506109b58484611fb6565b1515156109c157600080fd5b6001544203600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8672e8532f3edff41d3acf0cd4be6ff900e427461b81d094f0197354471cb3c633604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a350505050565b600080600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054118015610bea575042600054600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020540111155b905092915050565b600083600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610c3157600080fd5b610c39612572565b604051809103906000f080158015610c55573d6000803e3d6000fd5b5091506000544203600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555084600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f14e580ab5cd452b772e031536a7c893ec705152c17b3665c6671b382c3ee626689604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a48173ffffffffffffffffffffffffffffffffffffffff1663d7f31eb9856000866040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610ec6578082015181840152602081019050610eab565b50505050905090810190601f168015610ef35780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b158015610f1457600080fd5b505af1158015610f28573d6000803e3d6000fd5b50505050505050505050565b81610f3f8133610add565b1515610f4a57600080fd5b81600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610f8757600080fd5b42600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555082600760008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fb7b4557c664a8a4a9a57f5e00f216de044a96f96fc84b70eaa6bd48cb078454133604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a350505050565b60076020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b813373ffffffffffffffffffffffffffffffffffffffff16600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156111ad57600080fd5b826002544203600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410151561123c57600080fd5b42600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506112c78484611fb6565b1515156112d357600080fd5b42600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8672e8532f3edff41d3acf0cd4be6ff900e427461b81d094f0197354471cb3c633604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a350505050565b816113f68133610add565b151561140157600080fd5b826002544203600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410151561149057600080fd5b42600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555082600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561154e57600080fd5b83600460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fbd1ad05c16aafa75ac8c1d6b8264f47ad9f3045596f667c9476f3f749c01870933604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a35050505050565b6000816116718133610add565b151561167c57600080fd5b6000600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541415801561170e575042600054600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205401105b151561171957600080fd5b600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169150600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009055600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690558273ffffffffffffffffffffffffffffffffffffffff16631a695230836040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050600060405180830381600087803b1580156118bb57600080fd5b505af11580156118cf573d6000803e3d6000fd5b50505050600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600090558173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f565ed5a2d5e196b82acb6ff1149b699c2b13169c7d34412d736d3c380de64f3133604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a3505050565b600081611a588133611fb6565b1515611a6357600080fd5b600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169150600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009055600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690558173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f60e805c5650597523aba29fb00a59c856d925c672bce1ea7d579f03aef3a10ce33604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a3505050565b83611c0b8133611fb6565b1515611c1657600080fd5b8473ffffffffffffffffffffffffffffffffffffffff1663d7f31eb98585856040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611cd8578082015181840152602081019050611cbd565b50505050905090810190601f168015611d055780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b158015611d2657600080fd5b505af1158015611d3a573d6000803e3d6000fd5b505050505050505050565b80600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515611d8257600080fd5b6000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515611e0657600080fd5b6000544203600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f14e580ab5cd452b772e031536a7c893ec705152c17b3665c6671b382c3ee626686604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a4505050565b600080600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541180156120c3575042600154600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020540111155b905092915050565b60066020528060005260406000206000915090505481565b600081600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561212257600080fd5b61212a612572565b604051809103906000f080158015612146573d6000803e3d6000fd5b5091506000544203600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555082600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f14e580ab5cd452b772e031536a7c893ec705152c17b3665c6671b382c3ee626687604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a450505050565b816123058133610add565b151561231057600080fd5b826002544203600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410151561239f57600080fd5b42600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415151561245b57600080fd5b600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600090558273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f5e159cd4447854ae8b4aa048f91c8daad986faab696c3685030e1a5e5a4e8ced33604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a350505050565b6040516104d380612583833901905600608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610473806100606000396000f300608060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680631a695230146100b25780632f54bf6e146100f55780638da5cb5b14610150578063d7f31eb9146101a7575b3373ffffffffffffffffffffffffffffffffffffffff167f88a5966d370b9919b20f3e2c13ff65706f196a4e32cc2c12bf57088f88525874346040518082815260200191505060405180910390a2005b3480156100be57600080fd5b506100f3600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061023a565b005b34801561010157600080fd5b50610136600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506102c7565b604051808215151515815260200191505060405180910390f35b34801561015c57600080fd5b50610165610320565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156101b357600080fd5b50610238600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610345565b005b610243336102c7565b151561024e57600080fd5b3073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415156102c457806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b50565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16149050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61034e336102c7565b151561035957600080fd5b61036483838361042f565b151561036f57600080fd5b8273ffffffffffffffffffffffffffffffffffffffff167fc1de93dfa06362c6a616cde73ec17d116c0d588dd1df70f27f91b500de207c4183836040518083815260200180602001828103825283818151815260200191508051906020019080838360005b838110156103ef5780820151818401526020810190506103d4565b50505050905090810190601f16801561041c5780820380516001836020036101000a031916815260200191505b50935050505060405180910390a2505050565b600080600083516020850186885af1905093925050505600a165627a7a72305820cdbdc033f4eb5dab0b49e758c89ff86d64e1aecdb01085b9d0b12d58b65a51d30029a165627a7a7230582053430df45ef758a166f5f94c2ba5d9dc3a009d964deda9f2cb7100771585a25f0029",
  "deployedBytecode": "0x6080604052600436106100e6576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806311fe12b3146100eb57806316d390bf1461016657806332967ea0146101c95780633c8ac88e146102445780633dcf59ca1461030d578063422e33f3146103705780635143eea2146103f357806353faa9a914610456578063633b1954146104b95780636f022ac4146104fc57806373b40a5c1461053f578063781f5a83146105f25780637ddc02d414610655578063c778427b146106d0578063d10e73ab14610727578063fbe5ce0a1461078a575b600080fd5b3480156100f757600080fd5b5061014c600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506107ed565b604051808215151515815260200191505060405180910390f35b34801561017257600080fd5b506101c7600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610885565b005b3480156101d557600080fd5b5061022a600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610add565b604051808215151515815260200191505060405180910390f35b34801561025057600080fd5b5061030b600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610bf2565b005b34801561031957600080fd5b5061036e600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610f34565b005b34801561037c57600080fd5b506103b1600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506110e0565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156103ff57600080fd5b50610454600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611113565b005b34801561046257600080fd5b506104b7600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506113eb565b005b3480156104c557600080fd5b506104fa600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611664565b005b34801561050857600080fd5b5061053d600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611a4b565b005b34801561054b57600080fd5b506105f0600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050611c00565b005b3480156105fe57600080fd5b50610653600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611d45565b005b34801561066157600080fd5b506106b6600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611fb6565b604051808215151515815260200191505060405180910390f35b3480156106dc57600080fd5b50610711600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506120cb565b6040518082815260200191505060405180910390f35b34801561073357600080fd5b50610788600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506120e3565b005b34801561079657600080fd5b506107eb600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506122fa565b005b60008173ffffffffffffffffffffffffffffffffffffffff16600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614905092915050565b816108908133610add565b151561089b57600080fd5b826002544203600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410151561092a57600080fd5b42600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506109b58484611fb6565b1515156109c157600080fd5b6001544203600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8672e8532f3edff41d3acf0cd4be6ff900e427461b81d094f0197354471cb3c633604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a350505050565b600080600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054118015610bea575042600054600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020540111155b905092915050565b600083600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610c3157600080fd5b610c39612572565b604051809103906000f080158015610c55573d6000803e3d6000fd5b5091506000544203600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555084600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f14e580ab5cd452b772e031536a7c893ec705152c17b3665c6671b382c3ee626689604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a48173ffffffffffffffffffffffffffffffffffffffff1663d7f31eb9856000866040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610ec6578082015181840152602081019050610eab565b50505050905090810190601f168015610ef35780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b158015610f1457600080fd5b505af1158015610f28573d6000803e3d6000fd5b50505050505050505050565b81610f3f8133610add565b1515610f4a57600080fd5b81600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610f8757600080fd5b42600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555082600760008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fb7b4557c664a8a4a9a57f5e00f216de044a96f96fc84b70eaa6bd48cb078454133604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a350505050565b60076020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b813373ffffffffffffffffffffffffffffffffffffffff16600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156111ad57600080fd5b826002544203600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410151561123c57600080fd5b42600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506112c78484611fb6565b1515156112d357600080fd5b42600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8672e8532f3edff41d3acf0cd4be6ff900e427461b81d094f0197354471cb3c633604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a350505050565b816113f68133610add565b151561140157600080fd5b826002544203600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410151561149057600080fd5b42600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555082600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561154e57600080fd5b83600460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fbd1ad05c16aafa75ac8c1d6b8264f47ad9f3045596f667c9476f3f749c01870933604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a35050505050565b6000816116718133610add565b151561167c57600080fd5b6000600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541415801561170e575042600054600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205401105b151561171957600080fd5b600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169150600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009055600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690558273ffffffffffffffffffffffffffffffffffffffff16631a695230836040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050600060405180830381600087803b1580156118bb57600080fd5b505af11580156118cf573d6000803e3d6000fd5b50505050600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600090558173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f565ed5a2d5e196b82acb6ff1149b699c2b13169c7d34412d736d3c380de64f3133604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a3505050565b600081611a588133611fb6565b1515611a6357600080fd5b600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169150600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009055600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690558173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f60e805c5650597523aba29fb00a59c856d925c672bce1ea7d579f03aef3a10ce33604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a3505050565b83611c0b8133611fb6565b1515611c1657600080fd5b8473ffffffffffffffffffffffffffffffffffffffff1663d7f31eb98585856040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611cd8578082015181840152602081019050611cbd565b50505050905090810190601f168015611d055780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b158015611d2657600080fd5b505af1158015611d3a573d6000803e3d6000fd5b505050505050505050565b80600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515611d8257600080fd5b6000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515611e0657600080fd5b6000544203600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f14e580ab5cd452b772e031536a7c893ec705152c17b3665c6671b382c3ee626686604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a4505050565b600080600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541180156120c3575042600154600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020540111155b905092915050565b60066020528060005260406000206000915090505481565b600081600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561212257600080fd5b61212a612572565b604051809103906000f080158015612146573d6000803e3d6000fd5b5091506000544203600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555082600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f14e580ab5cd452b772e031536a7c893ec705152c17b3665c6671b382c3ee626687604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a450505050565b816123058133610add565b151561231057600080fd5b826002544203600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410151561239f57600080fd5b42600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415151561245b57600080fd5b600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600090558273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f5e159cd4447854ae8b4aa048f91c8daad986faab696c3685030e1a5e5a4e8ced33604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a350505050565b6040516104d380612583833901905600608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610473806100606000396000f300608060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680631a695230146100b25780632f54bf6e146100f55780638da5cb5b14610150578063d7f31eb9146101a7575b3373ffffffffffffffffffffffffffffffffffffffff167f88a5966d370b9919b20f3e2c13ff65706f196a4e32cc2c12bf57088f88525874346040518082815260200191505060405180910390a2005b3480156100be57600080fd5b506100f3600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061023a565b005b34801561010157600080fd5b50610136600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506102c7565b604051808215151515815260200191505060405180910390f35b34801561015c57600080fd5b50610165610320565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156101b357600080fd5b50610238600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610345565b005b610243336102c7565b151561024e57600080fd5b3073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415156102c457806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b50565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16149050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61034e336102c7565b151561035957600080fd5b61036483838361042f565b151561036f57600080fd5b8273ffffffffffffffffffffffffffffffffffffffff167fc1de93dfa06362c6a616cde73ec17d116c0d588dd1df70f27f91b500de207c4183836040518083815260200180602001828103825283818151815260200191508051906020019080838360005b838110156103ef5780820151818401526020810190506103d4565b50505050905090810190601f16801561041c5780820380516001836020036101000a031916815260200191505b50935050505060405180910390a2505050565b600080600083516020850186885af1905093925050505600a165627a7a72305820cdbdc033f4eb5dab0b49e758c89ff86d64e1aecdb01085b9d0b12d58b65a51d30029a165627a7a7230582053430df45ef758a166f5f94c2ba5d9dc3a009d964deda9f2cb7100771585a25f0029",
  "sourceMap": "50:8931:0:-;;;2336:245;8:9:-1;5:2;;;30:1;27;20:12;5:2;2336:245:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2450:13;2432:14;:31;;2424:40;;;;;;;;2490:14;2474:13;:30;;;;2529:13;2514:12;:28;;;;2564:10;2552:9;:22;;;;2336:245;;;50:8931;;;;;;",
  "deployedSourceMap": "50:8931:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8828:151;;8:9:-1;5:2;;;30:1;27;20:12;5:2;8828:151:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5325:277;;8:9:-1;5:2;;;30:1;27;20:12;5:2;5325:277:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8631:191;;8:9:-1;5:2;;;30:1;27;20:12;5:2;8631:191:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3733:475;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3733:475:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6787:313;;8:9:-1;5:2;;;30:1;27;20:12;5:2;6787:313:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1297:54;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1297:54:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5692:272;;8:9:-1;5:2;;;30:1;27;20:12;5:2;5692:272:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6413:278;;8:9:-1;5:2;;;30:1;27;20:12;5:2;6413:278:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7761:673;;8:9:-1;5:2;;;30:1;27;20:12;5:2;7761:673:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;7201:305;;8:9:-1;5:2;;;30:1;27;20:12;5:2;7201:305:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;5090:166;;8:9:-1;5:2;;;30:1;27;20:12;5:2;5090:166:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4579:439;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4579:439:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8440:185;;8:9:-1;5:2;;;30:1;27;20:12;5:2;8440:185:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1241:50;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1241:50:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2859:386;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2859:386:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6033:309;;8:9:-1;5:2;;;30:1;27;20:12;5:2;6033:309:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8828:151;8912:4;8961:11;8935:37;;:12;:22;8948:8;8935:22;;;;;;;;;;;;;;;;;;;;;;;;;:37;;;8928:44;;8828:151;;;;:::o;5325:277::-;5399:8;1527:34;1540:8;1550:10;1527:12;:34::i;:::-;1519:43;;;;;;;;5421:8;1801:9;;1795:3;:15;1762:7;:17;1770:8;1762:17;;;;;;;;;;;;;;;:29;1780:10;1762:29;;;;;;;;;;;;;;;;:49;1754:58;;;;;;;;1854:3;1822:7;:17;1830:8;1822:17;;;;;;;;;;;;;;;:29;1840:10;1822:29;;;;;;;;;;;;;;;:35;;;;5450:27;5458:8;5468;5450:7;:27::i;:::-;5449:28;5441:37;;;;;;;;5523:12;;5517:3;:18;5488:6;:16;5495:8;5488:16;;;;;;;;;;;;;;;:26;5505:8;5488:26;;;;;;;;;;;;;;;:47;;;;5574:8;5550:45;;5564:8;5550:45;;;5584:10;5550:45;;;;;;;;;;;;;;;;;;;;;;1572:1;5325:277;;;:::o;8631:191::-;8711:4;8761:1;8735:6;:16;8742:8;8735:16;;;;;;;;;;;;;;;:23;8752:5;8735:23;;;;;;;;;;;;;;;;:27;:79;;;;;8811:3;8793:13;;8767:6;:16;8774:8;8767:16;;;;;;;;;;;;;;;:23;8784:5;8767:23;;;;;;;;;;;;;;;;:39;8766:48;;8735:79;8727:88;;8631:191;;;;:::o;3733:475::-;3877:14;3854:11;1988:1;1972:18;;:4;:18;;;;1964:27;;;;;;;;3894:11;;:::i;:::-;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;3894:11:0;3877:28;;3947:13;;3941:3;:19;3915:6;:16;3922:8;3915:16;;;;;;;;;;;;;;;:23;3932:5;3915:23;;;;;;;;;;;;;;;:45;;;;4067:11;4042:12;:22;4055:8;4042:22;;;;;;;;;;;;;;;;:36;;;;;;;;;;;;;;;;;;4141:11;4093:60;;4122:10;4093:60;;4112:8;4093:60;;;4134:5;4093:60;;;;;;;;;;;;;;;;;;;;;;4163:8;:16;;;4180:11;4193:1;4196:4;4163:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;4163:38:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4163:38:0;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;4163:38:0;;;;3733:475;;;;;;:::o;6787:313::-;6878:8;1527:34;1540:8;1550:10;1527:12;:34::i;:::-;1519:43;;;;;;;;6905:12;1988:1;1972:18;;:4;:18;;;;1964:27;;;;;;;;6964:3;6933:18;:28;6952:8;6933:28;;;;;;;;;;;;;;;:34;;;;7009:12;6977:19;:29;6997:8;6977:29;;;;;;;;;;;;;;;;:44;;;;;;;;;;;;;;;;;;7068:12;7036:57;;7058:8;7036:57;;;7082:10;7036:57;;;;;;;;;;;;;;;;;;;;;;1572:1;6787:313;;;:::o;1297:54::-;;;;;;;;;;;;;;;;;;;;;;:::o;5692:272::-;5776:8;1670:10;1644:36;;:12;:22;1657:8;1644:22;;;;;;;;;;;;;;;;;;;;;;;;;:36;;;1636:45;;;;;;;;5798:8;1801:9;;1795:3;:15;1762:7;:17;1770:8;1762:17;;;;;;;;;;;;;;;:29;1780:10;1762:29;;;;;;;;;;;;;;;;:49;1754:58;;;;;;;;1854:3;1822:7;:17;1830:8;1822:17;;;;;;;;;;;;;;;:29;1840:10;1822:29;;;;;;;;;;;;;;;:35;;;;5827:27;5835:8;5845;5827:7;:27::i;:::-;5826:28;5818:37;;;;;;;;5894:3;5865:6;:16;5872:8;5865:16;;;;;;;;;;;;;;;:26;5882:8;5865:26;;;;;;;;;;;;;;;:32;;;;5936:8;5912:45;;5926:8;5912:45;;;5946:10;5912:45;;;;;;;;;;;;;;;;;;;;;;1691:1;5692:272;;;:::o;6413:278::-;6500:8;1527:34;1540:8;1550:10;1527:12;:34::i;:::-;1519:43;;;;;;;;6526:8;1801:9;;1795:3;:15;1762:7;:17;1770:8;1762:17;;;;;;;;;;;;;;;:29;1780:10;1762:29;;;;;;;;;;;;;;;;:49;1754:58;;;;;;;;1854:3;1822:7;:17;1830:8;1822:17;;;;;;;;;;;;;;;:29;1840:10;1822:29;;;;;;;;;;;;;;;:35;;;;6553:11;1988:1;1972:18;;:4;:18;;;;1964:27;;;;;;;;6605:11;6580:12;:22;6593:8;6580:22;;;;;;;;;;;;;;;;:36;;;;;;;;;;;;;;;;;;6660:11;6631:53;;6650:8;6631:53;;;6673:10;6631:53;;;;;;;;;;;;;;;;;;;;;;1867:1;1572;6413:278;;;:::o;7761:673::-;7952:20;7826:8;1527:34;1540:8;1550:10;1527:12;:34::i;:::-;1519:43;;;;;;;;7886:1;7854:18;:28;7873:8;7854:28;;;;;;;;;;;;;;;;:33;;:87;;;;;7938:3;7922:13;;7891:18;:28;7910:8;7891:28;;;;;;;;;;;;;;;;:44;:50;7854:87;7846:96;;;;;;;;7975:19;:29;7995:8;7975:29;;;;;;;;;;;;;;;;;;;;;;;;;7952:52;;8021:18;:28;8040:8;8021:28;;;;;;;;;;;;;;;8014:35;;;8066:19;:29;8086:8;8066:29;;;;;;;;;;;;;;;;8059:36;;;;;;;;;;;8105:8;:17;;;8123:12;8105:31;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;8105:31:0;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;8105:31:0;;;;8153:12;:22;8166:8;8153:22;;;;;;;;;;;;;;;;8146:29;;;;;;;;;;;8327:6;:16;8334:8;8327:16;;;;;;;;;;;;;;;:28;8344:10;8327:28;;;;;;;;;;;;;;;8320:35;;;8402:12;8370:57;;8392:8;8370:57;;;8416:10;8370:57;;;;;;;;;;;;;;;;;;;;;;7761:673;;;:::o;7201:305::-;7279:23;7259:8;1413:29;1421:8;1431:10;1413:7;:29::i;:::-;1405:38;;;;;;;;7305:19;:29;7325:8;7305:29;;;;;;;;;;;;;;;;;;;;;;;;;7279:55;;7351:18;:28;7370:8;7351:28;;;;;;;;;;;;;;;7344:35;;;7396:19;:29;7416:8;7396:29;;;;;;;;;;;;;;;;7389:36;;;;;;;;;;;7471:15;7440:59;;7461:8;7440:59;;;7488:10;7440:59;;;;;;;;;;;;;;;;;;;;;;7201:305;;;:::o;5090:166::-;5187:8;1413:29;1421:8;1431:10;1413:7;:29::i;:::-;1405:38;;;;;;;;5207:8;:16;;;5224:11;5237:5;5244:4;5207:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;5207:42:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;5207:42:0;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;5207:42:0;;;;5090:166;;;;;:::o;4579:439::-;4661:11;1988:1;1972:18;;:4;:18;;;;1964:27;;;;;;;;4720:1;4692:12;:24;4705:10;4692:24;;;;;;;;;;;;;;;;;;;;;;;;;:29;;;4684:38;;;;;;;;4801:13;;4795:3;:19;4767:6;:18;4774:10;4767:18;;;;;;;;;;;;;;;:25;4786:5;4767:25;;;;;;;;;;;;;;;:47;;;;4923:11;4896:12;:24;4909:10;4896:24;;;;;;;;;;;;;;;;:38;;;;;;;;;;;;;;;;;;4999:11;4949:62;;4980:10;4949:62;;4968:10;4949:62;;;4992:5;4949:62;;;;;;;;;;;;;;;;;;;;;;4579:439;;;:::o;8440:185::-;8515:4;8565:1;8539:6;:16;8546:8;8539:16;;;;;;;;;;;;;;;:23;8556:5;8539:23;;;;;;;;;;;;;;;;:27;:78;;;;;8614:3;8597:12;;8571:6;:16;8578:8;8571:16;;;;;;;;;;;;;;;:23;8588:5;8571:23;;;;;;;;;;;;;;;;:38;8570:47;;8539:78;8531:87;;8440:185;;;;:::o;1241:50::-;;;;;;;;;;;;;;;;;:::o;2859:386::-;2962:14;2939:11;1988:1;1972:18;;:4;:18;;;;1964:27;;;;;;;;2979:11;;:::i;:::-;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;2979:11:0;2962:28;;3032:13;;3026:3;:19;3000:6;:16;3007:8;3000:16;;;;;;;;;;;;;;;:23;3017:5;3000:23;;;;;;;;;;;;;;;:45;;;;3152:11;3127:12;:22;3140:8;3127:22;;;;;;;;;;;;;;;;:36;;;;;;;;;;;;;;;;;;3226:11;3178:60;;3207:10;3178:60;;3197:8;3178:60;;;3219:5;3178:60;;;;;;;;;;;;;;;;;;;;;;2859:386;;;;:::o;6033:309::-;6107:8;1527:34;1540:8;1550:10;1527:12;:34::i;:::-;1519:43;;;;;;;;6129:8;1801:9;;1795:3;:15;1762:7;:17;1770:8;1762:17;;;;;;;;;;;;;;;:29;1780:10;1762:29;;;;;;;;;;;;;;;;:49;1754:58;;;;;;;;1854:3;1822:7;:17;1830:8;1822:17;;;;;;;;;;;;;;;:29;1840:10;1822:29;;;;;;;;;;;;;;;:35;;;;6230:5;6216:19;;:10;:19;;;;6208:28;;;;;;;;6253:6;:16;6260:8;6253:16;;;;;;;;;;;;;;;:23;6270:5;6253:23;;;;;;;;;;;;;;;6246:30;;;6317:5;6291:44;;6307:8;6291:44;;;6324:10;6291:44;;;;;;;;;;;;;;;;;;;;;;1572:1;6033:309;;;:::o;50:8931::-;;;;;;;;;;:::o",
  "source": "pragma solidity ^0.4.20;\n\nimport \"./Proxy.sol\";\n\n\ncontract Identities {\n    uint adminTimeLock;\n    uint userTimeLock;\n    uint adminRate;\n\n    event LogIdentityCreated(\n        address indexed identity,\n        address indexed creator,\n        address owner,\n        address indexed recoveryKey);\n\n    event LogOwnerAdded(\n        address indexed identity,\n        address indexed owner,\n        address instigator);\n\n    event LogOwnerRemoved(\n        address indexed identity,\n        address indexed owner,\n        address instigator);\n\n    event LogRecoveryChanged(\n        address indexed identity,\n        address indexed recoveryKey,\n        address instigator);\n\n    event LogMigrationInitiated(\n        address indexed identity,\n        address indexed newIdManager,\n        address instigator);\n\n    event LogMigrationCanceled(\n        address indexed identity,\n        address indexed newIdManager,\n        address instigator);\n\n    event LogMigrationFinalized(\n        address indexed identity,\n        address indexed newIdManager,\n        address instigator);\n\n    mapping(address => mapping(address => uint)) owners;\n    mapping(address => address) recoveryKeys;\n    mapping(address => mapping(address => uint)) limiter;\n    mapping(address => uint) public migrationInitiated;\n    mapping(address => address) public migrationNewAddress;\n\n    modifier onlyOwner(address identity) {\n        require(isOwner(identity, msg.sender));\n        _;\n    }\n\n    modifier onlyOlderOwner(address identity) {\n        require(isOlderOwner(identity, msg.sender));\n        _;\n    }\n\n    modifier onlyRecovery(address identity) {\n        require(recoveryKeys[identity] == msg.sender);\n        _;\n    }\n\n    modifier rateLimited(address identity) {\n        require(limiter[identity][msg.sender] < (now - adminRate));\n        limiter[identity][msg.sender] = now;\n        _;\n    }\n\n    modifier validAddress(address addr) {//protects against some weird attacks\n        require(addr != address(0));\n        _;\n    }\n\n    /// @dev Contract constructor sets initial timelock limits\n    /// @param _userTimeLock Time before new owner added by recovery can control proxy\n    /// @param _adminTimeLock Time before new owner can add/remove owners\n    /// @param _adminRate Time period used for rate limiting a given key for admin functionality\n    constructor (uint _userTimeLock, uint _adminTimeLock, uint _adminRate) public {\n        require(_adminTimeLock >= _userTimeLock);\n        adminTimeLock = _adminTimeLock;\n        userTimeLock = _userTimeLock;\n        adminRate = _adminRate;\n    }\n\n    /// @dev Creates a new proxy contract for an owner and recovery\n    /// @param owner Key who can use this contract to control proxy. Given full power\n    /// @param recoveryKey Key of recovery network or address from seed to recovery proxy\n    /// Gas cost of 289,311\n    function createIdentity(address owner, address recoveryKey) public validAddress(recoveryKey) {\n        Proxy identity = new Proxy();\n        owners[identity][owner] = now - adminTimeLock;\n        // This is to ensure original owner has full power from day one\n        recoveryKeys[identity] = recoveryKey;\n        emit LogIdentityCreated(identity, msg.sender, owner, recoveryKey);\n    }\n\n    /// @dev Creates a new proxy contract for an owner and recovery and allows an initial forward call which would be to set the registry in our case\n    /// @param owner Key who can use this contract to control proxy. Given full power\n    /// @param recoveryKey Key of recovery network or address from seed to recovery proxy\n    /// @param destination Address of contract to be called after proxy is created\n    /// @param data of function to be called at the destination contract\n    function createIdentityWithCall(address owner, address recoveryKey, address destination, bytes data) public validAddress(recoveryKey) {\n        Proxy identity = new Proxy();\n        owners[identity][owner] = now - adminTimeLock;\n        // This is to ensure original owner has full power from day one\n        recoveryKeys[identity] = recoveryKey;\n        emit LogIdentityCreated(identity, msg.sender, owner, recoveryKey);\n        identity.forward(destination, 0, data);\n    }\n\n    /// @dev Allows a user to transfer control of existing proxy to this contract. Must come through proxy\n    /// @param owner Key who can use this contract to control proxy. Given full power\n    /// @param recoveryKey Key of recovery network or address from seed to recovery proxy\n    /// Note: User must change owner of proxy to this contract after calling this\n    function registerIdentity(address owner, address recoveryKey) public validAddress(recoveryKey) {\n        require(recoveryKeys[msg.sender] == 0);\n        // Deny any funny business\n        owners[msg.sender][owner] = now - adminTimeLock;\n        // This is to ensure original owner has full power from day one\n        recoveryKeys[msg.sender] = recoveryKey;\n        emit LogIdentityCreated(msg.sender, msg.sender, owner, recoveryKey);\n    }\n\n    /// @dev Allows a user to forward a call through their proxy.\n    function forwardTo(Proxy identity, address destination, uint value, bytes data) public onlyOwner(identity) {\n        identity.forward(destination, value, data);\n    }\n\n    /// @dev Allows an olderOwner to add a new owner instantly\n    function addOwner(Proxy identity, address newOwner) public onlyOlderOwner(identity) rateLimited(identity) {\n        require(!isOwner(identity, newOwner));\n        owners[identity][newOwner] = now - userTimeLock;\n        emit LogOwnerAdded(identity, newOwner, msg.sender);\n    }\n\n    /// @dev Allows a recoveryKey to add a new owner with userTimeLock waiting time\n    function addOwnerFromRecovery(Proxy identity, address newOwner) public onlyRecovery(identity) rateLimited(identity) {\n        require(!isOwner(identity, newOwner));\n        owners[identity][newOwner] = now;\n        emit LogOwnerAdded(identity, newOwner, msg.sender);\n    }\n\n    /// @dev Allows an owner to remove another owner instantly\n    function removeOwner(Proxy identity, address owner) public onlyOlderOwner(identity) rateLimited(identity) {\n        // an owner should not be allowed to remove itself\n        require(msg.sender != owner);\n        delete owners[identity][owner];\n        emit LogOwnerRemoved(identity, owner, msg.sender);\n    }\n\n    /// @dev Allows an owner to change the recoveryKey instantly\n    function changeRecovery(Proxy identity, address recoveryKey) public\n    onlyOlderOwner(identity)\n    rateLimited(identity)\n    validAddress(recoveryKey)\n    {\n        recoveryKeys[identity] = recoveryKey;\n        emit LogRecoveryChanged(identity, recoveryKey, msg.sender);\n    }\n\n    /// @dev Allows an owner to begin process of transfering proxy to new IdentityManager\n    function initiateMigration(Proxy identity, address newIdManager) public\n    onlyOlderOwner(identity)\n    validAddress(newIdManager)\n    {\n        migrationInitiated[identity] = now;\n        migrationNewAddress[identity] = newIdManager;\n        emit LogMigrationInitiated(identity, newIdManager, msg.sender);\n    }\n\n    /// @dev Allows an owner to cancel the process of transfering proxy to new IdentityManager\n    function cancelMigration(Proxy identity) public onlyOwner(identity) {\n        address canceledManager = migrationNewAddress[identity];\n        delete migrationInitiated[identity];\n        delete migrationNewAddress[identity];\n        emit LogMigrationCanceled(identity, canceledManager, msg.sender);\n    }\n\n    /// @dev Allows an owner to finalize migration once adminTimeLock time has passed\n    /// WARNING: before transfering to a new address, make sure this address is \"ready to recieve\" the proxy.\n    /// Not doing so risks the proxy becoming stuck.\n    function finalizeMigration(Proxy identity) public onlyOlderOwner(identity) {\n        require(migrationInitiated[identity] != 0 && migrationInitiated[identity] + adminTimeLock < now);\n        address newIdManager = migrationNewAddress[identity];\n        delete migrationInitiated[identity];\n        delete migrationNewAddress[identity];\n        identity.transfer(newIdManager);\n        delete recoveryKeys[identity];\n        // We can only delete the owner that we know of. All other owners\n        // needs to be removed before a call to this method.\n        delete owners[identity][msg.sender];\n        emit LogMigrationFinalized(identity, newIdManager, msg.sender);\n    }\n\n    function isOwner(address identity, address owner) public constant returns (bool) {\n        return (owners[identity][owner] > 0 && (owners[identity][owner] + userTimeLock) <= now);\n    }\n\n    function isOlderOwner(address identity, address owner) public constant returns (bool) {\n        return (owners[identity][owner] > 0 && (owners[identity][owner] + adminTimeLock) <= now);\n    }\n\n    function isRecovery(address identity, address recoveryKey) public constant returns (bool) {\n        return recoveryKeys[identity] == recoveryKey;\n    }\n}",
  "sourcePath": "/workspace/6c/startup/medivh/contracts/Identities.sol",
  "ast": {
    "absolutePath": "/workspace/6c/startup/medivh/contracts/Identities.sol",
    "exportedSymbols": {
      "Identities": [
        718
      ]
    },
    "id": 719,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".20"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:0"
      },
      {
        "absolutePath": "/workspace/6c/startup/medivh/contracts/Proxy.sol",
        "file": "./Proxy.sol",
        "id": 2,
        "nodeType": "ImportDirective",
        "scope": 719,
        "sourceUnit": 850,
        "src": "26:21:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [
          849
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 718,
        "linearizedBaseContracts": [
          718
        ],
        "name": "Identities",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 4,
            "name": "adminTimeLock",
            "nodeType": "VariableDeclaration",
            "scope": 718,
            "src": "76:18:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 3,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "76:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 6,
            "name": "userTimeLock",
            "nodeType": "VariableDeclaration",
            "scope": 718,
            "src": "100:17:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 5,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "100:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 8,
            "name": "adminRate",
            "nodeType": "VariableDeclaration",
            "scope": 718,
            "src": "123:14:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 7,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "123:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 18,
            "name": "LogIdentityCreated",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 17,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10,
                  "indexed": true,
                  "name": "identity",
                  "nodeType": "VariableDeclaration",
                  "scope": 18,
                  "src": "178:24:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "178:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 12,
                  "indexed": true,
                  "name": "creator",
                  "nodeType": "VariableDeclaration",
                  "scope": 18,
                  "src": "212:23:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 11,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "212:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14,
                  "indexed": false,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 18,
                  "src": "245:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 13,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "245:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16,
                  "indexed": true,
                  "name": "recoveryKey",
                  "nodeType": "VariableDeclaration",
                  "scope": 18,
                  "src": "268:27:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 15,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "268:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "168:128:0"
            },
            "src": "144:153:0"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 26,
            "name": "LogOwnerAdded",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 25,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20,
                  "indexed": true,
                  "name": "identity",
                  "nodeType": "VariableDeclaration",
                  "scope": 26,
                  "src": "332:24:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 19,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "332:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22,
                  "indexed": true,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 26,
                  "src": "366:21:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 21,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "366:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 24,
                  "indexed": false,
                  "name": "instigator",
                  "nodeType": "VariableDeclaration",
                  "scope": 26,
                  "src": "397:18:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 23,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "397:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "322:94:0"
            },
            "src": "303:114:0"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 34,
            "name": "LogOwnerRemoved",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 33,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28,
                  "indexed": true,
                  "name": "identity",
                  "nodeType": "VariableDeclaration",
                  "scope": 34,
                  "src": "454:24:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "454:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 30,
                  "indexed": true,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 34,
                  "src": "488:21:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 29,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "488:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32,
                  "indexed": false,
                  "name": "instigator",
                  "nodeType": "VariableDeclaration",
                  "scope": 34,
                  "src": "519:18:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 31,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "519:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "444:94:0"
            },
            "src": "423:116:0"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 42,
            "name": "LogRecoveryChanged",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 41,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36,
                  "indexed": true,
                  "name": "identity",
                  "nodeType": "VariableDeclaration",
                  "scope": 42,
                  "src": "579:24:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 35,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "579:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 38,
                  "indexed": true,
                  "name": "recoveryKey",
                  "nodeType": "VariableDeclaration",
                  "scope": 42,
                  "src": "613:27:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 37,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "613:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 40,
                  "indexed": false,
                  "name": "instigator",
                  "nodeType": "VariableDeclaration",
                  "scope": 42,
                  "src": "650:18:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 39,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "650:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "569:100:0"
            },
            "src": "545:125:0"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 50,
            "name": "LogMigrationInitiated",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 49,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44,
                  "indexed": true,
                  "name": "identity",
                  "nodeType": "VariableDeclaration",
                  "scope": 50,
                  "src": "713:24:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 43,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "713:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 46,
                  "indexed": true,
                  "name": "newIdManager",
                  "nodeType": "VariableDeclaration",
                  "scope": 50,
                  "src": "747:28:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 45,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "747:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 48,
                  "indexed": false,
                  "name": "instigator",
                  "nodeType": "VariableDeclaration",
                  "scope": 50,
                  "src": "785:18:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 47,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "785:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "703:101:0"
            },
            "src": "676:129:0"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 58,
            "name": "LogMigrationCanceled",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 57,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52,
                  "indexed": true,
                  "name": "identity",
                  "nodeType": "VariableDeclaration",
                  "scope": 58,
                  "src": "847:24:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 51,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "847:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 54,
                  "indexed": true,
                  "name": "newIdManager",
                  "nodeType": "VariableDeclaration",
                  "scope": 58,
                  "src": "881:28:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 53,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "881:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 56,
                  "indexed": false,
                  "name": "instigator",
                  "nodeType": "VariableDeclaration",
                  "scope": 58,
                  "src": "919:18:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 55,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "919:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "837:101:0"
            },
            "src": "811:128:0"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 66,
            "name": "LogMigrationFinalized",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 65,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60,
                  "indexed": true,
                  "name": "identity",
                  "nodeType": "VariableDeclaration",
                  "scope": 66,
                  "src": "982:24:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 59,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "982:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 62,
                  "indexed": true,
                  "name": "newIdManager",
                  "nodeType": "VariableDeclaration",
                  "scope": 66,
                  "src": "1016:28:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 61,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1016:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 64,
                  "indexed": false,
                  "name": "instigator",
                  "nodeType": "VariableDeclaration",
                  "scope": 66,
                  "src": "1054:18:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 63,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1054:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "972:101:0"
            },
            "src": "945:129:0"
          },
          {
            "constant": false,
            "id": 72,
            "name": "owners",
            "nodeType": "VariableDeclaration",
            "scope": 718,
            "src": "1080:51:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
              "typeString": "mapping(address => mapping(address => uint256))"
            },
            "typeName": {
              "id": 71,
              "keyType": {
                "id": 67,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1088:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "1080:44:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                "typeString": "mapping(address => mapping(address => uint256))"
              },
              "valueType": {
                "id": 70,
                "keyType": {
                  "id": 68,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1107:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "1099:24:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                  "typeString": "mapping(address => uint256)"
                },
                "valueType": {
                  "id": 69,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "1118:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 76,
            "name": "recoveryKeys",
            "nodeType": "VariableDeclaration",
            "scope": 718,
            "src": "1137:40:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
              "typeString": "mapping(address => address)"
            },
            "typeName": {
              "id": 75,
              "keyType": {
                "id": 73,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1145:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "1137:27:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                "typeString": "mapping(address => address)"
              },
              "valueType": {
                "id": 74,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1156:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 82,
            "name": "limiter",
            "nodeType": "VariableDeclaration",
            "scope": 718,
            "src": "1183:52:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
              "typeString": "mapping(address => mapping(address => uint256))"
            },
            "typeName": {
              "id": 81,
              "keyType": {
                "id": 77,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1191:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "1183:44:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                "typeString": "mapping(address => mapping(address => uint256))"
              },
              "valueType": {
                "id": 80,
                "keyType": {
                  "id": 78,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1210:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "1202:24:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                  "typeString": "mapping(address => uint256)"
                },
                "valueType": {
                  "id": 79,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "1221:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 86,
            "name": "migrationInitiated",
            "nodeType": "VariableDeclaration",
            "scope": 718,
            "src": "1241:50:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 85,
              "keyType": {
                "id": 83,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1249:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "1241:24:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 84,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "1260:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 90,
            "name": "migrationNewAddress",
            "nodeType": "VariableDeclaration",
            "scope": 718,
            "src": "1297:54:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
              "typeString": "mapping(address => address)"
            },
            "typeName": {
              "id": 89,
              "keyType": {
                "id": 87,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1305:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "1297:27:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                "typeString": "mapping(address => address)"
              },
              "valueType": {
                "id": 88,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1316:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 103,
              "nodeType": "Block",
              "src": "1395:66:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 96,
                            "name": "identity",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 92,
                            "src": "1421:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 97,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 920,
                              "src": "1431:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 98,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1431:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 95,
                          "name": "isOwner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 671,
                          "src": "1413:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_address_$_t_address_$returns$_t_bool_$",
                            "typeString": "function (address,address) view returns (bool)"
                          }
                        },
                        "id": 99,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1413:29:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 94,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        923,
                        924
                      ],
                      "referencedDeclaration": 923,
                      "src": "1405:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 100,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1405:38:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 101,
                  "nodeType": "ExpressionStatement",
                  "src": "1405:38:0"
                },
                {
                  "id": 102,
                  "nodeType": "PlaceholderStatement",
                  "src": "1453:1:0"
                }
              ]
            },
            "documentation": null,
            "id": 104,
            "name": "onlyOwner",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 93,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 92,
                  "name": "identity",
                  "nodeType": "VariableDeclaration",
                  "scope": 104,
                  "src": "1377:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 91,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1377:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1376:18:0"
            },
            "src": "1358:103:0",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 117,
              "nodeType": "Block",
              "src": "1509:71:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 110,
                            "name": "identity",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 106,
                            "src": "1540:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 111,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 920,
                              "src": "1550:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 112,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1550:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 109,
                          "name": "isOlderOwner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 701,
                          "src": "1527:12:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_address_$_t_address_$returns$_t_bool_$",
                            "typeString": "function (address,address) view returns (bool)"
                          }
                        },
                        "id": 113,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1527:34:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 108,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        923,
                        924
                      ],
                      "referencedDeclaration": 923,
                      "src": "1519:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 114,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1519:43:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 115,
                  "nodeType": "ExpressionStatement",
                  "src": "1519:43:0"
                },
                {
                  "id": 116,
                  "nodeType": "PlaceholderStatement",
                  "src": "1572:1:0"
                }
              ]
            },
            "documentation": null,
            "id": 118,
            "name": "onlyOlderOwner",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 107,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 106,
                  "name": "identity",
                  "nodeType": "VariableDeclaration",
                  "scope": 118,
                  "src": "1491:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 105,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1491:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1490:18:0"
            },
            "src": "1467:113:0",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 132,
              "nodeType": "Block",
              "src": "1626:73:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 128,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 123,
                            "name": "recoveryKeys",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 76,
                            "src": "1644:12:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                              "typeString": "mapping(address => address)"
                            }
                          },
                          "id": 125,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 124,
                            "name": "identity",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 120,
                            "src": "1657:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1644:22:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 126,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 920,
                            "src": "1670:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 127,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1670:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1644:36:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 122,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        923,
                        924
                      ],
                      "referencedDeclaration": 923,
                      "src": "1636:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 129,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1636:45:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 130,
                  "nodeType": "ExpressionStatement",
                  "src": "1636:45:0"
                },
                {
                  "id": 131,
                  "nodeType": "PlaceholderStatement",
                  "src": "1691:1:0"
                }
              ]
            },
            "documentation": null,
            "id": 133,
            "name": "onlyRecovery",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 121,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 120,
                  "name": "identity",
                  "nodeType": "VariableDeclaration",
                  "scope": 133,
                  "src": "1608:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 119,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1608:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1607:18:0"
            },
            "src": "1586:113:0",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 161,
              "nodeType": "Block",
              "src": "1744:131:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 148,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 138,
                              "name": "limiter",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 82,
                              "src": "1762:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                "typeString": "mapping(address => mapping(address => uint256))"
                              }
                            },
                            "id": 140,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 139,
                              "name": "identity",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 135,
                              "src": "1770:8:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "1762:17:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 143,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 141,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 920,
                              "src": "1780:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 142,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1780:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1762:29:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "argumentTypes": null,
                          "components": [
                            {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 146,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "id": 144,
                                "name": "now",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 922,
                                "src": "1795:3:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "-",
                              "rightExpression": {
                                "argumentTypes": null,
                                "id": 145,
                                "name": "adminRate",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 8,
                                "src": "1801:9:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "1795:15:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "id": 147,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "1794:17:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1762:49:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 137,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        923,
                        924
                      ],
                      "referencedDeclaration": 923,
                      "src": "1754:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 149,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1754:58:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 150,
                  "nodeType": "ExpressionStatement",
                  "src": "1754:58:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 158,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 151,
                          "name": "limiter",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 82,
                          "src": "1822:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                            "typeString": "mapping(address => mapping(address => uint256))"
                          }
                        },
                        "id": 155,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 152,
                          "name": "identity",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 135,
                          "src": "1830:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1822:17:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 156,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 153,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 920,
                          "src": "1840:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 154,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1840:10:0",
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
                      "src": "1822:29:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 157,
                      "name": "now",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 922,
                      "src": "1854:3:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1822:35:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 159,
                  "nodeType": "ExpressionStatement",
                  "src": "1822:35:0"
                },
                {
                  "id": 160,
                  "nodeType": "PlaceholderStatement",
                  "src": "1867:1:0"
                }
              ]
            },
            "documentation": null,
            "id": 162,
            "name": "rateLimited",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 136,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 135,
                  "name": "identity",
                  "nodeType": "VariableDeclaration",
                  "scope": 162,
                  "src": "1726:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 134,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1726:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1725:18:0"
            },
            "src": "1705:170:0",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 175,
              "nodeType": "Block",
              "src": "1917:92:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 171,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 167,
                          "name": "addr",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 164,
                          "src": "1972:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 169,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1988:1:0",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 168,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1980:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 170,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1980:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1972:18:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 166,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        923,
                        924
                      ],
                      "referencedDeclaration": 923,
                      "src": "1964:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 172,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1964:27:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 173,
                  "nodeType": "ExpressionStatement",
                  "src": "1964:27:0"
                },
                {
                  "id": 174,
                  "nodeType": "PlaceholderStatement",
                  "src": "2001:1:0"
                }
              ]
            },
            "documentation": null,
            "id": 176,
            "name": "validAddress",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 165,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 164,
                  "name": "addr",
                  "nodeType": "VariableDeclaration",
                  "scope": 176,
                  "src": "1903:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 163,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1903:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1902:14:0"
            },
            "src": "1881:128:0",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 203,
              "nodeType": "Block",
              "src": "2414:167:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 188,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 186,
                          "name": "_adminTimeLock",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 180,
                          "src": "2432:14:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 187,
                          "name": "_userTimeLock",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 178,
                          "src": "2450:13:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "2432:31:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 185,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        923,
                        924
                      ],
                      "referencedDeclaration": 923,
                      "src": "2424:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 189,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2424:40:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 190,
                  "nodeType": "ExpressionStatement",
                  "src": "2424:40:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 193,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 191,
                      "name": "adminTimeLock",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4,
                      "src": "2474:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 192,
                      "name": "_adminTimeLock",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 180,
                      "src": "2490:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2474:30:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 194,
                  "nodeType": "ExpressionStatement",
                  "src": "2474:30:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 197,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 195,
                      "name": "userTimeLock",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6,
                      "src": "2514:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 196,
                      "name": "_userTimeLock",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 178,
                      "src": "2529:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2514:28:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 198,
                  "nodeType": "ExpressionStatement",
                  "src": "2514:28:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 201,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 199,
                      "name": "adminRate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8,
                      "src": "2552:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 200,
                      "name": "_adminRate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 182,
                      "src": "2564:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2552:22:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 202,
                  "nodeType": "ExpressionStatement",
                  "src": "2552:22:0"
                }
              ]
            },
            "documentation": "@dev Contract constructor sets initial timelock limits\n @param _userTimeLock Time before new owner added by recovery can control proxy\n @param _adminTimeLock Time before new owner can add/remove owners\n @param _adminRate Time period used for rate limiting a given key for admin functionality",
            "id": 204,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 183,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 178,
                  "name": "_userTimeLock",
                  "nodeType": "VariableDeclaration",
                  "scope": 204,
                  "src": "2349:18:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 177,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2349:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 180,
                  "name": "_adminTimeLock",
                  "nodeType": "VariableDeclaration",
                  "scope": 204,
                  "src": "2369:19:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 179,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2369:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 182,
                  "name": "_adminRate",
                  "nodeType": "VariableDeclaration",
                  "scope": 204,
                  "src": "2390:15:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 181,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2390:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2348:58:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 184,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2414:0:0"
            },
            "scope": 718,
            "src": "2336:245:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 244,
              "nodeType": "Block",
              "src": "2952:293:0",
              "statements": [
                {
                  "assignments": [
                    215
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 215,
                      "name": "identity",
                      "nodeType": "VariableDeclaration",
                      "scope": 245,
                      "src": "2962:14:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Proxy_$849",
                        "typeString": "contract Proxy"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 214,
                        "name": "Proxy",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 849,
                        "src": "2962:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 219,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 217,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "2979:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_creation_nonpayable$__$returns$_t_contract$_Proxy_$849_$",
                        "typeString": "function () returns (contract Proxy)"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 216,
                        "name": "Proxy",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 849,
                        "src": "2983:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        }
                      }
                    },
                    "id": 218,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2979:11:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Proxy_$849",
                      "typeString": "contract Proxy"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2962:28:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 228,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 220,
                          "name": "owners",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 72,
                          "src": "3000:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                            "typeString": "mapping(address => mapping(address => uint256))"
                          }
                        },
                        "id": 223,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 221,
                          "name": "identity",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 215,
                          "src": "3007:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_Proxy_$849",
                            "typeString": "contract Proxy"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "3000:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 224,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 222,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 206,
                        "src": "3017:5:0",
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
                      "src": "3000:23:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 227,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 225,
                        "name": "now",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 922,
                        "src": "3026:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "-",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 226,
                        "name": "adminTimeLock",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4,
                        "src": "3032:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "3026:19:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3000:45:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 229,
                  "nodeType": "ExpressionStatement",
                  "src": "3000:45:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 234,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 230,
                        "name": "recoveryKeys",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 76,
                        "src": "3127:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                          "typeString": "mapping(address => address)"
                        }
                      },
                      "id": 232,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 231,
                        "name": "identity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 215,
                        "src": "3140:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "3127:22:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 233,
                      "name": "recoveryKey",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 208,
                      "src": "3152:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "3127:36:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 235,
                  "nodeType": "ExpressionStatement",
                  "src": "3127:36:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 237,
                        "name": "identity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 215,
                        "src": "3197:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 238,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 920,
                          "src": "3207:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 239,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "3207:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 240,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 206,
                        "src": "3219:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 241,
                        "name": "recoveryKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 208,
                        "src": "3226:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 236,
                      "name": "LogIdentityCreated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18,
                      "src": "3178:18:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address,address,address)"
                      }
                    },
                    "id": 242,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3178:60:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 243,
                  "nodeType": "EmitStatement",
                  "src": "3173:65:0"
                }
              ]
            },
            "documentation": "@dev Creates a new proxy contract for an owner and recovery\n @param owner Key who can use this contract to control proxy. Given full power\n @param recoveryKey Key of recovery network or address from seed to recovery proxy\n Gas cost of 289,311",
            "id": 245,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 211,
                    "name": "recoveryKey",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 208,
                    "src": "2939:11:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 212,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 210,
                  "name": "validAddress",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 176,
                  "src": "2926:12:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2926:25:0"
              }
            ],
            "name": "createIdentity",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 209,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 206,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 245,
                  "src": "2883:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 205,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2883:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 208,
                  "name": "recoveryKey",
                  "nodeType": "VariableDeclaration",
                  "scope": 245,
                  "src": "2898:19:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 207,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2898:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2882:36:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 213,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2952:0:0"
            },
            "scope": 718,
            "src": "2859:386:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 297,
              "nodeType": "Block",
              "src": "3867:341:0",
              "statements": [
                {
                  "assignments": [
                    260
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 260,
                      "name": "identity",
                      "nodeType": "VariableDeclaration",
                      "scope": 298,
                      "src": "3877:14:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Proxy_$849",
                        "typeString": "contract Proxy"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 259,
                        "name": "Proxy",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 849,
                        "src": "3877:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 264,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 262,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "3894:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_creation_nonpayable$__$returns$_t_contract$_Proxy_$849_$",
                        "typeString": "function () returns (contract Proxy)"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 261,
                        "name": "Proxy",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 849,
                        "src": "3898:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        }
                      }
                    },
                    "id": 263,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3894:11:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Proxy_$849",
                      "typeString": "contract Proxy"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3877:28:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 273,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 265,
                          "name": "owners",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 72,
                          "src": "3915:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                            "typeString": "mapping(address => mapping(address => uint256))"
                          }
                        },
                        "id": 268,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 266,
                          "name": "identity",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 260,
                          "src": "3922:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_Proxy_$849",
                            "typeString": "contract Proxy"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "3915:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 269,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 267,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 247,
                        "src": "3932:5:0",
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
                      "src": "3915:23:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 272,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 270,
                        "name": "now",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 922,
                        "src": "3941:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "-",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 271,
                        "name": "adminTimeLock",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4,
                        "src": "3947:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "3941:19:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3915:45:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 274,
                  "nodeType": "ExpressionStatement",
                  "src": "3915:45:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 279,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 275,
                        "name": "recoveryKeys",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 76,
                        "src": "4042:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                          "typeString": "mapping(address => address)"
                        }
                      },
                      "id": 277,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 276,
                        "name": "identity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 260,
                        "src": "4055:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "4042:22:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 278,
                      "name": "recoveryKey",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 249,
                      "src": "4067:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "4042:36:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 280,
                  "nodeType": "ExpressionStatement",
                  "src": "4042:36:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 282,
                        "name": "identity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 260,
                        "src": "4112:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 283,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 920,
                          "src": "4122:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 284,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "4122:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 285,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 247,
                        "src": "4134:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 286,
                        "name": "recoveryKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 249,
                        "src": "4141:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 281,
                      "name": "LogIdentityCreated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18,
                      "src": "4093:18:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address,address,address)"
                      }
                    },
                    "id": 287,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4093:60:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 288,
                  "nodeType": "EmitStatement",
                  "src": "4088:65:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 292,
                        "name": "destination",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 251,
                        "src": "4180:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "30",
                        "id": 293,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4193:1:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      {
                        "argumentTypes": null,
                        "id": 294,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 253,
                        "src": "4196:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 289,
                        "name": "identity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 260,
                        "src": "4163:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        }
                      },
                      "id": 291,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "forward",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 835,
                      "src": "4163:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,uint256,bytes memory) external"
                      }
                    },
                    "id": 295,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4163:38:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 296,
                  "nodeType": "ExpressionStatement",
                  "src": "4163:38:0"
                }
              ]
            },
            "documentation": "@dev Creates a new proxy contract for an owner and recovery and allows an initial forward call which would be to set the registry in our case\n @param owner Key who can use this contract to control proxy. Given full power\n @param recoveryKey Key of recovery network or address from seed to recovery proxy\n @param destination Address of contract to be called after proxy is created\n @param data of function to be called at the destination contract",
            "id": 298,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 256,
                    "name": "recoveryKey",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 249,
                    "src": "3854:11:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 257,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 255,
                  "name": "validAddress",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 176,
                  "src": "3841:12:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "3841:25:0"
              }
            ],
            "name": "createIdentityWithCall",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 254,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 247,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 298,
                  "src": "3765:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 246,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3765:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 249,
                  "name": "recoveryKey",
                  "nodeType": "VariableDeclaration",
                  "scope": 298,
                  "src": "3780:19:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 248,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3780:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 251,
                  "name": "destination",
                  "nodeType": "VariableDeclaration",
                  "scope": 298,
                  "src": "3801:19:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 250,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3801:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 253,
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "scope": 298,
                  "src": "3822:10:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 252,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "3822:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3764:69:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 258,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3867:0:0"
            },
            "scope": 718,
            "src": "3733:475:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 344,
              "nodeType": "Block",
              "src": "4674:344:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 314,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 309,
                            "name": "recoveryKeys",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 76,
                            "src": "4692:12:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                              "typeString": "mapping(address => address)"
                            }
                          },
                          "id": 312,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 310,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 920,
                              "src": "4705:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 311,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "4705:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "4692:24:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 313,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4720:1:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "4692:29:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 308,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        923,
                        924
                      ],
                      "referencedDeclaration": 923,
                      "src": "4684:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 315,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4684:38:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 316,
                  "nodeType": "ExpressionStatement",
                  "src": "4684:38:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 326,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 317,
                          "name": "owners",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 72,
                          "src": "4767:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                            "typeString": "mapping(address => mapping(address => uint256))"
                          }
                        },
                        "id": 321,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 318,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 920,
                            "src": "4774:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 319,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "4774:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "4767:18:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 322,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 320,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 300,
                        "src": "4786:5:0",
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
                      "src": "4767:25:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 325,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 323,
                        "name": "now",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 922,
                        "src": "4795:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "-",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 324,
                        "name": "adminTimeLock",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4,
                        "src": "4801:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "4795:19:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4767:47:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 327,
                  "nodeType": "ExpressionStatement",
                  "src": "4767:47:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 333,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 328,
                        "name": "recoveryKeys",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 76,
                        "src": "4896:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                          "typeString": "mapping(address => address)"
                        }
                      },
                      "id": 331,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 329,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 920,
                          "src": "4909:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 330,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "4909:10:0",
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
                      "src": "4896:24:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 332,
                      "name": "recoveryKey",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 302,
                      "src": "4923:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "4896:38:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 334,
                  "nodeType": "ExpressionStatement",
                  "src": "4896:38:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 336,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 920,
                          "src": "4968:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 337,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "4968:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 338,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 920,
                          "src": "4980:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 339,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "4980:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 340,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 300,
                        "src": "4992:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 341,
                        "name": "recoveryKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 302,
                        "src": "4999:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 335,
                      "name": "LogIdentityCreated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18,
                      "src": "4949:18:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address,address,address)"
                      }
                    },
                    "id": 342,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4949:62:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 343,
                  "nodeType": "EmitStatement",
                  "src": "4944:67:0"
                }
              ]
            },
            "documentation": "@dev Allows a user to transfer control of existing proxy to this contract. Must come through proxy\n @param owner Key who can use this contract to control proxy. Given full power\n @param recoveryKey Key of recovery network or address from seed to recovery proxy\n Note: User must change owner of proxy to this contract after calling this",
            "id": 345,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 305,
                    "name": "recoveryKey",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 302,
                    "src": "4661:11:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 306,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 304,
                  "name": "validAddress",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 176,
                  "src": "4648:12:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "4648:25:0"
              }
            ],
            "name": "registerIdentity",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 303,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 300,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 345,
                  "src": "4605:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 299,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4605:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 302,
                  "name": "recoveryKey",
                  "nodeType": "VariableDeclaration",
                  "scope": 345,
                  "src": "4620:19:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 301,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4620:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4604:36:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 307,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4674:0:0"
            },
            "scope": 718,
            "src": "4579:439:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 367,
              "nodeType": "Block",
              "src": "5197:59:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 362,
                        "name": "destination",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 349,
                        "src": "5224:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 363,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 351,
                        "src": "5237:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 364,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 353,
                        "src": "5244:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 359,
                        "name": "identity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 347,
                        "src": "5207:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        }
                      },
                      "id": 361,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "forward",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 835,
                      "src": "5207:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,uint256,bytes memory) external"
                      }
                    },
                    "id": 365,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5207:42:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 366,
                  "nodeType": "ExpressionStatement",
                  "src": "5207:42:0"
                }
              ]
            },
            "documentation": "@dev Allows a user to forward a call through their proxy.",
            "id": 368,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 356,
                    "name": "identity",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 347,
                    "src": "5187:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Proxy_$849",
                      "typeString": "contract Proxy"
                    }
                  }
                ],
                "id": 357,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 355,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 104,
                  "src": "5177:9:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "5177:19:0"
              }
            ],
            "name": "forwardTo",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 354,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 347,
                  "name": "identity",
                  "nodeType": "VariableDeclaration",
                  "scope": 368,
                  "src": "5109:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_Proxy_$849",
                    "typeString": "contract Proxy"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 346,
                    "name": "Proxy",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 849,
                    "src": "5109:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Proxy_$849",
                      "typeString": "contract Proxy"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 349,
                  "name": "destination",
                  "nodeType": "VariableDeclaration",
                  "scope": 368,
                  "src": "5125:19:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 348,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5125:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 351,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 368,
                  "src": "5146:10:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 350,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "5146:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 353,
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "scope": 368,
                  "src": "5158:10:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 352,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "5158:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5108:61:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 358,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5197:0:0"
            },
            "scope": 718,
            "src": "5090:166:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 406,
              "nodeType": "Block",
              "src": "5431:171:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 386,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "5449:28:0",
                        "subExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 383,
                              "name": "identity",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 370,
                              "src": "5458:8:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_Proxy_$849",
                                "typeString": "contract Proxy"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 384,
                              "name": "newOwner",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 372,
                              "src": "5468:8:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_Proxy_$849",
                                "typeString": "contract Proxy"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 382,
                            "name": "isOwner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 671,
                            "src": "5450:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_address_$_t_address_$returns$_t_bool_$",
                              "typeString": "function (address,address) view returns (bool)"
                            }
                          },
                          "id": 385,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5450:27:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 381,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        923,
                        924
                      ],
                      "referencedDeclaration": 923,
                      "src": "5441:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 387,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5441:37:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 388,
                  "nodeType": "ExpressionStatement",
                  "src": "5441:37:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 397,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 389,
                          "name": "owners",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 72,
                          "src": "5488:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                            "typeString": "mapping(address => mapping(address => uint256))"
                          }
                        },
                        "id": 392,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 390,
                          "name": "identity",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 370,
                          "src": "5495:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_Proxy_$849",
                            "typeString": "contract Proxy"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "5488:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 393,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 391,
                        "name": "newOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 372,
                        "src": "5505:8:0",
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
                      "src": "5488:26:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 396,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 394,
                        "name": "now",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 922,
                        "src": "5517:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "-",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 395,
                        "name": "userTimeLock",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6,
                        "src": "5523:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "5517:18:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5488:47:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 398,
                  "nodeType": "ExpressionStatement",
                  "src": "5488:47:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 400,
                        "name": "identity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 370,
                        "src": "5564:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 401,
                        "name": "newOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 372,
                        "src": "5574:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 402,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 920,
                          "src": "5584:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 403,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "5584:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 399,
                      "name": "LogOwnerAdded",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26,
                      "src": "5550:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address,address)"
                      }
                    },
                    "id": 404,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5550:45:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 405,
                  "nodeType": "EmitStatement",
                  "src": "5545:50:0"
                }
              ]
            },
            "documentation": "@dev Allows an olderOwner to add a new owner instantly",
            "id": 407,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 375,
                    "name": "identity",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 370,
                    "src": "5399:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Proxy_$849",
                      "typeString": "contract Proxy"
                    }
                  }
                ],
                "id": 376,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 374,
                  "name": "onlyOlderOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 118,
                  "src": "5384:14:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "5384:24:0"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 378,
                    "name": "identity",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 370,
                    "src": "5421:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Proxy_$849",
                      "typeString": "contract Proxy"
                    }
                  }
                ],
                "id": 379,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 377,
                  "name": "rateLimited",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 162,
                  "src": "5409:11:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "5409:21:0"
              }
            ],
            "name": "addOwner",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 373,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 370,
                  "name": "identity",
                  "nodeType": "VariableDeclaration",
                  "scope": 407,
                  "src": "5343:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_Proxy_$849",
                    "typeString": "contract Proxy"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 369,
                    "name": "Proxy",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 849,
                    "src": "5343:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Proxy_$849",
                      "typeString": "contract Proxy"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 372,
                  "name": "newOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 407,
                  "src": "5359:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 371,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5359:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5342:34:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 380,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5431:0:0"
            },
            "scope": 718,
            "src": "5325:277:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 443,
              "nodeType": "Block",
              "src": "5808:156:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 425,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "5826:28:0",
                        "subExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 422,
                              "name": "identity",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 409,
                              "src": "5835:8:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_Proxy_$849",
                                "typeString": "contract Proxy"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 423,
                              "name": "newOwner",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 411,
                              "src": "5845:8:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_Proxy_$849",
                                "typeString": "contract Proxy"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 421,
                            "name": "isOwner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 671,
                            "src": "5827:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_address_$_t_address_$returns$_t_bool_$",
                              "typeString": "function (address,address) view returns (bool)"
                            }
                          },
                          "id": 424,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5827:27:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 420,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        923,
                        924
                      ],
                      "referencedDeclaration": 923,
                      "src": "5818:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 426,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5818:37:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 427,
                  "nodeType": "ExpressionStatement",
                  "src": "5818:37:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 434,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 428,
                          "name": "owners",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 72,
                          "src": "5865:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                            "typeString": "mapping(address => mapping(address => uint256))"
                          }
                        },
                        "id": 431,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 429,
                          "name": "identity",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 409,
                          "src": "5872:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_Proxy_$849",
                            "typeString": "contract Proxy"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "5865:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 432,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 430,
                        "name": "newOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 411,
                        "src": "5882:8:0",
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
                      "src": "5865:26:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 433,
                      "name": "now",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 922,
                      "src": "5894:3:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5865:32:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 435,
                  "nodeType": "ExpressionStatement",
                  "src": "5865:32:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 437,
                        "name": "identity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 409,
                        "src": "5926:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 438,
                        "name": "newOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 411,
                        "src": "5936:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 439,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 920,
                          "src": "5946:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 440,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "5946:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 436,
                      "name": "LogOwnerAdded",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26,
                      "src": "5912:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address,address)"
                      }
                    },
                    "id": 441,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5912:45:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 442,
                  "nodeType": "EmitStatement",
                  "src": "5907:50:0"
                }
              ]
            },
            "documentation": "@dev Allows a recoveryKey to add a new owner with userTimeLock waiting time",
            "id": 444,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 414,
                    "name": "identity",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 409,
                    "src": "5776:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Proxy_$849",
                      "typeString": "contract Proxy"
                    }
                  }
                ],
                "id": 415,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 413,
                  "name": "onlyRecovery",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 133,
                  "src": "5763:12:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "5763:22:0"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 417,
                    "name": "identity",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 409,
                    "src": "5798:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Proxy_$849",
                      "typeString": "contract Proxy"
                    }
                  }
                ],
                "id": 418,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 416,
                  "name": "rateLimited",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 162,
                  "src": "5786:11:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "5786:21:0"
              }
            ],
            "name": "addOwnerFromRecovery",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 412,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 409,
                  "name": "identity",
                  "nodeType": "VariableDeclaration",
                  "scope": 444,
                  "src": "5722:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_Proxy_$849",
                    "typeString": "contract Proxy"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 408,
                    "name": "Proxy",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 849,
                    "src": "5722:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Proxy_$849",
                      "typeString": "contract Proxy"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 411,
                  "name": "newOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 444,
                  "src": "5738:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 410,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5738:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5721:34:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 419,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5808:0:0"
            },
            "scope": 718,
            "src": "5692:272:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 478,
              "nodeType": "Block",
              "src": "6139:203:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 461,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 458,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 920,
                            "src": "6216:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 459,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "6216:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 460,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 448,
                          "src": "6230:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "6216:19:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 457,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        923,
                        924
                      ],
                      "referencedDeclaration": 923,
                      "src": "6208:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 462,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6208:28:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 463,
                  "nodeType": "ExpressionStatement",
                  "src": "6208:28:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 469,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "6246:30:0",
                    "subExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 464,
                          "name": "owners",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 72,
                          "src": "6253:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                            "typeString": "mapping(address => mapping(address => uint256))"
                          }
                        },
                        "id": 466,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 465,
                          "name": "identity",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 446,
                          "src": "6260:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_Proxy_$849",
                            "typeString": "contract Proxy"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "6253:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 468,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 467,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 448,
                        "src": "6270:5:0",
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
                      "src": "6253:23:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 470,
                  "nodeType": "ExpressionStatement",
                  "src": "6246:30:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 472,
                        "name": "identity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 446,
                        "src": "6307:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 473,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 448,
                        "src": "6317:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 474,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 920,
                          "src": "6324:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 475,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "6324:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 471,
                      "name": "LogOwnerRemoved",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34,
                      "src": "6291:15:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address,address)"
                      }
                    },
                    "id": 476,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6291:44:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 477,
                  "nodeType": "EmitStatement",
                  "src": "6286:49:0"
                }
              ]
            },
            "documentation": "@dev Allows an owner to remove another owner instantly",
            "id": 479,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 451,
                    "name": "identity",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 446,
                    "src": "6107:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Proxy_$849",
                      "typeString": "contract Proxy"
                    }
                  }
                ],
                "id": 452,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 450,
                  "name": "onlyOlderOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 118,
                  "src": "6092:14:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "6092:24:0"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 454,
                    "name": "identity",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 446,
                    "src": "6129:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Proxy_$849",
                      "typeString": "contract Proxy"
                    }
                  }
                ],
                "id": 455,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 453,
                  "name": "rateLimited",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 162,
                  "src": "6117:11:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "6117:21:0"
              }
            ],
            "name": "removeOwner",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 449,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 446,
                  "name": "identity",
                  "nodeType": "VariableDeclaration",
                  "scope": 479,
                  "src": "6054:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_Proxy_$849",
                    "typeString": "contract Proxy"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 445,
                    "name": "Proxy",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 849,
                    "src": "6054:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Proxy_$849",
                      "typeString": "contract Proxy"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 448,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 479,
                  "src": "6070:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 447,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6070:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6053:31:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 456,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6139:0:0"
            },
            "scope": 718,
            "src": "6033:309:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 508,
              "nodeType": "Block",
              "src": "6570:121:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 499,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 495,
                        "name": "recoveryKeys",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 76,
                        "src": "6580:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                          "typeString": "mapping(address => address)"
                        }
                      },
                      "id": 497,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 496,
                        "name": "identity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 481,
                        "src": "6593:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "6580:22:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 498,
                      "name": "recoveryKey",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 483,
                      "src": "6605:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "6580:36:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 500,
                  "nodeType": "ExpressionStatement",
                  "src": "6580:36:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 502,
                        "name": "identity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 481,
                        "src": "6650:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 503,
                        "name": "recoveryKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 483,
                        "src": "6660:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 504,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 920,
                          "src": "6673:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 505,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "6673:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 501,
                      "name": "LogRecoveryChanged",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 42,
                      "src": "6631:18:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address,address)"
                      }
                    },
                    "id": 506,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6631:53:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 507,
                  "nodeType": "EmitStatement",
                  "src": "6626:58:0"
                }
              ]
            },
            "documentation": "@dev Allows an owner to change the recoveryKey instantly",
            "id": 509,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 486,
                    "name": "identity",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 481,
                    "src": "6500:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Proxy_$849",
                      "typeString": "contract Proxy"
                    }
                  }
                ],
                "id": 487,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 485,
                  "name": "onlyOlderOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 118,
                  "src": "6485:14:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "6485:24:0"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 489,
                    "name": "identity",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 481,
                    "src": "6526:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Proxy_$849",
                      "typeString": "contract Proxy"
                    }
                  }
                ],
                "id": 490,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 488,
                  "name": "rateLimited",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 162,
                  "src": "6514:11:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "6514:21:0"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 492,
                    "name": "recoveryKey",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 483,
                    "src": "6553:11:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 493,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 491,
                  "name": "validAddress",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 176,
                  "src": "6540:12:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "6540:25:0"
              }
            ],
            "name": "changeRecovery",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 484,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 481,
                  "name": "identity",
                  "nodeType": "VariableDeclaration",
                  "scope": 509,
                  "src": "6437:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_Proxy_$849",
                    "typeString": "contract Proxy"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 480,
                    "name": "Proxy",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 849,
                    "src": "6437:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Proxy_$849",
                      "typeString": "contract Proxy"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 483,
                  "name": "recoveryKey",
                  "nodeType": "VariableDeclaration",
                  "scope": 509,
                  "src": "6453:19:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 482,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6453:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6436:37:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 494,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6570:0:0"
            },
            "scope": 718,
            "src": "6413:278:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 541,
              "nodeType": "Block",
              "src": "6923:177:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 526,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 522,
                        "name": "migrationInitiated",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 86,
                        "src": "6933:18:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 524,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 523,
                        "name": "identity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 511,
                        "src": "6952:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "6933:28:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 525,
                      "name": "now",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 922,
                      "src": "6964:3:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6933:34:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 527,
                  "nodeType": "ExpressionStatement",
                  "src": "6933:34:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 532,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 528,
                        "name": "migrationNewAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 90,
                        "src": "6977:19:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                          "typeString": "mapping(address => address)"
                        }
                      },
                      "id": 530,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 529,
                        "name": "identity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 511,
                        "src": "6997:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "6977:29:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 531,
                      "name": "newIdManager",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 513,
                      "src": "7009:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "6977:44:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 533,
                  "nodeType": "ExpressionStatement",
                  "src": "6977:44:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 535,
                        "name": "identity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 511,
                        "src": "7058:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 536,
                        "name": "newIdManager",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 513,
                        "src": "7068:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 537,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 920,
                          "src": "7082:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 538,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "7082:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 534,
                      "name": "LogMigrationInitiated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50,
                      "src": "7036:21:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address,address)"
                      }
                    },
                    "id": 539,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7036:57:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 540,
                  "nodeType": "EmitStatement",
                  "src": "7031:62:0"
                }
              ]
            },
            "documentation": "@dev Allows an owner to begin process of transfering proxy to new IdentityManager",
            "id": 542,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 516,
                    "name": "identity",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 511,
                    "src": "6878:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Proxy_$849",
                      "typeString": "contract Proxy"
                    }
                  }
                ],
                "id": 517,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 515,
                  "name": "onlyOlderOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 118,
                  "src": "6863:14:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "6863:24:0"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 519,
                    "name": "newIdManager",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 513,
                    "src": "6905:12:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 520,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 518,
                  "name": "validAddress",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 176,
                  "src": "6892:12:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "6892:26:0"
              }
            ],
            "name": "initiateMigration",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 514,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 511,
                  "name": "identity",
                  "nodeType": "VariableDeclaration",
                  "scope": 542,
                  "src": "6814:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_Proxy_$849",
                    "typeString": "contract Proxy"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 510,
                    "name": "Proxy",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 849,
                    "src": "6814:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Proxy_$849",
                      "typeString": "contract Proxy"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 513,
                  "name": "newIdManager",
                  "nodeType": "VariableDeclaration",
                  "scope": 542,
                  "src": "6830:20:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 512,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6830:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6813:38:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 521,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6923:0:0"
            },
            "scope": 718,
            "src": "6787:313:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 573,
              "nodeType": "Block",
              "src": "7269:237:0",
              "statements": [
                {
                  "assignments": [
                    551
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 551,
                      "name": "canceledManager",
                      "nodeType": "VariableDeclaration",
                      "scope": 574,
                      "src": "7279:23:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 550,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "7279:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 555,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 552,
                      "name": "migrationNewAddress",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 90,
                      "src": "7305:19:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                        "typeString": "mapping(address => address)"
                      }
                    },
                    "id": 554,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 553,
                      "name": "identity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 544,
                      "src": "7325:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Proxy_$849",
                        "typeString": "contract Proxy"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "7305:29:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7279:55:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 559,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "7344:35:0",
                    "subExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 556,
                        "name": "migrationInitiated",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 86,
                        "src": "7351:18:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 558,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 557,
                        "name": "identity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 544,
                        "src": "7370:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "7351:28:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 560,
                  "nodeType": "ExpressionStatement",
                  "src": "7344:35:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 564,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "7389:36:0",
                    "subExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 561,
                        "name": "migrationNewAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 90,
                        "src": "7396:19:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                          "typeString": "mapping(address => address)"
                        }
                      },
                      "id": 563,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 562,
                        "name": "identity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 544,
                        "src": "7416:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "7396:29:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 565,
                  "nodeType": "ExpressionStatement",
                  "src": "7389:36:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 567,
                        "name": "identity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 544,
                        "src": "7461:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 568,
                        "name": "canceledManager",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 551,
                        "src": "7471:15:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 569,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 920,
                          "src": "7488:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 570,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "7488:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 566,
                      "name": "LogMigrationCanceled",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 58,
                      "src": "7440:20:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address,address)"
                      }
                    },
                    "id": 571,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7440:59:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 572,
                  "nodeType": "EmitStatement",
                  "src": "7435:64:0"
                }
              ]
            },
            "documentation": "@dev Allows an owner to cancel the process of transfering proxy to new IdentityManager",
            "id": 574,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 547,
                    "name": "identity",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 544,
                    "src": "7259:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Proxy_$849",
                      "typeString": "contract Proxy"
                    }
                  }
                ],
                "id": 548,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 546,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 104,
                  "src": "7249:9:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "7249:19:0"
              }
            ],
            "name": "cancelMigration",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 545,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 544,
                  "name": "identity",
                  "nodeType": "VariableDeclaration",
                  "scope": 574,
                  "src": "7226:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_Proxy_$849",
                    "typeString": "contract Proxy"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 543,
                    "name": "Proxy",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 849,
                    "src": "7226:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Proxy_$849",
                      "typeString": "contract Proxy"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "7225:16:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 549,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7269:0:0"
            },
            "scope": 718,
            "src": "7201:305:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 640,
              "nodeType": "Block",
              "src": "7836:598:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 595,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 587,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 583,
                              "name": "migrationInitiated",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 86,
                              "src": "7854:18:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 585,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 584,
                              "name": "identity",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 576,
                              "src": "7873:8:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_Proxy_$849",
                                "typeString": "contract Proxy"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "7854:28:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "!=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 586,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7886:1:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "7854:33:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&&",
                        "rightExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 594,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 592,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 588,
                                "name": "migrationInitiated",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 86,
                                "src": "7891:18:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                  "typeString": "mapping(address => uint256)"
                                }
                              },
                              "id": 590,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 589,
                                "name": "identity",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 576,
                                "src": "7910:8:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_Proxy_$849",
                                  "typeString": "contract Proxy"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "7891:28:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "+",
                            "rightExpression": {
                              "argumentTypes": null,
                              "id": 591,
                              "name": "adminTimeLock",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4,
                              "src": "7922:13:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "7891:44:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 593,
                            "name": "now",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 922,
                            "src": "7938:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "7891:50:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "7854:87:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 582,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        923,
                        924
                      ],
                      "referencedDeclaration": 923,
                      "src": "7846:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 596,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7846:96:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 597,
                  "nodeType": "ExpressionStatement",
                  "src": "7846:96:0"
                },
                {
                  "assignments": [
                    599
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 599,
                      "name": "newIdManager",
                      "nodeType": "VariableDeclaration",
                      "scope": 641,
                      "src": "7952:20:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 598,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "7952:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 603,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 600,
                      "name": "migrationNewAddress",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 90,
                      "src": "7975:19:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                        "typeString": "mapping(address => address)"
                      }
                    },
                    "id": 602,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 601,
                      "name": "identity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 576,
                      "src": "7995:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Proxy_$849",
                        "typeString": "contract Proxy"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "7975:29:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7952:52:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 607,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "8014:35:0",
                    "subExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 604,
                        "name": "migrationInitiated",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 86,
                        "src": "8021:18:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 606,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 605,
                        "name": "identity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 576,
                        "src": "8040:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "8021:28:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 608,
                  "nodeType": "ExpressionStatement",
                  "src": "8014:35:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 612,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "8059:36:0",
                    "subExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 609,
                        "name": "migrationNewAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 90,
                        "src": "8066:19:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                          "typeString": "mapping(address => address)"
                        }
                      },
                      "id": 611,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 610,
                        "name": "identity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 576,
                        "src": "8086:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "8066:29:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 613,
                  "nodeType": "ExpressionStatement",
                  "src": "8059:36:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 617,
                        "name": "newIdManager",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 599,
                        "src": "8123:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 614,
                        "name": "identity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 576,
                        "src": "8105:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        }
                      },
                      "id": 616,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 904,
                      "src": "8105:17:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address) external"
                      }
                    },
                    "id": 618,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8105:31:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 619,
                  "nodeType": "ExpressionStatement",
                  "src": "8105:31:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 623,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "8146:29:0",
                    "subExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 620,
                        "name": "recoveryKeys",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 76,
                        "src": "8153:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                          "typeString": "mapping(address => address)"
                        }
                      },
                      "id": 622,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 621,
                        "name": "identity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 576,
                        "src": "8166:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "8153:22:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 624,
                  "nodeType": "ExpressionStatement",
                  "src": "8146:29:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 631,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "8320:35:0",
                    "subExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 625,
                          "name": "owners",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 72,
                          "src": "8327:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                            "typeString": "mapping(address => mapping(address => uint256))"
                          }
                        },
                        "id": 627,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 626,
                          "name": "identity",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 576,
                          "src": "8334:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_Proxy_$849",
                            "typeString": "contract Proxy"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "8327:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 630,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 628,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 920,
                          "src": "8344:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 629,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "8344:10:0",
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
                      "src": "8327:28:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 632,
                  "nodeType": "ExpressionStatement",
                  "src": "8320:35:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 634,
                        "name": "identity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 576,
                        "src": "8392:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 635,
                        "name": "newIdManager",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 599,
                        "src": "8402:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 636,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 920,
                          "src": "8416:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 637,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "8416:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 633,
                      "name": "LogMigrationFinalized",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66,
                      "src": "8370:21:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address,address)"
                      }
                    },
                    "id": 638,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8370:57:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 639,
                  "nodeType": "EmitStatement",
                  "src": "8365:62:0"
                }
              ]
            },
            "documentation": "@dev Allows an owner to finalize migration once adminTimeLock time has passed\n WARNING: before transfering to a new address, make sure this address is \"ready to recieve\" the proxy.\n Not doing so risks the proxy becoming stuck.",
            "id": 641,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 579,
                    "name": "identity",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 576,
                    "src": "7826:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Proxy_$849",
                      "typeString": "contract Proxy"
                    }
                  }
                ],
                "id": 580,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 578,
                  "name": "onlyOlderOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 118,
                  "src": "7811:14:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "7811:24:0"
              }
            ],
            "name": "finalizeMigration",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 577,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 576,
                  "name": "identity",
                  "nodeType": "VariableDeclaration",
                  "scope": 641,
                  "src": "7788:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_Proxy_$849",
                    "typeString": "contract Proxy"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 575,
                    "name": "Proxy",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 849,
                    "src": "7788:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Proxy_$849",
                      "typeString": "contract Proxy"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "7787:16:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 581,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7836:0:0"
            },
            "scope": 718,
            "src": "7761:673:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 670,
              "nodeType": "Block",
              "src": "8521:104:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 667,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 656,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 650,
                                "name": "owners",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 72,
                                "src": "8539:6:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                  "typeString": "mapping(address => mapping(address => uint256))"
                                }
                              },
                              "id": 652,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 651,
                                "name": "identity",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 643,
                                "src": "8546:8:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "8539:16:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 654,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 653,
                              "name": "owner",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 645,
                              "src": "8556:5:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "8539:23:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 655,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8565:1:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "8539:27:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&&",
                        "rightExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 666,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "components": [
                              {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 663,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "baseExpression": {
                                      "argumentTypes": null,
                                      "id": 657,
                                      "name": "owners",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 72,
                                      "src": "8571:6:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                        "typeString": "mapping(address => mapping(address => uint256))"
                                      }
                                    },
                                    "id": 659,
                                    "indexExpression": {
                                      "argumentTypes": null,
                                      "id": 658,
                                      "name": "identity",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 643,
                                      "src": "8578:8:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "IndexAccess",
                                    "src": "8571:16:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                      "typeString": "mapping(address => uint256)"
                                    }
                                  },
                                  "id": 661,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 660,
                                    "name": "owner",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 645,
                                    "src": "8588:5:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "8571:23:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "+",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "id": 662,
                                  "name": "userTimeLock",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 6,
                                  "src": "8597:12:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "8571:38:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 664,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "8570:40:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 665,
                            "name": "now",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 922,
                            "src": "8614:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "8570:47:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "8539:78:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "id": 668,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "8538:80:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 649,
                  "id": 669,
                  "nodeType": "Return",
                  "src": "8531:87:0"
                }
              ]
            },
            "documentation": null,
            "id": 671,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isOwner",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 646,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 643,
                  "name": "identity",
                  "nodeType": "VariableDeclaration",
                  "scope": 671,
                  "src": "8457:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 642,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8457:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 645,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 671,
                  "src": "8475:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 644,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8475:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "8456:33:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 649,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 648,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 671,
                  "src": "8515:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 647,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "8515:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "8514:6:0"
            },
            "scope": 718,
            "src": "8440:185:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 700,
              "nodeType": "Block",
              "src": "8717:105:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 697,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 686,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 680,
                                "name": "owners",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 72,
                                "src": "8735:6:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                  "typeString": "mapping(address => mapping(address => uint256))"
                                }
                              },
                              "id": 682,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 681,
                                "name": "identity",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 673,
                                "src": "8742:8:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "8735:16:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 684,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 683,
                              "name": "owner",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 675,
                              "src": "8752:5:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "8735:23:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 685,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8761:1:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "8735:27:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&&",
                        "rightExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 696,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "components": [
                              {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 693,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "baseExpression": {
                                      "argumentTypes": null,
                                      "id": 687,
                                      "name": "owners",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 72,
                                      "src": "8767:6:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                        "typeString": "mapping(address => mapping(address => uint256))"
                                      }
                                    },
                                    "id": 689,
                                    "indexExpression": {
                                      "argumentTypes": null,
                                      "id": 688,
                                      "name": "identity",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 673,
                                      "src": "8774:8:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "IndexAccess",
                                    "src": "8767:16:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                      "typeString": "mapping(address => uint256)"
                                    }
                                  },
                                  "id": 691,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 690,
                                    "name": "owner",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 675,
                                    "src": "8784:5:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "8767:23:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "+",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "id": 692,
                                  "name": "adminTimeLock",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4,
                                  "src": "8793:13:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "8767:39:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 694,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "8766:41:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 695,
                            "name": "now",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 922,
                            "src": "8811:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "8766:48:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "8735:79:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "id": 698,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "8734:81:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 679,
                  "id": 699,
                  "nodeType": "Return",
                  "src": "8727:88:0"
                }
              ]
            },
            "documentation": null,
            "id": 701,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isOlderOwner",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 676,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 673,
                  "name": "identity",
                  "nodeType": "VariableDeclaration",
                  "scope": 701,
                  "src": "8653:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 672,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8653:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 675,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 701,
                  "src": "8671:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 674,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8671:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "8652:33:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 679,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 678,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 701,
                  "src": "8711:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 677,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "8711:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "8710:6:0"
            },
            "scope": 718,
            "src": "8631:191:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 716,
              "nodeType": "Block",
              "src": "8918:61:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 714,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 710,
                        "name": "recoveryKeys",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 76,
                        "src": "8935:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                          "typeString": "mapping(address => address)"
                        }
                      },
                      "id": 712,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 711,
                        "name": "identity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 703,
                        "src": "8948:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "8935:22:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 713,
                      "name": "recoveryKey",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 705,
                      "src": "8961:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "8935:37:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 709,
                  "id": 715,
                  "nodeType": "Return",
                  "src": "8928:44:0"
                }
              ]
            },
            "documentation": null,
            "id": 717,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isRecovery",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 706,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 703,
                  "name": "identity",
                  "nodeType": "VariableDeclaration",
                  "scope": 717,
                  "src": "8848:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 702,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8848:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 705,
                  "name": "recoveryKey",
                  "nodeType": "VariableDeclaration",
                  "scope": 717,
                  "src": "8866:19:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 704,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8866:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "8847:39:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 709,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 708,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 717,
                  "src": "8912:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 707,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "8912:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "8911:6:0"
            },
            "scope": 718,
            "src": "8828:151:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 719,
        "src": "50:8931:0"
      }
    ],
    "src": "0:8981:0"
  },
  "legacyAST": {
    "absolutePath": "/workspace/6c/startup/medivh/contracts/Identities.sol",
    "exportedSymbols": {
      "Identities": [
        718
      ]
    },
    "id": 719,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".20"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:0"
      },
      {
        "absolutePath": "/workspace/6c/startup/medivh/contracts/Proxy.sol",
        "file": "./Proxy.sol",
        "id": 2,
        "nodeType": "ImportDirective",
        "scope": 719,
        "sourceUnit": 850,
        "src": "26:21:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [
          849
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 718,
        "linearizedBaseContracts": [
          718
        ],
        "name": "Identities",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 4,
            "name": "adminTimeLock",
            "nodeType": "VariableDeclaration",
            "scope": 718,
            "src": "76:18:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 3,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "76:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 6,
            "name": "userTimeLock",
            "nodeType": "VariableDeclaration",
            "scope": 718,
            "src": "100:17:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 5,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "100:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 8,
            "name": "adminRate",
            "nodeType": "VariableDeclaration",
            "scope": 718,
            "src": "123:14:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 7,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "123:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 18,
            "name": "LogIdentityCreated",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 17,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10,
                  "indexed": true,
                  "name": "identity",
                  "nodeType": "VariableDeclaration",
                  "scope": 18,
                  "src": "178:24:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "178:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 12,
                  "indexed": true,
                  "name": "creator",
                  "nodeType": "VariableDeclaration",
                  "scope": 18,
                  "src": "212:23:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 11,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "212:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14,
                  "indexed": false,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 18,
                  "src": "245:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 13,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "245:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16,
                  "indexed": true,
                  "name": "recoveryKey",
                  "nodeType": "VariableDeclaration",
                  "scope": 18,
                  "src": "268:27:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 15,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "268:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "168:128:0"
            },
            "src": "144:153:0"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 26,
            "name": "LogOwnerAdded",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 25,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20,
                  "indexed": true,
                  "name": "identity",
                  "nodeType": "VariableDeclaration",
                  "scope": 26,
                  "src": "332:24:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 19,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "332:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22,
                  "indexed": true,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 26,
                  "src": "366:21:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 21,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "366:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 24,
                  "indexed": false,
                  "name": "instigator",
                  "nodeType": "VariableDeclaration",
                  "scope": 26,
                  "src": "397:18:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 23,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "397:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "322:94:0"
            },
            "src": "303:114:0"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 34,
            "name": "LogOwnerRemoved",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 33,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28,
                  "indexed": true,
                  "name": "identity",
                  "nodeType": "VariableDeclaration",
                  "scope": 34,
                  "src": "454:24:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "454:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 30,
                  "indexed": true,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 34,
                  "src": "488:21:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 29,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "488:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 32,
                  "indexed": false,
                  "name": "instigator",
                  "nodeType": "VariableDeclaration",
                  "scope": 34,
                  "src": "519:18:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 31,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "519:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "444:94:0"
            },
            "src": "423:116:0"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 42,
            "name": "LogRecoveryChanged",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 41,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36,
                  "indexed": true,
                  "name": "identity",
                  "nodeType": "VariableDeclaration",
                  "scope": 42,
                  "src": "579:24:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 35,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "579:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 38,
                  "indexed": true,
                  "name": "recoveryKey",
                  "nodeType": "VariableDeclaration",
                  "scope": 42,
                  "src": "613:27:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 37,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "613:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 40,
                  "indexed": false,
                  "name": "instigator",
                  "nodeType": "VariableDeclaration",
                  "scope": 42,
                  "src": "650:18:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 39,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "650:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "569:100:0"
            },
            "src": "545:125:0"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 50,
            "name": "LogMigrationInitiated",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 49,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44,
                  "indexed": true,
                  "name": "identity",
                  "nodeType": "VariableDeclaration",
                  "scope": 50,
                  "src": "713:24:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 43,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "713:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 46,
                  "indexed": true,
                  "name": "newIdManager",
                  "nodeType": "VariableDeclaration",
                  "scope": 50,
                  "src": "747:28:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 45,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "747:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 48,
                  "indexed": false,
                  "name": "instigator",
                  "nodeType": "VariableDeclaration",
                  "scope": 50,
                  "src": "785:18:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 47,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "785:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "703:101:0"
            },
            "src": "676:129:0"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 58,
            "name": "LogMigrationCanceled",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 57,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52,
                  "indexed": true,
                  "name": "identity",
                  "nodeType": "VariableDeclaration",
                  "scope": 58,
                  "src": "847:24:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 51,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "847:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 54,
                  "indexed": true,
                  "name": "newIdManager",
                  "nodeType": "VariableDeclaration",
                  "scope": 58,
                  "src": "881:28:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 53,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "881:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 56,
                  "indexed": false,
                  "name": "instigator",
                  "nodeType": "VariableDeclaration",
                  "scope": 58,
                  "src": "919:18:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 55,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "919:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "837:101:0"
            },
            "src": "811:128:0"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 66,
            "name": "LogMigrationFinalized",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 65,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60,
                  "indexed": true,
                  "name": "identity",
                  "nodeType": "VariableDeclaration",
                  "scope": 66,
                  "src": "982:24:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 59,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "982:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 62,
                  "indexed": true,
                  "name": "newIdManager",
                  "nodeType": "VariableDeclaration",
                  "scope": 66,
                  "src": "1016:28:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 61,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1016:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 64,
                  "indexed": false,
                  "name": "instigator",
                  "nodeType": "VariableDeclaration",
                  "scope": 66,
                  "src": "1054:18:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 63,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1054:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "972:101:0"
            },
            "src": "945:129:0"
          },
          {
            "constant": false,
            "id": 72,
            "name": "owners",
            "nodeType": "VariableDeclaration",
            "scope": 718,
            "src": "1080:51:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
              "typeString": "mapping(address => mapping(address => uint256))"
            },
            "typeName": {
              "id": 71,
              "keyType": {
                "id": 67,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1088:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "1080:44:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                "typeString": "mapping(address => mapping(address => uint256))"
              },
              "valueType": {
                "id": 70,
                "keyType": {
                  "id": 68,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1107:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "1099:24:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                  "typeString": "mapping(address => uint256)"
                },
                "valueType": {
                  "id": 69,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "1118:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 76,
            "name": "recoveryKeys",
            "nodeType": "VariableDeclaration",
            "scope": 718,
            "src": "1137:40:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
              "typeString": "mapping(address => address)"
            },
            "typeName": {
              "id": 75,
              "keyType": {
                "id": 73,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1145:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "1137:27:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                "typeString": "mapping(address => address)"
              },
              "valueType": {
                "id": 74,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1156:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 82,
            "name": "limiter",
            "nodeType": "VariableDeclaration",
            "scope": 718,
            "src": "1183:52:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
              "typeString": "mapping(address => mapping(address => uint256))"
            },
            "typeName": {
              "id": 81,
              "keyType": {
                "id": 77,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1191:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "1183:44:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                "typeString": "mapping(address => mapping(address => uint256))"
              },
              "valueType": {
                "id": 80,
                "keyType": {
                  "id": 78,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1210:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "1202:24:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                  "typeString": "mapping(address => uint256)"
                },
                "valueType": {
                  "id": 79,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "1221:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 86,
            "name": "migrationInitiated",
            "nodeType": "VariableDeclaration",
            "scope": 718,
            "src": "1241:50:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 85,
              "keyType": {
                "id": 83,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1249:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "1241:24:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 84,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "1260:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 90,
            "name": "migrationNewAddress",
            "nodeType": "VariableDeclaration",
            "scope": 718,
            "src": "1297:54:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
              "typeString": "mapping(address => address)"
            },
            "typeName": {
              "id": 89,
              "keyType": {
                "id": 87,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1305:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "1297:27:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                "typeString": "mapping(address => address)"
              },
              "valueType": {
                "id": 88,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1316:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 103,
              "nodeType": "Block",
              "src": "1395:66:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 96,
                            "name": "identity",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 92,
                            "src": "1421:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 97,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 920,
                              "src": "1431:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 98,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1431:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 95,
                          "name": "isOwner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 671,
                          "src": "1413:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_address_$_t_address_$returns$_t_bool_$",
                            "typeString": "function (address,address) view returns (bool)"
                          }
                        },
                        "id": 99,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1413:29:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 94,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        923,
                        924
                      ],
                      "referencedDeclaration": 923,
                      "src": "1405:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 100,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1405:38:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 101,
                  "nodeType": "ExpressionStatement",
                  "src": "1405:38:0"
                },
                {
                  "id": 102,
                  "nodeType": "PlaceholderStatement",
                  "src": "1453:1:0"
                }
              ]
            },
            "documentation": null,
            "id": 104,
            "name": "onlyOwner",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 93,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 92,
                  "name": "identity",
                  "nodeType": "VariableDeclaration",
                  "scope": 104,
                  "src": "1377:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 91,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1377:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1376:18:0"
            },
            "src": "1358:103:0",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 117,
              "nodeType": "Block",
              "src": "1509:71:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 110,
                            "name": "identity",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 106,
                            "src": "1540:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 111,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 920,
                              "src": "1550:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 112,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1550:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 109,
                          "name": "isOlderOwner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 701,
                          "src": "1527:12:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_address_$_t_address_$returns$_t_bool_$",
                            "typeString": "function (address,address) view returns (bool)"
                          }
                        },
                        "id": 113,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1527:34:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 108,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        923,
                        924
                      ],
                      "referencedDeclaration": 923,
                      "src": "1519:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 114,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1519:43:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 115,
                  "nodeType": "ExpressionStatement",
                  "src": "1519:43:0"
                },
                {
                  "id": 116,
                  "nodeType": "PlaceholderStatement",
                  "src": "1572:1:0"
                }
              ]
            },
            "documentation": null,
            "id": 118,
            "name": "onlyOlderOwner",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 107,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 106,
                  "name": "identity",
                  "nodeType": "VariableDeclaration",
                  "scope": 118,
                  "src": "1491:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 105,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1491:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1490:18:0"
            },
            "src": "1467:113:0",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 132,
              "nodeType": "Block",
              "src": "1626:73:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 128,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 123,
                            "name": "recoveryKeys",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 76,
                            "src": "1644:12:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                              "typeString": "mapping(address => address)"
                            }
                          },
                          "id": 125,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 124,
                            "name": "identity",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 120,
                            "src": "1657:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1644:22:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 126,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 920,
                            "src": "1670:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 127,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1670:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1644:36:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 122,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        923,
                        924
                      ],
                      "referencedDeclaration": 923,
                      "src": "1636:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 129,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1636:45:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 130,
                  "nodeType": "ExpressionStatement",
                  "src": "1636:45:0"
                },
                {
                  "id": 131,
                  "nodeType": "PlaceholderStatement",
                  "src": "1691:1:0"
                }
              ]
            },
            "documentation": null,
            "id": 133,
            "name": "onlyRecovery",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 121,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 120,
                  "name": "identity",
                  "nodeType": "VariableDeclaration",
                  "scope": 133,
                  "src": "1608:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 119,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1608:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1607:18:0"
            },
            "src": "1586:113:0",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 161,
              "nodeType": "Block",
              "src": "1744:131:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 148,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 138,
                              "name": "limiter",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 82,
                              "src": "1762:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                "typeString": "mapping(address => mapping(address => uint256))"
                              }
                            },
                            "id": 140,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 139,
                              "name": "identity",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 135,
                              "src": "1770:8:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "1762:17:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 143,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 141,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 920,
                              "src": "1780:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 142,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1780:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1762:29:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "argumentTypes": null,
                          "components": [
                            {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 146,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "id": 144,
                                "name": "now",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 922,
                                "src": "1795:3:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "-",
                              "rightExpression": {
                                "argumentTypes": null,
                                "id": 145,
                                "name": "adminRate",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 8,
                                "src": "1801:9:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "1795:15:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "id": 147,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "1794:17:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1762:49:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 137,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        923,
                        924
                      ],
                      "referencedDeclaration": 923,
                      "src": "1754:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 149,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1754:58:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 150,
                  "nodeType": "ExpressionStatement",
                  "src": "1754:58:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 158,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 151,
                          "name": "limiter",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 82,
                          "src": "1822:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                            "typeString": "mapping(address => mapping(address => uint256))"
                          }
                        },
                        "id": 155,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 152,
                          "name": "identity",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 135,
                          "src": "1830:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1822:17:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 156,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 153,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 920,
                          "src": "1840:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 154,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1840:10:0",
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
                      "src": "1822:29:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 157,
                      "name": "now",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 922,
                      "src": "1854:3:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1822:35:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 159,
                  "nodeType": "ExpressionStatement",
                  "src": "1822:35:0"
                },
                {
                  "id": 160,
                  "nodeType": "PlaceholderStatement",
                  "src": "1867:1:0"
                }
              ]
            },
            "documentation": null,
            "id": 162,
            "name": "rateLimited",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 136,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 135,
                  "name": "identity",
                  "nodeType": "VariableDeclaration",
                  "scope": 162,
                  "src": "1726:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 134,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1726:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1725:18:0"
            },
            "src": "1705:170:0",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 175,
              "nodeType": "Block",
              "src": "1917:92:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 171,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 167,
                          "name": "addr",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 164,
                          "src": "1972:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 169,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1988:1:0",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 168,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1980:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 170,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1980:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1972:18:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 166,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        923,
                        924
                      ],
                      "referencedDeclaration": 923,
                      "src": "1964:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 172,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1964:27:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 173,
                  "nodeType": "ExpressionStatement",
                  "src": "1964:27:0"
                },
                {
                  "id": 174,
                  "nodeType": "PlaceholderStatement",
                  "src": "2001:1:0"
                }
              ]
            },
            "documentation": null,
            "id": 176,
            "name": "validAddress",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 165,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 164,
                  "name": "addr",
                  "nodeType": "VariableDeclaration",
                  "scope": 176,
                  "src": "1903:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 163,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1903:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1902:14:0"
            },
            "src": "1881:128:0",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 203,
              "nodeType": "Block",
              "src": "2414:167:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 188,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 186,
                          "name": "_adminTimeLock",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 180,
                          "src": "2432:14:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 187,
                          "name": "_userTimeLock",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 178,
                          "src": "2450:13:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "2432:31:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 185,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        923,
                        924
                      ],
                      "referencedDeclaration": 923,
                      "src": "2424:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 189,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2424:40:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 190,
                  "nodeType": "ExpressionStatement",
                  "src": "2424:40:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 193,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 191,
                      "name": "adminTimeLock",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4,
                      "src": "2474:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 192,
                      "name": "_adminTimeLock",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 180,
                      "src": "2490:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2474:30:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 194,
                  "nodeType": "ExpressionStatement",
                  "src": "2474:30:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 197,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 195,
                      "name": "userTimeLock",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6,
                      "src": "2514:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 196,
                      "name": "_userTimeLock",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 178,
                      "src": "2529:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2514:28:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 198,
                  "nodeType": "ExpressionStatement",
                  "src": "2514:28:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 201,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 199,
                      "name": "adminRate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8,
                      "src": "2552:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 200,
                      "name": "_adminRate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 182,
                      "src": "2564:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2552:22:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 202,
                  "nodeType": "ExpressionStatement",
                  "src": "2552:22:0"
                }
              ]
            },
            "documentation": "@dev Contract constructor sets initial timelock limits\n @param _userTimeLock Time before new owner added by recovery can control proxy\n @param _adminTimeLock Time before new owner can add/remove owners\n @param _adminRate Time period used for rate limiting a given key for admin functionality",
            "id": 204,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 183,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 178,
                  "name": "_userTimeLock",
                  "nodeType": "VariableDeclaration",
                  "scope": 204,
                  "src": "2349:18:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 177,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2349:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 180,
                  "name": "_adminTimeLock",
                  "nodeType": "VariableDeclaration",
                  "scope": 204,
                  "src": "2369:19:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 179,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2369:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 182,
                  "name": "_adminRate",
                  "nodeType": "VariableDeclaration",
                  "scope": 204,
                  "src": "2390:15:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 181,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2390:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2348:58:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 184,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2414:0:0"
            },
            "scope": 718,
            "src": "2336:245:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 244,
              "nodeType": "Block",
              "src": "2952:293:0",
              "statements": [
                {
                  "assignments": [
                    215
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 215,
                      "name": "identity",
                      "nodeType": "VariableDeclaration",
                      "scope": 245,
                      "src": "2962:14:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Proxy_$849",
                        "typeString": "contract Proxy"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 214,
                        "name": "Proxy",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 849,
                        "src": "2962:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 219,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 217,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "2979:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_creation_nonpayable$__$returns$_t_contract$_Proxy_$849_$",
                        "typeString": "function () returns (contract Proxy)"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 216,
                        "name": "Proxy",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 849,
                        "src": "2983:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        }
                      }
                    },
                    "id": 218,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2979:11:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Proxy_$849",
                      "typeString": "contract Proxy"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2962:28:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 228,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 220,
                          "name": "owners",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 72,
                          "src": "3000:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                            "typeString": "mapping(address => mapping(address => uint256))"
                          }
                        },
                        "id": 223,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 221,
                          "name": "identity",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 215,
                          "src": "3007:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_Proxy_$849",
                            "typeString": "contract Proxy"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "3000:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 224,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 222,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 206,
                        "src": "3017:5:0",
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
                      "src": "3000:23:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 227,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 225,
                        "name": "now",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 922,
                        "src": "3026:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "-",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 226,
                        "name": "adminTimeLock",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4,
                        "src": "3032:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "3026:19:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3000:45:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 229,
                  "nodeType": "ExpressionStatement",
                  "src": "3000:45:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 234,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 230,
                        "name": "recoveryKeys",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 76,
                        "src": "3127:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                          "typeString": "mapping(address => address)"
                        }
                      },
                      "id": 232,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 231,
                        "name": "identity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 215,
                        "src": "3140:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "3127:22:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 233,
                      "name": "recoveryKey",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 208,
                      "src": "3152:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "3127:36:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 235,
                  "nodeType": "ExpressionStatement",
                  "src": "3127:36:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 237,
                        "name": "identity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 215,
                        "src": "3197:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 238,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 920,
                          "src": "3207:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 239,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "3207:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 240,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 206,
                        "src": "3219:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 241,
                        "name": "recoveryKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 208,
                        "src": "3226:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 236,
                      "name": "LogIdentityCreated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18,
                      "src": "3178:18:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address,address,address)"
                      }
                    },
                    "id": 242,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3178:60:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 243,
                  "nodeType": "EmitStatement",
                  "src": "3173:65:0"
                }
              ]
            },
            "documentation": "@dev Creates a new proxy contract for an owner and recovery\n @param owner Key who can use this contract to control proxy. Given full power\n @param recoveryKey Key of recovery network or address from seed to recovery proxy\n Gas cost of 289,311",
            "id": 245,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 211,
                    "name": "recoveryKey",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 208,
                    "src": "2939:11:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 212,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 210,
                  "name": "validAddress",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 176,
                  "src": "2926:12:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2926:25:0"
              }
            ],
            "name": "createIdentity",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 209,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 206,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 245,
                  "src": "2883:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 205,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2883:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 208,
                  "name": "recoveryKey",
                  "nodeType": "VariableDeclaration",
                  "scope": 245,
                  "src": "2898:19:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 207,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2898:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2882:36:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 213,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2952:0:0"
            },
            "scope": 718,
            "src": "2859:386:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 297,
              "nodeType": "Block",
              "src": "3867:341:0",
              "statements": [
                {
                  "assignments": [
                    260
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 260,
                      "name": "identity",
                      "nodeType": "VariableDeclaration",
                      "scope": 298,
                      "src": "3877:14:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Proxy_$849",
                        "typeString": "contract Proxy"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 259,
                        "name": "Proxy",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 849,
                        "src": "3877:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 264,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 262,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "3894:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_creation_nonpayable$__$returns$_t_contract$_Proxy_$849_$",
                        "typeString": "function () returns (contract Proxy)"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 261,
                        "name": "Proxy",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 849,
                        "src": "3898:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        }
                      }
                    },
                    "id": 263,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3894:11:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Proxy_$849",
                      "typeString": "contract Proxy"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3877:28:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 273,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 265,
                          "name": "owners",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 72,
                          "src": "3915:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                            "typeString": "mapping(address => mapping(address => uint256))"
                          }
                        },
                        "id": 268,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 266,
                          "name": "identity",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 260,
                          "src": "3922:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_Proxy_$849",
                            "typeString": "contract Proxy"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "3915:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 269,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 267,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 247,
                        "src": "3932:5:0",
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
                      "src": "3915:23:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 272,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 270,
                        "name": "now",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 922,
                        "src": "3941:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "-",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 271,
                        "name": "adminTimeLock",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4,
                        "src": "3947:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "3941:19:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3915:45:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 274,
                  "nodeType": "ExpressionStatement",
                  "src": "3915:45:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 279,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 275,
                        "name": "recoveryKeys",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 76,
                        "src": "4042:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                          "typeString": "mapping(address => address)"
                        }
                      },
                      "id": 277,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 276,
                        "name": "identity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 260,
                        "src": "4055:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "4042:22:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 278,
                      "name": "recoveryKey",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 249,
                      "src": "4067:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "4042:36:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 280,
                  "nodeType": "ExpressionStatement",
                  "src": "4042:36:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 282,
                        "name": "identity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 260,
                        "src": "4112:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 283,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 920,
                          "src": "4122:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 284,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "4122:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 285,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 247,
                        "src": "4134:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 286,
                        "name": "recoveryKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 249,
                        "src": "4141:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 281,
                      "name": "LogIdentityCreated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18,
                      "src": "4093:18:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address,address,address)"
                      }
                    },
                    "id": 287,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4093:60:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 288,
                  "nodeType": "EmitStatement",
                  "src": "4088:65:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 292,
                        "name": "destination",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 251,
                        "src": "4180:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "30",
                        "id": 293,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4193:1:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      {
                        "argumentTypes": null,
                        "id": 294,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 253,
                        "src": "4196:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 289,
                        "name": "identity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 260,
                        "src": "4163:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        }
                      },
                      "id": 291,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "forward",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 835,
                      "src": "4163:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,uint256,bytes memory) external"
                      }
                    },
                    "id": 295,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4163:38:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 296,
                  "nodeType": "ExpressionStatement",
                  "src": "4163:38:0"
                }
              ]
            },
            "documentation": "@dev Creates a new proxy contract for an owner and recovery and allows an initial forward call which would be to set the registry in our case\n @param owner Key who can use this contract to control proxy. Given full power\n @param recoveryKey Key of recovery network or address from seed to recovery proxy\n @param destination Address of contract to be called after proxy is created\n @param data of function to be called at the destination contract",
            "id": 298,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 256,
                    "name": "recoveryKey",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 249,
                    "src": "3854:11:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 257,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 255,
                  "name": "validAddress",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 176,
                  "src": "3841:12:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "3841:25:0"
              }
            ],
            "name": "createIdentityWithCall",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 254,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 247,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 298,
                  "src": "3765:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 246,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3765:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 249,
                  "name": "recoveryKey",
                  "nodeType": "VariableDeclaration",
                  "scope": 298,
                  "src": "3780:19:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 248,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3780:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 251,
                  "name": "destination",
                  "nodeType": "VariableDeclaration",
                  "scope": 298,
                  "src": "3801:19:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 250,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3801:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 253,
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "scope": 298,
                  "src": "3822:10:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 252,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "3822:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3764:69:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 258,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3867:0:0"
            },
            "scope": 718,
            "src": "3733:475:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 344,
              "nodeType": "Block",
              "src": "4674:344:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 314,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 309,
                            "name": "recoveryKeys",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 76,
                            "src": "4692:12:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                              "typeString": "mapping(address => address)"
                            }
                          },
                          "id": 312,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 310,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 920,
                              "src": "4705:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 311,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "4705:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "4692:24:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 313,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4720:1:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "4692:29:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 308,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        923,
                        924
                      ],
                      "referencedDeclaration": 923,
                      "src": "4684:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 315,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4684:38:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 316,
                  "nodeType": "ExpressionStatement",
                  "src": "4684:38:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 326,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 317,
                          "name": "owners",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 72,
                          "src": "4767:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                            "typeString": "mapping(address => mapping(address => uint256))"
                          }
                        },
                        "id": 321,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 318,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 920,
                            "src": "4774:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 319,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "4774:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "4767:18:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 322,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 320,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 300,
                        "src": "4786:5:0",
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
                      "src": "4767:25:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 325,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 323,
                        "name": "now",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 922,
                        "src": "4795:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "-",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 324,
                        "name": "adminTimeLock",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4,
                        "src": "4801:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "4795:19:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4767:47:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 327,
                  "nodeType": "ExpressionStatement",
                  "src": "4767:47:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 333,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 328,
                        "name": "recoveryKeys",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 76,
                        "src": "4896:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                          "typeString": "mapping(address => address)"
                        }
                      },
                      "id": 331,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 329,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 920,
                          "src": "4909:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 330,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "4909:10:0",
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
                      "src": "4896:24:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 332,
                      "name": "recoveryKey",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 302,
                      "src": "4923:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "4896:38:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 334,
                  "nodeType": "ExpressionStatement",
                  "src": "4896:38:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 336,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 920,
                          "src": "4968:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 337,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "4968:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 338,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 920,
                          "src": "4980:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 339,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "4980:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 340,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 300,
                        "src": "4992:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 341,
                        "name": "recoveryKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 302,
                        "src": "4999:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 335,
                      "name": "LogIdentityCreated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18,
                      "src": "4949:18:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address,address,address)"
                      }
                    },
                    "id": 342,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4949:62:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 343,
                  "nodeType": "EmitStatement",
                  "src": "4944:67:0"
                }
              ]
            },
            "documentation": "@dev Allows a user to transfer control of existing proxy to this contract. Must come through proxy\n @param owner Key who can use this contract to control proxy. Given full power\n @param recoveryKey Key of recovery network or address from seed to recovery proxy\n Note: User must change owner of proxy to this contract after calling this",
            "id": 345,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 305,
                    "name": "recoveryKey",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 302,
                    "src": "4661:11:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 306,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 304,
                  "name": "validAddress",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 176,
                  "src": "4648:12:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "4648:25:0"
              }
            ],
            "name": "registerIdentity",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 303,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 300,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 345,
                  "src": "4605:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 299,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4605:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 302,
                  "name": "recoveryKey",
                  "nodeType": "VariableDeclaration",
                  "scope": 345,
                  "src": "4620:19:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 301,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4620:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4604:36:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 307,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4674:0:0"
            },
            "scope": 718,
            "src": "4579:439:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 367,
              "nodeType": "Block",
              "src": "5197:59:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 362,
                        "name": "destination",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 349,
                        "src": "5224:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 363,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 351,
                        "src": "5237:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 364,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 353,
                        "src": "5244:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 359,
                        "name": "identity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 347,
                        "src": "5207:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        }
                      },
                      "id": 361,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "forward",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 835,
                      "src": "5207:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,uint256,bytes memory) external"
                      }
                    },
                    "id": 365,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5207:42:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 366,
                  "nodeType": "ExpressionStatement",
                  "src": "5207:42:0"
                }
              ]
            },
            "documentation": "@dev Allows a user to forward a call through their proxy.",
            "id": 368,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 356,
                    "name": "identity",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 347,
                    "src": "5187:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Proxy_$849",
                      "typeString": "contract Proxy"
                    }
                  }
                ],
                "id": 357,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 355,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 104,
                  "src": "5177:9:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "5177:19:0"
              }
            ],
            "name": "forwardTo",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 354,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 347,
                  "name": "identity",
                  "nodeType": "VariableDeclaration",
                  "scope": 368,
                  "src": "5109:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_Proxy_$849",
                    "typeString": "contract Proxy"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 346,
                    "name": "Proxy",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 849,
                    "src": "5109:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Proxy_$849",
                      "typeString": "contract Proxy"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 349,
                  "name": "destination",
                  "nodeType": "VariableDeclaration",
                  "scope": 368,
                  "src": "5125:19:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 348,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5125:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 351,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 368,
                  "src": "5146:10:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 350,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "5146:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 353,
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "scope": 368,
                  "src": "5158:10:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 352,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "5158:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5108:61:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 358,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5197:0:0"
            },
            "scope": 718,
            "src": "5090:166:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 406,
              "nodeType": "Block",
              "src": "5431:171:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 386,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "5449:28:0",
                        "subExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 383,
                              "name": "identity",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 370,
                              "src": "5458:8:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_Proxy_$849",
                                "typeString": "contract Proxy"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 384,
                              "name": "newOwner",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 372,
                              "src": "5468:8:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_Proxy_$849",
                                "typeString": "contract Proxy"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 382,
                            "name": "isOwner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 671,
                            "src": "5450:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_address_$_t_address_$returns$_t_bool_$",
                              "typeString": "function (address,address) view returns (bool)"
                            }
                          },
                          "id": 385,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5450:27:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 381,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        923,
                        924
                      ],
                      "referencedDeclaration": 923,
                      "src": "5441:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 387,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5441:37:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 388,
                  "nodeType": "ExpressionStatement",
                  "src": "5441:37:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 397,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 389,
                          "name": "owners",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 72,
                          "src": "5488:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                            "typeString": "mapping(address => mapping(address => uint256))"
                          }
                        },
                        "id": 392,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 390,
                          "name": "identity",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 370,
                          "src": "5495:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_Proxy_$849",
                            "typeString": "contract Proxy"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "5488:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 393,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 391,
                        "name": "newOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 372,
                        "src": "5505:8:0",
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
                      "src": "5488:26:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 396,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 394,
                        "name": "now",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 922,
                        "src": "5517:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "-",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 395,
                        "name": "userTimeLock",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6,
                        "src": "5523:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "5517:18:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5488:47:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 398,
                  "nodeType": "ExpressionStatement",
                  "src": "5488:47:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 400,
                        "name": "identity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 370,
                        "src": "5564:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 401,
                        "name": "newOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 372,
                        "src": "5574:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 402,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 920,
                          "src": "5584:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 403,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "5584:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 399,
                      "name": "LogOwnerAdded",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26,
                      "src": "5550:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address,address)"
                      }
                    },
                    "id": 404,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5550:45:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 405,
                  "nodeType": "EmitStatement",
                  "src": "5545:50:0"
                }
              ]
            },
            "documentation": "@dev Allows an olderOwner to add a new owner instantly",
            "id": 407,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 375,
                    "name": "identity",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 370,
                    "src": "5399:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Proxy_$849",
                      "typeString": "contract Proxy"
                    }
                  }
                ],
                "id": 376,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 374,
                  "name": "onlyOlderOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 118,
                  "src": "5384:14:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "5384:24:0"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 378,
                    "name": "identity",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 370,
                    "src": "5421:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Proxy_$849",
                      "typeString": "contract Proxy"
                    }
                  }
                ],
                "id": 379,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 377,
                  "name": "rateLimited",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 162,
                  "src": "5409:11:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "5409:21:0"
              }
            ],
            "name": "addOwner",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 373,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 370,
                  "name": "identity",
                  "nodeType": "VariableDeclaration",
                  "scope": 407,
                  "src": "5343:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_Proxy_$849",
                    "typeString": "contract Proxy"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 369,
                    "name": "Proxy",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 849,
                    "src": "5343:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Proxy_$849",
                      "typeString": "contract Proxy"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 372,
                  "name": "newOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 407,
                  "src": "5359:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 371,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5359:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5342:34:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 380,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5431:0:0"
            },
            "scope": 718,
            "src": "5325:277:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 443,
              "nodeType": "Block",
              "src": "5808:156:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 425,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "5826:28:0",
                        "subExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 422,
                              "name": "identity",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 409,
                              "src": "5835:8:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_Proxy_$849",
                                "typeString": "contract Proxy"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 423,
                              "name": "newOwner",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 411,
                              "src": "5845:8:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_Proxy_$849",
                                "typeString": "contract Proxy"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 421,
                            "name": "isOwner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 671,
                            "src": "5827:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_address_$_t_address_$returns$_t_bool_$",
                              "typeString": "function (address,address) view returns (bool)"
                            }
                          },
                          "id": 424,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5827:27:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 420,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        923,
                        924
                      ],
                      "referencedDeclaration": 923,
                      "src": "5818:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 426,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5818:37:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 427,
                  "nodeType": "ExpressionStatement",
                  "src": "5818:37:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 434,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 428,
                          "name": "owners",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 72,
                          "src": "5865:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                            "typeString": "mapping(address => mapping(address => uint256))"
                          }
                        },
                        "id": 431,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 429,
                          "name": "identity",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 409,
                          "src": "5872:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_Proxy_$849",
                            "typeString": "contract Proxy"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "5865:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 432,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 430,
                        "name": "newOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 411,
                        "src": "5882:8:0",
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
                      "src": "5865:26:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 433,
                      "name": "now",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 922,
                      "src": "5894:3:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5865:32:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 435,
                  "nodeType": "ExpressionStatement",
                  "src": "5865:32:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 437,
                        "name": "identity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 409,
                        "src": "5926:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 438,
                        "name": "newOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 411,
                        "src": "5936:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 439,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 920,
                          "src": "5946:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 440,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "5946:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 436,
                      "name": "LogOwnerAdded",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26,
                      "src": "5912:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address,address)"
                      }
                    },
                    "id": 441,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5912:45:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 442,
                  "nodeType": "EmitStatement",
                  "src": "5907:50:0"
                }
              ]
            },
            "documentation": "@dev Allows a recoveryKey to add a new owner with userTimeLock waiting time",
            "id": 444,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 414,
                    "name": "identity",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 409,
                    "src": "5776:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Proxy_$849",
                      "typeString": "contract Proxy"
                    }
                  }
                ],
                "id": 415,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 413,
                  "name": "onlyRecovery",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 133,
                  "src": "5763:12:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "5763:22:0"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 417,
                    "name": "identity",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 409,
                    "src": "5798:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Proxy_$849",
                      "typeString": "contract Proxy"
                    }
                  }
                ],
                "id": 418,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 416,
                  "name": "rateLimited",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 162,
                  "src": "5786:11:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "5786:21:0"
              }
            ],
            "name": "addOwnerFromRecovery",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 412,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 409,
                  "name": "identity",
                  "nodeType": "VariableDeclaration",
                  "scope": 444,
                  "src": "5722:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_Proxy_$849",
                    "typeString": "contract Proxy"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 408,
                    "name": "Proxy",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 849,
                    "src": "5722:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Proxy_$849",
                      "typeString": "contract Proxy"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 411,
                  "name": "newOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 444,
                  "src": "5738:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 410,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5738:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5721:34:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 419,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5808:0:0"
            },
            "scope": 718,
            "src": "5692:272:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 478,
              "nodeType": "Block",
              "src": "6139:203:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 461,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 458,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 920,
                            "src": "6216:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 459,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "6216:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 460,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 448,
                          "src": "6230:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "6216:19:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 457,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        923,
                        924
                      ],
                      "referencedDeclaration": 923,
                      "src": "6208:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 462,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6208:28:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 463,
                  "nodeType": "ExpressionStatement",
                  "src": "6208:28:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 469,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "6246:30:0",
                    "subExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 464,
                          "name": "owners",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 72,
                          "src": "6253:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                            "typeString": "mapping(address => mapping(address => uint256))"
                          }
                        },
                        "id": 466,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 465,
                          "name": "identity",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 446,
                          "src": "6260:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_Proxy_$849",
                            "typeString": "contract Proxy"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "6253:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 468,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 467,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 448,
                        "src": "6270:5:0",
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
                      "src": "6253:23:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 470,
                  "nodeType": "ExpressionStatement",
                  "src": "6246:30:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 472,
                        "name": "identity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 446,
                        "src": "6307:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 473,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 448,
                        "src": "6317:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 474,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 920,
                          "src": "6324:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 475,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "6324:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 471,
                      "name": "LogOwnerRemoved",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34,
                      "src": "6291:15:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address,address)"
                      }
                    },
                    "id": 476,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6291:44:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 477,
                  "nodeType": "EmitStatement",
                  "src": "6286:49:0"
                }
              ]
            },
            "documentation": "@dev Allows an owner to remove another owner instantly",
            "id": 479,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 451,
                    "name": "identity",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 446,
                    "src": "6107:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Proxy_$849",
                      "typeString": "contract Proxy"
                    }
                  }
                ],
                "id": 452,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 450,
                  "name": "onlyOlderOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 118,
                  "src": "6092:14:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "6092:24:0"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 454,
                    "name": "identity",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 446,
                    "src": "6129:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Proxy_$849",
                      "typeString": "contract Proxy"
                    }
                  }
                ],
                "id": 455,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 453,
                  "name": "rateLimited",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 162,
                  "src": "6117:11:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "6117:21:0"
              }
            ],
            "name": "removeOwner",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 449,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 446,
                  "name": "identity",
                  "nodeType": "VariableDeclaration",
                  "scope": 479,
                  "src": "6054:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_Proxy_$849",
                    "typeString": "contract Proxy"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 445,
                    "name": "Proxy",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 849,
                    "src": "6054:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Proxy_$849",
                      "typeString": "contract Proxy"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 448,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 479,
                  "src": "6070:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 447,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6070:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6053:31:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 456,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6139:0:0"
            },
            "scope": 718,
            "src": "6033:309:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 508,
              "nodeType": "Block",
              "src": "6570:121:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 499,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 495,
                        "name": "recoveryKeys",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 76,
                        "src": "6580:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                          "typeString": "mapping(address => address)"
                        }
                      },
                      "id": 497,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 496,
                        "name": "identity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 481,
                        "src": "6593:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "6580:22:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 498,
                      "name": "recoveryKey",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 483,
                      "src": "6605:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "6580:36:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 500,
                  "nodeType": "ExpressionStatement",
                  "src": "6580:36:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 502,
                        "name": "identity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 481,
                        "src": "6650:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 503,
                        "name": "recoveryKey",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 483,
                        "src": "6660:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 504,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 920,
                          "src": "6673:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 505,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "6673:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 501,
                      "name": "LogRecoveryChanged",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 42,
                      "src": "6631:18:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address,address)"
                      }
                    },
                    "id": 506,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6631:53:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 507,
                  "nodeType": "EmitStatement",
                  "src": "6626:58:0"
                }
              ]
            },
            "documentation": "@dev Allows an owner to change the recoveryKey instantly",
            "id": 509,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 486,
                    "name": "identity",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 481,
                    "src": "6500:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Proxy_$849",
                      "typeString": "contract Proxy"
                    }
                  }
                ],
                "id": 487,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 485,
                  "name": "onlyOlderOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 118,
                  "src": "6485:14:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "6485:24:0"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 489,
                    "name": "identity",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 481,
                    "src": "6526:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Proxy_$849",
                      "typeString": "contract Proxy"
                    }
                  }
                ],
                "id": 490,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 488,
                  "name": "rateLimited",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 162,
                  "src": "6514:11:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "6514:21:0"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 492,
                    "name": "recoveryKey",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 483,
                    "src": "6553:11:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 493,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 491,
                  "name": "validAddress",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 176,
                  "src": "6540:12:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "6540:25:0"
              }
            ],
            "name": "changeRecovery",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 484,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 481,
                  "name": "identity",
                  "nodeType": "VariableDeclaration",
                  "scope": 509,
                  "src": "6437:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_Proxy_$849",
                    "typeString": "contract Proxy"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 480,
                    "name": "Proxy",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 849,
                    "src": "6437:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Proxy_$849",
                      "typeString": "contract Proxy"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 483,
                  "name": "recoveryKey",
                  "nodeType": "VariableDeclaration",
                  "scope": 509,
                  "src": "6453:19:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 482,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6453:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6436:37:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 494,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6570:0:0"
            },
            "scope": 718,
            "src": "6413:278:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 541,
              "nodeType": "Block",
              "src": "6923:177:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 526,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 522,
                        "name": "migrationInitiated",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 86,
                        "src": "6933:18:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 524,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 523,
                        "name": "identity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 511,
                        "src": "6952:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "6933:28:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 525,
                      "name": "now",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 922,
                      "src": "6964:3:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6933:34:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 527,
                  "nodeType": "ExpressionStatement",
                  "src": "6933:34:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 532,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 528,
                        "name": "migrationNewAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 90,
                        "src": "6977:19:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                          "typeString": "mapping(address => address)"
                        }
                      },
                      "id": 530,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 529,
                        "name": "identity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 511,
                        "src": "6997:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "6977:29:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 531,
                      "name": "newIdManager",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 513,
                      "src": "7009:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "6977:44:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 533,
                  "nodeType": "ExpressionStatement",
                  "src": "6977:44:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 535,
                        "name": "identity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 511,
                        "src": "7058:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 536,
                        "name": "newIdManager",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 513,
                        "src": "7068:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 537,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 920,
                          "src": "7082:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 538,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "7082:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 534,
                      "name": "LogMigrationInitiated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50,
                      "src": "7036:21:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address,address)"
                      }
                    },
                    "id": 539,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7036:57:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 540,
                  "nodeType": "EmitStatement",
                  "src": "7031:62:0"
                }
              ]
            },
            "documentation": "@dev Allows an owner to begin process of transfering proxy to new IdentityManager",
            "id": 542,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 516,
                    "name": "identity",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 511,
                    "src": "6878:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Proxy_$849",
                      "typeString": "contract Proxy"
                    }
                  }
                ],
                "id": 517,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 515,
                  "name": "onlyOlderOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 118,
                  "src": "6863:14:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "6863:24:0"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 519,
                    "name": "newIdManager",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 513,
                    "src": "6905:12:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 520,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 518,
                  "name": "validAddress",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 176,
                  "src": "6892:12:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "6892:26:0"
              }
            ],
            "name": "initiateMigration",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 514,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 511,
                  "name": "identity",
                  "nodeType": "VariableDeclaration",
                  "scope": 542,
                  "src": "6814:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_Proxy_$849",
                    "typeString": "contract Proxy"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 510,
                    "name": "Proxy",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 849,
                    "src": "6814:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Proxy_$849",
                      "typeString": "contract Proxy"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 513,
                  "name": "newIdManager",
                  "nodeType": "VariableDeclaration",
                  "scope": 542,
                  "src": "6830:20:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 512,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6830:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6813:38:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 521,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6923:0:0"
            },
            "scope": 718,
            "src": "6787:313:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 573,
              "nodeType": "Block",
              "src": "7269:237:0",
              "statements": [
                {
                  "assignments": [
                    551
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 551,
                      "name": "canceledManager",
                      "nodeType": "VariableDeclaration",
                      "scope": 574,
                      "src": "7279:23:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 550,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "7279:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 555,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 552,
                      "name": "migrationNewAddress",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 90,
                      "src": "7305:19:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                        "typeString": "mapping(address => address)"
                      }
                    },
                    "id": 554,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 553,
                      "name": "identity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 544,
                      "src": "7325:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Proxy_$849",
                        "typeString": "contract Proxy"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "7305:29:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7279:55:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 559,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "7344:35:0",
                    "subExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 556,
                        "name": "migrationInitiated",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 86,
                        "src": "7351:18:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 558,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 557,
                        "name": "identity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 544,
                        "src": "7370:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "7351:28:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 560,
                  "nodeType": "ExpressionStatement",
                  "src": "7344:35:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 564,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "7389:36:0",
                    "subExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 561,
                        "name": "migrationNewAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 90,
                        "src": "7396:19:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                          "typeString": "mapping(address => address)"
                        }
                      },
                      "id": 563,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 562,
                        "name": "identity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 544,
                        "src": "7416:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "7396:29:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 565,
                  "nodeType": "ExpressionStatement",
                  "src": "7389:36:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 567,
                        "name": "identity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 544,
                        "src": "7461:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 568,
                        "name": "canceledManager",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 551,
                        "src": "7471:15:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 569,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 920,
                          "src": "7488:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 570,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "7488:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 566,
                      "name": "LogMigrationCanceled",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 58,
                      "src": "7440:20:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address,address)"
                      }
                    },
                    "id": 571,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7440:59:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 572,
                  "nodeType": "EmitStatement",
                  "src": "7435:64:0"
                }
              ]
            },
            "documentation": "@dev Allows an owner to cancel the process of transfering proxy to new IdentityManager",
            "id": 574,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 547,
                    "name": "identity",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 544,
                    "src": "7259:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Proxy_$849",
                      "typeString": "contract Proxy"
                    }
                  }
                ],
                "id": 548,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 546,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 104,
                  "src": "7249:9:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "7249:19:0"
              }
            ],
            "name": "cancelMigration",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 545,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 544,
                  "name": "identity",
                  "nodeType": "VariableDeclaration",
                  "scope": 574,
                  "src": "7226:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_Proxy_$849",
                    "typeString": "contract Proxy"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 543,
                    "name": "Proxy",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 849,
                    "src": "7226:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Proxy_$849",
                      "typeString": "contract Proxy"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "7225:16:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 549,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7269:0:0"
            },
            "scope": 718,
            "src": "7201:305:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 640,
              "nodeType": "Block",
              "src": "7836:598:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 595,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 587,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 583,
                              "name": "migrationInitiated",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 86,
                              "src": "7854:18:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 585,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 584,
                              "name": "identity",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 576,
                              "src": "7873:8:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_Proxy_$849",
                                "typeString": "contract Proxy"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "7854:28:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "!=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 586,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7886:1:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "7854:33:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&&",
                        "rightExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 594,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 592,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 588,
                                "name": "migrationInitiated",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 86,
                                "src": "7891:18:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                  "typeString": "mapping(address => uint256)"
                                }
                              },
                              "id": 590,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 589,
                                "name": "identity",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 576,
                                "src": "7910:8:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_Proxy_$849",
                                  "typeString": "contract Proxy"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "7891:28:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "+",
                            "rightExpression": {
                              "argumentTypes": null,
                              "id": 591,
                              "name": "adminTimeLock",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4,
                              "src": "7922:13:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "7891:44:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 593,
                            "name": "now",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 922,
                            "src": "7938:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "7891:50:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "7854:87:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 582,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        923,
                        924
                      ],
                      "referencedDeclaration": 923,
                      "src": "7846:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 596,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7846:96:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 597,
                  "nodeType": "ExpressionStatement",
                  "src": "7846:96:0"
                },
                {
                  "assignments": [
                    599
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 599,
                      "name": "newIdManager",
                      "nodeType": "VariableDeclaration",
                      "scope": 641,
                      "src": "7952:20:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 598,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "7952:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 603,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 600,
                      "name": "migrationNewAddress",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 90,
                      "src": "7975:19:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                        "typeString": "mapping(address => address)"
                      }
                    },
                    "id": 602,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 601,
                      "name": "identity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 576,
                      "src": "7995:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Proxy_$849",
                        "typeString": "contract Proxy"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "7975:29:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7952:52:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 607,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "8014:35:0",
                    "subExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 604,
                        "name": "migrationInitiated",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 86,
                        "src": "8021:18:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 606,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 605,
                        "name": "identity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 576,
                        "src": "8040:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "8021:28:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 608,
                  "nodeType": "ExpressionStatement",
                  "src": "8014:35:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 612,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "8059:36:0",
                    "subExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 609,
                        "name": "migrationNewAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 90,
                        "src": "8066:19:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                          "typeString": "mapping(address => address)"
                        }
                      },
                      "id": 611,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 610,
                        "name": "identity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 576,
                        "src": "8086:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "8066:29:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 613,
                  "nodeType": "ExpressionStatement",
                  "src": "8059:36:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 617,
                        "name": "newIdManager",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 599,
                        "src": "8123:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 614,
                        "name": "identity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 576,
                        "src": "8105:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        }
                      },
                      "id": 616,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 904,
                      "src": "8105:17:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address) external"
                      }
                    },
                    "id": 618,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8105:31:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 619,
                  "nodeType": "ExpressionStatement",
                  "src": "8105:31:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 623,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "8146:29:0",
                    "subExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 620,
                        "name": "recoveryKeys",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 76,
                        "src": "8153:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                          "typeString": "mapping(address => address)"
                        }
                      },
                      "id": 622,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 621,
                        "name": "identity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 576,
                        "src": "8166:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "8153:22:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 624,
                  "nodeType": "ExpressionStatement",
                  "src": "8146:29:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 631,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "8320:35:0",
                    "subExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 625,
                          "name": "owners",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 72,
                          "src": "8327:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                            "typeString": "mapping(address => mapping(address => uint256))"
                          }
                        },
                        "id": 627,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 626,
                          "name": "identity",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 576,
                          "src": "8334:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_Proxy_$849",
                            "typeString": "contract Proxy"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "8327:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 630,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 628,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 920,
                          "src": "8344:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 629,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "8344:10:0",
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
                      "src": "8327:28:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 632,
                  "nodeType": "ExpressionStatement",
                  "src": "8320:35:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 634,
                        "name": "identity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 576,
                        "src": "8392:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 635,
                        "name": "newIdManager",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 599,
                        "src": "8402:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 636,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 920,
                          "src": "8416:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 637,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "8416:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_Proxy_$849",
                          "typeString": "contract Proxy"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 633,
                      "name": "LogMigrationFinalized",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66,
                      "src": "8370:21:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address,address)"
                      }
                    },
                    "id": 638,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8370:57:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 639,
                  "nodeType": "EmitStatement",
                  "src": "8365:62:0"
                }
              ]
            },
            "documentation": "@dev Allows an owner to finalize migration once adminTimeLock time has passed\n WARNING: before transfering to a new address, make sure this address is \"ready to recieve\" the proxy.\n Not doing so risks the proxy becoming stuck.",
            "id": 641,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 579,
                    "name": "identity",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 576,
                    "src": "7826:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Proxy_$849",
                      "typeString": "contract Proxy"
                    }
                  }
                ],
                "id": 580,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 578,
                  "name": "onlyOlderOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 118,
                  "src": "7811:14:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "7811:24:0"
              }
            ],
            "name": "finalizeMigration",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 577,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 576,
                  "name": "identity",
                  "nodeType": "VariableDeclaration",
                  "scope": 641,
                  "src": "7788:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_Proxy_$849",
                    "typeString": "contract Proxy"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 575,
                    "name": "Proxy",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 849,
                    "src": "7788:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Proxy_$849",
                      "typeString": "contract Proxy"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "7787:16:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 581,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7836:0:0"
            },
            "scope": 718,
            "src": "7761:673:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 670,
              "nodeType": "Block",
              "src": "8521:104:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 667,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 656,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 650,
                                "name": "owners",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 72,
                                "src": "8539:6:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                  "typeString": "mapping(address => mapping(address => uint256))"
                                }
                              },
                              "id": 652,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 651,
                                "name": "identity",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 643,
                                "src": "8546:8:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "8539:16:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 654,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 653,
                              "name": "owner",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 645,
                              "src": "8556:5:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "8539:23:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 655,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8565:1:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "8539:27:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&&",
                        "rightExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 666,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "components": [
                              {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 663,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "baseExpression": {
                                      "argumentTypes": null,
                                      "id": 657,
                                      "name": "owners",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 72,
                                      "src": "8571:6:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                        "typeString": "mapping(address => mapping(address => uint256))"
                                      }
                                    },
                                    "id": 659,
                                    "indexExpression": {
                                      "argumentTypes": null,
                                      "id": 658,
                                      "name": "identity",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 643,
                                      "src": "8578:8:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "IndexAccess",
                                    "src": "8571:16:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                      "typeString": "mapping(address => uint256)"
                                    }
                                  },
                                  "id": 661,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 660,
                                    "name": "owner",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 645,
                                    "src": "8588:5:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "8571:23:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "+",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "id": 662,
                                  "name": "userTimeLock",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 6,
                                  "src": "8597:12:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "8571:38:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 664,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "8570:40:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 665,
                            "name": "now",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 922,
                            "src": "8614:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "8570:47:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "8539:78:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "id": 668,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "8538:80:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 649,
                  "id": 669,
                  "nodeType": "Return",
                  "src": "8531:87:0"
                }
              ]
            },
            "documentation": null,
            "id": 671,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isOwner",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 646,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 643,
                  "name": "identity",
                  "nodeType": "VariableDeclaration",
                  "scope": 671,
                  "src": "8457:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 642,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8457:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 645,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 671,
                  "src": "8475:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 644,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8475:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "8456:33:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 649,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 648,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 671,
                  "src": "8515:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 647,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "8515:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "8514:6:0"
            },
            "scope": 718,
            "src": "8440:185:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 700,
              "nodeType": "Block",
              "src": "8717:105:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 697,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 686,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 680,
                                "name": "owners",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 72,
                                "src": "8735:6:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                  "typeString": "mapping(address => mapping(address => uint256))"
                                }
                              },
                              "id": 682,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 681,
                                "name": "identity",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 673,
                                "src": "8742:8:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "8735:16:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 684,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 683,
                              "name": "owner",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 675,
                              "src": "8752:5:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "8735:23:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 685,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8761:1:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "8735:27:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&&",
                        "rightExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 696,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "components": [
                              {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 693,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "baseExpression": {
                                      "argumentTypes": null,
                                      "id": 687,
                                      "name": "owners",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 72,
                                      "src": "8767:6:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                        "typeString": "mapping(address => mapping(address => uint256))"
                                      }
                                    },
                                    "id": 689,
                                    "indexExpression": {
                                      "argumentTypes": null,
                                      "id": 688,
                                      "name": "identity",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 673,
                                      "src": "8774:8:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "IndexAccess",
                                    "src": "8767:16:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                      "typeString": "mapping(address => uint256)"
                                    }
                                  },
                                  "id": 691,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 690,
                                    "name": "owner",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 675,
                                    "src": "8784:5:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "8767:23:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "+",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "id": 692,
                                  "name": "adminTimeLock",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4,
                                  "src": "8793:13:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "8767:39:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 694,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "8766:41:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 695,
                            "name": "now",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 922,
                            "src": "8811:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "8766:48:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "8735:79:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "id": 698,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "8734:81:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 679,
                  "id": 699,
                  "nodeType": "Return",
                  "src": "8727:88:0"
                }
              ]
            },
            "documentation": null,
            "id": 701,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isOlderOwner",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 676,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 673,
                  "name": "identity",
                  "nodeType": "VariableDeclaration",
                  "scope": 701,
                  "src": "8653:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 672,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8653:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 675,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 701,
                  "src": "8671:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 674,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8671:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "8652:33:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 679,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 678,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 701,
                  "src": "8711:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 677,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "8711:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "8710:6:0"
            },
            "scope": 718,
            "src": "8631:191:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 716,
              "nodeType": "Block",
              "src": "8918:61:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 714,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 710,
                        "name": "recoveryKeys",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 76,
                        "src": "8935:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
                          "typeString": "mapping(address => address)"
                        }
                      },
                      "id": 712,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 711,
                        "name": "identity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 703,
                        "src": "8948:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "8935:22:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 713,
                      "name": "recoveryKey",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 705,
                      "src": "8961:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "8935:37:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 709,
                  "id": 715,
                  "nodeType": "Return",
                  "src": "8928:44:0"
                }
              ]
            },
            "documentation": null,
            "id": 717,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isRecovery",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 706,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 703,
                  "name": "identity",
                  "nodeType": "VariableDeclaration",
                  "scope": 717,
                  "src": "8848:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 702,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8848:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 705,
                  "name": "recoveryKey",
                  "nodeType": "VariableDeclaration",
                  "scope": 717,
                  "src": "8866:19:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 704,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8866:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "8847:39:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 709,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 708,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 717,
                  "src": "8912:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 707,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "8912:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "8911:6:0"
            },
            "scope": 718,
            "src": "8828:151:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 719,
        "src": "50:8931:0"
      }
    ],
    "src": "0:8981:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.23+commit.124ca40d.Emscripten.clang"
  },
  "networks": {
    "331788": {
      "events": {},
      "links": {},
      "address": "0xf04ed3ee45b5898f19d3991e31bd1a994e4e5068",
      "transactionHash": "0xd6dc241921a4857db4a483011c8146b46a883eb382e39cbde0ff99e688e9857c"
    }
  },
  "schemaVersion": "2.0.0",
  "updatedAt": "2018-05-16T02:40:23.528Z"
}