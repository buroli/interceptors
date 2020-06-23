import axios from 'axios'

const proxyUrl = "http://0.0.0.0:8080/";
const endpoint = {
  development:  'https://passport-api.radionomy.tech/api/v1/',
  staging:      'https://passport-api.radionomy.tech/api/v1/',
  production:   'https://passport-api.targetspot.com/api/v1/'
};
// quick fix to handle api according context
const host = document.location.host;
const prodUrl = 'passport.targetspot.com';
const isEnvSet = process.env.VUE_APP_ENDPOINT ? process.env.VUE_APP_ENDPOINT : endpoint.staging;

//const urlAPI = host === prodUrl ? endpoint.production : isEnvSet;
const urlAPI = `${proxyUrl}${endpoint.production}`;
const source = axios.CancelToken.source();

export const HTTP = axios.create({
  baseURL: urlAPI,
  cancelToken: source.token
});
