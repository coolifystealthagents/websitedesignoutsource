'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger, useGSAP);
export function RefreshMotion({theme}:{theme:string}) {
 const anchor=useRef<HTMLSpanElement>(null);
 useGSAP(()=>{
  const root=anchor.current?.closest('.rf-experience');if(!root)return;
  const mm=gsap.matchMedia();
  mm.add('(prefers-reduced-motion: no-preference)',()=>{
   if(['studio','engineering','conversation'].includes(theme))root.querySelectorAll('.rf-method .rf-principles article').forEach(el=>{gsap.from(el,{y:24,opacity:.75,ease:'none',scrollTrigger:{trigger:el,start:'top 95%',end:'top 75%',scrub:true}});});
   if(['conversation','workspace','wellness'].includes(theme))root.querySelectorAll('.rf-team-section>img,.rf-card-photo img').forEach(el=>{gsap.from(el,{scale:.94,opacity:.85,ease:'none',scrollTrigger:{trigger:el,start:'top 100%',end:'top 78%',scrub:true}});});
   if(['engineering','wellness','mortgage'].includes(theme))root.querySelectorAll('.rf-principles article').forEach((el,i)=>{gsap.from(el,{y:18+i*7,scale:.98,ease:'power2.out',duration:.65,scrollTrigger:{trigger:el,start:'top 92%',toggleActions:'play none none reverse'}});});
  });
  mm.add('(min-width: 1101px) and (prefers-reduced-motion: no-preference)',()=>{
   if(!['studio','workspace','mortgage'].includes(theme))return;
   const section=root.querySelector('.rf-method'),heading=section?.querySelector('.rf-section-head');
   if(section&&heading)ScrollTrigger.create({trigger:heading,pin:heading,pinSpacing:false,start:'top 145px',endTrigger:section,end:'bottom bottom'});
  });
  return()=>mm.revert();
 },{scope:anchor,dependencies:[theme]});
 return <span ref={anchor} hidden/>;
}
