const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = require('./mnemonic.js')
const infura = require('./infura.js')
const api_key = require('./etherscan.js')

module.exports = {
	networks: {
		ropsten: {
			provider: () => new HDWalletProvider(mnemonic, infura),
			network_id: 3,       // Ropsten's id
			gas: 5500000,        // Ropsten has a lower block limit than mainnet
			confirmations: 2,    // # of confs to wait between deployments. (default: 0)
			timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
			skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
		},
		development: {
			host: "127.0.0.1",     // Localhost (default: none)
			port: 8545,            // Standard Ethereum port (default: none)
			network_id: "*",       // Any network (default: none)
		}
	},

	mocha: {
		// timeout: 100000
	},

	compilers: {
		solc: {
			version: "0.8.11",
		}
	},
	plugins: [
		'truffle-plugin-verify'
	],
	api_keys: {
		etherscan: api_key
	}
};
