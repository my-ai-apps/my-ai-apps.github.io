
/*!
Copyright © 2024 Saisha Pandit. All Rights Reserved.
Unauthorized use, modification, or distribution is strictly prohibited.
*/
const _0x3148be=_0x1124;(function(_0x5c2333,_0x254d34){const _0x1e8309=_0x1124,_0x50f10b=_0x5c2333();while(!![]){try{const _0x1ab3c7=parseInt(_0x1e8309(0x12e))/0x1+parseInt(_0x1e8309(0x138))/0x2*(-parseInt(_0x1e8309(0x128))/0x3)+parseInt(_0x1e8309(0x126))/0x4*(parseInt(_0x1e8309(0x11d))/0x5)+-parseInt(_0x1e8309(0x136))/0x6+parseInt(_0x1e8309(0x118))/0x7*(-parseInt(_0x1e8309(0x123))/0x8)+parseInt(_0x1e8309(0x10f))/0x9*(parseInt(_0x1e8309(0x11e))/0xa)+-parseInt(_0x1e8309(0x10e))/0xb*(-parseInt(_0x1e8309(0x129))/0xc);if(_0x1ab3c7===_0x254d34)break;else _0x50f10b['push'](_0x50f10b['shift']());}catch(_0x51edc5){_0x50f10b['push'](_0x50f10b['shift']());}}}(_0x33d5,0xc8fc0));import{Logger,displayError}from'./common.js';let aiLanguageSession=null,sessionConfig=JSON[_0x3148be(0x125)](localStorage[_0x3148be(0x12a)](_0x3148be(0x130)))||{'temperature':0x1,'topK':0x3,'systemRole':_0x3148be(0x115)};async function initializeLanguageSession(){const _0x3dfefc=_0x3148be,_0x35ca62={'aWbDE':'[Init]\x20Attempting\x20to\x20initialize\x20language\x20model\x20session...','SAGxQ':function(_0x92193a,_0x706569){return _0x92193a in _0x706569;},'qxrvT':_0x3dfefc(0x134),'IEfit':function(_0x12af2a,_0x5cccb9){return _0x12af2a(_0x5cccb9);},'JAIzl':_0x3dfefc(0x116),'mwYBl':_0x3dfefc(0x111),'mhrSh':_0x3dfefc(0x122)};console['log'](_0x35ca62['aWbDE']);if(!_0x35ca62[_0x3dfefc(0x12f)]('ai',self)||!self['ai'][_0x3dfefc(0x11c)]){const _0x294fd9=_0x35ca62['qxrvT'];console[_0x3dfefc(0x114)](_0x3dfefc(0x10b),_0x294fd9),Logger[_0x3dfefc(0x114)](_0x294fd9),_0x35ca62['IEfit'](displayError,_0x294fd9);return;}try{console[_0x3dfefc(0x11f)](_0x35ca62[_0x3dfefc(0x12d)]),aiLanguageSession=await self['ai'][_0x3dfefc(0x11c)][_0x3dfefc(0x110)]({'temperature':sessionConfig[_0x3dfefc(0x132)],'topK':sessionConfig['topK']}),console[_0x3dfefc(0x11f)](_0x35ca62[_0x3dfefc(0x112)],aiLanguageSession),Logger[_0x3dfefc(0x135)](_0x3dfefc(0x10c)+sessionConfig[_0x3dfefc(0x132)]+_0x3dfefc(0x11b)+sessionConfig[_0x3dfefc(0x119)]);}catch(_0x50c91a){console[_0x3dfefc(0x114)](_0x35ca62[_0x3dfefc(0x124)],_0x50c91a),displayError(errorMessage);}}function cleanJSONMarkdown(_0x3bae32){const _0x568563=_0x3148be,_0x177d5a={'dxLHH':'cleanJSONMarkdown:\x20Raw\x20JSON\x20response:\x20','QDRCO':function(_0x3abab9,_0x1933a2){return _0x3abab9===_0x1933a2;},'bbyvo':_0x568563(0x127),'SZawM':_0x568563(0x137),'ERZpr':_0x568563(0x133),'hqMZD':_0x568563(0x10d)};console[_0x568563(0x11f)](_0x177d5a['dxLHH'],_0x3bae32);let _0x4bd020=_0x3bae32;if(_0x177d5a['QDRCO'](typeof _0x4bd020,_0x177d5a[_0x568563(0x117)]))return console[_0x568563(0x11f)](_0x177d5a[_0x568563(0x120)]),_0x4bd020;if(_0x4bd020[_0x568563(0x12b)](_0x568563(0x11a))){const _0x348c74=_0x4bd020['match'](/```(?:json)?\s*([\s\S]*?)```/);_0x348c74&&_0x348c74[0x1]?_0x4bd020=_0x348c74[0x1]['trim']():_0x4bd020=_0x4bd020['replace'](/```.*?```/g,'')[_0x568563(0x121)]();}try{_0x4bd020=JSON[_0x568563(0x125)](_0x4bd020);}catch(_0x1ea72c){console[_0x568563(0x12c)](_0x177d5a[_0x568563(0x131)],_0x1ea72c);}return console['log'](_0x177d5a[_0x568563(0x113)],_0x4bd020),_0x4bd020;}function _0x33d5(){const _0x1d6c76=['8170236AgKVje','🛑\x20Response\x20is\x20already\x20an\x20object,\x20skipping\x20JSON.parse.','42512erVpXj','[Init]\x20','AI\x20session\x20initialized\x20with\x20Temperature:\x20','🧹\x20Cleaned\x20response:','22IeSGmj','332622BQedWm','create','[Init]\x20Language\x20model\x20session\x20created\x20successfully:','mwYBl','hqMZD','error','You\x20are\x20a\x20helpful\x20assistant.','[Init]\x20Creating\x20AI\x20language\x20model\x20session...','bbyvo','18949VnkzyX','topK','```',',\x20TopK:\x20','languageModel','105XnTjVd','230ANuKZf','log','SZawM','trim','[Init]\x20Failed\x20to\x20initialize\x20AI\x20language\x20model\x20session:','3104othGvB','mhrSh','parse','228728ValbwS','object','78sYYnIT','9016020bhfVcN','getItem','includes','warn','JAIzl','234384SkLySL','SAGxQ','sessionConfig','ERZpr','temperature','🛑\x20Failed\x20to\x20parse\x20response\x20as\x20JSON:','Browser\x20doesn\x27t\x20support\x20AI\x20API.\x20Enable\x20it\x20in\x20Chrome\x20flags.','info'];_0x33d5=function(){return _0x1d6c76;};return _0x33d5();}function _0x1124(_0x313da2,_0x1f764a){const _0x33d5d5=_0x33d5();return _0x1124=function(_0x112436,_0x11245a){_0x112436=_0x112436-0x10b;let _0x11ba1b=_0x33d5d5[_0x112436];return _0x11ba1b;},_0x1124(_0x313da2,_0x1f764a);}export{aiLanguageSession,cleanJSONMarkdown,initializeLanguageSession,sessionConfig};