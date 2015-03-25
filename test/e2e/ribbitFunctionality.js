/* globals casper, document */
casper.test.begin('App is setup correctly', function suite(test) {
  casper.start('http://localhost:3000/', function() {
  });

  casper.run(function() {
    test.done();
  });
});
