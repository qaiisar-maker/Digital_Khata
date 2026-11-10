DIGITAL KHATA PWA – v1.1.1  (Vendor Management System)
=====================================================

FILES
  index.html, style.css, app.js, render.js, i18n.js, sw.js, manifest.json
  fonts/  (Noto Nastaliq Urdu + Inter – offline)
  icons/  (app icons)

GITHUB PAGES PAR LAGANA
  1. Naya repository banayein (masalan: digital-khata)
  2. Is ZIP ki SAARI files/folders repo ke root mein upload karein
  3. Settings > Pages > Branch: main / root > Save
  4. Link: https://qaiisar-maker.github.io/digital-khata/
  5. Android: Chrome menu (⋮) > Install app   |   Windows: Chrome/Edge address bar > Install icon
  6. Pehli dafa internet ke sath kholein – uske baad offline chalegi

LANGUAGE (URDU / ENGLISH)
  - Header mein "EN" button dabayein = poori app English (LTR) mein
  - "اردو" button = wapas Urdu
  - Entries kisi bhi zaban mein: Urdu, English ya Roman Urdu (Ahmad Traders, Ali Supply…)
  - English mode mein Image/PDF reports bhi English mein bante hain

GOOGLE DRIVE AUTO BACKUP – CLIENT ID BANANA (sirf ek dafa)
  1. https://console.cloud.google.com kholein > naya Project (Digital Khata)
  2. APIs & Services > Library > "Google Drive API" > Enable
  3. APIs & Services > OAuth consent screen > External > App name, apna email > Save
     Scopes: .../auth/drive.file   |   Test users: apna Gmail add karein
     (ya "Publish App" kar dein taa ke 7 din baad token expire na ho)
  4. Credentials > Create Credentials > OAuth client ID > Web application
     Authorized JavaScript origins:  https://qaiisar-maker.github.io
     (local test ke liye:  http://localhost:8080)
  5. Client ID copy karein (xxxx.apps.googleusercontent.com)
  6. App > Data Import / Export > Google Drive Auto Backup > Client ID paste > "Connect Google Drive"

  Kaam kaise karta hai:
  - Drive mein folder "Digital Khata Backup" banta hai
  - DigitalKhata_Latest.json  = har tabdeeli ke ~6 second baad update (internet ho to)
  - DigitalKhata_DD-MM-YYYY.json = roz ki ek copy, aakhri 10 rakhi jati hain
  - Google ka sign-in token ~1 ghante chalta hai. Expire hone par header mein
    cloud icon par "!" aata hai – us par tap karein, backup ho jayega.
    (Password wali app mein Unlock button dabane par token khud refresh ho jata hai)
  - Internet na ho to tabdeeliyan "pending" rehti hain, net aate hi backup
  - Naye phone par: Client ID daalein > Connect > "Restore from Drive"

UPDATE DENE KA TAREEQA
  - Files replace karein aur sw.js mein CACHE version badal dein (v1.1.0 > v1.1.1)

CHEQUE LOGIC
  - Cleared (default): payment mein count, date = clear date ya cheque date
  - Pending / Bounced: count NAHI hota
  - Replacement save karte hi cheque "Replaced" aur sirf replacement amount count hoti hai
