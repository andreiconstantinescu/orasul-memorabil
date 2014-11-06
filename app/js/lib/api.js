var hostUri = 'http://localhost:8080'; //Development
//var hostUri = ''; //Production

var $ = require('../shims/jquery');
var when = require('when');

var Api = function (endpoint) {
  var uri = hostUri + '/api' + endpoint;

  var xhr = $.ajax({
    url: uri,
    method: 'GET',
    dataType: 'json',
  });

  var promise = when.promise(function (resolve, reject) {
    xhr.done(resolve);
    xhr.fail(function () {
      reject(new Error('AJAX request error'));
    });
  });

  promise.xhr = xhr;

  return promise;
};

module.exports = Api;