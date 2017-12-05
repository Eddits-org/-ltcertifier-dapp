const TAG = '#response=';

const preload = () => {
  const url = window.location.href;
  if (url.indexOf(TAG) > 0) {
    const orelyResponse = url.substring(url.indexOf(TAG) + TAG.length);
    const json = JSON.parse(atob(orelyResponse));
    return {
      certifier: {
        step: 2,
        fetchingCost: false
      },
      tx: {
        params: json,
        sent: false,
        hash: null,
        mined: false,
        block: null
      }
    };
  }
  return {};
};

export default preload;
