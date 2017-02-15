namespace test.Services {
    export class FortuneService {
        displayFortune() {
            let fortunes = ["You'll have a great day.", "No Rain today!!", "Luck is on your side.", "You're Awesome", "You'll win big today"];

            let random = fortunes[Math.floor(Math.random() * fortunes.length)];

            return random;


        }

    }

    angular.module('test').service('FortuneService', FortuneService);

    //angular.module('test', ['FortuneService']);
}
