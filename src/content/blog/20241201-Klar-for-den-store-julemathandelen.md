---
draft: false
title: "Klar for den store julemathandelen?"
snippet: "Det er mye som skal ordnes før høytiden. Da kan det være lurt å ha noen smarte triks i bakhodet for å gjøre handleturen så enkel, rask og billig som mulig"
image:
  {
    src: "/images/5 gode tips til julehandelen-01.png",
    alt: "5 gode tips til julehandelen",
  }
publishDate: "2024-12-01 12:00"
category: "Jul"
author: "Bjarte Olsen"
tags: [Tips]

---

Det er mye som skal ordnes før høytiden. Da kan det være lurt å ha noen smarte triks i bakhodet for å gjøre handleturen så enkel, rask og billig som mulig.

```xml
ffmpeg \
-framerate 10 -loop 1 -t 5 -i "/images/5 gode tips til julehandelen-01.png" \
-framerate 10 -loop 1 -t 5 -i "/images/5 gode tips til julehandelen-02.png" \
-framerate 10 -loop 1 -t 5 -i "/images/5 gode tips til julehandelen-03.png" \
-framerate 10 -loop 1 -t 5 -i "/images/5 gode tips til julehandelen-04.png" \
-framerate 10 -loop 1 -t 5 -i "/images/5 gode tips til julehandelen-05.png" \
-filter_complex \
"[1]format=rgba,fade=d=1:t=in:alpha=1,setpts=PTS-STARTPTS+4/TB[f0]; \
 [2]format=rgba,fade=d=1:t=in:alpha=1,setpts=PTS-STARTPTS+8/TB[f1]; \
 [3]format=rgba,fade=d=1:t=in:alpha=1,setpts=PTS-STARTPTS+12/TB[f2]; \
 [4]format=rgba,fade=d=1:t=in:alpha=1,setpts=PTS-STARTPTS+16/TB[f3]; \
 [0][f0]overlay[bg1];[bg1][f1]overlay[bg2];[bg2][f2]overlay[bg3];[bg3][f3]overlay,split[v0][v1]; \
 [v0]palettegen[p];[v1][p]paletteuse[v]" -map "[v]" out.gif
```

Om du finner andre tilbud du mener er gode, eller tema du ønsker at vi tar for oss her, gi oss et vink på post@matlat.no
