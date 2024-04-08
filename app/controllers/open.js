import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
export default class OpenController extends Controller {
  @service router;
  queryParams = [
    {
      intent: {
        type: 'string',
      },
      resource: {
        type: 'string',
      },
    },
  ];
}
