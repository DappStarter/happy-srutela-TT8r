require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half argue bright venture strong rice still million hockey another army genre'; 
let testAccounts = [
"0x3450c156d5922bb9770a049a90268174a3d831662d3df3d152714329652b1510",
"0x716e206f9568018a0d154356c0f775af85c736ff6db4566a7e3d2c7d33c14b89",
"0xbfad02c54cd0146e9006182ca57ee8f1dc501456c9468f8e08057e748e0a0a97",
"0x3bbccb7766b9a0dfb12700fda3aa657db5497517fdd74f6e18b2d6fb10fe154b",
"0x3a1ced173884e6bf315bf8720af5f40586e6325c15bc5da9ee0e26c2ad778334",
"0x9bec8e4f976deac4552dc34681da54ea41c9c5d1b4ba75cbd325aa6d705db6a7",
"0x729e066578dc19fcb784f807bea9872fc56e9ea75d351d258aca02c69763e54a",
"0x44e9afe2c0d8c216b1fba78b9291985013a8ea0447031b7ea3e6ce073c0a9411",
"0x6dd0352d379f3aa855d5dec22898e8448c1188f30b97be119e6f91521beb0bda",
"0xe0774d28765892720098b28fae76a0afb8285ac916401e0f5fe31230a87092e6"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

