const BIKES = {
  ducati: {
    name: 'Ducati Panigale V4 R', brand: 'Ducati', color: '#c8091a',
    img: 'assets/ducati-panigale-v4r.webp',
    src: 'https://www.ducati.com/se/sv/bikes/panigale/panigale-v4-r',
    groups: [
      ['Mesin', [
        ['Tipe', 'Desmosedici Stradale 90° V4, 4 katup per silinder, desmodromic, pendingin cairan'],
        ['Kapasitas', '998 cc'],
        ['Bore x stroke', '81 x 48,4 mm'],
        ['Rasio kompresi', '14,0:1'],
        ['Tenaga maks.', '218 hp (160,3 kW) pada 15.750 rpm'],
        ['Torsi maks.', '114,5 Nm pada 12.000 rpm'],
        ['Transmisi', '6 percepatan, Ducati Quick Shift up/down 2.0'],
      ]],
      ['Sasis dan suspensi', [
        ['Rangka', 'Aluminium Front Frame'],
        ['Suspensi depan', 'Öhlins NPX 43 mm, fully adjustable'],
        ['Suspensi belakang', 'Öhlins TTX36, fully adjustable'],
        ['Rem depan', '2 cakram 330 mm, Brembo Monobloc Hypure 4 piston'],
        ['Rem belakang', 'Cakram 245 mm, kaliper 2 piston'],
        ['Ban', 'Pirelli Diablo Supercorsa SP-V4, 120/70 ZR17 dan 200/60 ZR17'],
      ]],
      ['Dimensi', [
        ['Berat basah (tanpa bensin)', '186,5 kg'],
        ['Tinggi jok', '855 mm'],
        ['Wheelbase', '1.477 mm'],
        ['Kapasitas tangki', '17 liter'],
      ]],
      ['Fitur', [
        ['Layar', 'TFT 6,9 inci'],
        ['Elektronik', 'Cornering ABS, traction, slide, dan wheelie control (DVO), Race Brake Control'],
        ['Girboks', 'Ducati Racing Gearbox dengan Neutral Lock'],
      ]],
    ],
  },
  harley: {
    name: 'Harley-Davidson CVO Road Glide ST', brand: 'Harley-Davidson', color: '#c43c0f',
    img: 'assets/harley-cvo-road-glide-st.webp',
    src: 'https://www.harley-davidson.com/ap/en/motorcycles/cvo-road-glide-st.html',
    groups: [
      ['Mesin', [
        ['Tipe', 'Milwaukee-Eight 121 High Output'],
        ['Kapasitas', '1.977 cc'],
        ['Bore x stroke', '103,5 x 117,5 mm'],
        ['Rasio kompresi', '11,4:1'],
        ['Tenaga maks.', '126 hp (94 kW) pada 5.020 rpm'],
        ['Torsi maks.', '193 Nm pada 3.750 rpm'],
        ['Sistem bahan bakar', 'Electronic Sequential Port Fuel Injection'],
        ['Transmisi', '6 percepatan'],
      ]],
      ['Sasis dan suspensi', [
        ['Suspensi depan', 'Inverted 47 mm, preload, compression, dan rebound adjustable'],
        ['Suspensi belakang', 'Shock emulsion, preload, compression, dan rebound adjustable'],
        ['Rem depan', 'Cakram floating ganda, kaliper radial 4 piston'],
        ['Velg', 'Cast aluminium 7-spoke hitam'],
        ['Ban', 'Dunlop H-D Series, 130/60B19 dan 180/55B18'],
      ]],
      ['Dimensi', [
        ['Berat siap jalan', '380 kg'],
        ['Tinggi jok', '720 mm'],
        ['Wheelbase', '1.625 mm'],
        ['Panjang', '2.410 mm'],
        ['Ground clearance', '130 mm'],
        ['Sudut miring maks.', '31° kiri dan kanan'],
        ['Kapasitas tangki', '22,7 liter'],
      ]],
      ['Fitur', [
        ['Layar', 'TFT 312 mm (12,3 inci) dengan Skyline OS, Apple CarPlay'],
        ['Elektronik', 'Cornering ABS, traction control, 8 mode berkendara'],
        ['Material', 'Forged carbon fiber pada fender depan, konsol, dan seat cowl'],
      ]],
    ],
  },
  aprilia: {
    name: 'Aprilia Tuono V4 Factory', brand: 'Aprilia', color: '#5b2bd1',
    img: 'assets/aprilia-tuono-v4-factory.webp',
    src: 'https://www.aprilia.com/us_EN/models/tuono-v4/tuono-v4-factory-1100-4s4v-2026/',
    groups: [
      ['Mesin', [
        ['Tipe', 'V4 65°, 4 katup per silinder, ride-by-wire, pendingin cairan, Euro 5+'],
        ['Kapasitas', '1.099 cc'],
        ['Bore x stroke', '81 x 53,32 mm'],
        ['Tenaga maks.', '180 hp (132,4 kW) pada 11.800 rpm'],
        ['Torsi maks.', '121 Nm pada 9.650 rpm'],
        ['Transmisi', '6 percepatan, Aprilia Quick Shift'],
        ['Kopling', 'Multiplate basah dengan slipper'],
      ]],
      ['Sasis dan suspensi', [
        ['Rangka', 'Twin spar aluminium'],
        ['Suspensi depan', 'Öhlins USD 43 mm elektronik, travel 120 mm'],
        ['Suspensi belakang', 'Öhlins monoshock elektronik, travel 130 mm'],
        ['Rem depan', '2 cakram floating 330 mm, kaliper radial Brembo'],
        ['Rem belakang', 'Cakram 220 mm, kaliper Brembo'],
        ['Velg', 'Cast 17" x 3,5 (depan) dan 17" x 6 (belakang)'],
      ]],
      ['Dimensi', [
        ['Berat basah', '211 kg'],
        ['Tinggi jok', '836 mm'],
        ['Kapasitas tangki', '18 liter'],
      ]],
      ['Fitur', [
        ['Layar', 'TFT 5 inci dengan optical bonding dan mode Race'],
        ['Elektronik', 'Paket a-PRC dengan IMU 6 sumbu: traction, wheelie, dan slide control, launch control, pit limiter, cruise control'],
        ['Lampu', 'Full LED dengan bending lights'],
        ['Lainnya', 'Steering damper Öhlins elektronik, jok penumpang dan aero cover'],
      ]],
    ],
  },
  ktm: {
    name: 'KTM 300 EXC Hard Enduro', brand: 'KTM', color: '#c24e00',
    img: 'assets/ktm-300-exc.webp',
    src: 'https://www.ktm.com/en-int/models/enduro/2-stroke/2026-ktm-300-exchardenduro/technical-specifications.html',
    groups: [
      ['Mesin', [
        ['Tipe', '1 silinder, 2-tak'],
        ['Kapasitas', '293,15 cc'],
        ['Transmisi', '6 percepatan'],
        ['Bahan bakar', 'Keihin EFI, throttle body 39 mm'],
        ['Manajemen mesin', 'Vitesco Technologies EMS'],
        ['Kopling', 'Basah multi-disc DDS, hidrolik Brembo'],
      ]],
      ['Sasis dan suspensi', [
        ['Rangka', 'Central double-cradle baja 25CrMo4'],
        ['Subframe', 'Polyamide diperkuat aluminium'],
        ['Suspensi depan', 'WP XACT-USD 48 mm, travel 300 mm'],
        ['Suspensi belakang', 'WP XPLOR dengan PDS, travel 310 mm'],
        ['Rem', 'Cakram depan dan belakang'],
        ['Rantai', '520 X-Ring'],
      ]],
      ['Dimensi', [
        ['Berat (tanpa bensin)', '105,9 kg'],
        ['Tinggi jok', '963 mm'],
        ['Ground clearance', '347 mm'],
        ['Kapasitas tangki', '±9 liter'],
      ]],
    ],
  },
};

const dlg = document.getElementById('spec');
const body = document.getElementById('spec-body');
const title = document.getElementById('spec-title');

function openSpec(id) {
  const b = BIKES[id];
  if (!b) return;
  title.textContent = b.name;
  dlg.style.setProperty('--c', b.color);
  body.innerHTML =
    `<div class="stage"><img src="${b.img}" alt="${b.name}"></div>` +
    b.groups.map(([t, rows]) =>
      `<section class="grp"><h4>${t}</h4><dl>` +
      rows.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('') +
      `</dl></section>`).join('') +
    `<p class="src">Sumber: <a href="${b.src}" target="_blank" rel="noopener">situs resmi ${b.brand}</a>. Spesifikasi dapat berbeda antarpasar.</p>`;
  dlg.showModal();
  dlg.scrollTop = 0;
}

document.addEventListener('click', (e) => {
  const open = e.target.closest('[data-open]');
  if (open) return openSpec(open.dataset.open);
  if (e.target.closest('[data-close]') || e.target === dlg) dlg.close();
});

const form = document.getElementById('form');
const status = document.getElementById('status');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.querySelectorAll('input,select').forEach((f) => f.classList.toggle('err', !f.checkValidity()));
  if (!form.checkValidity()) {
    status.textContent = 'Lengkapi nama, nomor WhatsApp, dan pilihan motor.';
    return;
  }
  const d = new FormData(form);
  status.textContent = `Terima kasih, ${d.get('nama')}. Tim Forza akan menghubungi Anda untuk test ride ${d.get('motor')}.`;
  form.reset();
});

document.getElementById('year').textContent = new Date().getFullYear();