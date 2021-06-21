const supply_Chain = artifacts.require("supply_Chain");

module.exports = function (deployer) {
  deployer.deploy(supply_Chain);
};
