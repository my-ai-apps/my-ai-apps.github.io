
/*!
Copyright © 2024 Saisha Pandit. All Rights Reserved.
Unauthorized use, modification, or distribution is strictly prohibited.
*/
function _0x2d16(_0x2c0c3e,_0x63d6d1){const _0x28b2b6=_0x28b2();return _0x2d16=function(_0x2d1646,_0x41098e){_0x2d1646=_0x2d1646-0x190;let _0x229a4d=_0x28b2b6[_0x2d1646];return _0x229a4d;},_0x2d16(_0x2c0c3e,_0x63d6d1);}const _0x55a3c8=_0x2d16;(function(_0x3ca6aa,_0x121491){const _0x2c7a4d=_0x2d16,_0x2de406=_0x3ca6aa();while(!![]){try{const _0x24d1d5=-parseInt(_0x2c7a4d(0x19e))/0x1*(-parseInt(_0x2c7a4d(0x1c8))/0x2)+parseInt(_0x2c7a4d(0x1b2))/0x3*(parseInt(_0x2c7a4d(0x195))/0x4)+-parseInt(_0x2c7a4d(0x19c))/0x5+parseInt(_0x2c7a4d(0x1ba))/0x6*(parseInt(_0x2c7a4d(0x1a9))/0x7)+-parseInt(_0x2c7a4d(0x1d6))/0x8+-parseInt(_0x2c7a4d(0x1ca))/0x9*(-parseInt(_0x2c7a4d(0x194))/0xa)+-parseInt(_0x2c7a4d(0x1c9))/0xb;if(_0x24d1d5===_0x121491)break;else _0x2de406['push'](_0x2de406['shift']());}catch(_0x25417e){_0x2de406['push'](_0x2de406['shift']());}}}(_0x28b2,0xb0b0b));import{Logger}from'./common.js';class Conversation{constructor(_0x499197,_0x344a71){const _0x5b20c0=_0x2d16,_0x52668c=_0x5b20c0(0x1bd)[_0x5b20c0(0x1dd)]('|');let _0x304194=0x0;while(!![]){switch(_0x52668c[_0x304194++]){case'0':this[_0x5b20c0(0x191)]=new Date()[_0x5b20c0(0x1a6)]();continue;case'1':this['title']=_0x344a71;continue;case'2':this['id']=_0x499197;continue;case'3':this['createdAt']=new Date()[_0x5b20c0(0x1a6)]();continue;case'4':this['messages']=[];continue;}break;}}}class ChatManager{constructor(){const _0x20daba=_0x2d16,_0xaabee4={'rGYIb':function(_0x18e1a5,_0x39ec71){return _0x18e1a5*_0x39ec71;},'wXzNc':function(_0x198fa7,_0x2d1a3c){return _0x198fa7*_0x2d1a3c;}};this[_0x20daba(0x199)]={},this['currentConversationId']=null,this[_0x20daba(0x1b3)]={'onConversationUpdate':[],'onCurrentConversationChange':[],'onError':[]},this[_0x20daba(0x1cd)]=_0xaabee4['rGYIb'](_0xaabee4['wXzNc'](4.5,0x400),0x400),this[_0x20daba(0x197)]=0x32,this[_0x20daba(0x1af)]();}async[_0x55a3c8(0x1af)](){const _0x33f5ab=_0x55a3c8,_0x1d7b87={'mFVll':_0x33f5ab(0x1c2),'Zzmdg':function(_0x4e21ba,_0x3d711b){return _0x4e21ba>_0x3d711b;},'BCaZj':_0x33f5ab(0x1d1)};try{const _0x266b9a=localStorage[_0x33f5ab(0x1c5)](_0x33f5ab(0x199));if(_0x266b9a){const _0x5794c1=JSON[_0x33f5ab(0x1d5)](_0x266b9a)||[];this[_0x33f5ab(0x199)]=_0x5794c1[_0x33f5ab(0x198)]((_0x1fb378,_0x14e9ac)=>{const _0x51a935=_0x33f5ab,_0x4c0e47=_0x1d7b87[_0x51a935(0x192)][_0x51a935(0x1dd)]('|');let _0x3b9a18=0x0;while(!![]){switch(_0x4c0e47[_0x3b9a18++]){case'0':_0x1fb378[_0x14e9ac['id']][_0x51a935(0x1ac)]=_0x14e9ac['createdAt'];continue;case'1':_0x1fb378[_0x14e9ac['id']][_0x51a935(0x191)]=_0x14e9ac[_0x51a935(0x191)];continue;case'2':return _0x1fb378;case'3':_0x1fb378[_0x14e9ac['id']]['messages']=_0x14e9ac['messages']||[];continue;case'4':_0x1fb378[_0x14e9ac['id']]=new Conversation(_0x14e9ac['id'],_0x14e9ac[_0x51a935(0x1aa)]);continue;}break;}},{}),_0x1d7b87['Zzmdg'](Object[_0x33f5ab(0x1c6)](this[_0x33f5ab(0x199)])['length'],0x0)&&(this[_0x33f5ab(0x1cf)]=Object[_0x33f5ab(0x1c6)](this['conversations'])[0x0]),Logger[_0x33f5ab(0x1ad)](_0x33f5ab(0x196)+Object[_0x33f5ab(0x1c6)](this[_0x33f5ab(0x199)])[_0x33f5ab(0x1d2)]+_0x33f5ab(0x1c4));}}catch(_0x1e392f){const _0x3e183d=Logger[_0x33f5ab(0x1be)](_0x1d7b87[_0x33f5ab(0x1d7)],_0x1e392f);this[_0x33f5ab(0x19d)](_0x3e183d),this['conversations']={};}}async['saveConversations'](){const _0x5edb39=_0x55a3c8,_0x208ce0={'tzrYU':function(_0x969b4b,_0x5910eb){return _0x969b4b>_0x5910eb;},'sXAYV':_0x5edb39(0x199),'wwaCm':_0x5edb39(0x1d3),'Vknaq':'Failed\x20to\x20save\x20conversations'};try{const _0x5e60a1=JSON[_0x5edb39(0x19b)](Object[_0x5edb39(0x1ab)](this['conversations']));_0x208ce0['tzrYU'](_0x5e60a1['length'],this['MAX_STORAGE_SIZE'])&&await this[_0x5edb39(0x1b5)](),localStorage[_0x5edb39(0x1bb)](_0x208ce0['sXAYV'],_0x5e60a1),this[_0x5edb39(0x19a)](),Logger[_0x5edb39(0x1ad)](_0x208ce0[_0x5edb39(0x1b0)]);}catch(_0x276194){const _0x20632c=Logger[_0x5edb39(0x1be)](_0x208ce0['Vknaq'],_0x276194);this[_0x5edb39(0x19d)](_0x20632c);}}async[_0x55a3c8(0x1b5)](){const _0x505d40=_0x55a3c8,_0x120033={'oNFht':_0x505d40(0x1b4),'eMYOD':function(_0x5e3d3d,_0x349044){return _0x5e3d3d>_0x349044;},'vwaIA':function(_0x3f0859,_0x372c40){return _0x3f0859>_0x372c40;},'XUllb':function(_0x2fdf65,_0x659744){return _0x2fdf65>_0x659744;},'Xnasj':function(_0x7067d1,_0x36e752){return _0x7067d1>_0x36e752;},'agMBE':_0x505d40(0x1b1)};Logger[_0x505d40(0x1d4)](_0x120033[_0x505d40(0x1a0)]);const _0x3b46e3=this[_0x505d40(0x1ce)]();_0x120033[_0x505d40(0x1a2)](_0x3b46e3['length'],this['MAX_CONVERSATIONS'])&&(this['conversations']=_0x3b46e3[_0x505d40(0x1ae)](0x0,this[_0x505d40(0x197)])[_0x505d40(0x198)]((_0x5edd7c,_0x4f2493)=>{return _0x5edd7c[_0x4f2493['id']]=_0x4f2493,_0x5edd7c;},{}),Logger[_0x505d40(0x1ad)](_0x505d40(0x1b7)+this[_0x505d40(0x197)]+'\x20most\x20recent\x20conversations'));let _0x766eaa=JSON[_0x505d40(0x19b)](Object[_0x505d40(0x1ab)](this[_0x505d40(0x199)]))[_0x505d40(0x1d2)];while(_0x120033[_0x505d40(0x19f)](_0x766eaa,this['MAX_STORAGE_SIZE'])&&_0x120033[_0x505d40(0x1bc)](Object['keys'](this[_0x505d40(0x199)])[_0x505d40(0x1d2)],0x0)){const _0x4f9a64=_0x3b46e3[_0x505d40(0x1dc)]();_0x120033[_0x505d40(0x1b6)](_0x4f9a64[_0x505d40(0x1a5)]['length'],0xa)?_0x4f9a64[_0x505d40(0x1a5)]=_0x4f9a64[_0x505d40(0x1a5)]['slice'](-0xa):delete this[_0x505d40(0x199)][_0x4f9a64['id']],_0x766eaa=JSON[_0x505d40(0x19b)](Object[_0x505d40(0x1ab)](this['conversations']))[_0x505d40(0x1d2)];}Logger[_0x505d40(0x1ad)](_0x120033[_0x505d40(0x1a7)]);}async[_0x55a3c8(0x1c3)](_0x5af586=_0x55a3c8(0x1d0)){const _0x5f1c70=_0x55a3c8,_0x2df9aa=_0x5f1c70(0x1db)+Date[_0x5f1c70(0x193)](),_0x29debe=new Conversation(_0x2df9aa,_0x5af586);return this[_0x5f1c70(0x199)][_0x2df9aa]=_0x29debe,this[_0x5f1c70(0x1cf)]=_0x2df9aa,await this[_0x5f1c70(0x1b9)](),this['notifyCurrentConversationChange'](),_0x2df9aa;}[_0x55a3c8(0x1cb)](){const _0x1119c0=_0x55a3c8;return this['conversations'][this[_0x1119c0(0x1cf)]]||null;}async[_0x55a3c8(0x1d8)](_0x1413c7,_0x104a16){const _0x1746d4=_0x55a3c8,_0x51879e={'urQUP':function(_0x7a8a9,_0x27ae0e){return _0x7a8a9===_0x27ae0e;},'SwpcK':_0x1746d4(0x1c1),'pFHBx':_0x1746d4(0x1d0),'rGNcu':function(_0x41ec1d,_0x429711){return _0x41ec1d+_0x429711;},'ueVAo':'...'},_0x1ac117=this[_0x1746d4(0x1cb)]();if(!_0x1ac117)return![];const _0x49f779={'role':_0x104a16,'content':_0x1413c7,'timestamp':new Date()[_0x1746d4(0x1a6)]()};return _0x1ac117[_0x1746d4(0x1a5)][_0x1746d4(0x1da)](_0x49f779),_0x1ac117[_0x1746d4(0x191)]=new Date()['toISOString'](),_0x51879e[_0x1746d4(0x1d9)](_0x104a16,_0x51879e['SwpcK'])&&_0x51879e[_0x1746d4(0x1d9)](_0x1ac117[_0x1746d4(0x1aa)],_0x51879e[_0x1746d4(0x190)])&&_0x1ac117[_0x1746d4(0x1a5)][_0x1746d4(0x1d2)]===0x1&&(_0x1ac117[_0x1746d4(0x1aa)]=_0x51879e['rGNcu'](_0x1413c7[_0x1746d4(0x1dd)]('\x20')[_0x1746d4(0x1ae)](0x0,0x4)[_0x1746d4(0x1c7)]('\x20'),_0x51879e['ueVAo'])),await this[_0x1746d4(0x1b9)](),!![];}async[_0x55a3c8(0x1cc)](_0x2dbf58){const _0x321a8c=_0x55a3c8;this['conversations'][_0x2dbf58]&&(delete this[_0x321a8c(0x199)][_0x2dbf58],this[_0x321a8c(0x1cf)]===_0x2dbf58&&(this[_0x321a8c(0x1cf)]=Object[_0x321a8c(0x1c6)](this[_0x321a8c(0x199)])[0x0]||null),await this[_0x321a8c(0x1b9)]());}[_0x55a3c8(0x1a8)](_0x707816){const _0x442762=_0x55a3c8;if(this['conversations'][_0x707816])return this[_0x442762(0x1cf)]=_0x707816,this[_0x442762(0x1b8)](),!![];return![];}['getSortedConversations'](){const _0x21fa6c=_0x55a3c8;return Object['values'](this[_0x21fa6c(0x199)])[_0x21fa6c(0x1c0)]((_0xaaf47,_0x7a5050)=>new Date(_0x7a5050[_0x21fa6c(0x191)])-new Date(_0xaaf47[_0x21fa6c(0x191)]));}['notifyConversationUpdate'](){const _0x5a1e8b=_0x55a3c8;this[_0x5a1e8b(0x1b3)][_0x5a1e8b(0x1a1)][_0x5a1e8b(0x1bf)](_0x2bd954=>_0x2bd954(Object[_0x5a1e8b(0x1ab)](this[_0x5a1e8b(0x199)])));}[_0x55a3c8(0x1b8)](){const _0x83309c=_0x55a3c8;this[_0x83309c(0x1b3)][_0x83309c(0x1a3)][_0x83309c(0x1bf)](_0x2ca903=>_0x2ca903(this['getCurrentConversation']()));}[_0x55a3c8(0x19d)](_0x4a1744){const _0x402141=_0x55a3c8;this['listeners'][_0x402141(0x1a4)]['forEach'](_0x4c9ccd=>_0x4c9ccd(_0x4a1744));}['addEventListener'](_0x4aa238,_0x312898){const _0x3b02e3=_0x55a3c8;this[_0x3b02e3(0x1b3)][_0x4aa238]&&this['listeners'][_0x4aa238][_0x3b02e3(0x1da)](_0x312898);}[_0x55a3c8(0x1de)](_0x35ee07,_0x2fe869){const _0xfa7d33=_0x55a3c8;this[_0xfa7d33(0x1b3)][_0x35ee07]&&(this[_0xfa7d33(0x1b3)][_0x35ee07]=this[_0xfa7d33(0x1b3)][_0x35ee07]['filter'](_0x47488c=>_0x47488c!==_0x2fe869));}}export{ChatManager};function _0x28b2(){const _0x2f7c9e=['listeners','Storage\x20cleanup\x20initiated','cleanupStorage','Xnasj','Trimmed\x20to\x20','notifyCurrentConversationChange','saveConversations','4608nCxffR','setItem','XUllb','2|1|4|3|0','error','forEach','sort','user','4|3|0|1|2','createNewConversation','\x20conversations','getItem','keys','join','307298OCZftM','5717052kKHuLv','166437QTkSny','getCurrentConversation','deleteConversation','MAX_STORAGE_SIZE','getSortedConversations','currentConversationId','New\x20Conversation','Failed\x20to\x20load\x20conversations','length','Conversations\x20saved\x20successfully','warn','parse','5744608CqVlZw','BCaZj','addMessage','urQUP','push','conv_','pop','split','removeEventListener','pFHBx','updatedAt','mFVll','now','220JGkteq','1336DOdqYH','Loaded\x20','MAX_CONVERSATIONS','reduce','conversations','notifyConversationUpdate','stringify','3362625cdAIiT','notifyError','4wcjJzC','vwaIA','oNFht','onConversationUpdate','eMYOD','onCurrentConversationChange','onError','messages','toISOString','agMBE','switchConversation','4844QuEnIX','title','values','createdAt','info','slice','loadConversations','wwaCm','Storage\x20cleanup\x20completed','9711nTRqHQ'];_0x28b2=function(){return _0x2f7c9e;};return _0x28b2();}