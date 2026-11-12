import {notFound} from 'next/navigation';
import {ServiceDetail} from '../../inner-pages';
import data from '../../refresh-data.json';
import {fleetServices} from '../../fleet-content';
import {serviceDetails} from '../../service-details';
import {Header,Footer} from '../../components';
export function generateStaticParams(){return fleetServices.map(x=>({slug:x.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const v=data.services.find(x=>x.slug===slug);if(!v)return {};return {title:v.title,description:v.description,alternates:{canonical:'https://websitedesignoutsource.com/services/'+slug},openGraph:{title:v.title,description:v.description,images:[{url:v.image,alt:v.alt}]}}}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const v=fleetServices.find(x=>x.slug===slug),b=serviceDetails[slug];if(!v||!b)notFound();const content={slug,audience:[b.audience],problem:b.problem,inputs:b.inputs,work:b.work,outputs:b.deliverables,controls:b.controls,boundaries:b.boundaries,scenarios:b.scenarios,workflow:[],faqs:b.faqs.map(([question,answer])=>({question,answer}))};
const display=data.services.find(x=>x.slug===slug)!;const schema={'@context':'https://schema.org','@type':'Service',name:display.title,description:display.description,url:'https://websitedesignoutsource.com/services/'+slug,provider:{'@type':'Organization',name:data.brand}};
return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><Header/><main id="main-content"><ServiceDetail content={content}/></main><Footer/></>}
