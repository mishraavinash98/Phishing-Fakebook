if (self.CavalryLogger) { CavalryLogger.start_js(["K63nK"]); }

__d("KappaWrapper",["AsyncSignal","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){var g=!1;e.exports={forceStart:function(a,c,d){var e=0,f=function d(){new(b("AsyncSignal"))("/si/kappa/",{Ko:"a"}).send(),++e<a&&b("setTimeoutAcrossTransitions")(d,c*1e3)};b("setTimeoutAcrossTransitions")(f,(c+d)*1e3)},start:function(a,b,c){g||(g=!0,this.forceStart(a,b,c))}}}),null);
__d("ArtillerySegment",["invariant","performanceAbsoluteNow"],(function(a,b,c,d,e,f,g){__p&&__p();var h=0;function a(a){"use strict";a||g(0,undefined),"category"in a&&"description"in a||g(0,undefined,JSON.stringify(a)),this.$1=!1,this.$2=babelHelpers["extends"]({},a,{id:(h++).toString(36)}),this.$3=[]}a.prototype.getID=function(){"use strict";return this.$2.id};a.prototype.begin=function(){"use strict";this.$2.begin=b("performanceAbsoluteNow")();return this};a.prototype.end=function(){"use strict";this.$2.end=b("performanceAbsoluteNow")();return this};a.prototype.appendChild=function(){"use strict";this.$1&&g(0,undefined,this.$2.description);for(var a=arguments.length,b=new Array(a),c=0;c<a;c++)b[c]=arguments[c];b.forEach(function(a){this.$3.push(a.getID())}.bind(this));return this};a.prototype.setPosted=function(){"use strict";this.$1=!0;return this};a.prototype.getPostData=function(){"use strict";return babelHelpers["extends"]({},this.$2,{id:this.$2.id,children:this.$3.slice()})};e.exports=a}),null);
__d("ArtillerySequence",["invariant"],(function(a,b,c,d,e,f,g){__p&&__p();var h=0;function a(a){"use strict";a||g(0,undefined),"description"in a||g(0,undefined,JSON.stringify(a)),this.$1=!1,this.$2=babelHelpers["extends"]({},a,{id:(h++).toString(36)}),this.$3=[]}a.prototype.getID=function(){"use strict";return this.$2.id};a.prototype.addSegment=function(){"use strict";this.$1&&g(0,undefined,this.$2.description);for(var a=arguments.length,b=new Array(a),c=0;c<a;c++)b[c]=arguments[c];b.forEach(function(a){this.$3.push(a.getID())}.bind(this));return this};a.prototype.setPosted=function(){"use strict";this.$1=!0;return this};a.prototype.getPostData=function(){"use strict";return babelHelpers["extends"]({},this.$2,{id:this.$2.id,segments:this.$3.slice()})};e.exports=a}),null);
__d("ArtilleryTrace",["invariant","ArtillerySegment","ArtillerySequence"],(function(a,b,c,d,e,f,g){__p&&__p();function a(){"use strict";this.$1=!1,this.$3=undefined,this.$4={},this.$5={},this.$6=[],this.$7=[],this.$8={},this.$9=[],this.$10=null}a.prototype.createSequence=function(a){"use strict";this.$1&&g(0,undefined);a=new(b("ArtillerySequence"))(a);this.$6.push(a);return a};a.prototype.createSegment=function(a){"use strict";this.$1&&g(0,undefined);a=new(b("ArtillerySegment"))(a);this.$7.push(a);return a};a.prototype.markSegment=function(a,b){"use strict";this.$1&&g(0,undefined);this.$8[b]=a.getID();return this};a.prototype.connectTrace=function(a,b){"use strict";this.$1&&g(0,undefined);b=b||this.$2;b||g(0,undefined);this.$9.push({segment:a.getID(),trace:b});return this};a.prototype.setID=function(a,b){"use strict";!this.$2&&!this.$3||g(0,undefined);this.$2=a;this.$3=b;return this};a.prototype.getID=function(){"use strict";return this.$2};a.prototype.getArtillery2ID=function(){"use strict";return this.$3};a.prototype.addProperty=function(a,b){"use strict";this.$4[a]=b;return this};a.prototype.addTagset=function(a,b){"use strict";this.$5[a]=b;return this};a.prototype.addActivePolicies=function(a){"use strict";this.addTagset("active_policies",a);this.addTagset("policy",a);return this};a.prototype.getProperty=function(a){"use strict";return this.$4[a]};a.prototype.getTagset=function(a){"use strict";return this.$5[a]};a.prototype.getActivePolicies=function(){"use strict";return this.getTagset("active_policies")};a.prototype.post=function(){"use strict";this.$1&&g(0,undefined,this.$2);this.$1=!0;var a=this.$10;a&&a({id:this.$2,artillery2Id:this.$3,properties:this.$4,tagsets:this.$5,sequences:this.$6.map(function(a){return a.setPosted().getPostData()}),segments:this.$7.map(function(a){return a.setPosted().getPostData()}),marks:Object.assign({},this.$8),connections:this.$9.slice()})};a.prototype.setOnPost=function(a){"use strict";this.$10&&g(0,undefined);this.$10=a;return this};a.prototype.isPosted=function(){"use strict";return this.$1};e.exports=a}),null);
__d("Artillery",["invariant","ArtilleryTrace","Banzai","ClientServiceWorkerMessage","Run","ServiceWorkerRegistration","forEachObject","mixInEventEmitter","performance"],(function(a,b,c,d,e,f,g){__p&&__p();var h=!1,i=!1,j=[],k,l,m,n={},o={},p=!1,q=!1;function r(){if(h)return;h=!0;b("Banzai").subscribe(b("Banzai").SHUTDOWN,function(){t._postAll()})}function s(){l=null,k=null,o={},n={},m=null,q=!1}var t={isEnabled:function(){return i},createTrace:function(){r();var a=new(b("ArtilleryTrace"))();a.setOnPost(function(a){t.emitAndHold("posttrace",a)});j.push(a);return a},getPageTrace:function(){__p&&__p();k||g(0,undefined);if(m)return m;var a=t.createTrace().setID(k,l);b("forEachObject")(n,function(b,c,d){a.addProperty(c,b)});b("forEachObject")(o,function(b,c,d){a.addTagset(c,b)});m=a;return a},setPageProperties:function(a){n=a},addPageTagset:function(a,b){m==null?o[a]=b:m.addTagset(a,b)},setActivePolicies:function(a){this.addPageTagset("active_policies",a),this.addPageTagset("policy",a)},getPageActivePolicies:function(){return this.getPageTagset("active_policies")},enableLogServiceWorker:function(){b("ServiceWorkerRegistration").isSupported()&&(p=!0)},getPageProperty:function(a){if(m==null)return n[a];else return m.getProperty(a)},getPageTagset:function(a){if(m==null)return o[a];else return m.getTagset(a)},enable:function(){i=!0,q||(b("Run").onLeave(s),q=!0)},disable:function(){i=!1},setPageTraceID:function(a,c){if(k===a&&l===c)return;!k&&!l||g(0,undefined);k=a;l=c;if(p&&b("performance")&&b("performance").timing&&b("performance").timing.navigationStart){a=new(b("ClientServiceWorkerMessage"))("asw-sendStartupData",{traceID:l,windowStart:b("performance").timing.navigationStart},null);a.sendViaController()}},addPiggyback:function(a,b){window.CavalryLogger&&window.CavalryLogger.getInstance().addPiggyback(a,b)},_postAll:function(){j.forEach(function(a){return!a.isPosted()&&a.post()})}};b("mixInEventEmitter")(t,{posttrace:!0});e.exports=t}),null);
__d("FluxMixinLegacyInstrumentation",["FluxContainerInstrumentation"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a){return a.constructor.displayName||a.constructor.name||"FluxMixinLegacy(unknown)"}var h={_callCalculateState:function(){var a=b("FluxContainerInstrumentation").onCalculateStateStart(g(this)),c=this._FluxMixinLegacyInstrumentationCalculateStateCaller.apply(this,arguments);a&&a();return c},UNSAFE_componentWillMount:function(){this.constructor._FluxMixinLegacyInstrumentationOnInitCalled||(b("FluxContainerInstrumentation").onInit(this.constructor),this.constructor._FluxMixinLegacyInstrumentationOnInitCalled=!0)},_FluxMixinLegacyInstrumentationEmittedChangeStores:null,_getCurrentDispatchForInstrumentation:function(){return b("FluxContainerInstrumentation").updateTracking&&b("FluxContainerInstrumentation").updateTracking.getCurrentDispatch()},_onInitialStateForInstrumentation:function(){b("FluxContainerInstrumentation").updateTracking&&b("FluxContainerInstrumentation").updateTracking.initialState(this,g(this))},_onReceivePropsForInstrumentation:function(a){b("FluxContainerInstrumentation").updateTracking&&b("FluxContainerInstrumentation").updateTracking.receiveProps(this,g(this),a)},_addStoreEmitForInstrumentation:function(a){b("FluxContainerInstrumentation").updateTracking&&b("FluxContainerInstrumentation").updateTracking.shouldRecord()&&(this._FluxMixinLegacyInstrumentationEmittedChangeStores=this._FluxMixinLegacyInstrumentationEmittedChangeStores||[],b("FluxContainerInstrumentation").addStoreDependencies(this._FluxMixinLegacyInstrumentationEmittedChangeStores,a))},_collectStoreEmitsForInstrumentation:function(){var a=this._FluxMixinLegacyInstrumentationEmittedChangeStores;this._FluxMixinLegacyInstrumentationEmittedChangeStores=null;return a},_logStoreEmitsForInstrumentation:function(a,c){b("FluxContainerInstrumentation").updateTracking&&b("FluxContainerInstrumentation").updateTracking.storeEmitChange(this,g(this),a||[],c)},componentDidUpdate:function(a,c){b("FluxContainerInstrumentation").onDidUpdate(this,g(this),a,this.props,c,this.state)}};function a(a){b("FluxContainerInstrumentation").hasInstrumentation()&&(a.mixins=a.mixins||[],a.mixins.push(h),a._FluxMixinLegacyInstrumentationCalculateStateCaller=a._callCalculateState,delete a._callCalculateState);return a}e.exports={addInstrumentation:a}}),null);
__d("StoreAndPropBasedStateMixin",["invariant","FluxMixinLegacyInstrumentation","StoreBasedStateMixinHelper","setImmediate"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(){__p&&__p();for(var a=arguments.length,c=new Array(a),d=0;d<a;d++)c[d]=arguments[d];return b("FluxMixinLegacyInstrumentation").addInstrumentation({_callCalculateState:function(a){return this.constructor.calculateState(a)},getInitialState:function(){this._onInitialStateForInstrumentation&&this._onInitialStateForInstrumentation();return this._callCalculateState(this.props)},UNSAFE_componentWillMount:function(){__p&&__p();this.constructor.calculateState||g(0,undefined);this._recalculateStateID=null;var a=function(){if(this.isMounted()){var a=this._collectStoreEmitsForInstrumentation?this._collectStoreEmitsForInstrumentation():null,b=this._callCalculateState(this.props),c=this._getCurrentDispatchForInstrumentation&&this._getCurrentDispatchForInstrumentation();this.setState(this._logStoreEmitsForInstrumentation!=null?function(){a!=null&&this._logStoreEmitsForInstrumentation&&this._logStoreEmitsForInstrumentation(a,c);return b}.bind(this):b)}this._recalculateStateID=null}.bind(this);this._mixin=new(b("StoreBasedStateMixinHelper"))(c);this._mixin.subscribeCallback(function(){this._recalculateStateID===null&&(this._recalculateStateID=b("setImmediate")(a))}.bind(this),this._addStoreEmitForInstrumentation)},UNSAFE_componentWillReceiveProps:function(a){var b=this._callCalculateState(a),c=this._getCurrentDispatchForInstrumentation&&this._getCurrentDispatchForInstrumentation();this.setState(this._onReceivePropsForInstrumentation?function(){this._onReceivePropsForInstrumentation&&this._onReceivePropsForInstrumentation(c);return b}.bind(this):b)},componentWillUnmount:function(){this._mixin&&this._mixin.release(),this._mixin=null}})}.bind(this);e.exports=a}),null);
__d("DraftTreeAdapter",["invariant","generateRandomKey"],(function(a,b,c,d,e,f,g){__p&&__p();var h=function(a,b){a=[].concat(a).reverse();while(a.length){var c=a.pop();b(c);c=c.children;Array.isArray(c)||g(0,undefined);a=a.concat([].concat(c.reverse()))}},i=function(a){if(!(a&&a.type))return!1;a=a.type;return a==="unordered-list-item"||a==="ordered-list-item"},j=function(a){Array.isArray(a.children)&&(a.children=a.children.map(function(b){return b.type===a.type?babelHelpers["extends"]({},b,{depth:(a.depth||0)+1}):b}))};a={fromRawTreeStateToRawState:function(a){__p&&__p();var b=a.blocks,c=[];Array.isArray(b)||g(0,undefined);if(!Array.isArray(b)||!b.length)return a;h(b,function(a){var b=babelHelpers["extends"]({},a);if(i(a)){b.depth=b.depth||0;j(a);if(a.children!=null&&a.children.length>0)return}delete b.children;c.push(b)});a.blocks=c;return babelHelpers["extends"]({},a,{blocks:c})},fromRawStateToRawTreeState:function(a){__p&&__p();var c={},d=[];a.blocks.forEach(function(a){__p&&__p();var e=i(a),f=a.depth||0,h=babelHelpers["extends"]({},a,{children:[]});if(!e){c={};d.push(h);return}if(f>0){e=c[f-1];if(e==null){e={key:b("generateRandomKey")(),text:"",depth:f-1,type:a.type,children:[],entityRanges:[],inlineStyleRanges:[]};c[f-1]=e;if(f===1)d.push(e);else{a=c[f-2];a.children.push(e)}}e||g(0,undefined);e.children.push(h);return}d.push(h)});return babelHelpers["extends"]({},a,{blocks:d})}};e.exports=a}),null);
__d("DraftTreeInvariants",["warning"],(function(a,b,c,d,e,f){__p&&__p();a={isValidBlock:function(a,c){__p&&__p();var d=a.getKey(),e=a.getParentKey();if(e!=null){e=c.get(e);if(!e.getChildKeys().includes(d)){b("warning")(!0,"Tree is missing parent -> child pointer on %s",d);return!1}}e=a.getChildKeys().map(function(a){return c.get(a)});if(!e.every(function(a){return a.getParentKey()===d})){b("warning")(!0,"Tree is missing child -> parent pointer on %s",d);return!1}e=a.getPrevSiblingKey();if(e!=null){var f=c.get(e);if(f.getNextSiblingKey()!==d){b("warning")(!0,"Tree is missing nextSibling pointer on %s's prevSibling",d);return!1}}f=a.getNextSiblingKey();if(f!=null){var g=c.get(f);if(g.getPrevSiblingKey()!==d){b("warning")(!0,"Tree is missing prevSibling pointer on %s's nextSibling",d);return!1}}if(f!==null&&e!==null&&e===f){b("warning")(!0,"Tree has a two-node cycle at %s",d);return!1}if(a.text!=""&&a.getChildKeys().size>0){b("warning")(!0,"Leaf node %s has children",d);return!1}return!0},isConnectedTree:function(a){__p&&__p();var c=a.toArray().filter(function(a){return a.getParentKey()==null&&a.getPrevSiblingKey()==null});if(c.length!==1){b("warning")(!0,"Tree is not connected. More or less than one first node");return!1}c=c.shift();var d=0;c=c.getKey();var e=[];while(c!=null){var f=a.get(c),g=f.getChildKeys(),h=f.getNextSiblingKey();if(g.size>0){h!=null&&e.unshift(h);h=g.map(function(b){return a.get(b)});g=h.find(function(a){return a.getPrevSiblingKey()==null});if(g==null){b("warning")(!0,"%s has no first child",c);return!1}c=g.getKey()}else f.getNextSiblingKey()!=null?c=f.getNextSiblingKey():c=e.shift();d++}if(d!==a.size){b("warning")(!0,"Tree is not connected. %s nodes were seen instead of %s",d,a.size);return!1}return!0},isValidTree:function(a){var b=a.toArray();return!b.every(function(b){return this.isValidBlock(b,a)}.bind(this))?!1:this.isConnectedTree(a)}};e.exports=a}),null);
__d("createCharacterList",["CharacterMetadata","immutable"],(function(a,b,c,d,e,f){"use strict";var g=b("immutable").List;function a(a,c){a=a.map(function(a,d){d=c[d];return b("CharacterMetadata").create({style:a,entity:d})});return g(a)}e.exports=a}),null);
__d("decodeEntityRanges",["UnicodeUtils"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("UnicodeUtils").substr;function a(a,b){var c=Array(a.length).fill(null);b&&b.forEach(function(b){var d=g(a,0,b.offset).length,e=d+g(a,b.offset,b.length).length;for(var d=d;d<e;d++)c[d]=b.key});return c}e.exports=a}),null);
__d("decodeInlineStyleRanges",["immutable","UnicodeUtils"],(function(a,b,c,d,e,f){"use strict";__p&&__p();c=b("immutable").OrderedSet;var g=b("UnicodeUtils").substr,h=c();function a(a,b){var c=Array(a.length).fill(h);b&&b.forEach(function(b){var d=g(a,0,b.offset).length,e=d+g(a,b.offset,b.length).length;while(d<e)c[d]=c[d].add(b.style),d++});return c}e.exports=a}),null);
__d("convertFromRawToDraftState",["invariant","ContentBlock","ContentBlockNode","ContentState","DraftEntity","DraftTreeAdapter","DraftTreeInvariants","SelectionState","createCharacterList","decodeEntityRanges","decodeInlineStyleRanges","generateRandomKey","gkx","immutable"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("gkx")("AT7I-kBaiZBk-5ySRgJaDBW6tSXkDwvlqxCLLVy7xjKFQh4OpQOjZpy_bJOblZZDQOjyMyX8JeUF5aALSjx2ACRN"),i=b("immutable").List,j=b("immutable").Map,k=b("immutable").OrderedMap,l=function(a,c){var d=a.key,e=a.type,f=a.data,g=a.text,h=a.depth;g={text:g,depth:h||0,type:e||"unstyled",key:d||b("generateRandomKey")(),data:j(f),characterList:m(a,c)};return g},m=function(a,c){var d=a.text,e=a.entityRanges;a=a.inlineStyleRanges;e=e||[];a=a||[];return b("createCharacterList")(b("decodeInlineStyleRanges")(d,a),b("decodeEntityRanges")(d,e.filter(function(a){return Object.prototype.hasOwnProperty.call(c,a.key)}).map(function(a){return babelHelpers["extends"]({},a,{key:c[a.key]})})))},n=function(a){return babelHelpers["extends"]({},a,{key:a.key||b("generateRandomKey")()})},o=function(a,b,c){b=b.map(function(a){return babelHelpers["extends"]({},a,{parentRef:c})});return a.concat(b.reverse())},p=function(a,c){__p&&__p();return a.map(n).reduce(function(d,e,f){__p&&__p();Array.isArray(e.children)||g(0,undefined);var h=e.children.map(n);e=new(b("ContentBlockNode"))(babelHelpers["extends"]({},l(e,c),{prevSibling:f===0?null:a[f-1].key,nextSibling:f===a.length-1?null:a[f+1].key,children:i(h.map(function(a){return a.key}))}));d=d.set(e.getKey(),e);f=o([],h,e);while(f.length>0){h=f.pop();e=h.parentRef;var j=e.getChildKeys(),k=j.indexOf(h.key),m=Array.isArray(h.children);if(!m){m||g(0,undefined);break}m=h.children.map(n);h=new(b("ContentBlockNode"))(babelHelpers["extends"]({},l(h,c),{parent:e.getKey(),children:i(m.map(function(a){return a.key})),prevSibling:k===0?null:j.get(k-1),nextSibling:k===j.size-1?null:j.get(k+1)}));d=d.set(h.getKey(),h);f=o(f,m,h)}return d},k())},q=function(a,c){return k(a.map(function(a){a=new(b("ContentBlock"))(l(a,c));return[a.getKey(),a]}))},r=function(a,c){var d=Array.isArray(a.blocks[0].children),e=h&&!d?b("DraftTreeAdapter").fromRawStateToRawTreeState(a).blocks:a.blocks;if(!h)return q(d?b("DraftTreeAdapter").fromRawTreeStateToRawState(a).blocks:e,c);d=p(e,c);return d},s=function(a){var c=a.entityMap,d={};Object.keys(c).forEach(function(a){var e=c[a],f=e.type,g=e.mutability;e=e.data;d[a]=b("DraftEntity").__create(f,g,e||{})});return d};a=function(a){Array.isArray(a.blocks)||g(0,undefined);var c=s(a);a=r(a,c);var d=a.isEmpty()?new(b("SelectionState"))():b("SelectionState").createEmpty(a.first().getKey());return new(b("ContentState"))({blockMap:a,entityMap:c,selectionBefore:d,selectionAfter:d})};e.exports=a}),null);
__d("decodeBlocks",["ComposedBlockType","ComposedInlineStyle","convertFromRawToDraftState","mapObject"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a,c){a=a.map(function(a){var b=a.type,c=a.inlineStyleRanges;a=babelHelpers.objectWithoutProperties(a,["type","inlineStyleRanges"]);return babelHelpers["extends"]({type:g[b]||"unstyled",inlineStyleRanges:(c||[]).map(function(a){return babelHelpers["extends"]({},a,{style:h[a.style]})})},a)});c=b("mapObject")(c,function(a){return{type:a.getType(),mutability:a.getMutability(),data:a.getData()}});return b("convertFromRawToDraftState")({blocks:a,entityMap:c})}var g={};g[b("ComposedBlockType").UNSTYLED]="unstyled";g[b("ComposedBlockType").PARAGRAPH]="paragraph";g[b("ComposedBlockType").BLOCKQUOTE]="blockquote";g[b("ComposedBlockType").ORDERED_LIST_ITEM]="ordered-list-item";g[b("ComposedBlockType").UNORDERED_LIST_ITEM]="unordered-list-item";g[b("ComposedBlockType").CODE]="code-block";g[b("ComposedBlockType").HEADER_ONE]="header-one";g[b("ComposedBlockType").HEADER_TWO]="header-two";g[b("ComposedBlockType").MEDIA]="atomic";g[b("ComposedBlockType").PULLQUOTE]="pullquote";var h={};h[b("ComposedInlineStyle").BOLD]="BOLD";h[b("ComposedInlineStyle").CODE]="CODE";h[b("ComposedInlineStyle").ITALIC]="ITALIC";h[b("ComposedInlineStyle").STRIKETHROUGH]="STRIKETHROUGH";h[b("ComposedInlineStyle").UNDERLINE]="UNDERLINE";e.exports=a}),null);
__d("filterSet",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a,b){__p&&__p();var c=new Set();for(var a=a,d=Array.isArray(a),e=0,a=d?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f;if(d){if(e>=a.length)break;f=a[e++]}else{e=a.next();if(e.done)break;f=e.value}f=f;b(f)&&c.add(f)}return c}e.exports=a}),null);
__d("FBPaymentsDispatcher",["ExplicitRegistrationReactDispatcher"],(function(a,b,c,d,e,f){"use strict";var g;c=babelHelpers.inherits(a,b("ExplicitRegistrationReactDispatcher"));g=c&&c.prototype;function a(a){g.constructor.call(this,a),this.dispatch=this.dispatch.bind(this)}e.exports=new a({strict:!1})}),null);
__d("FBPaymentsDialogActions",["FBPaymentsDispatcher","keyMirror"],(function(a,b,c,d,e,f){"use strict";var g={types:b("keyMirror")({SHOW_DIALOG:null,HIDE_DIALOG:null}),showDialog:function(a,c){b("FBPaymentsDispatcher").dispatch({type:g.types.SHOW_DIALOG,data:{dialogClass:a,dialogProps:c}})},hideDialog:function(){b("FBPaymentsDispatcher").dispatch({type:g.types.HIDE_DIALOG,data:{}})}};e.exports=g}),null);