# SimpleServakApi.DevelopersApi

All URIs are relative to *https://virtserver.swaggerhub.com/insafski/servak/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addInventory**](DevelopersApi.md#addInventory) | **DELETE** /signup | delete user
[**checkSignUpParamsPost**](DevelopersApi.md#checkSignUpParamsPost) | **POST** /checkSignUpParams | check registration params
[**signinPost**](DevelopersApi.md#signinPost) | **POST** /signin | signin on server
[**signupPut**](DevelopersApi.md#signupPut) | **PUT** /signup | create new user


<a name="addInventory"></a>
# **addInventory**
> InlineResponse200 addInventory(opts)

delete user

Deletes an user from the system

### Example
```javascript
var SimpleServakApi = require('simple_servak_api');

var apiInstance = new SimpleServakApi.DevelopersApi();

var opts = { 
  'user': new SimpleServakApi.DeletableUser() // DeletableUser | User email to delete
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addInventory(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**DeletableUser**](DeletableUser.md)| User email to delete | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="checkSignUpParamsPost"></a>
# **checkSignUpParamsPost**
> Object checkSignUpParamsPost(opts)

check registration params

Check if exists already registered login or email

### Example
```javascript
var SimpleServakApi = require('simple_servak_api');

var apiInstance = new SimpleServakApi.DevelopersApi();

var opts = { 
  'user': new SimpleServakApi.User() // User | New user params to check
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkSignUpParamsPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**User**](User.md)| New user params to check | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="signinPost"></a>
# **signinPost**
> Object signinPost(opts)

signin on server

Sign in on the server and get token

### Example
```javascript
var SimpleServakApi = require('simple_servak_api');

var apiInstance = new SimpleServakApi.DevelopersApi();

var opts = { 
  'user': new SimpleServakApi.User1() // User1 | User item to sign in
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.signinPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**User1**](User1.md)| User item to sign in | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="signupPut"></a>
# **signupPut**
> Object signupPut(opts)

create new user

Add new user to the app

### Example
```javascript
var SimpleServakApi = require('simple_servak_api');

var apiInstance = new SimpleServakApi.DevelopersApi();

var opts = { 
  'user': new SimpleServakApi.User() // User | User item to add
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.signupPut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**User**](User.md)| User item to add | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

