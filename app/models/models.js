"use strict";
var Group = (function () {
    function Group(id, name, current_academic_year, current_year_of_study, start_year) {
        this.id = id;
        this.name = name;
        this.current_academic_year = current_academic_year;
        this.current_year_of_study = current_year_of_study;
        this.start_year = start_year;
    }
    Group.prototype.getId = function () {
        return this.id;
    };
    return Group;
}());
exports.Group = Group;
var Student = (function () {
    function Student(id, student_code, particulars, birth_date, first_name, middle_name, last_name, sex) {
        this.id = id;
        this.student_code = student_code;
        this.particulars = particulars;
        this.birth_date = birth_date;
        this.first_name = first_name;
        this.middle_name = middle_name;
        this.last_name = last_name;
        this.sex = sex;
    }
    return Student;
}());
exports.Student = Student;
var User = (function () {
    function User(id, username, password, clearance, email, phone, first_name, last_name, sex) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.clearance = clearance;
        this.email = email;
        this.phone = phone;
        this.first_name = first_name;
        this.last_name = last_name;
        this.sex = sex;
    }
    return User;
}());
exports.User = User;
var Announcement = (function () {
    function Announcement(id, message, author, title, type, first_name, last_name) {
    }
    return Announcement;
}());
exports.Announcement = Announcement;
var Test = (function () {
    function Test() {
    }
    return Test;
}());
exports.Test = Test;
//# sourceMappingURL=models.js.map