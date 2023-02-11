// @ts-check
const request = require("request");
const jsdom = require("jsdom");
const { HEADERS } = require("./common.constants");

/** @type { ScrapperType } */
const scrapBlacked = (url) => {
  return new Promise((resolve, reject) => {
    const options = {
      url,
      headers: HEADERS,
    };
    request(options, (error, response, body) => {
      if (error) {
        console.log(error);
        reject(error);
        return;
      }
      try {
        const dom = new jsdom.JSDOM(body);
        const data = {
          title: dom.window.document.querySelector(
            '[data-test-component="VideoTitle"]'
          )?.textContent,
          url,
          notes: [
            dom.window.document.querySelector(
              '[data-test-component="ReleaseDateFormatted"]'
            )?.textContent,
            dom.window.document.querySelector(
              '[data-test-component="RunningTime"]'
            )?.textContent,
            ...[
              // @ts-ignore
              ...dom.window.document
                .querySelector('[data-test-component="VideoModels"]')
                .querySelectorAll("a"),
            ].map((actor) => actor.textContent),
            ...[
              // @ts-ignore
              ...dom.window.document
                .querySelector('[data-test-component="VideoModels"]')
                .querySelectorAll("a"),
            ].map((actor) => `https://www.blacked.com${actor.href}`),
          ],
        };
        resolve(data);
      } catch (e) {
        console.log(e);
        reject(e);
        return;
      }
    });
  });
};

(async function () {
  /** @type {Array<string>} */
  const [a, b, url] = process.argv;

  if (!url) {
    console.log("No link!");
    return;
  }

  /** @type { ScrappedDataType } */
  const result = await scrapBlacked(url);
  console.log(result);
})();
