const PROXY_CONFIG = {
  "/api": {
    "target": "https://api.hitbtc.com/",
    "secure": false,
    "changeOrigin": true,
    "bypass": function (req) {
      req.headers["X-Custom-Header"] = "yes";
    }
  }
};

module.exports = PROXY_CONFIG;
