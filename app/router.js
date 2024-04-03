import EmberRouter from '@ember/routing/router';
import config from 'frontend-redirect-poc/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('open');
  this.route('not-found');
  this.route('multiple-redirects');
});
