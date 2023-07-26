# xbar-plugin-ice-delay

An [xbar](https://xbarapp.com) plugin that shows the **current delay of the [ICE train](https://en.wikipedia.org/wiki/Intercity_Express) you're sitting in, directly in the macOS menu bar**.

[![npm version](https://img.shields.io/npm/v/xbar-plugin-ice-delay.svg)](https://www.npmjs.com/package/xbar-plugin-ice-delay)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/xbar-plugin-ice-delay.svg)
![minimum Node.js version](https://img.shields.io/node/v/xbar-plugin-ice-delay.svg)
[![support me via GitHub Sponsors](https://img.shields.io/badge/support%20me-donate-fa7664.svg)](https://github.com/sponsors/derhuerst)
[![chat with me on Twitter](https://img.shields.io/badge/chat%20with%20me-on%20Twitter-1da1f2.svg)](https://twitter.com/derhuerst)


## Installation

```bash
# install the plugin
npm install -g xbar-plugin-ice-delay
# add a helper script to the xbar plugin directory that calls the actual plugin
echo -e '#!/bin/sh'"\n$(which node) '$(which xbar-plugin-ice-delay)'" >~/Library/Application\ Support/xbar/plugins/ice-delay.30s.sh
```


## Usage

```
Usage:
    xbar-plugin-ice-delay
```


## Contributing

If you have a question or need support using `xbar-plugin-ice-delay`, please double-check your code and setup first. If you think you have found a bug or want to propose a feature, use [the issues page](https://github.com/derhuerst/xbar-plugin-ice-delay/issues).
