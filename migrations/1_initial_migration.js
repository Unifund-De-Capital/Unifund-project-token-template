const UnifundTemplateToken = artifacts.require("UnifundTemplateToken");

module.exports = function(deployer) {
  deployer.deploy(UnifundTemplateToken);
};


// utool migrate --network mainnet --reset
