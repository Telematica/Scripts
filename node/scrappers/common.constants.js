/**
 * Blacked.com Headers
 *
 * @constant
 * @type {{[property: string]: any}}
 * @default
 */
const HEADERS = {
  accept:
    "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
  authority: "www.blacked.com",
  "accept-language": "en-US,en;q=0.9",
  "cache-control": "max-age=0",
  cookie: process.env.COOKIE,
  method: "GET",
  scheme: "https",
  "sec-ch-ua":
    'Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
  "sec-ch-ua-mobile": "?0",
  "sec-ch-ua-platform": "macOS",
  "sec-fetch-dest": "document",
  "sec-fetch-mode": "navigate",
  "sec-fetch-site": "same-origin",
  "sec-fetch-user": "?1",
  "upgrade-insecure-requests": "1",
  "user-agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
};

module.exports = {
  HEADERS,
};
