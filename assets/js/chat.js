
/*!
Copyright © 2024 Saisha Pandit. All Rights Reserved.
Unauthorized use, modification, or distribution is strictly prohibited.
*/
const _0x1f91a1=_0x1354;(function(_0x2eed1c,_0x6224ff){const _0x5e26da=_0x1354,_0x4b59f4=_0x2eed1c();while(!![]){try{const _0x55d39f=parseInt(_0x5e26da(0xd9))/0x1*(-parseInt(_0x5e26da(0xd2))/0x2)+parseInt(_0x5e26da(0xf7))/0x3+parseInt(_0x5e26da(0xe4))/0x4*(-parseInt(_0x5e26da(0xd3))/0x5)+parseInt(_0x5e26da(0xc3))/0x6*(-parseInt(_0x5e26da(0xfe))/0x7)+parseInt(_0x5e26da(0xe7))/0x8*(parseInt(_0x5e26da(0xe2))/0x9)+-parseInt(_0x5e26da(0xf9))/0xa*(parseInt(_0x5e26da(0xbf))/0xb)+parseInt(_0x5e26da(0xd1))/0xc*(parseInt(_0x5e26da(0x100))/0xd);if(_0x55d39f===_0x6224ff)break;else _0x4b59f4['push'](_0x4b59f4['shift']());}catch(_0x2a2da2){_0x4b59f4['push'](_0x4b59f4['shift']());}}}(_0x5b14,0x3549c));import{BaseConversationManager}from'./BaseConversationManager.js';import{Logger}from'./common.js';import{aiLanguageSession,initializeLanguageSession,sessionConfig}from'./aiCommon.js';const welcomeScreen=document[_0x1f91a1(0xf0)]('welcomeScreen'),chatContainer=document[_0x1f91a1(0xf0)]('chatContainer'),messagesContainer=document[_0x1f91a1(0xf0)]('messagesContainer'),messageInput=document[_0x1f91a1(0xf0)](_0x1f91a1(0xda)),sendButton=document[_0x1f91a1(0xf0)](_0x1f91a1(0xde)),micButton=document[_0x1f91a1(0xf0)](_0x1f91a1(0xcd)),errorMessage=document[_0x1f91a1(0xf0)](_0x1f91a1(0xd5)),loader=document[_0x1f91a1(0xf0)](_0x1f91a1(0xea)),example1=document['getElementById']('example1'),example2=document[_0x1f91a1(0xf0)](_0x1f91a1(0xd7)),newChatButton=document['getElementById'](_0x1f91a1(0xfd)),settingsButton=document[_0x1f91a1(0xf0)](_0x1f91a1(0xd6)),inputContainer=document[_0x1f91a1(0xdd)]('.input-container'),conversationManager=new BaseConversationManager();function toggleChatUI(){const _0x43b9ab=_0x1f91a1,_0x149c5c={'QIlPw':_0x43b9ab(0xe5)};if(welcomeScreen)welcomeScreen[_0x43b9ab(0xba)]['display']=_0x149c5c[_0x43b9ab(0x10a)];if(chatContainer)chatContainer[_0x43b9ab(0xba)]['display']=_0x43b9ab(0xe9);if(inputContainer)inputContainer[_0x43b9ab(0xba)][_0x43b9ab(0xcb)]='flex';if(messageInput)messageInput['focus']();}function updateMessagesUI(_0x2bae6e){const _0x2c55a1=_0x1f91a1,_0x483b6b={'HDHAD':_0x2c55a1(0xee),'mMsMk':_0x2c55a1(0x107),'rxgJQ':'user','HgkOW':'message-user','SiiXs':_0x2c55a1(0x104),'fxuUT':function(_0x40d7ad,_0x6a0765){return _0x40d7ad===_0x6a0765;}};if(!messagesContainer)return;messagesContainer[_0x2c55a1(0xec)]='',_0x2bae6e[_0x2c55a1(0xbb)](_0x1c4d96=>{const _0x165718=_0x2c55a1,_0x33da47=document[_0x165718(0xfc)](_0x483b6b[_0x165718(0xe0)]);_0x33da47[_0x165718(0xf2)]['add'](_0x483b6b[_0x165718(0xfa)],_0x1c4d96['role']===_0x483b6b[_0x165718(0xe1)]?_0x483b6b[_0x165718(0xc4)]:_0x483b6b['SiiXs']),_0x33da47[_0x165718(0xec)]=_0x483b6b[_0x165718(0x10c)](_0x1c4d96[_0x165718(0xef)],_0x483b6b[_0x165718(0xe1)])?_0x165718(0xf6)+_0x1c4d96[_0x165718(0xeb)]+'</div>':_0x165718(0xe6)+_0x1c4d96['content']+_0x165718(0xf8),messagesContainer[_0x165718(0xbe)](_0x33da47);}),messagesContainer[_0x2c55a1(0x102)]=messagesContainer[_0x2c55a1(0xe8)];}async function sendMessage(){const _0x5a0e97=_0x1f91a1,_0x5cd1bd={'CWNBv':function(_0x5d78f8){return _0x5d78f8();},'HdhVJ':_0x5a0e97(0xf1),'oDbct':function(_0x290d14,_0x51de3b){return _0x290d14(_0x51de3b);},'FEPTj':_0x5a0e97(0xd4),'MEwrt':_0x5a0e97(0xee),'XiYuE':_0x5a0e97(0x107),'unTou':_0x5a0e97(0x104),'cORvq':'.message-content','gksOf':_0x5a0e97(0xc2),'MPhak':_0x5a0e97(0xff)},_0x40c470=messageInput['value'][_0x5a0e97(0xc7)]();if(!_0x40c470)return;_0x5cd1bd[_0x5a0e97(0xdf)](toggleChatUI),await conversationManager['addMessage'](_0x40c470,_0x5cd1bd[_0x5a0e97(0xcc)]);const _0x4c0b79=await conversationManager['getCurrentConversation']();_0x5cd1bd['oDbct'](updateMessagesUI,_0x4c0b79['messages']),messageInput[_0x5a0e97(0x10d)]='',messageInput[_0x5a0e97(0xba)]['height']=_0x5a0e97(0xd0);try{if(!aiLanguageSession)await initializeLanguageSession();const _0x1216f1=[{'role':_0x5cd1bd['FEPTj'],'content':sessionConfig[_0x5a0e97(0xcf)]},..._0x4c0b79[_0x5a0e97(0x106)]],_0x5a3174=await aiLanguageSession[_0x5a0e97(0xca)](JSON[_0x5a0e97(0xed)](_0x1216f1));let _0x51ef72='';const _0x27b4f1=document['createElement'](_0x5cd1bd[_0x5a0e97(0xdc)]);_0x27b4f1[_0x5a0e97(0xf2)][_0x5a0e97(0xf5)](_0x5cd1bd['XiYuE'],_0x5cd1bd['unTou']),_0x27b4f1['innerHTML']='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-ai-avatar\x22><i\x20class=\x22fas\x20fa-robot\x22></i></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-content\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20',messagesContainer[_0x5a0e97(0xbe)](_0x27b4f1);const _0x3c2f72=_0x27b4f1[_0x5a0e97(0xdd)](_0x5cd1bd['cORvq']);for await(const _0x2db37b of _0x5a3174){_0x51ef72+=_0x2db37b,_0x3c2f72[_0x5a0e97(0xc6)]=_0x51ef72,messagesContainer[_0x5a0e97(0x102)]=messagesContainer[_0x5a0e97(0xe8)];}await conversationManager[_0x5a0e97(0xce)](_0x51ef72,_0x5cd1bd[_0x5a0e97(0x101)]);}catch(_0x1f599a){Logger[_0x5a0e97(0x109)](_0x5cd1bd[_0x5a0e97(0xc1)],_0x1f599a);const _0x26bf94='I\x27m\x20sorry,\x20I\x20couldn\x27t\x20generate\x20a\x20response.\x20Please\x20try\x20again.';await conversationManager[_0x5a0e97(0xce)](_0x26bf94,_0x5cd1bd[_0x5a0e97(0x101)]),_0x5cd1bd['oDbct'](updateMessagesUI,conversationManager[_0x5a0e97(0xc8)]()[_0x5a0e97(0x106)]);}}document[_0x1f91a1(0xbc)](_0x1f91a1(0xe3),async()=>{const _0x3985c5=_0x1f91a1,_0x284fe1={'pBtTW':function(_0xcb3ed6){return _0xcb3ed6();},'ZYBBU':'Initialization\x20failed'};try{if(!aiLanguageSession)await _0x284fe1[_0x3985c5(0xc0)](initializeLanguageSession);!conversationManager[_0x3985c5(0xc8)]()&&conversationManager[_0x3985c5(0xf3)]();}catch(_0x4f44ca){Logger['error'](_0x284fe1[_0x3985c5(0xc9)],_0x4f44ca);}});if(sendButton)sendButton[_0x1f91a1(0xbc)](_0x1f91a1(0xdb),sendMessage);function _0x5b14(){const _0x616ed4=['forEach','addEventListener','href','appendChild','110yhlwHt','pBtTW','MPhak','assistant','12RqBIhG','HgkOW','Enter','textContent','trim','getCurrentConversation','ZYBBU','promptStreaming','display','HdhVJ','micButton','addMessage','systemRole','auto','108qTMIIP','4EvaeGF','64885DnHXug','system','errorMessage','settingsButton','example2','keydown','195559xjVufA','messageInput','click','MEwrt','querySelector','sendButton','CWNBv','HDHAD','rxgJQ','9zxYRID','DOMContentLoaded','44HlnjsE','none','<div\x20class=\x22message-ai-avatar\x22><i\x20class=\x22fas\x20fa-robot\x22></i></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-content\x22>','2698704UvSsYX','scrollHeight','flex','loader','content','innerHTML','stringify','div','role','getElementById','user','classList','createNewConversation','focus','add','<div\x20class=\x22message-content\x22>','656916NxGAFQ','</div>','352680fVVFpO','mMsMk','shiftKey','createElement','newChatButton','1139992YwtiXE','Response\x20error:','1262755IEDslz','gksOf','scrollTop','GGOOM','message-ai','location','messages','message','preventDefault','error','QIlPw','FhzMr','fxuUT','value','style'];_0x5b14=function(){return _0x616ed4;};return _0x5b14();}messageInput&&(messageInput[_0x1f91a1(0xbc)](_0x1f91a1(0xd8),_0x24c64a=>{const _0x3db618=_0x1f91a1,_0x3b00fc={'Phtuu':_0x3db618(0xc5)};_0x24c64a['key']===_0x3b00fc['Phtuu']&&!_0x24c64a[_0x3db618(0xfb)]&&(_0x24c64a[_0x3db618(0x108)](),sendMessage());}),messageInput[_0x1f91a1(0xbc)](_0x1f91a1(0xf4),toggleChatUI));function _0x1354(_0x5577f9,_0xf08ced){const _0x5b1411=_0x5b14();return _0x1354=function(_0x135425,_0xe5ceee){_0x135425=_0x135425-0xba;let _0x58b46f=_0x5b1411[_0x135425];return _0x58b46f;},_0x1354(_0x5577f9,_0xf08ced);}newChatButton&&newChatButton[_0x1f91a1(0xbc)](_0x1f91a1(0xdb),()=>{const _0x5eebd6=_0x1f91a1,_0x2b97df={'GGOOM':_0x5eebd6(0xe9)};conversationManager['createNewConversation']();if(messagesContainer)messagesContainer['innerHTML']='';if(welcomeScreen)welcomeScreen[_0x5eebd6(0xba)][_0x5eebd6(0xcb)]=_0x2b97df[_0x5eebd6(0x103)];if(chatContainer)chatContainer[_0x5eebd6(0xba)][_0x5eebd6(0xcb)]=_0x5eebd6(0xe5);if(messageInput)messageInput['value']='';});settingsButton&&settingsButton['addEventListener'](_0x1f91a1(0xdb),()=>{const _0x2c94ba=_0x1f91a1,_0x10f048={'FhzMr':'settings.html'};window[_0x2c94ba(0x105)][_0x2c94ba(0xbd)]=_0x10f048[_0x2c94ba(0x10b)];});export{conversationManager,sendMessage};