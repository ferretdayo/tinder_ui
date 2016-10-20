"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var CardDetails = (function (_super) {
    __extends(CardDetails, _super);
    function CardDetails(props) {
        _super.call(this, props);
    }
    CardDetails.prototype.render = function () {
        return (React.createElement("div", {className: 'CardDetails ' + this.props.Animation, id: this.props.Index}, 
            React.createElement("div", {className: 'row'}, 
                React.createElement("div", {className: 'col m12 l12 s12'}, 
                    React.createElement("div", {className: 'card'}, 
                        React.createElement("div", {className: 'card-image'}, 
                            React.createElement("img", {src: this.props.userData.img}), 
                            React.createElement("span", {className: 'card-title', style: { width: '100%', backgroundColor: 'rgba(0,0,0,0.5)' }}, 
                                React.createElement("span", {style: { fontSize: '20px' }}, this.props.userData.nickname + " " + this.props.userData.age + "歳 " + this.props.userData.live), 
                                React.createElement("br", null), 
                                React.createElement("span", {style: { fontSize: '16px' }}, this.props.userData.comment))), 
                        React.createElement("div", {className: 'card-content', style: { textAlign: 'center' }}, this.props.userData.work + " " + this.props.userData.height + "cm"))
                )
            )
        ));
    };
    return CardDetails;
}(React.Component));
exports.CardDetails = CardDetails;
;
//# sourceMappingURL=CardDetails.js.map