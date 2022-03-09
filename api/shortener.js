class Shortener {
    constructor(repository, timeExpireShortener = 60000) {
        this.__repository = repository;
        this.__timeExpireRegister = timeExpireShortener;
    }

    __exist(shortener) {
        return this.__repository.exist(shortener) != false;
    }

    __randomValue(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    __hash(min = 6, max = 10) {
        let hash = '';
        let word = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';

        let size = this.__randomValue(min, max);

        for (let i = 0; i < size; i++) {
            hash += word.charAt(this.__randomValue(1, word.length));
        }

        return hash;
    }

    __generate() {
        let shortener = this.__hash();

        if (this.__exist(shortener)) {
            shortener = this.__generate();
        }

        return shortener;
    }

    __databaseStructure(url, shortener) {
        return {
            'id': this.__hash(6, 1000),
            'url': url,
            'shortener_url': shortener,
            'visualizations': 0,
            'created_at': Date.now(),
            'deleted': 0
        };
    }

    __responsePostStructure(newUrl) {
        return {
            'new_url': newUrl
        };
    }

    __timeExpire() {
        return this.__timeExpireRegister;
    }

    __expire(data) {
        setTimeout(() => {
            console.log(data);
            this.__repository.expire(data.id)
        }, this.__timeExpire());

    }

    __responseGetStructure(data) {
        if (!data || !Array.isArray(data) || !data.length) {
            return;
        }

        return {
            'url': data[0]['url']
        };
    }

    create(url) {
        if (!url) {
            throw 'is required url';
        }

        let newUrl = this.__generate();
        let data = this.__databaseStructure(url, newUrl);
        let response = this.__responsePostStructure(newUrl);

        this.__repository.insert(data);
        this.__expire(data);

        return response;
    }

    recover(shortenerUrl) {
        if (!shortenerUrl) {
            throw 'is required shortener url';
        }

        this.__repository.incrementVisualizations(shortenerUrl);
        let data = this.__repository.getShortener(shortenerUrl);
        let response = this.__responseGetStructure(data);

        return response;
    }
}

module.exports = Shortener;
