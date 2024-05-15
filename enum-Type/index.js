// numeric Type
var RequetType;
(function (RequetType) {
    RequetType[RequetType["readData"] = 1] = "readData";
    RequetType[RequetType["saveData"] = 2] = "saveData";
    RequetType[RequetType["deleteData"] = 3] = "deleteData";
})(RequetType || (RequetType = {}));
// console.log(RequetType)
// string enum
var RequetType2;
(function (RequetType2) {
    RequetType2["readData"] = "READ_DATA";
    RequetType2["saveData"] = "SAVE_DATA";
    RequetType2["deleteData"] = "DELETE_DATA";
})(RequetType2 || (RequetType2 = {}));
console.log(RequetType2.deleteData);
