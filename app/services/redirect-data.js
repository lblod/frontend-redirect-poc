import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class RedirectDataService extends Service {
  @tracked redirectUrlArray = [];
  @tracked resource = '';
}
