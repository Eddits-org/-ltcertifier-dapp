import Web3 from 'web3';
import { isAddress } from 'ethereum-address';

const config = require('config');

class Web3Service {
  constructor() {
    if (window.web3) {
      this.web3 = new Web3(window.web3.currentProvider);
      this.contract = this.web3.eth.contract(config.abi);
    }
  }

  withWeb3Promise(cb) {
    return new Promise((resolve, reject) => {
      if (!this.web3) reject(Error('Web3 provider not available'));
      else cb(resolve, reject);
    });
  }

  getNetwork() {
    return this.withWeb3Promise((resolve, reject) => {
      this.web3.version.getNetwork((err, netId) => {
        if (err) return reject(err);
        const network = config.networks.find(n => n.id === netId);
        if (!network) return resolve({ id: '-1', name: 'Unknown', enabled: false });
        return resolve(network);
      });
    });
  }

  getAccount() {
    return this.withWeb3Promise((resolve, reject) => {
      this.web3.eth.getAccounts((err, accounts) => {
        if (err) return reject(err);
        if (!accounts || accounts.length === 0) return resolve(null);
        return resolve(accounts[0]);
      });
    });
  }

  certify(contractAddress, account, signInfos, signature, manifest, certificate) {
    return this.withWeb3Promise((resolve, reject) => {
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
    });
  }

  waitForMining(txHash) {
    return this.withWeb3Promise((resolve, reject) => {
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
    });
  }

  isAddress(address) {
    return !!address && isAddress(address);
  }

  getAddressCertification(contractAddress, address) {
    return this.withWeb3Promise((resolve) => {
      const addr = (address.startsWith('0x') ? address : `0x${address}`);
      Promise.all([
        this.isAddressCertified(contractAddress, addr),
        this.getAddressCN(contractAddress, addr),
        this.getAddressIssuerCN(contractAddress, addr),
        this.getAddressModulus(contractAddress, addr),
        this.getAddressExponent(contractAddress, addr)
      ]).then(([certified, commonName, issuer, modulus, exponent]) => {
        resolve({
          address,
          certified,
          commonName,
          issuer,
          modulus,
          exponent
        });
      });
    });
  }

  isAddressCertified(contractAddress, address) {
    return this.withWeb3Promise((resolve, reject) => {
      this.contract.at(contractAddress).certified(address, (err, value) => {
        if (err) return reject(err);
        return resolve(value);
      });
    });
  }

  getAddressCN(contractAddress, address) {
    return this.withWeb3Promise((resolve, reject) => {
      this.contract.at(contractAddress).getString(address, 'CN', (err, value) => {
        if (err) return reject(err);
        return resolve(value);
      });
    });
  }

  getAddressIssuerCN(contractAddress, address) {
    return this.withWeb3Promise((resolve, reject) => {
      this.contract.at(contractAddress).getString(address, 'IssuerCN', (err, value) => {
        if (err) return reject(err);
        return resolve(value);
      });
    });
  }

  getAddressModulus(contractAddress, address) {
    return this.withWeb3Promise((resolve, reject) => {
      this.contract.at(contractAddress).get(address, 'modulus', (err, value) => {
        if (err) return reject(err);
        return resolve(value);
      });
    });
  }

  getAddressExponent(contractAddress, address) {
    return this.withWeb3Promise((resolve, reject) => {
      this.contract.at(contractAddress).get(address, 'exponent', (err, value) => {
        if (err) return reject(err);
        return resolve(value);
      });
    });
  }
}

export default new Web3Service();
