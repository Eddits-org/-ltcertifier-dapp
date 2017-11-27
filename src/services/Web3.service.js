import Web3 from 'web3';

const config = require('config');

class Web3Service {
  constructor() {
    if (window.web3) {
      this.web3 = new Web3(window.web3.currentProvider);
      this.contract = this.web3.eth.contract(config.abi);
    }
  }

  getNetwork() {
    return new Promise((resolve, reject) => {
      if (!this.web3) reject(Error('Web3 provider not available'));
      else {
        this.web3.version.getNetwork((err, netId) => {
          if (err) return reject(err);
          const network = config.networks.find(n => n.id === netId);
          if (!network) return resolve({ id: '-1', name: 'Unknown', enabled: false });
          return resolve(network);
        });
      }
    });
  }

  getAccount() {
    return new Promise((resolve, reject) => {
      if (!this.web3) reject(Error('Web3 provider not available'));
      else {
        this.web3.eth.getAccounts((err, accounts) => {
          if (err) return reject(err);
          if (!accounts || accounts.length === 0) return resolve(null);
          return resolve(accounts[0]);
        });
      }
    });
  }

  certify(contractAddress, account, signInfos, signature, manifest, certificate) {
    return new Promise((resolve, reject) => {
      if (!this.web3) reject(Error('Web3 provider not available'));
      else {
        this.contract.at(contractAddress).certify(
          signInfos,
          signature,
          manifest,
          certificate,
          { from: account }, ((err, tx) => {
            if (err) return reject(err);
            return resolve(tx);
          })
        );
      }
    });
  }

  waitForMining(txHash) {
    return new Promise((resolve, reject) => {
      if (!this.web3) reject(Error('Web3 provider not available'));
      else {
        const id = setInterval(() => {
          this.web3.eth.getTransactionReceipt(txHash, (err, tx) => {
            if (err) {
              clearInterval(id);
              reject(err);
            } else if (tx && tx.blockNumber) {
              clearInterval(id);
              resolve(tx.blockNumber);
            }
          });
        }, 1000);
      }
    });
  }
}

export default new Web3Service();
