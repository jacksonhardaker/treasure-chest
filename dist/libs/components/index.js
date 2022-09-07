import { jsx } from 'react/jsx-runtime';
import styled from 'styled-components';

function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n  all: unset;\n  background-color: hotpink;\n  color: white;\n  padding: 10px 20px;\n  border: 3px solid white;\n  border-radius: 10px;\n  font-family: monospace;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  font-size: 18px;\n  &:hover {\n    border: 3px solid limegreen;\n  }\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var Btn = styled.button(_templateObject());
var Button = function(props) {
    return /*#__PURE__*/ jsx(Btn, {
        children: props.children
    });
};

export { Button };
