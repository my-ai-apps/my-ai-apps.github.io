
/*!
Copyright © 2024 Saisha Pandit. All Rights Reserved.
Unauthorized use, modification, or distribution is strictly prohibited.
*/
function _0x4970(){const _0x2b186e=['stringify','Storage\x20cleanup\x20initiated','9364424yFkRRN','listeners','New\x20Conversation','GRtoX','1833291nlgGWU','Failed\x20to\x20save\x20conversations','error','notifyConversationUpdate','parse','KoAPg','313736aDHmRk','908kNYFsY','currentConversationId','loadConversations','notifyCurrentConversationChange','info','join','MAX_CONVERSATIONS','forEach','conv_','4|3|2|1|0','14947988WKWEzn','lalWR','values','messages','pop','5985qVYtWp','reduce','removeEventListener','split','Conversations\x20saved\x20successfully','15177TggouK','1356wcGYuw','7sanyfc','sort','getSortedConversations','push','getCurrentConversation','4|0|5|2|3|1','createNewConversation','RQQUX','Trimmed\x20to\x20','10ENlGAj','slice','RHIrK','keys','conversations','170521SiPRwG','ueAlz','2QuVwNR','saveConversations','length','updatedAt','onError','MAX_STORAGE_SIZE','Loaded\x20','cleanupStorage','\x20most\x20recent\x20conversations','\x20conversations','NmcOk','YmxNu','notifyError','HNrZK','Failed\x20to\x20load\x20conversations','setItem','addMessage','...','toISOString','warn','createdAt','title','YOFLX','312tZvAKw','getItem','onCurrentConversationChange'];_0x4970=function(){return _0x2b186e;};return _0x4970();}const _0x338d6f=_0xb733;(function(_0x710f1b,_0x28f37c){const _0x4fb3a2=_0xb733,_0x30075d=_0x710f1b();while(!![]){try{const _0x571231=-parseInt(_0x4fb3a2(0x1ea))/0x1*(-parseInt(_0x4fb3a2(0x1c4))/0x2)+-parseInt(_0x4fb3a2(0x1ff))/0x3*(-parseInt(_0x4fb3a2(0x1eb))/0x4)+parseInt(_0x4fb3a2(0x1fa))/0x5*(parseInt(_0x4fb3a2(0x1db))/0x6)+parseInt(_0x4fb3a2(0x1b4))/0x7*(-parseInt(_0x4fb3a2(0x1e0))/0x8)+parseInt(_0x4fb3a2(0x1e4))/0x9+parseInt(_0x4fb3a2(0x1bd))/0xa*(-parseInt(_0x4fb3a2(0x1f5))/0xb)+-parseInt(_0x4fb3a2(0x200))/0xc*(-parseInt(_0x4fb3a2(0x1c2))/0xd);if(_0x571231===_0x28f37c)break;else _0x30075d['push'](_0x30075d['shift']());}catch(_0x4f0157){_0x30075d['push'](_0x30075d['shift']());}}}(_0x4970,0xa6380));import{Logger}from'./common.js';class Conversation{constructor(_0x296734,_0x12fe3f){const _0x20bd28=_0xb733,_0x512721={'fAhbx':_0x20bd28(0x1f4)},_0x1dcafe=_0x512721['fAhbx'][_0x20bd28(0x1fd)]('|');let _0x115cc5=0x0;while(!![]){switch(_0x1dcafe[_0x115cc5++]){case'0':this['updatedAt']=new Date()['toISOString']();continue;case'1':this[_0x20bd28(0x1d8)]=new Date()[_0x20bd28(0x1d6)]();continue;case'2':this[_0x20bd28(0x1f8)]=[];continue;case'3':this[_0x20bd28(0x1d9)]=_0x12fe3f;continue;case'4':this['id']=_0x296734;continue;}break;}}}function _0xb733(_0x19dcc9,_0x542239){const _0x497055=_0x4970();return _0xb733=function(_0xb733cc,_0x21d616){_0xb733cc=_0xb733cc-0x1b4;let _0x2abee7=_0x497055[_0xb733cc];return _0x2abee7;},_0xb733(_0x19dcc9,_0x542239);}class ChatManager{constructor(){const _0x252397=_0xb733,_0x152fe9={'JPVpE':_0x252397(0x1b9),'HNrZK':function(_0x2cfa98,_0x4c0b8f){return _0x2cfa98*_0x4c0b8f;}},_0x43b1c9=_0x152fe9['JPVpE'][_0x252397(0x1fd)]('|');let _0x2cf743=0x0;while(!![]){switch(_0x43b1c9[_0x2cf743++]){case'0':this[_0x252397(0x1ec)]=null;continue;case'1':this[_0x252397(0x1ed)]();continue;case'2':this['MAX_STORAGE_SIZE']=_0x152fe9[_0x252397(0x1d1)](_0x152fe9[_0x252397(0x1d1)](4.5,0x400),0x400);continue;case'3':this['MAX_CONVERSATIONS']=0x32;continue;case'4':this[_0x252397(0x1c1)]={};continue;case'5':this[_0x252397(0x1e1)]={'onConversationUpdate':[],'onCurrentConversationChange':[],'onError':[]};continue;}break;}}async[_0x338d6f(0x1ed)](){const _0x1ceebe=_0x338d6f,_0x265c81={'oPSin':'conversations','RHIrK':function(_0xc0a2f5,_0x159921){return _0xc0a2f5>_0x159921;}};try{const _0x5422c6=localStorage[_0x1ceebe(0x1dc)](_0x265c81['oPSin']);if(_0x5422c6){const _0x336bf9=JSON[_0x1ceebe(0x1e8)](_0x5422c6)||[];this[_0x1ceebe(0x1c1)]=_0x336bf9[_0x1ceebe(0x1fb)]((_0x3e220d,_0x4a7797)=>{const _0x361fe4=_0x1ceebe;return _0x3e220d[_0x4a7797['id']]=new Conversation(_0x4a7797['id'],_0x4a7797[_0x361fe4(0x1d9)]),_0x3e220d[_0x4a7797['id']]['messages']=_0x4a7797[_0x361fe4(0x1f8)]||[],_0x3e220d[_0x4a7797['id']][_0x361fe4(0x1d8)]=_0x4a7797['createdAt'],_0x3e220d[_0x4a7797['id']]['updatedAt']=_0x4a7797[_0x361fe4(0x1c7)],_0x3e220d;},{}),_0x265c81[_0x1ceebe(0x1bf)](Object[_0x1ceebe(0x1c0)](this[_0x1ceebe(0x1c1)])['length'],0x0)&&(this['currentConversationId']=Object[_0x1ceebe(0x1c0)](this['conversations'])[0x0]),Logger[_0x1ceebe(0x1ef)](_0x1ceebe(0x1ca)+Object[_0x1ceebe(0x1c0)](this['conversations'])[_0x1ceebe(0x1c6)]+_0x1ceebe(0x1cd));}}catch(_0x16cd51){const _0x555026=Logger[_0x1ceebe(0x1e6)](_0x1ceebe(0x1d2),_0x16cd51);this[_0x1ceebe(0x1d0)](_0x555026),this['conversations']={};}}async[_0x338d6f(0x1c5)](){const _0x5402f9=_0x338d6f,_0x216396={'YmxNu':function(_0x7e6999,_0x1a3782){return _0x7e6999>_0x1a3782;},'GRtoX':_0x5402f9(0x1fe),'ykBSP':_0x5402f9(0x1e5)};try{const _0x3cdfa3=JSON['stringify'](Object['values'](this['conversations']));_0x216396[_0x5402f9(0x1cf)](_0x3cdfa3[_0x5402f9(0x1c6)],this[_0x5402f9(0x1c9)])&&await this['cleanupStorage'](),localStorage[_0x5402f9(0x1d3)](_0x5402f9(0x1c1),_0x3cdfa3),this[_0x5402f9(0x1e7)](),Logger[_0x5402f9(0x1ef)](_0x216396[_0x5402f9(0x1e3)]);}catch(_0x1464d3){const _0x34fca9=Logger[_0x5402f9(0x1e6)](_0x216396['ykBSP'],_0x1464d3);this[_0x5402f9(0x1d0)](_0x34fca9);}}async[_0x338d6f(0x1cb)](){const _0x326e63=_0x338d6f,_0x39dcbb={'KoAPg':function(_0x265c42,_0x3c33e7){return _0x265c42>_0x3c33e7;},'OGWYX':function(_0x42fe8c,_0x51eafc){return _0x42fe8c>_0x51eafc;},'ueAlz':function(_0x522aa5,_0x5f0370){return _0x522aa5>_0x5f0370;}};Logger[_0x326e63(0x1d7)](_0x326e63(0x1df));const _0x297d83=this[_0x326e63(0x1b6)]();_0x39dcbb[_0x326e63(0x1e9)](_0x297d83['length'],this['MAX_CONVERSATIONS'])&&(this[_0x326e63(0x1c1)]=_0x297d83[_0x326e63(0x1be)](0x0,this[_0x326e63(0x1f1)])['reduce']((_0x29c57e,_0x1a3043)=>{return _0x29c57e[_0x1a3043['id']]=_0x1a3043,_0x29c57e;},{}),Logger['info'](_0x326e63(0x1bc)+this[_0x326e63(0x1f1)]+_0x326e63(0x1cc)));let _0x286388=JSON['stringify'](Object[_0x326e63(0x1f7)](this[_0x326e63(0x1c1)]))[_0x326e63(0x1c6)];while(_0x39dcbb[_0x326e63(0x1e9)](_0x286388,this[_0x326e63(0x1c9)])&&_0x39dcbb['OGWYX'](Object['keys'](this[_0x326e63(0x1c1)])[_0x326e63(0x1c6)],0x0)){const _0x3bf30f=_0x297d83[_0x326e63(0x1f9)]();_0x39dcbb[_0x326e63(0x1c3)](_0x3bf30f['messages'][_0x326e63(0x1c6)],0xa)?_0x3bf30f[_0x326e63(0x1f8)]=_0x3bf30f[_0x326e63(0x1f8)][_0x326e63(0x1be)](-0xa):delete this['conversations'][_0x3bf30f['id']],_0x286388=JSON[_0x326e63(0x1de)](Object[_0x326e63(0x1f7)](this[_0x326e63(0x1c1)]))[_0x326e63(0x1c6)];}Logger[_0x326e63(0x1ef)]('Storage\x20cleanup\x20completed');}async[_0x338d6f(0x1ba)](_0x5e4cdc=_0x338d6f(0x1e2)){const _0x2b0625=_0x338d6f,_0x18a437=_0x2b0625(0x1f3)+Date['now'](),_0x4a6596=new Conversation(_0x18a437,_0x5e4cdc);return this['conversations'][_0x18a437]=_0x4a6596,this[_0x2b0625(0x1ec)]=_0x18a437,await this[_0x2b0625(0x1c5)](),this[_0x2b0625(0x1ee)](),_0x18a437;}['getCurrentConversation'](){const _0x2d6149=_0x338d6f;return this[_0x2d6149(0x1c1)][this[_0x2d6149(0x1ec)]]||null;}async[_0x338d6f(0x1d4)](_0x2f0164,_0x2349e0){const _0x377a91=_0x338d6f,_0x37c3f2={'NmcOk':function(_0x4daff1,_0x74e42a){return _0x4daff1===_0x74e42a;},'LMsMM':'user','RQQUX':'New\x20Conversation','YOFLX':_0x377a91(0x1d5)},_0x117e6d=this['getCurrentConversation']();if(!_0x117e6d)return![];const _0x316055={'role':_0x2349e0,'content':_0x2f0164,'timestamp':new Date()[_0x377a91(0x1d6)]()};return _0x117e6d[_0x377a91(0x1f8)]['push'](_0x316055),_0x117e6d[_0x377a91(0x1c7)]=new Date()[_0x377a91(0x1d6)](),_0x37c3f2[_0x377a91(0x1ce)](_0x2349e0,_0x37c3f2['LMsMM'])&&_0x37c3f2[_0x377a91(0x1ce)](_0x117e6d[_0x377a91(0x1d9)],_0x37c3f2[_0x377a91(0x1bb)])&&_0x37c3f2[_0x377a91(0x1ce)](_0x117e6d[_0x377a91(0x1f8)]['length'],0x1)&&(_0x117e6d[_0x377a91(0x1d9)]=_0x2f0164[_0x377a91(0x1fd)]('\x20')[_0x377a91(0x1be)](0x0,0x4)[_0x377a91(0x1f0)]('\x20')+_0x37c3f2[_0x377a91(0x1da)]),await this[_0x377a91(0x1c5)](),!![];}async['deleteConversation'](_0x333998){const _0x5353d9=_0x338d6f,_0x20d510={'lalWR':function(_0x42e951,_0x4e7006){return _0x42e951===_0x4e7006;}};this['conversations'][_0x333998]&&(delete this[_0x5353d9(0x1c1)][_0x333998],_0x20d510[_0x5353d9(0x1f6)](this[_0x5353d9(0x1ec)],_0x333998)&&(this[_0x5353d9(0x1ec)]=Object['keys'](this[_0x5353d9(0x1c1)])[0x0]||null),await this[_0x5353d9(0x1c5)]());}['switchConversation'](_0x6a5878){const _0x44cb4f=_0x338d6f;if(this[_0x44cb4f(0x1c1)][_0x6a5878])return this[_0x44cb4f(0x1ec)]=_0x6a5878,this[_0x44cb4f(0x1ee)](),!![];return![];}[_0x338d6f(0x1b6)](){const _0x4eec2=_0x338d6f;return Object['values'](this[_0x4eec2(0x1c1)])[_0x4eec2(0x1b5)]((_0x4de9d9,_0x2d8798)=>new Date(_0x2d8798[_0x4eec2(0x1c7)])-new Date(_0x4de9d9[_0x4eec2(0x1c7)]));}[_0x338d6f(0x1e7)](){const _0xede8ed=_0x338d6f;this[_0xede8ed(0x1e1)]['onConversationUpdate'][_0xede8ed(0x1f2)](_0x28fead=>_0x28fead(Object[_0xede8ed(0x1f7)](this[_0xede8ed(0x1c1)])));}['notifyCurrentConversationChange'](){const _0x712cb1=_0x338d6f;this[_0x712cb1(0x1e1)][_0x712cb1(0x1dd)][_0x712cb1(0x1f2)](_0x37973f=>_0x37973f(this[_0x712cb1(0x1b8)]()));}[_0x338d6f(0x1d0)](_0x447369){const _0x4bd0fb=_0x338d6f;this[_0x4bd0fb(0x1e1)][_0x4bd0fb(0x1c8)][_0x4bd0fb(0x1f2)](_0x3b22ef=>_0x3b22ef(_0x447369));}['addEventListener'](_0x192aac,_0x30561f){const _0x255d3b=_0x338d6f;this[_0x255d3b(0x1e1)][_0x192aac]&&this[_0x255d3b(0x1e1)][_0x192aac][_0x255d3b(0x1b7)](_0x30561f);}[_0x338d6f(0x1fc)](_0x40e26e,_0x4df561){const _0xa0748d=_0x338d6f;this['listeners'][_0x40e26e]&&(this[_0xa0748d(0x1e1)][_0x40e26e]=this[_0xa0748d(0x1e1)][_0x40e26e]['filter'](_0x453bf4=>_0x453bf4!==_0x4df561));}}export{ChatManager};