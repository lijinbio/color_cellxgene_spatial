#!/usr/bin/env bash
# vim: set noexpandtab tabstop=2:

source trapdebug
mocha
mocha test.js
npm test
