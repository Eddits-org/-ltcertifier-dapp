import Web3 from 'services/Web3.service';

export const FETCH_CERTIFICATION_COST = 'FETCH_CERTIFICATION_COST';
export const CERTIFICATION_COST_FETCHED = 'CERTIFICATION_COST_FETCHED';
export const DISCLAIMER_ACCEPTED = 'DISCLAIMER_ACCEPTED';

export const acceptDisclaimer = () => ({
  type: DISCLAIMER_ACCEPTED
});

export const fetchCertificationCost = network => (dispatch) => {
  dispatch({
    type: FETCH_CERTIFICATION_COST
  });
  Web3.getCertificationCost(network.contract).then((cost) => {
    dispatch({
      type: CERTIFICATION_COST_FETCHED,
      cost
    });
  });
};
