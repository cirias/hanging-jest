After `npm install ` run `./node_modules/.bin/jest`. Jest will hang and never quit.

Jest forks each test when there are muliple test. Each running child process will be has its own promise in the parent.
This promise only quit when the the `onProcessEnd` function be called. But this function only be
called in `process.on('message', this._receive.bind(this))`'s handler `this._receive`. So that when the test exits by
`process.exit()`, the `onProcessEnd` will never be called. Then it hangs.

https://github.com/facebook/jest/blob/558416f0e7ef0e37e778cff000614b9e13a8710e/packages/jest-worker/src/index.js#L185
https://github.com/facebook/jest/blob/558416f0e7ef0e37e778cff000614b9e13a8710e/packages/jest-worker/src/worker.js#L166
https://github.com/facebook/jest/blob/558416f0e7ef0e37e778cff000614b9e13a8710e/packages/jest-worker/src/child.js
