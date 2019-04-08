(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(e,t,a){e.exports=a(85)},50:function(e,t,a){},72:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"fetchPosts",function(){return T}),a.d(n,"addPost",function(){return R}),a.d(n,"deletePost",function(){return D}),a.d(n,"editPost",function(){return F}),a.d(n,"fetchProfile",function(){return B}),a.d(n,"addComment",function(){return H});var r=a(0),l=a.n(r),o=a(36),c=a.n(o),s=a(8),i=a(23),m=a(9),u=a(24),p="ADD_COMMENT",f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_POSTS":return t.posts;case"ADD_POST":return[].concat(Object(u.a)(e),[t.post]);case"DELETE_POST":return e.filter(function(e){return e._id!==t.postId});case"EDIT_POST":return e.map(function(e){return e.id===t.id});default:return e}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_PROFILE":return t.profile;default:return e}},E=a(22),g=a(38);var v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"undefined"!==typeof t.postId?Object(g.a)({},e,Object(E.a)({},t.postId,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return[].concat(Object(u.a)(e),[{user:t.author,comment:t.comment,avatar:t.avatar}]);default:return e}}(e[t.postId],t))):e},h=Object(m.c)({posts:f,profile:d,comments:v}),A=a(39),b={posts:[],profile:[],comments:{"5c931440a2348204a3757aa1":[{avatar:"https://lh4.googleusercontent.com/-m8x5OMPYRHA/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3re23iI7fTRFvEimJmmVNK9QRkS_OQ/mo/photo.jpg",comment:"Nice!",user:"Steven Nebo"},{avatar:"https://lh6.googleusercontent.com/-INi8-dBfH3s/AAAAAAAAAAI/AAAAAAAACbk/mQTiQe5Kf9s/photo.jpg",comment:"Awesome picture! ",user:"Yazan Alhalabi"}],"5c9314c6a2348204a3757aa4":[{avatar:"https://lh6.googleusercontent.com/-INi8-dBfH3s/AAAAAAAAAAI/AAAAAAAACbk/mQTiQe5Kf9s/photo.jpg",comment:"What a car! ",user:"Yazan Alhalabi"},{avatar:"https://lh4.googleusercontent.com/-m8x5OMPYRHA/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3re23iI7fTRFvEimJmmVNK9QRkS_OQ/mo/photo.jpg",comment:"Pretty awesome",user:"Steven Nebo"}]}},y=Object(m.d)(h,b,Object(m.a)(A.a)),O=(a(50),a(12)),N=a(13),_=a(15),j=a(14),w=a(16),C=a(11),P=a(10),S=a.n(P),k=a(19),x=a(20),I=a.n(x),T=function(){return function(){var e=Object(k.a)(S.a.mark(function e(t){var a;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("/api/v1/posts");case 2:a=e.sent,t({type:"FETCH_POSTS",posts:a.data});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},R=function(e){return function(){var t=Object(k.a)(S.a.mark(function t(a){var n;return S.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I.a.post("/api/v1/posts",e);case 2:n=t.sent,a({type:"ADD_POST",post:n.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},D=function(e){return function(){var t=Object(k.a)(S.a.mark(function t(a){var n;return S.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I.a.delete("/api/v1/posts/".concat(e));case 2:n=t.sent,a({type:"DELETE_POST",id:e,postId:n.data._id});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},F=function(e,t){return{type:"EDIT_POST",data:e,id:t}},B=function(){return function(){var e=Object(k.a)(S.a.mark(function e(t){var a;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("/api/v1/profile");case 2:a=e.sent,t({type:"FETCH_PROFILE",profile:a.data});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},H=function(e,t,a,n){return{type:p,author:e,avatar:t,comment:a,postId:n}};a(72);var L=function(e){var t=e.profile;return l.a.createElement("div",{className:"main-menu "},l.a.createElement("ul",{className:"nav-container"},l.a.createElement("li",null,l.a.createElement(s.c,{className:"navlink",activeClassName:"activeRoute",exact:!0,to:"/"},"Home")),t.username&&l.a.createElement("li",null,l.a.createElement(s.c,{className:"navlink",activeClassName:"activeRoute",to:"/posts/newpost"},"Add post")),l.a.createElement("li",null,t.username?l.a.createElement("a",{className:"navlink",href:"/auth/logout/"},"Logout"):l.a.createElement(s.c,{className:"navlink",activeClassName:"activeRoute",to:"/login/"},"Login")),t.username&&l.a.createElement("li",null,l.a.createElement(s.c,{className:"navlink",activeClassName:"activeRoute",to:"/profile"},"Profile"))))};function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function U(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var Q=l.a.createElement("g",null),z=l.a.createElement("g",null),V=l.a.createElement("g",null),J=l.a.createElement("g",null),K=l.a.createElement("g",null),Y=l.a.createElement("g",null),W=l.a.createElement("g",null),G=l.a.createElement("g",null),q=l.a.createElement("g",null),X=l.a.createElement("g",null),Z=l.a.createElement("g",null),$=l.a.createElement("g",null),ee=l.a.createElement("g",null),te=l.a.createElement("g",null),ae=l.a.createElement("g",null),ne=function(e){var t=e.svgRef,a=U(e,["svgRef"]);return l.a.createElement("svg",M({id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 512 512",style:{enableBackground:"new 0 0 512 512"},xmlSpace:"preserve",ref:t},a),l.a.createElement("path",{style:{fill:"#FBBB00"},d:"M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256 c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456 C103.821,274.792,107.225,292.797,113.47,309.408z"}),l.a.createElement("path",{style:{fill:"#518EF8"},d:"M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451 c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535 c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z"}),l.a.createElement("path",{style:{fill:"#28B446"},d:"M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512 c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771 c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z"}),l.a.createElement("path",{style:{fill:"#F14336"},d:"M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012 c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0 C318.115,0,375.068,22.126,419.404,58.936z"}),Q,z,V,J,K,Y,W,G,q,X,Z,$,ee,te,ae)},re=l.a.forwardRef(function(e,t){return l.a.createElement(ne,M({svgRef:t},e))});a.p;function le(){return(le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function oe(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var ce=l.a.createElement("g",null),se=l.a.createElement("g",null),ie=l.a.createElement("g",null),me=l.a.createElement("g",null),ue=l.a.createElement("g",null),pe=l.a.createElement("g",null),fe=l.a.createElement("g",null),de=l.a.createElement("g",null),Ee=l.a.createElement("g",null),ge=l.a.createElement("g",null),ve=l.a.createElement("g",null),he=l.a.createElement("g",null),Ae=l.a.createElement("g",null),be=l.a.createElement("g",null),ye=l.a.createElement("g",null),Oe=function(e){var t=e.svgRef,a=oe(e,["svgRef"]);return l.a.createElement("svg",le({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 455.73 455.73",style:{enableBackground:"new 0 0 455.73 455.73"},xmlSpace:"preserve",ref:t},a),l.a.createElement("path",{style:{fill:"#3A559F"},d:"M0,0v455.73h242.704V279.691h-59.33v-71.864h59.33v-60.353c0-43.893,35.582-79.475,79.475-79.475 h62.025v64.622h-44.382c-13.947,0-25.254,11.307-25.254,25.254v49.953h68.521l-9.47,71.864h-59.051V455.73H455.73V0H0z"}),ce,se,ie,me,ue,pe,fe,de,Ee,ge,ve,he,Ae,be,ye)},Ne=l.a.forwardRef(function(e,t){return l.a.createElement(Oe,le({svgRef:t},e))}),_e=(a.p,a(78),function(){return l.a.createElement("div",{className:"login-page"},l.a.createElement("div",{className:"google-login"},l.a.createElement("a",{href:"/auth/google",className:"oauth-login"},l.a.createElement(re,{className:"google-logo",alt:"logo"}),l.a.createElement("span",null,"Continue with Google"))),l.a.createElement("div",{className:"facebook-login"},l.a.createElement("a",{href:"/auth/facebook",className:"oauth-login"},l.a.createElement(Ne,{className:"facebook-logo",alt:"logo"}),l.a.createElement("span",null,"Continue with Facebook"))))}),je=(a(79),function(e){var t=e.profile,a=e.posts;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"user-info container"},l.a.createElement("img",{src:t.avatar,alt:"avatar",className:"profile-photo"}),l.a.createElement("h2",{className:"username"},"Welcome to your profile ",l.a.createElement("br",null),t.username)),l.a.createElement("div",{className:"postlist container"},a.map(function(e){return e.postedBy.userId===t._id&&l.a.createElement("div",{className:"postlist__card"},l.a.createElement("img",{src:e.imgUrl,alt:"post",className:"postlist__card__image"}))})))}),we=function(){return l.a.createElement("div",null,l.a.createElement("p",null," Sorry, page was not Found "))},Ce=(a(80),function(e){function t(){var e,a;Object(O.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(_.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).author=l.a.createRef(),a.comment=l.a.createRef(),a.handleSubmit=function(e){e.preventDefault();var t=a.props.postId,n=a.props.profile.username,r=a.props.profile.avatar,l=a.comment.current.value;a.props.addComment(n,r,l,t),e.currentTarget.reset()},a.renderComments=function(){return a.props.postComments&&a.props.postComments.map(function(e,t){return l.a.createElement("li",{className:"collection-item avatar grey lighten-4 comment-list",key:t,style:{margin:"2rem auto",width:"95%"}},l.a.createElement("p",null,l.a.createElement("img",{src:e.avatar,alt:"avatar",style:{borderRadius:"50%",width:"40px"}}),l.a.createElement("div",{className:"single-comment"},l.a.createElement("span",{style:{fontWeight:"bold"}},e.user)," -",e.comment)))})},a}return Object(w.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"comments"},l.a.createElement("ul",{className:"collection"},this.renderComments(),l.a.createElement("form",{onSubmit:this.handleSubmit,style:{margin:"2rem auto",width:"95%"}},l.a.createElement("input",{type:"text",name:"comment",id:"comment",placeholder:"comments",ref:this.comment}),l.a.createElement("button",{type:"submit"},"Add Comment"))))}}]),t}(r.Component)),Pe=(a(81),function(e){var t=e.posts,a=e.match,n=e.handleDeleteOnePost,r=e.addComment,o=e.profile,c=e.comments,s=a.params.postId,i=t?t.filter(function(e){return e._id===s}).map(function(e){return l.a.createElement("div",{className:"single-photo",key:e._id},l.a.createElement("div",{className:"single-photo__postedby"},l.a.createElement("img",{src:e.postedBy.profilepic,alt:"avatar",className:"single-post__avatar-image"}),l.a.createElement("span",null,e.postedBy.username),console.log(o._id),console.log(e.postedBy.userId)),l.a.createElement("img",{src:"../".concat(e.imgUrl),alt:e.caption,className:"single-post__image"}),l.a.createElement("div",{className:"single-post__caption"},l.a.createElement("div",null,l.a.createElement("span",{className:"single-post__author"},e.postedBy.username),"-",e.caption),o.username&&o._id===e.postedBy.userId&&l.a.createElement("button",{onClick:function(){return n(e._id)},className:"btn delete-btn"},"Delete")),l.a.createElement("div",{className:"single-post__comments"},l.a.createElement(Ce,{postId:s,addComment:r,profile:o,postComments:c[s]})))}):null;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"single-container"},i))}),Se=(a(82),function(e){var t=e.posts;return l.a.createElement("div",{className:"postlist container"},t&&t.map(function(e){return l.a.createElement(s.b,{to:e._id&&"posts/".concat(e._id),key:e._id},l.a.createElement("div",{className:"postlist__card"},l.a.createElement("img",{src:"../".concat(e.imgUrl),alt:"post",className:"postlist__card__image"})))}))}),ke=(a(83),function(e){function t(){var e,a;Object(O.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(_.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).caption=l.a.createRef(),a.state={imgUrl:null},a.fileSelectedHandler=function(e){a.setState({imgUrl:e.target.files[0]})},a.handleSubmit=function(e){e.preventDefault();var t=new FormData;t.append("imgUrl",a.state.imgUrl),t.append("caption",a.caption.current.value),t.append("username",a.props.profile.username),t.append("userId",a.props.profile._id),t.append("profilepic",a.props.profile.avatar),a.props.addPost(t),a.props.history.push("/")},a}return Object(w.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"addform__container"},l.a.createElement("form",{onSubmit:this.handleSubmit,method:"POST",className:""},l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"form__input-group"},l.a.createElement("label",{htmlFor:"imgUrl"},"Select Image:"),l.a.createElement("input",{type:"file",name:"fileToUpload",id:"fileToUpload",onChange:this.fileSelectedHandler})),l.a.createElement("div",{className:"form__input-group"},l.a.createElement("label",{htmlFor:"summary"},"Caption:"),l.a.createElement("textarea",{name:"caption",id:"caption",ref:this.caption,className:"form-control",rows:"4"}))),l.a.createElement("div",{className:"form-row"}),l.a.createElement("button",{type:"submit",className:"btn add-btn"},"Add Post")))}}]),t}(r.Component)),xe=(a(84),function(e){function t(){var e,a;Object(O.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(_.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).handleDeleteOnePost=function(e){a.props.deletePost(e),a.props.history.push("/")},a}return Object(w.a)(t,e),Object(N.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchProfile(),this.props.fetchPosts()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement(L,{profile:this.props.profile})),l.a.createElement("main",null,l.a.createElement(C.c,null,l.a.createElement(C.a,{path:"/login",render:function(){return l.a.createElement(_e,null)}}),l.a.createElement(C.a,{path:"/posts/newpost",render:function(t){return l.a.createElement(ke,Object.assign({addPost:e.props.addPost,profile:e.props.profile},t))}}),l.a.createElement(C.a,{path:"/profile",render:function(){return l.a.createElement(je,{profile:e.props.profile,posts:e.props.posts})}}),l.a.createElement(C.a,{path:"/",exact:!0,render:function(){return l.a.createElement(Se,{posts:e.props.posts,profile:e.props.profile})}}),l.a.createElement(C.a,{path:"/posts/:postId",render:function(t){return l.a.createElement(Pe,Object.assign({posts:e.props.posts,profile:e.props.profile,comments:e.props.comments},t,{handleDeleteOnePost:e.handleDeleteOnePost,addComment:e.props.addComment}))}}),l.a.createElement(C.a,{component:we}))))}}]),t}(r.Component)),Ie=Object(C.e)(Object(i.b)(function(e){return{posts:e.posts,profile:e.profile,comments:e.comments}},function(e){return Object(m.b)(n,e)})(xe));c.a.render(l.a.createElement(i.a,{store:y},l.a.createElement(s.a,null,l.a.createElement(Ie,null))),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.291f298a.chunk.js.map