
/*!
Copyright © 2024 Saisha Pandit. All Rights Reserved.
Unauthorized use, modification, or distribution is strictly prohibited.
*/
const _0x2d7ee7=_0x5335;function _0x2da7(){const _0x1c7d23=['estimateAvailableStorageAndSetLimit','push','normalizeModelQueue','webllm/config','jExOA','jQbdB','getInstance','maxCacheSize','RNzhm','qwen2.5','\x20entries\x20in\x20','llama-3.2','storage','phi','0\x20Bytes','lgZpv','keys','110690NgbuDY','LrJGG','filter','-it','wxkDl','ldtaW','length','Error\x20estimating\x20storage:','set','includes','instance','instruct','estimate','uPexb','match','seRrR','Normalized\x20model\x20queue.\x20New\x20length:\x20','Odvvc','map','114blGXrC','deepseek','webllm/model','42rMpLdF','isModelCached','rRbrZ','BgdBP','qwen2','YMyBD','tfGHP','Current\x20storage\x20usage:\x20','Beginning\x20cache\x20calculation...','calculateCacheSizeAsync','nTpEm','tinyllama','hoEuo','Couldn\x27t\x20determine\x20model\x20for\x20URL:\x20','size','quota','%\x20threshold\x20(','modelSizes','Cache\x20size\x20(','snowflake','Found\x20','327099LeHEVv','1910405QFtFgq','yRMLt','Storage\x20API\x20not\x20available.\x20Using\x20default\x20max\x20cache\x20size:\x20','MlAKX','Error\x20removing\x20model\x20','iLsVo','vyPQG','has','XItvZ','bmMhb','Error\x20calculating\x20cache\x20size:','formatBytes','toFixed','get','Bytes','cacheThreshold','lsHuR','\x20from\x20cache',')\x20exceeds\x20','smollm','rTeSk','from','add','log','currentCacheSize','extractRawModelId','tJYvt','checkCacheSizeAndCleanup','\x20from\x20cache:','shift','Removing\x20model:\x20','HQjhG','70396jZKCXG','llama','pow','webllm/wasm','delete','bchOL','usage','Using\x20default\x20max\x20cache\x20size:\x20','2324wvfrgN','844368SBcbjm','exwAm','MMUXd','Set\x20max\x20cache\x20size\x20to\x20','touchModel','modelQueue','open','removeModelFromCache','lwjLw','JPdwa','YbgoM','hermes','replace','qwen','YmlRx','3596445ndHciW','gemma','normalizeModelId','QAWXE','all','LQZkj','Scanning\x20cache:\x20','\x20(normalized:\x20'];_0x2da7=function(){return _0x1c7d23;};return _0x2da7();}(function(_0x124adb,_0x98fc65){const _0x2fd95c=_0x5335,_0x10eac4=_0x124adb();while(!![]){try{const _0x2ba59a=parseInt(_0x2fd95c(0x22c))/0x1+parseInt(_0x2fd95c(0x1d0))/0x2+parseInt(_0x2fd95c(0x214))/0x3*(-parseInt(_0x2fd95c(0x1d8))/0x4)+parseInt(_0x2fd95c(0x201))/0x5*(-parseInt(_0x2fd95c(0x217))/0x6)+parseInt(_0x2fd95c(0x22d))/0x7+parseInt(_0x2fd95c(0x1d9))/0x8+-parseInt(_0x2fd95c(0x1e8))/0x9;if(_0x2ba59a===_0x98fc65)break;else _0x10eac4['push'](_0x10eac4['shift']());}catch(_0xe4a445){_0x10eac4['push'](_0x10eac4['shift']());}}}(_0x2da7,0x2810d));function _0x5335(_0x106658,_0x428977){const _0x2da797=_0x2da7();return _0x5335=function(_0x5335f1,_0x44c928){_0x5335f1=_0x5335f1-0x1c6;let _0x1e1b07=_0x2da797[_0x5335f1];return _0x1e1b07;},_0x5335(_0x106658,_0x428977);}export class MLCModelCacheManager{constructor(){const _0x58cdcb=_0x5335,_0x5b4c4b={'seRrR':function(_0x54f06b,_0x477599){return _0x54f06b*_0x477599;}};this['modelQueue']=[],this[_0x58cdcb(0x228)]=new Map(),this[_0x58cdcb(0x1f7)]=_0x5b4c4b[_0x58cdcb(0x210)](_0x5b4c4b[_0x58cdcb(0x210)](0x400,0x400),0x400),this['cacheThreshold']=0.8,this[_0x58cdcb(0x1c8)]=0x0,this[_0x58cdcb(0x220)](),this[_0x58cdcb(0x1f0)]();}static[_0x2d7ee7(0x1f6)](){const _0x346d2e=_0x2d7ee7;return!this[_0x346d2e(0x20b)]&&(this[_0x346d2e(0x20b)]=new MLCModelCacheManager()),this['instance'];}async[_0x2d7ee7(0x220)](){const _0x263b82=_0x2d7ee7,_0x1c0729={'YbgoM':_0x263b82(0x1f3),'noZAV':_0x263b82(0x1d3),'exwAm':function(_0x5b28df,_0x30d2d2){return _0x5b28df+_0x30d2d2;},'LQZkj':_0x263b82(0x237)};try{const _0x444d92=[_0x1c0729[_0x263b82(0x1e3)],_0x1c0729['noZAV'],'webllm/model'];this[_0x263b82(0x1c8)]=0x0,this[_0x263b82(0x228)]['clear']();const _0x339613=new Map(),_0x4136a6=new Map();console[_0x263b82(0x1c7)](_0x263b82(0x21f));for(const _0x43f79b of _0x444d92){console[_0x263b82(0x1c7)](_0x263b82(0x1ee)+_0x43f79b);const _0x382b25=await caches[_0x263b82(0x1df)](_0x43f79b),_0x532b74=await _0x382b25[_0x263b82(0x200)]();console['log'](_0x263b82(0x22b)+_0x532b74[_0x263b82(0x207)]+_0x263b82(0x1fa)+_0x43f79b);for(const _0x107f77 of _0x532b74){const _0x16ce3b=await _0x382b25['match'](_0x107f77);if(!_0x16ce3b)continue;const _0x2b179d=await _0x16ce3b['blob'](),_0x2e623e=_0x2b179d[_0x263b82(0x225)];this[_0x263b82(0x1c8)]+=_0x2e623e;const _0x5881e5=_0x107f77['url'];let _0x599d7c=this['extractRawModelId'](_0x5881e5);if(_0x599d7c){let _0x174c30=this['normalizeModelId'](_0x599d7c);!_0x4136a6['has'](_0x599d7c)&&_0x4136a6[_0x263b82(0x209)](_0x599d7c,_0x174c30),!_0x339613[_0x263b82(0x234)](_0x174c30)&&_0x339613[_0x263b82(0x209)](_0x174c30,[]),_0x339613['get'](_0x174c30)?.[_0x263b82(0x1f1)](_0x5881e5),!this[_0x263b82(0x228)][_0x263b82(0x234)](_0x174c30)&&(this[_0x263b82(0x228)][_0x263b82(0x209)](_0x174c30,0x0),!this['modelQueue'][_0x263b82(0x20a)](_0x174c30)&&this[_0x263b82(0x1de)][_0x263b82(0x1f1)](_0x174c30)),this[_0x263b82(0x228)][_0x263b82(0x209)](_0x174c30,_0x1c0729[_0x263b82(0x1da)](this[_0x263b82(0x228)][_0x263b82(0x23a)](_0x174c30)||0x0,_0x2e623e));}else console['log'](_0x263b82(0x224)+_0x5881e5);}}this[_0x263b82(0x1f2)]();}catch(_0x275624){console['error'](_0x1c0729[_0x263b82(0x1ed)],_0x275624);}}[_0x2d7ee7(0x1c9)](_0x29f50f){const _0x110d18=_0x2d7ee7,_0x2cb08a=/\/(Llama-3\.2-\d+[Bb]-Instruct)/i,_0x4a4c73=_0x29f50f[_0x110d18(0x20f)](_0x2cb08a);if(_0x4a4c73&&_0x4a4c73[0x1])return _0x4a4c73[0x1];const _0xf5f39f=/\/(Hermes-\d+-Llama-\d+\.\d+-\d+[Bb])/i,_0x28e712=_0x29f50f['match'](_0xf5f39f);if(_0x28e712&&_0x28e712[0x1])return _0x28e712[0x1];const _0x2d8210=/\/(Qwen2(?:\.5)?-\d+\.?\d*[Bb]-Instruct)/i,_0x101415=_0x29f50f[_0x110d18(0x20f)](_0x2d8210);if(_0x101415&&_0x101415[0x1])return _0x101415[0x1];const _0x3019ae=/\/(SmolLM2-\d+\.?\d*[BbMG]-Instruct)/i,_0x105aa7=_0x29f50f['match'](_0x3019ae);if(_0x105aa7&&_0x105aa7[0x1])return _0x105aa7[0x1];const _0x2116cf=/\/(gemma-\d+[Bb]-it)/i,_0x2003a7=_0x29f50f['match'](_0x2116cf);if(_0x2003a7&&_0x2003a7[0x1])return _0x2003a7[0x1];const _0x22c431=/\/(TinyLlama-\d+\.?\d*[Bb]-Chat-v[\d\.]+)/i,_0x1349aa=_0x29f50f[_0x110d18(0x20f)](_0x22c431);if(_0x1349aa&&_0x1349aa[0x1])return _0x1349aa[0x1];const _0x1502a2=/\/(Phi-\d+\.?\d+-\w+-\w+)/i,_0x20a197=_0x29f50f[_0x110d18(0x20f)](_0x1502a2);if(_0x20a197&&_0x20a197[0x1])return _0x20a197[0x1];const _0x53bdaf=/\/(DeepSeek-R1-Distill-(?:Qwen|Llama)-\d+\.?\d*[Bb])/i,_0x19aa29=_0x29f50f[_0x110d18(0x20f)](_0x53bdaf);if(_0x19aa29&&_0x19aa29[0x1])return _0x19aa29[0x1];const _0x2da527=/\/(snowflake-arctic-embed-[ms])(?:-b\d+)?/i,_0x3d39ab=_0x29f50f[_0x110d18(0x20f)](_0x2da527);if(_0x3d39ab&&_0x3d39ab[0x1])return _0x3d39ab[0x1];const _0x165b96=/\/([A-Za-z0-9\.\-]+(?:-\d+\.?\d*[BbMG])(?:-[A-Za-z0-9\.\-]+)?)-[qQ]\d[fF]\d+(?:_\d+)?-MLC/,_0x497c95=_0x29f50f[_0x110d18(0x20f)](_0x165b96);if(_0x497c95&&_0x497c95[0x1])return _0x497c95[0x1];const _0x13baec=/\/([A-Za-z0-9\.\-]+(?:-\d+\.?\d*[BbMG])(?:-[A-Za-z0-9\.\-]+)?)-[qQ]\d[fF]\d+(?:_\d+)?/,_0x219105=_0x29f50f[_0x110d18(0x20f)](_0x13baec);if(_0x219105&&_0x219105[0x1])return _0x219105[0x1];const _0x22f281=/\/([A-Za-z0-9\.\-]+(?:-\d+\.?\d*[BbMG])(?:-[A-Za-z0-9\.\-]+)?)/,_0x3bb759=_0x29f50f['match'](_0x22f281);if(_0x3bb759&&_0x3bb759[0x1])return _0x3bb759[0x1];return null;}[_0x2d7ee7(0x1ea)](_0x44fa1b){const _0x54fea6=_0x2d7ee7,_0x2671d5={'YMyBD':_0x54fea6(0x1fb),'iLsVo':function(_0x3ba2ff,_0xa34810){return _0x3ba2ff+_0xa34810;},'YmlRx':'-Instruct','MMUXd':_0x54fea6(0x1e4),'bchOL':_0x54fea6(0x1d1),'bmMhb':_0x54fea6(0x1e6),'lgZpv':_0x54fea6(0x1f9),'JPdwa':function(_0xd063c1,_0x362028){return _0xd063c1+_0x362028;},'yRMLt':_0x54fea6(0x21b),'uPexb':_0x54fea6(0x240),'jQbdB':_0x54fea6(0x204),'jExOA':_0x54fea6(0x222),'rTeSk':_0x54fea6(0x1fd),'XItvZ':_0x54fea6(0x215)},_0x5180c1=_0x44fa1b['toLowerCase']();if(_0x5180c1[_0x54fea6(0x20a)](_0x2671d5[_0x54fea6(0x21c)])&&_0x5180c1[_0x54fea6(0x20a)](_0x54fea6(0x20c))){const _0xcdd93b=_0x44fa1b[_0x54fea6(0x20f)](/(Llama-3\.2-\d+[Bb])-Instruct/i);if(_0xcdd93b)return _0x2671d5[_0x54fea6(0x232)](_0xcdd93b[0x1],_0x2671d5['YmlRx']);}if(_0x5180c1[_0x54fea6(0x20a)](_0x2671d5[_0x54fea6(0x1db)])&&_0x5180c1[_0x54fea6(0x20a)](_0x2671d5[_0x54fea6(0x1d5)])){const _0x3b63a7=_0x44fa1b[_0x54fea6(0x20f)](/(Hermes-\d+-Llama-\d+\.\d+-\d+[Bb])/i);if(_0x3b63a7)return _0x3b63a7[0x1];}if(_0x5180c1[_0x54fea6(0x20a)](_0x2671d5[_0x54fea6(0x236)])){if(_0x5180c1['includes'](_0x2671d5[_0x54fea6(0x1ff)])){const _0x8a803d=_0x44fa1b[_0x54fea6(0x20f)](/(Qwen2\.5-\d+\.?\d*[Bb])-Instruct/i);if(_0x8a803d)return _0x2671d5[_0x54fea6(0x1e2)](_0x8a803d[0x1],_0x2671d5[_0x54fea6(0x1e7)]);}else{if(_0x5180c1['includes'](_0x2671d5[_0x54fea6(0x22e)])){const _0xef21b6=_0x44fa1b['match'](/(Qwen2-\d+\.?\d*[Bb])-Instruct/i);if(_0xef21b6)return _0xef21b6[0x1]+_0x2671d5[_0x54fea6(0x1e7)];}}}if(_0x5180c1[_0x54fea6(0x20a)](_0x2671d5[_0x54fea6(0x20e)])){const _0x45e431=_0x44fa1b[_0x54fea6(0x20f)](/(SmolLM2-\d+\.?\d*[BbMG])(-Instruct)?/i);if(_0x45e431)return _0x45e431[0x1]+(_0x45e431[0x2]||'');}if(_0x5180c1['includes'](_0x54fea6(0x1e9))){const _0x124d77=_0x44fa1b['match'](/(gemma-\d+[Bb])-it/i);if(_0x124d77)return _0x2671d5['JPdwa'](_0x124d77[0x1],_0x2671d5[_0x54fea6(0x1f5)]);}if(_0x5180c1[_0x54fea6(0x20a)](_0x2671d5[_0x54fea6(0x1f4)])){const _0x38926f=_0x44fa1b[_0x54fea6(0x20f)](/(TinyLlama-\d+\.?\d*[Bb]-Chat-v[\d\.]+)/i);if(_0x38926f)return _0x38926f[0x1];}if(_0x5180c1[_0x54fea6(0x20a)](_0x2671d5[_0x54fea6(0x241)])){const _0x54d651=_0x44fa1b[_0x54fea6(0x20f)](/(Phi-\d+\.?\d+-\w+-\w+)/i);if(_0x54d651)return _0x54d651[0x1];}if(_0x5180c1[_0x54fea6(0x20a)](_0x2671d5[_0x54fea6(0x235)])){const _0x9e3d30=_0x44fa1b[_0x54fea6(0x20f)](/(DeepSeek-R1-Distill-(?:Qwen|Llama)-\d+\.?\d*[Bb])/i);if(_0x9e3d30)return _0x9e3d30[0x1];}if(_0x5180c1[_0x54fea6(0x20a)](_0x54fea6(0x22a))){const _0x933fba=_0x44fa1b[_0x54fea6(0x20f)](/(snowflake-arctic-embed-[ms])/i);if(_0x933fba)return _0x933fba[0x1];}let _0x37716c=_0x44fa1b[_0x54fea6(0x1e5)](/-q\d+f\d+(_\d+)?(-MLC)?$/i,'')[_0x54fea6(0x1e5)](/-MLC$/i,'');return _0x37716c=_0x37716c[_0x54fea6(0x1e5)](/-b\d+$/i,''),_0x37716c;}[_0x2d7ee7(0x238)](_0x16a296){const _0x545a70=_0x2d7ee7,_0x7c05ea={'MlAKX':function(_0x434964,_0x4755c7){return _0x434964/_0x4755c7;},'nTpEm':function(_0xb7dcb1,_0x122b1b){return _0xb7dcb1+_0x122b1b;},'QAWXE':function(_0x59c35f,_0x5dac6b){return _0x59c35f+_0x5dac6b;},'Odvvc':function(_0x3e4068,_0x1331e7){return _0x3e4068(_0x1331e7);},'aWSdk':function(_0x258230,_0x251c41){return _0x258230/_0x251c41;}};if(_0x16a296===0x0)return _0x545a70(0x1fe);const _0xb94e9c=0x400,_0x5b0486=[_0x545a70(0x23b),'KB','MB','GB','TB'],_0x529d2f=Math['floor'](_0x7c05ea[_0x545a70(0x230)](Math[_0x545a70(0x1c7)](_0x16a296),Math[_0x545a70(0x1c7)](_0xb94e9c)));return _0x7c05ea[_0x545a70(0x221)](_0x7c05ea[_0x545a70(0x1eb)](_0x7c05ea[_0x545a70(0x212)](parseFloat,_0x7c05ea['aWSdk'](_0x16a296,Math[_0x545a70(0x1d2)](_0xb94e9c,_0x529d2f))[_0x545a70(0x239)](0x2)),'\x20'),_0x5b0486[_0x529d2f]);}[_0x2d7ee7(0x1dd)](_0x275c73){const _0x343f0d=_0x2d7ee7,_0x3e64b5={'DzALT':function(_0x4f9aa0,_0x387b4a,_0xdb42a0){return _0x4f9aa0(_0x387b4a,_0xdb42a0);}},_0x2297a0=this[_0x343f0d(0x1ea)](_0x275c73);this[_0x343f0d(0x1de)]=this['modelQueue'][_0x343f0d(0x203)](_0x3ad34a=>this[_0x343f0d(0x1ea)](_0x3ad34a)!==_0x2297a0),this['modelQueue'][_0x343f0d(0x1f1)](_0x2297a0),_0x3e64b5['DzALT'](setTimeout,()=>{const _0x24b7ce=_0x343f0d;this[_0x24b7ce(0x1cb)]();},0x0);}async[_0x2d7ee7(0x1cb)](){const _0x15af0f=_0x2d7ee7,_0x4f0399={'BgdBP':function(_0x24bacc,_0x34144c){return _0x24bacc>_0x34144c;},'rRbrZ':function(_0x51e205,_0x3b79ac){return _0x51e205*_0x3b79ac;},'tfGHP':function(_0x6101e0,_0x412b74){return _0x6101e0*_0x412b74;}};await this[_0x15af0f(0x220)]();if(_0x4f0399[_0x15af0f(0x21a)](this[_0x15af0f(0x1c8)],_0x4f0399[_0x15af0f(0x219)](this[_0x15af0f(0x1f7)],this[_0x15af0f(0x23c)]))){console['log'](_0x15af0f(0x229)+this[_0x15af0f(0x238)](this[_0x15af0f(0x1c8)])+_0x15af0f(0x23f)+this['cacheThreshold']*0x64+_0x15af0f(0x227)+this[_0x15af0f(0x238)](_0x4f0399[_0x15af0f(0x21d)](this['maxCacheSize'],this['cacheThreshold']))+')');while(_0x4f0399[_0x15af0f(0x21a)](this[_0x15af0f(0x1de)][_0x15af0f(0x207)],0x1)&&this[_0x15af0f(0x1c8)]>this['maxCacheSize']*this[_0x15af0f(0x23c)]){const _0x5a273e=this[_0x15af0f(0x1de)][_0x15af0f(0x1cd)]();if(_0x5a273e){const _0x20cef4=this[_0x15af0f(0x1ea)](_0x5a273e);console[_0x15af0f(0x1c7)]('Removing\x20least\x20recently\x20used\x20model:\x20'+_0x20cef4),await this['removeModelFromCache'](_0x20cef4),await this[_0x15af0f(0x220)]();}}}}async[_0x2d7ee7(0x1e0)](_0x579315){const _0x36196d=_0x2d7ee7,_0x149c4e={'wxkDl':function(_0x361894,_0x54e3f5){return _0x361894===_0x54e3f5;},'LrJGG':_0x36196d(0x1f3),'ldtaW':'webllm/wasm','vyPQG':_0x36196d(0x216)};try{const _0x8bacbb=[_0x149c4e[_0x36196d(0x202)],_0x149c4e[_0x36196d(0x206)],_0x149c4e[_0x36196d(0x233)]],_0x15b1ee=this[_0x36196d(0x1ea)](_0x579315);console[_0x36196d(0x1c7)](_0x36196d(0x1ce)+_0x579315+_0x36196d(0x1ef)+_0x15b1ee+')');for(const _0x3d7f6d of _0x8bacbb){const _0x140c88=await caches[_0x36196d(0x1df)](_0x3d7f6d),_0x32b826=await _0x140c88['keys'](),_0x1cf858=_0x32b826[_0x36196d(0x203)](_0x6796a0=>{const _0x47859b=_0x36196d,_0x1143ce=_0x6796a0['url'],_0x4c6eb0=this[_0x47859b(0x1c9)](_0x1143ce);if(_0x4c6eb0){const _0x5412bd=this[_0x47859b(0x1ea)](_0x4c6eb0);return _0x149c4e[_0x47859b(0x205)](_0x5412bd,_0x15b1ee);}return![];});console[_0x36196d(0x1c7)]('Found\x20'+_0x1cf858[_0x36196d(0x207)]+'\x20entries\x20to\x20remove\x20from\x20'+_0x3d7f6d),await Promise[_0x36196d(0x1ec)](_0x1cf858[_0x36196d(0x213)](_0x12199a=>_0x140c88[_0x36196d(0x1d4)](_0x12199a)));}console[_0x36196d(0x1c7)]('Successfully\x20removed\x20model\x20'+_0x15b1ee+_0x36196d(0x23e)),this[_0x36196d(0x228)][_0x36196d(0x1d4)](_0x15b1ee),this[_0x36196d(0x1de)]=this[_0x36196d(0x1de)]['filter'](_0x58d1e7=>_0x58d1e7!==_0x15b1ee);}catch(_0x277506){console['error'](_0x36196d(0x231)+_0x579315+_0x36196d(0x1cc),_0x277506);throw _0x277506;}}async['getCacheInfo'](){const _0x45101e=_0x2d7ee7,_0x2ad2b2={'HQjhG':function(_0x146698,_0x1541b9){return _0x146698*_0x1541b9;},'hoEuo':function(_0x39dd27,_0xc3b29e){return _0x39dd27/_0xc3b29e;}};return await this[_0x45101e(0x220)](),{'totalSize':this['currentCacheSize'],'maxSize':this[_0x45101e(0x1f7)],'usedPercent':_0x2ad2b2[_0x45101e(0x1cf)](_0x2ad2b2[_0x45101e(0x223)](this[_0x45101e(0x1c8)],this['maxCacheSize']),0x64),'models':Array[_0x45101e(0x242)](this[_0x45101e(0x228)]['entries']())[_0x45101e(0x213)](([_0x310f1d,_0x20306b])=>({'id':_0x310f1d,'size':_0x20306b,'position':this[_0x45101e(0x1de)]['indexOf'](_0x310f1d)+0x1})),'debug':{'modelQueueLength':this[_0x45101e(0x1de)][_0x45101e(0x207)],'modelSizesLength':this[_0x45101e(0x228)]['size'],'modelQueue':[...this[_0x45101e(0x1de)]]}};}[_0x2d7ee7(0x1f2)](){const _0xb57ebd=_0x2d7ee7,_0x5324f0=[],_0x33d9cb=new Set();for(const _0x9f507c of this[_0xb57ebd(0x1de)]){const _0x15be38=this[_0xb57ebd(0x1ea)](_0x9f507c);!_0x33d9cb[_0xb57ebd(0x234)](_0x15be38)&&(_0x5324f0[_0xb57ebd(0x1f1)](_0x15be38),_0x33d9cb[_0xb57ebd(0x1c6)](_0x15be38));}this[_0xb57ebd(0x1de)]=_0x5324f0,console[_0xb57ebd(0x1c7)](_0xb57ebd(0x211)+this[_0xb57ebd(0x1de)][_0xb57ebd(0x207)]);}[_0x2d7ee7(0x218)](_0x3ba140){const _0x1f9b05=_0x2d7ee7;return this[_0x1f9b05(0x228)]['has'](_0x3ba140);}async['estimateAvailableStorageAndSetLimit'](){const _0x4121a2=_0x2d7ee7,_0x331764={'lwjLw':function(_0x18543c,_0x5b3a02){return _0x18543c in _0x5b3a02;},'RNzhm':function(_0x38a8f8,_0x31513e){return _0x38a8f8*_0x31513e;},'lsHuR':function(_0x4410a1,_0x101885){return _0x4410a1*_0x101885;},'wcGfJ':function(_0x1b9308,_0x457d2c){return _0x1b9308*_0x457d2c;},'tJYvt':_0x4121a2(0x208)};try{if(_0x331764[_0x4121a2(0x1e1)](_0x4121a2(0x1fc),navigator)&&_0x331764[_0x4121a2(0x1e1)](_0x4121a2(0x20d),navigator[_0x4121a2(0x1fc)])){const _0x1e65d4=await navigator[_0x4121a2(0x1fc)]['estimate'](),_0x2cd879=_0x1e65d4[_0x4121a2(0x226)]||0x0,_0x3adce0=_0x1e65d4[_0x4121a2(0x1d6)]||0x0,_0x27dc00=_0x2cd879-_0x3adce0;console['log']('Storage\x20quota:\x20'+this[_0x4121a2(0x238)](_0x2cd879)),console['log'](_0x4121a2(0x21e)+this[_0x4121a2(0x238)](_0x3adce0)),console[_0x4121a2(0x1c7)]('Available\x20storage:\x20'+this[_0x4121a2(0x238)](_0x27dc00));const _0x34158e=Math['min'](_0x27dc00*0.6,_0x331764[_0x4121a2(0x1f8)](0x5*0x400,0x400)*0x400);this[_0x4121a2(0x1f7)]=Math['max'](_0x34158e,_0x331764[_0x4121a2(0x23d)](0x1f4,0x400)*0x400),console[_0x4121a2(0x1c7)](_0x4121a2(0x1dc)+this['formatBytes'](this[_0x4121a2(0x1f7)])+'\x20(60%\x20of\x20available\x20space)');}else this[_0x4121a2(0x1f7)]=0x400*0x400*0x400,console[_0x4121a2(0x1c7)](_0x4121a2(0x22f)+this[_0x4121a2(0x238)](this[_0x4121a2(0x1f7)]));}catch(_0x2b6e53){this[_0x4121a2(0x1f7)]=_0x331764['wcGfJ'](_0x331764['lsHuR'](0x400,0x400),0x400),console['error'](_0x331764[_0x4121a2(0x1ca)],_0x2b6e53),console[_0x4121a2(0x1c7)](_0x4121a2(0x1d7)+this[_0x4121a2(0x238)](this['maxCacheSize']));}}}