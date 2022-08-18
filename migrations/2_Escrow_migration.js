const Escrow = artifacts.require("Escrow");

const one = "0x46bcd4e0e1a7782c9d03577af2f90482f634e420";
const two = "0x181c5bd230f9f47d50045f16a211b1f06769e106";
const three = "0xc7d7daf1fe591645885c90763e83a10cb8462f6f";

module.exports = function (deployer) {
  deployer.deploy(Escrow,two, three,500);
};
