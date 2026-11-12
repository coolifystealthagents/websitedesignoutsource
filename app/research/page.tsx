import { Header, Footer } from '../components';
import { Library } from '../library';
import { normalizePosts } from '../library-normalize';
import { researchPosts } from '../fleet-content';
import { contentResearchPosts } from '../content-library';
export const metadata={title:'Research',description:"Explore sourced perspectives on web production, usability, performance, and the decisions behind a dependable website.",alternates:{canonical:'/research'},openGraph:{images:[{url:"/library-20261112/studio-research-196644.webp",alt:"Notebook with hand-drawn website wireframes beside a smartphone"}]}};
export default function Index(){const posts=normalizePosts([...contentResearchPosts,...researchPosts.filter(p=>!contentResearchPosts.some(c=>c.slug===p.slug))]);const schema={'@context':'https://schema.org','@type':'CollectionPage',name:'Research',url:'https://websitedesignoutsource.com/research',mainEntity:{'@type':'ItemList',itemListElement:posts.map((p,index)=>({'@type':'ListItem',position:index+1,url:`https://websitedesignoutsource.com/research/${p.slug}`,name:p.title}))}};return <><Header/><main><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,"\u003c")}}/><Library kind="research" posts={posts}/></main><Footer/></>;}
