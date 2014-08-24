define(['objectpath','tv4'], function(objectpath, tv4){

		// register objectpath module
		angular.module('ObjectPath', []).provider('ObjectPath', function(){
			this.parse = object.parse;
			this.stringify = object.stringify;
			this.normalize = object.normalize;
			this.$get = function(){
				return object;
			};
		});

