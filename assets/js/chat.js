
/*!
Copyright © 2024 Saisha Pandit. All Rights Reserved.
Unauthorized use, modification, or distribution is strictly prohibited.
*/
const _0x517f8e=_0x2581;(function(_0x5d56ba,_0x2efee2){const _0x20f18b=_0x2581,_0x3d341c=_0x5d56ba();while(!![]){try{const _0x55bdf0=-parseInt(_0x20f18b(0x163))/0x1*(parseInt(_0x20f18b(0x1bc))/0x2)+parseInt(_0x20f18b(0x201))/0x3*(-parseInt(_0x20f18b(0x19b))/0x4)+parseInt(_0x20f18b(0x15f))/0x5*(-parseInt(_0x20f18b(0x178))/0x6)+parseInt(_0x20f18b(0x158))/0x7*(parseInt(_0x20f18b(0x1f2))/0x8)+parseInt(_0x20f18b(0x183))/0x9+parseInt(_0x20f18b(0x190))/0xa*(parseInt(_0x20f18b(0x1a6))/0xb)+-parseInt(_0x20f18b(0x1be))/0xc*(-parseInt(_0x20f18b(0x16d))/0xd);if(_0x55bdf0===_0x2efee2)break;else _0x3d341c['push'](_0x3d341c['shift']());}catch(_0x44fa2d){_0x3d341c['push'](_0x3d341c['shift']());}}}(_0x49e2,0x9457e));import{BaseConversationManager}from'./baseConversationManager.js';import{Logger,displayError,showStatus}from'./common.js';import{AIAdapter}from'./aiAdapter.js';import{SpeechProcessor}from'./speechProcessor.js';const welcomeScreen=document['getElementById'](_0x517f8e(0x196)),chatContainer=document[_0x517f8e(0x15b)](_0x517f8e(0x1b4)),messagesContainer=document['getElementById']('messagesContainer'),messageInput=document[_0x517f8e(0x15b)]('messageInput'),sendButton=document[_0x517f8e(0x15b)](_0x517f8e(0x175)),micButton=document[_0x517f8e(0x15b)](_0x517f8e(0x1b5)),errorMessage=document['getElementById'](_0x517f8e(0x1d7)),loader=document[_0x517f8e(0x15b)](_0x517f8e(0x169)),example1=document[_0x517f8e(0x15b)](_0x517f8e(0x1c7)),example2=document[_0x517f8e(0x15b)](_0x517f8e(0x1dd)),newChatButton=document[_0x517f8e(0x15b)](_0x517f8e(0x1ae)),settingsButton=document[_0x517f8e(0x15b)](_0x517f8e(0x15c)),inputContainer=document[_0x517f8e(0x1f5)](_0x517f8e(0x16c));function _0x2581(_0x5482d1,_0x16c291){const _0x49e203=_0x49e2();return _0x2581=function(_0x258117,_0x9c37be){_0x258117=_0x258117-0x158;let _0x29af07=_0x49e203[_0x258117];return _0x29af07;},_0x2581(_0x5482d1,_0x16c291);}let speechProcessor,isVoiceEnabled=![];const promptLeakagePattern='You\x20are\x20a\x20friendly\x20teacher\x20who\x20uses\x20the\x20Feynman\x20Technique',systemRole1=_0x517f8e(0x16f)||AIAdapter[_0x517f8e(0x18a)]['systemRole'],systemRole2=_0x517f8e(0x1c0)||AIAdapter[_0x517f8e(0x18a)]['systemRole'],aiAdapter=new AIAdapter(_0x517f8e(0x1f0));aiAdapter[_0x517f8e(0x1db)]=systemRole1;const conversationManager=new BaseConversationManager(),voiceButton=document[_0x517f8e(0x15b)](_0x517f8e(0x1d0));function toggleChatUI(){const _0x2d3581=_0x517f8e,_0x48e459={'lJmXQ':_0x2d3581(0x205)};if(welcomeScreen)welcomeScreen[_0x2d3581(0x16a)]['display']=_0x2d3581(0x1fc);if(chatContainer)chatContainer[_0x2d3581(0x16a)][_0x2d3581(0x1dc)]=_0x48e459[_0x2d3581(0x17f)];if(inputContainer)inputContainer[_0x2d3581(0x16a)][_0x2d3581(0x1dc)]=_0x48e459[_0x2d3581(0x17f)];if(messageInput)messageInput[_0x2d3581(0x184)]();}function updateMessagesUI(_0x1582d8){const _0x1d0b5a=_0x517f8e,_0x573a61={'zObiV':_0x1d0b5a(0x20f),'nIjgs':'message-ai','YvNpY':function(_0x167852,_0x2c7112){return _0x167852===_0x2c7112;}};if(!messagesContainer)return;messagesContainer[_0x1d0b5a(0x1f8)]='',_0x1582d8[_0x1d0b5a(0x1cb)](_0x569f19=>{const _0xe74036=_0x1d0b5a,_0x40cb91=document[_0xe74036(0x1c2)](_0xe74036(0x1e6));_0x40cb91[_0xe74036(0x1e2)]['add'](_0xe74036(0x182),_0x569f19[_0xe74036(0x1b8)]===_0x573a61[_0xe74036(0x188)]?_0xe74036(0x1a1):_0x573a61['nIjgs']),_0x40cb91[_0xe74036(0x1f8)]=_0x573a61['YvNpY'](_0x569f19['role'],_0x573a61[_0xe74036(0x188)])?'<div\x20class=\x22message-content\x22>'+_0x569f19[_0xe74036(0x180)]+_0xe74036(0x1b9):'<div\x20class=\x22message-ai-avatar\x22><i\x20class=\x22fas\x20fa-robot\x22></i></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-content\x22>'+_0x569f19[_0xe74036(0x180)]+'</div>',messagesContainer[_0xe74036(0x15e)](_0x40cb91);}),messagesContainer[_0x1d0b5a(0x18e)]=messagesContainer['scrollHeight'];}function initializeSpeechManager(){const _0x51a40d=_0x517f8e,_0x92c5c9={'WBrmV':function(_0x34a976,_0x5dcf93){return _0x34a976===_0x5dcf93;},'oEWDH':_0x51a40d(0x1f7),'aChdm':function(_0x3a54d3,_0x46ca30){return _0x3a54d3===_0x46ca30;},'mRXuc':_0x51a40d(0x194),'YyUQv':function(_0x58ab2c){return _0x58ab2c();}};speechProcessor=new SpeechProcessor({'onResult':(_0x5e464b,_0xefdd31)=>{const _0x374b5a=_0x51a40d;messageInput[_0x374b5a(0x1e4)]=_0x5e464b||_0xefdd31;},'onError':_0x36f7a2=>displayError(_0x36f7a2),'onSilence':_0x5ce66b=>{const _0x51c3b0=_0x51a40d;(_0x92c5c9[_0x51c3b0(0x1ee)](_0x5ce66b,_0x92c5c9[_0x51c3b0(0x1d4)])||_0x92c5c9[_0x51c3b0(0x195)](_0x5ce66b,_0x92c5c9['mRXuc']))&&_0x92c5c9['YyUQv'](sendMessage);},'onRecordingStart':()=>micButton[_0x51a40d(0x1e2)][_0x51a40d(0x165)](_0x51a40d(0x1c6)),'onRecordingStop':()=>micButton[_0x51a40d(0x1e2)][_0x51a40d(0x166)](_0x51a40d(0x1c6)),'minimumWordCount':0x5,'silenceTimeout':0xbb8,'extendedSilenceTimeout':0xbb8});}function toggleRecording(){const _0x381a65=_0x517f8e;speechProcessor[_0x381a65(0x20c)]?speechProcessor[_0x381a65(0x1a0)]():speechProcessor[_0x381a65(0x185)]();}function toggleVoiceResponse(){const _0x22ae08=_0x517f8e,_0x5f13f1={'kaKmf':'active'};isVoiceEnabled=!isVoiceEnabled,console[_0x22ae08(0x1ff)]('Voice\x20response\x20enabled:',isVoiceEnabled),voiceButton[_0x22ae08(0x1e2)][_0x22ae08(0x1c3)](_0x5f13f1['kaKmf'],isVoiceEnabled);}async function initializeAIModel(){const _0x275ff4=_0x517f8e,_0x52c27b={'iSxHr':function(_0x5302a0,_0x2daf7c,_0x1f6d97){return _0x5302a0(_0x2daf7c,_0x1f6d97);},'PDAag':function(_0x3da1cc,_0x5d91ae){return _0x3da1cc||_0x5d91ae;},'jCquo':_0x275ff4(0x1ce),'aFAgs':'progress','oyxdA':function(_0x2b7240,_0xeea45e){return _0x2b7240*_0xeea45e;},'wvTSu':_0x275ff4(0x170),'zqZRV':_0x275ff4(0x18b),'sTSmf':function(_0x300a14,_0x1ab5d8,_0x3e0a68){return _0x300a14(_0x1ab5d8,_0x3e0a68);},'qHHDi':_0x275ff4(0x1ba),'nyuBN':_0x275ff4(0x182),'zkvgO':function(_0x4072b0,_0x538aac,_0x5200e9){return _0x4072b0(_0x538aac,_0x5200e9);},'QRFfO':_0x275ff4(0x19e),'zfwlx':_0x275ff4(0x200),'Qidea':_0x275ff4(0x1e8),'kPoMT':function(_0x9bba40,_0x5ea90e){return _0x9bba40(_0x5ea90e);},'UvHkh':_0x275ff4(0x20d)};_0x52c27b[_0x275ff4(0x16b)](showStatus,'success',_0x52c27b[_0x275ff4(0x202)]);function _0x17e3a9(_0x43fdce){const _0x3f9046=_0x275ff4,{status:_0x181235,message:_0x5d9469,stage:_0xd51444,progress:_0x40ccc6}=_0x43fdce[_0x3f9046(0x1ec)];console[_0x3f9046(0x1ff)]('[AI\x20Model\x20Initialization]',_0x181235,_0x5d9469);switch(_0x181235){case _0x3f9046(0x1df):_0x52c27b[_0x3f9046(0x204)](showStatus,_0x3f9046(0x170),_0x52c27b[_0x3f9046(0x1eb)](_0x5d9469,_0x52c27b['jCquo']));break;case _0x52c27b[_0x3f9046(0x209)]:const _0x1acc9f=Math[_0x3f9046(0x177)](_0x52c27b[_0x3f9046(0x1f3)](_0x52c27b['PDAag'](_0x40ccc6,0x0),0x64));showStatus(_0x52c27b[_0x3f9046(0x1de)],'Loading\x20'+_0xd51444+':\x20'+_0x1acc9f+'%');break;case _0x52c27b[_0x3f9046(0x1de)]:_0x52c27b['iSxHr'](showStatus,_0x52c27b[_0x3f9046(0x1de)],_0x52c27b[_0x3f9046(0x19c)]);aiModelProgressBar&&(aiModelProgressBar[_0x3f9046(0x16a)][_0x3f9046(0x1c5)]=_0x3f9046(0x18c));break;case'error':_0x52c27b['iSxHr'](showStatus,'error','Model\x20Load\x20Failed:\x20'+_0x5d9469);break;}}aiAdapter[_0x275ff4(0x1cc)][_0x275ff4(0x16e)]&&aiAdapter['engineWrapper'][_0x275ff4(0x16e)]['addEventListener'](_0x52c27b[_0x275ff4(0x1aa)],_0x17e3a9);try{const _0x210780=await aiAdapter[_0x275ff4(0x1ab)]();return _0x52c27b['zkvgO'](showStatus,_0x52c27b[_0x275ff4(0x1de)],_0x52c27b[_0x275ff4(0x173)]),{'success':!![],'modelType':aiAdapter[_0x275ff4(0x18f)]};}catch(_0x4abda5){return console[_0x275ff4(0x1e8)](_0x52c27b[_0x275ff4(0x15a)],_0x4abda5),showStatus(_0x52c27b[_0x275ff4(0x1a3)],_0x275ff4(0x1b7)+_0x4abda5[_0x275ff4(0x182)]),_0x52c27b[_0x275ff4(0x1b6)](displayError,_0x52c27b[_0x275ff4(0x206)]),{'success':![],'modelType':AIAdapter[_0x275ff4(0x1da)][_0x275ff4(0x17e)]};}}async function sendMessage(){const _0x34e695=_0x517f8e,_0x79c5d0={'XTioz':function(_0x5b2505,_0x4571fd){return _0x5b2505!==_0x4571fd;},'OZRIi':function(_0x5d3d28,_0x504a88){return _0x5d3d28+_0x504a88;},'EDRDW':function(_0x38f6ac,_0x194159){return _0x38f6ac===_0x194159;},'zudQN':function(_0x4df890,_0x92e1c6){return _0x4df890>_0x92e1c6;},'PaZUH':function(_0x23ba19,_0x5a547b){return _0x23ba19+_0x5a547b;},'LynhL':function(_0x313a6c,_0x5ef809,_0x1d29ad){return _0x313a6c(_0x5ef809,_0x1d29ad);},'FYoRn':function(_0x14c68f){return _0x14c68f();},'lXkEQ':function(_0x3d533f,_0x39c9dd){return _0x3d533f(_0x39c9dd);},'vfUJe':_0x34e695(0x1f7),'TWsuQ':function(_0x405953){return _0x405953();},'GnlTe':_0x34e695(0x172),'HRlKO':_0x34e695(0x1e6),'gIIzx':_0x34e695(0x182),'gNqeg':_0x34e695(0x1cf),'IWBUa':'assistant','OavHc':function(_0x59daad,_0x53a1ab){return _0x59daad&&_0x53a1ab;},'utHWU':_0x34e695(0x1cd),'GLagT':_0x34e695(0x1a5),'wCAEd':function(_0x57d0d1,_0x534748){return _0x57d0d1(_0x534748);},'FjHfA':_0x34e695(0x1a9)};!speechProcessor&&initializeSpeechManager();const _0x2beee9=messageInput['value'][_0x34e695(0x1ca)]();if(!_0x2beee9)return;_0x79c5d0[_0x34e695(0x1bb)](toggleChatUI),await conversationManager[_0x34e695(0x199)](_0x2beee9,_0x34e695(0x20f));const _0x19d076=await conversationManager['getCurrentConversation']();_0x79c5d0[_0x34e695(0x17b)](updateMessagesUI,_0x19d076[_0x34e695(0x189)]),messageInput[_0x34e695(0x1e4)]='',messageInput[_0x34e695(0x16a)][_0x34e695(0x20a)]=_0x79c5d0['vfUJe'];try{if(!aiAdapter[_0x34e695(0x1a8)]&&!aiAdapter[_0x34e695(0x1d2)]){const _0x5fa7e=await _0x79c5d0[_0x34e695(0x1c1)](initializeAIModel);if(!_0x5fa7e[_0x34e695(0x170)])throw new Error(_0x34e695(0x1e7));}const _0x1543e7=[{'role':_0x79c5d0[_0x34e695(0x1b2)],'content':systemRole1},..._0x19d076[_0x34e695(0x189)]];let _0x56b88b='',_0x20d6cc='',_0x4d3730=![];const _0x569198=document['createElement'](_0x79c5d0['HRlKO']);_0x569198[_0x34e695(0x1e2)]['add'](_0x79c5d0['gIIzx'],_0x79c5d0[_0x34e695(0x1b3)]),_0x569198[_0x34e695(0x1f8)]='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-ai-avatar\x22><i\x20class=\x22fas\x20fa-robot\x22></i></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-content\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20',messagesContainer[_0x34e695(0x15e)](_0x569198);const _0x1867ca=_0x569198[_0x34e695(0x1f5)](_0x34e695(0x1fb)),_0x42b00d=async()=>{const _0x57e49e=_0x34e695;if(!_0x20d6cc||!isVoiceEnabled)return;const _0x499003=['.\x20','!\x20','?\x20',';\x20',':\x20','\x0a\x0a'];let _0x2315e3=-0x1;for(const _0x49192f of _0x499003){const _0x61c3b2=_0x20d6cc[_0x57e49e(0x161)](_0x49192f);if(_0x79c5d0['XTioz'](_0x61c3b2,-0x1)){_0x2315e3=_0x79c5d0[_0x57e49e(0x168)](_0x61c3b2,_0x49192f[_0x57e49e(0x1a7)]);break;}}if(_0x79c5d0[_0x57e49e(0x1ac)](_0x2315e3,-0x1)&&_0x79c5d0['zudQN'](_0x20d6cc['length'],0x50)){const _0x2cc477=_0x20d6cc[_0x57e49e(0x161)](',\x20');if(_0x79c5d0['XTioz'](_0x2cc477,-0x1))_0x2315e3=_0x79c5d0[_0x57e49e(0x168)](_0x2cc477,0x2);else{const _0x2785b1=_0x20d6cc[_0x57e49e(0x208)]('\x20',0x50);_0x79c5d0[_0x57e49e(0x179)](_0x2785b1,0x28)&&(_0x2315e3=_0x79c5d0[_0x57e49e(0x1d6)](_0x2785b1,0x1));}}if(_0x79c5d0[_0x57e49e(0x162)](_0x2315e3,-0x1)){const _0x421580=_0x20d6cc[_0x57e49e(0x198)](0x0,_0x2315e3);_0x20d6cc=_0x20d6cc[_0x57e49e(0x198)](_0x2315e3),_0x4d3730=!![],await speechProcessor['speakText'](_0x421580),_0x4d3730=![],await _0x42b00d();}else{if(_0x79c5d0[_0x57e49e(0x179)](_0x20d6cc[_0x57e49e(0x1a7)],0x78)){const _0x13555a=_0x20d6cc;_0x20d6cc='',_0x4d3730=!![],await speechProcessor[_0x57e49e(0x18d)](_0x13555a),_0x4d3730=![];}}};await aiAdapter[_0x34e695(0x1c9)](_0x1543e7,async _0xf511a1=>{let _0x170776=moderationLayer(promptLeakagePattern,_0xf511a1);_0x56b88b+=_0x170776,requestAnimationFrame(()=>{const _0x1994f9=_0x2581;_0x1867ca[_0x1994f9(0x187)]=_0x56b88b,messagesContainer[_0x1994f9(0x18e)]=messagesContainer[_0x1994f9(0x1e1)];}),isVoiceEnabled&&(_0x20d6cc+=_0x170776,!_0x4d3730&&_0x79c5d0['LynhL'](setTimeout,_0x42b00d,0x0));}),await conversationManager[_0x34e695(0x199)](_0x56b88b,_0x79c5d0[_0x34e695(0x1a2)]),_0x79c5d0['OavHc'](isVoiceEnabled,_0x20d6cc)&&await speechProcessor[_0x34e695(0x18d)](_0x20d6cc);}catch(_0xd2005a){Logger[_0x34e695(0x1e8)](_0x79c5d0[_0x34e695(0x193)],_0xd2005a);const _0x4f886a=_0x79c5d0[_0x34e695(0x1e9)];await conversationManager['addMessage'](_0x4f886a,'assistant'),_0x79c5d0[_0x34e695(0x17b)](updateMessagesUI,conversationManager[_0x34e695(0x15d)]()[_0x34e695(0x189)]),_0x79c5d0[_0x34e695(0x1ef)](displayError,_0x79c5d0[_0x34e695(0x17d)]);}}function moderationLayer(_0x52e2ce,_0x1b2569){const _0x284ce8=_0x517f8e,_0x1f54aa={'PeWIU':function(_0x47c8e6,_0x570e04,_0x12e891){return _0x47c8e6(_0x570e04,_0x12e891);},'ETDbb':function(_0x3047e8,_0x2ac5d3,_0x39dab5){return _0x3047e8(_0x2ac5d3,_0x39dab5);},'Kibpz':_0x284ce8(0x1bd)};if(_0x1f54aa[_0x284ce8(0x1f4)](exactMatch,_0x52e2ce,_0x1b2569))return'Incorrect\x20ask.\x20Please\x20rephrase\x20your\x20query.';if(_0x1f54aa[_0x284ce8(0x1d9)](semanticMatch,_0x52e2ce,_0x1b2569))return _0x1f54aa['Kibpz'];return _0x1b2569;}function exactMatch(_0x4dd2ef,_0x594e5e){const _0x2d256b=_0x517f8e;return _0x594e5e['toLowerCase']()[_0x2d256b(0x1b1)](_0x4dd2ef[_0x2d256b(0x167)]());}function _0x49e2(){const _0x4f4836=['zudQN','split','lXkEQ','settings.html','FjHfA','NULL','lJmXQ','content','ZldRv','message','3119445qNNnKh','focus','startRecording','vLmPY','textContent','zObiV','messages','sessionConfig','AI\x20Model\x20Loaded\x20Successfully','100%','speakText','scrollTop','modelType','60110nuUelH','location','CBBPZ','utHWU','explicit','aChdm','welcomeScreen','key','substring','addMessage','dzBzl','628LqPsWB','zqZRV','DxQwm','AI\x20Model\x20Initialization\x20Started','TIoRB','stopRecording','message-user','IWBUa','Qidea','readyState','I\x27m\x20sorry,\x20I\x20couldn\x27t\x20generate\x20a\x20response.\x20Please\x20try\x20again.','902yaVDlS','length','isInitialized','Unable\x20to\x20send\x20message.\x20Please\x20check\x20your\x20connection\x20and\x20try\x20again.','nyuBN','init','EDRDW','GvtvX','newChatButton','eCLCm','jrDfz','includes','GnlTe','gNqeg','chatContainer','micButton','kPoMT','Initialization\x20Failed:\x20','role','</div>','Initializing\x20AI\x20Model...','FYoRn','689530KCoxbc','Incorrect\x20ask.\x20Please\x20rephrase\x20your\x20query.','238008UkhDox','preventDefault','You\x20are\x20an\x20expert\x20teacher\x20who\x20uses\x20the\x20Feynman\x20Technique\x20to\x20help\x20users\x20deeply\x20understand\x20concepts.\x20For\x20any\x20topic\x20or\x20skill\x20presented:\x0aExplain\x20the\x20topic\x20in\x20the\x20simplest\x20terms\x20possible,\x20as\x20if\x20teaching\x20a\x20complete\x20beginner.\x0aAfter\x20explaining,\x20ask\x20simple,\x20direct\x20questions\x20to\x20test\x20the\x20user\x27s\x20understanding\x20-\x20focusing\x20on\x20the\x20\x27why\x27\x20and\x20\x27how\x27\x20behind\x20key\x20ideas.\x0aIf\x20gaps\x20in\x20understanding\x20emerge,\x20highlight\x20them\x20clearly\x20and\x20suggest\x20resources\x20or\x20examples\x20to\x20fill\x20those\x20gaps.\x0aEncourage\x20the\x20user\x20to\x20re-explain\x20the\x20concept\x20back\x20to\x20you\x20in\x20their\x20own\x20words,\x20guiding\x20them\x20gently\x20to\x20correct\x20any\x20errors\x20or\x20misconceptions.\x0a','TWsuQ','createElement','toggle','Setting\x20up\x20example\x20clicks\x20-\x20example1:','width','recording','example1','IgrPW','generateResponseStream','trim','forEach','engineWrapper','Response\x20error:','Loading\x20model...','message-ai','voiceButton','RHNGK','useBrowserAI','yPpqL','oEWDH','Example\x202\x20clicked','PaZUH','errorMessage','nQyua','ETDbb','ModelTypes','systemRole','display','example2','wvTSu','loading','Application\x20initialization\x20failed.\x20Some\x20features\x20may\x20be\x20limited.','scrollHeight','classList','innerText','value','[handleExampleClick]\x20Now\x20sending\x20message:','div','[sendMessage]\x20Failed\x20to\x20initialize\x20AI\x20model','error','GLagT','Enter','PDAag','data','filter','WBrmV','wCAEd','tinyllama-1.1b-chat-v0.4','dispatchEvent','40tSyXHI','oyxdA','PeWIU','querySelector','Setting\x20up\x20example\x20clicks\x20-\x20example2:','auto','innerHTML','dIWSs','breov','.message-content','none','vQOEE','href','log','AI\x20Model\x20Initialization\x20Error:','10497nXHTlw','qHHDi','addEventListener','iSxHr','flex','UvHkh','shiftKey','lastIndexOf','aFAgs','height','DOMContentLoaded','isRecording','Could\x20not\x20initialize\x20AI\x20model.\x20Falling\x20back\x20to\x20alternative\x20methods.','khalz','user','283640FIdxsh','Initialization\x20failed','zfwlx','getElementById','settingsButton','getCurrentConversation','appendChild','61420WbcwFl','LOspV','indexOf','XTioz','2pOCOzs','Example\x201\x20clicked','add','remove','toLowerCase','OZRIi','loader','style','sTSmf','.input-container','962ghtbeo','worker','You\x20are\x20a\x20friendly\x20teacher\x20who\x20uses\x20the\x20Feynman\x20Technique\x20to\x20make\x20any\x20topic\x20easy\x20to\x20understand.\x20\x0aWhen\x20someone\x20asks\x20about\x20a\x20concept:\x0aFirst\x20share\x20the\x20formal\x20definition\x20in\x201-3\x20sentences\x20when\x20possible.\x20If\x20the\x20concept\x20is\x20complex,\x20break\x20it\x20down\x20into\x20simple\x20parts\x20using\x20super\x20simple\x20terms,\x20like\x20you\x20are\x20teaching\x20a\x20beginner.\x0aAfter\x20explaining,\x20ask\x20a\x20few\x20easy,\x20direct\x20questions\x20to\x20check\x20if\x20they\x20really\x20get\x20it\x20\x20focus\x20on\x20the\x20\x27why\x27\x20and\x20\x27how.\x27\x0aIf\x20there\x27s\x20anything\x20they\x20seem\x20unsure\x20about,\x20point\x20it\x20out\x20and\x20suggest\x20simple\x20resources\x20or\x20examples\x20to\x20clear\x20it\x20up.\x0aEncourage\x20them\x20to\x20explain\x20the\x20idea\x20back\x20to\x20you\x20in\x20their\x20own\x20words,\x20and\x20help\x20fix\x20any\x20mistakes\x20or\x20gaps.\x0a','success','createNewConversation','system','QRFfO','yLOZv','sendButton','click','round','324rMlCBI'];_0x49e2=function(){return _0x4f4836;};return _0x49e2();}function semanticMatch(_0x53b1e3,_0x50ea9a){const _0x2dc25c=_0x517f8e,_0xf108d1={'HeTTC':function(_0x1772d7,_0x3be1cf){return _0x1772d7>_0x3be1cf;}},_0x20f2e6=_0x53b1e3[_0x2dc25c(0x167)]()['split']('\x20'),_0x13df93=_0x50ea9a[_0x2dc25c(0x167)]()[_0x2dc25c(0x17a)]('\x20'),_0x39c433=_0x20f2e6[_0x2dc25c(0x1ed)](_0x1254ce=>_0x13df93[_0x2dc25c(0x1b1)](_0x1254ce));return _0xf108d1['HeTTC'](_0x39c433[_0x2dc25c(0x1a7)],0x3);}function setupExampleClickEvents(){const _0x25de1d=_0x517f8e,_0x17c0d5={'dIWSs':_0x25de1d(0x1e5),'oDmuT':function(_0x5cebd6){return _0x5cebd6();},'vQOEE':'Example\x20clicked\x20with\x20text:','ZldRv':function(_0x1860aa,_0x28e823,_0x29a83e){return _0x1860aa(_0x28e823,_0x29a83e);},'yLOZv':function(_0x4ba417,_0x4af719){return _0x4ba417(_0x4af719);},'nQyua':function(_0x1747d2,_0x2e2597){return _0x1747d2(_0x2e2597);},'DxQwm':_0x25de1d(0x1dd),'tLJTz':'messageInput','GvtvX':_0x25de1d(0x1c4),'LOspV':'Setting\x20up\x20example\x20clicks\x20-\x20messageInput:','jrDfz':function(_0x8b760d,_0x16671b){return _0x8b760d||_0x16671b;},'CBBPZ':'Failed\x20to\x20find\x20required\x20DOM\x20elements','yPpqL':'click','breov':'Example\x20click\x20handlers\x20have\x20been\x20set\x20up'},_0xf7a903=document[_0x25de1d(0x15b)](_0x25de1d(0x1c7)),_0x5a955f=document[_0x25de1d(0x15b)](_0x17c0d5[_0x25de1d(0x19d)]),_0x4623fd=document[_0x25de1d(0x15b)](_0x17c0d5['tLJTz']);console['log'](_0x17c0d5[_0x25de1d(0x1ad)],_0xf7a903),console[_0x25de1d(0x1ff)](_0x25de1d(0x1f6),_0x5a955f),console[_0x25de1d(0x1ff)](_0x17c0d5[_0x25de1d(0x160)],_0x4623fd);if(_0x17c0d5[_0x25de1d(0x1b0)](!_0xf7a903,!_0x5a955f)||!_0x4623fd){console['error'](_0x17c0d5[_0x25de1d(0x192)]);return;}function _0x164cb9(_0x2cec49){const _0x4868ca=_0x25de1d,_0x1c9e90=_0x2cec49[_0x4868ca(0x1e3)][_0x4868ca(0x1ca)]();console[_0x4868ca(0x1ff)](_0x17c0d5[_0x4868ca(0x1fd)],_0x1c9e90),_0x4623fd[_0x4868ca(0x1e4)]=_0x1c9e90,_0x4623fd[_0x4868ca(0x1f1)](new Event('focus')),_0x17c0d5[_0x4868ca(0x181)](setTimeout,()=>{const _0x190fb8=_0x4868ca;console[_0x190fb8(0x1ff)](_0x17c0d5[_0x190fb8(0x1f9)],_0x1c9e90),_0x17c0d5['oDmuT'](sendMessage);},0x64);}_0xf7a903[_0x25de1d(0x203)](_0x25de1d(0x176),()=>{const _0x20789f=_0x25de1d;console[_0x20789f(0x1ff)](_0x20789f(0x164)),_0x17c0d5[_0x20789f(0x174)](_0x164cb9,_0xf7a903);}),_0x5a955f[_0x25de1d(0x203)](_0x17c0d5[_0x25de1d(0x1d3)],()=>{const _0x175479=_0x25de1d;console[_0x175479(0x1ff)](_0x175479(0x1d5)),_0x17c0d5[_0x175479(0x1d8)](_0x164cb9,_0x5a955f);}),console[_0x25de1d(0x1ff)](_0x17c0d5[_0x25de1d(0x1fa)]);}document[_0x517f8e(0x203)](_0x517f8e(0x20b),async()=>{const _0x2eef77=_0x517f8e,_0x4260d9={'khalz':function(_0x234753){return _0x234753();},'TIoRB':_0x2eef77(0x159)};try{!conversationManager[_0x2eef77(0x15d)]()&&conversationManager[_0x2eef77(0x171)](),_0x4260d9[_0x2eef77(0x20e)](initializeSpeechManager),setupExampleClickEvents(),_0x4260d9[_0x2eef77(0x20e)](initializeAIModel);}catch(_0x543fc1){Logger['error'](_0x4260d9[_0x2eef77(0x19f)],_0x543fc1),displayError(_0x2eef77(0x1e0));}});document[_0x517f8e(0x1a4)]===_0x517f8e(0x1df)?document[_0x517f8e(0x203)](_0x517f8e(0x20b),setupExampleClickEvents):setupExampleClickEvents();if(sendButton)sendButton[_0x517f8e(0x203)](_0x517f8e(0x176),sendMessage);if(micButton)micButton[_0x517f8e(0x203)](_0x517f8e(0x176),toggleRecording);if(voiceButton)voiceButton[_0x517f8e(0x203)](_0x517f8e(0x176),toggleVoiceResponse);messageInput&&(messageInput[_0x517f8e(0x203)]('keydown',_0x5cb767=>{const _0x3807e0=_0x517f8e,_0x526f12={'eCLCm':function(_0x4f5df0,_0x4a475a){return _0x4f5df0===_0x4a475a;},'RHNGK':_0x3807e0(0x1ea)};_0x526f12[_0x3807e0(0x1af)](_0x5cb767[_0x3807e0(0x197)],_0x526f12[_0x3807e0(0x1d1)])&&!_0x5cb767[_0x3807e0(0x207)]&&(_0x5cb767[_0x3807e0(0x1bf)](),sendMessage());}),messageInput[_0x517f8e(0x203)]('focus',toggleChatUI));newChatButton&&newChatButton['addEventListener'](_0x517f8e(0x176),()=>{const _0x4fb359=_0x517f8e,_0x43ee62={'IgrPW':_0x4fb359(0x205),'dzBzl':_0x4fb359(0x1fc)};conversationManager[_0x4fb359(0x171)]();if(messagesContainer)messagesContainer[_0x4fb359(0x1f8)]='';if(welcomeScreen)welcomeScreen[_0x4fb359(0x16a)]['display']=_0x43ee62[_0x4fb359(0x1c8)];if(chatContainer)chatContainer[_0x4fb359(0x16a)]['display']=_0x43ee62[_0x4fb359(0x19a)];if(messageInput)messageInput['value']='';});settingsButton&&settingsButton['addEventListener'](_0x517f8e(0x176),()=>{const _0x18d171=_0x517f8e,_0xf6f1e4={'vLmPY':_0x18d171(0x17c)};window[_0x18d171(0x191)][_0x18d171(0x1fe)]=_0xf6f1e4[_0x18d171(0x186)];});export{conversationManager,sendMessage,initializeAIModel};