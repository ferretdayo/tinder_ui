"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var CardDetails_1 = require("./CardDetails");
var CardNone_1 = require("./CardNone");
var CardList = (function (_super) {
    __extends(CardList, _super);
    function CardList(props) {
        _super.call(this, props);
        this.state = { data: [] };
    }
    CardList.prototype.render = function () {
        var _this = this;
        var users = this.props.CardData.concat().reverse();
        var nodes = users.map(function (userInfo, index) {
            console.log(index);
            if (userInfo === undefined && index === 0) {
                return (React.createElement(CardNone_1.CardNone, null));
            }
            else if (userInfo === undefined && index === 1) {
                return (React.createElement(CardNone_1.CardNone, null));
            }
            if (index === 0) {
                return (React.createElement(CardDetails_1.CardDetails, {Index: index, key: userInfo.id, userData: userInfo, Animation: ''}));
            }
            else {
                return (React.createElement(CardDetails_1.CardDetails, {Index: index, key: userInfo.id, userData: userInfo, Animation: _this.props.Animation}));
            }
        });
        return (React.createElement("div", {className: "CardList"}, nodes));
    };
    return CardList;
}(React.Component));
exports.CardList = CardList;
;
//# sourceMappingURL=CardList.js.map