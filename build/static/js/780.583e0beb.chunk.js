(self.webpackChunk_tripfinder_hotel_cra=self.webpackChunk_tripfinder_hotel_cra||[]).push([[780],{61239:function(n,t,e){"use strict";e(30969);var i=e(11237),a=e(37574);t.Z=function(n){var t=n.children,e=n.className,r=n.fullWidth,o=n.noGutter,d=n.fluid;return(0,a.jsx)(i.Z,{className:e,fullWidth:r,noGutter:o,fluid:d,children:t})}},11237:function(n,t,e){"use strict";var i,a,r,o,d,l=e(71171),s=e(76104),p=s.ZP.div(i||(i=(0,l.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n  ",";\n  ",";\n\n  ","\n\n  @media (min-width: 768px) {\n    max-width: 750px;\n    width: 100%;\n  }\n\n  @media (min-width: 992px) {\n    max-width: 970px;\n    width: 100%;\n  }\n\n  @media (min-width: 1200px) {\n    max-width: 1170px;\n    width: 100%;\n  }\n"])),(function(n){return n.fullWidth&&(0,s.iv)(a||(a=(0,l.Z)(["\n      width: 100%;\n      max-width: none !important;\n    "])))}),(function(n){return n.noGutter&&(0,s.iv)(r||(r=(0,l.Z)(["\n        padding-left: 0;\n        padding-right: 0;\n      "])))||(0,s.iv)(o||(o=(0,l.Z)(["\n      padding-left: 30px;\n      padding-right: 30px;\n\n      @media (max-width: 480px) {\n        padding-left: 25px;\n        padding-right: 25px;\n      }\n    "])))}),(function(n){return n.fluid&&(0,s.iv)(d||(d=(0,l.Z)(["\n      width: 100% !important;\n      max-width: 1920px !important;\n      @media (min-width: 1441px) {\n        padding-left: 75px;\n        padding-right: 75px;\n      }\n    "])))}));t.Z=p},43991:function(n,t,e){"use strict";e.d(t,{Z:function(){return w}});var i=e(33028),a=e(9249),r=e(87371),o=e(80753),d=e(45754),l=e(13820),s=(e(75884),e(87016)),p=(e(89342),e(30969)),c=e(71171),x=e(76104),h=e(37574),u="ltr";"undefined"!==typeof window&&(u=document.getElementsByTagName("html")[0].getAttribute("dir"));var m,g,f=function(n){return function(t){return(0,h.jsx)(n,(0,i.Z)((0,i.Z)({},t),{},{"data-rtl":u}))}},b=x.ZP.div(m||(m=(0,c.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  margin-bottom: 40px;\n\n  .ant-form-item {\n    display: flex;\n    align-items: center;\n    margin-right: 30px;\n    margin-bottom: 0;\n    margin-left: 0;\n\n    &:last-child {\n      margin-right: 0;\n    }\n\n    .ant-form-item-label {\n      label {\n        font-size: 13px;\n      }\n    }\n  }\n"]))),w=(f((function(n){return(0,x.ZP)(n)(g||(g=(0,c.Z)(["\n  .isoReactDate {\n    height: 100vh;\n\n    .DateInput__display-text--focused {\n      color: #fff;\n      font-weight: 400;\n    }\n\n    .CalendarDay--selected-start,\n    .CalendarDay--selected-end,\n    .CalendarDay--selected {\n      color: #fff;\n    }\n\n    .CalendarDay--selected-span {\n      color: #fff;\n    }\n\n    .CalendarDay--hovered-span,\n    .CalendarDay--after-hovered-start {\n      color: #fff;\n    }\n\n    .DayPickerKeyboardShortcuts__show--bottom-right {\n      border-top: 26px solid transparent;\n      bottom: 0;\n      right: 0;\n    }\n\n    .DayPicker--horizontal {\n      .DayPickerNavigation--horizontal {\n        .DayPickerNavigation__prev,\n        .DayPickerNavigation__next {\n          -webkit-transform: ",";\n          -ms-transform: ",";\n          transform: ",";\n        }\n      }\n    }\n\n    .DateRangePickerInput {\n      .DateRangePickerInput__arrow {\n        -webkit-transform: ",";\n        -ms-transform: ",";\n        transform: ",";\n      }\n    }\n  }\n"])),(function(n){return"rtl"===n["data-rtl"]?"rotate(180deg)":"inherit"}),(function(n){return"rtl"===n["data-rtl"]?"rotate(180deg)":"inherit"}),(function(n){return"rtl"===n["data-rtl"]?"rotate(180deg)":"inherit"}),(function(n){return"rtl"===n["data-rtl"]?"rotate(180deg)":"inherit"}),(function(n){return"rtl"===n["data-rtl"]?"rotate(180deg)":"inherit"}),(function(n){return"rtl"===n["data-rtl"]?"rotate(180deg)":"inherit"}))})),function(n){(0,d.Z)(e,n);var t=(0,l.Z)(e);function e(n){var i;(0,a.Z)(this,e),(i=t.call(this,n)).onDateChangeFunc=function(n){var t=n.startDate,e=n.endDate,a=i.state.dateFormat;i.setState({startDate:t,endDate:e}),null!==t&&null!==e&&i.props.updateSearchData({setStartDate:t.format(a),setEndDate:e.format(a)})},i.onFocusChangeFunc=function(n){return i.setState({focusedInput:n})};var r=i.props.item&&i.props.item.separator?i.props.item.separator:"/",d=i.props.item&&i.props.item.format?i.props.item.format:"llll";return i.state={focusedInput:null,startDate:i.props.startDate?i.props.startDate:null,endDate:i.props.endDate?i.props.endDate:null,dateFormat:d,separator:r},i.onDateChangeFunc=i.onDateChangeFunc.bind((0,o.Z)(i)),i.onFocusChangeFunc=i.onFocusChangeFunc.bind((0,o.Z)(i)),i}return(0,r.Z)(e,[{key:"render",value:function(){var n=this.state,t=n.focusedInput,e=n.startDate,a=n.endDate,r=this.props,o=r.className,d=r.startDateId,l=r.endDateId,p=r.startDatePlaceholderText,c=r.endDatePlaceholderText,x=r.disabled,u=r.showClearDates,m=r.isRTL,g=r.orientation,f=r.anchorDirection,w=r.withPortal,v=r.withFullScreenPortal,Z=r.small,_=r.block,j=r.numberOfMonths,y=r.regular,k=r.noBorder,D=["date_picker"];o&&D.push(o);var P={startDateId:d||"start_unique_id",endDateId:l||"end_date_unique_id",startDate:e,endDate:a,focusedInput:t,onFocusChange:this.onFocusChangeFunc,onDatesChange:this.onDateChangeFunc,startDatePlaceholderText:p,endDatePlaceholderText:c,disabled:x,isRTL:m,showClearDates:u||!1,orientation:g,anchorDirection:f,withPortal:w,withFullScreenPortal:v,small:Z,numberOfMonths:j||2,block:_,regular:y,noBorder:k};return(0,h.jsx)(b,{className:D.join(" "),children:(0,h.jsx)(s.DateRangePicker,(0,i.Z)({},P))})}}]),e}(p.Component))},59683:function(n,t,e){"use strict";var i=e(33028),a=e(2159),r=(e(30969),e(76104)),o=e(29175),d=e(26817),l=e(37574),s=["content"],p=(0,r.ZP)("p")(d.u,o.I8,o.Ue,o.yd,o.Nv,o.rX,(0,d.H)("Heading")),c=function(n){var t=n.content,e=(0,a.Z)(n,s);return(0,l.jsx)(p,(0,i.Z)((0,i.Z)({},e),{},{children:t}))};c.defaultProps={as:"h2",mt:0,mb:0,fontWeight:700},t.Z=c},12632:function(n,t,e){"use strict";e.d(t,{Z:function(){return h}});var i,a=e(33028),r=e(2159),o=(e(30969),e(28542)),d=e(28761),l=e(55572),s=e(71171),p=e(76104).ZP.div(i||(i=(0,s.Z)(["\n  width: 104px;\n  height: 18px;\n  display: flex;\n  align-items: center;\n  position: relative;\n  overflow: hidden;\n\n  input[type='number'] {\n    width: calc(100% - 54px);\n    position: absolute;\n    left: 27px;\n    top: 0;\n    height: 100%;\n    padding: 0;\n    border: 0;\n    text-align: center;\n    background-color: transparent;\n\n    &::-webkit-inner-spin-button,\n    &::-webkit-outer-spin-button {\n      -webkit-appearance: none;\n      margin: 0;\n    }\n\n    &:focus {\n      outline: none;\n      box-shadow: none;\n    }\n  }\n\n  button {\n    border: 0;\n    width: 27px;\n    height: 27px;\n    border-radius: 50%;\n    display: inline-flex;\n    align-items: center;\n    position: absolute;\n    top: 0;\n    padding: 0;\n    background-color: transparent;\n    cursor: pointer;\n    justify-content: center;\n\n    &.decBtn {\n      left: 0;\n    }\n    &.incBtn {\n      right: 0;\n    }\n\n    &:hover,\n    &:focus {\n      outline: 0;\n    }\n  }\n"]))),c=e(37574),x=["className","increment","decrement"],h=function(n){var t=n.className,e=n.increment,i=n.decrement,s=(0,r.Z)(n,x),h=["quantity"];return t&&h.push(t),(0,c.jsxs)(p,{className:h.join(" "),children:[(0,c.jsx)("button",{className:"btn decBtn",type:"button",onClick:i,children:(0,c.jsx)(d.Z,{})}),(0,c.jsx)(o.Z,(0,a.Z)({className:"qnt-input",type:"number"},s)),(0,c.jsx)("button",{className:"btn incBtn",type:"button",onClick:e,children:(0,c.jsx)(l.Z,{})})]})}},91099:function(n,t,e){"use strict";e.d(t,{Z:function(){return m}});var i=e(96234),a=e(30969),r=e(15749);function o(n){var t=n.children,e=n.rendererId,o=(0,a.useState)(document.createElement("div")),d=(0,i.Z)(o,1)[0];return(0,a.useEffect)((function(){var n=document.getElementById(e)||document.body;return n.appendChild(d),function(){return n.removeChild(d)}})),r.createPortal(t,d)}var d,l,s,p=e(71171),c=e(76104),x=c.ZP.div(d||(d=(0,p.Z)(["\n  border-radius: ","px;\n  ","\n\n  .ant-checkbox-group {\n    display: flex;\n    flex-direction: column;\n    .ant-checkbox-group-item {\n      margin: 9px 0;\n      &:first-child {\n        margin-top: 0;\n      }\n      &:last-child {\n        margin-bottom: 0;\n      }\n    }\n  }\n\n  .date_picker {\n    margin-bottom: 0;\n\n    .DateRangePicker {\n      .DateRangePickerInput {\n        border-radius: 3px;\n      }\n    }\n  }\n"])),(function(n){return n.radius?n.radius:3}),(function(n){return n.showPopup&&(0,c.iv)(l||(l=(0,p.Z)(["\n      box-shadow: 0 2px 20px rgba(0, 0, 0, 0.16);\n      position: absolute;\n      width: 100%;\n      z-index: 999;\n      min-width: 300px;\n      padding: 30px;\n      background-color: #ffffff;\n    "])))})),h=c.ZP.div(s||(s=(0,p.Z)(["\n  position: relative;\n  width: 100%;\n"])));var u=e(37574);function m(n){var t=n.view,e=n.popup,r=n.noView,d=void 0!==r&&r,l=n.style,s=n.className,p=(0,a.useState)(!1),c=(0,i.Z)(p,2),m=c[0],g=c[1],f=(0,a.useRef)();!function(n,t){(0,a.useEffect)((function(){var e=function(e){n.current&&!n.current.contains(e.target)&&t(e)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[n,t])}(f,(function(){return g(!1)}));var b=["view_with__popup"];return s&&b.push(s),(0,u.jsxs)(h,{className:"".concat(b.join(" ")," ").concat(m?"active":""),ref:f,children:[t&&d&&(0,u.jsx)("div",{className:"popup_handler",onClick:function(){return g(!m)},children:t}),(0,u.jsxs)(x,{className:"popup_container",showPopup:m,onClick:function(){return g(!0)},style:l,children:[t&&!d&&t,m&&(0,u.jsx)("div",{id:"popup",children:(0,u.jsx)(o,{rendererId:"popup",children:e&&e})})]})]})}},54075:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return Mn}});var i,a,r,o,d,l,s,p,c,x,h,u=e(96234),m=e(30969),g=e(59683),f=e(92336),b=e(61239),w=e(95946),v=e(70191),Z=e(33028),_=e(33665),j=e(2159),y=e(71171),k=e(76104),D=e(26817),P=k.ZP.div(i||(i=(0,y.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  margin: 30px 0;\n\n  @media (max-width: 480px) {\n    margin: 15px 0 20px;\n  }\n\n  ","\n"])),D.u),C=k.ZP.div(a||(a=(0,y.Z)([""]))),R=k.ZP.div(r||(r=(0,y.Z)([""]))),N=P,I=e(37574),z=["className","title","link"],F=function(n){var t=n.className,e=n.title,i=n.link,a=(0,j.Z)(n,z),r=["section_title"];return t&&r.push(t),(0,I.jsxs)(N,(0,Z.Z)((0,Z.Z)({className:r.join(" ")},a),{},{children:[e&&(0,I.jsx)(C,{className:"title_wrapper",children:e}),i&&(0,I.jsx)(R,{className:"link_wrapper",children:i})]}))},S=e(58957),B=k.ZP.div(o||(o=(0,y.Z)(["\n  h2,\n  a {\n    margin: 0;\n  }\n\n  h2 {\n    color: ",";\n    font-size: 25px;\n    line-height: 30px;\n    font-weight: 700;\n\n    @media (max-width: 480px) {\n      font-size: 17px;\n      line-height: 21px;\n    }\n  }\n\n  a {\n    color: ",";\n    font-size: 17px;\n    line-height: 21px;\n    font-weight: 400;\n\n    @media (max-width: 480px) {\n      font-size: 15px;\n      line-height: 20px;\n    }\n\n    &:hover {\n      color: ",";\n    }\n  }\n"])),(0,S.R)("text.0","#2C2C2C"),(0,S.R)("text.0","#2C2C2C"),(0,S.R)("primary.0","#008489")),E=function(n){var t=Object.assign({},((0,_.Z)(n),n));return(0,I.jsx)(B,{children:(0,I.jsx)(F,(0,Z.Z)({},t))})},L=e(83629),T=e(40631),H=e(22939),q=function(){var n,t=(0,T.Z)("/data/top-hotel.json"),e=t.data,i=t.loading,a=(0,L.Z)().width,r=e;return e&&a<=767&&(r=e.slice(0,4),n=4),e&&a>=768&&(r=e.slice(0,6),n=6),e&&a>=992&&(r=e.slice(0,8),n=8),e&&a>=1200&&(r=e.slice(0,10),n=10),(0,I.jsxs)(b.Z,{fluid:!0,children:[(0,I.jsx)(E,{title:(0,I.jsx)(g.Z,{content:"Book top-rated Villas in Lonavala"}),link:(0,I.jsx)(f.Z,{link:H.B3,content:"Show all"})}),(0,I.jsx)(v.Z,{link:H.JL,columnWidth:[1,.5,1/3,1/4,.2],data:r,loading:i,limit:n,placeholder:(0,I.jsx)(w.xB,{})})]})},M=e(43206),O=e(386),W=(e(3701),k.ZP.div(d||(d=(0,y.Z)(["\n  .glide__slides {\n    margin-bottom: 0;\n  }\n  .glide__controls {\n    .glide__prev--area,\n    .glide__next--area {\n      cursor: pointer;\n    }\n  }\n"])))),G=k.ZP.li(l||(l=(0,y.Z)(["\n  position: relative;\n"]))),V=k.ZP.div(s||(s=(0,y.Z)(["\n  display: inline-block;\n"]))),Y=k.ZP.div(p||(p=(0,y.Z)([""]))),A=k.ZP.div(c||(c=(0,y.Z)([""]))),U=k.ZP.button(x||(x=(0,y.Z)(["\n  cursor: pointer;\n  width: 10px;\n  height: 10px;\n  margin: 4px;\n  border: 0;\n  padding: 0;\n  outline: none;\n  border-radius: 50%;\n  background-color: #d6d6d6;\n\n  &:hover,\n  &.glide__bullet--active {\n    background-color: #869791;\n  }\n"]))),J=k.ZP.button(h||(h=(0,y.Z)(["\n  cursor: pointer;\n  margin: 10px 3px;\n"]))),K=W,X=function(n){var t=n.className,e=n.children,i=n.options,a=n.controls,r=n.prevButton,o=n.nextButton,d=n.bullets,l=n.numberOfBullets,s=n.carouselSelector,p=["glide"];t&&p.push(t);for(var c=[],x=0;x<l;x++)c.push(x);return(0,m.useEffect)((function(){new O.Z(s?"#".concat(s):"#glide",(0,Z.Z)({},i)).mount()}),[s,i]),(0,I.jsxs)(K,{className:p.join(" "),id:s||"glide",children:[(0,I.jsx)("div",{className:"glide__track","data-glide-el":"track",children:(0,I.jsx)("ul",{className:"glide__slides",children:e})}),a&&(0,I.jsxs)(Y,{className:"glide__controls","data-glide-el":"controls",children:[(0,I.jsx)(V,{className:"glide__prev--area","data-glide-dir":"<",children:r||(0,I.jsx)(J,{children:"Prev"})}),(0,I.jsx)(V,{className:"glide__next--area","data-glide-dir":">",children:o||(0,I.jsx)(J,{children:"Next"})})]}),d&&(0,I.jsx)(A,{className:"glide__bullets","data-glide-el":"controls[nav]",children:(0,I.jsx)(m.Fragment,{children:c.map((function(n){return(0,I.jsx)(U,{className:"glide__bullet","data-glide-dir":"=".concat(n)},n)}))})})]})},Q=function(n){var t=n.children;return(0,I.jsx)(G,{className:"glide__slide",children:t})};X.defaultProps={controls:!0};var $,nn,tn,en,an,rn,on=X,dn=e(56666),ln=e(30734),sn=e(86822),pn=(e(76032),e(6633)),cn=e(59717),xn=e(43991),hn=(e(66325),e(82284)),un=e(91099),mn=e(12632),gn=e(62281),fn=k.ZP.div($||($=(0,y.Z)(["\n  width: 100%;\n  min-height: 100vh;\n  position: relative;\n  background-color: ",";\n\n  @media (max-width: 991px) {\n    > div {\n      max-width: 100%;\n    }\n  }\n\n  @media (max-width: 480px) {\n    min-height: 76vh;\n  }\n\n  .glide,\n  .glide__track,\n  .glide__slides {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    pointer-events: all;\n  }\n\n  .glide__slide {\n    img {\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n    }\n  }\n\n  .glide__bullets {\n    position: absolute;\n    bottom: 30px;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    z-index: 1;\n  }\n\n  .glide__bullet {\n    width: 7px;\n    height: 7px;\n    background-color: ",";\n    transition: width 0.3s ease;\n  }\n\n  .glide__bullet--active {\n    width: 25px;\n    border-radius: 8px;\n    background-color: ",";\n  }\n\n  > div {\n    position: relative;\n    min-height: 100vh;\n\n    @media (max-width: 480px) {\n      min-height: 76vh;\n    }\n  }\n\n  &:after {\n    display: block;\n    content: '';\n    width: 100%;\n    height: 60%;\n    position: absolute;\n    bottom: 0;\n    background: linear-gradient(transparent, rgba(0, 0, 0, 0.5));\n    pointer-events: none;\n    z-index: 0;\n  }\n"])),(0,S.R)("color.1","#ffffff"),(0,S.R)("color.1","#ffffff"),(0,S.R)("color.1","#ffffff")),bn=k.ZP.div(nn||(nn=(0,y.Z)(["\n  width: calc(100% - 60px);\n  padding: 28px 30px 30px;\n  border-radius: 6px;\n  background-color: ",";\n  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.08);\n  position: absolute;\n  bottom: 81px;\n  z-index: 1;\n  opacity: 0.8;\n\n  @media (min-width: 569px) and (max-width: 991px) {\n    width: 414px;\n    left: 30px;\n  }\n\n  @media (max-width: 480px) {\n    width: calc(100% - 30px);\n    padding: 15px;\n    left: 15px;\n\n    > p {\n      display: none;\n    }\n  }\n\n  > div {\n    @media (min-width: 481px) {\n      margin-top: 30px;\n    }\n  }\n\n  h2 {\n    margin-bottom: 10px;\n  }\n"])),(0,S.R)("color.1","#ffffff")),wn=k.ZP.div(tn||(tn=(0,y.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  background-color: ",";\n  border-radius: 3px 0 0 3px;\n  min-height: 60px;\n\n  @media (max-width: 991px) {\n    flex-direction: column;\n  }\n\n  @media (max-width: 480px) {\n    margin-top: 10px;\n  }\n\n  /* submit button style */\n  button[type='submit'].ant-btn {\n    min-width: 157px;\n    height: 60px;\n    color: ",";\n    background-color: ",";\n    border-radius: 0 3px 3px 0;\n    border: 0;\n    box-shadow: none;\n    font-size: 15px;\n    font-weight: 700;\n    text-shadow: none;\n\n    @media (max-width: 991px) {\n      min-width: 100%;\n      border-radius: 0 0 3px 3px;\n    }\n\n    @media (max-width: 480px) {\n      height: 47px;\n    }\n\n    &::after {\n      display: none;\n    }\n\n    &:hover {\n      opacity: 0.85;\n    }\n  }\n"])),(0,S.R)("color.2","#F7F7F7"),(0,S.R)("color.1","#ffffff"),(0,S.R)("primary.0","#008489")),vn=k.ZP.div(en||(en=(0,y.Z)(["\n  display: flex;\n  width: 100%;\n  align-items: center;\n  position: relative;\n\n  .target {\n    right: 10px;\n    left: auto;\n\n    @media (max-width: 480px) {\n      right: 25px;\n    }\n  }\n\n  /* map auto complete style */\n  .map_autocomplete {\n    width: 100%;\n    position: relative;\n\n    &::after {\n      content: '';\n      width: 1px;\n      height: 20px;\n      display: inline-block;\n      position: absolute;\n      top: calc(50% - 10px);\n      right: 0;\n      left: auto;\n      background-color: ",";\n    }\n\n    @media (max-width: 991px) {\n      &::after {\n        top: auto;\n        bottom: 0;\n        height: 1px;\n        width: calc(100% - 40px);\n        left: 20px;\n      }\n    }\n\n    @media (max-width: 480px) {\n      &::after {\n        width: calc(100% - 30px);\n        left: 15px;\n      }\n    }\n\n    input {\n      border: 0;\n      font-size: 15px;\n      font-weight: 400;\n      border-radius: 0;\n      height: 60px;\n      padding: 0 30px 0 40px;\n      background: transparent;\n      color: ",";\n\n      @media (max-width: 480px) {\n        height: 47px;\n        padding: 0 30px 0 36px;\n      }\n\n      &:hover,\n      &:focus {\n        outline: none;\n        box-shadow: none;\n      }\n\n      &::placeholder {\n        color: ",";\n      }\n    }\n  }\n\n  /* date picker style */\n  .date_picker {\n    min-width: calc(250px - 14px);\n    width: calc(100% - 14px);\n    margin: 0 0 0 14px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    @media (max-width: 991px) {\n      justify-content: flex-start;\n      height: 60px;\n    }\n\n    @media (max-width: 480px) {\n      height: 47px;\n    }\n\n    .DayPicker__withBorder {\n      box-shadow: 0 15px 46px -10px rgba(26, 26, 29, 0.3);\n    }\n\n    .DateRangePicker {\n      display: block;\n      width: 100%;\n\n      .DateRangePickerInput {\n        border: 0;\n        padding-right: 0;\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        background: transparent;\n\n        .DateRangePickerInput_clearDates,\n        .DateRangePickerInput_clearDates {\n          &.DateRangePickerInput_clearDates__small {\n            display: none;\n          }\n        }\n\n        .DateInput {\n          width: 100%;\n          padding: 0 15px 0 30px;\n          background: transparent;\n\n          @media (min-width: 569px) and (max-width: 991px) {\n            padding: 0 25px 0 30px;\n          }\n\n          @media (max-width: 568px) {\n            padding: 0 15px 0 25px;\n          }\n\n          .DateInput_fang {\n            display: none;\n          }\n\n          .DateInput_input {\n            padding: 0;\n            font-weight: 400;\n            color: ",";\n            background: transparent;\n\n            &.DateInput_input__focused {\n              border-color: transparent;\n            }\n\n            &::placeholder {\n              color: ",";\n            }\n          }\n        }\n\n        .DateRangePickerInput_arrow {\n          & + .DateInput {\n            input {\n              text-align: right;\n            }\n          }\n        }\n      }\n\n      .DateRangePicker_picker {\n        margin-top: -12px;\n        z-index: 2;\n\n        @media (max-width: 991px) {\n          top: 47px !important;\n        }\n\n        @media (max-width: 320px) {\n          left: -29px !important;\n          .DayPicker,\n          .DayPicker > div > div,\n          .DayPicker > div > div .DayPicker_transitionContainer {\n            width: 294px !important;\n          }\n\n          .DayPicker {\n            .DayPicker_weekHeader {\n              padding: 0 !important;\n            }\n\n            .CalendarMonth {\n              padding: 0 !important;\n            }\n          }\n        }\n      }\n    }\n  }\n\n  /* view with popup component style */\n  .view_with__popup {\n    max-width: 100%;\n    position: relative;\n\n    &::before {\n      content: '';\n      width: 1px;\n      height: 20px;\n      display: inline-block;\n      position: absolute;\n      top: calc(50% - 10px);\n      right: auto;\n      left: 0;\n      z-index: 1;\n      background-color: ",";\n\n      @media (max-width: 991px) {\n        top: 0;\n        bottom: auto;\n        height: 1px;\n        width: calc(100% - 40px);\n        left: 20px;\n      }\n\n      @media (max-width: 480px) {\n        width: calc(100% - 30px);\n        left: 15px;\n      }\n    }\n\n    /* popu handler style */\n    .popup_handler {\n      width: calc(100% - 14px);\n      margin-left: 14px;\n\n      button.ant-btn {\n        min-width: auto;\n        width: 100%;\n        height: 60px;\n        border: 0;\n        padding: 0 30px;\n        border-radius: 0;\n        box-shadow: none;\n        font-weight: 400;\n        font-size: 15px;\n        color: ",";\n        background-color: ",";\n\n        @media (max-width: 991px) {\n          text-align: left;\n          padding: 0 25px 0 30px;\n        }\n\n        @media (max-width: 480px) {\n          height: 47px;\n          padding: 0 20px 0 25px;\n        }\n\n        &::after {\n          display: none;\n        }\n      }\n    }\n\n    &.room_guest {\n      .popup_handler {\n        button.ant-btn {\n          display: flex;\n          align-items: center;\n          justify-content: space-between;\n        }\n      }\n    }\n\n    &.active {\n      .popup_container {\n        margin-top: 0;\n        padding: 22px;\n        box-shadow: 0 15px 46px -10px rgba(26, 26, 29, 0.3);\n\n        @media (max-width: 991px) {\n          margin-top: 0;\n        }\n\n        @media (max-width: 480px) {\n          min-width: auto;\n        }\n      }\n    }\n  }\n\n  /* icon style */\n  > svg {\n    position: absolute;\n    z-index: 1;\n    top: auto;\n    &.map-marker,\n    &.calendar,\n    &.user-friends {\n      left: 15px;\n      right: auto;\n      fill: ",";\n    }\n\n    &.calendar {\n      @media (max-width: 480px) {\n        width: 14px;\n        height: 14px;\n      }\n    }\n\n    &.user-friends {\n      width: 17px;\n      height: 17px;\n      @media (max-width: 480px) {\n        width: 16px;\n        height: 16px;\n      }\n    }\n\n    &.caret-down {\n      right: 12px;\n      left: auto;\n      fill: ",";\n\n      @media (max-width: 991px) {\n        right: 20px;\n      }\n\n      @media (max-width: 991px) {\n        right: 15px;\n      }\n    }\n  }\n"])),(0,S.R)("border.3","#E6E6E6"),(0,S.R)("text.0","#2C2C2C"),(0,S.R)("text.0","#2C2C2C"),(0,S.R)("text.0","#2C2C2C"),(0,S.R)("text.0","#2C2C2C"),(0,S.R)("border.3","#E6E6E6"),(0,S.R)("text.0","#2C2C2C"),(0,S.R)("color.2","#F7F7F7"),(0,S.R)("primary.0","#008489"),(0,S.R)("text.1","#909090")),Zn=k.ZP.div(an||(an=(0,y.Z)(["\n  width: 100%;\n\n  strong {\n    font-size: 15px;\n    font-weight: 400;\n    color: ",";\n  }\n"])),(0,S.R)("text.0","#2C2C2C")),_n=k.ZP.div(rn||(rn=(0,y.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n\n  &:last-child {\n    margin-bottom: 5px;\n  }\n\n  .quantity {\n    height: 30px;\n\n    input {\n      font-size: 15px;\n    }\n\n    button.btn svg {\n      width: 18px;\n      height: 18px;\n    }\n  }\n"]))),jn=fn,yn={separator:"-",format:"MM-DD-YYYY",locale:"en"};function kn(){var n=(0,ln.s0)(),t=(0,m.useState)({setStartDate:null,setEndDate:null}),e=(0,u.Z)(t,2),i=e[0],a=e[1],r=(0,m.useState)([]),o=(0,u.Z)(r,2),d=o[0],l=(o[1],(0,m.useState)({room:0,guest:0})),s=(0,u.Z)(l,2),p=s[0],c=s[1],x=function(n){c((0,Z.Z)((0,Z.Z)({},p),{},(0,dn.Z)({},n,p[n]+1)))},h=function(n){if(p[n]<=0)return!1;c((0,Z.Z)((0,Z.Z)({},p),{},(0,dn.Z)({},n,p[n]-1)))},g=function(n,t){var e=n.target.value;c((0,Z.Z)((0,Z.Z)({},p),{},(0,dn.Z)({},t,e)))};return(0,I.jsxs)(wn,{children:[(0,I.jsxs)(vn,{children:[(0,I.jsx)(pn.tpH,{className:"calendar"}),(0,I.jsx)(xn.Z,{item:yn,startDateId:"startDateId-id-home",endDateId:"endDateId-id-home",updateSearchData:function(n){return a(n)},showClearDates:!0,small:!0,numberOfMonths:1})]}),(0,I.jsxs)(vn,{children:[(0,I.jsx)(pn.wN,{className:"user-friends"}),(0,I.jsx)(un.Z,{noView:!0,className:"room_guest",view:(0,I.jsxs)(cn.ZP,{type:"default",children:[(0,I.jsxs)("span",{children:["Room ",p.room>0&&": ".concat(p.room)]}),(0,I.jsx)("span",{children:"-"}),(0,I.jsxs)("span",{children:["Guest",p.guest>0&&": ".concat(p.guest)]})]}),popup:(0,I.jsxs)(Zn,{children:[(0,I.jsxs)(_n,{children:[(0,I.jsx)("strong",{children:"Room"}),(0,I.jsx)(mn.Z,{id:"room",increment:function(){return x("room")},decrement:function(){return h("room")},onChange:function(n){return g(n,"room")},value:p.room})]}),(0,I.jsxs)(_n,{children:[(0,I.jsx)("strong",{children:"Guest"}),(0,I.jsx)(mn.Z,{id:"guest",increment:function(){return x("guest")},decrement:function(){return h("guest")},onChange:function(n){return g(n,"guest")},value:p.guest})]})]})},200)]}),(0,I.jsx)(cn.ZP,{type:"primary",htmlType:"submit",size:"large",onClick:function(){var t=[],e=d?(0,hn.i)(d):[];e&&e.map((function(n,e){return t.push({formattedAddress:n?n.formattedAddress:"",lat:n?n.lat.toFixed(3):null,lng:n?n.lng.toFixed(3):null})}));var a=t?t[0]:{},r={date_range:i,room:p.room,guest:p.guest,location:a},o=(0,gn.lq)(r);n({pathname:H.B3,search:"?".concat((0,sn.fW)(o))})},children:"Find Hotels"})]})}var Dn=function(n){var t=n.searchTitleStyle,e=n.searchDescriptionStyle;return(0,I.jsxs)(jn,{children:[(0,I.jsx)(on,{controls:!1,options:{gap:0,autoplay:5e3,animationDuration:1e3},bullets:!0,numberOfBullets:3,children:(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Q,{children:(0,I.jsx)("img",{src:"/images/banner/1.jpg",alt:"Banner 1"})}),(0,I.jsx)(Q,{children:(0,I.jsx)("img",{src:"/images/banner/2.jpg",alt:"Banner 2"})}),(0,I.jsx)(Q,{children:(0,I.jsx)("img",{src:"/images/banner/3.jpg",alt:"Banner 3"})})]})}),(0,I.jsx)(b.Z,{children:(0,I.jsxs)(bn,{children:[(0,I.jsx)(g.Z,(0,Z.Z)((0,Z.Z)({},t),{},{content:"Latest reviews. Lowest prices."})),(0,I.jsx)(M.Z,(0,Z.Z)((0,Z.Z)({},e),{},{content:"Book Royal Villas for your memorable stays at Lonavala."})),(0,I.jsx)(kn,{})]})})]})};Dn.defaultProps={searchTitleStyle:{color:"#2C2C2C",fontSize:["20px","24px","28px"],lineHeight:["28px","30px","30px"],mb:"9px"},searchDescriptionStyle:{color:"#2C2C2C",fontSize:"15px",lineHeight:["25px","25px","18px"],mb:"30px"}};var Pn,Cn,Rn,Nn,In=Dn,zn=(e(43821),k.ZP.div(Pn||(Pn=(0,y.Z)(["\n  > a {\n    display: block;\n    height: 370px;\n    position: relative;\n    border-radius: 6px;\n    overflow: hidden;\n\n    > img {\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n      position: absolute;\n      left: 0;\n      top: 0;\n    }\n  }\n"])))),Fn=k.ZP.div(Cn||(Cn=(0,y.Z)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.4);\n  z-index: 2;\n"]))),Sn=k.ZP.h4(Rn||(Rn=(0,y.Z)(["\n  color: ",";\n  font-size: 25px;\n  line-height: 30px;\n  font-weight: 700;\n  text-transform: capitalize;\n  text-align: center;\n  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);\n  @media (max-width: 480px) {\n    font-size: 20px;\n    line-height: 28px;\n  }\n"])),(0,S.R)("color.1","#ffffff")),Bn=k.ZP.div(Nn||(Nn=(0,y.Z)(["\n  color: ",";\n  font-size: 17px;\n  line-height: 21px;\n  font-weight: 400;\n  text-transform: capitalize;\n  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);\n  @media (max-width: 480px) {\n    font-size: 15px;\n  }\n"])),(0,S.R)("color.1","#ffffff")),En=zn,Ln=function(n){var t=n.className,e=n.imageSrc,i=n.title,a=n.link,r=n.meta,o=["image_card"];return t&&o.push(t),(0,I.jsx)(En,{className:o.join(" "),children:(0,I.jsxs)(sn.rU,{to:a,children:[(0,I.jsx)("img",{src:e,alt:i}),(0,I.jsxs)(Fn,{children:[i&&(0,I.jsx)(Sn,{children:i}),r&&(0,I.jsx)(Bn,{children:r})]})]})})};Ln.defaultProps={link:"#"};k.ZP.div(Tn||(Tn=(0,y.Z)(["\n  padding: 52px 0;\n  @media (max-width: 480px) {\n    padding: 30px 0;\n  }\n"]))),k.ZP.div(Hn||(Hn=(0,y.Z)(["\n  .glide__slide {\n    transition: transform 0.3s ease;\n\n    .image_card {\n      > a {\n        @media (max-width: 1600px) {\n          height: 310px;\n        }\n        @media (max-width: 991px) {\n          height: 280px;\n        }\n      }\n    }\n  }\n\n  .glide__controls {\n    margin: 0;\n    padding: 0;\n    opacity: 0;\n    visibility: hidden;\n    transition: opacity 0.3s ease;\n    @media (max-width: 480px) {\n      opacity: 1;\n      visibility: visible;\n    }\n  }\n\n  .glide__prev--area,\n  .glide__next--area {\n    width: 36px;\n    height: 36px;\n    border-radius: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: ",";\n    box-shadow: 0 3px 6px ",";\n    transition: background-color 0.2s ease;\n    position: absolute;\n    top: calc(50% - 36px / 2);\n\n    svg {\n      height: 22px;\n      width: auto;\n      fill: ",";\n    }\n\n    &:hover {\n      background-color: ",";\n      svg {\n        fill: ",";\n      }\n    }\n  }\n\n  .glide__prev--area {\n    left: -18px;\n  }\n\n  .glide__next--area {\n    right: -18px;\n  }\n\n  &:hover {\n    .glide__controls {\n      opacity: 1;\n      visibility: visible;\n    }\n  }\n"])),(0,S.R)("color.1","#ffffff"),(0,S.R)("boxShadow.1","rgba(0, 0, 0, 0.16)"),(0,S.R)("primary.0","#008489"),(0,S.R)("primary.0","#008489"),(0,S.R)("color.1","#ffffff"));var Tn,Hn,qn=e(27098),Mn=(e(80239),function(){var n=(0,m.useContext)(qn.VY);(0,u.Z)(n,2)[1];return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(In,{}),(0,I.jsx)(q,{})]})})},53260:function(){}}]);
//# sourceMappingURL=780.583e0beb.chunk.js.map