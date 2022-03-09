const Shortener = require('./shortener');
const Repository = require('./repository');

class Controller {
    constructor() {
        let repository = new Repository();
        this.__service = new Shortener(repository);
    }

    post(url) {
        return this.__service.create(url);
    }

    get(shortener) {
        return this.__service.recover(shortener);
    }
}

module.exports = Controller;
