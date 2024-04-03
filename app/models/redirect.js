import Model, { attr } from '@ember-data/model';

export default class RedirectModel extends Model {
  @attr('string') intent;
  @attr('uri-set') redirectUrl;
}
