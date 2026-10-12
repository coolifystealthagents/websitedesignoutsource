import json,textwrap
from pathlib import Path
from PIL import Image,ImageDraw,ImageFont
r=Path(__file__).resolve().parents[2];m=json.loads((r/'publishing/2026-10-12/manifest.json').read_text());(r/'public/oct12-heroes').mkdir(parents=True,exist_ok=True);fp='/System/Library/Fonts/Supplemental/Arial Bold.ttf'
for i,a in enumerate(m['articles']):
 b=[(22,27,52),(24,48,51),(54,31,48),(35,42,25)][i%4];c=[(119,139,255),(75,210,194),(246,127,181),(185,218,84)][i%4];im=Image.new('RGB',(1200,630),b);d=ImageDraw.Draw(im);d.rectangle((0,0,700,630),fill=tuple(max(0,x-7)for x in b));sm=ImageFont.truetype(fp,22);d.rounded_rectangle((55,48,475,90),8,fill=c);d.text((70,60),'DESIGN GUIDE' if a['section']=='Blog' else 'DESIGN RESEARCH',font=sm,fill=b)
 for n in range(6):
  x=770+(i*43+n*29)%140;y=55+n*82;d.rounded_rectangle((x,y,x+275,y+48),10,outline=c,width=3);d.line((x-45,y+24,x,y+24),fill=c,width=3)
 size=48
 while 1:
  f=ImageFont.truetype(fp,size);lines=textwrap.wrap(a['title'],31)
  if len(lines)<=3 and max(d.textbbox((0,0),z,font=f)[2]for z in lines)<=600:break
  size-=2
 y=150
 for z in lines:d.text((55,y),z,font=f,fill=(249,249,244));y+=size+14
 d.text((55,538),'WebsiteDesignOutsource',font=sm,fill=(249,249,244));d.text((55,575),'Route · state · evidence · owner',font=sm,fill=c);im.save(r/a['thumbnailPath'],'WEBP',quality=86,method=6)
print(len(m['articles']))
