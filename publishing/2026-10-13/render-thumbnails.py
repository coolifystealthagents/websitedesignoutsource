#!/usr/bin/env python3
import json
import textwrap
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT=Path(__file__).resolve().parents[2]
manifest=json.loads((ROOT/'publishing/2026-10-13/manifest.json').read_text())
out=ROOT/'public/oct13-heroes'; out.mkdir(parents=True,exist_ok=True)
bold='/System/Library/Fonts/Supplemental/Arial Bold.ttf'
regular='/System/Library/Fonts/Supplemental/Arial.ttf'
palettes=[((19,32,62),(100,156,255)),((24,50,50),(74,214,186)),((55,31,53),(244,126,181)),((33,43,26),(191,220,88)),((37,35,67),(166,133,255))]

for i,a in enumerate(manifest['articles']):
    bg,accent=palettes[i%len(palettes)]
    im=Image.new('RGB',(1200,630),bg); d=ImageDraw.Draw(im)
    d.rectangle((0,0,720,630),fill=tuple(max(0,x-8) for x in bg))
    label='DESIGN GUIDE' if a['section']=='Blog' else 'DESIGN RESEARCH'
    d.rounded_rectangle((55,48,320 if a['section']=='Blog' else 390,94),10,fill=accent)
    d.text((72,60),label,font=ImageFont.truetype(bold,23),fill=bg)
    # Distinct component/wireframe motif for every card.
    for n in range(6):
        x=785+((i*31+n*17)%125); y=48+n*86
        width=238+((i+n)%3)*34
        d.rounded_rectangle((x,y,min(1170,x+width),y+54),12,outline=accent,width=4)
        d.ellipse((x+16,y+16,x+37,y+37),fill=accent)
        d.line((x+53,y+20,min(1140,x+width-18),y+20),fill=accent,width=3)
        d.line((x+53,y+34,min(1080,x+width-55),y+34),fill=accent,width=2)
    size=49
    while True:
        font=ImageFont.truetype(bold,size)
        lines=textwrap.wrap(a['title'],31)
        if len(lines)<=4 and max(d.textbbox((0,0),line,font=font)[2] for line in lines)<=625: break
        size-=2
    y=150
    for line in lines:
        d.text((55,y),line,font=font,fill=(250,250,247)); y+=size+13
    d.text((55,540),'WebsiteDesignOutsource',font=ImageFont.truetype(regular,24),fill=(250,250,247))
    d.text((55,576),f'OCT 13  ·  {i+1:02d}  ·  Route / state / evidence / owner',font=ImageFont.truetype(regular,20),fill=accent)
    xmp=(f'<?xpacket begin=""?><x:xmpmeta xmlns:x="adobe:ns:meta/">'
         f'<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">'
         f'<rdf:Description xmlns:dc="http://purl.org/dc/elements/1.1/" dc:title="{a["title"]}"/>'
         f'</rdf:RDF></x:xmpmeta><?xpacket end="w"?>').encode()
    im.save(ROOT/a['thumbnailPath'],'WEBP',quality=88,method=6,xmp=xmp)
print(f"Rendered {len(manifest['articles'])} exact-title WebP thumbnails")
