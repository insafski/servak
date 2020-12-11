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
    define(['ApiClient', 'model/DeletableUser', 'model/InlineResponse200', 'model/InlineResponse400', 'model/InlineResponse409', 'model/InlineResponse410', 'model/InlineResponse422', 'model/User', 'model/User1'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DeletableUser'), require('../model/InlineResponse200'), require('../model/InlineResponse400'), require('../model/InlineResponse409'), require('../model/InlineResponse410'), require('../model/InlineResponse422'), require('../model/User'), require('../model/User1'));
  } else {
    // Browser globals (root is window)
    if (!root.SimpleServakApi) {
      root.SimpleServakApi = {};
    }
    root.SimpleServakApi.DevelopersApi = factory(root.SimpleServakApi.ApiClient, root.SimpleServakApi.DeletableUser, root.SimpleServakApi.InlineResponse200, root.SimpleServakApi.InlineResponse400, root.SimpleServakApi.InlineResponse409, root.SimpleServakApi.InlineResponse410, root.SimpleServakApi.InlineResponse422, root.SimpleServakApi.User, root.SimpleServakApi.User1);
  }
}(this, function(ApiClient, DeletableUser, InlineResponse200, InlineResponse400, InlineResponse409, InlineResponse410, InlineResponse422, User, User1) {
  'use strict';

  /**
   * Developers service.
   * @module api/DevelopersApi
   * @version 1.0.0
   */

  /**
   * Constructs a new DevelopersApi. 
   * @alias module:api/DevelopersApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addInventory operation.
     * @callback module:api/DevelopersApi~addInventoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * delete user
     * Deletes an user from the system
     * @param {Object} opts Optional parameters
     * @param {module:model/DeletableUser} opts.user User email to delete
     * @param {module:api/DevelopersApi~addInventoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200}
     */
    this.addInventory = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['user'];


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InlineResponse200;

      return this.apiClient.callApi(
        '/signup', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the checkSignUpParamsPost operation.
     * @callback module:api/DevelopersApi~checkSignUpParamsPostCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * check registration params
     * Check if exists already registered login or email
     * @param {Object} opts Optional parameters
     * @param {module:model/User} opts.user New user params to check
     * @param {module:api/DevelopersApi~checkSignUpParamsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.checkSignUpParamsPost = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['user'];


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/checkSignUpParams', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the signinPost operation.
     * @callback module:api/DevelopersApi~signinPostCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * signin on server
     * Sign in on the server and get token
     * @param {Object} opts Optional parameters
     * @param {module:model/User1} opts.user User item to sign in
     * @param {module:api/DevelopersApi~signinPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.signinPost = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['user'];


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/signin', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the signupPut operation.
     * @callback module:api/DevelopersApi~signupPutCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * create new user
     * Add new user to the app
     * @param {Object} opts Optional parameters
     * @param {module:model/User} opts.user User item to add
     * @param {module:api/DevelopersApi~signupPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.signupPut = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['user'];


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/signup', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));