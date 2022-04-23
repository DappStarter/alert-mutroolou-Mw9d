require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture glimpse frame tribe strategy rival spike evil hunt gloom tail genre'; 
let testAccounts = [
"0x844bec76d5df3912b6034cb857dfde6c1344e1a0f3272c4e115cce3a559fe859",
"0x262bab729cdee12234920bae52acaa65ac9ba34a8c795cfe12e19a4358c767e9",
"0x5ee5bed85a1489032b1eda736b450e3cc2387384d9ae9b11329a2a7ea99bce3d",
"0x1dcd6d28de337bf75cfc0358abc2c36460c18f6739b7895143d5627c71f0cc8a",
"0x7eae309185de88be7f655788fd14c2a6b678761a11ddc1ef58399fb757fde97a",
"0x5fd031d0c0efc7da0772ce602390b2194d1c55c8e18c52d2d0c6cfe1b4666198",
"0xd4bc5799b37736e2d61bdadcb3dbd900c63d400d70b3db5a8f42bdfb3a0620d8",
"0xf972e0eb816e4e7f4d4b56512684383373c005081c28fc9f308592288dab33df",
"0x3985204b35d045af819625062da38dfc2d7d2eee76e9e02b3d1da5bb6a85164c",
"0x5fde9d7c9cdbcad845585598eb50e1ace2ea1f440c83d9fe2787836f61a55d9a"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

