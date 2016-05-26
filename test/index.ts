/// <reference path="../bundle.d.ts" />
/// <reference path="../typings/index.d.ts" />

import assert = require('assert');
import tlds = require('tlds');

assert.ok(Array.isArray(tlds), 'should be an array');
