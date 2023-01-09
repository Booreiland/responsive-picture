/*!
 * 
 * ResponsivePics
 * 
 * @author Booreiland
 * @version 1.6.2
 * @link https://responsive.pics
 * @license UNLICENSED
 * 
 * Copyright (c) 2022 Booreiland
 * 
 * This software is released under the UNLICENSED License
 * https://opensource.org/licenses/UNLICENSED
 * 
 * Compiled with the help of https://wpack.io
 * A zero setup Webpack Bundler Script for WordPress
 */
(window.wpackioresponsivePicsfocalpointJsonp=window.wpackioresponsivePicsfocalpointJsonp||[]).push([[0],[function(i,t,o){o(1),o(3),i.exports=o(2)},function(i,t,o){var e="responsivePicsdist".replace(/[^a-zA-Z0-9_-]/g,"");o.p=window["__wpackIo".concat(e)]},function(i,t,o){"use strict";o.r(t)},function(i,t,o){"use strict";o.r(t);var e={init:function(i){e.view=i,e.position=i.model.get("focalPoint"),e.wrapper=i.$el.find(".image-focal__wrapper"),e.point=i.$el.find(".image-focal__point"),e.picker=i.$el.find(".image-focal__clickarea"),e.image=e.wrapper.find("img"),e.setEventListeners(),e.positionFocalPoint(e.position)},setEventListeners:function(){jQuery(window).on("resize",e.updateInterface),e.image.on("load",(function(i){e.updateInterface()})),e.picker.on("click",e.setFocalPoint),"function"==typeof jQuery.ui.draggable&&e.point.draggable({cursor:"move",start:e.startDrag,drag:e.dragging,stop:e.stopDrag,containment:e.wrapper})},updateInterface:function(){e.wrapper.css({width:"".concat(e.image.width(),"px")})},positionFocalPoint:function(i){e.view.model.set("focalPoint",i),e.point.css({left:"".concat(null==i?void 0:i.x,"%"),top:"".concat(null==i?void 0:i.y,"%"),position:"absolute"})},setFocalPoint:function(i){var t=i.offsetY-e.point.height()/2,o=i.offsetX-e.point.width()/2;e.position.x=Math.round(o/e.picker.width()*100),e.position.y=Math.round(t/e.picker.height()*100),e.positionFocalPoint(e.position),e.saveFocalPoint(e.view.model)},saveFocalPoint:function(i){var t,o,n,a;a&&a.abort(),a=jQuery.ajax({url:null===(t=wp)||void 0===t||null===(o=t.ajax)||void 0===o||null===(n=o.settings)||void 0===n?void 0:n.url,method:"POST",data:{action:"save_focal_point",attachment:null==i?void 0:i.attributes},beforeSend:function(){e.view.updateSave("waiting")}}).done((function(i){e.view.update()})).fail((function(i,t){console.error("ResponsivePics error while saving focal point",i.statusText)})).always((function(){e.view.updateSave("ready"),a=null}))},startDrag:function(i){jQuery("body").addClass("focal-point-dragging")},dragging:function(i){e.position.x=Math.round(i.target.offsetLeft/e.picker.width()*100),e.position.y=Math.round(i.target.offsetTop/e.picker.height()*100)},stopDrag:function(i){jQuery("body").removeClass("focal-point-dragging"),e.positionFocalPoint(e.position),e.saveFocalPoint(e.view.model)}},n=e;jQuery(document).ready((function(){var i,t,o,e,a,l,s,c,d,r,p,u,f=function(i){var t,o,e=null===(t=wp)||void 0===t||null===(o=t.media)||void 0===o?void 0:o.template("attachment-details-focal-point"),n=i.find(".thumbnail"),a=n.find("img");if(e&&n.length&&a.length){n.prepend(e);var l=n.find(".image-focal__wrapper");a.prependTo(l)}},v=null===(i=wp)||void 0===i||null===(t=i.media)||void 0===t||null===(o=t.view)||void 0===o?void 0:o.Attachment,h=null===(e=wp)||void 0===e||null===(a=e.media)||void 0===a||null===(l=a.view)||void 0===l||null===(s=l.Attachment)||void 0===s?void 0:s.Details,g=null===(c=wp)||void 0===c||null===(d=c.media)||void 0===d||null===(r=d.view)||void 0===r||null===(p=r.Attachment)||void 0===p||null===(u=p.Details)||void 0===u?void 0:u.TwoColumn;g&&(wp.media.view.Attachment.Details.TwoColumn=g.extend({initialize:function(){this.model.on("change:focalPoint",this.change,this)},render:function(){v.prototype.render.apply(this,arguments);var i=this.model.get("type");"image"===i&&(f(this.$el),n.init(this))},change:function(){var i=this.model.get("type"),t=this.model.get("focalPoint");"image"===i&&n.positionFocalPoint(t)},update:function(){this.views.detach(),this.model.fetch(),this.views.render()}})),h&&(wp.media.view.Attachment.Details=h.extend({initialize:function(){v.prototype.initialize.apply(this,arguments),this.model.on("change:focalPoint",this.change,this)},render:function(){v.prototype.render.apply(this,arguments),this.model.get("id");var i=this.model.get("type");"image"===i&&(f(this.$el),n.init(this))},change:function(){var i=this.model.get("type"),t=this.model.get("focalPoint");"image"===i&&n.positionFocalPoint(t)},update:function(){this.views.detach(),this.model.fetch(),this.views.render()}}))}))}],[[0,1]]]);
//# sourceMappingURL=admin-0d547173.js.map