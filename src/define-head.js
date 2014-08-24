define(['objectpath','tv4', 'angular-sanitize'], function(objectpath, tv4){

		// register objectpath module
		angular.module('ObjectPath', []).provider('ObjectPath', function(){
			this.parse = objectpath.parse;
			this.stringify = objectpath.stringify;
			this.normalize = objectpath.normalize;
			this.$get = function(){
				return objectpath;
			};
		});

