appModule.factory('traspasoFactory', function($http) {
    return {
        traspasoFinanciera: function(params) {
            return $http({
                url: '/apiTraspaso/TraspasoFinanciera',
                method: "GET",
                params: params,
                headers: { 'Content-Type': 'application/json' }
            });
        },
        traspasoFinancieraDetalle: function(params) {
            return $http({
                url: '/apiTraspaso/TraspasoFinancieraDetalle',
                method: "GET",
                params: params,
                headers: { 'Content-Type': 'application/json' }
            });
        },
        setChangeSchema: function(params) {
            return $http({
                url: '/apiTraspaso/setChangeSchema',
                method: "GET",
                params: params,
                headers: { 'Content-Type': 'application/json' }
            });
        }
    };
});