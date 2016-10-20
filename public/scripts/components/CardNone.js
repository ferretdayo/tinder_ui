"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var CardNone = (function (_super) {
    __extends(CardNone, _super);
    function CardNone(props) {
        _super.call(this, props);
    }
    CardNone.prototype.render = function () {
        return (React.createElement("div", {className: 'CardNone', style: { width: '100%', textAlign: 'center' }}, 
            React.createElement("div", {className: 'row'}, 
                React.createElement("div", {className: 'col m12 l12 s12'}, 
                    React.createElement("div", {className: 'card'}, 
                        React.createElement("div", {className: 'card-title'}, 
                            React.createElement("p", {className: 'nothing'}, "カードがありません")
                        )
                    )
                )
            )
        ));
    };
    return CardNone;
}(React.Component));
exports.CardNone = CardNone;
;
//# sourceMappingURL=CardNone.js.map