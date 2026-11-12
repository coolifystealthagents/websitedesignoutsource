import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import test from 'node:test';
const read=(file)=>readFile(new URL(file,import.meta.url),'utf8');
test('marketing photography has descriptive labels, local files, and distinct heroes',async()=>{
 const data=JSON.parse(await read('../app/refresh-data.json'));
 assert.notEqual(data.homeImage,data.servicesImage);
 for(const [image,alt] of [[data.homeImage,data.homeImageAlt],[data.servicesImage,data.servicesImageAlt],...data.services.map(s=>[s.image,s.alt])]){
  assert.ok(alt.length>12); await access(new URL('../public'+image,import.meta.url));
 }
});
test('homepage renders the shared hero once and exposes the full service directory',async()=>{
 const page=await read('../app/page.tsx');const experience=await read('../app/refresh-experience.tsx');
 assert.equal((page.match(/<RefreshHome\s*\/>/g)||[]).length,1);
 assert.equal((experience.match(/<HeroCopy\s*\/>/g)||[]).length,1);
 assert.match(experience,/View all \{d.services.length\} services/);
});
