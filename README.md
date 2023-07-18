# minimum-nodejs-test

```javascript
# success
$ node test-run.mjs

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
$ node test-run-null-files.mjs
```