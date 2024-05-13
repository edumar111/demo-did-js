import { DID, DIDRecoverable, Resolver } from '@lacchain/did' 
import * as ethers from 'ethers';
const did = new DID( {
    registry: '0xAB00e74C1b0A2313f552E869E6d55B5CdA31aFfe',
    rpcUrl: 'http://35.185.112.219',
    nodeAddress: '0xad730de8c4bfc3d845f7ce851bcf2ea17c049585',
    expiration: 1836394529,
    network: 'test'
 } );

console.log("did: ", did.id ); 
console.log( "Address: ",did.address ); 
console.log( "config: ",did.config ); 
console.log( "controllerPrivateKey: ",did.config.controllerPrivateKey ); 

const wallet = new ethers.Wallet(did.config.controllerPrivateKey);

const controllers = await did.getController();
console.log( "public: ",wallet.publicKey); 
console.log( "controls: ",controllers ); 
await did.addVerificationMethod({
    type: 'vm',
    algorithm: 'esecp256k1rm',
    encoding: 'hex',
    publicKey: wallet.publicKey,
    controller: controllers,
    //expiration: 31536000 // default: 31536000
 });

 let document = await did.getDocument()
 console.log(document)