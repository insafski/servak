/*
 * Simple Servak API
 * This is a servak API
 *
 * OpenAPI spec version: 1.0.0
 * Contact: insafski56@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.17
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SimpleServakApi);
  }
}(this, function(expect, SimpleServakApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SimpleServakApi.DevelopersApi();
  });

  describe('(package)', function() {
    describe('DevelopersApi', function() {
      describe('addInventory', function() {
        it('should call addInventory successfully', function(done) {
          // TODO: uncomment, update parameter values for addInventory call and complete the assertions
          /*
          var opts = {};
          opts.user = new SimpleServakApi.DeletableUser();
          opts.user.email = "example@gamil.com";

          instance.addInventory(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SimpleServakApi.InlineResponse200);
            expect(data.title).to.be.a('string');
            expect(data.title).to.be("Удаление пользователя");
            expect(data.message).to.be.a('string');
            expect(data.message).to.be("Удаление прошло успешно");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('checkSignUpParamsPost', function() {
        it('should call checkSignUpParamsPost successfully', function(done) {
          // TODO: uncomment, update parameter values for checkSignUpParamsPost call and complete the assertions
          /*
          var opts = {};
          opts.user = new SimpleServakApi.User();
          opts.user.login = "insafski";
          opts.user.email = "example@gamil.com";

          instance.checkSignUpParamsPost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Object);
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('signinPost', function() {
        it('should call signinPost successfully', function(done) {
          // TODO: uncomment, update parameter values for signinPost call and complete the assertions
          /*
          var opts = {};
          opts.user = new SimpleServakApi.User1();
          opts.user.login = "insafski";
          opts.user.email = "example@gamil.com";
          opts.user.password = "dkcjnn27h2xeI";

          instance.signinPost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Object);
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('signupPut', function() {
        it('should call signupPut successfully', function(done) {
          // TODO: uncomment, update parameter values for signupPut call and complete the assertions
          /*
          var opts = {};
          opts.user = new SimpleServakApi.User();
          opts.user.login = "insafski";
          opts.user.email = "example@gamil.com";

          instance.signupPut(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Object);
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
