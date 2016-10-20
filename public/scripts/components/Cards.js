"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var data_1 = require("../data/data");
var CardNopeButton_1 = require("./CardNopeButton");
var CardLikeButton_1 = require("./CardLikeButton");
var CardList_1 = require("./CardList");
var Cards = (function (_super) {
    __extends(Cards, _super);
    function Cards(props) {
        _super.call(this, props);
        this.state = { data: [], animation: '', disabled: false, hidden: false };
    }
    Cards.prototype.loadUserInfo = function () {
        this.currentData = [data_1.UserData.shift(), data_1.UserData[0]];
        this.checkData(this.currentData);
        this.setState({ data: this.currentData, animation: '', disabled: false, hidden: false });
    };
    Cards.prototype.checkData = function (data) {
        if (data[0] === undefined && data[1] === undefined) {
            this.setState({ data: this.state.data, animation: '', disabled: this.state.disabled, hidden: true });
        }
    };
    Cards.prototype.onNope = function (e) {
        var _this = this;
        e.preventDefault();
        this.setState({ data: this.state.data, animation: 'rotateOutUpLeft animated', disabled: true, hidden: this.state.hidden });
        setTimeout(function () {
            _this.currentData = [data_1.UserData.shift(), data_1.UserData[0]];
            _this.checkData(_this.currentData);
            _this.setState({ data: _this.currentData, animation: '', disabled: false, hidden: _this.state.hidden });
        }, 1000);
    };
    Cards.prototype.onLike = function (e) {
        var _this = this;
        e.preventDefault();
        this.setState({ data: this.state.data, animation: 'rotateOutUpRight animated', disabled: true, hidden: this.state.hidden });
        setTimeout(function () {
            _this.currentData = [data_1.UserData.shift(), data_1.UserData[0]];
            _this.checkData(_this.currentData);
            _this.setState({ data: _this.currentData, animation: '', disabled: false, hidden: _this.state.hidden });
        }, 1000);
    };
    Cards.prototype.componentDidMount = function () {
        this.loadUserInfo();
    };
    Cards.prototype.render = function () {
        return (React.createElement("div", {className: "Cards"}, 
            React.createElement(CardList_1.CardList, {CardData: this.state.data, Animation: this.state.animation}), 
            React.createElement("div", {style: { textAlign: 'center' }}, 
                React.createElement(CardNopeButton_1.CardNopeButton, {onNopeClick: this.onNope.bind(this), Disabled: this.state.disabled, Hidden: this.state.hidden}), 
                React.createElement(CardLikeButton_1.CardLikeButton, {onLikeClick: this.onLike.bind(this), Disabled: this.state.disabled, Hidden: this.state.hidden}))));
    };
    return Cards;
}(React.Component));
exports.Cards = Cards;
;
//# sourceMappingURL=Cards.js.map