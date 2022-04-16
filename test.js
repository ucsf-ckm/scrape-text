'use strict';
import assert from 'node:assert';
import { spawnSync } from 'node:child_process';
{
    const { stdout } = spawnSync('./index.js', ['http://neverssl.com']);
    assert.ok(stdout.toString().includes("And if the network never redirects you to this page, well as you can see, you're not missing much."));
}
{
    const { stderr } = spawnSync('./index.js', []);
    assert.strictEqual(stderr.toString(), 'Usage: scrape-text <URL>\n');
}
