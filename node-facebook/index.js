const bizSdk = require('facebook-nodejs-business-sdk');

const accessToken = 'EAAEc6EFwM5cBACEWWQNiycwpB7CtVsuWgJjr9DdrKmtM6ZAvgPhw8DnWvr2J1XzwMxb0ZCSHozOBmYPYxnnZCmZAH3crZBLdozVabWwwOVZAjZA1uHsXw1zzeMI98E6JZA6gFZBCl7PH00tSVCJHlqqm6X7AntnMZALZC2TTf7ZB8JmgygZDZD';
const accountId = '313258832573335';

const FacebookAdsApi = bizSdk.FacebookAdsApi.init(accessToken);
const AdAccount = bizSdk.AdAccount;
const Campaign = bizSdk.Campaign;

const account = new AdAccount(accountId);
var campaigns;
    
account.read([AdAccount.Fields.name])
  .then((account) =>{
    return account.getCampaigns([Campaign.Fields.name], { limit: 10 }) // fields array and params
  })
  .then((result) =>{
    campaigns = result
    campaigns.forEach((campaign) =>console.log(campaign.name))  
  }).catch(console.error);