client.getApplication(applicationHref, function (err, application) {
  if (err) {
    return console.error(err);
  }

  var redirectUrl = application.createIdSiteUrl({
    callbackUri: 'http://mysite.foo/idsiteCallback',
    logout: true
  });

  console.log('ID site logout redirect URL', redirectUrl);
});