// JavaScript Document

<!--
function nph_change_img_src(name, nsdoc, rpath)
{
     var img = eval((navigator.appName.indexOf('Netscape', 0) != -1) ? nsdoc+'.'+name : 'document.all.'+name);
     if (name == '')    return;
     if (img) {  img.altsrc = img.src;  img.src = rpath; }
}
// -->
