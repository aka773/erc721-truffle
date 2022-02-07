const Contracts = artifacts.require("MyNFT");

module.exports = function (deployer) {
	deployer.deploy(Contracts);
};