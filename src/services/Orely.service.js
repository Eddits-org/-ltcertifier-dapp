const config = require('config');

class OrelyService {
  generateSAMLRequest(address) {
    return fetch(`${config.orelySvcURL}/request?address=${address}`, {
      headers: {
        Accept: 'application/json'
      }
    }).then(resp => resp.json());
  }
}

export default new OrelyService();
