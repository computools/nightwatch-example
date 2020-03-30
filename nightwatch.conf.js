module.exports = {

    "src_folders" : ["src/tests/e2e"],
    "page_objects_path": ["src/page-objects"],
    "globals_path": "globals.js",


    "webdriver" : {
        "start_process": false,
        "host": "localhost",
        "server_path": "/node_modules/chromedriver/bin/chromedriver",
        "port": 9515
    },

    "test_settings" : {
        "default" : {
            "desiredCapabilities": {
                "browserName": "chrome"
            }
        },

        "local" : {
            "desiredCapabilities": {
                "browserName": "chrome",
                "chromeOptions" : {
                    "args" : ["start-maximized"]
                }
            }
        }
    }
}
