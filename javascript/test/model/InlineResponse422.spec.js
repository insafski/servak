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

  describe('(package)', function() {
    describe('InlineResponse422', function() {
      beforeEach(function() {
        instance = new SimpleServakApi.InlineResponse422();
      });

      it('should create an instance of InlineResponse422', function() {
        // TODO: update the code to test InlineResponse422
        expect(instance).to.be.a(SimpleServakApi.InlineResponse422);
      });

      it('should have the property title (base name: "title")', function() {
        // TODO: update the code to test the property title
        expect(instance).to.have.property('title');
        // expect(instance.title).to.be(expectedValueLiteral);
      });

      it('should have the property message (base name: "message")', function() {
        // TODO: update the code to test the property message
        expect(instance).to.have.property('message');
        // expect(instance.message).to.be(expectedValueLiteral);
      });

    });
  });

}));
