
/*!
Copyright © 2024 Saisha Pandit. All Rights Reserved.
Unauthorized use, modification, or distribution is strictly prohibited.
*/
(function(_0x1c58ab,_0x6526c7){const _0x58155b=_0x28f3,_0xb43996=_0x1c58ab();while(!![]){try{const _0x329589=parseInt(_0x58155b(0x1a9))/0x1+-parseInt(_0x58155b(0x174))/0x2+parseInt(_0x58155b(0x1bc))/0x3*(-parseInt(_0x58155b(0x1d5))/0x4)+-parseInt(_0x58155b(0x188))/0x5*(parseInt(_0x58155b(0x19c))/0x6)+parseInt(_0x58155b(0x1be))/0x7+parseInt(_0x58155b(0x1b1))/0x8*(parseInt(_0x58155b(0x1b2))/0x9)+-parseInt(_0x58155b(0x1ac))/0xa*(-parseInt(_0x58155b(0x18f))/0xb);if(_0x329589===_0x6526c7)break;else _0xb43996['push'](_0xb43996['shift']());}catch(_0x330fb0){_0xb43996['push'](_0xb43996['shift']());}}}(_0x4f5b,0x435bf));import{marked}from'https://cdn.jsdelivr.net/npm/marked@13.0.3/lib/marked.esm.js';import _0x52fe4c from'https://cdn.jsdelivr.net/npm/dompurify@3.1.6/dist/purify.es.mjs';import{BaseConversationManager}from'./BaseConversationManager.js';function _0x4f5b(){const _0x2738=['welcomeScreen','user','HGwVx','3860PJRbfA','bHovI','catch','classList','div','addEventListener','querySelector','appendChild','NRBqx','919106eURrNb','trim','Failed\x20to\x20initialize\x20AI:','Quiz\x20started\x20with\x20','split','<em>$1</em>','flex','RgpdP','XbVyE','FFYet','IymhD','Gkafl','RcEhc','display','assistant','LVTwg','<pre><code>$1</code></pre>','xkCjo','nextQuestion','click','15CGIKnX','NBgDG','createElement','QDmYL','updateUserAnswer','sendButton','0|2|3|1|4','2984861ZTAypk','message\x20','none','VdszE','autoAdvanceTimeout','DxxBw','returnedToChat','errorMessage','WitHI','className','question','SOiVY','Invalid\x20quiz\x20format.','23274uaykqn','hMYSy','message\x20assistant\x20typing','value','rRUyY','length','Returned\x20to\x20chat\x20interface','Loaded\x20question\x20','add','<br>','mdmaR','chatContainer','<i\x20class=\x22fas\x20fa-play\x22></i>','130032USnEnM','content','XaOCT','10mGRDza','cJwXX','style','ZYChG','<i\x20class=\x22fas\x20fa-pause\x22></i>','2995152cNbktB','9ccAepR','<div\x20class=\x22typing-indicator\x22><span></span><span></span><span></span></div>','init','anGsT','autoAdvancePrompt','zwZqc','textContent','isPaused','qCETy','innerHTML','153wpvvVU','recording','143717TXtCJB','scrollHeight','handleSilence','log','JGUfS','AI\x20Language\x20Session\x20initialized\x20successfully','getElementById','scrollTop','startQuizButton','SByua','error','questionLoaded','gftpw','MxXWb','replace','role','remove','FQnzY','Failed\x20to\x20initialize\x20AI.\x20Please\x20refresh\x20the\x20page.','hllLN'];_0x4f5b=function(){return _0x2738;};return _0x4f5b();}import{displayError,Logger}from'./common.js';import{aiLanguageSession,initializeLanguageSession}from'./aiCommon.js';import{SpeechProcessor}from'./speechProcessor.js';import{QuizManager}from'./quizManager.js';function _0x28f3(_0x241a71,_0x485a15){const _0x4f5b10=_0x4f5b();return _0x28f3=function(_0x28f3a5,_0x130cf9){_0x28f3a5=_0x28f3a5-0x16d;let _0x67db19=_0x4f5b10[_0x28f3a5];return _0x67db19;},_0x28f3(_0x241a71,_0x485a15);}((async()=>{const _0xbfdb7=_0x28f3,_0x3f61f0={'HGwVx':function(_0x1b9d3c,_0x2dee77){return _0x1b9d3c(_0x2dee77);},'anGsT':_0xbfdb7(0x19b),'mdmaR':_0xbfdb7(0x187),'XaOCT':'quizStarted','SOiVY':_0xbfdb7(0x1c9),'Nfouz':'quizCompleted','zwZqc':function(_0xbd596c){return _0xbd596c();},'FQnzY':_0xbfdb7(0x16f),'VdszE':'typingIndicator','QTNAz':'<strong>$1</strong>','zCewv':_0xbfdb7(0x179),'Gkafl':_0xbfdb7(0x184),'ZYChG':'none','xkCjo':function(_0x5e75be,_0x5be2b0){return _0x5e75be===_0x5be2b0;},'RgpdP':_0xbfdb7(0x1d3),'LVTwg':_0xbfdb7(0x182),'NRBqx':_0xbfdb7(0x1a8),'WitHI':_0xbfdb7(0x1b0),'IymhD':'.countdown','JGHsl':_0xbfdb7(0x17a),'hllLN':function(_0x428c80,_0x10f6d1){return _0x428c80>=_0x10f6d1;},'bHovI':function(_0x46326b,_0x664fbd){return _0x46326b(_0x664fbd);},'JGUfS':_0xbfdb7(0x1d2),'NBgDG':_0xbfdb7(0x1a7),'MIyaL':'messagesContainer','DliPJ':'messageInput','SByua':_0xbfdb7(0x18d),'XbVyE':'micButton','DxxBw':'newChatButton','MxXWb':'.input-container','rRUyY':'quizInput','BbnYb':_0xbfdb7(0x1c6),'FFYet':'playPauseButton','hMYSy':_0xbfdb7(0x1b6),'SvGSr':'DOMContentLoaded'};let _0x58b82b,_0x16bd21=null;const _0x2c193e=document[_0xbfdb7(0x1c4)](_0x3f61f0[_0xbfdb7(0x1c2)]),_0x656ecc=document[_0xbfdb7(0x1c4)](_0x3f61f0[_0xbfdb7(0x189)]),_0x321b18=document['getElementById'](_0x3f61f0['MIyaL']),_0x27799f=document['getElementById'](_0x3f61f0['DliPJ']),_0x119c87=document[_0xbfdb7(0x1c4)](_0x3f61f0[_0xbfdb7(0x1c7)]),_0x129a7d=document[_0xbfdb7(0x1c4)](_0x3f61f0[_0xbfdb7(0x17c)]),_0x149d9a=document['getElementById'](_0xbfdb7(0x196)),_0x2dbe4c=document['getElementById']('loader'),_0x45b41d=document[_0xbfdb7(0x1c4)](_0x3f61f0[_0xbfdb7(0x194)]),_0x3c7452=document['getElementById']('settingsButton'),_0x1eb8c2=document[_0xbfdb7(0x171)](_0x3f61f0[_0xbfdb7(0x1cb)]),_0x1fd73a=document[_0xbfdb7(0x1c4)](_0x3f61f0[_0xbfdb7(0x1a0)]),_0xf81008=document[_0xbfdb7(0x1c4)](_0x3f61f0['BbnYb']),_0x7e27e8=document['getElementById'](_0x3f61f0[_0xbfdb7(0x17d)]),_0x549248=document['getElementById'](_0x3f61f0[_0xbfdb7(0x19d)]);document['addEventListener'](_0x3f61f0['SvGSr'],()=>{const _0x217b3e=_0xbfdb7,_0x286de3={'cJwXX':_0x217b3e(0x1c3),'xSrqB':function(_0x3ca809,_0x1b0cdb){return _0x3f61f0['HGwVx'](_0x3ca809,_0x1b0cdb);},'gftpw':'Please\x20enter\x20quiz\x20questions\x20and\x20answers.','wUKau':_0x3f61f0[_0x217b3e(0x1b5)]};_0x7e27e8?.['addEventListener'](_0x3f61f0[_0x217b3e(0x1a6)],_0x1d2bc8);const _0x5bf815=new BaseConversationManager();_0x58b82b=new QuizManager({'showAutoAdvancePrompt':()=>_0x5f0b9f()});let _0x56acb4;function _0x27204(){const _0x13b46c=_0x217b3e;_0x56acb4=new SpeechProcessor({'onResult':(_0x18fcd9,_0x47e7c2)=>{const _0x356840=_0x28f3;_0x58b82b[_0x356840(0x18c)](_0x18fcd9,_0x47e7c2);},'onError':_0x158b97=>displayError(_0x158b97),'onSilence':_0x481db3=>_0x58b82b[_0x13b46c(0x1c0)](_0x481db3),'onRecordingStart':()=>_0x129a7d?.['classList'][_0x13b46c(0x1a4)](_0x13b46c(0x1bd)),'onRecordingStop':()=>_0x129a7d?.[_0x13b46c(0x16e)][_0x13b46c(0x1ce)]('recording'),'minimumWordCount':0x5,'silenceTimeout':0xbb8,'extendedSilenceTimeout':0xbb8});}initializeLanguageSession()['then'](()=>{const _0xd77bdd=_0x217b3e;console['log'](_0x286de3[_0xd77bdd(0x1ad)]);})[_0x217b3e(0x16d)](_0x387d34=>{const _0x48d111=_0x217b3e;console[_0x48d111(0x1c8)](_0x48d111(0x176),_0x387d34),displayError(_0x48d111(0x1d0));}),_0x58b82b[_0x217b3e(0x1b4)](),_0xf81008?.[_0x217b3e(0x170)]('click',()=>{const _0x376be4=_0x217b3e,_0x5651a0=_0x1fd73a[_0x376be4(0x19f)][_0x376be4(0x175)]();if(!_0x5651a0){_0x286de3['xSrqB'](displayError,_0x286de3[_0x376be4(0x1ca)]);return;}const _0x2099bd=_0x58b82b['parseQuizQuestions'](_0x5651a0);if(!_0x2099bd||_0x2099bd[_0x376be4(0x1a1)]===0x0){displayError(_0x286de3['wUKau']);return;}_0x58b82b['startQuiz'](_0x2099bd);}),_0x58b82b['on'](_0x3f61f0[_0x217b3e(0x1ab)],_0x1811c6=>console[_0x217b3e(0x1c1)](_0x217b3e(0x177)+_0x1811c6['length']+'\x20questions')),_0x58b82b['on'](_0x3f61f0[_0x217b3e(0x19a)],_0x23c14d=>console['log'](_0x217b3e(0x1a3)+(_0x23c14d['index']+0x1)+':\x20'+_0x23c14d['question'][_0x217b3e(0x199)])),_0x58b82b['on'](_0x3f61f0['Nfouz'],_0x322c49=>console[_0x217b3e(0x1c1)]('Quiz\x20completed:',_0x322c49)),_0x58b82b['on'](_0x217b3e(0x195),()=>console[_0x217b3e(0x1c1)](_0x217b3e(0x1a2))),_0x3f61f0[_0x217b3e(0x1b7)](_0x27204);});function _0x248d0b(){const _0x137048=_0xbfdb7;if(!_0x321b18)return;const _0x11060b=document[_0x137048(0x18a)](_0x3f61f0[_0x137048(0x1cf)]);_0x11060b[_0x137048(0x198)]=_0x137048(0x19e),_0x11060b['id']=_0x3f61f0['VdszE'],_0x11060b[_0x137048(0x1bb)]=_0x137048(0x1b3),_0x321b18[_0x137048(0x172)](_0x11060b),_0x321b18[_0x137048(0x1c5)]=_0x321b18['scrollHeight'];}function _0x22fe91(){const _0x393ff7=_0xbfdb7;document[_0x393ff7(0x1c4)](_0x3f61f0[_0x393ff7(0x192)])?.[_0x393ff7(0x1ce)]();}function _0x1127e2(_0x3c181b){const _0x2647be=_0xbfdb7;return _0x3c181b[_0x2647be(0x1cc)](/\*\*(.*?)\*\*/g,_0x3f61f0['QTNAz'])[_0x2647be(0x1cc)](/\*(.*?)\*/g,_0x3f61f0['zCewv'])[_0x2647be(0x1cc)](/\n/g,_0x2647be(0x1a5))[_0x2647be(0x1cc)](/```([\s\S]*?)```/g,_0x3f61f0[_0x2647be(0x17f)]);}function _0x1adb6a(){const _0x367480=_0xbfdb7;if(_0x2c193e)_0x2c193e[_0x367480(0x1ae)][_0x367480(0x181)]=_0x3f61f0[_0x367480(0x1af)];if(_0x656ecc)_0x656ecc[_0x367480(0x1ae)][_0x367480(0x181)]=_0x367480(0x17a);if(_0x1eb8c2)_0x1eb8c2[_0x367480(0x1ae)][_0x367480(0x181)]='flex';if(_0x27799f)_0x27799f['focus']();}function _0x16a5fc(_0x11305b){const _0xc8cc55=_0xbfdb7;if(!_0x321b18)return;const _0x2253e3=document[_0xc8cc55(0x1c4)](_0x3f61f0[_0xc8cc55(0x192)]);_0x321b18['innerHTML']='',_0x11305b['forEach'](_0x8e010b=>{const _0x3f2fa8=_0xc8cc55,_0x17f558=document[_0x3f2fa8(0x18a)](_0x3f61f0['FQnzY']);_0x17f558[_0x3f2fa8(0x198)]=_0x3f2fa8(0x190)+(_0x3f61f0[_0x3f2fa8(0x185)](_0x8e010b[_0x3f2fa8(0x1cd)],_0x3f61f0[_0x3f2fa8(0x17b)])?_0x3f61f0[_0x3f2fa8(0x17b)]:_0x3f61f0[_0x3f2fa8(0x183)]),_0x17f558[_0x3f2fa8(0x1bb)]=_0x3f61f0['HGwVx'](_0x1127e2,_0x8e010b[_0x3f2fa8(0x1aa)]),_0x321b18['appendChild'](_0x17f558);});if(_0x2253e3)_0x321b18[_0xc8cc55(0x172)](_0x2253e3);_0x321b18[_0xc8cc55(0x1c5)]=_0x321b18[_0xc8cc55(0x1bf)];}function _0x1d2bc8(){const _0x3253af=_0xbfdb7;_0x58b82b[_0x3253af(0x1b9)]=!_0x58b82b[_0x3253af(0x1b9)],_0x3d6fad();if(!_0x58b82b[_0x3253af(0x1b9)])_0x492cf3();else _0x3f61f0[_0x3253af(0x1d4)](clearInterval,_0x16bd21),clearTimeout(_0x58b82b[_0x3253af(0x193)]);}function _0x3d6fad(){const _0x56601e=_0xbfdb7;_0x7e27e8['innerHTML']=_0x58b82b[_0x56601e(0x1b9)]?_0x3f61f0[_0x56601e(0x173)]:_0x3f61f0[_0x56601e(0x197)];}function _0x5f0b9f(){const _0x13be22=_0xbfdb7,_0x2332cd=_0x13be22(0x18e)[_0x13be22(0x178)]('|');let _0x2d43fa=0x0;while(!![]){switch(_0x2332cd[_0x2d43fa++]){case'0':_0x549248[_0x13be22(0x171)](_0x3f61f0[_0x13be22(0x17e)])[_0x13be22(0x1b8)]='2';continue;case'1':_0x3f61f0[_0x13be22(0x1b7)](_0x3d6fad);continue;case'2':_0x549248[_0x13be22(0x1ae)][_0x13be22(0x181)]=_0x3f61f0['JGHsl'];continue;case'3':_0x58b82b[_0x13be22(0x1b9)]=![];continue;case'4':_0x3f61f0[_0x13be22(0x1b7)](_0x492cf3);continue;}break;}}function _0x492cf3(){const _0x53b303=_0xbfdb7,_0x56d9b0={'qCETy':function(_0x461b58,_0x184e79){const _0x2d9d70=_0x28f3;return _0x3f61f0[_0x2d9d70(0x1d1)](_0x461b58,_0x184e79);},'RcEhc':_0x3f61f0['IymhD'],'QDmYL':function(_0x5d4597,_0x1a0efd){const _0x2b06a9=_0x28f3;return _0x3f61f0[_0x2b06a9(0x1d6)](_0x5d4597,_0x1a0efd);}};let _0x29004f=0x1;clearInterval(_0x16bd21),_0x3f61f0['HGwVx'](clearTimeout,_0x58b82b['autoAdvanceTimeout']),_0x16bd21=setInterval(()=>{const _0x236a57=_0x28f3;!_0x58b82b[_0x236a57(0x1b9)]&&(_0x29004f--,_0x56d9b0[_0x236a57(0x1ba)](_0x29004f,0x0)?_0x549248[_0x236a57(0x171)](_0x56d9b0[_0x236a57(0x180)])[_0x236a57(0x1b8)]=_0x29004f:_0x56d9b0[_0x236a57(0x18b)](clearInterval,_0x16bd21));},0x3e8),_0x58b82b[_0x53b303(0x193)]=setTimeout(()=>{const _0x283aac=_0x53b303;!_0x58b82b[_0x283aac(0x1b9)]&&(_0x549248['style'][_0x283aac(0x181)]=_0x283aac(0x191),_0x58b82b[_0x283aac(0x186)]());},0x3e8);}})());