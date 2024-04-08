import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default class MultipleRedirectsRoute extends Route {
  @service('redirect-data') redirectDataService;
  @service router;

  model() {
    if (this.redirectDataService.redirectUrlArray.length > 0) {
      return this.redirectDataService.redirectUrlArray;
    } else {
      this.router.transitionTo('not-found');
    }
  }
}
