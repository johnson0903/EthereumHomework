const Wallet = require('ethereumjs-wallet');
const keccak256 = require('js-sha3').keccak256;
const fs = require('fs');

// generate wallet.
const wallet = Wallet.generate();
 
// 1
const privKey = wallet.getPrivateKey();
const pubKey = wallet.getPublicKey();
let address = wallet.getAddressString();
console.log("privKey:", privKey.toString('HEX'));
console.log("pubKey:", pubKey.toString('HEX'));
console.log("address:", address);


// 2
let public_key_hash = keccak256(pubKey);
let address2 = '0x' + public_key_hash.slice(-40)
console.log(address2);

// 3
var content = JSON.stringify(wallet.toV3('nccu'));
fs.writeFile("key.json", content, 'utf8', function(err){
    if(err){
        console.log(err)
    }
    console.log('file has been save');
});

