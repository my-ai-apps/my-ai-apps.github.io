
/*!
Copyright © 2024 Saisha Pandit. All Rights Reserved.
Unauthorized use, modification, or distribution is strictly prohibited.
*/
function _0x4496(_0x198dd2,_0x7b283){const _0x374c4f=_0x374c();return _0x4496=function(_0x449651,_0x17f76c){_0x449651=_0x449651-0x7d;let _0x24ea4b=_0x374c4f[_0x449651];return _0x24ea4b;},_0x4496(_0x198dd2,_0x7b283);}(function(_0x26df43,_0x595881){const _0x999b5=_0x4496,_0x29f2ac=_0x26df43();while(!![]){try{const _0x1d4a73=parseInt(_0x999b5(0x98))/0x1*(-parseInt(_0x999b5(0xb4))/0x2)+parseInt(_0x999b5(0xa1))/0x3*(-parseInt(_0x999b5(0xce))/0x4)+-parseInt(_0x999b5(0xb7))/0x5*(-parseInt(_0x999b5(0xba))/0x6)+parseInt(_0x999b5(0xe5))/0x7*(-parseInt(_0x999b5(0xb3))/0x8)+-parseInt(_0x999b5(0x8c))/0x9*(-parseInt(_0x999b5(0x95))/0xa)+-parseInt(_0x999b5(0x85))/0xb+parseInt(_0x999b5(0x84))/0xc;if(_0x1d4a73===_0x595881)break;else _0x29f2ac['push'](_0x29f2ac['shift']());}catch(_0x2f323d){_0x29f2ac['push'](_0x29f2ac['shift']());}}}(_0x374c,0x6c7bd));import{marked}from'https://cdn.jsdelivr.net/npm/marked@13.0.3/lib/marked.esm.js';function _0x374c(){const _0x182ff6=['scrollHeight','VUCMx','quizInput','getElementById','HbuYE','AI\x20BrowserLanguage\x20Session\x20initialized\x20successfully','VqgYe','querySelector','zkiqN','<i\x20class=\x22fas\x20fa-play\x22></i>','YExSW','welcomeScreen','startQuiz','436996ozUDnH','display','scrollTop','iSmVh','className','click','apnkW','length','chatContainer','SGtYA','classList','startQuizButton','style','addEventListener','<pre><code>$1</code></pre>','textContent','settingsButton','quizStarted','message\x20','.input-container','sendButton','error','DSAyZ','171661DcXalH','messageInput','fgeei','Sredk','returnedToChat','<strong>$1</strong>','role','add','value','uZnPp','oRgpc','Please\x20enter\x20quiz\x20questions\x20and\x20answers.','VJsSP','newChatButton','eUdVv','message\x20assistant\x20typing','typingIndicator','JvdXr','tpAVl','content','focus','recording','\x20questions','forEach','question','bHGRn','PgzSc','<em>$1</em>','mGCBA','<div\x20class=\x22typing-indicator\x22><span></span><span></span><span></span></div>','quizCompleted','6405612pqLkPx','7379361SFSXJg','index','IYlFl','messagesContainer','autoAdvanceTimeout','nYKuc','teRZy','124731fYmnww','Elyxl','kpVzh','then','innerHTML','YfcEZ','Quiz\x20started\x20with\x20','.countdown','remove','490niUbvS','errorMessage','Invalid\x20quiz\x20format.','29XeTJXQ','PyxXY','catch','createElement','log','WWnJd','loader','questionLoaded','Quiz\x20completed:','6rglsrc','BRdpg','div','jXhiu','isPaused','DOMContentLoaded','Failed\x20to\x20initialize\x20AI:','pTNoF','init','XxmYC','OHpBo','RiXdr','assistant','VhLbM','updateUserAnswer','yYznf','MoPyK','SOfjc','88QbDCnq','21002FtkCjB','FEvjw','rfqtl','1158480ySiUDv','autoAdvancePrompt','XhpnY','18KcYzMM','none','user','tQljX','replace','appendChild','cPozK'];_0x374c=function(){return _0x182ff6;};return _0x374c();}import _0x462be3 from'https://cdn.jsdelivr.net/npm/dompurify@3.1.6/dist/purify.es.mjs';import{displayError,Logger}from'./common.js';import{aiAdapter}from'./aiAdapter.js';import{SpeechProcessor}from'./speechProcessor.js';import{QuizManager}from'./quizManager.js';((async()=>{const _0xb94ceb=_0x4496,_0x23afa6={'MoPyK':_0xb94ceb(0xa7),'mGCBA':function(_0x2da445,_0x2773ff){return _0x2da445(_0x2773ff);},'Iygbw':'Failed\x20to\x20initialize\x20AI.\x20Please\x20refresh\x20the\x20page.','Sredk':_0xb94ceb(0xf0),'PgzSc':function(_0x59fa87,_0x4aa559){return _0x59fa87===_0x4aa559;},'teRZy':_0xb94ceb(0x97),'oRgpc':_0xb94ceb(0xc6),'FEvjw':_0xb94ceb(0xd3),'OHpBo':_0xb94ceb(0xdf),'nYKuc':_0xb94ceb(0x9f),'cHfxF':_0xb94ceb(0x83),'iSmVh':_0xb94ceb(0xe9),'VUCMx':_0xb94ceb(0xf4),'cPozK':_0xb94ceb(0x82),'VhLbM':_0xb94ceb(0xf5),'pTNoF':_0xb94ceb(0xea),'EyKVb':'<br>','yYznf':_0xb94ceb(0xdc),'zkiqN':_0xb94ceb(0xbb),'uZnPp':'flex','IYlFl':_0xb94ceb(0xbc),'BRdpg':function(_0x237e63,_0x12c38e){return _0x237e63(_0x12c38e);},'VJsSP':function(_0x308524){return _0x308524();},'PbmPj':_0xb94ceb(0xca),'kpVzh':'<i\x20class=\x22fas\x20fa-pause\x22></i>','JvdXr':_0xb94ceb(0x93),'XhpnY':function(_0x165a88){return _0x165a88();},'TohRK':function(_0x1f986a){return _0x1f986a();},'tpAVl':function(_0x52556e,_0x8299ca){return _0x52556e>=_0x8299ca;},'VqgYe':function(_0x424595,_0x444879){return _0x424595(_0x444879);},'YfcEZ':function(_0x342bab,_0x4f5914,_0x38c027){return _0x342bab(_0x4f5914,_0x38c027);},'HbuYE':_0xb94ceb(0xcc),'rfqtl':_0xb94ceb(0xd6),'fgeei':_0xb94ceb(0x88),'WWnJd':_0xb94ceb(0xe6),'apnkW':_0xb94ceb(0xe2),'VTkQH':'micButton','jXhiu':_0xb94ceb(0x96),'MtEtm':_0xb94ceb(0x9e),'eUdVv':_0xb94ceb(0xf2),'YExSW':_0xb94ceb(0xde),'PyxXY':_0xb94ceb(0xe1),'DHHlF':_0xb94ceb(0xc3),'tQljX':_0xb94ceb(0xd9),'bHGRn':_0xb94ceb(0xb8)};let _0x27de0b,_0x29afc1=null;const _0x2eacf0=document[_0xb94ceb(0xc4)](_0x23afa6[_0xb94ceb(0xc5)]),_0x109d26=document[_0xb94ceb(0xc4)](_0x23afa6[_0xb94ceb(0xb6)]),_0x281d43=document[_0xb94ceb(0xc4)](_0x23afa6[_0xb94ceb(0xe7)]),_0x2ddb26=document[_0xb94ceb(0xc4)](_0x23afa6[_0xb94ceb(0x9d)]),_0x472bd2=document[_0xb94ceb(0xc4)](_0x23afa6[_0xb94ceb(0xd4)]),_0xcdedb6=document['getElementById'](_0x23afa6['VTkQH']),_0x1e7cf4=document[_0xb94ceb(0xc4)](_0x23afa6[_0xb94ceb(0xa4)]),_0x46e1f5=document[_0xb94ceb(0xc4)](_0x23afa6['MtEtm']),_0x2517c3=document[_0xb94ceb(0xc4)](_0x23afa6[_0xb94ceb(0xf3)]),_0x16f553=document[_0xb94ceb(0xc4)](_0x23afa6[_0xb94ceb(0xcb)]),_0x1ffd3e=document[_0xb94ceb(0xc8)](_0x23afa6[_0xb94ceb(0x99)]),_0x59b204=document[_0xb94ceb(0xc4)](_0x23afa6['DHHlF']),_0x16c957=document[_0xb94ceb(0xc4)](_0x23afa6[_0xb94ceb(0xbd)]),_0x15eeb1=document[_0xb94ceb(0xc4)]('playPauseButton'),_0x2ee482=document[_0xb94ceb(0xc4)](_0x23afa6[_0xb94ceb(0x7e)]);document[_0xb94ceb(0xdb)](_0xb94ceb(0xa6),()=>{const _0x496e8f=_0xb94ceb,_0x5088e3={'SOfjc':_0x23afa6[_0x496e8f(0xef)]};_0x15eeb1?.['addEventListener'](_0x23afa6['FEvjw'],_0xd0fd6e);const _0x1b9c52=new BaseConversationManager();_0x27de0b=new QuizManager({'showAutoAdvancePrompt':()=>_0x66177()});let _0x4d96c3;function _0x67f590(){const _0x4417cf=_0x496e8f;_0x4d96c3=new SpeechProcessor({'onResult':(_0x263978,_0x33f5ed)=>{const _0x22cc91=_0x4496;_0x27de0b[_0x22cc91(0xaf)](_0x263978,_0x33f5ed);},'onError':_0x372575=>displayError(_0x372575),'onSilence':_0x5ef87d=>_0x27de0b['handleSilence'](_0x5ef87d),'onRecordingStart':()=>_0xcdedb6?.[_0x4417cf(0xd8)][_0x4417cf(0xec)]('recording'),'onRecordingStop':()=>_0xcdedb6?.['classList'][_0x4417cf(0x94)](_0x4417cf(0xfa)),'minimumWordCount':0x5,'silenceTimeout':0xbb8,'extendedSilenceTimeout':0xbb8});}aiAdapter[_0x496e8f(0xa9)]()[_0x496e8f(0x8f)](()=>{const _0x4ef999=_0x496e8f;console[_0x4ef999(0x9c)](_0x5088e3[_0x4ef999(0xb2)]);})[_0x496e8f(0x9a)](_0x443225=>{const _0xe19600=_0x496e8f;console[_0xe19600(0xe3)](_0x23afa6[_0xe19600(0xb1)],_0x443225),_0x23afa6[_0xe19600(0x81)](displayError,_0x23afa6['Iygbw']);}),_0x27de0b[_0x496e8f(0xa9)](),_0x16c957?.[_0x496e8f(0xdb)](_0x23afa6[_0x496e8f(0xb5)],()=>{const _0x43f5a7=_0x496e8f,_0x5914f0=_0x59b204[_0x43f5a7(0xed)]['trim']();if(!_0x5914f0){displayError(_0x23afa6[_0x43f5a7(0xe8)]);return;}const _0x1b3e27=_0x27de0b['parseQuizQuestions'](_0x5914f0);if(!_0x1b3e27||_0x23afa6[_0x43f5a7(0x7f)](_0x1b3e27[_0x43f5a7(0xd5)],0x0)){_0x23afa6['mGCBA'](displayError,_0x23afa6[_0x43f5a7(0x8b)]);return;}_0x27de0b[_0x43f5a7(0xcd)](_0x1b3e27);}),_0x27de0b['on'](_0x23afa6[_0x496e8f(0xab)],_0x596b6b=>console[_0x496e8f(0x9c)](_0x496e8f(0x92)+_0x596b6b[_0x496e8f(0xd5)]+_0x496e8f(0xfb))),_0x27de0b['on'](_0x23afa6[_0x496e8f(0x8a)],_0x12b48f=>console[_0x496e8f(0x9c)]('Loaded\x20question\x20'+(_0x12b48f[_0x496e8f(0x86)]+0x1)+':\x20'+_0x12b48f[_0x496e8f(0x7d)]['question'])),_0x27de0b['on'](_0x23afa6['cHfxF'],_0xff6949=>console['log'](_0x496e8f(0xa0),_0xff6949)),_0x27de0b['on'](_0x23afa6[_0x496e8f(0xd1)],()=>console['log']('Returned\x20to\x20chat\x20interface')),_0x67f590();});function _0x1ffe59(){const _0x39d474=_0xb94ceb;if(!_0x281d43)return;const _0x11b278=document[_0x39d474(0x9b)](_0x39d474(0xa3));_0x11b278[_0x39d474(0xd2)]=_0x23afa6[_0x39d474(0xc2)],_0x11b278['id']=_0x39d474(0xf5),_0x11b278[_0x39d474(0x90)]=_0x23afa6[_0x39d474(0xc0)],_0x281d43[_0x39d474(0xbf)](_0x11b278),_0x281d43[_0x39d474(0xd0)]=_0x281d43[_0x39d474(0xc1)];}function _0x36bc3a(){const _0x4a2c23=_0xb94ceb;document[_0x4a2c23(0xc4)](_0x23afa6[_0x4a2c23(0xae)])?.['remove']();}function _0x84e09e(_0x542bb4){const _0x5cbc79=_0xb94ceb;return _0x542bb4[_0x5cbc79(0xbe)](/\*\*(.*?)\*\*/g,_0x23afa6[_0x5cbc79(0xa8)])[_0x5cbc79(0xbe)](/\*(.*?)\*/g,_0x5cbc79(0x80))[_0x5cbc79(0xbe)](/\n/g,_0x23afa6['EyKVb'])[_0x5cbc79(0xbe)](/```([\s\S]*?)```/g,_0x23afa6[_0x5cbc79(0xb0)]);}function _0x1f7115(){const _0x53e9ca=_0xb94ceb;if(_0x2eacf0)_0x2eacf0[_0x53e9ca(0xda)][_0x53e9ca(0xcf)]=_0x23afa6[_0x53e9ca(0xc9)];if(_0x109d26)_0x109d26[_0x53e9ca(0xda)][_0x53e9ca(0xcf)]=_0x23afa6[_0x53e9ca(0xee)];if(_0x1ffd3e)_0x1ffd3e['style'][_0x53e9ca(0xcf)]=_0x23afa6[_0x53e9ca(0xee)];if(_0x2ddb26)_0x2ddb26[_0x53e9ca(0xf9)]();}function _0x563212(_0x2aa5c9){const _0x113634=_0xb94ceb,_0x108e5f={'DSAyZ':function(_0x3a4c5c,_0x578843){const _0x43f831=_0x4496;return _0x23afa6[_0x43f831(0x7f)](_0x3a4c5c,_0x578843);},'NpWRP':_0x23afa6[_0x113634(0x87)],'Elyxl':_0x113634(0xad),'SGtYA':function(_0x389a00,_0x6d5d5a){const _0x32ab21=_0x113634;return _0x23afa6[_0x32ab21(0xa2)](_0x389a00,_0x6d5d5a);}};if(!_0x281d43)return;const _0x896c76=document[_0x113634(0xc4)](_0x23afa6[_0x113634(0xae)]);_0x281d43[_0x113634(0x90)]='',_0x2aa5c9[_0x113634(0xfc)](_0x28f8bc=>{const _0x28fe4d=_0x113634,_0x206d9a=document[_0x28fe4d(0x9b)](_0x28fe4d(0xa3));_0x206d9a[_0x28fe4d(0xd2)]=_0x28fe4d(0xe0)+(_0x108e5f[_0x28fe4d(0xe4)](_0x28f8bc[_0x28fe4d(0xeb)],_0x108e5f['NpWRP'])?_0x108e5f['NpWRP']:_0x108e5f[_0x28fe4d(0x8d)]),_0x206d9a['innerHTML']=_0x108e5f[_0x28fe4d(0xd7)](_0x84e09e,_0x28f8bc[_0x28fe4d(0xf8)]),_0x281d43[_0x28fe4d(0xbf)](_0x206d9a);});if(_0x896c76)_0x281d43[_0x113634(0xbf)](_0x896c76);_0x281d43[_0x113634(0xd0)]=_0x281d43[_0x113634(0xc1)];}function _0xd0fd6e(){const _0xa71919=_0xb94ceb;_0x27de0b[_0xa71919(0xa5)]=!_0x27de0b[_0xa71919(0xa5)],_0x23afa6[_0xa71919(0xf1)](_0x438a27);if(!_0x27de0b['isPaused'])_0x2deef8();else clearInterval(_0x29afc1),_0x23afa6['BRdpg'](clearTimeout,_0x27de0b[_0xa71919(0x89)]);}function _0x438a27(){const _0x4aac8e=_0xb94ceb;_0x15eeb1[_0x4aac8e(0x90)]=_0x27de0b['isPaused']?_0x23afa6['PbmPj']:_0x23afa6[_0x4aac8e(0x8e)];}function _0x66177(){const _0x487d86=_0xb94ceb;_0x2ee482[_0x487d86(0xc8)](_0x23afa6[_0x487d86(0xf6)])[_0x487d86(0xdd)]='2',_0x2ee482[_0x487d86(0xda)]['display']='flex',_0x27de0b[_0x487d86(0xa5)]=![],_0x23afa6[_0x487d86(0xb9)](_0x438a27),_0x23afa6['TohRK'](_0x2deef8);}function _0x2deef8(){const _0x13234b=_0xb94ceb,_0x519a0c={'MENwF':function(_0x262d14,_0x243f0c){const _0x3e851e=_0x4496;return _0x23afa6[_0x3e851e(0xf7)](_0x262d14,_0x243f0c);},'RiXdr':_0x23afa6[_0x13234b(0xf6)],'XxmYC':function(_0x5ef3d8,_0xe31d34){const _0x232f12=_0x13234b;return _0x23afa6[_0x232f12(0xc7)](_0x5ef3d8,_0xe31d34);}};let _0x269b0f=0x1;clearInterval(_0x29afc1),clearTimeout(_0x27de0b[_0x13234b(0x89)]),_0x29afc1=_0x23afa6[_0x13234b(0x91)](setInterval,()=>{const _0x5690fa=_0x13234b;!_0x27de0b[_0x5690fa(0xa5)]&&(_0x269b0f--,_0x519a0c['MENwF'](_0x269b0f,0x0)?_0x2ee482[_0x5690fa(0xc8)](_0x519a0c[_0x5690fa(0xac)])['textContent']=_0x269b0f:_0x519a0c[_0x5690fa(0xaa)](clearInterval,_0x29afc1));},0x3e8),_0x27de0b[_0x13234b(0x89)]=_0x23afa6[_0x13234b(0x91)](setTimeout,()=>{const _0xc77fd1=_0x13234b;!_0x27de0b[_0xc77fd1(0xa5)]&&(_0x2ee482[_0xc77fd1(0xda)]['display']=_0x23afa6['zkiqN'],_0x27de0b['nextQuestion']());},0x3e8);}})());