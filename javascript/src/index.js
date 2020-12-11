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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/DeletableUser', 'model/InlineResponse200', 'model/InlineResponse400', 'model/InlineResponse409', 'model/InlineResponse410', 'model/InlineResponse422', 'model/User', 'model/User1', 'api/DevelopersApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/DeletableUser'), require('./model/InlineResponse200'), require('./model/InlineResponse400'), require('./model/InlineResponse409'), require('./model/InlineResponse410'), require('./model/InlineResponse422'), require('./model/User'), require('./model/User1'), require('./api/DevelopersApi'));
  }
}(function(ApiClient, DeletableUser, InlineResponse200, InlineResponse400, InlineResponse409, InlineResponse410, InlineResponse422, User, User1, DevelopersApi) {
  'use strict';

  /**
   * This_is_a_servak_API.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var SimpleServakApi = require('index'); // See note below*.
   * var xxxSvc = new SimpleServakApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new SimpleServakApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new SimpleServakApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new SimpleServakApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The DeletableUser model constructor.
     * @property {module:model/DeletableUser}
     */
    DeletableUser: DeletableUser,
    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200: InlineResponse200,
    /**
     * The InlineResponse400 model constructor.
     * @property {module:model/InlineResponse400}
     */
    InlineResponse400: InlineResponse400,
    /**
     * The InlineResponse409 model constructor.
     * @property {module:model/InlineResponse409}
     */
    InlineResponse409: InlineResponse409,
    /**
     * The InlineResponse410 model constructor.
     * @property {module:model/InlineResponse410}
     */
    InlineResponse410: InlineResponse410,
    /**
     * The InlineResponse422 model constructor.
     * @property {module:model/InlineResponse422}
     */
    InlineResponse422: InlineResponse422,
    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User: User,
    /**
     * The User1 model constructor.
     * @property {module:model/User1}
     */
    User1: User1,
    /**
     * The DevelopersApi service constructor.
     * @property {module:api/DevelopersApi}
     */
    DevelopersApi: DevelopersApi
  };

  return exports;
}));