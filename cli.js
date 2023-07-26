#!/usr/bin/env node
'use strict'

import {createRequire} from 'node:module'
const require = createRequire(import.meta.url)

import {parseArgs} from 'node:util'
const pkg = require('./package.json')

const {
	values: flags,
} = parseArgs({
	options: {
		help: {
			type: 'boolean',
			short: 'h',
		},
		version: {
			type: 'boolean',
			short: 'v',
		},
	},
	strict: true,
	allowPositionals: true,
})

if (flags.help) {
	process.stdout.write(`
Usage:
    xbar-plugin-ice-delay
\n`)
	process.exit(0)
}

if (flags.version) {
	process.stdout.write(`${pkg.name} v${pkg.version}\n`)
	process.exit(0)
}

// todo
