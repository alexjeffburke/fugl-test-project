const foo = require('dont-break-foo');

process.exit(foo === 'foo' ? 0 : 1);
