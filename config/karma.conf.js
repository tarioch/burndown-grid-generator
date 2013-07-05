basePath = '../';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  {pattern: '//ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js', watched: false, included: true, served: false},
//  'app/lib/angular/angular.js',
//  'app/lib/angular/angular-*.js',
//  'test/lib/angular/angular-mocks.js',
  'app/js/**/*.js',
  'test/unit/**/*.js'
];

autoWatch = true;

browsers = ['Chrome'];

junitReporter = {
  outputFile: 'test_out/unit.xml',
  suite: 'unit'
};