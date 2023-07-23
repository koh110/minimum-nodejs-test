import { run, test } from 'node:test' 
import { tap } from 'node:test/reporters';
import { fileURLToPath } from 'node:url'
const __filename = fileURLToPath(import.meta.url)

run({
  files: [__filename]
})
  .compose(tap)
  .pipe(process.stdout)

test('1 + 1 = 2', async () => {
  strictEqual(1 + 1, 2, '1 + 1 = 2')
})
