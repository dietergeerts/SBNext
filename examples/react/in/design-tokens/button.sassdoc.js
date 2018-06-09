// Example when running sassdoc on it's own.
// This will mean that when using this with Storybook this way,
// we'll have to run this besides it, and update storybook with
// the results. Then the user will need to configure this in some
// way and we'll have to expose stuff to the user, which means extra work.
//
// Pro of this is that we can check ALL style files, though sometimes
// not preferred.

var sassdoc = require('sassdoc');

sassdoc.parse('./**/*.scss', { verbose: true })
  .then(function (data) {
    console.log(data);
  });
