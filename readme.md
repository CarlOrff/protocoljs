# protocol.js

## Introduction

`protocol.js` is a simple script that prints the results of javascript expressions. It was never meant for publication but only as a test page of elementary JS properties of my website [https://ingram-braun.net/public/programming/web/testpages/javascript/]. That's why there is no real user interface. Somebody asked me to upload the code, so here it is. If you don't want to add something, simply go to the above-mentioned URL. You don't need the code then.

Remark that protocol.js uses `eval()`. I will not work if this is forbidden by a `Content-Security-Policy` header.

## Usage

1. Set `ptljs_protocol` to the opening sequence of a HTML table (usually `ptljs_table_begin`).
2. For every code part call `setProtocol(code)`. It adds a row to `ptljs_protocol`;
3. Add the closing part to `ptljs_protocol` (usually `ptljs_table_end`).
4. Call printProtocol(id) with the id of the element where it shall print to.

There are predefined property lists -- the same as on my website. See file `protocol.html`

## License

GNU/PL

## Author

© 2012--2015 Ingram Braun [https://ingram-braun.net/]