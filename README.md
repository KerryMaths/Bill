# Bill Unattended Test - Sky Apps Team

## Requirements

Create a AngularJS app which provides a user with their bill information.
You will have to request the data from the server (will be in a JSON format).
App should display:
 - Subscription
 - Call Charges
 - Sky Store

### How to run app.

- install NodeJS and NPM
- `npm install -g bower karma` - install bower and karma globally 
- run `npm install` in project root directory - uses package.json to download the dependencies
- run `bower install` in project root directory - uses bower.json to download bower components
- run  `karma start karma.conf.js` - runs tests using Karma test runner
- open app/index.html in browser to view bill