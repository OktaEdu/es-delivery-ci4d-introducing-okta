# Okta Ice Portal

A NodeJS + Vue Single-Page application for educational use. Demonstrates how to deploy Okta's Redirect Model of authentication using the [Okta Vue.js SDK](https://github.com/okta/okta-vue/releases).

## Project setup
```
npm install
```

## Project configuration
In order to do this, you'll need an [application integration](#create-an-okta-integration-for-your-app) in Okta already set up. Open `config.js` and enter your Okta application integration ID for `clientId` and your Okta Org URL for `issuer`.

## Compiles and hot-reloads for development
```
npm run serve
```

## Create an Okta integration for your app
An application integration represents your app in your Okta org. The integration configures how your app integrates with the Okta services including: which users and groups have access, authentication policies, token refresh requirements, redirect URLs, and more. The integration includes configuration information required by the app to access Okta.

1. Sign in to your Okta organization with your administrator account.
2. Click `Admin` in the upper-right corner of the page.
3. Open the Applications page by selecting `Applications` > `Applications`.
4. Click Create App Integration.
5. Select a Sign-in method of `OIDC - OpenID Connect`.
6. Select an Application type of Single-Page Application, then click Next.

>>> Note: If you choose an inappropriate application type, it can break the sign-in or sign-out flows by requiring the verification of a client secret, which is something that public clients don't have.

7. Enter an App integration name, e.g. `Okta Ice Portal`
8. Select `Authorization Code` and `Refresh Token` as the Grant type. This enables the Authorization Code flow with PKCE for your application and the ability to refresh the access token when it expires without prompting the user to re-authenticate.
9. Enter the Sign-in redirect URI for local development: `http://localhost:8080/login/callback`
10. Select the type of Controlled access for your app in the Assignments section. You can allow all users to have access or limit access to individuals and groups. 
11. Click `Save` to create the app integration and open its configuration page. This is where you can copy your `Client ID`.
12. On the General tab, scroll to General Settings and click Edit.
13. Verify that Refresh Token is selected as a Grant type. In the Refresh Token section, refresh token rotation is automatically set as the default refresh token behavior.

>>> Note: The default number of seconds for the Grace period for token rotation is set to 30 seconds. You can change the value to any number between 0 and 60 seconds. After the refresh token is rotated, the previous token remains valid for this amount of time to allow clients to get the new token. Using a value of 0 indicates that there is no grace period. However, a grace period of 0 doesn't necessarily mean that the previous refresh token is immediately invalidated. That token is invalidated after the new one is generated and returned in the response.

In the Login section, specify an Initiate login URI to have Okta initiate the sign-in flow: `http://localhost:8080/login/` When Okta redirects to this URI, the client is triggered to send an authorize request. This URI is also used when users reset their passwords while signing in to the app. Okta redirects the user back to this URI after the password is reset so that the user can continue to sign in.

### Enable Trusted Origins
1. Go to Security > API
2. Click the Trusted Origins tab
3. Add the Base URI for local development: `http://localhost:8080` 



