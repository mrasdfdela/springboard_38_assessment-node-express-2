# Bugs
-test for 'POST /auth/login' did not check for admin login & access denial; added tests to check for login with admin/incorrect credentials & updated corresponding route to 'await' authentication credentials
-test suite for 'GET /users/:username did not check for querying non-existing user; added test and 'throw' clause to corresponding User#get method
-test suite for 'PATCH /:username' does not test for a user trying to update their own information; removed middleware requireAdmin.
-test suite for 'PATCH /:username' does not filter out change request for 'admin' fields; added statement to throw 'unauthorized' error when users try to change the admin status
-test suite for 'DELETE /:username' does not test case when an admin tries to delete a non-existant user; added test and corresponding route to 'await' asynchronous User#delete method

# Misc.
-app.js has two instances of the app export (module.exports = app;)
-in routes.test.js --> beforeEach: updated INSERT statement w/ explicit list of column names, added variables for clarity
-updated test for GET /users look include a response body instead of body length
-added test for GET /users/:username to look for non-existant user (while logged in)