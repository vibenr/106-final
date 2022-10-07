const Moralis = require('moralis/node')
require('dotenv').config()
const contractAddresses = require('./constants/contract.json')
let chainId = process.env.chainId || 31337
let moralisChainId = chainId == '31337' ? '1337' : chainId
const contractAddressArray = contractAddresses[chainId]['Land']
const contractAddress =
  contractAddressArray[contractAddressArray && contractAddressArray.length - 1]

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL
const appId = process.env.NEXT_PUBLIC_APP_ID
const masterKey = process.env.masterKey

async function main() {
  await Moralis.start({ serverUrl, appId, masterKey })
  console.log(`Working with contrat address ${contractAddress}`)

  let NewLandRegistration = {
    // Moralis understands a local chain is 1337
    chainId: moralisChainId,
    sync_historical: true,
    topic: 'ItemListed(address,address,uint256,uint256)',
    address: contractAddress,
    abi: {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'nftAddress',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'seller',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'price',
          type: 'uint256',
        },
      ],
      name: 'ItemListed',
      type: 'event',
    },
    tableName: 'ItemListed',
  }

  let newUserDetails = {
    chainId: moralisChainId,
    address: contractAddress,
    sync_historical: true,
    topic: 'NewLandAdded(uint,string,uint,string,uint,string)',
    abi: {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: '_area',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'string',
          name: '_address',
          type: 'string',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'landPrice',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'string',
          name: '_allLatiLongi',
          type: 'string',
        },
        {
          indexed: true,
          internalType: 'uint256',
          name: '_propertyPID',
          type: 'uint256',
        },
        {
          indexed: true,
          internalType: 'string',
          name: '_surveyNum',
          type: 'string',
        },
      ],
      name: 'NewLandAdded',
      type: 'event',
    },
    tableName: 'LandDetails',
  }

  let NewUserRegister = {
    chainId: moralisChainId,
    address: contractAddress,
    topic:
      'NewUserRegistered(address,string,uint,string,string,string,string,string)',
    sync_historical: true,
    abi: {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'useraddress',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'string',
          name: '_name',
          type: 'string',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: '_age',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'string',
          name: '_city',
          type: 'string',
        },
        {
          indexed: false,
          internalType: 'string',
          name: '_aadharNumber',
          type: 'string',
        },
        {
          indexed: true,
          internalType: 'string',
          name: '_panNumber',
          type: 'string',
        },
        {
          indexed: true,
          internalType: 'string',
          name: '_document',
          type: 'string',
        },
        {
          indexed: false,
          internalType: 'string',
          name: '_email',
          type: 'string',
        },
      ],
      name: 'NewUserRegistered',
      type: 'event',
    },
    tableName: 'Users',
  }

  const LandTable = await Moralis.Cloud.run(
    'watchContractEvent',
    NewLandRegistration,
    {
      useMasterKey: true,
    },
  )

  const Userregistar = await Moralis.Cloud.run(
    'watchContractEvent',
    NewUserRegister,
    {
      useMasterKey: true,
    },
  )
  if (LandTable.success && Userregistar.success) {
    console.log('Success! Database Updated with watching events')
  } else {
    console.log('Something went wrong...')
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
