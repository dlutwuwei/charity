/**
 * 工作居住证网站补丁代码
 */
window.GetObjVal = function GetObjVal(objName, formName) {
  let val = '';
  let ObjID = 0;
  for (ObjID = 0; ObjID < formName.elements.length; ObjID++) {
    if (formName.elements[ObjID].name == objName) {
      break;
    }
  }
  val = formName.elements[ObjID].value;
  return val;
};

window.focusObj = function focusObj(objName, formName) {
  let ObjId;
  ObjId = GetObjID(objName, formName);
  formName.elements[ObjId].focus();
};

window.changeSub = function changeSub(flag) {
  if (flag == 'education') {
    document.getElementById('education').style.display = '';
    document.getElementById('unit').style.display = 'none';
    document.getElementById('achievement').style.display = 'none';
    document.getElementById('follows').style.display = 'none';
  } else if (flag == 'unit') {
    document.getElementById('education').style.display = 'none';
    document.getElementById('unit').style.display = '';
    document.getElementById('achievement').style.display = 'none';
    document.getElementById('follows').style.display = 'none';
  } else if (flag == 'achievement') {
    document.getElementById('education').style.display = 'none';
    document.getElementById('unit').style.display = 'none';
    document.getElementById('achievement').style.display = '';
    document.getElementById('follows').style.display = 'none';
  } else if (flag == 'follows') {
    document.getElementById('education').style.display = 'none';
    document.getElementById('unit').style.display = 'none';
    document.getElementById('achievement').style.display = 'none';
    document.getElementById('follows').style.display = '';
  }
};

window.toMod = function toMod() {
  window.location = '/yjrc/person/ApplyCardAction.do?formAction=cApply';
};

window.back = function back() {
  window.location = '/yjrc/person/ApplyListAction.do?formAction=in&opType=cApply';
};
window.queryEdu = function queryEdu(id) {
  const goUrl = `/yjrc/person/QueryEduResumAction.do?formAction=in&applyId=${id}`;
  window.open(
    goUrl,
    'querywindow',
    'width=1030,height=420,top=10,left=10,status=yes,menubar=no,resizable=yes,scrollbars=yes'
  );
};

window.queryWork = function queryWork(id) {
  const goUrl = `/yjrc/person/QueryWorkResumAction.do?formAction=in&applyId=${id}`;
  window.open(
    goUrl,
    'querywindow',
    'width=1030,height=420,top=10,left=10,status=yes,menubar=no,resizable=yes,scrollbars=yes'
  );
};

const linktag = document.querySelector(
  'body > table:nth-child(5) > tbody > tr:nth-child(1) > td:nth-child(1) > table:nth-child(4) > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr > td:nth-child(2) > div'
);

if (linktag) {
  linktag.querySelector('a').style.pointerEvents = 'none';

  linktag.addEventListener('click', () => {
    const form = document.createElement('form');
    form.name = 'sso';
    form.method = 'post';
    form.action = '/uamsso/SSOSecService';
    const data = [
      { name: 'sid', value: 'null' },
      { name: 'LinkID', value: '666' },
      { name: 'LinkType', value: 'online' }
    ];
    data.forEach((d, idx) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = d.name;
      input.value = d.value;
      form.appendChild(input);
    });
    document.body.appendChild(form);
    form.submit();
  });
}

const table = document.querySelector(
  'body > table:nth-child(2) > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(2) > td > table > tbody'
);
if (table) {
  table.style.width = '285px';
  table.style.display = 'block';
  table.style.marginLeft = '10px';
}

var link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href = "https://cdnjs.cloudflare.com/ajax/libs/air-datepicker/2.2.3/css/datepicker.min.css";
var head = document.getElementsByTagName("head")[0];
head.appendChild(link);
window.jQuery = window.$ = require("jquery");
$('input[name$=Date],input[name$=date]').addClass('datepicker-here');

setTimeout(() => {
  require('air-datepicker/dist/js/datepicker.js');
  $.fn.datepicker.language['en'] = {
    days: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
    daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    daysMin: ['一', '二', '三', '四', '五', '六', '日'],
    months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一', '十二'],
    monthsShort: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一', '十二'],
    today: 'Today',
    clear: 'Clear',
    dateFormat: 'yyyy-mm-dd',
    timeFormat: 'hh:ii aa',
    firstDay: 0
  };
  window.fPopCalendar = function fPopCalendar(popCtrl, dateCtrl, strDate) {
    $(popCtrl).datepicker({
      language: 'en'
    });
  };
}, 10);


