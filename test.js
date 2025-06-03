import assert from 'node:assert'
import { spawnSync } from 'node:child_process'

{
  const { stdout } = spawnSync('./index.js', ['http://example.com'])
  assert.ok(stdout.toString().includes('This domain is for use in illustrative examples in documents.'))
}

{
  const { stderr } = spawnSync('./index.js', [])
  assert.strictEqual(stderr.toString(), 'Usage: scrape-text <URL>\n')
}
