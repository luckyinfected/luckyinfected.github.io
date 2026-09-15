(() => {
  const c = window.BIO_CONFIG || {};
  const $ = (s) => document.querySelector(s);
  const set = (s,v) => { const e=$(s); if(e && v!==undefined && v!==null) e.textContent=v; };

  document.title = c.pageTitle || "bio";

  if(c.colors?.accent) document.documentElement.style.setProperty("--accent",c.colors.accent);
  if(c.colors?.accent2) document.documentElement.style.setProperty("--accent2",c.colors.accent2);

  const p = c.profile || {};
  set("#name",p.name);
  set("#username",p.username);
  set("#domain-pill",p.domain);
  set("#bio-title",p.bioTitle);
  set("#bio-text",p.bioText);
  set("#footer-name",p.footer || p.name);

  const avatar=$("#avatar");
  if(avatar && p.avatar) avatar.src=p.avatar;

  const banner=$("#banner");
  if(banner && p.banner) banner.src=p.banner;

  const bs=c.bannerStyle || {};
  const bannerStage=document.querySelector(".banner-stage");
  function fitBanner(){
    if(!banner || !bannerStage) return;
    const rotate=Number(bs.rotate || 0);
    const quarterTurn=Math.abs(rotate % 180) === 90;
    banner.style.objectPosition=bs.position || "center center";
    banner.style.left="50%";
    banner.style.top="50%";
    if(quarterTurn){
      banner.style.width=`${bannerStage.clientHeight}px`;
      banner.style.height=`${bannerStage.clientWidth}px`;
    }else{
      banner.style.width="100%";
      banner.style.height="100%";
    }
    banner.style.transform=`translate(-50%, -50%) rotate(${rotate}deg)`;
  }
  fitBanner();
  window.addEventListener("resize",fitBanner);

  const badges=$("#badges");
  if(badges){
    badges.innerHTML="";
    (c.badges||[]).forEach(b=>{
      const el=document.createElement("span");
      el.className="badge";
      el.innerHTML=`<span>${b.icon||"•"}</span><span></span>`;
      el.lastElementChild.textContent=b.text||"";
      badges.appendChild(el);
    });
  }

  const links=$("#links");
  if(links){
    links.innerHTML="";
    (c.links||[]).forEach(l=>{
      const a=document.createElement("a");
      a.className="link";
      a.href=l.url||"#";
      a.target="_blank";
      a.rel="noopener noreferrer";

      const icon=document.createElement("span");
      icon.className=`brand-icon ${l.iconClass||""}`;
      const img=document.createElement("img");
      img.src=l.icon||"";
      img.alt="";
      icon.appendChild(img);

      const copy=document.createElement("span");
      copy.className="link-copy";
      const strong=document.createElement("strong");
      strong.textContent=l.title||"link";
      const small=document.createElement("span");
      small.textContent=l.subtitle||l.url||"";
      copy.append(strong,small);

      a.append(icon,copy);
      links.appendChild(a);
    });
  }

  const connections=$("#connections");
  if(connections){
    connections.innerHTML="";
    (c.connections||[]).forEach(x=>{
      const el=document.createElement(x.url ? "a" : "div");
      el.className="connection";
      if(x.url){
        el.href=x.url;
        el.target="_blank";
        el.rel="noopener noreferrer";
        el.title=`Abrir ${x.name}`;
      }
      const img=document.createElement("img");
      img.src=x.icon||"";
      img.alt="";
      const txt=document.createElement("span");
      txt.textContent=x.value ? `${x.name} · ${x.value}` : x.name;
      const arrow=document.createElement("span");
      arrow.className="connection-arrow";
      arrow.textContent=x.url ? "↗" : "";
      el.append(img,txt,arrow);
      connections.appendChild(el);
    });
  }

  try{
    const key="lucky-bio-v3-views";
    const v=Number(localStorage.getItem(key)||0)+1;
    localStorage.setItem(key,String(v));
    set("#views",v.toLocaleString("pt-BR"));
  }catch{set("#views","1")}

  $("#copy-profile")?.addEventListener("click",async()=>{
    const b=$("#copy-profile");
    try{
      await navigator.clipboard.writeText(location.href);
      b.textContent="copiado";
      setTimeout(()=>b.textContent="copiar perfil",1200);
    }catch{}
  });

  const spotify=c.spotify || {};
  const spotifyEmbed=$("#spotify-embed");
  if(spotifyEmbed && spotify.trackUrl){
    const match=spotify.trackUrl.match(/track\/([A-Za-z0-9]+)/);
    if(match){
      const iframe=document.createElement("iframe");
      iframe.style.borderRadius="12px";
      iframe.src=`https://open.spotify.com/embed/track/${match[1]}?utm_source=generator&theme=0`;
      iframe.width="100%";
      iframe.height=spotify.compact ? "80" : "152";
      iframe.frameBorder="0";
      iframe.allowFullscreen=true;
      iframe.allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
      iframe.loading="lazy";
      iframe.title="Spotify player";
      spotifyEmbed.appendChild(iframe);
    }
  }

  set("#year",new Date().getFullYear());

  const canvas=$("#particles");
  if(!c.particles||!canvas){if(canvas)canvas.style.display="none";return}
  const ctx=canvas.getContext("2d");
  let W,H,dpr,parts=[];
  function resize(){
    W=innerWidth;H=innerHeight;dpr=Math.min(devicePixelRatio||1,2);
    canvas.width=W*dpr;canvas.height=H*dpr;
    canvas.style.width=W+"px";canvas.style.height=H+"px";
    ctx.setTransform(dpr,0,0,dpr,0,0);
    parts=Array.from({length:40},()=>({
      x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.5+.25,
      a:Math.random()*.18+.035,vy:Math.random()*.14+.02
    }));
  }
  function frame(){
    ctx.clearRect(0,0,W,H);
    for(const p of parts){
      p.y+=p.vy;
      if(p.y>H+3){p.y=-3;p.x=Math.random()*W}
      ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle=`rgba(225,184,155,${p.a})`;ctx.fill();
    }
    requestAnimationFrame(frame);
  }
  resize();frame();addEventListener("resize",resize);
})();