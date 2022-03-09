class Repository {
    constructor() {
        this.__data = [];
    }

    exist(shortener) {
        return this.__data.filter((value) => value.shortener_url == shortener && value.deleted == 0) > 0;
    }

    expire(id) {
        this.__data.forEach((value, index )=> {
            if (value.id == id && value.deleted == 0) {
                this.__data[index].deleted = 1;
            }
        });
    }

    insert(data) {
        this.__data.push(data);
    }

    getShortener(shortener) {
        return this.__data.filter((value) => value.shortener_url == shortener && value.deleted == 0);
    }

    incrementVisualizations(shortener) {
        this.__data.forEach((value, index )=> {
            if (value.shortener_url == shortener && value.deleted == 0) {
                this.__data[index].visualizations += 1;
            }
        });
    }
}

module.exports = Repository;
