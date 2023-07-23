import { run } from 'node:test'
import { tap } from 'node:test/reporters';
import path from 'node:path'

const files = [path.resolve('./src/add.test.mjs')]

const stream = run({
  files: files
}).compose(tap)

stream.pipe(process.stdout)

