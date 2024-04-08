import { module, test } from 'qunit';
import { setupTest } from 'frontend-redirect-poc/tests/helpers';

module('Unit | Controller | multiple-redirects', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:multiple-redirects');
    assert.ok(controller);
  });
});
