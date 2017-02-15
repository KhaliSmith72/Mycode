namespace test.Controllers {
    
    export class ProductsController {
        public products;

        static $inject = ["$http"];

        constructor($http: ng.IHttpService) {
            $http.get('/api/products/').then((response) => {
                this.products = response.data;
            }) 
        }
    }
    angular.module("test").controller("ProductController", ProductsController);

    export class FortuneController {
        public fortune;
        //static $inject = ["test.Services.FortuneService"];
        constructor(FortuneService: test.Services.FortuneService) {
            this.fortune = FortuneService.displayFortune();
        }

    }
    export class HomeController {
        public message = 'Hello from the home page!';
    }



    export class AboutController {
        public message = 'Hello from the about page!';
    }

}
