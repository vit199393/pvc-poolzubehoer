// ===== SAMPLE PRODUCT DATA (JTL-WaWi Export Format) =====
const SAMPLE_PRODUCTS = [
  { id: "PT-KH-50", sku: "PTA01116", name: "POOL Total Kugelhahn PVC-U 50mm \"SAFE\"", category: "kugelhaehne", categoryName: "Kugelhähne", desc: "Manueller 2-Wege Kugelhahn Ø50mm, PVC-U, mit Hebelgriff", price: 12.95, badge: "top", stock: 124 },
  { id: "PT-KH-63S", sku: "PTA01118", name: "Praher Kugelhahn 2-Wege Ø63mm Solar", category: "kugelhaehne", categoryName: "Kugelhähne", desc: "Solar-Kugelhahn Ø63mm, 2-Wege, mit Handhebel, UV-beständig", price: 34.95, badge: null, stock: 48 },
  { id: "PT-KH-63E", sku: "PTA01119", name: "Praher Kugelhahn 2-Wege Ø63mm Elektrisch", category: "kugelhaehne", categoryName: "Kugelhähne", desc: "Elektrischer 2-Wege Kugelhahn Ø63mm mit Antrieb, 230V", price: 189.00, badge: null, stock: 12 },
  { id: "PT-KH-3W63", sku: "PTA01120", name: "Praher 3-Wege Kugelhahn Ø63mm Manuell", category: "kugelhaehne", categoryName: "Kugelhähne", desc: "3-Wege Kugelhahn Ø63mm, manuell, L-Port Ausführung", price: 64.95, badge: null, stock: 36 },
  { id: "PT-W50", sku: "PTA02001", name: "PVC Winkel 90° Ø50mm", category: "fittings", categoryName: "PVC-Fittings", desc: "90° Winkel aus PVC-U, Ø50mm, Klebeverbindung", price: 2.49, badge: "top", stock: 850 },
  { id: "PT-M50", sku: "PTA02002", name: "PVC Muffe Ø50mm", category: "fittings", categoryName: "PVC-Fittings", desc: "Klebemuffe PVC-U Ø50mm, gerade Verbindung", price: 1.95, badge: null, stock: 620 },
  { id: "PT-T50", sku: "PTA02003", name: "PVC T-Stück Ø50mm", category: "fittings", categoryName: "PVC-Fittings", desc: "T-Stück PVC-U Ø50mm, 3-fach Klebeverbindung", price: 3.95, badge: null, stock: 340 },
  { id: "PT-K50", sku: "PTA02004", name: "PVC Klebemuffe lang Ø50mm", category: "fittings", categoryName: "PVC-Fittings", desc: "Lange Klebemuffe Ø50mm, verstärkte Klebefläche", price: 3.49, badge: null, stock: 280 },
  { id: "PT-KA50", sku: "PTA02005", name: "PVC Klebekappe Ø50mm", category: "fittings", categoryName: "PVC-Fittings", desc: "Klebekappe zum Verschließen, Ø50mm, PVC-U", price: 1.79, badge: null, stock: 450 },
  { id: "PT-S12", sku: "de71712", name: "Poolflex Druckschlauch Ø50mm 12m grau", category: "schlaeuche", categoryName: "Schläuche", desc: "Flexibler PVC-Druckschlauch Ø50mm, 12m, 3,5mm Wand, verstärkende Spirale", price: 56.95, badge: "top", stock: 24 },
  { id: "PT-S25", sku: "de71713", name: "Poolflex Druckschlauch Ø63mm 25m grau", category: "schlaeuche", categoryName: "Schläuche", desc: "Flexibler PVC-Druckschlauch Ø63mm, 25m, für Unterflur-Installation", price: 189.00, badge: null, stock: 8 },
  { id: "PT-S2", sku: "de71714", name: "Poolflex Druckschlauch Ø50mm 2m grau", category: "schlaeuche", categoryName: "Schläuche", desc: "Flexibler PVC-Druckschlauch Ø50mm, 2m, mit Verstärkungsspirale", price: 12.95, badge: null, stock: 95 },
  { id: "PT-S25I", sku: "de71715", name: "BonuFlex isolierter Druckschlauch Ø63mm 25m", category: "schlaeuche", categoryName: "Schläuche", desc: "Isolierter Flexschlauch Ø63mm, 25m, mit Schaumstoff-Isolierung", price: 289.00, badge: "new", stock: 6 },
  { id: "PT-FS50", sku: "PTA01116", name: "Pool Anschluss-SET FlexFit Ø50mm (PTA01116)", category: "sets", categoryName: "Komplett-Sets", desc: "5-teiliges Klemmfitting-Set + Teflonband für FlexFit-Verbindungen", price: 19.95, badge: "top", stock: 72 },
  { id: "PT-BP26", sku: "PT26150", name: "LaJa26 Bypass-Set BASIC (PT26150)", category: "sets", categoryName: "Komplett-Sets", desc: "3 Kugelhähne, 2 T-Stücke, 4 Rohre, Kleber, Reiniger, Klemmen", price: 64.95, badge: null, stock: 38 },
  { id: "PT-RV50", sku: "PTA03001", name: "PVC Rückschlagventil Ø50mm", category: "ventile", categoryName: "Ventile", desc: "Check valve Ø50mm, PVC-U, mit Feder und Dichtung", price: 14.95, badge: null, stock: 86 },
  { id: "PT-SF50", sku: "PTA03002", name: "PVC Sichtfenster Ø50mm", category: "ventile", categoryName: "Ventile", desc: "Sichtglas zur Durchflusskontrolle, Ø50mm, transparent", price: 22.95, badge: null, stock: 44 },
  { id: "PT-GV63", sku: "PTA03003", name: "PVC Absperrschieber Ø63mm", category: "ventile", categoryName: "Ventile", desc: "Gate valve Ø63mm, PVC-U, mit Handrad", price: 39.95, badge: null, stock: 18 },
  { id: "PT-WD50", sku: "PTA04001", name: "Wanddurchführung Ø50mm PVC", category: "wanddurchfuehrungen", categoryName: "Wanddurchführungen", desc: "Einbauteil für Poolwand, Ø50mm, mit Dichtung und Kontermutter", price: 12.95, badge: null, stock: 120 },
  { id: "PT-WD63", sku: "PTA04002", name: "Wanddurchführung Ø63mm PVC lang", category: "wanddurchfuehrungen", categoryName: "Wanddurchführungen", desc: "Lange Wanddurchführung Ø63mm, für dicke Poolwände", price: 18.95, badge: null, stock: 65 },
  { id: "PT-SK", sku: "PTA05001", name: "Einbauskimmer-Komplett-Set deluxe", category: "wanddurchfuehrungen", categoryName: "Wanddurchführungen", desc: "Kompletter Einbauskimmer mit Saugbreite, Rücklauf und Dichtungen", price: 29.95, badge: "top", stock: 52 },
  { id: "PT-KL", sku: "PTA06001", name: "PVC Kleber Tangit 250ml", category: "kleber", categoryName: "Kleber & Dichtmittel", desc: "Lösungsmittel-Kleber für PVC-U Verklebungen, 250ml Tube", price: 8.95, badge: null, stock: 200 },
  { id: "PT-TF", sku: "PTA06002", name: "Teflonband 12mm x 12m", category: "kleber", categoryName: "Kleber & Dichtmittel", desc: "Gewindedichtband, PTFE, 12mm Breite, 12m Länge", price: 1.49, badge: null, stock: 500 },
  { id: "PT-RE", sku: "PTA06003", name: "PVC Reiniger Tangit 1L", category: "kleber", categoryName: "Kleber & Dichtmittel", desc: "Vorbehandlungs-Reiniger für PVC-Klebeverbindungen, 1 Liter", price: 12.95, badge: null, stock: 85 },
  { id: "PT-R50", sku: "PTA07001", name: "PVC Druckrohr Ø50mm 1m", category: "rohre", categoryName: "PVC-Rohre", desc: "PVC-U Druckrohr Ø50mm, 1m Länge, PN10", price: 4.95, badge: null, stock: 300 },
  { id: "PT-R63", sku: "PTA07002", name: "PVC Druckrohr Ø63mm 1m", category: "rohre", categoryName: "PVC-Rohre", desc: "PVC-U Druckrohr Ø63mm, 1m Länge, PN10", price: 6.95, badge: null, stock: 240 },
  { id: "PT-SR63", sku: "PTA07003", name: "PVC Sammlerrohr Ø63mm 2m", category: "rohre", categoryName: "PVC-Rohre", desc: "Sammelrohr Ø63mm, 2m, mit mehreren Abgängen", price: 18.95, badge: null, stock: 30 },
];

let currentFilter = 'all';
let currentSearch = '';
let cart = [];

function renderProducts() {
  const grid = document.getElementById('productGrid');
  let filtered = SAMPLE_PRODUCTS;
  if (currentFilter !== 'all') filtered = filtered.filter(p => p.category === currentFilter);
  if (currentSearch) {
    const q = currentSearch.toLowerCase();
    filtered = filtered.filter(p => p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q));
  }
  if (filtered.length === 0) { grid.innerHTML = '<div class="no-results">Keine Produkte gefunden. Versuchen Sie eine andere Suche oder Kategorie.</div>'; return; }
  grid.innerHTML = filtered.map(p => `
    <div class="product-card">
      <div class="product-image">
        ${p.badge ? `<span class="product-badge badge-${p.badge}">${p.badge === 'new' ? 'Neu' : p.badge === 'sale' ? 'Angebot' : 'Bestseller'}</span>` : ''}
        <span class="placeholder-icon">🔧</span>
      </div>
      <div class="product-info">
        <div class="product-cat">${p.categoryName}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc}</div>
        <div class="product-footer">
          <div class="product-price">${p.price.toFixed(2).replace('.', ',')} € <small>/ Stück</small></div>
          <button class="add-to-cart" onclick="addToCart('${p.id}')" title="In den Warenkorb">+</button>
        </div>
      </div>
    </div>
  `).join('');
}

function filterProducts(cat) {
  currentFilter = cat;
  document.querySelectorAll('.filter-tag').forEach(t => t.classList.toggle('active', t.dataset.filter === cat));
  renderProducts();
}

function filterByCategory(cat) { filterProducts(cat); document.getElementById('produkte').scrollIntoView({ behavior: 'smooth' }); }
function searchProducts() { currentSearch = document.getElementById('productSearch').value; renderProducts(); }

function addToCart(id) {
  const product = SAMPLE_PRODUCTS.find(p => p.id === id);
  if (!product) return;
  const existing = cart.find(i => i.id === id);
  if (existing) existing.qty++;
  else cart.push({ ...product, qty: 1 });
  updateCart();
  showToast('Zum Warenkorb hinzugefügt!');
}

function removeFromCart(id) { cart = cart.filter(i => i.id !== id); updateCart(); }
function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
  updateCart();
}

function updateCart() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById('cartCount').textContent = count;
  const itemsEl = document.getElementById('cartItems');
  const footerEl = document.getElementById('cartFooter');
  if (cart.length === 0) {
    itemsEl.innerHTML = '<div class="cart-empty"><div class="icon">🛒</div><p>Ihr Warenkorb ist leer</p></div>';
    footerEl.style.display = 'none';
  } else {
    itemsEl.innerHTML = cart.map(i => `
      <div class="cart-item">
        <div class="cart-item-img">🔧</div>
        <div class="cart-item-info">
          <h4>${i.name}</h4>
          <div class="cart-item-price">${i.price.toFixed(2).replace('.', ',')} €</div>
          <div class="cart-qty">
            <button class="qty-btn" onclick="changeQty('${i.id}', -1)">-</button>
            <span>${i.qty}</span>
            <button class="qty-btn" onclick="changeQty('${i.id}', 1)">+</button>
            <button class="cart-remove" onclick="removeFromCart('${i.id}')">Entfernen</button>
          </div>
        </div>
      </div>
    `).join('');
    const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
    document.getElementById('cartTotal').innerHTML = `${total.toFixed(2).replace('.', ',')} € <small>zzgl. Versand</small>`;
    footerEl.style.display = 'block';
  }
}

function toggleCart() {
  document.getElementById('cartDrawer').classList.toggle('open');
  document.getElementById('cartOverlay').classList.toggle('open');
}
function checkout() { showToast('Weiterleitung zur Kasse... (Demo - JTL-Shop Integration erforderlich)'); }

function showToast(text) {
  const toast = document.getElementById('toast');
  document.getElementById('toastText').textContent = text;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

function toggleMobileMenu() {
  const links = document.querySelector('.nav-links');
  links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
  links.style.position = 'absolute'; links.style.top = '100%'; links.style.left = '0'; links.style.width = '100%';
  links.style.flexDirection = 'column'; links.style.background = 'white'; links.style.padding = '20px'; links.style.boxShadow = 'var(--shadow-md)';
}

window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 10);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

renderProducts();
updateCart();