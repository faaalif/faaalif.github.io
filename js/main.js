(function(){
  var T={
    es:{
      title:"Fátima Vázquez | Portafolio de TI",
      nav_projects:"Proyectos",nav_skills:"Habilidades",nav_certs:"Certificaciones",nav_contact:"Contacto",
      lead:"Estudiante de <strong>Tecnologías de la Información</strong> en la Universidad Politécnica de San Luis Potosí. Construyo apps, bases de datos y proyectos con código. Busco mis primeras prácticas en desarrollo, bases de datos o soporte técnico.",
      cta_cv:"Descargar CV",cta_write:"Escríbeme",code:"Ver código en GitHub",
      st_proj:"Proyectos",st_cert:"Certificaciones",st_tech:"Tecnologías",
      piano_t:"Piano virtual",
      piano_d:"Aplicación de visión por computadora que detecta colores en la imagen de la cámara y asigna a cada uno una nota musical.",
      keys_label:"Una demo rápida: en el proyecto cada color es una nota. Toca las teclas.",
      kardex_t:"Sistema de kardex académico",
      kardex_d:"Proyecto en equipo. Plataforma web donde el alumno ingresa su matrícula y obtiene su promedio, su horario y sugerencias de materias para el siguiente semestre. Tiene usuarios de administrador y de docente. Me encargué principalmente del front-end y colaboré en la base de datos.",
      kardex_link:"Ver versión de prueba",
      kardex_n:"El dominio original ya no está activo. Esta es la versión de prueba.",
      chat_t:"Chat en tiempo real",
      chat_d:"Proyecto en equipo. Aplicación de mensajería en vivo con el servidor alojado en AWS.",
      chat_n:"El servidor ya no está activo. Código y capturas próximamente.",
      ball_d:"Juego de lógica en consola, hecho con programación estructurada.",
      ig_t:"Comparador de seguidores de Instagram",
      ig_d:"Script que lee los datos exportados de Instagram e identifica las cuentas que sigues y no te siguen de vuelta.",
      plan_t:"Planificador de estudio y tareas",plan_tech:"Aplicación web, en desarrollo",
      plan_d:"Organiza tareas y tiempo de estudio. Replanifica automáticamente cuando algo se atrasa y muestra un mapa de calor con tu carga de trabajo por día.",
      sk_lang:"Lenguajes",sk_py:"Python (básico)",sk_db:"Bases de datos",sk_cloud:"Nube y herramientas",
      sk_spoken:"Idiomas",sk_spoken_d:"Español nativo. Inglés intermedio, nivel B2 con certificación Cambridge.",
      contact_intro:"¿Tienes una vacante de prácticas o quieres platicar de un proyecto? Déjame un mensaje y te respondo por correo.",
      cv_pdf:"Descargar CV en PDF",ok:"Mensaje enviado. Gracias, te respondo pronto.",
      f_name:"Nombre",f_mail:"Tu correo",f_msg:"Mensaje",f_send:"Enviar mensaje",f_err:"Revisa los campos marcados: todos son obligatorios y el correo debe ser válido.",
      soft_h:"Habilidades blandas",
      soft1_t:"Trabajo en equipo",soft1_d:"Participé en el desarrollo del chat en tiempo real como proyecto en equipo.",
      soft2_t:"Aprendizaje continuo",soft2_d:"Aprendo herramientas nuevas construyendo proyectos reales, como OpenCV, AWS y MySQL.",
      soft3_t:"Resolución de problemas",soft3_d:"Me gusta convertir problemas en lógica: juegos, visión por computadora y automatización de tareas.",
      soft4_t:"Comunicación",soft4_d:"Me comunico con claridad en español y en inglés (nivel B2).",
      cv:"assets/cv/CV_Fatima_Vazquez.pdf",notes:["do","re","mi","fa","sol","la","si"],theme_aria:"Cambiar tema"
    },
    en:{
      title:"Fátima Vázquez | IT Portfolio",
      nav_projects:"Projects",nav_skills:"Skills",nav_certs:"Certifications",nav_contact:"Contact",
      lead:"I'm an <strong>Information Technology</strong> student at the Polytechnic University of San Luis Potosí. I build apps, databases and coding projects. I'm looking for my first internship in development, databases or technical support.",
      cta_cv:"Download CV",cta_write:"Get in touch",code:"View code on GitHub",
      st_proj:"Projects",st_cert:"Certifications",st_tech:"Technologies",
      piano_t:"Virtual piano",
      piano_d:"A computer vision app that detects colors in the camera image and assigns a musical note to each one.",
      keys_label:"A quick demo: in the project, every color is a note. Try the keys.",
      kardex_t:"Academic records system",
      kardex_d:"Team project. A web platform where students enter their student ID and get their GPA, their schedule and suggestions for which courses to take next semester. It has administrator and teacher accounts. I mainly built the front end and helped with the database.",
      kardex_link:"View test version",
      kardex_n:"The original domain is no longer active. This is the test version.",
      chat_t:"Real-time chat",
      chat_d:"Team project. A live messaging app with the server hosted on AWS.",
      chat_n:"The server is no longer active. Code and screenshots coming soon.",
      ball_d:"A logic game for the console, built with structured programming.",
      ig_t:"Instagram followers comparer",
      ig_d:"A script that reads exported Instagram data and finds the accounts you follow that don't follow you back.",
      plan_t:"Study and task planner",plan_tech:"Web app, in development",
      plan_d:"It organizes tasks and study time. It reschedules automatically when something falls behind and shows a heat map of your daily workload.",
      sk_lang:"Programming languages",sk_py:"Python (basic)",sk_db:"Databases",sk_cloud:"Cloud and tools",
      sk_spoken:"Spoken languages",sk_spoken_d:"Spanish (native). English (intermediate, B2 level with Cambridge certification).",
      contact_intro:"Do you have an internship opening, or do you want to talk about a project? Leave me a message and I'll reply by email.",
      cv_pdf:"Download CV (PDF)",ok:"Message sent. Thank you, I'll reply soon.",
      f_name:"Name",f_mail:"Your email",f_msg:"Message",f_send:"Send message",f_err:"Please check the marked fields: all are required and the email must be valid.",
      soft_h:"Soft skills",
      soft1_t:"Teamwork",soft1_d:"I took part in building the real-time chat as a team project.",
      soft2_t:"Continuous learning",soft2_d:"I learn new tools by building real projects, like OpenCV, AWS and MySQL.",
      soft3_t:"Problem solving",soft3_d:"I like turning problems into logic: games, computer vision and task automation.",
      soft4_t:"Communication",soft4_d:"I communicate clearly in Spanish and English (B2 level).",
      cv:"assets/cv/CV_Fatima_Vazquez_EN.pdf",notes:["C","D","E","F","G","A","B"],theme_aria:"Toggle theme"
    }
  };

  var reduce=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function setLang(l){
    var d=T[l]; if(!d) return;
    document.documentElement.lang=l;
    document.title=d.title;
    document.querySelectorAll("[data-i18n]").forEach(function(el){var v=d[el.dataset.i18n]; if(v!==undefined) el.textContent=v;});
    document.querySelectorAll("[data-i18n-html]").forEach(function(el){var v=d[el.dataset.i18nHtml]; if(v!==undefined) el.innerHTML=v;});
    document.querySelectorAll(".cv-link").forEach(function(a){a.setAttribute("href",d.cv);});
    document.querySelectorAll(".key").forEach(function(k,i){k.textContent=d.notes[i];});
    document.querySelectorAll(".lang button").forEach(function(b){b.setAttribute("aria-pressed",b.dataset.lang===l?"true":"false");});
    document.getElementById("theme").setAttribute("aria-label",d.theme_aria);
    try{localStorage.setItem("lang",l);}catch(e){}
  }
  var saved=null; try{saved=localStorage.getItem("lang");}catch(e){}
  setLang(saved||((navigator.language||"es").toLowerCase().indexOf("es")===0?"es":"en"));
  document.querySelectorAll(".lang button").forEach(function(b){b.addEventListener("click",function(){setLang(b.dataset.lang);});});

  /* tema claro / oscuro */
  var root=document.documentElement;
  try{var th=localStorage.getItem("theme"); if(th) root.setAttribute("data-theme",th);}catch(e){}
  document.getElementById("theme").addEventListener("click",function(){
    var cur=root.getAttribute("data-theme")||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");
    var next=cur==="dark"?"light":"dark";
    root.setAttribute("data-theme",next);
    try{localStorage.setItem("theme",next);}catch(e){}
  });

  if(location.search.indexOf("enviado=1")>-1){document.getElementById("ok").classList.add("show");}

  /* validación propia del formulario (sin la burbuja del navegador) */
  var form=document.getElementById("contactForm");
  if(form){
    var req=[].slice.call(form.querySelectorAll("[required]"));
    form.addEventListener("submit",function(e){
      var bad=[];
      req.forEach(function(f){
        var v=f.value.trim(), good=v.length>0;
        if(f.type==="email") good=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        f.classList.toggle("err",!good);
        f.setAttribute("aria-invalid",good?"false":"true");
        if(!good) bad.push(f);
      });
      document.getElementById("errmsg").hidden=bad.length===0;
      if(bad.length){e.preventDefault();bad[0].focus();}
    });
    req.forEach(function(f){f.addEventListener("input",function(){f.classList.remove("err");f.setAttribute("aria-invalid","false");});});
  }

  /* barra con borde al hacer scroll */
  var bar=document.getElementById("bar");
  function onScroll(){bar.classList.toggle("scrolled",window.scrollY>8);}
  window.addEventListener("scroll",onScroll,{passive:true}); onScroll();

  /* marquesina de tecnologías */
  var techs=["Java","C","C++","JavaScript","PHP","Python","HTML","CSS","MySQL","AWS","Git","GitHub","Linux","OpenCV"];
  var colors=["--n1","--n2","--n3","--n4","--n5","--n6","--n7"];
  var track=document.getElementById("track"), html="";
  for(var r=0;r<2;r++){techs.forEach(function(t,i){html+='<span style="--c:var('+colors[i%7]+')">'+t+'</span>';});}
  track.innerHTML=html;

  /* contadores */
  function count(el){
    var t=parseInt(el.dataset.t,10);
    if(reduce){el.textContent=t;return;}
    var start=null;
    function step(ts){
      if(!start) start=ts;
      var p=Math.min((ts-start)/1100,1), e=1-Math.pow(1-p,3);
      el.textContent=Math.round(t*e);
      if(p<1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* aparecer al hacer scroll */
  var items=[].slice.call(document.querySelectorAll(".reveal"));
  items.forEach(function(el){
    var sibs=[].slice.call(el.parentNode.children).filter(function(c){return c.classList.contains("reveal");});
    el.style.setProperty("--d",sibs.indexOf(el));
  });
  function show(el){
    el.classList.add("in");
    el.querySelectorAll(".num").forEach(count);
    setTimeout(function(){el.classList.remove("reveal","in");el.style.removeProperty("--d");},900);
  }
  if("IntersectionObserver" in window && !reduce){
    var io=new IntersectionObserver(function(es){
      es.forEach(function(e){if(e.isIntersecting){show(e.target);io.unobserve(e.target);}});
    },{threshold:.12});
    items.forEach(function(el){io.observe(el);});
  }else{
    items.forEach(function(el){el.classList.remove("reveal");el.querySelectorAll(".num").forEach(count);});
  }

  /* piano */
  var ctx=null;
  function play(f){
    try{
      ctx=ctx||new (window.AudioContext||window.webkitAudioContext)();
      var o=ctx.createOscillator(), g=ctx.createGain();
      o.type="triangle"; o.frequency.value=f;
      g.gain.setValueAtTime(0.0001,ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.25,ctx.currentTime+0.02);
      g.gain.exponentialRampToValueAtTime(0.0001,ctx.currentTime+0.9);
      o.connect(g); g.connect(ctx.destination);
      o.start(); o.stop(ctx.currentTime+1);
    }catch(e){}
  }
  document.querySelectorAll(".key").forEach(function(k){
    k.addEventListener("click",function(e){
      play(parseFloat(k.dataset.f));
      k.classList.add("on");
      setTimeout(function(){k.classList.remove("on")},140);
      var rect=k.getBoundingClientRect(), rp=document.createElement("span");
      rp.className="ripple";
      rp.style.left=(e.detail===0?rect.width/2:e.clientX-rect.left)+"px";
      rp.style.top=(e.detail===0?rect.height/2:e.clientY-rect.top)+"px";
      k.appendChild(rp);
      setTimeout(function(){rp.remove()},700);
    });
  });
})();
