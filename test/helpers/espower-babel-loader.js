require('espower-babel')({
  // directory where match starts with
  cwd: process.cwd(),

  // glob pattern using minimatch module
  pattern: 'test/**/*.test.js',

  babelrc: {
    presets: ['es2015', 'stage-0', 'stage-1', 'react']
  },
  // options for espower module
  espowerOptions: {
    patterns: [
      'assert(value, [message])',
      'assert.ok(value, [message])',
      'assert.equal(actual, expected, [message])',
      'assert.notEqual(actual, expected, [message])',
      'assert.strictEqual(actual, expected, [message])',
      'assert.notStrictEqual(actual, expected, [message])',
      'assert.deepEqual(actual, expected, [message])',
      'assert.notDeepEqual(actual, expected, [message])'
    ]
  }
});
