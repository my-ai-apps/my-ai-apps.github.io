
/*!
Copyright © 2024 Saisha Pandit. All Rights Reserved.
Unauthorized use, modification, or distribution is strictly prohibited.
*/
const _0x2e03fc=_0x7f6c;function _0x7f6c(_0x5cbce6,_0x18283e){const _0x3eb71b=_0x3eb7();return _0x7f6c=function(_0x7f6c2b,_0x20eb47){_0x7f6c2b=_0x7f6c2b-0x64;let _0x1547bb=_0x3eb71b[_0x7f6c2b];return _0x1547bb;},_0x7f6c(_0x5cbce6,_0x18283e);}(function(_0x1c07e7,_0x220ea4){const _0x556607=_0x7f6c,_0x325ca7=_0x1c07e7();while(!![]){try{const _0x100541=-parseInt(_0x556607(0x7d))/0x1*(parseInt(_0x556607(0xb9))/0x2)+parseInt(_0x556607(0xb2))/0x3+parseInt(_0x556607(0x93))/0x4+parseInt(_0x556607(0xae))/0x5+parseInt(_0x556607(0x90))/0x6+-parseInt(_0x556607(0x6d))/0x7*(-parseInt(_0x556607(0x9c))/0x8)+-parseInt(_0x556607(0x9d))/0x9*(parseInt(_0x556607(0x92))/0xa);if(_0x100541===_0x220ea4)break;else _0x325ca7['push'](_0x325ca7['shift']());}catch(_0x3128ea){_0x325ca7['push'](_0x325ca7['shift']());}}}(_0x3eb7,0x71fa5));class QuickPromptComponent extends HTMLElement{constructor(){const _0xe8497=_0x7f6c;super(),this[_0xe8497(0x84)]({'mode':_0xe8497(0x95)}),this[_0xe8497(0x69)][_0xe8497(0x8f)]='\x0a\x20\x20\x20\x20\x20\x20\x20\x20<style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20Component\x20container\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20:host\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20inline-block;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20Main\x20button\x20styling\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.quick-prompt-button\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20width:\x2040px;\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x2040px;\x20<--\x20Use\x20only\x20if\x20you\x20are\x20showing\x20a\x20round\x20icon\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x20var(--border-radius);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20rgba(128,\x20128,\x20128,\x200.1);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20var(--button-color);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20all\x200.3s\x20ease;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x208px\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20white-space:\x20nowrap;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-overflow:\x20ellipsis;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-right:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.quick-prompt-button:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20rgba(128,\x20128,\x20128,\x200.2);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.quick-prompt-button\x20svg\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2024px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x2024px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-right:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20flex-shrink:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20Modal\x20styling\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.modal\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20rgba(0,\x200,\x200,\x200.5);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x201000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20flex-end;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding-bottom:\x2080px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.modal-content\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20var(--card-bg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x20var(--border-radius);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20min-width:\x20450px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20max-height:\x2070vh;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20overflow-y:\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x20-2px\x2010px\x20rgba(0,\x200,\x200,\x200.2);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.modal-header\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20space-between;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2015px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.modal-title\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x201.2em;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20bold;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.modal-close\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x201.5em;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[data-theme=\x22dark\x22]\x20.modal-content\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20var(--card-bg-dark);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20var(--text-dark);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20Prompt\x20list\x20styling\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.prompt-list\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20list-style:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.prompt-item\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-bottom:\x201px\x20solid\x20var(--border-color);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20background-color\x200.2s;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.prompt-item:last-child\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-bottom:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.prompt-item:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20rgba(128,\x20128,\x20128,\x200.1);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20</style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Component\x20HTML\x20structure\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22quick-prompt-button\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x20512\x20512\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Font\x20Awesome\x20Pro\x206.4.0\x20by\x20@fontawesome\x20-\x20https://fontawesome.com\x20License\x20-\x20https://fontawesome.com/license\x20(Commercial\x20License)\x20Copyright\x202023\x20Fonticons,\x20Inc.\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22currentColor\x22\x20d=\x22M464\x206.1c9.5-8.5\x2024-8.1\x2033\x20.9l8\x208c9\x209\x209.4\x2023.5\x20.9\x2033l-85.8\x2095.9c-2.6\x202.9-4.1\x206.7-4.1\x2010.7V176c0\x208.8-7.2\x2016-16\x2016H384.2c-4\x200-7.8\x201.5-10.7\x204.1l-95.9\x2085.8c-9.5\x208.5-23.5\x208.1-33-.9l-8-8c-9-9-9.4-23.5-.9-33l85.8-95.9c2.6-2.9\x204.1-6.7\x204.1-10.7V112c0-8.8\x207.2-16\x2016-16h26.3c4\x200\x207.8-1.5\x2010.7-4.1L464\x206.1zM256\x20352c12.2\x200\x2024.3\x201.3\x2036\x203.7V248c0-8.8-7.2-16-16-16H168c-13.3\x200-24-10.7-24-24s10.7-24\x2024-24h40V144c0-8.8-7.2-16-16-16H101.5c1.7-13.8\x2013.3-24\x2027.5-24h64c13.3\x200\x2024-10.7\x2024-24s-10.7-24-24-24h-64C73.7\x2056\x2032\x2097.7\x2032\x20149.5V384c0\x2035.3\x2028.7\x2064\x2064\x2064h64v-64c0-17.7\x2014.3-32\x2032-32h64z\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Pop\x20Quiz-\x20To\x20Go</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-title\x22>Pop\x20Quiz</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22modal-close\x22>&times;</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Select\x20a\x20pre-designed\x20quiz\x20to\x20use:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20class=\x22prompt-list\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22prompt-item\x22\x20data-path=\x22./data/common/general/wa-dol-{0-3}.txt\x22>Washington\x20Drivers\x20Test</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22prompt-item\x22\x20data-path=\x22./data/common/grade10/Geography/qa_PhyGeo&NatProcesses.txt\x22>Physical\x20Geography\x20&\x20Natural\x20Processes\x20(30\x20questions)</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22prompt-item\x22\x20data-path=\x22./data/common/grade10/Biology/qa_CellularData.txt\x22>Cellular\x20Respiration\x20Quiz\x20(30\x20Questions)</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22prompt-item\x22\x20data-path=\x22./data/common/grade10/Biology/qa_DNAProteinSynthesis.txt\x22>DNA\x20and\x20Protein\x20Synthesis\x20Quiz\x20(30\x20Questions)</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22prompt-item\x22\x20data-path=\x22./data/common/grade10/History/qa_IndRevolution.txt\x22>Industrial\x20Revolution\x20Quiz\x20(30\x20Questions)</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22prompt-item\x22\x20data-path=\x22./data/common/grade10/Chemistry/qa_ChemReactions.txt\x22>Chemical\x20Reactions\x20Quiz\x20(30\x20Questions)</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20',this['setupEventListeners']();}[_0x2e03fc(0x8a)](){const _0x49ab97=_0x2e03fc,_0x537f14={'rCeXp':_0x49ab97(0x9e)};this[_0x49ab97(0x88)](),window['addEventListener'](_0x537f14[_0x49ab97(0x77)],this['updateModalPosition'][_0x49ab97(0x83)](this));}[_0x2e03fc(0x74)](){const _0x2d3088=_0x2e03fc,_0x2bfa98={'YMRan':_0x2d3088(0x9e)};window[_0x2d3088(0x80)](_0x2bfa98['YMRan'],this['updateModalPosition'][_0x2d3088(0x83)](this));}[_0x2e03fc(0x88)](){const _0x8e3b88=_0x2e03fc,_0x23bf1b={'bnDqt':_0x8e3b88(0x71),'dJqVC':_0x8e3b88(0x94),'FNKlH':function(_0x104167,_0x37e935){return _0x104167-_0x37e935;}},_0x42eac6=this['getBoundingClientRect'](),_0x436c02=this[_0x8e3b88(0x69)][_0x8e3b88(0xaa)](_0x8e3b88(0xa6));if(_0x436c02){const _0xd9a47=_0x436c02['querySelector'](_0x23bf1b[_0x8e3b88(0xb7)]);_0xd9a47&&(_0xd9a47[_0x8e3b88(0x81)][_0x8e3b88(0x6c)]=Math[_0x8e3b88(0x64)](0x1f4,_0x42eac6[_0x8e3b88(0x65)])+'px',_0x436c02[_0x8e3b88(0x81)]['alignItems']=_0x23bf1b[_0x8e3b88(0x75)],_0x436c02[_0x8e3b88(0x81)][_0x8e3b88(0x72)]=_0x23bf1b['FNKlH'](window[_0x8e3b88(0xb5)],_0x42eac6[_0x8e3b88(0x6b)])+0xa+'px');}}['setupEventListeners'](){const _0x280f3f=_0x2e03fc,_0x293a01={'jKiVF':function(_0x1b2440,_0x3ebe69){return _0x1b2440===_0x3ebe69;},'LRMzT':function(_0x29508d,_0x38f1e0){return _0x29508d+_0x38f1e0;},'fahXQ':function(_0x2eafeb,_0x23c58e){return _0x2eafeb(_0x23c58e);},'ytKXl':_0x280f3f(0xa0),'bfjYJ':_0x280f3f(0x9a),'IkRFp':_0x280f3f(0xa6),'DZwIz':_0x280f3f(0xb4)};this['shadowRoot']['querySelector'](_0x280f3f(0xba))['addEventListener'](_0x293a01[_0x280f3f(0x7c)],()=>this[_0x280f3f(0x66)]());const _0x3c7aff=this[_0x280f3f(0x69)][_0x280f3f(0xaa)](_0x293a01[_0x280f3f(0x97)]);_0x3c7aff['addEventListener'](_0x293a01[_0x280f3f(0x7c)],()=>{const _0x196205=_0x280f3f;this[_0x196205(0x86)]();});const _0x585171=this[_0x280f3f(0x69)][_0x280f3f(0xaa)](_0x293a01[_0x280f3f(0xbd)]);_0x585171[_0x280f3f(0x78)](_0x280f3f(0xa0),_0x5a8c4e=>{const _0x187a2f=_0x280f3f;_0x293a01[_0x187a2f(0x6f)](_0x5a8c4e['target'],_0x585171)&&this['closeModal']();});const _0x37c328=this[_0x280f3f(0x69)]['querySelectorAll'](_0x293a01[_0x280f3f(0x99)]);_0x37c328[_0x280f3f(0x73)](_0x550ba7=>{const _0xa27db9=_0x280f3f;_0x550ba7[_0xa27db9(0x78)](_0x293a01[_0xa27db9(0x7c)],_0xe68dd4=>{const _0x2aae57=_0xa27db9,_0x1a7a50={'cmOwZ':function(_0x259cdd,_0x7b2ed6){return _0x293a01['LRMzT'](_0x259cdd,_0x7b2ed6);},'NjSSb':function(_0x17f215,_0x4455fe){return _0x17f215*_0x4455fe;},'SQcNU':function(_0xb393c5,_0x4a6c6f){return _0xb393c5-_0x4a6c6f;},'Wefqc':function(_0x556215,_0x3c1005){return _0x293a01['fahXQ'](_0x556215,_0x3c1005);}},_0x5f0184=_0xe68dd4[_0x2aae57(0x7a)][_0x2aae57(0xac)];let _0x226458=_0xe68dd4[_0x2aae57(0x7a)][_0x2aae57(0x7b)][_0x2aae57(0x85)];_0x226458=_0x226458[_0x2aae57(0xbe)](/\{(\d+)-(\d+)\}/,(_0x59b976,_0x15aa11,_0x3f36da)=>{const _0x4d8697=_0x2aae57,_0x58a020=_0x1a7a50[_0x4d8697(0x89)](Math['floor'](_0x1a7a50[_0x4d8697(0xb6)](Math['random'](),_0x1a7a50[_0x4d8697(0x89)](_0x1a7a50[_0x4d8697(0x82)](parseInt(_0x3f36da),parseInt(_0x15aa11)),0x1))),_0x1a7a50[_0x4d8697(0xa1)](parseInt,_0x15aa11));return _0x58a020;}),this[_0x2aae57(0xaf)](_0x5f0184,_0x226458),this[_0x2aae57(0x86)]();});});}[_0x2e03fc(0xaf)](_0x35a11a,_0x59fd0b){const _0x3521d1=_0x2e03fc,_0x2ddce1={'HKrAb':'prompt-selected'},_0x3485f4=new CustomEvent(_0x3521d1(0x79),{'bubbles':!![],'composed':!![],'detail':{'action':_0x2ddce1[_0x3521d1(0xb0)],'text':_0x35a11a,'path':_0x59fd0b}});this['dispatchEvent'](_0x3485f4);}[_0x2e03fc(0x66)](){const _0x54b39a=_0x2e03fc,_0xf8aba2={'JnCdv':_0x54b39a(0xab),'fFVCb':_0x54b39a(0x96),'XHUPo':_0x54b39a(0x8b)};this[_0x54b39a(0x88)]();const _0x452855=new CustomEvent(_0xf8aba2[_0x54b39a(0x9f)],{'bubbles':!![],'composed':!![],'detail':{'action':_0xf8aba2[_0x54b39a(0xa4)],'timestamp':new Date()['toISOString']()}});this[_0x54b39a(0xb3)](_0x452855);const _0x499d91=this[_0x54b39a(0x69)][_0x54b39a(0xaa)]('.modal');_0x499d91&&(_0x499d91[_0x54b39a(0x81)][_0x54b39a(0x9b)]=_0xf8aba2[_0x54b39a(0xa3)]);}[_0x2e03fc(0x86)](){const _0x2adb91=_0x2e03fc,_0x2314b7={'LlMsv':_0x2adb91(0xa6)},_0x15039e=this[_0x2adb91(0x69)][_0x2adb91(0xaa)](_0x2314b7[_0x2adb91(0x67)]);_0x15039e&&(_0x15039e[_0x2adb91(0x81)][_0x2adb91(0x9b)]='none');}[_0x2e03fc(0x7e)](_0x321053){const _0x1110cf=_0x2e03fc,_0x253933={'mZccW':function(_0xa92b9,_0x51a590){return _0xa92b9+_0x51a590;},'TvCYu':function(_0x5c2a15,_0x34853d){return _0x5c2a15*_0x34853d;},'jXHtH':function(_0x33370f,_0x59fc64){return _0x33370f-_0x59fc64;},'oPKDL':function(_0x1166a0,_0x1c1db){return _0x1166a0(_0x1c1db);},'lUphQ':_0x1110cf(0xa0),'ocbZD':_0x1110cf(0xa9)};if(!Array[_0x1110cf(0x8c)](_0x321053))return;const _0x1dbf72=this[_0x1110cf(0x69)][_0x1110cf(0xaa)](_0x253933[_0x1110cf(0x70)]);_0x1dbf72&&(_0x1dbf72['innerHTML']='',_0x321053[_0x1110cf(0x73)](_0x178900=>{const _0x3e4429=_0x1110cf,_0x25ee16={'KkUaW':function(_0x136e8c,_0x5d9000){const _0x5ccac0=_0x7f6c;return _0x253933[_0x5ccac0(0x76)](_0x136e8c,_0x5d9000);},'ZKqnC':function(_0x38b1a3,_0x47336e){return _0x253933['TvCYu'](_0x38b1a3,_0x47336e);},'raiPT':function(_0x2bd5b4,_0x524db9){const _0x332db9=_0x7f6c;return _0x253933[_0x332db9(0x8e)](_0x2bd5b4,_0x524db9);},'VovBK':function(_0x2e59b7,_0x25f934){const _0x1afc5f=_0x7f6c;return _0x253933[_0x1afc5f(0xa8)](_0x2e59b7,_0x25f934);}},_0x52b564=document['createElement']('li');_0x52b564[_0x3e4429(0x7f)]=_0x3e4429(0x6e),_0x52b564['textContent']=_0x178900['text'],_0x52b564['dataset'][_0x3e4429(0x85)]=_0x178900['path'],_0x52b564[_0x3e4429(0x78)](_0x253933[_0x3e4429(0xa7)],()=>{const _0xd24cff=_0x3e4429,_0x5e07d6={'uiTSB':function(_0x59acea,_0xb3439){const _0x21d439=_0x7f6c;return _0x25ee16[_0x21d439(0x91)](_0x59acea,_0xb3439);},'tGGgV':function(_0x160ad5,_0x1f8f1e){const _0x47dac5=_0x7f6c;return _0x25ee16[_0x47dac5(0x87)](_0x160ad5,_0x1f8f1e);},'bMGuj':function(_0x7e8c8f,_0x4810c5){const _0x4f62b7=_0x7f6c;return _0x25ee16[_0x4f62b7(0xad)](_0x7e8c8f,_0x4810c5);},'blLKJ':function(_0x531398,_0xa581c3){const _0x247448=_0x7f6c;return _0x25ee16[_0x247448(0x98)](_0x531398,_0xa581c3);}};let _0x406bfc=_0x178900['path'];_0x406bfc=_0x406bfc[_0xd24cff(0xbe)](/\{(\d+)-(\d+)\}/,(_0x384c31,_0x5d8e53,_0x313da3)=>{const _0x456f6f=_0xd24cff,_0x929220=_0x5e07d6[_0x456f6f(0xa5)](Math[_0x456f6f(0x8d)](_0x5e07d6[_0x456f6f(0x68)](Math[_0x456f6f(0xb8)](),_0x5e07d6[_0x456f6f(0xbb)](_0x5e07d6['blLKJ'](parseInt,_0x313da3),_0x5e07d6['blLKJ'](parseInt,_0x5d8e53))+0x1)),_0x5e07d6[_0x456f6f(0xa2)](parseInt,_0x5d8e53));return _0x929220;}),this[_0xd24cff(0xaf)](_0x178900['text'],_0x406bfc),this[_0xd24cff(0x86)]();}),_0x1dbf72[_0x3e4429(0x6a)](_0x52b564);}));}}customElements[_0x2e03fc(0xbc)](_0x2e03fc(0xb1),QuickPromptComponent);function _0x3eb7(){const _0x2fc8ea=['VovBK','DZwIz','.modal-close','display','3669664sKxAEt','5067Norvpk','resize','JnCdv','click','Wefqc','blLKJ','XHUPo','fFVCb','uiTSB','.modal','lUphQ','oPKDL','.prompt-list','querySelector','quickprompt-action','textContent','raiPT','1998120WsBfwj','selectPrompt','HKrAb','quick-prompt-component','62355XJZUgG','dispatchEvent','.prompt-item','innerHeight','NjSSb','bnDqt','random','2miDlkE','.quick-prompt-button','bMGuj','define','IkRFp','replace','min','width','openModal','LlMsv','tGGgV','shadowRoot','appendChild','top','maxWidth','7IpwpLT','prompt-item','jKiVF','ocbZD','.modal-content','paddingBottom','forEach','disconnectedCallback','dJqVC','mZccW','rCeXp','addEventListener','prompt-selected','target','dataset','ytKXl','627053MJDjgw','updatePromptList','className','removeEventListener','style','SQcNU','bind','attachShadow','path','closeModal','ZKqnC','updateModalPosition','cmOwZ','connectedCallback','flex','isArray','floor','jXHtH','innerHTML','3992256vFTfJi','KkUaW','15220DdKEgn','1625196gfdUrD','flex-end','open','quick-prompts','bfjYJ'];_0x3eb7=function(){return _0x2fc8ea;};return _0x3eb7();}