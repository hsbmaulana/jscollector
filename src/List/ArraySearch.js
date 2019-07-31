"use strict";

module.exports = class ArraySearch
{
    constructor(collection, value)
    {
        this.collection = collection;
        this.value = value;
    }

    linier()
    {
        for(let i = 0; i < this.collection.count(); i++) {

            if(this.collection.list[i] === this.value) {

                return i;
            }
        }

        return -1;
    }
}