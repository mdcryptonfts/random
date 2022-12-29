const axios = require('axios')

const COLLECTION_NAME = "hoodpunknfts"
const SCHEMA_NAME = "wojakpacks"
const TEMPLATE_ID = 515930
const WAX_ACCOUNT_TO_CHECK = "mikedcrypto5"

const API_PROVIDER = "https://wax.api.atomicassets.io"

try{
  axios.get(API_PROVIDER + "/atomicassets/v1/assets?collection_name=" + COLLECTION_NAME + "&schema_name=" + SCHEMA_NAME + "&template_id=" + TEMPLATE_ID + "&owner=" + WAX_ACCOUNT_TO_CHECK + "&page=1&limit=100&order=desc&sort=asset_id")
  .then((res) => {
    console.log("User has " + res.data.data.length + " of this template")
  })
}
catch(e) {
  console.log("Error: " + e)
}
