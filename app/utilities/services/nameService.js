angular.module('myClothingApp')
.factory('nameService', function(){
    return {
        findName: function(categories, link) {
            for (var i = 0; i < categories.length; i++) {
                if (categories[i].link === link) {
                    return categories[i].name;
                }
            }
        }
    };
});