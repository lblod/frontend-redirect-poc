import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class IndexController extends Controller {
  @tracked currentRedirectUrl = '';
  @tracked currentIntent = '';
  @tracked redirectUrls = [];
  @service store;

  websiteRegex = /^https?:\/\/[\w]/;

  @action
  updateCurrentRedirectUrl(event) {
    this.currentRedirectUrl = event.target.value;
  }

  @action
  addNewRedirectUrl() {
    if (this.currentRedirectUrl.match(this.websiteRegex)) {
      this.redirectUrls = [...this.redirectUrls, this.currentRedirectUrl];
      this.currentRedirectUrl = '';
    }
  }

  @action
  async handleSubmit(event) {
    event.preventDefault();

    const intentInput = event.target.querySelector('#intent');
    const intentValue = intentInput.value;

    if (intentValue && this.redirectUrls) {
      const createNewRedirect = await this.store.createRecord('redirect', {
        intent: intentValue,
        redirectUrl: this.redirectUrls,
      });
      await createNewRedirect.save();
      this.redirectUrls = [];
      this.currentIntent = '';
    }
  }
}
