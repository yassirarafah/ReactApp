import i,{useEffect as k,useRef as m}from"react";import{forwardRefWithAs as A,render as h}from"../../utils/render.js";import{useServerHandoffComplete as y}from"../../hooks/use-server-handoff-complete.js";import{useSyncRefs as S}from"../../hooks/use-sync-refs.js";import{Features as M,Hidden as L}from"../../internal/hidden.js";import{focusElement as a,focusIn as b,Focus as E,FocusResult as g}from"../../utils/focus-management.js";import{match as B}from"../../utils/match.js";import{useEvent as I}from"../../hooks/use-event.js";import{useTabDirection as P,Direction as d}from"../../hooks/use-tab-direction.js";import{useIsMounted as _}from"../../hooks/use-is-mounted.js";import{useOwnerDocument as U}from"../../hooks/use-owner.js";import{useEventListener as H}from"../../hooks/use-event-listener.js";import{microTask as C}from"../../utils/micro-task.js";import{useWatch as R}from"../../hooks/use-watch.js";let N="div";var F=(r=>(r[r.None=1]="None",r[r.InitialFocus=2]="InitialFocus",r[r.TabLock=4]="TabLock",r[r.FocusLock=8]="FocusLock",r[r.RestoreFocus=16]="RestoreFocus",r[r.All=30]="All",r))(F||{});let fe=Object.assign(A(function(n,e){let l=m(null),u=S(l,e),{initialFocus:f,containers:r,features:o=30,...c}=n;y()||(o=1);let s=U(l);V({ownerDocument:s},Boolean(o&16));let O=x({ownerDocument:s,container:l,initialFocus:f},Boolean(o&2));G({ownerDocument:s,container:l,containers:r,previousActiveElement:O},Boolean(o&8));let v=P(),p=I(()=>{let T=l.current;!T||B(v.current,{[d.Forwards]:()=>b(T,E.First),[d.Backwards]:()=>b(T,E.Last)})}),j={ref:u};return i.createElement(i.Fragment,null,Boolean(o&4)&&i.createElement(L,{as:"button",type:"button",onFocus:p,features:M.Focusable}),h({ourProps:j,theirProps:c,defaultTag:N,name:"FocusTrap"}),Boolean(o&4)&&i.createElement(L,{as:"button",type:"button",onFocus:p,features:M.Focusable}))}),{features:F});function V({ownerDocument:t},n){let e=m(null);H(t==null?void 0:t.defaultView,"focusout",u=>{!n||e.current||(e.current=u.target)},!0),R(()=>{n||((t==null?void 0:t.activeElement)===(t==null?void 0:t.body)&&a(e.current),e.current=null)},[n]);let l=m(!1);k(()=>(l.current=!1,()=>{l.current=!0,C(()=>{!l.current||(a(e.current),e.current=null)})}),[])}function x({ownerDocument:t,container:n,initialFocus:e},l){let u=m(null);return R(()=>{if(!l)return;let f=n.current;if(!f)return;let r=t==null?void 0:t.activeElement;if(e!=null&&e.current){if((e==null?void 0:e.current)===r){u.current=r;return}}else if(f.contains(r)){u.current=r;return}e!=null&&e.current?a(e.current):b(f,E.First)===g.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),u.current=t==null?void 0:t.activeElement},[l]),u}function G({ownerDocument:t,container:n,containers:e,previousActiveElement:l},u){let f=_();H(t==null?void 0:t.defaultView,"focus",r=>{if(!u||!f.current)return;let o=new Set(e==null?void 0:e.current);o.add(n);let c=l.current;if(!c)return;let s=r.target;s&&s instanceof HTMLElement?W(o,s)?(l.current=s,a(s)):(r.preventDefault(),r.stopPropagation(),a(c)):a(l.current)},!0)}function W(t,n){var e;for(let l of t)if((e=l.current)!=null&&e.contains(n))return!0;return!1}export{fe as FocusTrap};