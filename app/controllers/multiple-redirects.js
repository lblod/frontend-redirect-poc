import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class MultipleRedirectsController extends Controller {
  @service('redirect-data') redirectDataService;

  @action
  selectRedirect(targetString) {
    const resource = this.redirectDataService.resource;
    const targetUrl = targetString.replace(
      '$resource',
      encodeURIComponent(resource)
    );
    window.location.href = targetUrl;
  }
}
