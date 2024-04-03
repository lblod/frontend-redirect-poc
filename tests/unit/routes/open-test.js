import { module, test } from 'qunit';
import { setupTest } from 'frontend-redirect-poc/tests/helpers';

module('Unit | Route | open', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:open');
    assert.ok(route);
  });
});
