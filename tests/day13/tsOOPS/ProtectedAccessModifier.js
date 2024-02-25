"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Player = /** @class */ (function () {
    function Player() {
    }
    Player.prototype.displayDetails = function () {
        console.log('Player class called');
    };
    return Player;
}());
var ProtectedPlayer = /** @class */ (function (_super) {
    __extends(ProtectedPlayer, _super);
    function ProtectedPlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProtectedPlayer.prototype.setPlayerDetails = function (age, name, isHeActive) {
        this.age = age;
        this.name = name;
        this.isHeActive = isHeActive;
        console.log(this.age, this.name, this.isHeActive);
    };
    ProtectedPlayer.prototype.displayDetails = function () {
        console.log('Protected Player class called');
    };
    return ProtectedPlayer;
}(Player));
var player = new ProtectedPlayer();
player.setPlayerDetails(35, 'Esaimani', true);
player.displayDetails();
