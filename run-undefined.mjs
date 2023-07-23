import { run } from 'node:test'
import { tap } from 'node:test/reporters';

const stream = run({
  files: undefined
}).compose(tap)

stream.pipe(process.stdout)

