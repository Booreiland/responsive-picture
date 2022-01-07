/*!
 * 
 * ResponsivePics
 * 
 * @author Booreiland
 * @version 1.4.0
 * @link https://responsive.pics
 * @license undefined
 * 
 * Copyright (c) 2022 Booreiland
 * 
 * This software is released under the [MIT License](https://github.com/booreiland/responsive-pics/blob/master/LICENSE)
 */
(window.wpackioresponsivePicsfocalpointJsonp=window.wpackioresponsivePicsfocalpointJsonp||[]).push([[0],[function(t,i,e){e(1),e(2),t.exports=e(3)},function(t,i,e){var n="responsivePicsdist".replace(/[^a-zA-Z0-9_-]/g,"");e.p=window["__wpackIo".concat(n)]},function(t,i){var e,n,o,a,c,d,s,l;e=jQuery,l={init:function(t){l.wrapper=a,l.picker=d,l.point=c,l.positionFocalPoint(t),l.setEventListeners()},setEventListeners:function(){l.picker.on("click",l.setFocalPoint),"function"==typeof e.ui.draggable&&l.point.draggable({cursor:"move",start:l.startDrag,drag:l.dragging,stop:l.stopDrag,containment:l.wrapper})},positionFocalPoint:function(t){l.x=t.x,l.y=t.y,l.point.css({left:"".concat(t.x,"%"),top:"".concat(t.y,"%")})},setFocalPoint:function(t){s.attr("disabled",!1);var i=t.offsetY-l.point.height()/2,e=t.offsetX-l.point.width()/2;l.x=Number(e/l.picker.width()*100).toFixed(2),l.y=Number(i/l.picker.height()*100).toFixed(2),l.positionFocalPoint(l)},startDrag:function(t){e("body").addClass("focal-point-dragging"),s.attr("disabled",!1)},dragging:function(t){l.x=Number(t.target.offsetLeft/l.picker.width()*100).toFixed(2),l.y=Number(t.target.offsetTop/l.picker.height()*100).toFixed(2)},stopDrag:function(t){e("body").removeClass("focal-point-dragging"),l.positionFocalPoint(l)}},e(document).ready((function(){var t=function(t,i){var e=wp.media.template("attachment-select-focal-point"),n=t.find(".thumbnail"),l=n.find("img");e&&n.length&&l.length&&(n.prepend(e),t.find(".image-focal"),a=t.find(".image-focal__wrapper"),c=t.find(".image-focal__point"),d=t.find(".image-focal__clickarea"),l.prependTo(a),o=a.find("img"));var p=wp.media.template("attachment-save-focal-point"),f=t.find(".attachment-actions");p&&(f.append(p),s=t.find("button.save-attachment-focal-point"))},i=function(){a.css({width:"".concat(o.width(),"px")})},p=function(t){var a=t.get("focalPoint");console.log("initFocusInterface",t,a,o),e(window).on("resize",i),o.on("load",(function(t){i(),l.init(a)})),s.on("click",(function(i){i.preventDefault(),function(t){var i,o,a,c={x:l.x,y:l.y};t.set({focalPoint:c}),e.ajax({url:null===(i=wp)||void 0===i||null===(o=i.ajax)||void 0===o||null===(a=o.settings)||void 0===a?void 0:a.url,method:"POST",data:{action:"save_focal_point",attachment:null==t?void 0:t.attributes}}).done((function(t){n.update()})).fail((function(t,i){console.log("save focal point error",t)})).always((function(){s.attr("disabled",!0)}))}(t)}))},f=function(t){var i=t.model.get("type"),e=t.model.get("focalPoint");"image"===i&&l.positionFocalPoint(e)},r=wp.media.view.Attachment.Details.TwoColumn;r&&(wp.media.view.Attachment.Details.TwoColumn=r.extend({initialize:function(){n=this,this.model.on("change:focalPoint",this.change,this)},render:function(){wp.media.view.Attachment.prototype.render.apply(this,arguments),this.model.get("id");var i=this.model.get("type");"image"===i&&(t(this.$el),p(this.model))},change:function(){f(this)},update:function(){this.views.detach(),this.model.fetch(),this.views.render()}}));var m=wp.media.view.EditImage.Details;m&&(wp.media.view.EditImage.Details=m.extend({initialize:function(t){n=this,this.frame=t.frame,wp.media.view.EditImage.prototype.initialize.apply(this,arguments),this.model.on("change:focalPoint",this.change,this)},loadEditor:function(){wp.media.view.EditImage.prototype.loadEditor.apply(this,arguments),e(document).one("image-editor-ui-ready",this.imageLoaded)},imageLoaded:function(){e(document).off("image-editor-ui-ready",this.imageLoaded);var t=n.model.get("id");"image"===n.model.get("type")&&(function(t,i){var e=wp.media.template("attachment-select-focal-point"),n=t.find("#imgedit-crop-".concat(i)),l=n.find("img");e&&n.length&&l.length&&(t.find(".image-focal"),a=t.find(".image-focal__wrapper"),c=t.find(".image-focal__point"),d=t.find(".image-focal__clickarea"),o=a.find("img"));var p=wp.media.template("attachment-save-focal-point"),f=t.find(".imgedit-submit");p&&(f.append(p),s=t.find("button.save-attachment-focal-point"))}(n.$el,t),p(n.model))},back:function(){this.frame.content.mode("edit-metadata")},change:function(){f(this)},update:function(){this.views.detach(),this.model.fetch(),this.views.render()}}))}))},function(t,i,e){}],[[0,1]]]);
//# sourceMappingURL=admin-7430a65d.js.map