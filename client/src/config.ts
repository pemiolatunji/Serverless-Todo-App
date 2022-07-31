// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'hd7meuv849'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  
  domain: 'dev-2a5y9v27.us.auth0.com',            // Auth0 domain
  clientId: 'kYf1z98wjsrQMp3wMAvtMqNHxrqs9QLd',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
