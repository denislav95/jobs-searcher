String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

export const convertObjToArr = function(obj) {
    let keys = Object.keys(obj).map(function(key) {
        return [key];
    });

    let values = Object.keys(obj).map(function(key) {
       return [obj[key]];
    });

    return { keys, values }
}