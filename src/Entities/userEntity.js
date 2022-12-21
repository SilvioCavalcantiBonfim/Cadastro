import GUID from "./toolkit";

export class UserEntity{
    constructor(id, name, age){
        this.id = id || GUID();
        this.name = name;
        this.age = age;
    }
}