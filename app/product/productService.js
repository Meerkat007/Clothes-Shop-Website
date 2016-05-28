angular.module('myClothingApp')
.factory('productService', function(){
    var categories = {
      'ladies': [
            {name: 'Dresses', link: 'dresses'}, 
            {name: 'Tops', link: 'tops'},
            {name: 'Skirts', link: 'skirts'},
            {name: 'Shorts', link: 'shorts'},
            {name: 'Swimwear', link: 'swimwear'},
            {name: 'Trousers', link: 'trousers'},
            {name: 'Jeans', link: 'jeans'},
            {name: 'Jackets', link: 'jackets'},
            {name: 'Shoes', link: 'shoes'}
      ],
      'men': [
            {name: 'T-shirts', link: 't-shirts'}, 
            {name: 'Hoodies', link: 'hoodies'},
            {name: 'Sweaters', link: 'sweaters'},
            {name: 'Shorts', link: 'shorts'},
            {name: 'Swimwear', link: 'swimwear'},
            {name: 'Trousers', link: 'trousers'},
            {name: 'Jeans', link: 'jeans'},
            {name: 'Jackets', link: 'jackets'},
            {name: 'Shoes', link: 'shoes'}
      ],
      'kids': [
          {name: 'Newborn 0-9m', link: 'newborn-0-9m'},
            {name: 'Baby Girl 4m-2y', link: 'baby-Girl-4m-2y'},
            {name: 'Baby Boy 4m-2y', link: 'baby-Boy-4m-2y'},
            {name: 'Girls 18m-10y', link: 'girls-18m-10y'},
            {name: 'Boys 18m-10y', link: 'boys-18m-10y'},
            {name: 'Girls 8-14y+', link: 'girls-8-14y'},
            {name: 'Boys 8-14y+', link: 'boys-8-14y'}
      ]
    };
    
    var productListing = {
        'ladies': [
            {image: 'app/ladies/ladies_images/dresses/dress-sample.png', name: 'Cut-out dress', price: 29.99},
            {image: 'app/ladies/ladies_images/dresses/dress-sample.png', name: 'Patterned dress', price: 39.99},
            {image: 'app/ladies/ladies_images/dresses/dress-sample.png', name: 'Sleeveless dress', price: 19.99},
            {image: 'app/ladies/ladies_images/dresses/dress-sample.png', name: 'Patterned dress', price: 39.99},
            {image: 'app/ladies/ladies_images/dresses/dress-sample.png', name: 'Patterned dress', price: 39.99},
            {image: 'app/ladies/ladies_images/dresses/dress-sample.png', name: 'Patterned dress', price: 39.99},
            {image: 'app/ladies/ladies_images/dresses/dress-sample.png', name: 'Patterned dress', price: 39.99},
            {image: 'app/ladies/ladies_images/dresses/dress-sample.png', name: 'Patterned dress', price: 39.99}
        ],
        'men': [
             {image: 'app/ladies/ladies_images/dresses/dress-sample.png', name: 'Cutton T-shirt', price: 29.99},
            {image: 'app/ladies/ladies_images/dresses/dress-sample.png', name: 'Cutton T-shirt', price: 39.99},
            {image: 'app/ladies/ladies_images/dresses/dress-sample.png', name: 'Stretch T-shirt', price: 19.99},
            {image: 'app/ladies/ladies_images/dresses/dress-sample.png', name: 'Stretch T-shirt', price: 39.99},
            {image: 'app/ladies/ladies_images/dresses/dress-sample.png', name: 'Stretch T-shirt', price: 39.99},
            {image: 'app/ladies/ladies_images/dresses/dress-sample.png', name: 'Vest top', price: 39.99},
            {image: 'app/ladies/ladies_images/dresses/dress-sample.png', name: 'Vest top', price: 39.99},
            {image: 'app/ladies/ladies_images/dresses/dress-sample.png', name: 'Vest top', price: 39.99}
        ],
        'kids': [
            {image: 'app/ladies/ladies_images/dresses/dress-sample.png', name: 'Workwear romper suit', price: 29.99},
            {image: 'app/ladies/ladies_images/dresses/dress-sample.png', name: 'Workwear romper suit', price: 29.99},
            {image: 'app/ladies/ladies_images/dresses/dress-sample.png', name: 'Jersey shorts', price: 39.99},
            {image: 'app/ladies/ladies_images/dresses/dress-sample.png', name: 'Jersey shorts', price: 39.99},
            {image: 'app/ladies/ladies_images/dresses/dress-sample.png', name: 'sleeveless bodysuits', price: 19.99},
            {image: 'app/ladies/ladies_images/dresses/dress-sample.png', name: 'long-sleeved bodysuits', price: 39.99},
            {image: 'app/ladies/ladies_images/dresses/dress-sample.png', name: 'long-sleeved bodysuits', price: 39.99},
            {image: 'app/ladies/ladies_images/dresses/dress-sample.png', name: 'long-sleeved bodysuits', price: 39.99},
        ]
    };
    
    return {
        getCategories: function(gender) {
            return categories[gender];
        },
        
        getProductListing: function(gender, category) {
            //TODO 
            //add category
            return productListing[gender];
        }
    };
});