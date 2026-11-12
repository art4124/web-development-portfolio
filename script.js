(function(){
  const menuButton=document.querySelector('.menu-toggle');
  const nav=document.querySelector('.site-nav');
  if(menuButton&&nav){
    menuButton.addEventListener('click',()=>{
      const open=nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded',String(open));
      menuButton.setAttribute('aria-label',open?'Close navigation':'Open navigation');
    });
    nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded','false');
      menuButton.setAttribute('aria-label','Open navigation');
    }));
  }

  const revealItems=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },{threshold:.12});
    revealItems.forEach(item=>observer.observe(item));
  }else{
    revealItems.forEach(item=>item.classList.add('visible'));
  }

  const featuredWrap=document.querySelector('.featured-projects');
  const featuredSlides=featuredWrap?Array.from(featuredWrap.querySelectorAll('.hero-project-preview')):[];
  const featuredCard=featuredWrap?featuredWrap.closest('.browser-card'):null;
  const featuredVisual=featuredWrap?featuredWrap.closest('.hero-visual'):null;
  const applyFeaturedTheme=(slide)=>{
    const theme=(slide&&slide.dataset.featureTheme)||'web';
    if(featuredCard)featuredCard.dataset.featureTheme=theme;
    if(featuredVisual)featuredVisual.dataset.featureTheme=theme;
  };
  if(featuredSlides.length)applyFeaturedTheme(featuredSlides[0]);
  if(featuredSlides.length>1 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    let featuredIndex=0;
    const interval=Number(featuredWrap.dataset.featuredInterval)||8000;
    let featuredTimer=null;
    const showFeatured=(nextIndex)=>{
      featuredSlides[featuredIndex].classList.remove('active');
      featuredIndex=(nextIndex+featuredSlides.length)%featuredSlides.length;
      const nextSlide=featuredSlides[featuredIndex];
      nextSlide.classList.add('active');
      applyFeaturedTheme(nextSlide);
    };
    const startFeatured=()=>{
      if(featuredTimer)return;
      featuredTimer=window.setInterval(()=>showFeatured(featuredIndex+1),interval);
    };
    const stopFeatured=()=>{
      if(!featuredTimer)return;
      window.clearInterval(featuredTimer);
      featuredTimer=null;
    };
    document.addEventListener('visibilitychange',()=>{
      if(document.hidden)stopFeatured();else startFeatured();
    });
    applyFeaturedTheme(featuredSlides[0]);
    startFeatured();
  }

  const track=document.querySelector('.carousel-track');
  const slides=track?Array.from(track.querySelectorAll('.project-slide')):[];
  const prev=document.querySelector('.carousel-arrow.prev');
  const next=document.querySelector('.carousel-arrow.next');
  const dotsWrap=document.querySelector('.carousel-dots');
  const count=document.querySelector('.carousel-count');
  const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let index=0;
  let visualIndex=slides.length>1?1:0;
  let animating=false;
  let settleTimer=null;
  let touchStartX=null;

  // Add visual-only end slides so the last-to-first transition moves forward,
  // and the first-to-last transition moves backward, without a visible rewind.
  if(track&&slides.length>1){
    const makeClone=(slide)=>{
      const clone=slide.cloneNode(true);
      clone.setAttribute('aria-hidden','true');
      clone.setAttribute('inert','');
      clone.querySelectorAll('a,button,input,select,textarea,[tabindex]').forEach(el=>el.setAttribute('tabindex','-1'));
      return clone;
    };
    track.insertBefore(makeClone(slides[slides.length-1]),slides[0]);
    track.appendChild(makeClone(slides[0]));
  }

  function positionTrack(immediate){
    if(!track)return;
    if(immediate)track.style.transition='none';
    track.style.transform='translateX(-'+(visualIndex*100)+'%)';
    if(immediate){
      // Force the invisible snap to complete before restoring slide animation.
      void track.offsetWidth;
      track.style.transition='';
    }
  }

  function updateNavigation(){
    if(prev)prev.disabled=slides.length<=1;
    if(next)next.disabled=slides.length<=1;
    if(count)count.textContent=String(index+1).padStart(2,'0')+' / '+String(slides.length).padStart(2,'0');
    if(dotsWrap)Array.from(dotsWrap.children).forEach((dot,n)=>dot.classList.toggle('active',n===index));
  }

  function settle(){
    if(!animating)return;
    animating=false;
    if(settleTimer!==null){
      window.clearTimeout(settleTimer);
      settleTimer=null;
    }
    if(visualIndex===0){
      visualIndex=slides.length;
      positionTrack(true);
    }else if(visualIndex===slides.length+1){
      visualIndex=1;
      positionTrack(true);
    }
  }

  function renderDots(){
    if(!dotsWrap)return;
    dotsWrap.innerHTML='';
    slides.forEach((_,i)=>{
      const button=document.createElement('button');
      button.type='button';
      button.className='carousel-dot'+(i===0?' active':'');
      button.setAttribute('aria-label','Show project '+(i+1));
      button.addEventListener('click',()=>goTo(i));
      dotsWrap.appendChild(button);
    });
  }

  function goTo(i){
    if(!slides.length||animating)return;
    const target=((i%slides.length)+slides.length)%slides.length;
    if(target===index)return;
    if(slides.length>1){
      if(i===index+1 || (index===slides.length-1&&target===0)){
        visualIndex+=1;
      }else if(i===index-1 || (index===0&&target===slides.length-1)){
        visualIndex-=1;
      }else{
        visualIndex=target+1;
      }
    }else{
      visualIndex=0;
    }
    index=target;
    updateNavigation();
    if(reducedMotion){
      visualIndex=index+1;
      positionTrack(true);
      return;
    }
    animating=true;
    positionTrack(false);
    // Recover if the browser suppresses transitionend (e.g. tab hidden).
    settleTimer=window.setTimeout(settle,650);
  }

  if(slides.length){
    renderDots();
    positionTrack(true);
    updateNavigation();
    if(track)track.addEventListener('transitionend',e=>{
      if(e.target===track&&e.propertyName==='transform')settle();
    });
    if(prev)prev.addEventListener('click',()=>goTo(index-1));
    if(next)next.addEventListener('click',()=>goTo(index+1));
    const viewport=document.querySelector('.carousel-viewport');
    if(viewport){
      viewport.addEventListener('touchstart',e=>{touchStartX=e.changedTouches[0].clientX},{passive:true});
      viewport.addEventListener('touchend',e=>{
        if(touchStartX===null)return;
        const dx=e.changedTouches[0].clientX-touchStartX;
        if(Math.abs(dx)>50)goTo(index+(dx<0?1:-1));
        touchStartX=null;
      },{passive:true});
    }
  }
})();