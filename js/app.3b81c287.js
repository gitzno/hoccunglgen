(function(){"use strict";var e={568:function(e,n,t){var i=t(963),a=t(252);function s(e,n,t,i,s,r){const c=(0,a.up)("LayoutMain");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(c)])}const r={class:"layout"};function c(e,n,t,i,s,c){const o=(0,a.up)("TheNavbar"),l=(0,a.up)("TheContent");return(0,a.wg)(),(0,a.iD)("div",r,[(0,a.Wm)(o),(0,a.Wm)(l)])}var o=t(577),l=t.p+"img/logoL.63cf5fa0.png",d=t(262);const m=e=>((0,a.dD)("data-v-79440b5e"),e=e(),(0,a.Cn)(),e),u={class:"three col"},g=m((()=>(0,a._)("span",{class:"line"},null,-1))),h=m((()=>(0,a._)("span",{class:"line"},null,-1))),v=m((()=>(0,a._)("span",{class:"line"},null,-1))),p=[g,h,v];function f(e,n,t,i,s,r){return(0,a.wg)(),(0,a.iD)("div",u,[(0,a._)("div",{onClick:n[0]||(n[0]=e=>r.clickHam(-1)),class:"hamburger",id:"hamburger-6"},p)])}var _={name:"hamburgerButton",components:{},props:"number",mounted(){const e=document.querySelector("#hamburger-6");e.addEventListener("click",(()=>{e.classList.toggle("is-active")}))},methods:{clickHam(e){this.number*=e}}},b=t(744);const w=(0,b.Z)(_,[["render",f],["__scopeId","data-v-79440b5e"]]);var k=w;const y=e=>((0,a.dD)("data-v-44807fed"),e=e(),(0,a.Cn)(),e),A={class:"navbar"},I={class:"mini-nav"},D=y((()=>(0,a._)("div",{class:"logo-nav"},[(0,a._)("img",{src:l,alt:""})],-1))),x={key:0,id:"menu"},C=["href"],T={name:"TheNavbar",components:{hamburgerButton:k},data(){return{showRes:window.innerWidth>1e3,contentsz:[]}},mounted(){window.addEventListener("resize",this.onResize),window.addEventListener("scroll",this.onScroll)},methods:{onResize(){this.showRes=window.innerWidth>1e3}}};var M=Object.assign(T,{setup(e){const n=(0,d.iH)(!0),t=(0,d.iH)([{id:0,linkId:"#section-0",text:"Trang Chủ",isActive:!1},{id:1,linkId:"#section-1",text:"Giới Thiệu",isActive:!1},{id:2,linkId:"#section-2",text:"Thông Tin Dịch Vụ",isActive:!1},{id:3,linkId:"#section-3",text:"Liên Hệ",isActive:!1}]);return(e,s)=>((0,a.wg)(),(0,a.iD)("div",A,[(0,a._)("div",I,[(0,a.Wm)(k,{onClick:s[0]||(s[0]=e=>n.value=!n.value),class:"buttonHam"}),D]),(0,a.Wm)(i.uT,null,{default:(0,a.w5)((()=>[!n.value||e.showRes?((0,a.wg)(),(0,a.iD)("ul",x,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.value,(e=>((0,a.wg)(),(0,a.iD)("li",{key:e.id},[(0,a._)("a",{class:(0,o.C_)({active:1==e.isActive}),href:e.linkId},(0,o.zw)(e.text),11,C)])))),128))])):(0,a.kq)("",!0)])),_:1})]))}});const W=(0,b.Z)(M,[["__scopeId","data-v-44807fed"]]);var U=W;const q={class:"contents"},L={id:"section-0"},H={id:"section-1"},O={id:"section-z"},S={id:"section-2"},Z={id:"section-z"},V={id:"section-3"};function j(e,n,t,i,s,r){const c=(0,a.up)("TheHomepage"),o=(0,a.up)("TheAbout"),l=(0,a.up)("TheAboutTeam"),d=(0,a.up)("TheService"),m=(0,a.up)("TheService2"),u=(0,a.up)("TheForm"),g=(0,a.up)("TheFooter");return(0,a.wg)(),(0,a.iD)("div",q,[(0,a._)("section",L,[(0,a.Wm)(c)]),(0,a._)("section",H,[(0,a.Wm)(o)]),(0,a._)("section",O,[(0,a.Wm)(l)]),(0,a._)("section",S,[(0,a.Wm)(d)]),(0,a._)("section",Z,[(0,a.Wm)(m)]),(0,a._)("section",V,[(0,a.Wm)(u)]),(0,a.Wm)(g)])}var B=t.p+"img/homepage.b89e6b84.png";const E=e=>((0,a.dD)("data-v-17c7e050"),e=e(),(0,a.Cn)(),e),G={class:"contents"},F=E((()=>(0,a._)("div",{class:"bg-img"},[(0,a._)("img",{src:B,alt:""})],-1))),z={class:"line-2 contents-Child"};function N(e,n,t,i,s,r){const c=(0,a.up)("headerMain"),o=(0,a.up)("frame"),l=(0,a.up)("buttonMain");return(0,a.wg)(),(0,a.iD)("div",G,[F,(0,a.Wm)(c,{style:{"margin-left":"20px","margin-bottom":"10px"},class:"line-1 contents-Child",text:"Cùng L-Gen"}),(0,a._)("div",z,[(0,a.Wm)(c,{style:{"margin-left":"10px"},class:"frameTextss",text:"chinh phục"}),(0,a.Wm)(o,{class:"frameTextss",text:"UI/UX"})]),(0,a.Wm)(l,{class:"btn-main",src:"#section-1",text:"Khám phá thêm"})])}const Q={id:"textHeader"};function K(e,n,t,i,s,r){return(0,a.wg)(),(0,a.iD)("div",Q,(0,o.zw)(t.text),1)}var R={name:"chuChinh",props:["text"],components:{}};const X=(0,b.Z)(R,[["render",K],["__scopeId","data-v-1d046327"]]);var Y=X;const P=e=>((0,a.dD)("data-v-730ecea8"),e=e(),(0,a.Cn)(),e),J={class:"frameText"},$=P((()=>(0,a._)("div",{class:"square top left"},null,-1))),ee=P((()=>(0,a._)("div",{class:"square top right"},null,-1))),ne=P((()=>(0,a._)("div",{class:"square bottom right"},null,-1))),te=P((()=>(0,a._)("div",{class:"square bottom left"},null,-1)));function ie(e,n,t,i,s,r){return(0,a.wg)(),(0,a.iD)("div",J,[(0,a.Uk)((0,o.zw)(t.text)+" ",1),$,ee,ne,te])}var ae={props:["text"],components:{}};const se=(0,b.Z)(ae,[["render",ie],["__scopeId","data-v-730ecea8"]]);var re=se;const ce=["href"],oe={key:1};function le(e,n,t,i,s,r){return(0,a.wg)(),(0,a.iD)("div",{id:"textButton",style:(0,o.j5)(r.style)},[t.src?((0,a.wg)(),(0,a.iD)("a",{key:0,href:t.src},(0,o.zw)(t.text),9,ce)):(0,a.kq)("",!0),t.src?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",oe,(0,o.zw)(t.text),1))],4)}var de={name:"buttonMain",props:["text","src","color"],computed:{style(){return this.color}}};const me=(0,b.Z)(de,[["render",le],["__scopeId","data-v-4b3fbb46"]]);var ue=me,ge={components:{headerMain:Y,frame:re,buttonMain:ue}};const he=(0,b.Z)(ge,[["render",N],["__scopeId","data-v-17c7e050"]]);var ve=he,pe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAA8CAYAAAB1odqiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGGSURBVHgB7VntUcMwDH3h+p9ugJmAbNCwARuEDcoGsAFskG5QNqBMUDpB0wmaDYpM5JIvx3abcOVO7+5dviQ9W0nuZDkCMCUuUUdBzIlfxA0ffZAQ74gxUTGreDMnBwe3xKeOAOABvxD3HnFSX8GqcIr6jLYB/umEHQseqQuKuCDeokx55rAvmMfryGJ4w8H1u3jgmfhgRXwnfvKACpwIhf7U6WczDAyd8rVFTGEkKLS/xhQjI2sIxiHOVzgf+xDjIQSDIIIiKIIiKIIieIGCtqptjrLw7cIU9ZIyt9jp+/fNm5OeoAp+8LX7wZ+n1DZDs5jpQkhKB0GzagsqgOU/vAjBk1dE/0bwLIigCIqgCIqgCI4jmDiuB8Uj2t1E3fpSGAEx7H3t9ZCiponu2w/vbWVHldFXDRV+twOSDj9d1yxgX/CsmDvU+97HeugDYZ190yN9DvA7sH2Q4BLtlCn4byVkxsnVQH+Few0x44B9sTLzDuecpqLCHOUW0A7h0LGu0d4O2nwDeVLDnQGeHmYAAAAASUVORK5CYII=";const fe=e=>((0,a.dD)("data-v-c4d7a8e0"),e=e(),(0,a.Cn)(),e),_e={class:"contents-80"},be={id:"header"},we=fe((()=>(0,a._)("img",{src:pe,alt:""},null,-1))),ke={id:"content"},ye={id:"frameImgs"},Ae=fe((()=>(0,a._)("div",{class:"textContent"},[(0,a.Uk)(" L-Gen là nhóm gồm 5 bạn trẻ có niềm đam mê dành cho công nghệ."),(0,a._)("br"),(0,a._)("br"),(0,a.Uk)(" Với mong muốn hỗ trợ các bạn đang học cách sử dụng Figma nói chung và các bạn học chuyên ngành Interaction design nói riêng, nhóm đã xây dựng nên một cộng đồng giúp đỡ với nguồn nhân lực vô cùng uy tín và chất lượng."),(0,a._)("br"),(0,a._)("br"),(0,a.Uk)(" Qua các khóa học hay dịch vụ review, chúng mình hi vọng rằng các bạn sẽ có thể trở nên thành thạo công cụ này và đặc biệt, dành yêu thích dành cho thiết kế tương tác")],-1)));function Ie(e,n,t,i,s,r){const c=(0,a.up)("headerMain"),o=(0,a.up)("frameImg");return(0,a.wg)(),(0,a.iD)("div",_e,[(0,a._)("div",be,[(0,a.Wm)(c,{class:"",text:"Về nhóm"}),we]),(0,a._)("div",ke,[(0,a._)("div",ye,[(0,a.Wm)(o,{id:"frameImg",img:"0",pointer:"0"})]),Ae])])}var De=t.p+"img/i1.619f7a20.png",xe=t.p+"img/i2.1db7a580.png",Ce=t.p+"img/i3.8a7aeb9f.png",Te=t.p+"img/i4.5d9eddef.png",Me=t.p+"img/i5.3985beba.png",We=t.p+"img/course.a3a3fe3c.png",Ue=t.p+"img/review.a729251d.png",qe=t.p+"img/cursor-alt-pointer-mouse.54e664b4.svg",Le=t.p+"img/1.8952bece.svg",He=t.p+"img/2.03f3883f.svg",Oe=t.p+"img/3.c59c7dfb.svg",Se=t.p+"img/4.99b1dc4c.svg",Ze=t.p+"img/5.cd4bafba.svg";const Ve=e=>((0,a.dD)("data-v-1cdc8c51"),e=e(),(0,a.Cn)(),e),je={class:"frameImg"},Be={class:"frameChild"},Ee={key:0,src:l,class:"onlyImgHere"},Ge={key:1,src:De},Fe={key:2,src:xe},ze={key:3,src:Ce},Ne={key:4,src:Te},Qe={key:5,src:Me},Ke={key:6,src:We},Re={key:7,src:Ue},Xe=Ve((()=>(0,a._)("div",{class:"square top left"},null,-1))),Ye=Ve((()=>(0,a._)("div",{class:"square top right"},null,-1))),Pe=Ve((()=>(0,a._)("div",{class:"square bottom right"},null,-1))),Je=Ve((()=>(0,a._)("div",{class:"square bottom left"},null,-1))),$e={key:0,class:"pointer bottom right"},en={key:0,src:qe,alt:""},nn={class:"pointername bottom right"},tn={key:0,src:Le,alt:""},an={key:1,src:He,alt:""},sn={key:2,src:Oe,alt:""},rn={key:3,src:Se,alt:""},cn={key:4,src:Ze,alt:""};function on(e,n,t,i,s,r){return(0,a.wg)(),(0,a.iD)("div",je,[(0,a._)("div",Be,["0"===t.img?((0,a.wg)(),(0,a.iD)("img",Ee)):(0,a.kq)("",!0),"i1"===t.img?((0,a.wg)(),(0,a.iD)("img",Ge)):(0,a.kq)("",!0),"i2"===t.img?((0,a.wg)(),(0,a.iD)("img",Fe)):(0,a.kq)("",!0),"i3"===t.img?((0,a.wg)(),(0,a.iD)("img",ze)):(0,a.kq)("",!0),"i4"===t.img?((0,a.wg)(),(0,a.iD)("img",Ne)):(0,a.kq)("",!0),"i5"===t.img?((0,a.wg)(),(0,a.iD)("img",Qe)):(0,a.kq)("",!0),"i6"===t.img?((0,a.wg)(),(0,a.iD)("img",Ke)):(0,a.kq)("",!0),"i7"===t.img?((0,a.wg)(),(0,a.iD)("img",Re)):(0,a.kq)("",!0)]),Xe,Ye,Pe,Je,0==t.pointer?((0,a.wg)(),(0,a.iD)("div",$e,["0"==t.pointer?((0,a.wg)(),(0,a.iD)("img",en)):(0,a.kq)("",!0)])):(0,a.kq)("",!0),(0,a._)("div",nn,["1"==t.pointer?((0,a.wg)(),(0,a.iD)("img",tn)):(0,a.kq)("",!0),"2"==t.pointer?((0,a.wg)(),(0,a.iD)("img",an)):(0,a.kq)("",!0),"3"==t.pointer?((0,a.wg)(),(0,a.iD)("img",sn)):(0,a.kq)("",!0),"4"==t.pointer?((0,a.wg)(),(0,a.iD)("img",rn)):(0,a.kq)("",!0),"5"==t.pointer?((0,a.wg)(),(0,a.iD)("img",cn)):(0,a.kq)("",!0)])])}var ln={props:["img","pointer"],components:{},methods:{getPhoto(){return this.img}}};const dn=(0,b.Z)(ln,[["render",on],["__scopeId","data-v-1cdc8c51"]]);var mn=dn,un={components:{headerMain:Y,frameImg:mn}};const gn=(0,b.Z)(un,[["render",Ie],["__scopeId","data-v-c4d7a8e0"]]);var hn=gn;const vn=e=>((0,a.dD)("data-v-09a8129e"),e=e(),(0,a.Cn)(),e),pn={class:"contents-80"},fn={id:"header"},_n=vn((()=>(0,a._)("img",{src:pe,alt:""},null,-1))),bn={id:"content-Member"},wn={id:"frameImgs-Member"},kn=vn((()=>(0,a._)("div",{class:"member-text"},[(0,a._)("div",{class:"name"},"Cấn Nguyễn Bảo Châu"),(0,a._)("div",{class:"role"},"Leader")],-1))),yn={id:"frameImgs-Member"},An=vn((()=>(0,a._)("div",{class:"member-text"},[(0,a._)("div",{class:"name"},"Vương Xuân Quân"),(0,a._)("div",{class:"role"},"HR, customer manager")],-1))),In={id:"frameImgs-Member"},Dn=vn((()=>(0,a._)("div",{class:"member-text"},[(0,a._)("div",{class:"name"},"Lương Hoài Nam"),(0,a._)("div",{class:"role"},"Financial manager")],-1))),xn={id:"frameImgs-Member"},Cn=vn((()=>(0,a._)("div",{class:"member-text"},[(0,a._)("div",{class:"name"},"Nguyễn Thị Khánh Linh"),(0,a._)("div",{class:"role"},"Expertise manager (UI)")],-1))),Tn={id:"frameImgs-Member"},Mn=vn((()=>(0,a._)("div",{class:"member-text"},[(0,a._)("div",{class:"name"},"Trần Đức Anh"),(0,a._)("div",{class:"role"},"Expertise manager (UX)")],-1)));function Wn(e,n,t,i,s,r){const c=(0,a.up)("headerMain"),o=(0,a.up)("frameImg");return(0,a.wg)(),(0,a.iD)("div",pn,[(0,a._)("div",fn,[(0,a.Wm)(c,{class:"",text:"Về thành viên"}),_n]),(0,a._)("div",bn,[(0,a._)("div",wn,[(0,a.Wm)(o,{id:"frameImg",img:"i1",pointer:"1"}),kn]),(0,a._)("div",yn,[(0,a.Wm)(o,{id:"frameImg",img:"i2",pointer:"2"}),An]),(0,a._)("div",In,[(0,a.Wm)(o,{id:"frameImg",img:"i3",pointer:"3"}),Dn]),(0,a._)("div",xn,[(0,a.Wm)(o,{id:"frameImg",img:"i4",pointer:"4"}),Cn]),(0,a._)("div",Tn,[(0,a.Wm)(o,{id:"frameImg",img:"i5",pointer:"5"}),Mn])])])}var Un={components:{headerMain:Y,frameImg:mn}};const qn=(0,b.Z)(Un,[["render",Wn],["__scopeId","data-v-09a8129e"]]);var Ln=qn;const Hn=e=>((0,a.dD)("data-v-22bd6567"),e=e(),(0,a.Cn)(),e),On={class:"contents-80 course"},Sn={id:"content"},Zn={class:"textContent headercourse2"},Vn={id:"header",class:"headercourse"},jn=Hn((()=>(0,a._)("img",{src:pe,alt:""},null,-1))),Bn={id:"frameImgs"},En={class:"textContent"},Gn={id:"header",class:"headercourse headercourse3"},Fn=Hn((()=>(0,a._)("img",{src:pe,alt:""},null,-1))),zn=Hn((()=>(0,a._)("br",null,null,-1))),Nn=Hn((()=>(0,a._)("br",null,null,-1))),Qn=Hn((()=>(0,a._)("br",null,null,-1))),Kn=Hn((()=>(0,a._)("br",null,null,-1))),Rn=Hn((()=>(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("span",null,"50.000 VNĐ/khóa")]),(0,a._)("li",null,[(0,a.Uk)(" Phụ thu "),(0,a._)("span",null,"20.000 VNĐ/video"),(0,a.Uk)(" (nếu kèm theo mentor hướng dẫn trực tiếp) ")])],-1))),Xn={class:"btn-group"},Yn=Hn((()=>(0,a._)("br",null,null,-1)));function Pn(e,n,t,i,s,r){const c=(0,a.up)("headerMain"),o=(0,a.up)("frameImg"),l=(0,a.up)("buttonMain");return(0,a.wg)(),(0,a.iD)("div",On,[(0,a._)("div",Sn,[(0,a._)("div",Zn,[(0,a._)("div",Vn,[(0,a.Wm)(c,{class:"",text:"Khóa học"}),jn])]),(0,a._)("div",Bn,[(0,a.Wm)(o,{id:"frameImg",img:"i6",pointer:"0"})]),(0,a._)("div",En,[(0,a._)("div",Gn,[(0,a.Wm)(c,{class:"",text:"Khóa học"}),Fn]),(0,a.Uk)(" Đây là khóa học căn bản dành cho các bạn đang muốn học về cách sử dụng công cụ Figma."),zn,Nn,(0,a.Uk)(" Giá tiền: "),Qn,Kn,Rn,(0,a._)("div",Xn,[(0,a.Wm)(l,{class:"btn-course",color:"background-color: #0FA958; color: white;",text:"Xem lộ trình"}),(0,a.Wm)(l,{class:"btn-course",src:"#section-3",text:"Liên hệ ngay"})]),Yn])])])}var Jn={components:{headerMain:Y,frameImg:mn,buttonMain:ue}};const $n=(0,b.Z)(Jn,[["render",Pn],["__scopeId","data-v-22bd6567"]]);var et=$n;const nt=e=>((0,a.dD)("data-v-587df2df"),e=e(),(0,a.Cn)(),e),tt={class:"contents-80 course"},it={id:"content"},at={class:"textContent newtextContent"},st={id:"header",class:"headercourse"},rt=nt((()=>(0,a._)("img",{src:pe,alt:""},null,-1))),ct=nt((()=>(0,a._)("br",null,null,-1))),ot=nt((()=>(0,a._)("br",null,null,-1))),lt=nt((()=>(0,a._)("br",null,null,-1))),dt=nt((()=>(0,a._)("br",null,null,-1))),mt=nt((()=>(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("span",null,"100.000 VNĐ/dự án")]),(0,a._)("li",null,[(0,a._)("span",null,"20.000 VNĐ/giờ"),(0,a.Uk)(" (thời gian tính kể từ khi confirm, có link Google Meet để theo dõi) ")])],-1))),ut={class:"btn-group"},gt=nt((()=>(0,a._)("br",null,null,-1))),ht={id:"frameImgs"};function vt(e,n,t,i,s,r){const c=(0,a.up)("headerMain"),o=(0,a.up)("buttonMain"),l=(0,a.up)("frameImg");return(0,a.wg)(),(0,a.iD)("div",tt,[(0,a._)("div",it,[(0,a._)("div",at,[(0,a._)("div",st,[(0,a.Wm)(c,{class:"",text:"Dịch vụ review"}),rt]),(0,a.Uk)(" Với dịch vụ này, chúng mình sẽ hỗ trợ bạn review các báo cáo nghiên cứu hoặc các sản phẩm UI."),ct,ot,(0,a.Uk)(" Giá tiền: "),lt,dt,mt,(0,a._)("div",ut,[(0,a.Wm)(o,{class:"btn-course",src:"#section-3",text:"Liên hệ ngay"})]),gt]),(0,a._)("div",ht,[(0,a.Wm)(l,{id:"frameImg",img:"i7",pointer:"0"})])])])}var pt={components:{headerMain:Y,frameImg:mn,buttonMain:ue}};const ft=(0,b.Z)(pt,[["render",vt],["__scopeId","data-v-587df2df"]]);var _t=ft,bt=t.p+"img/contact.1f833786.png";const wt=e=>((0,a.dD)("data-v-73821b04"),e=e(),(0,a.Cn)(),e),kt={class:"newDiv",style:{width:"100%",display:"flex","justify-content":"center"}},yt=wt((()=>(0,a._)("div",{class:"bg-img"},[(0,a._)("img",{src:bt,alt:""})],-1))),At={class:"contents-80 course",style:{}},It={id:"content",style:{"z-index":"1"}},Dt={class:"textContent newtextContent"},xt={id:"header",class:"headercourse"},Ct=wt((()=>(0,a._)("img",{src:pe,alt:""},null,-1)));function Tt(e,n,t,i,s,r){const c=(0,a.up)("headerMain"),o=(0,a.up)("formSendMail");return(0,a.wg)(),(0,a.iD)("div",kt,[yt,(0,a._)("div",At,[(0,a._)("div",It,[(0,a._)("div",Dt,[(0,a._)("div",xt,[(0,a.Wm)(c,{class:"",text:"Liên lạc ngay"}),Ct]),(0,a.Wm)(o)])])])])}const Mt={class:"form-MailJS"},Wt=(0,a.uE)('<label class="label-form">Tên của bạn*</label><input type="text" name="from_name" placeholder="L-Gen"><label class="label-form">Email*</label><input type="email" name="yourmail" placeholder="hoccunglgen@gmail.com"><label class="label-form">Tin nhắn cho chúng mình*</label><textarea rows="4" name="message" placeholder="Nhập nội dung tin nhắn ở đây!"></textarea><div class="btn_submit"><input type="submit" value="Gửi tin nhắn"></div>',7),Ut=[Wt];function qt(e,n,t,s,r,c){return(0,a.wg)(),(0,a.iD)("div",Mt,[(0,a._)("form",{ref:"form",onSubmit:n[0]||(n[0]=(0,i.iM)(((...e)=>c.sendEmail&&c.sendEmail(...e)),["prevent"]))},Ut,544)])}var Lt=t(101),Ht={components:{},methods:{sendEmail(){""!=this.$refs.form.from_name.value&&""!=this.$refs.form.yourmail.value&&""!=this.$refs.form.message.value?Lt.ZP.sendForm("service_lnnjib8","template_5v3vymz",this.$refs.form,"0yO3JCHkQSA8hVtFu").then((e=>{console.log("SUCCESS!",e),alert("Send email complete!")}),(e=>{console.log("FAILED...",e.text),alert("Send false complete!")})):alert("Điền vào đầy đủ các trường bạn ơi!")}}};const Ot=(0,b.Z)(Ht,[["render",qt]]);var St=Ot,Zt={components:{headerMain:Y,formSendMail:St}};const Vt=(0,b.Z)(Zt,[["render",Tt],["__scopeId","data-v-73821b04"]]);var jt=Vt;const Bt=e=>((0,a.dD)("data-v-722b9c28"),e=e(),(0,a.Cn)(),e),Et=Bt((()=>(0,a._)("div",{class:"all-footer"},[(0,a._)("div",{class:"footer-web-lgen"},[(0,a._)("div",{class:"logoLgen"},[(0,a._)("div",{class:"frame-logolgen"},[(0,a._)("img",{src:l,alt:""})])]),(0,a._)("div",{class:"contact-footer"},[(0,a._)("ul",null,[(0,a._)("li",{class:"address-logo"},[(0,a.Uk)("Đại học FPT, Khu Công nghệ cao Hòa Lạc,"),(0,a._)("br"),(0,a.Uk)(" KM 29 Đại lộ Thăng Long, Hà Nội, Việt Nam.")]),(0,a._)("li",{class:"mail-logo"},"hoccunglgen@gmail.com")])]),(0,a._)("iframe",{src:"https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhoccunglgen&tabs&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId",width:"340",style:{border:"none",overflow:"hidden"},scrolling:"no",frameborder:"0",allowfullscreen:"true",allow:"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"})])],-1))),Gt=Bt((()=>(0,a._)("div",{class:"gitzno"},"@gitzno",-1)));function Ft(e,n,t,i,s,r){return(0,a.wg)(),(0,a.iD)(a.HY,null,[Et,Gt],64)}var zt={components:{}};const Nt=(0,b.Z)(zt,[["render",Ft],["__scopeId","data-v-722b9c28"]]);var Qt=Nt,Kt={name:"TheContent",components:{TheHomepage:ve,TheAbout:hn,TheAboutTeam:Ln,TheService:et,TheService2:_t,TheForm:jt,TheFooter:Qt}};const Rt=(0,b.Z)(Kt,[["render",j],["__scopeId","data-v-0d23bfd8"]]);var Xt=Rt,Yt={name:"LayoutMain",components:{TheContent:Xt,TheNavbar:U}};const Pt=(0,b.Z)(Yt,[["render",c]]);var Jt=Pt,$t={name:"App",components:{LayoutMain:Jt}};const ei=(0,b.Z)($t,[["render",s]]);var ni=ei;(0,i.ri)(ni).mount("#app")}},n={};function t(i){var a=n[i];if(void 0!==a)return a.exports;var s=n[i]={exports:{}};return e[i](s,s.exports,t),s.exports}t.m=e,function(){var e=[];t.O=function(n,i,a,s){if(!i){var r=1/0;for(d=0;d<e.length;d++){i=e[d][0],a=e[d][1],s=e[d][2];for(var c=!0,o=0;o<i.length;o++)(!1&s||r>=s)&&Object.keys(t.O).every((function(e){return t.O[e](i[o])}))?i.splice(o--,1):(c=!1,s<r&&(r=s));if(c){e.splice(d--,1);var l=a();void 0!==l&&(n=l)}}return n}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[i,a,s]}}(),function(){t.d=function(e,n){for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.p="/hoccunglgen/"}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,i){var a,s,r=i[0],c=i[1],o=i[2],l=0;if(r.some((function(n){return 0!==e[n]}))){for(a in c)t.o(c,a)&&(t.m[a]=c[a]);if(o)var d=o(t)}for(n&&n(i);l<r.length;l++)s=r[l],t.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return t.O(d)},i=self["webpackChunkstudy_with_l_gen"]=self["webpackChunkstudy_with_l_gen"]||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))}();var i=t.O(void 0,[998],(function(){return t(568)}));i=t.O(i)})();
//# sourceMappingURL=app.3b81c287.js.map