
/*!
Copyright © 2024 Saisha Pandit. All Rights Reserved.
Unauthorized use, modification, or distribution is strictly prohibited.
*/
var _0x468a57=_0x2e5e;function _0x2e5e(_0x13e689,_0x276723){var _0x5764a9=_0x5764();return _0x2e5e=function(_0x2e5ef0,_0x5ba936){_0x2e5ef0=_0x2e5ef0-0x9f;var _0x3c792f=_0x5764a9[_0x2e5ef0];return _0x3c792f;},_0x2e5e(_0x13e689,_0x276723);}function _0x5764(){var _0x37ae3b=['181100ZWyyKA','1794SzbZzp','initEventListeners','1970gvVlJZ','1919440zRdlNY','195kcfSAt','chat-bar-component','2324PvxAJw','define','KgUSh','2889TZhixH','7286VFkEpg','shadowRoot','3864YnqNBW','5467kttDiv','innerHTML','6233348JYKaGg'];_0x5764=function(){return _0x37ae3b;};return _0x5764();}(function(_0x22f3e5,_0x18cff9){var _0x541300=_0x2e5e,_0xe7135e=_0x22f3e5();while(!![]){try{var _0x15c870=-parseInt(_0x541300(0xa0))/0x1+parseInt(_0x541300(0xab))/0x2*(parseInt(_0x541300(0xa5))/0x3)+-parseInt(_0x541300(0xa7))/0x4*(parseInt(_0x541300(0xa3))/0x5)+parseInt(_0x541300(0xa1))/0x6*(-parseInt(_0x541300(0xae))/0x7)+-parseInt(_0x541300(0xad))/0x8*(-parseInt(_0x541300(0xaa))/0x9)+-parseInt(_0x541300(0xa4))/0xa+parseInt(_0x541300(0x9f))/0xb;if(_0x15c870===_0x18cff9)break;else _0xe7135e['push'](_0xe7135e['shift']());}catch(_0x520b53){_0xe7135e['push'](_0xe7135e['shift']());}}}(_0x5764,0x1e095));class ChatBarComponent extends HTMLElement{constructor(){var _0x5e3499=_0x2e5e,_0x5aa699={'KgUSh':'open'};super(),this['attachShadow']({'mode':_0x5aa699[_0x5e3499(0xa9)]}),this[_0x5e3499(0xac)][_0x5e3499(0xaf)]='\x0a\x20\x20\x20\x20\x20\x20\x20\x20<style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20Component\x20container\x20-\x20match\x20input\x20container\x20width\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20:host\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20block;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20max-width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20Main\x20chat\x20bar\x20container\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.chat-bar-container\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gap:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x206px\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x20var(--border-radius);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20var(--bg-secondary);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-sizing:\x20border-box;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20</style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Component\x20HTML\x20structure\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chat-bar-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<edit-button-component></edit-button-component>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<quick-prompt-component></quick-prompt-component>\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<model-selector-component></model-selector-component>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<settings-button-component></settings-button-component>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20',this[_0x5e3499(0xa2)]();}[_0x468a57(0xa2)](){}}customElements[_0x468a57(0xa8)](_0x468a57(0xa6),ChatBarComponent);