// Suggested code may be subject to a license. Learn more: ~LicenseLog:242026971.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3746635899.
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

