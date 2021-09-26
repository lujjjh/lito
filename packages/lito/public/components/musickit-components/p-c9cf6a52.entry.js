import{r as e,f as o,h as r,H as a,g as m}from"./p-a23b3d3a.js";import"./p-112455b1.js";import"./p-db605274.js";import"./p-6005e86e.js";import{M as t}from"./p-1ef6431f.js";import"./p-e908516f.js";import"./p-a1835bb8.js";import{s,t as c}from"./p-bb447120.js";import{i as l,l as i}from"./p-6b1b37da.js";const h=[.33,.66];const n=class{constructor(o){e(this,o)}async componentWillLoad(){const{Events:e}=window.MusicKit;this.musicKitListeners=s([[e.playbackVolumeDidChange,this.onPlaybackVolumeDidChange]],this.musicKit,this),await l(this.el)}disconnectedCallback(){c(this.musicKitListeners,this.musicKit)}onPlaybackVolumeDidChange(){o(this)}render(){const{volume:e}=this.musicKit;return r(a,{dir:i.dir,class:"chrome-volume"},r("div",{class:"chrome-volume__indicator"},r("svg",{class:"chrome-volume__icon","aria-role":"presentation",version:"1.1",viewBox:"0 0 64 64"},r("path",{transform:"translate(2,11.149)",d:"m23.477 39.911c1.4129 0 2.431-1.0389 2.431-2.431v-33.141c0-1.3921-1.0181-2.5349-2.4726-2.5349-1.0181 0-1.7038 0.43634-2.805 1.4752l-9.2046 8.6644c-0.14545 0.12464-0.31166 0.18698-0.51945 0.18698h-6.2126c-2.9297 0-4.5088 1.5999-4.5088 4.7374v8.0411c0 3.1167 1.5791 4.7166 4.5088 4.7166h6.2126c0.20779 0 0.374 0.06234 0.51945 0.18698l9.2046 8.7475c0.99732 0.93501 1.8285 1.3506 2.8466 1.3506z"}),r("path",{class:{"chrome-volume__wave":!0,"chrome-volume__wave-1":!0},transform:"translate(2,11.149)",d:"m34.864 29.959c0.70647 0.49868 1.7246 0.35323 2.3271-0.47787 1.6205-2.1817 2.5971-5.3815 2.5971-8.6436 0-3.2621-0.9766-6.4411-2.5971-8.6436-0.60255-0.83111-1.5999-0.97655-2.3271-0.49868-0.89345 0.62336-1.0181 1.683-0.35319 2.5765 1.2051 1.6207 1.9323 4.0932 1.9323 6.5658 0 2.4726-0.76881 4.9451-1.9531 6.5866-0.62332 0.89345-0.51945 1.9116 0.374 2.5349z"}),r("path",{class:{"chrome-volume__wave":!0,"chrome-volume__wave-2":!0,"chrome-volume__wave-hidden":e<h[0]},transform:"translate(2,11.149)",d:"m43.154 35.569c0.81021 0.54023 1.8077 0.33245 2.3894-0.49867 2.7426-3.8231 4.3426-8.9137 4.3426-14.233 0-5.3399-1.5583-10.451-4.3426-14.254-0.60255-0.81034-1.5791-1.0181-2.3894-0.47787-0.78979 0.54021-0.91447 1.5583-0.29106 2.4518 2.2647 3.3245 3.6779 7.6878 3.6779 12.28s-1.3923 8.9969-3.6779 12.28c-0.60255 0.89345-0.49872 1.9116 0.29106 2.4518z"}),r("path",{class:{"chrome-volume__wave":!0,"chrome-volume__wave-3":!0,"chrome-volume__wave-hidden":e<h[1]},transform:"translate(2,11.149)",d:"m51.527 41.241c0.76894 0.51945 1.7872 0.31166 2.3898-0.54021 3.8438-5.423 6.0255-12.446 6.0255-19.864s-2.2443-14.42-6.0255-19.864c-0.60255-0.87268-1.6209-1.0805-2.3898-0.54021-0.78936 0.56098-0.91404 1.5791-0.31149 2.4518 3.3451 4.9244 5.423 11.241 5.423 17.952 0 6.7113-1.9945 13.132-5.423 17.952-0.60255 0.87268-0.47787 1.8908 0.31149 2.4518z"}))),r("amp-volume-control",null))}get el(){return m(this)}};(function(e,o,r,a){var m,t=arguments.length,s=t<3?o:null===a?a=Object.getOwnPropertyDescriptor(o,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,o,r,a);else for(var c=e.length-1;c>=0;c--)(m=e[c])&&(s=(t<3?m(s):t>3?m(o,r,s):m(o,r))||s);t>3&&s&&Object.defineProperty(o,r,s)})([t()],n.prototype,"musicKit",void 0),n.style=".chrome-volume{--progress-track-color-elapsed:var(--chromeVolumeElapsed);--progress-track-color:var(--chromeVolumeTrack);--progress-track-color-elapsed-active:var(--chromeVolumeElapsed);--progress-thumb-height:12px;--progress-thumb-margin:1.5px;--playerVolumePlayhead:var(--chromeVolumeThumb);--volumeWidth:70px;--volume-thumb-box-shadow:inset 0 0 1px var(--chromeVolumeThumbShadowInset), 0 1px 1px var(--chromeVolumeThumbShadow);display:flex;flex-direction:row;align-items:center}.chrome-volume__indicator{margin:0 4px;width:18px;height:18px;position:relative}.chrome-volume__icon{width:18px;height:18px;fill:var(--chromeVolumeIcon)}.chrome-volume__icon .chrome-volume__wave{transition:opacity 100ms linear}.chrome-volume__icon .chrome-volume__wave-hidden{opacity:0}:host([dir=rtl]) .chrome-volume__icon{transform:scaleX(-1)}";export{n as amp_chrome_volume}