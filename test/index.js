var t = require('mini')();
var expect = require('chai').expect;
var color = require('..');

t('Force disable', function() {
  var actual = color('str', 'red', { enable: false });
  expect(actual).to.eq('str');
});

t('Colorize', function() {
  var actual = color('str', 'red');
  expect(actual).to.eq('\u001b[31mstr\u001b[0m');
});

t('Parse and colorize when enabled', function() {
  var actual = color('[str](red)', { parse: true });
  expect(actual).to.eq('\u001b[31mstr\u001b[0m');
});

t('Parse and colorize when disabled', function() {
  var actual = color('[str](red)', { parse: true, enable: false });
  expect(actual).to.eq('str');
});

t('Colorize with no options', function() {
  var actual = color('str', 'red');
  expect(actual).to.eq('\u001b[31mstr\u001b[0m');
});

t('Parse with no options', function() {
  var actual = color.parse('[str](red)');
  expect(actual).to.eq('\u001b[31mstr\u001b[0m');
});

t('Invalid color', function() {
  expect(function invalidColor() {
    color('str', 'invalid');
  }).to.throw();
});
