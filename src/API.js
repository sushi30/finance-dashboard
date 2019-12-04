const ENDPOINT = process.env.REACT_APP_ENDPOINT;

function getHeader(params = {}) {
  return Object.assign(
    {
      access_token: localStorage.access_token,
      'Content-Type': 'application/json'
    },
    params
  );
}

export async function putCashFlowMapping(params) {
  return await fetch(process.env.REACT_APP_ENDPOINT + '/mapping', {
    method: 'put',
    body: JSON.stringify(params),
    headers: getHeader()
  }).then(async res => await res.json());
}

export async function getCashFlows() {
  return await fetch(ENDPOINT + '/api/cash', {
    method: 'get',
    headers: getHeader()
  }).then(async res => await res.json());
}

export async function uploadFile(file) {
  const data = new FormData();
  data.append('file', file);
  return await fetch(ENDPOINT + '/upload', {
    method: 'post',
    headers: getHeader(),
    body: data
  }).then(async res => await res.json());
}
