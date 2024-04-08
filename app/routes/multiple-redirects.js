import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default class MultipleRedirectsRoute extends Route {
  @service('redirect-data') redirectDataService;
  @service router;

  model() {
    const { redirectUrlArray, resource } = this.redirectDataService;
    if (this.redirectDataService.redirectUrlArray.length > 0) {
      const processedUrls = redirectUrlArray.map((url) =>
        url.replace('$resource', encodeURIComponent(resource))
      );
      return processedUrls;
    } else {
      this.router.transitionTo('not-found');
      return [];
    }
  }
}
