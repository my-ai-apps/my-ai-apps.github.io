
/*!
Copyright © 2024 Saisha Pandit. All Rights Reserved.
Unauthorized use, modification, or distribution is strictly prohibited.
*/
const _0x2d044b=_0x1455;(function(_0x421d9f,_0x252317){const _0x5a5a68=_0x1455,_0x4f07a7=_0x421d9f();while(!![]){try{const _0x1b8a8c=parseInt(_0x5a5a68(0x12a))/0x1+-parseInt(_0x5a5a68(0x124))/0x2*(parseInt(_0x5a5a68(0x134))/0x3)+-parseInt(_0x5a5a68(0x13a))/0x4*(-parseInt(_0x5a5a68(0x11b))/0x5)+parseInt(_0x5a5a68(0x102))/0x6*(parseInt(_0x5a5a68(0x129))/0x7)+parseInt(_0x5a5a68(0xfb))/0x8*(-parseInt(_0x5a5a68(0x10d))/0x9)+-parseInt(_0x5a5a68(0x128))/0xa*(parseInt(_0x5a5a68(0x107))/0xb)+parseInt(_0x5a5a68(0x114))/0xc;if(_0x1b8a8c===_0x252317)break;else _0x4f07a7['push'](_0x4f07a7['shift']());}catch(_0x22b5d2){_0x4f07a7['push'](_0x4f07a7['shift']());}}}(_0x25f2,0x5b9fd));import{Logger}from'./common.js';function _0x1455(_0x3011a1,_0x1de576){const _0x25f252=_0x25f2();return _0x1455=function(_0x145599,_0x5c1fb6){_0x145599=_0x145599-0xf0;let _0x14fa73=_0x25f252[_0x145599];return _0x14fa73;},_0x1455(_0x3011a1,_0x1de576);}function _0x25f2(){const _0x18e4a5=['pop','now','624780IPJNno','14kLVFrB','505661aEDjtF','reduce','\x20most\x20recent\x20conversations','switchConversation','nZvmU','cleanupStorage','info','join','yGFUB','SUjDv','48MBSHwB','notifyError','deleteConversation','sort','user','RMTPs','4XRLtPf','eHTuX','New\x20Conversation','stringify','conv_','keys','removeEventListener','LMhnU','currentConversationId','messages','Storage\x20cleanup\x20completed','nffaW','uYtNN','values','ZWJEx','8UMYTmc','\x20conversations','addMessage','warn','GuWkv','length','nnImD','1571034KlOAPZ','conversations','getSortedConversations','WCcjI','split','22PRvPle','getCurrentConversation','slice','notifyCurrentConversationChange','MAX_CONVERSATIONS','...','4607298tHbMiX','listeners','eVbsd','parse','updatedAt','Trimmed\x20to\x20','forEach','7809768hKjIFD','2|0|3|1|4','createdAt','title','toISOString','addEventListener','URjGa','203530JlbCtW','error','3|1|4|2|0','loadConversations','Failed\x20to\x20save\x20conversations','saveConversations','MAX_STORAGE_SIZE','setItem','push','88586ulBQbR','Conversations\x20saved\x20successfully'];_0x25f2=function(){return _0x18e4a5;};return _0x25f2();}class Conversation{constructor(_0x2368e6,_0x12fb3c){const _0x50e9ac=_0x1455,_0x3c7df9={'uYtNN':_0x50e9ac(0x11d)},_0x4ce7dd=_0x3c7df9[_0x50e9ac(0xf8)][_0x50e9ac(0x106)]('|');let _0x266287=0x0;while(!![]){switch(_0x4ce7dd[_0x266287++]){case'0':this[_0x50e9ac(0x111)]=new Date()['toISOString']();continue;case'1':this[_0x50e9ac(0x117)]=_0x12fb3c;continue;case'2':this[_0x50e9ac(0x116)]=new Date()[_0x50e9ac(0x118)]();continue;case'3':this['id']=_0x2368e6;continue;case'4':this['messages']=[];continue;}break;}}}class ChatManager{constructor(){const _0x5af747=_0x1455,_0x1063ef={'RMTPs':function(_0x326afe,_0x48e52a){return _0x326afe*_0x48e52a;},'eHTuX':function(_0x5b593e,_0x423041){return _0x5b593e*_0x423041;}},_0x547721='1|3|5|0|2|4'[_0x5af747(0x106)]('|');let _0x28aa04=0x0;while(!![]){switch(_0x547721[_0x28aa04++]){case'0':this[_0x5af747(0x121)]=_0x1063ef[_0x5af747(0x139)](_0x1063ef[_0x5af747(0x13b)](4.5,0x400),0x400);continue;case'1':this[_0x5af747(0x103)]={};continue;case'2':this[_0x5af747(0x10b)]=0x32;continue;case'3':this[_0x5af747(0xf4)]=null;continue;case'4':this['loadConversations']();continue;case'5':this[_0x5af747(0x10e)]={'onConversationUpdate':[],'onCurrentConversationChange':[],'onError':[]};continue;}break;}}async[_0x2d044b(0x11e)](){const _0x236ac3=_0x2d044b,_0x2dc123={'yGFUB':_0x236ac3(0x115),'nZvmU':_0x236ac3(0x103),'SUjDv':'Failed\x20to\x20load\x20conversations'};try{const _0x22951b=localStorage['getItem'](_0x2dc123[_0x236ac3(0x12e)]);if(_0x22951b){const _0x2b3936=JSON[_0x236ac3(0x110)](_0x22951b)||[];this[_0x236ac3(0x103)]=_0x2b3936[_0x236ac3(0x12b)]((_0x3fbb5e,_0x54073c)=>{const _0x3558c4=_0x236ac3,_0x5236fd=_0x2dc123[_0x3558c4(0x132)][_0x3558c4(0x106)]('|');let _0xbb0196=0x0;while(!![]){switch(_0x5236fd[_0xbb0196++]){case'0':_0x3fbb5e[_0x54073c['id']][_0x3558c4(0xf5)]=_0x54073c[_0x3558c4(0xf5)]||[];continue;case'1':_0x3fbb5e[_0x54073c['id']][_0x3558c4(0x111)]=_0x54073c[_0x3558c4(0x111)];continue;case'2':_0x3fbb5e[_0x54073c['id']]=new Conversation(_0x54073c['id'],_0x54073c[_0x3558c4(0x117)]);continue;case'3':_0x3fbb5e[_0x54073c['id']]['createdAt']=_0x54073c['createdAt'];continue;case'4':return _0x3fbb5e;}break;}},{}),Object['keys'](this['conversations'])[_0x236ac3(0x100)]>0x0&&(this[_0x236ac3(0xf4)]=Object[_0x236ac3(0xf1)](this[_0x236ac3(0x103)])[0x0]),Logger[_0x236ac3(0x130)]('Loaded\x20'+Object[_0x236ac3(0xf1)](this[_0x236ac3(0x103)])['length']+_0x236ac3(0xfc));}}catch(_0x471fa1){const _0x8c6386=Logger[_0x236ac3(0x11c)](_0x2dc123[_0x236ac3(0x133)],_0x471fa1);this[_0x236ac3(0x135)](_0x8c6386),this[_0x236ac3(0x103)]={};}}async['saveConversations'](){const _0x274662=_0x2d044b,_0x2b43b3={'uLWhh':function(_0x250ed1,_0x110eb3){return _0x250ed1>_0x110eb3;},'eVbsd':_0x274662(0x11f)};try{const _0x3df11d=JSON[_0x274662(0x13d)](Object[_0x274662(0xf9)](this[_0x274662(0x103)]));_0x2b43b3['uLWhh'](_0x3df11d[_0x274662(0x100)],this[_0x274662(0x121)])&&await this[_0x274662(0x12f)](),localStorage[_0x274662(0x122)](_0x274662(0x103),_0x3df11d),this['notifyConversationUpdate'](),Logger['info'](_0x274662(0x125));}catch(_0x13c938){const _0x1a20b5=Logger['error'](_0x2b43b3[_0x274662(0x10f)],_0x13c938);this[_0x274662(0x135)](_0x1a20b5);}}async[_0x2d044b(0x12f)](){const _0x34c9ab=_0x2d044b,_0x4d5bc2={'nffaW':'Storage\x20cleanup\x20initiated','Jlkss':function(_0x168acb,_0x32c49a){return _0x168acb>_0x32c49a;},'LmDlT':function(_0x388c3b,_0x2a6726){return _0x388c3b>_0x2a6726;},'LMhnU':function(_0x12a2c7,_0x2e0856){return _0x12a2c7>_0x2e0856;},'nnImD':function(_0x54b29c,_0x2a5030){return _0x54b29c>_0x2a5030;},'WCcjI':_0x34c9ab(0xf6)};Logger[_0x34c9ab(0xfe)](_0x4d5bc2[_0x34c9ab(0xf7)]);const _0x641bb1=this['getSortedConversations']();_0x4d5bc2['Jlkss'](_0x641bb1[_0x34c9ab(0x100)],this[_0x34c9ab(0x10b)])&&(this[_0x34c9ab(0x103)]=_0x641bb1['slice'](0x0,this[_0x34c9ab(0x10b)])[_0x34c9ab(0x12b)]((_0x51d132,_0x538e83)=>{return _0x51d132[_0x538e83['id']]=_0x538e83,_0x51d132;},{}),Logger[_0x34c9ab(0x130)](_0x34c9ab(0x112)+this['MAX_CONVERSATIONS']+_0x34c9ab(0x12c)));let _0xcb4b08=JSON['stringify'](Object[_0x34c9ab(0xf9)](this[_0x34c9ab(0x103)]))[_0x34c9ab(0x100)];while(_0x4d5bc2['LmDlT'](_0xcb4b08,this[_0x34c9ab(0x121)])&&_0x4d5bc2[_0x34c9ab(0xf3)](Object['keys'](this['conversations'])[_0x34c9ab(0x100)],0x0)){const _0x392d06=_0x641bb1[_0x34c9ab(0x126)]();_0x4d5bc2[_0x34c9ab(0x101)](_0x392d06['messages']['length'],0xa)?_0x392d06[_0x34c9ab(0xf5)]=_0x392d06['messages'][_0x34c9ab(0x109)](-0xa):delete this[_0x34c9ab(0x103)][_0x392d06['id']],_0xcb4b08=JSON[_0x34c9ab(0x13d)](Object[_0x34c9ab(0xf9)](this['conversations']))[_0x34c9ab(0x100)];}Logger[_0x34c9ab(0x130)](_0x4d5bc2[_0x34c9ab(0x105)]);}async['createNewConversation'](_0x1546c5=_0x2d044b(0x13c)){const _0x1f970f=_0x2d044b,_0x5d7a57=_0x1f970f(0xf0)+Date[_0x1f970f(0x127)](),_0x246336=new Conversation(_0x5d7a57,_0x1546c5);return this[_0x1f970f(0x103)][_0x5d7a57]=_0x246336,this[_0x1f970f(0xf4)]=_0x5d7a57,await this[_0x1f970f(0x120)](),this['notifyCurrentConversationChange'](),_0x5d7a57;}[_0x2d044b(0x108)](){const _0x1ff56b=_0x2d044b;return this[_0x1ff56b(0x103)][this[_0x1ff56b(0xf4)]]||null;}async[_0x2d044b(0xfd)](_0x50d591,_0x49d43a){const _0x38e1fe=_0x2d044b,_0x8a4237={'GuWkv':function(_0x4e313d,_0x1ca9fd){return _0x4e313d===_0x1ca9fd;},'HIMYG':_0x38e1fe(0x138),'ZWJEx':_0x38e1fe(0x13c),'wrqqH':function(_0x5a234e,_0x5e8b1f){return _0x5a234e===_0x5e8b1f;},'wCAvZ':function(_0x1f9dc5,_0x26b01e){return _0x1f9dc5+_0x26b01e;},'DiGfY':_0x38e1fe(0x10c)},_0x229f4c=this[_0x38e1fe(0x108)]();if(!_0x229f4c)return![];const _0x1e4781={'role':_0x49d43a,'content':_0x50d591,'timestamp':new Date()['toISOString']()};return _0x229f4c['messages']['push'](_0x1e4781),_0x229f4c[_0x38e1fe(0x111)]=new Date()[_0x38e1fe(0x118)](),_0x8a4237['GuWkv'](_0x49d43a,_0x8a4237['HIMYG'])&&_0x8a4237[_0x38e1fe(0xff)](_0x229f4c[_0x38e1fe(0x117)],_0x8a4237[_0x38e1fe(0xfa)])&&_0x8a4237['wrqqH'](_0x229f4c[_0x38e1fe(0xf5)][_0x38e1fe(0x100)],0x1)&&(_0x229f4c[_0x38e1fe(0x117)]=_0x8a4237['wCAvZ'](_0x50d591[_0x38e1fe(0x106)]('\x20')[_0x38e1fe(0x109)](0x0,0x4)[_0x38e1fe(0x131)]('\x20'),_0x8a4237['DiGfY'])),await this[_0x38e1fe(0x120)](),!![];}async[_0x2d044b(0x136)](_0x392338){const _0x2a66d8=_0x2d044b,_0x152886={'URjGa':function(_0x3ecc65,_0x4a0893){return _0x3ecc65===_0x4a0893;}};this['conversations'][_0x392338]&&(delete this['conversations'][_0x392338],_0x152886[_0x2a66d8(0x11a)](this[_0x2a66d8(0xf4)],_0x392338)&&(this[_0x2a66d8(0xf4)]=Object[_0x2a66d8(0xf1)](this[_0x2a66d8(0x103)])[0x0]||null),await this[_0x2a66d8(0x120)]());}[_0x2d044b(0x12d)](_0x40cdf8){const _0x1583a2=_0x2d044b;if(this['conversations'][_0x40cdf8])return this['currentConversationId']=_0x40cdf8,this[_0x1583a2(0x10a)](),!![];return![];}[_0x2d044b(0x104)](){const _0x2fbef1=_0x2d044b;return Object[_0x2fbef1(0xf9)](this[_0x2fbef1(0x103)])[_0x2fbef1(0x137)]((_0x4b3d84,_0x35cdbc)=>new Date(_0x35cdbc[_0x2fbef1(0x111)])-new Date(_0x4b3d84[_0x2fbef1(0x111)]));}['notifyConversationUpdate'](){const _0x1f4b76=_0x2d044b;this[_0x1f4b76(0x10e)]['onConversationUpdate'][_0x1f4b76(0x113)](_0x22e8fe=>_0x22e8fe(Object[_0x1f4b76(0xf9)](this['conversations'])));}['notifyCurrentConversationChange'](){const _0x269aee=_0x2d044b;this[_0x269aee(0x10e)]['onCurrentConversationChange'][_0x269aee(0x113)](_0x300e02=>_0x300e02(this['getCurrentConversation']()));}[_0x2d044b(0x135)](_0x5211aa){const _0x327e84=_0x2d044b;this['listeners']['onError'][_0x327e84(0x113)](_0x4e2a40=>_0x4e2a40(_0x5211aa));}[_0x2d044b(0x119)](_0x30f93a,_0x206760){const _0x294c9f=_0x2d044b;this[_0x294c9f(0x10e)][_0x30f93a]&&this['listeners'][_0x30f93a][_0x294c9f(0x123)](_0x206760);}[_0x2d044b(0xf2)](_0x5353ee,_0x20a190){const _0x1ac91e=_0x2d044b;this[_0x1ac91e(0x10e)][_0x5353ee]&&(this['listeners'][_0x5353ee]=this['listeners'][_0x5353ee]['filter'](_0x4257ba=>_0x4257ba!==_0x20a190));}}export{ChatManager};