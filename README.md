# Meow Meow Woof 🐱🐶

Replace Chrome’s New Tab page with a random cat (or dog) video.  
No ads. No accounts. No tracking.

Chrome Web Store:  
https://chrome.google.com/webstore/detail/lcpipfmjdfelofldlehfiogoogpkjiea

## Why this exists

I'm allergic to cats, but I wish I wasn't. I wanted something small and fun that could keep me entertained while working as a PM opening tabs all day.

Once people outside my immediate circle started using it, real constraints showed up that needed solving.


## Distribution
To start this was just an unpacked chrome extension file on my machine. In meetings people started asking what is that and how do I get that, so I enabled developer mode on their laptops and loaded my unpacked extension. This became a pain because quickly a lot of people started asking for it, and so I just launched it on the Chrome Web Store. 

## Latency and Cost

**Problem**  
Early on, all videos were served from an S3 bucket in Toronto.

I started getting messages like “the video won’t load” or “the app doesn’t work.”  
People in places like Australia were opening a new tab and waiting for a video to travel halfway around the world.

The app looked broken, but the video just hadn’t arrived yet.

**What I changed**  
1. **CDN in front of S3**  
   A simple switch that put videos closer to users globally. Load times improved, requests were still hitting S3 so costs started to climb.

2. **CloudFront**  
   Another simple switch to cache videos now at edge locations around the world. Most requests stopped reaching S3, and serving cached content became ~essentially free. 

**Result**
Monthly costs dropped to **~$0.10/month**, and users now get low-latency cat (and dog) videos anywhere in the world.

## Usage
**What I did (and didn’t do)**  
I mostly built this for myself. I never marketed it or optimized for Chrome Web Store ranking or SEO. Usage has grown through word of mouth. 

Current snapshot:
- ~5,300 users across 120+ countries (2025)
- ~430 active users across 50+ countries (first 30 days in 2026)
- 5.0★ rating on the Chrome Web Store
---

## Privacy

**What I chose to avoid**
- accounts
- ads
- monetization

**What that means in practice**
- No sign-in
- Category choice stored locally in the browser

---
**Content constraints**
The video library is intentionally small (164 videos) and sourced from free, publicly available content.

Expanding it significantly would require paid licensing or ongoing out-of-pocket costs, which I’ve chosen not to fund that personally, so the number of videos are limited.

## Permissions

- `activeTab`: used for the Home button (opens Google)

---

## Support

- Issues: https://github.com/jordanstarrk/meow-meow-woof/issues  
- Feedback: https://docs.google.com/forms/d/e/1FAIpQLSe5MW0-fM7FNtu3LgnYvhgDJUaMjmLUSNZsipVoUCKgtqfvRA/viewform

---

## Credits

Video sources:

- https://videos.pexels.com  
- https://videezy.com  
- http://www.wedistill.io/

---

## License

MIT (see `LICENSE`).
