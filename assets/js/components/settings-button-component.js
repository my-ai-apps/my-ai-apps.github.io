
/*!
Copyright © 2024 Saisha Pandit. All Rights Reserved.
Unauthorized use, modification, or distribution is strictly prohibited.
*/
function _0x3208(){const _0x5ef5f5=['app-settings','549396vRNsWQ','TqpUB','#font-size','getItem','fontSize','innerHTML','askaa','value','closeModal','open','theme','updateSettings','openModal','hmKTD','ENPWS','LKocd','saveSettings','preventDefault','flex','attachShadow','242570BokNNE','8JmGbpp','legBF','oKEOO','465783VUQwKd','loadSettings','style','updateModalPosition','bIptx','1432200rPKviD','SnZpP','top','noWQQ','shadowRoot','sTtMj','getSettings','stringify','HvYsE','getBoundingClientRect','oXRwZ','178458TGkVxZ','settings-opened','XRUPn','.modal','mnqmb','2039XjYJZQ','innerHeight','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20Component\x20container\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20:host\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20inline-block;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20Settings\x20button\x20styling\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.settings-button\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x206px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x20var(--border-radius);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20var(--button-color);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20background-color\x200.2s;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.settings-button:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20rgba(128,\x20128,\x20128,\x200.1);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.settings-button\x20svg\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2024px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x2024px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20Modal\x20styling\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.modal\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20rgba(0,\x200,\x200,\x200.5);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x201000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20flex-end;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding-bottom:\x2080px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.modal-content\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20var(--card-bg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x20var(--border-radius);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20min-width:\x20500px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20max-height:\x2070vh;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20overflow-y:\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x20-2px\x2010px\x20rgba(0,\x200,\x200,\x200.2);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.modal-header\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20space-between;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2015px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.modal-title\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x201.2em;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20bold;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.modal-close\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x201.5em;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[data-theme=\x22dark\x22]\x20.modal-content\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20var(--card-bg-dark);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20var(--text-dark);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20Settings\x20form\x20styling\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.settings-form\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gap:\x2015px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.form-group\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gap:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.form-group\x20label\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20500;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.form-group\x20input,\x20.form-group\x20select\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x20var(--border-radius);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20var(--border-color);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20var(--input-bg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20var(--text-color);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.form-group\x20input[type=\x22checkbox\x22]\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.checkbox-group\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gap:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.checkbox-group\x20label\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.action-buttons\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20flex-end;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gap:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-top:\x2015px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.action-buttons\x20button\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x208px\x2016px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x20var(--border-radius);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20500;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.save-button\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20var(--primary-color,\x20#0066cc);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.cancel-button\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20transparent;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20var(--border-color);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20</style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Component\x20HTML\x20structure\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22settings-button\x22\x20title=\x22Settings\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<circle\x20cx=\x2212\x22\x20cy=\x2212\x22\x20r=\x223\x22></circle>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M19.4\x2015a1.65\x201.65\x200\x200\x200\x20.33\x201.82l.06.06a2\x202\x200\x200\x201\x200\x202.83\x202\x202\x200\x200\x201-2.83\x200l-.06-.06a1.65\x201.65\x200\x200\x200-1.82-.33\x201.65\x201.65\x200\x200\x200-1\x201.51V21a2\x202\x200\x200\x201-2\x202\x202\x202\x200\x200\x201-2-2v-.09A1.65\x201.65\x200\x200\x200\x209\x2019.4a1.65\x201.65\x200\x200\x200-1.82.33l-.06.06a2\x202\x200\x200\x201-2.83\x200\x202\x202\x200\x200\x201\x200-2.83l.06-.06a1.65\x201.65\x200\x200\x200\x20.33-1.82\x201.65\x201.65\x200\x200\x200-1.51-1H3a2\x202\x200\x200\x201-2-2\x202\x202\x200\x200\x201\x202-2h.09A1.65\x201.65\x200\x200\x200\x204.6\x209a1.65\x201.65\x200\x200\x200-.33-1.82l-.06-.06a2\x202\x200\x200\x201\x200-2.83\x202\x202\x200\x200\x201\x202.83\x200l.06.06a1.65\x201.65\x200\x200\x200\x201.82.33H9a1.65\x201.65\x200\x200\x200\x201-1.51V3a2\x202\x200\x200\x201\x202-2\x202\x202\x200\x200\x201\x202\x202v.09a1.65\x201.65\x200\x200\x200\x201\x201.51\x201.65\x201.65\x200\x200\x200\x201.82-.33l.06-.06a2\x202\x200\x200\x201\x202.83\x200\x202\x202\x200\x200\x201\x200\x202.83l-.06.06a1.65\x201.65\x200\x200\x200-.33\x201.82V9a1.65\x201.65\x200\x200\x200\x201.51\x201H21a2\x202\x200\x200\x201\x202\x202\x202\x202\x200\x200\x201-2\x202h-.09a1.65\x201.65\x200\x200\x200-1.51\x201z\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-title\x22>Settings</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22modal-close\x22>&times;</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<form\x20class=\x22settings-form\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22form-group\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22theme-select\x22>Interface\x20Theme</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22theme-select\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22system\x22>System\x20Default</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22light\x22>Light</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22dark\x22>Dark</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22form-group\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22font-size\x22>Font\x20Size</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22font-size\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22small\x22>Small</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22medium\x22\x20selected>Medium</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22large\x22>Large</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22checkbox-group\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22auto-save\x22\x20checked>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22auto-save\x22>Auto-save\x20conversations</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22checkbox-group\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22notifications\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22notifications\x22>Enable\x20desktop\x20notifications</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22checkbox-group\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22sounds\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22sounds\x22>Enable\x20sound\x20effects</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22action-buttons\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22cancel-button\x22>Cancel</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22submit\x22\x20class=\x22save-button\x22>Save\x20Changes</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</form>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20','66PwCRbf','notifications','ZJsOO','maxWidth','min','.settings-form','submit','ckDYi','target','medium','#auto-save','#sounds','UCxJD','setItem','settings-changed','autoSave','.settings-button','system','RgQkW','VZhtd','SxPpa','bind','none','paddingBottom','2063565VgzuqJ','dFaXS','checked','32hvNvnU','display','Idtwc','#theme-select','flex-end','.modal-content','OElKD','uHQtc','object','FyTsR','kQrJm','jCReZ','#notifications','sounds','162eHYbSn','resize','querySelector','toISOString','removeEventListener','addEventListener','settings-button-component','parse','define','setupEventListeners','BKTPk','disconnectedCallback','dispatchEvent'];_0x3208=function(){return _0x5ef5f5;};return _0x3208();}const _0x11265a=_0x5341;(function(_0x593e25,_0x5155b6){const _0x375b0e=_0x5341,_0xe16b7d=_0x593e25();while(!![]){try{const _0x391491=-parseInt(_0x375b0e(0x83))/0x1*(parseInt(_0x375b0e(0xaf))/0x2)+-parseInt(_0x375b0e(0xd5))/0x3*(parseInt(_0x375b0e(0xd2))/0x4)+parseInt(_0x375b0e(0xda))/0x5+parseInt(_0x375b0e(0xbd))/0x6+-parseInt(_0x375b0e(0xe5))/0x7*(parseInt(_0x375b0e(0xa1))/0x8)+parseInt(_0x375b0e(0x9e))/0x9+parseInt(_0x375b0e(0xd1))/0xa*(parseInt(_0x375b0e(0x86))/0xb);if(_0x391491===_0x5155b6)break;else _0xe16b7d['push'](_0xe16b7d['shift']());}catch(_0x277f82){_0xe16b7d['push'](_0xe16b7d['shift']());}}}(_0x3208,0x2ac48));class SettingsComponent extends HTMLElement{constructor(){const _0x4bc257=_0x5341,_0x21548f={'HvYsE':_0x4bc257(0xc6)};super(),this[_0x4bc257(0xd0)]({'mode':_0x21548f[_0x4bc257(0xe2)]}),this['shadowRoot'][_0x4bc257(0xc2)]=_0x4bc257(0x85),this[_0x4bc257(0xb8)]();}['connectedCallback'](){const _0x47c0f1=_0x5341;this[_0x47c0f1(0xd8)](),window['addEventListener'](_0x47c0f1(0xb0),this[_0x47c0f1(0xd8)][_0x47c0f1(0x9b)](this));}[_0x11265a(0xba)](){const _0x52c818=_0x11265a,_0x5806b9={'ZJsOO':_0x52c818(0xb0)};window[_0x52c818(0xb3)](_0x5806b9[_0x52c818(0x88)],this[_0x52c818(0xd8)][_0x52c818(0x9b)](this));}[_0x11265a(0xd8)](){const _0x397e39=_0x11265a,_0x5e30f6={'bIptx':_0x397e39(0x81),'jTzob':_0x397e39(0xa5),'kQrJm':function(_0x33d850,_0xecf807){return _0x33d850+_0xecf807;},'uHQtc':function(_0x2fb19e,_0x3a9db9){return _0x2fb19e-_0x3a9db9;}},_0x49661f=this[_0x397e39(0xe3)](),_0x1f5cec=this[_0x397e39(0xde)][_0x397e39(0xb1)](_0x5e30f6[_0x397e39(0xd9)]);if(_0x1f5cec){const _0x140511=_0x1f5cec[_0x397e39(0xb1)](_0x397e39(0xa6));_0x140511&&(_0x140511['style'][_0x397e39(0x89)]=Math[_0x397e39(0x8a)](0x1f4,_0x49661f['width'])+'px',_0x1f5cec[_0x397e39(0xd7)]['alignItems']=_0x5e30f6['jTzob'],_0x1f5cec[_0x397e39(0xd7)][_0x397e39(0x9d)]=_0x5e30f6[_0x397e39(0xab)](_0x5e30f6[_0x397e39(0xa8)](window[_0x397e39(0x84)],_0x49661f[_0x397e39(0xdc)]),0xa)+'px');}}['setupEventListeners'](){const _0x38d0cf=_0x11265a,_0x53f841={'FyTsR':function(_0x19d323,_0x5895e8){return _0x19d323===_0x5895e8;},'BKTPk':_0x38d0cf(0x96),'CSxvh':'.modal-close','Idtwc':'click','Yuacw':_0x38d0cf(0x81),'oKEOO':_0x38d0cf(0x8c),'TqpUB':'.cancel-button'};this[_0x38d0cf(0xde)]['querySelector'](_0x53f841[_0x38d0cf(0xb9)])[_0x38d0cf(0xb4)]('click',()=>this[_0x38d0cf(0xc9)]());const _0x4ce5e0=this['shadowRoot'][_0x38d0cf(0xb1)](_0x53f841['CSxvh']);_0x4ce5e0['addEventListener'](_0x53f841[_0x38d0cf(0xa3)],()=>{const _0x12e7cd=_0x38d0cf;this[_0x12e7cd(0xc5)]();});const _0xa21230=this['shadowRoot']['querySelector'](_0x53f841['Yuacw']);_0xa21230[_0x38d0cf(0xb4)](_0x53f841[_0x38d0cf(0xa3)],_0xe408d7=>{const _0x3a1b63=_0x38d0cf;_0x53f841[_0x3a1b63(0xaa)](_0xe408d7[_0x3a1b63(0x8e)],_0xa21230)&&this[_0x3a1b63(0xc5)]();});const _0x5ad537=this[_0x38d0cf(0xde)][_0x38d0cf(0xb1)](_0x38d0cf(0x8b));_0x5ad537[_0x38d0cf(0xb4)](_0x53f841[_0x38d0cf(0xd4)],_0x5488f7=>{const _0x4d772c=_0x38d0cf;_0x5488f7[_0x4d772c(0xce)](),this[_0x4d772c(0xcd)]();});const _0x515469=this[_0x38d0cf(0xde)][_0x38d0cf(0xb1)](_0x53f841[_0x38d0cf(0xbe)]);_0x515469['addEventListener'](_0x53f841[_0x38d0cf(0xa3)],()=>{this['closeModal']();});}[_0x11265a(0xc9)](){const _0xd2ba8c=_0x11265a,_0x4a6286={'SxPpa':_0xd2ba8c(0x7f),'dbxbE':_0xd2ba8c(0x81)};this[_0xd2ba8c(0xd8)]();const _0x16b755=new CustomEvent(_0x4a6286[_0xd2ba8c(0x9a)],{'bubbles':!![],'composed':!![],'detail':{'timestamp':new Date()[_0xd2ba8c(0xb2)]()}});this[_0xd2ba8c(0xbb)](_0x16b755);const _0x35f7d1=this['shadowRoot']['querySelector'](_0x4a6286['dbxbE']);_0x35f7d1&&(_0x35f7d1[_0xd2ba8c(0xd7)][_0xd2ba8c(0xa2)]=_0xd2ba8c(0xcf)),this['loadSettings']();}[_0x11265a(0xc5)](){const _0x560503=_0x11265a,_0x171948={'zOCSx':_0x560503(0x81)},_0x11c305=this[_0x560503(0xde)][_0x560503(0xb1)](_0x171948['zOCSx']);_0x11c305&&(_0x11c305['style'][_0x560503(0xa2)]=_0x560503(0x9c));}[_0x11265a(0xd6)](){const _0x507788=_0x11265a,_0x1d0f22={'oXRwZ':'#theme-select','jCReZ':_0x507788(0xbf),'VZhtd':'#auto-save','noWQQ':_0x507788(0x91)},_0x3e85aa=this['getSettings'](),_0x58fecd=this[_0x507788(0xde)][_0x507788(0xb1)](_0x1d0f22[_0x507788(0xe4)]),_0x4912ed=this[_0x507788(0xde)][_0x507788(0xb1)](_0x1d0f22[_0x507788(0xac)]),_0x4eb0ec=this[_0x507788(0xde)][_0x507788(0xb1)](_0x1d0f22[_0x507788(0x99)]),_0x18bbfe=this[_0x507788(0xde)]['querySelector'](_0x507788(0xad)),_0x118bc0=this[_0x507788(0xde)]['querySelector'](_0x1d0f22[_0x507788(0xdd)]);if(_0x58fecd)_0x58fecd[_0x507788(0xc4)]=_0x3e85aa[_0x507788(0xc7)];if(_0x4912ed)_0x4912ed['value']=_0x3e85aa[_0x507788(0xc1)];if(_0x4eb0ec)_0x4eb0ec[_0x507788(0xa0)]=_0x3e85aa[_0x507788(0x95)];if(_0x18bbfe)_0x18bbfe[_0x507788(0xa0)]=_0x3e85aa[_0x507788(0x87)];if(_0x118bc0)_0x118bc0['checked']=_0x3e85aa[_0x507788(0xae)];}[_0x11265a(0xcd)](){const _0x3ab062=_0x11265a,_0x88eada={'dFaXS':_0x3ab062(0xad),'LKocd':_0x3ab062(0x91),'OElKD':_0x3ab062(0x8f),'ckDYi':'app-settings','XRUPn':'settings-changed'},_0x14e234=this[_0x3ab062(0xde)][_0x3ab062(0xb1)](_0x3ab062(0xa4)),_0x1d8b55=this['shadowRoot'][_0x3ab062(0xb1)](_0x3ab062(0xbf)),_0x3221bd=this[_0x3ab062(0xde)][_0x3ab062(0xb1)](_0x3ab062(0x90)),_0x349099=this[_0x3ab062(0xde)][_0x3ab062(0xb1)](_0x88eada[_0x3ab062(0x9f)]),_0x214a08=this[_0x3ab062(0xde)][_0x3ab062(0xb1)](_0x88eada[_0x3ab062(0xcc)]),_0x59e2a4={'theme':_0x14e234?_0x14e234[_0x3ab062(0xc4)]:_0x3ab062(0x97),'fontSize':_0x1d8b55?_0x1d8b55[_0x3ab062(0xc4)]:_0x88eada[_0x3ab062(0xa7)],'autoSave':_0x3221bd?_0x3221bd[_0x3ab062(0xa0)]:!![],'notifications':_0x349099?_0x349099[_0x3ab062(0xa0)]:![],'sounds':_0x214a08?_0x214a08[_0x3ab062(0xa0)]:![]};localStorage[_0x3ab062(0x93)](_0x88eada[_0x3ab062(0x8d)],JSON[_0x3ab062(0xe1)](_0x59e2a4));const _0x1472ea=new CustomEvent(_0x88eada[_0x3ab062(0x80)],{'bubbles':!![],'composed':!![],'detail':{'settings':_0x59e2a4}});this[_0x3ab062(0xbb)](_0x1472ea),this['closeModal']();}[_0x11265a(0xe0)](){const _0x31fb81=_0x11265a,_0x460e84={'mnqmb':_0x31fb81(0x8f),'UCxJD':_0x31fb81(0xbc)},_0x5c2d30={'theme':_0x31fb81(0x97),'fontSize':_0x460e84[_0x31fb81(0x82)],'autoSave':!![],'notifications':![],'sounds':![]};try{const _0x3f9c82=localStorage[_0x31fb81(0xc0)](_0x460e84[_0x31fb81(0x92)]);return _0x3f9c82?{..._0x5c2d30,...JSON[_0x31fb81(0xb6)](_0x3f9c82)}:_0x5c2d30;}catch(_0x324124){return _0x5c2d30;}}[_0x11265a(0xc8)](_0x43f654){const _0x349157=_0x11265a,_0xd456ac={'askaa':function(_0x83d1b4,_0xc4c88f){return _0x83d1b4!==_0xc4c88f;},'SnZpP':_0x349157(0xa9),'hmKTD':_0x349157(0xbc),'sTtMj':function(_0x14f345,_0x386ae0){return _0x14f345===_0x386ae0;},'legBF':'.modal','RgQkW':_0x349157(0xcf),'ENPWS':_0x349157(0x94)};if(!_0x43f654||_0xd456ac[_0x349157(0xc3)](typeof _0x43f654,_0xd456ac[_0x349157(0xdb)]))return;const _0x78b336=this['getSettings'](),_0x2c4503={..._0x78b336,..._0x43f654};localStorage[_0x349157(0x93)](_0xd456ac[_0x349157(0xca)],JSON[_0x349157(0xe1)](_0x2c4503));_0xd456ac[_0x349157(0xdf)](this['shadowRoot']['querySelector'](_0xd456ac[_0x349157(0xd3)])[_0x349157(0xd7)]['display'],_0xd456ac[_0x349157(0x98)])&&this['loadSettings']();const _0x3a77d2=new CustomEvent(_0xd456ac[_0x349157(0xcb)],{'bubbles':!![],'composed':!![],'detail':{'settings':_0x2c4503}});this[_0x349157(0xbb)](_0x3a77d2);}}function _0x5341(_0x378316,_0x398963){const _0x3208d0=_0x3208();return _0x5341=function(_0x534147,_0x5ef112){_0x534147=_0x534147-0x7f;let _0x6fd312=_0x3208d0[_0x534147];return _0x6fd312;},_0x5341(_0x378316,_0x398963);}customElements[_0x11265a(0xb7)](_0x11265a(0xb5),SettingsComponent);