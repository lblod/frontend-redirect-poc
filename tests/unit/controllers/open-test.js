import { module, test } from 'qunit';
import { setupTest } from 'frontend-redirect-poc/tests/helpers';

module('Unit | Controller | open', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:open');
    assert.ok(controller);
  });
});
