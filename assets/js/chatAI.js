
/*!
Copyright © 2024 Saisha Pandit. All Rights Reserved.
Unauthorized use, modification, or distribution is strictly prohibited.
*/
const _0x235ce6=_0x220e;(function(_0x26f823,_0x27e853){const _0x12a62b=_0x220e,_0x2d0c1f=_0x26f823();while(!![]){try{const _0x29a534=parseInt(_0x12a62b(0xa6))/0x1*(-parseInt(_0x12a62b(0x8f))/0x2)+-parseInt(_0x12a62b(0x8c))/0x3+parseInt(_0x12a62b(0xaf))/0x4*(parseInt(_0x12a62b(0xb8))/0x5)+parseInt(_0x12a62b(0x88))/0x6+parseInt(_0x12a62b(0xc0))/0x7+parseInt(_0x12a62b(0xa0))/0x8*(-parseInt(_0x12a62b(0x92))/0x9)+-parseInt(_0x12a62b(0xc6))/0xa;if(_0x29a534===_0x27e853)break;else _0x2d0c1f['push'](_0x2d0c1f['shift']());}catch(_0x1ba5a0){_0x2d0c1f['push'](_0x2d0c1f['shift']());}}}(_0x3104,0x656d9));import _0x5a3012 from'./store.js';import{appendMessage,showTypingIndicator,hideTypingIndicator}from'./common.js';const defaultSettings={'apiUrl':_0x235ce6(0xc9),'apiToken':_0x235ce6(0x86),'modelName':_0x235ce6(0xa9),'maxTokens':0x1000,'temperature':0.7,'topP':0x1,'systemPrompt':_0x235ce6(0xb3)};let settings={...defaultSettings};function loadSettings(){const _0x5f23aa=_0x235ce6,_0x1fd782={'prLiV':'apiToken','KgyYQ':_0x5f23aa(0xc3),'PkcZw':_0x5f23aa(0xa4),'FLZZD':_0x5f23aa(0xb4),'jXryy':_0x5f23aa(0xab),'nFRWL':_0x5f23aa(0x87),'WdUon':_0x5f23aa(0x98)};settings[_0x5f23aa(0x98)]=_0x5a3012[_0x5f23aa(0x82)](_0x5f23aa(0x98))||defaultSettings['apiUrl'],settings['apiToken']=_0x5a3012['getItem'](_0x1fd782[_0x5f23aa(0x83)])||defaultSettings[_0x5f23aa(0xc2)],settings[_0x5f23aa(0xc3)]=_0x5a3012[_0x5f23aa(0x82)](_0x1fd782[_0x5f23aa(0xc4)])||defaultSettings['modelName'],settings['maxTokens']=_0x5a3012[_0x5f23aa(0x82)](_0x1fd782[_0x5f23aa(0xbb)])||defaultSettings[_0x5f23aa(0xa4)],settings['temperature']=_0x5a3012[_0x5f23aa(0x82)](_0x1fd782[_0x5f23aa(0xba)])||defaultSettings[_0x5f23aa(0xb4)],settings[_0x5f23aa(0xab)]=_0x5a3012[_0x5f23aa(0x82)](_0x1fd782[_0x5f23aa(0xbf)])||defaultSettings[_0x5f23aa(0xab)],settings['systemPrompt']=_0x5a3012[_0x5f23aa(0x82)](_0x1fd782[_0x5f23aa(0xae)])||defaultSettings[_0x5f23aa(0x87)],document[_0x5f23aa(0x8a)](_0x1fd782['WdUon'])[_0x5f23aa(0xbc)]=settings[_0x5f23aa(0x98)],document[_0x5f23aa(0x8a)](_0x1fd782[_0x5f23aa(0x83)])[_0x5f23aa(0xbc)]=settings[_0x5f23aa(0xc2)],document['getElementById'](_0x1fd782['KgyYQ'])['value']=settings['modelName'],document['getElementById'](_0x1fd782['PkcZw'])[_0x5f23aa(0xbc)]=settings[_0x5f23aa(0xa4)],document[_0x5f23aa(0x8a)](_0x1fd782[_0x5f23aa(0xba)])[_0x5f23aa(0xbc)]=settings[_0x5f23aa(0xb4)],document[_0x5f23aa(0x8a)](_0x1fd782[_0x5f23aa(0xbf)])['value']=settings[_0x5f23aa(0xab)],document[_0x5f23aa(0x8a)](_0x1fd782[_0x5f23aa(0xae)])['value']=settings[_0x5f23aa(0x87)];}function saveSettings(){const _0x510abb=_0x235ce6,_0x38f2a5={'Cphxm':_0x510abb(0x98),'LAyEi':'apiToken','abdId':_0x510abb(0xa4),'XwXdB':_0x510abb(0xb4),'TWgVd':_0x510abb(0xab),'WXuRI':_0x510abb(0x87),'qDGKS':_0x510abb(0xc3),'ExdLf':function(_0x404030){return _0x404030();}};settings['apiUrl']=document['getElementById'](_0x38f2a5[_0x510abb(0xac)])[_0x510abb(0xbc)],settings['apiToken']=document[_0x510abb(0x8a)](_0x38f2a5['LAyEi'])[_0x510abb(0xbc)],settings[_0x510abb(0xc3)]=document[_0x510abb(0x8a)](_0x510abb(0xc3))['value'],settings[_0x510abb(0xa4)]=document[_0x510abb(0x8a)](_0x38f2a5[_0x510abb(0x9e)])['value'],settings[_0x510abb(0xb4)]=document[_0x510abb(0x8a)](_0x38f2a5['XwXdB'])['value'],settings[_0x510abb(0xab)]=document[_0x510abb(0x8a)](_0x38f2a5[_0x510abb(0xad)])[_0x510abb(0xbc)],settings['systemPrompt']=document[_0x510abb(0x8a)](_0x38f2a5['WXuRI'])['value'],_0x5a3012['setItem'](_0x38f2a5[_0x510abb(0xac)],settings[_0x510abb(0x98)]),_0x5a3012[_0x510abb(0x8e)](_0x510abb(0xc2),settings[_0x510abb(0xc2)]),_0x5a3012['setItem'](_0x38f2a5[_0x510abb(0x90)],settings[_0x510abb(0xc3)]),_0x5a3012[_0x510abb(0x8e)](_0x38f2a5[_0x510abb(0x9e)],settings[_0x510abb(0xa4)]),_0x5a3012[_0x510abb(0x8e)](_0x510abb(0xb4),settings[_0x510abb(0xb4)]),_0x5a3012[_0x510abb(0x8e)](_0x38f2a5['TWgVd'],settings[_0x510abb(0xab)]),_0x5a3012['setItem'](_0x38f2a5['WXuRI'],settings['systemPrompt']),_0x38f2a5[_0x510abb(0xa5)](toggleSettings);}function _0x3104(){const _0x1d58fe=['speechSynthesis','http://localhost:1234/v1','JhmEI','ZMsGC','/chat/completions','getItem','prLiV','LOgpt','Error:\x20Could\x20not\x20parse\x20JSON\x20response.','sk-proj-66666666666666666666666666666666','systemPrompt','1533156ivcrAb','length','getElementById','parse','727281uZdOpl','choices','setItem','112554sdUhPv','qDGKS','Bearer\x20','18JeznqM','BOHPC','lang','lZRnk','style','onload','apiUrl','json','settings','QSkbb','Error:\x20Failed\x20to\x20fetch\x20AI\x20response:\x20','flex','abdId','system','558400cPRlGy','user-input','stringify','user','maxTokens','ExdLf','1akNbva','display','chat-window','openai/Qwen2.5','application/json','topP','Cphxm','TWgVd','nFRWL','104LyogsA','content','sendMessage','yaDjo','Based\x20on\x20the\x20user’s\x20input,\x20determine\x20the\x20intended\x20quiz\x20topic.\x20Create\x20a\x20JSON\x20object\x20containing\x20a\x20set\x20of\x205\x20multiple-choice\x20questions\x20relevant\x20to\x20that\x20topic.\x20Each\x20question\x20should\x20include\x20the\x20fields\x20\x27question\x27\x20(the\x20quiz\x20question),\x20\x27options\x27\x20(single\x20answer\x20choice).\x20Format\x20the\x20output\x20to\x20the\x20pattern\x20below\x20{\x20\x27topic\x27:\x20\x27example_topic\x27,\x20\x27questions\x27:\x20[\x20{\x20\x27question\x27:\x20\x27Example\x20question?\x27,\x20\x27options\x27:\x20[\x27Option\x20A\x27],\x20\x27correctAnswer\x27:\x20\x27Option\x20B\x27\x20}\x20]\x20}','temperature','DnMJV','xbNMh','kSXZu','129435VaLkAl','message','FLZZD','PkcZw','value','VUvSL','sjSUa','jXryy','1812090LvkcsY','POST','apiToken','modelName','KgyYQ','none','3337050eTeAWd','toggleSettings'];_0x3104=function(){return _0x1d58fe;};return _0x3104();}function toggleSettings(){const _0x5aa0b7=_0x235ce6,_0x1162a7={'QSkbb':_0x5aa0b7(0x9a),'PycIn':function(_0x537394,_0x4f00ac){return _0x537394===_0x4f00ac;},'tAxoo':_0x5aa0b7(0x9d),'DnMJV':_0x5aa0b7(0xc5)},_0x530fbd=document[_0x5aa0b7(0x8a)](_0x1162a7[_0x5aa0b7(0x9b)]);_0x530fbd['style'][_0x5aa0b7(0xa7)]=_0x1162a7['PycIn'](_0x530fbd[_0x5aa0b7(0x96)]['display'],_0x1162a7['tAxoo'])?_0x1162a7[_0x5aa0b7(0xb5)]:'flex';}window[_0x235ce6(0xc7)]=toggleSettings,window[_0x235ce6(0xb1)]=sendMessage;function _0x220e(_0x1249aa,_0x51b6e6){const _0x31043a=_0x3104();return _0x220e=function(_0x220eef,_0xe0f204){_0x220eef=_0x220eef-0x7f;let _0x762172=_0x31043a[_0x220eef];return _0x762172;},_0x220e(_0x1249aa,_0x51b6e6);}async function sendMessage(){const _0x42a3c9=_0x235ce6,_0x292521={'ZMsGC':_0x42a3c9(0xa1),'sjSUa':function(_0x1941eb,_0x12d57b,_0x76343f,_0x539eca){return _0x1941eb(_0x12d57b,_0x76343f,_0x539eca);},'yaDjo':_0x42a3c9(0xa8),'PfkSJ':_0x42a3c9(0xa3),'LOgpt':function(_0x1c3b83,_0x29c499,_0x2a0dfc){return _0x1c3b83(_0x29c499,_0x2a0dfc);},'XTQrP':_0x42a3c9(0xc1),'PLgVi':_0x42a3c9(0xaa),'WlSBR':_0x42a3c9(0x9f),'JhmEI':function(_0x40cac2,_0x3b3ab4){return _0x40cac2(_0x3b3ab4);},'BOHPC':'json_object','VUvSL':function(_0x51755b){return _0x51755b();},'kSXZu':function(_0x186174,_0x2d5c58,_0x5110da,_0x550ab9){return _0x186174(_0x2d5c58,_0x5110da,_0x550ab9);},'lZRnk':_0x42a3c9(0x85),'xbNMh':function(_0x3e5442,_0x14f52a){return _0x3e5442+_0x14f52a;},'wXPNJ':_0x42a3c9(0x9c)},_0x1dda37=document['getElementById'](_0x292521[_0x42a3c9(0x80)])[_0x42a3c9(0xbc)];if(!_0x1dda37)return;_0x292521[_0x42a3c9(0xbe)](appendMessage,document[_0x42a3c9(0x8a)](_0x292521[_0x42a3c9(0xb2)]),_0x1dda37,_0x292521['PfkSJ']),document[_0x42a3c9(0x8a)](_0x292521[_0x42a3c9(0x80)])['value']='',_0x292521['LOgpt'](showTypingIndicator,document['getElementById'](_0x292521['yaDjo']),'AI\x20is\x20typing...');try{const _0x377f46=await _0x292521[_0x42a3c9(0x84)](fetch,settings[_0x42a3c9(0x98)]+_0x42a3c9(0x81),{'method':_0x292521['XTQrP'],'headers':{'Authorization':_0x42a3c9(0x91)+settings['apiToken'],'Content-Type':_0x292521['PLgVi']},'body':JSON[_0x42a3c9(0xa2)]({'model':settings[_0x42a3c9(0xc3)],'messages':[{'role':_0x292521['WlSBR'],'content':settings[_0x42a3c9(0x87)]},{'role':_0x292521['PfkSJ'],'content':_0x1dda37}],'max_tokens':_0x292521[_0x42a3c9(0x7f)](parseInt,settings[_0x42a3c9(0xa4)]),'temperature':_0x292521[_0x42a3c9(0x7f)](parseFloat,settings['temperature']),'top_p':_0x292521[_0x42a3c9(0x7f)](parseFloat,settings[_0x42a3c9(0xab)]),'frequency_penalty':0.5,'seed':0x1,'response_format':{'type':_0x292521[_0x42a3c9(0x93)]}})}),_0x4e88f4=await _0x377f46[_0x42a3c9(0x99)]();_0x292521['VUvSL'](hideTypingIndicator);if(_0x4e88f4['choices']&&_0x4e88f4[_0x42a3c9(0x8d)][_0x42a3c9(0x89)]>0x0){const _0x1fd7a2=_0x4e88f4['choices'][0x0][_0x42a3c9(0xb9)][_0x42a3c9(0xb0)];_0x292521['sjSUa'](appendMessage,document[_0x42a3c9(0x8a)](_0x292521[_0x42a3c9(0xb2)]),_0x1fd7a2,'ai');let _0x2278c5;try{_0x2278c5=JSON[_0x42a3c9(0x8b)](_0x1fd7a2),appendQuiz(_0x2278c5);}catch(_0x326cdf){_0x292521[_0x42a3c9(0xb7)](appendMessage,document['getElementById'](_0x292521[_0x42a3c9(0xb2)]),_0x292521[_0x42a3c9(0x95)],'ai');}}}catch(_0x2ba23c){appendMessage(document['getElementById'](_0x292521[_0x42a3c9(0xb2)]),_0x292521[_0x42a3c9(0xb6)](_0x292521['wXPNJ'],_0x2ba23c['message']),'ai');}finally{_0x292521[_0x42a3c9(0xbd)](hideTypingIndicator);}}function speakMessage(_0x2fac76){const _0x3b1004=_0x235ce6,_0xeb9ef9={'SgigU':'en-US'},_0x1401a1=new SpeechSynthesisUtterance(_0x2fac76);_0x1401a1[_0x3b1004(0x94)]=_0xeb9ef9['SgigU'],window[_0x3b1004(0xc8)]['speak'](_0x1401a1);}window[_0x235ce6(0x97)]=loadSettings;