// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by testpp.js.
import { name as packageName } from "meteor/testpp";

// Write your tests here!
// Here is an example.
Tinytest.add('testpp - example', function (test) {
  test.equal(packageName, "testpp");
});
