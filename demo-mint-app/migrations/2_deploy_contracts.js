const contracts = artifacts.require("Demo");

module.exports = function (deployer) {
  deployer.deploy(contracts);
};