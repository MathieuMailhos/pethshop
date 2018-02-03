module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "15",
      gas: 270000000,
      from: "0x0c3c9a7d2726cec145de01b0241797b7c2786b11"
    }
  }
};
