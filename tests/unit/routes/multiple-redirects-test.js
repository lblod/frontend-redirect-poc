import { module, test } from 'qunit';
import { setupTest } from 'frontend-redirect-poc/tests/helpers';

module('Unit | Route | multiple-redirects', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:multiple-redirects');
    assert.ok(route);
  });
});
