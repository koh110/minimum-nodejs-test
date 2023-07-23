# minimum-nodejs-test

```javascript
# success
$ node run.mjs
TAP version 13
# Subtest: 1 + 1 = 2
ok 1 - 1 + 1 = 2
  ---
  duration_ms: 0.525541
  ...
1..1
# tests 1
# suites 0
# pass 1
# fail 0
# cancelled 0
# skipped 0
# todo 0
# duration_ms 38.866208

$ node --test
✔ 1 + 1 = 2 (0.510542ms)
ℹ tests 1
ℹ suites 0
ℹ pass 1
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 45.3915

TAP version 13
# Subtest: 1 + 1 = 2
ok 1 - 1 + 1 = 2
  ---
  duration_ms: 0.546875
  ...
1..1
# tests 1
# suites 0
# pass 1
# fail 0
# cancelled 0
# skipped 0
# todo 0
# duration_ms 39.425083


# Infinite loop
$ node run-undefined.mjs
$ node run-null-files.mjs
$ node run-inner-file.mjs
$ node -e "require('node:test').run({ files: undefined }).compose(require('node:test/reporters').tap).pipe(process.stdout)"
```
