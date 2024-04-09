import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default class OpenRoute extends Route {
  @service store;
  @service router;
  @service('redirect-data') redirectDataService;

  queryParams = {
    intent: {
      refreshModel: true,
    },
    resource: {
      refreshModel: true,
    },
  };

  async model(params) {
    const redirects = await this.store
      .query('redirect', {
        filter: { intent: params.intent },
      })
      .catch((error) => {
        console.error('Error fetching redirects:', error);
        throw error;
      });

    if (params.intent && params.resource) {
      const redirectsObject = redirects.firstObject;
      if (!redirectsObject) {
        this.router.transitionTo('not-found');
      }
      const redirectUrlArray = redirectsObject.get('redirectUrl');
      if (!redirectUrlArray) {
        this.router.transitionTo('info');
      }
      if (redirectUrlArray.length === 1) {
        const targetUrl = redirectUrlArray[0].replace(
          '$resource',
          encodeURIComponent(params.resource)
        );
        window.location.href = targetUrl;
        return;
      } else if (redirectUrlArray.length > 1) {
        this.redirectDataService.resource = params.resource;
        this.redirectDataService.redirectUrlArray = redirectUrlArray;
        this.router.transitionTo('multiple-redirects');
      }
    } else {
      this.router.transitionTo('not-found');
    }
  }
}
