'use strict';

const assert = require('assert');
const { spawnSync } = require('child_process');

{
  const { stdout } = spawnSync(process.execPath, [ './index.js', 'http://neverssl.com' ]);
  assert.ok(stdout.toString().includes("And if the network never redirects you to this page, well as you can see, you're not missing much."));
}
