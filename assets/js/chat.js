
/*!
Copyright © 2024 Saisha Pandit. All Rights Reserved.
Unauthorized use, modification, or distribution is strictly prohibited.
*/
const _0x8c1c2e=_0x5987;(function(_0x3844bf,_0x4d612d){const _0x4b9765=_0x5987,_0x52a8f4=_0x3844bf();while(!![]){try{const _0xc0cec5=parseInt(_0x4b9765(0x110))/0x1*(-parseInt(_0x4b9765(0x17d))/0x2)+-parseInt(_0x4b9765(0x125))/0x3*(parseInt(_0x4b9765(0x104))/0x4)+-parseInt(_0x4b9765(0x180))/0x5*(parseInt(_0x4b9765(0x14d))/0x6)+-parseInt(_0x4b9765(0x132))/0x7+-parseInt(_0x4b9765(0x12d))/0x8+parseInt(_0x4b9765(0x179))/0x9+parseInt(_0x4b9765(0x176))/0xa*(parseInt(_0x4b9765(0x10e))/0xb);if(_0xc0cec5===_0x4d612d)break;else _0x52a8f4['push'](_0x52a8f4['shift']());}catch(_0x18589b){_0x52a8f4['push'](_0x52a8f4['shift']());}}}(_0x2939,0x4f99b));import{BaseConversationManager}from'./BaseConversationManager.js';import{Logger,displayError,showStatus}from'./common.js';import{AIAdapter}from'./aiAdapter.js';import{SpeechProcessor}from'./speechProcessor.js';const welcomeScreen=document[_0x8c1c2e(0x15c)]('welcomeScreen'),chatContainer=document[_0x8c1c2e(0x15c)](_0x8c1c2e(0x173)),messagesContainer=document[_0x8c1c2e(0x15c)](_0x8c1c2e(0x107)),messageInput=document[_0x8c1c2e(0x15c)]('messageInput'),sendButton=document[_0x8c1c2e(0x15c)](_0x8c1c2e(0x135)),micButton=document['getElementById'](_0x8c1c2e(0xf7)),errorMessage=document[_0x8c1c2e(0x15c)](_0x8c1c2e(0xf9)),loader=document['getElementById'](_0x8c1c2e(0x12f)),example1=document[_0x8c1c2e(0x15c)]('example1'),example2=document[_0x8c1c2e(0x15c)](_0x8c1c2e(0x142)),newChatButton=document[_0x8c1c2e(0x15c)](_0x8c1c2e(0xfd)),settingsButton=document[_0x8c1c2e(0x15c)](_0x8c1c2e(0x102)),inputContainer=document[_0x8c1c2e(0x11d)](_0x8c1c2e(0x17e));let speechProcessor,isVoiceEnabled=![];const aiAdapter=new AIAdapter(_0x8c1c2e(0xf3)),voiceButton=document[_0x8c1c2e(0x15c)]('voiceButton'),conversationManager=new BaseConversationManager(),promptLeakagePattern=_0x8c1c2e(0x151),systemRole1='You\x20are\x20a\x20friendly\x20teacher\x20who\x20uses\x20the\x20Feynman\x20Technique\x20to\x20make\x20any\x20topic\x20easy\x20to\x20understand.\x20\x0aWhen\x20someone\x20asks\x20about\x20a\x20concept:\x0aFirst\x20share\x20the\x20formal\x20definition\x20in\x201-3\x20sentences\x20when\x20possible.\x20If\x20the\x20concept\x20is\x20complex,\x20break\x20it\x20down\x20into\x20simple\x20parts\x20using\x20super\x20simple\x20terms,\x20like\x20you\x20are\x20teaching\x20a\x20beginner.\x0aAfter\x20explaining,\x20ask\x20a\x20few\x20easy,\x20direct\x20questions\x20to\x20check\x20if\x20they\x20really\x20get\x20it\x20\x20focus\x20on\x20the\x20\x27why\x27\x20and\x20\x27how.\x27\x0aIf\x20there\x27s\x20anything\x20they\x20seem\x20unsure\x20about,\x20point\x20it\x20out\x20and\x20suggest\x20simple\x20resources\x20or\x20examples\x20to\x20clear\x20it\x20up.\x0aEncourage\x20them\x20to\x20explain\x20the\x20idea\x20back\x20to\x20you\x20in\x20their\x20own\x20words,\x20and\x20help\x20fix\x20any\x20mistakes\x20or\x20gaps.\x0a'||AIAdapter[_0x8c1c2e(0x160)]['systemRole'],systemRole2=_0x8c1c2e(0xea)||AIAdapter[_0x8c1c2e(0x160)][_0x8c1c2e(0x18e)];function toggleChatUI(){const _0x532119=_0x8c1c2e,_0x295bde={'eRzds':_0x532119(0xe5)};if(welcomeScreen)welcomeScreen[_0x532119(0x112)]['display']='none';if(chatContainer)chatContainer[_0x532119(0x112)][_0x532119(0x16a)]=_0x532119(0xe5);if(inputContainer)inputContainer[_0x532119(0x112)][_0x532119(0x16a)]=_0x295bde[_0x532119(0xfe)];if(messageInput)messageInput[_0x532119(0xe2)]();}function _0x2939(){const _0x39c165=['keydown','2652507UeHgHv','background-loading','user','explicit','10246HqrLfY','.input-container','zgACx','1698155DDkAkm','Failed\x20to\x20initialize\x20AI\x20model','xwZPE','shiftKey','IKgtf','log','OAuyb','scrollTop','toLowerCase','textContent','toggle','preventDefault','sCiQj','assistant','systemRole','Initializing\x20AI\x20Model...','fIUkb','round','XCuGq','tRKQn','Loading\x20model...','isRecording','focus','</div>','<div\x20class=\x22message-content\x22>','flex','MSAHT','click','Example\x20click\x20handlers\x20have\x20been\x20set\x20up','oIKIG','You\x20are\x20an\x20expert\x20teacher\x20who\x20uses\x20the\x20Feynman\x20Technique\x20to\x20help\x20users\x20deeply\x20understand\x20concepts.\x20For\x20any\x20topic\x20or\x20skill\x20presented:\x0aExplain\x20the\x20topic\x20in\x20the\x20simplest\x20terms\x20possible,\x20as\x20if\x20teaching\x20a\x20complete\x20beginner.\x0aAfter\x20explaining,\x20ask\x20simple,\x20direct\x20questions\x20to\x20test\x20the\x20user\x27s\x20understanding\x20-\x20focusing\x20on\x20the\x20\x27why\x27\x20and\x20\x27how\x27\x20behind\x20key\x20ideas.\x0aIf\x20gaps\x20in\x20understanding\x20emerge,\x20highlight\x20them\x20clearly\x20and\x20suggest\x20resources\x20or\x20examples\x20to\x20fill\x20those\x20gaps.\x0aEncourage\x20the\x20user\x20to\x20re-explain\x20the\x20concept\x20back\x20to\x20you\x20in\x20their\x20own\x20words,\x20guiding\x20them\x20gently\x20to\x20correct\x20any\x20errors\x20or\x20misconceptions.\x0a','DpzXp','RGLcv','uOqJg','Voice\x20response\x20enabled:','djdSV','div','FMLRn','uZQQc','tinyllama-1.1b-chat-v0.4','width','MeDUl','active','micButton','qYlbj','errorMessage','BJIvy','Enter','split','newChatButton','eRzds','readyState','lastIndexOf','innerHTML','settingsButton','qTlvc','12PbuCtO','AI\x20Model\x20Loaded\x20Successfully','VuqgL','messagesContainer','value','Unable\x20to\x20send\x20message.\x20Please\x20check\x20your\x20connection\x20and\x20try\x20again.','indexOf','useBrowserAI','fAYRo','substring','335170cQwtfR','system','37jHEuqC','length','style','SRgaU','TCCfC','scrollHeight','hyTUU','aoMmh','Example\x202\x20clicked','location','Failed\x20to\x20find\x20required\x20DOM\x20elements','error','HjzqY','querySelector','add','eGhlH','JSEXM','engineWrapper','classList','addMessage','AI\x20Model\x20Initialization\x20Started','458034VXHZTD','<div\x20class=\x22message-ai-avatar\x22><i\x20class=\x22fas\x20fa-robot\x22></i></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-content\x22>','message','OPCgT','Initialization\x20Failed:\x20','rgKdG','auto','example1','4512872tkahtD','message-user','loader','forEach','Example\x20clicked\x20with\x20text:','2145465UmBYLD','message-ai','rVtaT','sendButton','ehvwX','AoaHA','ModelTypes','NtcOU','innerText','recording','Application\x20initialization\x20failed.\x20Some\x20features\x20may\x20be\x20limited.','JtBig','modelType','addEventListener','zVeqn','success','example2','loading','XmpSO','[handleExampleClick]\x20Now\x20sending\x20message:','lOurB','height','key','[AI\x20Model\x20Initialization]','IhDGX','ZxHsq','eXZcS','6sEqDBZ','includes','Setting\x20up\x20example\x20clicks\x20-\x20messageInput:','stopRecording','You\x20are\x20a\x20friendly\x20teacher\x20who\x20uses\x20the\x20Feynman\x20Technique','messages','fJfMh','getCurrentConversation','bzPEb','DOMContentLoaded','settings.html','ArGqS','ialya','I\x27m\x20sorry,\x20I\x20couldn\x27t\x20generate\x20a\x20response.\x20Please\x20try\x20again.','speakText','getElementById','Example\x201\x20clicked','jVznO','Response\x20error:','sessionConfig','xUAjG','eXNln','PygBK','appendChild','content','nutEL','knsmf','.message-content','Initialization\x20failed','display','startRecording','PBzSE','remove','LmUGc','Could\x20not\x20initialize\x20AI\x20model.\x20Falling\x20back\x20to\x20alternative\x20methods.','OMCHo','role','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-ai-avatar\x22><i\x20class=\x22fas\x20fa-robot\x22></i></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-content\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20','chatContainer','qbPYJ','ShHiI','620luUEAd','DBqUY'];_0x2939=function(){return _0x39c165;};return _0x2939();}function updateMessagesUI(_0x59e126){const _0x3e54ca=_0x8c1c2e,_0x10a1b={'AoaHA':'div','qTlvc':_0x3e54ca(0x127),'jVznO':function(_0x26f77b,_0xfcf502){return _0x26f77b===_0xfcf502;},'SRgaU':_0x3e54ca(0x17b),'FLtnX':_0x3e54ca(0x12e),'eGhlH':function(_0x231fe0,_0x3b1aaa){return _0x231fe0===_0x3b1aaa;}};if(!messagesContainer)return;messagesContainer[_0x3e54ca(0x101)]='',_0x59e126[_0x3e54ca(0x130)](_0x218c1d=>{const _0x5d3fe4=_0x3e54ca,_0x52dbc6=document['createElement'](_0x10a1b[_0x5d3fe4(0x137)]);_0x52dbc6['classList']['add'](_0x10a1b[_0x5d3fe4(0x103)],_0x10a1b[_0x5d3fe4(0x15e)](_0x218c1d[_0x5d3fe4(0x171)],_0x10a1b[_0x5d3fe4(0x113)])?_0x10a1b['FLtnX']:_0x5d3fe4(0x133)),_0x52dbc6[_0x5d3fe4(0x101)]=_0x10a1b[_0x5d3fe4(0x11f)](_0x218c1d[_0x5d3fe4(0x171)],_0x10a1b[_0x5d3fe4(0x113)])?_0x5d3fe4(0xe4)+_0x218c1d[_0x5d3fe4(0x165)]+_0x5d3fe4(0xe3):_0x5d3fe4(0x126)+_0x218c1d[_0x5d3fe4(0x165)]+_0x5d3fe4(0xe3),messagesContainer[_0x5d3fe4(0x164)](_0x52dbc6);}),messagesContainer[_0x3e54ca(0x187)]=messagesContainer[_0x3e54ca(0x115)];}function initializeSpeechManager(){const _0x22cd24=_0x8c1c2e,_0x22b11d={'IKgtf':_0x22cd24(0x12b),'HjzqY':function(_0x3c78fb,_0x14d6ab){return _0x3c78fb===_0x14d6ab;},'fAYRo':function(_0x37a774){return _0x37a774();}};speechProcessor=new SpeechProcessor({'onResult':(_0x33dc3c,_0x57d157)=>{const _0x30db7f=_0x22cd24;messageInput[_0x30db7f(0x108)]=_0x33dc3c||_0x57d157;},'onError':_0x4f4cfd=>displayError(_0x4f4cfd),'onSilence':_0x31ded1=>{const _0x2c0f70=_0x22cd24;(_0x31ded1===_0x22b11d[_0x2c0f70(0x184)]||_0x22b11d[_0x2c0f70(0x11c)](_0x31ded1,_0x2c0f70(0x17c)))&&_0x22b11d[_0x2c0f70(0x10c)](sendMessage);},'onRecordingStart':()=>micButton['classList'][_0x22cd24(0x11e)](_0x22cd24(0x13b)),'onRecordingStop':()=>micButton[_0x22cd24(0x122)][_0x22cd24(0x16d)]('recording'),'minimumWordCount':0x5,'silenceTimeout':0xbb8,'extendedSilenceTimeout':0xbb8});}function toggleRecording(){const _0x159fa2=_0x8c1c2e;speechProcessor[_0x159fa2(0xe1)]?speechProcessor[_0x159fa2(0x150)]():speechProcessor[_0x159fa2(0x16b)]();}function toggleVoiceResponse(){const _0x22d5e3=_0x8c1c2e,_0x33e138={'JUhNT':_0x22d5e3(0xf6)};isVoiceEnabled=!isVoiceEnabled,console[_0x22d5e3(0x185)](_0x22d5e3(0xee),isVoiceEnabled),voiceButton[_0x22d5e3(0x122)][_0x22d5e3(0x18a)](_0x33e138['JUhNT'],isVoiceEnabled);}async function initializeAIModel(){const _0x55d23e=_0x8c1c2e,_0x2e5020={'ExaHp':_0x55d23e(0x149),'knsmf':_0x55d23e(0x143),'nutEL':function(_0x3e9ff2,_0x59806b,_0x5d7a67){return _0x3e9ff2(_0x59806b,_0x5d7a67);},'XmpSO':'success','fJfMh':_0x55d23e(0xe0),'MSAHT':'progress','uOqJg':function(_0x19acf3,_0x2f18ca){return _0x19acf3*_0x2f18ca;},'DBqUY':function(_0x194d49,_0x5b9bfa){return _0x194d49||_0x5b9bfa;},'OPCgT':function(_0xcc961b,_0x1fe666,_0x462c47){return _0xcc961b(_0x1fe666,_0x462c47);},'BJIvy':_0x55d23e(0x105),'OHCdx':'100%','TCCfC':_0x55d23e(0x11b),'bzPEb':_0x55d23e(0x18f),'HGBRx':_0x55d23e(0x127),'NtcOU':_0x55d23e(0x17a),'oIKIG':'AI\x20Model\x20Initialization\x20Error:','eXZcS':function(_0x568f65,_0x2f2ef9){return _0x568f65(_0x2f2ef9);},'qYlbj':_0x55d23e(0x16f)};_0x2e5020['nutEL'](showStatus,'success',_0x2e5020[_0x55d23e(0x155)]);function _0x54119f(_0x230a02){const _0x30460f=_0x55d23e,{status:_0x5a7a3f,message:_0x4cb420,stage:_0x5c17a9,progress:_0x4e00e4}=_0x230a02['data'];console[_0x30460f(0x185)](_0x2e5020['ExaHp'],_0x5a7a3f,_0x4cb420);switch(_0x5a7a3f){case _0x2e5020[_0x30460f(0x167)]:_0x2e5020[_0x30460f(0x166)](showStatus,_0x2e5020['XmpSO'],_0x4cb420||_0x2e5020[_0x30460f(0x153)]);break;case _0x2e5020[_0x30460f(0xe6)]:const _0x1cbf64=Math[_0x30460f(0x191)](_0x2e5020[_0x30460f(0xed)](_0x2e5020[_0x30460f(0x177)](_0x4e00e4,0x0),0x64));_0x2e5020['OPCgT'](showStatus,_0x2e5020['XmpSO'],'Loading\x20'+_0x5c17a9+':\x20'+_0x1cbf64+'%');break;case _0x2e5020[_0x30460f(0x144)]:showStatus(_0x2e5020[_0x30460f(0x144)],_0x2e5020[_0x30460f(0xfa)]);aiModelProgressBar&&(aiModelProgressBar[_0x30460f(0x112)][_0x30460f(0xf4)]=_0x2e5020['OHCdx']);break;case _0x2e5020[_0x30460f(0x114)]:_0x2e5020[_0x30460f(0x128)](showStatus,_0x30460f(0x11b),'Model\x20Load\x20Failed:\x20'+_0x4cb420);break;}}aiAdapter[_0x55d23e(0x121)]['worker']&&aiAdapter[_0x55d23e(0x121)]['worker'][_0x55d23e(0x13f)](_0x2e5020['HGBRx'],_0x54119f);try{return await aiAdapter['init'](),showStatus(_0x2e5020[_0x55d23e(0x144)],_0x55d23e(0x124)),{'success':!![],'modelType':aiAdapter['modelType']||_0x2e5020[_0x55d23e(0x139)]};}catch(_0x16ac6e){return console['error'](_0x2e5020[_0x55d23e(0xe9)],_0x16ac6e),showStatus(_0x2e5020[_0x55d23e(0x114)],_0x55d23e(0x129)+_0x16ac6e[_0x55d23e(0x127)]),_0x2e5020[_0x55d23e(0x14c)](displayError,_0x2e5020[_0x55d23e(0xf8)]),{'success':![],'modelType':null};}}async function sendMessage(){const _0x4fb244=_0x8c1c2e,_0x375a05={'ehvwX':function(_0x568186,_0x4f9ee0){return _0x568186||_0x4f9ee0;},'rgKdG':function(_0x27f99e,_0x4e6eee){return _0x27f99e!==_0x4e6eee;},'MeDUl':function(_0x115766,_0x11a861){return _0x115766+_0x11a861;},'IhDGX':function(_0x3790d4,_0x2f2ede){return _0x3790d4===_0x2f2ede;},'eXNln':function(_0x5be71b,_0x1d44c0){return _0x5be71b>_0x1d44c0;},'JtBig':function(_0x36cd50,_0x277376){return _0x36cd50!==_0x277376;},'sUsfP':function(_0x2b3548){return _0x2b3548();},'ialya':function(_0xde611a,_0x55b539,_0x59932a){return _0xde611a(_0x55b539,_0x59932a);},'aoMmh':function(_0x164561,_0x29195b){return _0x164561(_0x29195b);},'fIUkb':function(_0x244be3){return _0x244be3();},'CyWiu':'user','zgACx':function(_0x4335c0,_0x523b07){return _0x4335c0==_0x523b07;},'PTANe':function(_0x144ba8){return _0x144ba8();},'vizIQ':_0x4fb244(0x10f),'VuqgL':_0x4fb244(0x133),'UpzBc':_0x4fb244(0x168),'rVtaT':function(_0x5b33be,_0x8ec7a8){return _0x5b33be&&_0x8ec7a8;},'xwZPE':_0x4fb244(0x15f),'zVeqn':_0x4fb244(0x18d)};!speechProcessor&&_0x375a05[_0x4fb244(0x190)](initializeSpeechManager);const _0x40961b=messageInput[_0x4fb244(0x108)]['trim']();if(!_0x40961b)return;_0x375a05['sUsfP'](toggleChatUI),await conversationManager[_0x4fb244(0x123)](_0x40961b,_0x375a05['CyWiu']);const _0x198891=await conversationManager['getCurrentConversation']();updateMessagesUI(_0x198891[_0x4fb244(0x152)]),messageInput[_0x4fb244(0x108)]='',messageInput[_0x4fb244(0x112)][_0x4fb244(0x147)]=_0x4fb244(0x12b);try{if(_0x375a05[_0x4fb244(0x17f)](!aiAdapter[_0x4fb244(0x13e)],AIAdapter[_0x4fb244(0x138)]['NULL'])&&!aiAdapter[_0x4fb244(0x10b)]){const _0x354fab=await _0x375a05['PTANe'](initializeAIModel);if(!_0x354fab[_0x4fb244(0x141)])throw new Error(_0x4fb244(0x181));}const _0x2b6d3f=[{'role':_0x375a05['vizIQ'],'content':systemRole1},..._0x198891[_0x4fb244(0x152)]];let _0x3761b7='',_0x19a984='',_0x71c0fa=![];const _0x2a6a8b=document['createElement'](_0x4fb244(0xf0));_0x2a6a8b[_0x4fb244(0x122)][_0x4fb244(0x11e)]('message',_0x375a05[_0x4fb244(0x106)]),_0x2a6a8b[_0x4fb244(0x101)]=_0x4fb244(0x172),messagesContainer[_0x4fb244(0x164)](_0x2a6a8b);const _0x58e936=_0x2a6a8b[_0x4fb244(0x11d)](_0x375a05['UpzBc']),_0x39579a=async()=>{const _0x377a9c=_0x4fb244;if(_0x375a05[_0x377a9c(0x136)](!_0x19a984,!isVoiceEnabled))return;const _0xaa2e69=['.\x20','!\x20','?\x20',';\x20',':\x20','\x0a\x0a'];let _0x32aac4=-0x1;for(const _0x1fd63a of _0xaa2e69){const _0x226e93=_0x19a984[_0x377a9c(0x10a)](_0x1fd63a);if(_0x375a05['rgKdG'](_0x226e93,-0x1)){_0x32aac4=_0x375a05['MeDUl'](_0x226e93,_0x1fd63a[_0x377a9c(0x111)]);break;}}if(_0x375a05[_0x377a9c(0x14a)](_0x32aac4,-0x1)&&_0x375a05['eXNln'](_0x19a984[_0x377a9c(0x111)],0x50)){const _0x59c365=_0x19a984['indexOf'](',\x20');if(_0x375a05[_0x377a9c(0x12a)](_0x59c365,-0x1))_0x32aac4=_0x375a05[_0x377a9c(0xf5)](_0x59c365,0x2);else{const _0xed2325=_0x19a984[_0x377a9c(0x100)]('\x20',0x50);_0x375a05[_0x377a9c(0x162)](_0xed2325,0x28)&&(_0x32aac4=_0xed2325+0x1);}}if(_0x375a05[_0x377a9c(0x13d)](_0x32aac4,-0x1)){const _0x5ce038=_0x19a984[_0x377a9c(0x10d)](0x0,_0x32aac4);_0x19a984=_0x19a984['substring'](_0x32aac4),_0x71c0fa=!![],await speechProcessor[_0x377a9c(0x15b)](_0x5ce038),_0x71c0fa=![],await _0x375a05['sUsfP'](_0x39579a);}else{if(_0x375a05[_0x377a9c(0x162)](_0x19a984[_0x377a9c(0x111)],0x78)){const _0x2c1580=_0x19a984;_0x19a984='',_0x71c0fa=!![],await speechProcessor[_0x377a9c(0x15b)](_0x2c1580),_0x71c0fa=![];}}};await aiAdapter['generateResponseStream'](_0x2b6d3f,async _0x21dfdc=>{const _0x2a0505=_0x4fb244;let _0xff58f2=_0x375a05[_0x2a0505(0x159)](moderationLayer,promptLeakagePattern,_0x21dfdc);_0x3761b7+=_0xff58f2,_0x375a05[_0x2a0505(0x117)](requestAnimationFrame,()=>{const _0x13d138=_0x2a0505;_0x58e936[_0x13d138(0x189)]=_0x3761b7,messagesContainer[_0x13d138(0x187)]=messagesContainer[_0x13d138(0x115)];}),isVoiceEnabled&&(_0x19a984+=_0xff58f2,!_0x71c0fa&&_0x375a05[_0x2a0505(0x159)](setTimeout,_0x39579a,0x0));}),await conversationManager[_0x4fb244(0x123)](_0x3761b7,_0x4fb244(0x18d)),_0x375a05[_0x4fb244(0x134)](isVoiceEnabled,_0x19a984)&&await speechProcessor[_0x4fb244(0x15b)](_0x19a984);}catch(_0x30be98){Logger['error'](_0x375a05[_0x4fb244(0x182)],_0x30be98);const _0x6271d8=_0x4fb244(0x15a);await conversationManager[_0x4fb244(0x123)](_0x6271d8,_0x375a05[_0x4fb244(0x140)]),_0x375a05[_0x4fb244(0x117)](updateMessagesUI,conversationManager[_0x4fb244(0x154)]()['messages']),displayError(_0x4fb244(0x109));}}function moderationLayer(_0x3b82cf,_0x12a859){const _0x55c10e=_0x8c1c2e,_0x31f0af={'sCiQj':'Incorrect\x20ask.\x20Please\x20rephrase\x20your\x20query.'};if(exactMatch(_0x3b82cf,_0x12a859))return _0x31f0af[_0x55c10e(0x18c)];if(semanticMatch(_0x3b82cf,_0x12a859))return _0x31f0af[_0x55c10e(0x18c)];return _0x12a859;}function exactMatch(_0x4a2838,_0x2a144e){const _0x394bce=_0x8c1c2e;return _0x2a144e[_0x394bce(0x188)]()[_0x394bce(0x14e)](_0x4a2838[_0x394bce(0x188)]());}function semanticMatch(_0x25fd40,_0x5f53b0){const _0x28ba8a=_0x8c1c2e,_0x3acfac={'kuxRt':function(_0x23a128,_0x13585a){return _0x23a128>_0x13585a;}},_0x49f280=_0x25fd40['toLowerCase']()[_0x28ba8a(0xfc)]('\x20'),_0x555048=_0x5f53b0[_0x28ba8a(0x188)]()['split']('\x20'),_0x32b2e9=_0x49f280['filter'](_0xe783cf=>_0x555048['includes'](_0xe783cf));return _0x3acfac['kuxRt'](_0x32b2e9[_0x28ba8a(0x111)],0x3);}function setupExampleClickEvents(){const _0x100e63=_0x8c1c2e,_0x327060={'uZQQc':_0x100e63(0x145),'tRKQn':function(_0xac6daa){return _0xac6daa();},'ICRIr':_0x100e63(0x131),'PygBK':function(_0x9fc2f7,_0x46796a,_0x176ff4){return _0x9fc2f7(_0x46796a,_0x176ff4);},'LmUGc':function(_0x343d3f,_0x2a441b){return _0x343d3f(_0x2a441b);},'RGLcv':_0x100e63(0x118),'ShHiI':_0x100e63(0x12c),'xUAjG':'messageInput','DpzXp':'Setting\x20up\x20example\x20clicks\x20-\x20example2:','PBzSE':_0x100e63(0x14f),'ArGqS':_0x100e63(0x11a),'FMLRn':_0x100e63(0xe7),'JSEXM':_0x100e63(0xe8)},_0x1ce8be=document['getElementById'](_0x327060[_0x100e63(0x175)]),_0x262c17=document[_0x100e63(0x15c)](_0x100e63(0x142)),_0x146ac0=document[_0x100e63(0x15c)](_0x327060[_0x100e63(0x161)]);console[_0x100e63(0x185)]('Setting\x20up\x20example\x20clicks\x20-\x20example1:',_0x1ce8be),console['log'](_0x327060[_0x100e63(0xeb)],_0x262c17),console[_0x100e63(0x185)](_0x327060[_0x100e63(0x16c)],_0x146ac0);if(!_0x1ce8be||!_0x262c17||!_0x146ac0){console['error'](_0x327060[_0x100e63(0x158)]);return;}function _0x3b7c9c(_0x257357){const _0x5d7727=_0x100e63,_0x52a02d=_0x257357[_0x5d7727(0x13a)]['trim']();console[_0x5d7727(0x185)](_0x327060['ICRIr'],_0x52a02d),_0x146ac0[_0x5d7727(0x108)]=_0x52a02d,_0x146ac0['dispatchEvent'](new Event('focus')),_0x327060[_0x5d7727(0x163)](setTimeout,()=>{const _0x323dcb=_0x5d7727;console['log'](_0x327060[_0x323dcb(0xf2)],_0x52a02d),_0x327060[_0x323dcb(0xdf)](sendMessage);},0x64);}_0x1ce8be['addEventListener'](_0x327060[_0x100e63(0xf1)],()=>{const _0x3d8149=_0x100e63;console[_0x3d8149(0x185)](_0x3d8149(0x15d)),_0x327060[_0x3d8149(0x16e)](_0x3b7c9c,_0x1ce8be);}),_0x262c17[_0x100e63(0x13f)](_0x327060[_0x100e63(0xf1)],()=>{const _0x5905c4=_0x100e63;console[_0x5905c4(0x185)](_0x327060[_0x5905c4(0xec)]),_0x3b7c9c(_0x262c17);}),console[_0x100e63(0x185)](_0x327060[_0x100e63(0x120)]);}document['addEventListener'](_0x8c1c2e(0x156),async()=>{const _0x1b548e=_0x8c1c2e,_0xa09206={'lOurB':function(_0x21270c){return _0x21270c();},'guRlJ':function(_0x1cd77b,_0x55c8e5){return _0x1cd77b(_0x55c8e5);},'hyTUU':_0x1b548e(0x13c)};try{!conversationManager[_0x1b548e(0x154)]()&&conversationManager['createNewConversation'](),_0xa09206[_0x1b548e(0x146)](initializeSpeechManager),_0xa09206[_0x1b548e(0x146)](setupExampleClickEvents),_0xa09206[_0x1b548e(0x146)](initializeAIModel);}catch(_0x399eaa){Logger[_0x1b548e(0x11b)](_0x1b548e(0x169),_0x399eaa),_0xa09206['guRlJ'](displayError,_0xa09206[_0x1b548e(0x116)]);}});document[_0x8c1c2e(0xff)]==='loading'?document[_0x8c1c2e(0x13f)]('DOMContentLoaded',setupExampleClickEvents):setupExampleClickEvents();function _0x5987(_0x457f65,_0x567f7e){const _0x293983=_0x2939();return _0x5987=function(_0x59870a,_0x392d52){_0x59870a=_0x59870a-0xdf;let _0x5839fa=_0x293983[_0x59870a];return _0x5839fa;},_0x5987(_0x457f65,_0x567f7e);}if(sendButton)sendButton[_0x8c1c2e(0x13f)](_0x8c1c2e(0xe7),sendMessage);if(micButton)micButton['addEventListener'](_0x8c1c2e(0xe7),toggleRecording);if(voiceButton)voiceButton[_0x8c1c2e(0x13f)]('click',toggleVoiceResponse);messageInput&&(messageInput[_0x8c1c2e(0x13f)](_0x8c1c2e(0x178),_0x4f9f84=>{const _0x4822d9=_0x8c1c2e,_0xf320f2={'qbPYJ':function(_0x36ee93,_0x48ffa6){return _0x36ee93===_0x48ffa6;},'XCuGq':_0x4822d9(0xfb),'OAuyb':function(_0x40e1a1){return _0x40e1a1();}};_0xf320f2[_0x4822d9(0x174)](_0x4f9f84[_0x4822d9(0x148)],_0xf320f2[_0x4822d9(0x192)])&&!_0x4f9f84[_0x4822d9(0x183)]&&(_0x4f9f84[_0x4822d9(0x18b)](),_0xf320f2[_0x4822d9(0x186)](sendMessage));}),messageInput[_0x8c1c2e(0x13f)](_0x8c1c2e(0xe2),toggleChatUI));newChatButton&&newChatButton[_0x8c1c2e(0x13f)]('click',()=>{const _0x393c40=_0x8c1c2e,_0x988b8e={'pvUgK':'3|0|4|2|1','ZxHsq':'none','OMCHo':_0x393c40(0xe5)},_0x149a3b=_0x988b8e['pvUgK'][_0x393c40(0xfc)]('|');let _0xe1cc3f=0x0;while(!![]){switch(_0x149a3b[_0xe1cc3f++]){case'0':if(messagesContainer)messagesContainer[_0x393c40(0x101)]='';continue;case'1':if(messageInput)messageInput[_0x393c40(0x108)]='';continue;case'2':if(chatContainer)chatContainer[_0x393c40(0x112)]['display']=_0x988b8e[_0x393c40(0x14b)];continue;case'3':conversationManager['createNewConversation']();continue;case'4':if(welcomeScreen)welcomeScreen[_0x393c40(0x112)][_0x393c40(0x16a)]=_0x988b8e[_0x393c40(0x170)];continue;}break;}});settingsButton&&settingsButton['addEventListener']('click',()=>{const _0x452e84=_0x8c1c2e,_0x346724={'djdSV':_0x452e84(0x157)};window[_0x452e84(0x119)]['href']=_0x346724[_0x452e84(0xef)];});export{conversationManager,sendMessage,initializeAIModel};