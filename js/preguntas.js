function gestionarXml(e){var t=e.responseXML,n=t.getElementsByTagName("title")[0].innerHTML;ponerDatosInputHtml(n),respuestaInput=t.getElementById("quest001").getElementsByTagName("answer")[0].innerHTML;var a=t.getElementsByTagName("title")[5].innerHTML;ponerDatosInput2Html(a),respuestaInput2=t.getElementById("quest006").getElementsByTagName("answer")[0].innerHTML;var l=t.getElementsByTagName("title")[1].innerHTML,o=[],r=t.getElementById("quest002").getElementsByTagName("option").length;for(i=0;i<r;i++)o[i]=t.getElementById("quest002").getElementsByTagName("option")[i].innerHTML;ponerDatosSelectHtml(l,o),respuestaSelect=parseInt(t.getElementsByTagName("answer")[2].innerHTML);var s=t.getElementsByTagName("title")[6].innerHTML,u=[],r=t.getElementById("quest007").getElementsByTagName("option").length;for(i=0;i<r;i++)u[i]=t.getElementById("quest007").getElementsByTagName("option")[i].innerHTML;ponerDatosSelectHtml2(s,u),respuestaSelect2=parseInt(t.getElementById("quest007").getElementsByTagName("answer")[0].innerHTML);var m=t.getElementsByTagName("title")[2].innerHTML,d=[],r=t.getElementById("quest003").getElementsByTagName("option").length;for(i=0;i<r;i++)d[i]=t.getElementById("quest003").getElementsByTagName("option")[i].innerHTML;ponerDatosCheckboxHtml(m,d);var c=t.getElementById("quest003").getElementsByTagName("answer").length;for(i=0;i<c;i++)respuestasCheckbox[i]=t.getElementById("quest003").getElementsByTagName("answer")[i].innerHTML;var p=t.getElementsByTagName("title")[7].innerHTML,g=[],r=t.getElementById("quest008").getElementsByTagName("option").length;for(i=0;i<r;i++)g[i]=t.getElementById("quest008").getElementsByTagName("option")[i].innerHTML;ponerDatosCheckboxHtml2(p,g);var c=t.getElementById("quest008").getElementsByTagName("answer").length;for(i=0;i<c;i++)respuestasCheckbox2[i]=t.getElementById("quest008").getElementsByTagName("answer")[i].innerHTML;var E=t.getElementsByTagName("title")[3].innerHTML,y=[],r=t.getElementById("quest004").getElementsByTagName("option").length;for(i=0;i<r;i++)y[i]=t.getElementById("quest004").getElementsByTagName("option")[i].innerHTML;ponerDatosRadio(E,y),respuestaRadio=t.getElementById("quest004").getElementsByTagName("answer")[0].innerHTML;var h=t.getElementsByTagName("title")[8].innerHTML,B=[],r=t.getElementById("quest009").getElementsByTagName("option").length;for(i=0;i<r;i++)B[i]=t.getElementById("quest009").getElementsByTagName("option")[i].innerHTML;ponerDatosRadio2(h,B),respuestaRadio2=t.getElementById("quest009").getElementsByTagName("answer")[0].innerHTML;var T=t.getElementsByTagName("title")[4].innerHTML,f=[],r=t.getElementById("quest005").getElementsByTagName("option").length;for(i=0;i<r;i++)f[i]=t.getElementById("quest005").getElementsByTagName("option")[i].innerHTML;ponerDatosMultipleSelectHtml(T,f);var c=t.getElementById("quest005").getElementsByTagName("answer").length;for(i=0;i<c;i++)respuestasMultiple[i]=t.getElementById("quest005").getElementsByTagName("answer")[i].innerHTML;var I=t.getElementsByTagName("title")[9].innerHTML,H=[],r=t.getElementById("quest010").getElementsByTagName("option").length;for(i=0;i<r;i++)H[i]=t.getElementById("quest010").getElementsByTagName("option")[i].innerHTML;ponerDatosMultipleSelectHtml2(I,H);var c=t.getElementById("quest010").getElementsByTagName("answer").length;for(i=0;i<c;i++)respuestasMultiple2[i]=t.getElementById("quest010").getElementsByTagName("answer")[i].innerHTML}function corregirText(){var e=formElement.elements[0].value;e.toLowerCase()==respuestaInput?(darRespuestaHtml("1ª pregunta: 1 punto"),nota+=1):darRespuestaHtml("1ª pregunta: 0 puntos")}function corregirText2(){var e=document.getElementById("text2").value;e.toLowerCase()==respuestaInput2?(darRespuestaHtml("6ª pregunta: 1 punto"),nota+=1):darRespuestaHtml("6ª pregunta: 0 puntos")}function corregirSelect(){var e=document.getElementById("sel");e.selectedIndex-1==respuestaSelect?(darRespuestaHtml("2ª pregunta: 1 punto"),nota+=1):darRespuestaHtml("2ª pregunta: 0 puntos")}function corregirSelect2(){var e=document.getElementById("sel2");e.selectedIndex-1==respuestaSelect2?(darRespuestaHtml("7ª pregunta: 1 punto"),nota+=1):darRespuestaHtml("7ª pregunta: 0 puntos")}function corregirCheckbox(){var e=0,t=formElement,n=[];for(i=0;i<t.chckbx.length;i++)if(t.chckbx[i].checked){for(n[i]=!1,j=0;j<respuestasCheckbox.length;j++)i==respuestasCheckbox[j]&&(n[i]=!0);n[i]?(nota+=1/respuestasCheckbox.length,e+=1/respuestasCheckbox.length):nota-=1/respuestasCheckbox.length}darRespuestaHtml(1!=e?"3ª pregunta: "+e+" puntos":"3ª pregunta: "+e+" punto")}function corregirCheckbox2(){var e=0,t=formElement,n=[];for(i=0;i<t.chckbx2.length;i++)if(t.chckbx2[i].checked){for(n[i]=!1,j=0;j<respuestasCheckbox2.length;j++)i==respuestasCheckbox2[j]&&(n[i]=!0);n[i]?(nota+=1/respuestasCheckbox2.length,e+=1/respuestasCheckbox2.length):nota-=1/respuestasCheckbox2.length}darRespuestaHtml(1!=e?"8ª pregunta: "+e+" puntos":"8ª pregunta: "+e+" punto")}function corregirRadio(){var e=0,t=formElement,n=null;for(i=0;i<t.rd.length;i++)t.rd[i].checked&&(n=!1,i==respuestaRadio&&(n=!0),n&&(e+=1,nota+=1));darRespuestaHtml(1!=e?"4ª pregunta: "+e+" puntos":"4ª pregunta: "+e+" punto")}function corregirRadio2(){var e=0,t=formElement,n=null;for(i=0;i<t.rd2.length;i++)t.rd2[i].checked&&(n=!1,i==respuestaRadio2&&(n=!0),n&&(e+=1,nota+=1));darRespuestaHtml(1!=e?"9ª pregunta: "+e+" puntos":"9ª pregunta: "+e+" punto")}function corregirMultiple(){for(var e=[],t=document.getElementById("selectMultiple"),n=0,a=0;a<t.options.length;a++)if(t.options[a].selected)for(var l=0;l<respuestasMultiple.length;l++)t.options[a].value==respuestasMultiple[l]&&e.push(t.options[a].value);e.length>0&&(n=e.length/respuestasMultiple.length,nota+=n),darRespuestaHtml(1!=n&0!=n?"5ª pregunta: "+n.toFixed(1)+" puntos":0==n?"5ª pregunta: 0 puntos":"5ª pregunta: 1 punto")}function corregirMultiple2(){for(var e=[],t=document.getElementById("selectMultiple2"),n=0,a=0;a<t.options.length;a++)if(t.options[a].selected)for(var l=0;l<respuestasMultiple2.length;l++)t.options[a].value==respuestasMultiple2[l]&&e.push(t.options[a].value);e.length>0&&(n=e.length/respuestasMultiple2.length,nota+=n),darRespuestaHtml(1!=n&0!=n?"10ª pregunta: "+n.toFixed(1)+" puntos":0==n?"10ª pregunta: 0 puntos":"10ª pregunta: 1 punto")}function ponerDatosInputHtml(e){document.getElementById("tituloInput").innerHTML=e}function ponerDatosInput2Html(e){document.getElementById("tituloInput2").innerHTML=e}function ponerDatosSelectHtml(e,t){document.getElementById("tituloSelect").innerHTML=e;var n=document.getElementsByTagName("select")[0];for(i=0;i<t.length;i++){var a=document.createElement("option");a.text=t[i],a.value=i+1,n.options.add(a)}}function ponerDatosSelectHtml2(e,t){document.getElementById("tituloSelect2").innerHTML=e;var n=document.getElementsByTagName("select")[2];for(i=0;i<t.length;i++){var a=document.createElement("option");a.text=t[i],a.value=i+1,n.options.add(a)}}function ponerDatosCheckboxHtml(e,t){var n=document.getElementById("checkboxDiv");for(document.getElementById("tituloCheckbox").innerHTML=e,i=0;i<t.length;i++){var a=document.createElement("input"),l=document.createElement("label");l.innerHTML=t[i],l.setAttribute("for","chckbx_"+i),a.type="checkbox",a.name="chckbx",a.id="chckbx_"+i,n.appendChild(a),n.appendChild(l),n.appendChild(document.createElement("br"))}}function ponerDatosCheckboxHtml2(e,t){var n=document.getElementById("checkboxDiv2");for(document.getElementById("tituloCheckbox2").innerHTML=e,i=0;i<t.length;i++){var a=document.createElement("input"),l=document.createElement("label");l.innerHTML=t[i],l.setAttribute("for","chckbx2_"+i),a.type="checkbox",a.name="chckbx2",a.id="chckbx2_"+i,n.appendChild(a),n.appendChild(l),n.appendChild(document.createElement("br"))}}function ponerDatosRadio(e,t){var n=document.getElementById("radioDiv");for(document.getElementById("tituloRadio").innerHTML=e,i=0;i<t.length;i++){var a=document.createElement("input"),l=document.createElement("label");l.innerHTML=t[i],l.setAttribute("for","rd_"+i),a.type="radio",a.name="rd",a.id="rd_"+i,n.appendChild(a),n.appendChild(l),n.appendChild(document.createElement("br"))}}function ponerDatosRadio2(e,t){var n=document.getElementById("radioDiv2");for(document.getElementById("tituloRadio2").innerHTML=e,i=0;i<t.length;i++){var a=document.createElement("input"),l=document.createElement("label");l.innerHTML=t[i],l.setAttribute("for","rd2_"+i),a.type="radio",a.name="rd2",a.id="rd2_"+i,n.appendChild(a),n.appendChild(l),n.appendChild(document.createElement("br"))}}function ponerDatosMultipleSelectHtml(e,t){document.getElementById("tituloSelectMultiple").innerHTML=e;var n=document.getElementsByTagName("select")[1];for(i=0;i<t.length;i++){var a=document.createElement("option");a.text=t[i],a.value=i+1,n.options.add(a)}}function ponerDatosMultipleSelectHtml2(e,t){document.getElementById("tituloSelectMultiple2").innerHTML=e;var n=document.getElementsByTagName("select")[3];for(i=0;i<t.length;i++){var a=document.createElement("option");a.text=t[i],a.value=i+1,n.options.add(a)}}function darRespuestaHtml(e){var t=document.createElement("p"),n=document.createTextNode(e);t.appendChild(n),document.getElementById("resultadosDiv").appendChild(t)}function darRespuestaTotal(e){document.getElementById("myform").style.display="none",document.getElementById("resultadoTotal").style.display="block";var t=document.createElement("p"),n=document.getElementById("respuestas");t.id="total",n.id="respuestas";var a=document.createTextNode(e),l=document.createTextNode("Para puntuación detallada, pulsa aquí:");t.appendChild(a),n.appendChild(l),document.getElementById("resultadoTotal").appendChild(t),document.getElementById("resultadoTotal").appendChild(n)}function tituloCorreccion(){darRespuestaHtml("Puntuación obtenida por pregunta:")}function presentarNota(){darRespuestaTotal("Puntuación total: "+nota.toFixed(2))}function inicializar(){document.getElementById("resultadosDiv").innerHTML="",nota=0}function comprobar(){var e=formElement,t=!1,n=!1,a=!1,l=!1;for(i=0;i<e.chckbx.length;i++)e.chckbx[i].checked&&(t=!0);for(i=0;i<e.chckbx2.length;i++)e.chckbx2[i].checked&&(n=!0);for(i=0;i<e.rd.length;i++)e.rd[i].checked&&(a=!0);for(i=0;i<e.rd2.length;i++)e.rd2[i].checked&&(l=!0);return""==document.getElementById("text").value?(document.getElementById("text").focus(),alert("La 1ª pregunta es obligatoria"),!1):0==e.elements[1].selectedIndex?(document.getElementById("text").focus(),alert("Selecciona una de las opciones en la 2ª pregunta"),!1):t?a?-1==document.getElementById("selectMultiple").selectedIndex?(alert("Responde la 5ª pregunta"),document.getElementById("selectMultiple").focus,!1):""==document.getElementById("text2").value?(document.getElementById("text2").focus(),alert("La 6ª pregunta es obligatoria"),!1):0==document.getElementById("sel2").selectedIndex?(document.getElementById("sel2").focus(),alert("Selecciona una de las opciones en la 7ª pregunta"),!1):n?l?-1==document.getElementById("selectMultiple2").selectedIndex?(alert("Responde la 10ª pregunta"),document.getElementById("selectMultiple2").focus,!1):!0:(document.getElementById("tituloRadio2").focus(),alert("Selecciona una opción en la 9ª pregunta"),!1):(document.getElementById("tituloCheckbox2").focus(),alert("Debes elegir una opción en la 8ª pregunta"),!1):(document.getElementById("tituloRadio").focus(),alert("Selecciona una opción en la 4ª pregunta"),!1):(document.getElementById("tituloCheckbox").focus(),alert("Debes elegir una opción en la 3ª pregunta"),!1)}var formElement=null,respuestaInput=null,respuestaInput2=null,respuestaSelect=null,respuestaSelect2=null,respuestasCheckbox=[],respuestasCheckbox2=[],respuestaRadio=null,respuestaRadio2=null,respuestasMultiple=[],respuestasMultiple2=[],nota=0;window.onload=function(){formElement=document.getElementById("myform"),formElement.onsubmit=function(){return inicializar(),tituloCorreccion(),corregirText(),corregirSelect(),corregirCheckbox(),corregirRadio(),corregirMultiple(),corregirText2(),corregirSelect2(),corregirCheckbox2(),corregirRadio2(),corregirMultiple2(),presentarNota(),!1};var e=new XMLHttpRequest;e.onreadystatechange=function(){4==this.readyState&&200==this.status&&gestionarXml(this)},e.open("GET","xml/preguntas.xml",!0),e.send(),window.onmousedown=function(e){var t=e.target;if("option"==t.tagName.toLowerCase()&&t.parentNode.hasAttribute("multiple")){e.preventDefault(),t.hasAttribute("selected")?t.removeAttribute("selected"):t.setAttribute("selected","");var n=t.parentNode.cloneNode(!0);t.parentNode.parentNode.replaceChild(n,t.parentNode)}},document.getElementById("respuestas").onclick=function(){document.getElementById("resultadoTotal").style.display="none",document.getElementById("resultadosDiv").style.display="block"}};;
