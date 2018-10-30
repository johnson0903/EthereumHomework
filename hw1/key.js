// npm-library
const Wallet = require('ethereumjs-wallet');
const keccak256 = require('js-sha3').keccak256;

const fs = require('fs');

// keypair
const wallet = Wallet.generate();
 
// privKey
const privKey = wallet.getPrivateKey();
console.log("privKey:", privKey.toString('HEX'));
 
// pubKey
const pubKey = wallet.getPublicKey();
console.log("pubKey:", pubKey.toString('HEX'));

// address
let address = wallet.getAddressString();
console.log("address:", address);

/***** address *****/

// step 2:  public_key_hash = Keccak-256(public_key)
let public_key_hash = keccak256(pubKey);

// step 3:  address = ‘0x’ + last 20 bytes of public_key_hash
let address2 = '0x' + public_key_hash.slice(-40)
console.log(address2);

var content = JSON.stringify(wallet.toV3('nccu'));
fs.writeFile("key.json", content, 'utf8', function(err){
    if(err){
        console.log(err)
    }
    console.log('file has been save');
});

