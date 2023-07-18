import { test } from 'node:test';
import { strictEqual } from 'node:assert'
import { add } from './add.mjs'


test('1 + 1 = 2', async () => {
  strictEqual(add(1, 1), 2, 'add(1, 1) = 2')
})
