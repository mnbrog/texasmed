
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-contact-js": preferDefault(require("C:\\Users\\mnbro\\texasmed\\texasmed\\src\\pages\\contact.js")),
  "component---src-pages-index-js": preferDefault(require("C:\\Users\\mnbro\\texasmed\\texasmed\\src\\pages\\index.js"))
}

