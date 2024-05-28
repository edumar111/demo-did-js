import { DID, DIDRecoverable, Resolver } from '@lacchain/did' 
import * as ethers from 'ethers';
const did = new DID( {
    registry: '0x81a7f01A18EE444F57551e1fa2f0C12116f318Fb',
    rpcUrl: 'http://34.73.228.200',
    nodeAddress: '0x971bb94d235a4ba42d53ab6fb0a86b12c73ba460',
    expiration: 1715724767000,
    network: 'main'
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