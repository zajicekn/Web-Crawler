const { test, expect } = require('@jest/globals')
const { normalizeURL } = require('./crawl.js')

test('returns the full url', () => {
    const fullURL = 'https://blog.boot.dev/path/'
    expect(normalizeURL(fullURL)).toBe('https://blog.boot.dev/path/');
});