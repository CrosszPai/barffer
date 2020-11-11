const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

// module.exports = withPWA({
//   pwa: {
//     dest: "public",
//     runtimeCaching,
//   },
// images: {
//   domains: ["s3-alpha-sig.figma.com"],
// },
// });

module.exports = {
  images: {
    domains: ["s3-alpha-sig.figma.com"],
  },
}