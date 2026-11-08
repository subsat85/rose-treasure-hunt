/* Rose's Treasure Hunt — offline cache: game files + all 40 voice clips */
const CACHE='rose-th-v3-voice-1';
const ASSETS=[
"./",
"index.html",
"vendor/three.min.js",
"vendor/OrbitControls.js",
"assets/audio/dialogue/dlg_start_welcome.mp3",
"assets/audio/dialogue/dlg_intro_press_start.mp3",
"assets/audio/dialogue/dlg_replay.mp3",
"assets/audio/dialogue/dlg_item_bed1.mp3",
"assets/audio/dialogue/dlg_item_bed2.mp3",
"assets/audio/dialogue/dlg_item_table.mp3",
"assets/audio/dialogue/dlg_item_wardrobe3.mp3",
"assets/audio/dialogue/dlg_item_wardrobe2.mp3",
"assets/audio/dialogue/dlg_item_bigWardrobe.mp3",
"assets/audio/dialogue/dlg_item_desk.mp3",
"assets/audio/dialogue/dlg_item_teddy.mp3",
"assets/audio/dialogue/dlg_item_bins.mp3",
"assets/audio/dialogue/dlg_item_basket.mp3",
"assets/audio/dialogue/dlg_item_door1.mp3",
"assets/audio/dialogue/dlg_item_grayDoor.mp3",
"assets/audio/dialogue/dlg_item_scale.mp3",
"assets/audio/dialogue/dlg_item_window.mp3",
"assets/audio/dialogue/dlg_item_star.mp3",
"assets/audio/dialogue/dlg_item_flowers.mp3",
"assets/audio/dialogue/dlg_item_rug.mp3",
"assets/audio/dialogue/dlg_item_pendant.mp3",
"assets/audio/dialogue/dlg_hint_bed1.mp3",
"assets/audio/dialogue/dlg_hint_bed2.mp3",
"assets/audio/dialogue/dlg_hint_table.mp3",
"assets/audio/dialogue/dlg_hint_wardrobe3.mp3",
"assets/audio/dialogue/dlg_hint_wardrobe2.mp3",
"assets/audio/dialogue/dlg_hint_bigWardrobe.mp3",
"assets/audio/dialogue/dlg_hint_desk.mp3",
"assets/audio/dialogue/dlg_hint_teddy.mp3",
"assets/audio/dialogue/dlg_hint_bins.mp3",
"assets/audio/dialogue/dlg_hint_basket.mp3",
"assets/audio/reactions/rx_not_here_1.mp3",
"assets/audio/reactions/rx_not_here_2.mp3",
"assets/audio/reactions/rx_not_here_3.mp3",
"assets/audio/reactions/rx_already_found.mp3",
"assets/audio/reactions/rx_star1_left2.mp3",
"assets/audio/reactions/rx_star2_left1.mp3",
"assets/audio/celebrations/cel_all_stars.mp3",
"assets/audio/celebrations/cel_chest_appears.mp3",
"assets/audio/celebrations/cel_victory.mp3"
];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;const same=new URL(r.url).origin===location.origin;
  if(r.mode==='navigate'){e.respondWith(fetch(r).then(res=>{const cp=res.clone();caches.open(CACHE).then(c=>c.put('index.html',cp));return res;}).catch(()=>caches.match('index.html')));return;}
  if(!same)return;
  e.respondWith(caches.match(r,{ignoreSearch:true}).then(hit=>hit||fetch(r).then(res=>{if(res.ok){const cp=res.clone();caches.open(CACHE).then(c=>c.put(r,cp));}return res;})));});
