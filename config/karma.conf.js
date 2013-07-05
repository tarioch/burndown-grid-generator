/* jshint undef:false */
basePath = '../';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'test/unit/lib/angular.min.js',
  'test/unit/lib/angular-mocks.js',
  'app/js/**/*.js',
  'test/unit/**/*.js'
];

autoWatch = true;

browsers = ['Chrome'];

junitReporter = {
  outputFile: 'test_out/unit.xml',
  suite: 'unit'
};