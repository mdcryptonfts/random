const axios = require('axios')

//This node js script will tell you how many of an NFT template is held by any WAX account

//Edit these 4 lines below and then run `node check_for_template` from your console

const COLLECTION_NAME = "hoodpunknfts"
const SCHEMA_NAME = "wojakpacks"
const TEMPLATE_ID = 515930
const WAX_ACCOUNT_TO_CHECK = "mikedcrypto5"

const API_PROVIDER = "https://wax.api.atomicassets.io"

try{

  if(COLLECTION_NAME.length == 0 || SCHEMA_NAME.length == 0 || WAX_ACCOUNT_TO_CHECK.length == 0 || TEMPLATE_ID.length == 0){
    throw new Error('You left something blank');
  }

  axios.get(API_PROVIDER + "/atomicassets/v1/assets?collection_name=" + COLLECTION_NAME + "&schema_name=" + SCHEMA_NAME + "&template_id=" + TEMPLATE_ID + "&owner=" + WAX_ACCOUNT_TO_CHECK + "&page=1&limit=100&order=desc&sort=asset_id")
  .then((res) => {
    console.log("User has " + res.data.data.length + " of this template")
  })
}
catch(e) {
  console.log("Error: " + e)
}
