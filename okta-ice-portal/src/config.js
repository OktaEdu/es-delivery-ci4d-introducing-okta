// config.js
export default {
  oidc:
  {
    clientId: 'xxxxxxxxxxxxxxxxxxxx',
    issuer: 'https://oktaiceXXX.oktapreview.com',
    redirectUri: window.location.origin + '/login/callback',
    scopes: ['openid', 'profile', 'email']
  }
}

