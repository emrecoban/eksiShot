<h1 align="center"><img src="public/img/eksiShot_logo.png" height="80" align="center" /><br />eksiShot</h1>

eksiShot, [ekşi sözlük](https://www.eksisozluk.com)'teki entryleri resimlere dönüştürmek ve entry ekran görüntüleri almak için ücretsiz bir araçtır.

### API Server
Bu araç [emrecoban/eksisozluk-api](https://github.com/emrecoban/eksisozluk-api) adresinde yer alan API servisini kullanarak çalışmaktadır.

### 🇬🇧 English
A free tool that converts entries on [ekşi sözlük](https://www.eksisozluk.com) into images and takes screenshots of entry pages.

## Önizleme
eksiShot, [eksishot.vercel.app](https://eksishot.vercel.app) adresi üzerinden kullanılabilir.

Arama çubuğuna entry adresini girin ve `Enter` tuşuna basarak aratın. Ardından entry görüntüsünü indirmek için `Görüntüyü İndir` butonuna tıklayın.

> **VPN'siz Erişim**
> Entry görüntüsü oluşturmak için VPN kullanmanıza gerek yok. hem [eksisozluk2023.com](https://eksisozluk2023.com) adresini hem de [eksisozluk.com](https://eksisozluk.com) adresini kullanabilirsiniz.

## Özellikler
- Entry bilgilerini getirir ve resime çevirir.
- Görüntüyü `PNG` formatında indirebilme.
- Görüntüyü kopyalama.

## Ekran Görüntüsü
![eksiShot](github_assets/ss1.png)

## Dizin Yapısı
```bash
├── public
├── src
│   ├── components
│   │   ├── Entry.jsx
│   │   ├── Footer.jsx
│   │   └── Header.jsx
│   ├── utility
│   │   └── getEntryId.js
│   ├── provider
│   │   └── EntryContext.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── README.md
├── tailwind.config.cjs
└── vite.config.js
```

## Katkıda Bulunma
Hata raporları, özellik talepleri ve pull request'leri memnuniyetle karşılanmaktadır. Bu proje, işbirliği için güvenli ve hoşgörülü bir ortam olmayı amaçlamaktadır ve katkıda bulunanların, Katılımcı Anlaşması'nın davranış kurallarına uyması beklenmektedir.

## Destek
- Bu repo'ya yıldız ver.
- GitHub üzerinden bana sponsor ol.
- Beni Twitter'dan ya da GitHub'dan takip et: [@emreshepherd](https://twitter.com/emreshepherd) - [@emrecoban](https://github.com/emrecoban).
- Bana kahve ısmarla: https://www.buymeacoffee.com/emrecoban

## Kullanılan Teknolojiler
- TailwindCSS
- ReactJS
- Axios
- Cheerio
- [DOM to Image more](https://github.com/1904labs/dom-to-image-more)
- [Copy Image Clipboard](https://github.com/LuanEdCosta/copy-image-clipboard)

## Lisans
eksiShot, MIT Lisansı şartları altında açık kaynak olarak kullanıma sunulmaktadır.