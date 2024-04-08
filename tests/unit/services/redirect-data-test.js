import { module, test } from 'qunit';
import { setupTest } from 'frontend-redirect-poc/tests/helpers';

module('Unit | Service | redirect-data', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:redirect-data');
    assert.ok(service);
  });
});
