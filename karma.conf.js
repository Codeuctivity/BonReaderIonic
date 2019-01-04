// Karma configuration
// Generated on Fri Jan 04 2019 21:07:38 GMT+0100 (GMT+01:00)

module.exports = function(config) {
    config.set({
      basePath: '',
      frameworks: ['jasmine'],
      files: [ './tests/test.js'
      ],
      exclude: [
      ],
      preprocessors: {
      },
      reporters: ['progress'],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: true,    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity
  })
}
