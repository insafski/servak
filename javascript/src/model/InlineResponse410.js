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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SimpleServakApi) {
      root.SimpleServakApi = {};
    }
    root.SimpleServakApi.InlineResponse410 = factory(root.SimpleServakApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The InlineResponse410 model module.
   * @module model/InlineResponse410
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>InlineResponse410</code>.
   * @alias module:model/InlineResponse410
   * @class
   * @param title {String} 
   * @param message {String} 
   * @param params {Object} 
   */
  var exports = function(title, message, params) {
    this.title = title;
    this.message = message;
    this.params = params;
  };

  /**
   * Constructs a <code>InlineResponse410</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse410} obj Optional instance to populate.
   * @return {module:model/InlineResponse410} The populated <code>InlineResponse410</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
      if (data.hasOwnProperty('message'))
        obj.message = ApiClient.convertToType(data['message'], 'String');
      if (data.hasOwnProperty('params'))
        obj.params = ApiClient.convertToType(data['params'], Object);
    }
    return obj;
  }

  /**
   * @member {String} title
   */
  exports.prototype.title = undefined;

  /**
   * @member {String} message
   */
  exports.prototype.message = undefined;

  /**
   * @member {Object} params
   */
  exports.prototype.params = undefined;

  return exports;

}));
