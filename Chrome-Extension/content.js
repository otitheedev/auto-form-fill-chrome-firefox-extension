(() => {
  if (window.__bengaliFakeFill) return;

  const firstNames = [
    "Rahim", "Karim", "Jamal", "Kamal", "Shamim", "Rafiq", "Nazmul", "Faruk", "Imran", "Sajid",
    "Ayesha", "Sharmin", "Shamima", "Farhana", "Nusrat", "Jannat", "Mahi", "Runa", "Salma", "Rashida"
  ];
  const lastNames = [
    "Uddin", "Ahmed", "Islam", "Hossain", "Rahman", "Chowdhury", "Miah", "Sarkar", "Talukder", "Biswas"
  ];
  const streets = [
    "Mirpur Road", "Dhanmondi 27", "Banani 11", "Gulshan 2", "Uttara Sector 4",
    "Chawk Bazar", "Agrabad", "Kumarpara", "Zindabazar", "New Market Road"
  ];
  const cities = ["Dhaka", "Chattogram", "Sylhet", "Khulna", "Rajshahi", "Barishal", "Rangpur", "Mymensingh"];
  const companies = [
    "Dhaka Soft Ltd", "Bangla Tech Solutions", "Padma Group", "Jamdani IT", "Sundarban Logistics"
  ];

  /* --- Helpers --- */
  function rand(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
  function randInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

  // YYYY-MM-DD for standard input[type=date]
  function fakeDateISO() {
    const start = new Date(2000, 0, 1);
    const end = new Date(2018, 11, 31);
    const d = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return d.getFullYear() + "-" + m + "-" + day;
  }

  // YYYY-MM-DD (Year-Month-Date) as requested
  function fakeDateUser() {
    const start = new Date(2000, 0, 1);
    const end = new Date(2018, 11, 31);
    const d = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return d.getFullYear() + "-" + m + "-" + day;
  }

  function fakeBirthDateISO() {
    const start = new Date(1995, 0, 1);
    const end = new Date(2015, 11, 31);
    const d = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return d.getFullYear() + "-" + m + "-" + day;
  }

  function fakeBirthDateUser() {
    const start = new Date(1995, 0, 1);
    const end = new Date(2015, 11, 31);
    const d = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return d.getFullYear() + "-" + m + "-" + day;
  }

  function fakeName() { return rand(firstNames) + " " + rand(lastNames); }
  function fakeAddress() { return randInt(10, 999) + " " + rand(streets) + ", " + rand(cities); }
  function fakeCity() { return rand(cities); }
  function fakePostcode() { return String(randInt(1200, 9999)); }
  function fakePhone() {
    const ops = ["13", "14", "15", "16", "17", "18", "19"];
    const op = rand(ops);
    let rest = "";
    for (let i = 0; i < 8; i++) rest += randInt(0, 9);
    return "+8801" + op + rest.substring(0, 8);
  }
  function fakePhoneLocal() {
    const ops = ["13", "14", "15", "16", "17", "18", "19"];
    const op = rand(ops);
    let rest = "";
    for (let i = 0; i < 8; i++) rest += randInt(0, 9);
    return "01" + op + rest.substring(0, 8);
  }
  function fakeEmail(name) {
    const clean = name.toLowerCase().replace(/[^a-z]/g, ".");
    const domains = ["mail.com", "example.com", "bdmail.com", "demo.net"];
    return (clean || "user") + randInt(10, 999) + "@" + rand(domains);
  }
  function fakeEmailForContext(ctx) {
    const name = fakeName();
    const clean = name.toLowerCase().replace(/[^a-z]/g, ".");
    const base = (clean || "user") + randInt(10, 999);
    if (/gmail/i.test(ctx)) return base + "@gmail.com";
    if (/yahoo/i.test(ctx)) return base + "@yahoo.com";
    if (/outlook|hotmail|live|msn/i.test(ctx)) return base + "@outlook.com";
    if (/icloud|apple/i.test(ctx)) return base + "@icloud.com";
    if (/proton/i.test(ctx)) return base + "@protonmail.com";
    if (/company|work|office|corp/i.test(ctx)) return base + "@company.com";
    const domains = ["mail.com", "example.com", "bdmail.com", "demo.net"];
    return base + "@" + rand(domains);
  }
  function fakeDateFormatted(format) {
    const start = new Date(2000, 0, 1);
    const end = new Date(2018, 11, 31);
    const d = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    const y = d.getFullYear(), m = String(d.getMonth() + 1).padStart(2, "0"), day = String(d.getDate()).padStart(2, "0");
    if (format === "dd/mm/yyyy") return day + "/" + m + "/" + y;
    if (format === "mm/dd/yyyy") return m + "/" + day + "/" + y;
    if (format === "dd-mm-yyyy") return day + "-" + m + "-" + y;
    if (format === "mm-dd-yyyy") return m + "-" + day + "-" + y;
    return y + "-" + m + "-" + day;
  }
  function fakeBirthDateFormatted(format) {
    const start = new Date(1995, 0, 1);
    const end = new Date(2015, 11, 31);
    const d = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    const y = d.getFullYear(), m = String(d.getMonth() + 1).padStart(2, "0"), day = String(d.getDate()).padStart(2, "0");
    if (format === "dd/mm/yyyy") return day + "/" + m + "/" + y;
    if (format === "mm/dd/yyyy") return m + "/" + day + "/" + y;
    if (format === "dd-mm-yyyy") return day + "-" + m + "-" + y;
    if (format === "mm-dd-yyyy") return m + "-" + day + "-" + y;
    return y + "-" + m + "-" + day;
  }
  function getDateFormatFromContext(ctx) {
    if (/dd\/mm|d\/m|day\/month|\.dd\.mm|dmY/i.test(ctx)) return "dd/mm/yyyy";
    if (/mm\/dd|m\/d|month\/day|\.mm\.dd|mdY/i.test(ctx)) return "mm/dd/yyyy";
    if (/dd-mm|d-m-y|dd\.mm/i.test(ctx)) return "dd-mm-yyyy";
    if (/mm-dd|m-d-y/i.test(ctx)) return "mm-dd-yyyy";
    return "yyyy-mm-dd";
  }
  function fakeNumberForContext(ctx) {
    if (/age|year.*old|years?\s*old/i.test(ctx)) return String(randInt(18, 65));
    if (/qty|quantity|amount|count|num.*item/i.test(ctx)) return String(randInt(1, 99));
    if (/year|birth\s*year|graduation/i.test(ctx)) return String(randInt(1980, 2005));
    if (/percent|%|percentage/i.test(ctx)) return String(randInt(0, 100));
    if (/price|salary|amount|tk|taka|bdt/i.test(ctx)) return String(randInt(5000, 150000));
    if (/roll|student.*id|registration/i.test(ctx)) return String(randInt(100, 99999));
    return String(randInt(1, 999));
  }
  function fakeNidForContext(ctx) {
    const n = String(randInt(1000000000, 9999999999));
    if (/dash|hyphen|xxxx-xxxx-xxxx|nid\s*format/i.test(ctx)) return n.slice(0, 4) + "-" + n.slice(4, 8) + "-" + n.slice(8);
    return n;
  }
  function fakePasswordForContext(ctx) {
    if (/pin|simple|numeric|digit/i.test(ctx)) return String(randInt(1000, 9999));
    if (/strong|complex|secure/i.test(ctx)) return "Test@" + randInt(100, 999) + "Ab!";
    return "Test@12345";
  }
  function fakeUrlForContext(ctx) {
    if (/http\s*only|no\s*https/i.test(ctx)) return "http://example.com";
    if (/www\.|with\s*www/i.test(ctx)) return "https://www.example.com";
    return "https://example.com";
  }
  function fakeCompany() { return rand(companies); }
  function fakeSentence() {
    const parts = [
      "This is sample bangla style data for testing form.",
      "Customer from Dhaka city with typical address.",
      "Order created for demo purpose only.",
      "Please ignore this fake registration information.",
      "Sample description for Bengali user profile."
    ];
    return rand(parts);
  }

  function isDangerousClick(el) {
    if (!el) return true;
    const tag = (el.tagName || '').toLowerCase();
    if (tag === 'a') {
      const href = el.getAttribute('href');
      if (href && href !== '#' && !href.startsWith('javascript:')) return true;
    }
    if (tag === 'button') {
      const t = (el.getAttribute('type') || 'submit').toLowerCase();
      if (t === 'submit' || t === 'reset') return true;
    }
    if (el.type === 'submit' || el.type === 'reset') return true;
    return false;
  }

  function safeClick(el) {
    if (isDangerousClick(el)) return false;
    try {
      el.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true, view: window }));
      el.dispatchEvent(new MouseEvent('mouseup', { bubbles: true, cancelable: true, view: window }));
      el.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
      return true;
    } catch (e) { return false; }
  }

  function getDropdownTrigger(wrapper) {
    const prefer = wrapper.querySelector('.ant-select-selector, .react-select__control, .react-select__value-container, .MuiSelect-select, .vs__dropdown-toggle, [role=combobox]');
    if (prefer && !isDangerousClick(prefer)) return prefer;
    const btn = wrapper.querySelector('button[type="button"], [role=button][aria-haspopup]');
    return btn && !isDangerousClick(btn) ? btn : null;
  }

  function isNavOrSearchForm(form) {
    if (form.closest('header, nav, [role=navigation], .navbar, .header, .topbar')) return true;
    if (form.getAttribute('role') === 'search') return true;
    const inputs = form.querySelectorAll('input:not([type=hidden])');
    return inputs.length === 1 && (inputs[0].type === 'search' || /search/i.test(inputs[0].name + inputs[0].id + inputs[0].placeholder));
  }

  function getPrimaryForm() {
    const forms = Array.from(document.querySelectorAll('form')).filter(f => !isNavOrSearchForm(f) && f.querySelectorAll('input:not([type=hidden]), select, textarea').length >= 2);
    if (!forms.length) return null;
    return forms.sort((a, b) => b.querySelectorAll('input,select,textarea').length - a.querySelectorAll('input,select,textarea').length)[0];
  }

  function getFillScope() {
    return getPrimaryForm() || document.querySelector('main, [role=main], .filament-main, .fi-main, .page-content, .content-area, #content, [class*="main-content"]');
  }

  function isInExcludedZone(el) {
    return !!el.closest('header, nav, aside, footer, [role=navigation], [role=banner], .navbar, .sidebar, .fi-sidebar, .fi-topbar, #site-header, #mobile-menu');
  }

  function beginFillGuard() {
    const restore = [];
    const block = (e) => { e.preventDefault(); e.stopImmediatePropagation(); return false; };
    document.querySelectorAll('form').forEach(f => {
      f.addEventListener('submit', block, true);
      const orig = f.submit.bind(f);
      f.submit = () => {};
      restore.push(() => { f.removeEventListener('submit', block, true); f.submit = orig; });
    });
    ['turbo:before-visit', 'turbo:submit-start', 'htmx:beforeRequest'].forEach(ev => {
      document.addEventListener(ev, block, true);
      restore.push(() => document.removeEventListener(ev, block, true));
    });
    const blockClick = (e) => {
      const el = e.target?.closest?.('a[href], button, input[type=submit], input[type=image]');
      if (el && isDangerousClick(el)) { e.preventDefault(); e.stopImmediatePropagation(); }
    };
    document.addEventListener('click', blockClick, true);
    restore.push(() => document.removeEventListener('click', blockClick, true));
    const blockEnter = (e) => {
      if (e.key !== 'Enter' || (e.target?.tagName || '').toLowerCase() === 'textarea') return;
      if (e.target?.closest?.('form')) { e.preventDefault(); e.stopImmediatePropagation(); }
    };
    document.addEventListener('keydown', blockEnter, true);
    restore.push(() => document.removeEventListener('keydown', blockEnter, true));
    return () => restore.reverse().forEach(fn => { try { fn(); } catch (e) {} });
  }

  function fieldCountIn(root) {
    return (root || document.body).querySelectorAll('input:not([type=hidden]), select, textarea').length;
  }

  function isAddNewButton(el) {
    if (!el || isInExcludedZone(el)) return false;
    const tag = (el.tagName || '').toLowerCase();
    if (tag === 'a') {
      const href = el.getAttribute('href') || '';
      if (href && href !== '#' && !href.startsWith('javascript:')) return false;
    } else if (tag === 'button') {
      if ((el.getAttribute('type') || 'submit').toLowerCase() !== 'button') return false;
    } else if (el.getAttribute('role') !== 'button') return false;
    const text = (el.textContent || el.getAttribute('aria-label') || el.getAttribute('title') || '').replace(/\s+/g, ' ').trim();
    const hint = (text + ' ' + (el.className || '') + ' ' + (el.id || '') + ' ' + (el.getAttribute('name') || '')).toLowerCase();
    if (/remove|delete|cancel|submit|save\b|back|prev|next|close|clear/i.test(text) && !/add/i.test(text)) return false;
    if (/\b(add|new row|new field|new entry|another|insert|append|repeater)\b/i.test(hint)) return true;
    if (/add[-_]|btn-add|addnew|add_more|field-add|repeater-add|fi-fo-repeater|fi-ac-action/i.test(hint)) return true;
    if (/^\+$|^add$/i.test(text)) return true;
    if (/plus|fa-plus|icon-plus/i.test(hint) && text.length < 24) return true;
    return false;
  }

  async function expandDynamicSections(scope, minAdds = 3) {
    const root = scope || document.body;
    const btns = [...new Set(Array.from(root.querySelectorAll('button, [role=button], a')).filter(b => b.offsetParent !== null && isAddNewButton(b) && root.contains(b)))];
    if (!btns.length) return;
    for (const btn of btns) {
      for (let i = 0; i < minAdds; i++) {
        const before = fieldCountIn(root);
        safeClick(btn);
        await new Promise(r => setTimeout(r, 400));
        if (fieldCountIn(root) <= before) break;
      }
    }
  }

  function buildScopedElements() {
    const list = { items: [], seen: new Set(), seenEl: new Set() };
    collectFromRoot(document, list);
    list.items.sort((a, b) => {
      const rectA = a.el.getBoundingClientRect(), rectB = b.el.getBoundingClientRect();
      const topDiff = (rectA.top + window.scrollY) - (rectB.top + window.scrollY);
      return Math.abs(topDiff) > 10 ? topDiff : rectA.left - rectB.left;
    });
    const seen = new Set(), unique = [];
    for (const item of list.items) {
      if (!seen.has(item.el)) { seen.add(item.el); unique.push(item); }
    }
    const fillScope = getFillScope();
    return unique.filter(item => !isInExcludedZone(item.el) && (!fillScope || fillScope.contains(item.el)));
  }

  function getValueByType(fillType, ctx, opts) {
    const rulePattern = (opts && opts.rulePattern) ? String(opts.rulePattern) : '';
    const fromCustomRule = !!(opts && opts.fromCustomRule);
    const isRegexRule = !!(opts && opts.isRegexRule);
    const pf = (opts && opts.phoneFormat) || 'local';
    switch (fillType) {
      case 'name': return /first|fname|given/i.test(ctx) ? rand(firstNames) : /last|lname|sur/i.test(ctx) ? rand(lastNames) : fakeName();
      case 'email':
        if (fromCustomRule && rulePattern && !isRegexRule && /@/.test(rulePattern)) {
          const match = rulePattern.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
          if (match) return rulePattern;
          const domain = rulePattern.split('@')[1];
          if (domain) {
            const name = fakeName().toLowerCase().replace(/[^a-z]/g, ".");
            return (name || "user") + randInt(10, 999) + "@" + domain;
          }
        }
        return fakeEmailForContext(ctx);
      case 'phone':
        if (fromCustomRule && rulePattern && !isRegexRule) {
          const clean = rulePattern.replace(/[-\s]/g, '');
          if (/^(\+88)?01\d{8,9}$/.test(clean)) return rulePattern;
          const hasPlus88 = /\+88/.test(rulePattern);
          const has01 = /\b01\d{8,9}\b/.test(rulePattern);
          if (hasPlus88) return fakePhone();
          if (has01) return fakePhoneLocal();
          return fakePhone();
        }
        return pf === 'international' ? fakePhone() : fakePhoneLocal();
      case 'address': return /city|town/i.test(ctx) ? fakeCity() : /zip|post|pin/i.test(ctx) ? fakePostcode() : fakeAddress();
      case 'company': return fakeCompany();
      case 'date':
        if (fromCustomRule && rulePattern && !isRegexRule) {
          const dateMatch = /^\d{1,2}[-\/]\d{1,2}[-\/]\d{2,4}$/.test(rulePattern);
          if (dateMatch) return rulePattern;
        }
        let df = getDateFormatFromContext(ctx);
        if (fromCustomRule && rulePattern && /[-\/]/.test(rulePattern)) {
          if (/\d{1,2}\/\d{1,2}\/\d{4}/.test(rulePattern)) {
            const parts = rulePattern.split('/');
            if (parseInt(parts[0]) > 12) df = 'dd/mm/yyyy';
            else if (parseInt(parts[1]) > 12) df = 'mm/dd/yyyy';
          } else if (/\d{1,2}-\d{1,2}-\d{4}/.test(rulePattern)) {
            const parts = rulePattern.split('-');
            if (parseInt(parts[0]) > 12) df = 'dd-mm-yyyy';
            else if (parseInt(parts[1]) > 12) df = 'mm-dd-yyyy';
          }
        }
        return /birth|dob/i.test(ctx) ? fakeBirthDateFormatted(df) : fakeDateFormatted(df);
      case 'number':
        if (fromCustomRule && rulePattern && !isRegexRule && /^\d{1,10}$/.test(rulePattern)) {
          return rulePattern;
        }
        return fakeNumberForContext(ctx);
      case 'password':
        if (fromCustomRule && rulePattern && !isRegexRule && rulePattern.length >= 4) return rulePattern;
        return fakePasswordForContext(ctx);
      case 'url':
        if (fromCustomRule && rulePattern && !isRegexRule && /^https?:\/\//.test(rulePattern)) {
          return rulePattern;
        }
        return fakeUrlForContext(ctx);
      case 'textarea':
        if (fromCustomRule && rulePattern && !isRegexRule && rulePattern.length > 10) return rulePattern;
        return fakeSentence();
      case 'nid':
        if (fromCustomRule && rulePattern && !isRegexRule) {
          const clean = rulePattern.replace(/[-\s]/g, '');
          if (/^\d{10,13}$/.test(clean)) return rulePattern;
        }
        return fakeNidForContext(ctx);
      default: return '';
    }
  }

  function getFieldContext(el) {
    const attrs = [
      el.name, el.id, el.placeholder, (el.className && typeof el.className === 'string' ? el.className : ''),
      el.getAttribute?.('data-field') || '', el.getAttribute?.('data-testid') || '', el.getAttribute?.('data-name') || '',
      el.getAttribute?.('data-label') || '', el.getAttribute?.('formcontrolname') || '', el.getAttribute?.('name') || '',
      el.getAttribute?.('ng-reflect-name') || '', el.getAttribute?.('autocomplete') || '', el.getAttribute?.('title') || '',
      el.getAttribute?.('inputmode') || ''
    ].filter(Boolean).join(' ').toLowerCase();
    let label = "";
    const root = el.getRootNode?.()?.host ? el.getRootNode() : document;
    if (el.id) {
      const lbl = root.querySelector?.(`label[for="${el.id}"]`);
      if (lbl) label = lbl.textContent.toLowerCase();
    }
    if (!label && el.previousElementSibling?.tagName === "LABEL") label = el.previousElementSibling.textContent.toLowerCase();
    if (!label) {
      const parent = el.closest("div, td, th, form, fieldset, li, p");
      const lbl = parent?.querySelector("label");
      if (lbl) label = lbl.textContent.toLowerCase();
    }
    if (!label) {
      const fs = el.closest("fieldset");
      const legend = fs?.querySelector("legend");
      if (legend) label = legend.textContent.toLowerCase();
    }
    const aria = (el.getAttribute?.("aria-label") || el.getAttribute?.("aria-labelledby") || el.getAttribute?.("aria-placeholder") || "").toLowerCase();
    return (attrs + " " + label + " " + aria).trim();
  }

  function detectFieldType(el, ctx) {
    const ac = (el.getAttribute?.('autocomplete') || '').toLowerCase().replace(/^section-\w+\s+/, '');
    if (ac && ac !== 'off' && ac !== 'nope') {
      if (/email/.test(ac)) return 'email';
      if (/tel|mobile/.test(ac)) return 'phone';
      if (/given-name|fname/.test(ac)) return 'name:first';
      if (/family-name|lname|surname/.test(ac)) return 'name:last';
      if (/^name$|full-name/.test(ac)) return 'name:full';
      if (/username/.test(ac)) return 'name:username';
      if (/street-address|address-line/.test(ac)) return 'address';
      if (/postal|postal-code|zip/.test(ac)) return 'address:zip';
      if (/address-level2|city|locality/.test(ac)) return 'address:city';
      if (/country/.test(ac)) return 'address:country';
      if (/organization|company/.test(ac)) return 'company';
      if (/bday|birthday/.test(ac)) return 'date:birth';
      if (/password/.test(ac)) return 'password';
      if (/url|website/.test(ac)) return 'url';
    }
    const type = el.type || '';
    if (type === 'email') return 'email';
    if (type === 'tel') return 'phone';
    if (type === 'password') return 'password';
    if (type === 'url') return 'url';
    if (type === 'number') return 'number';
    if (type === 'date') return /birth|dob/i.test(ctx) ? 'date:birth' : 'date';
    if (type === 'datetime-local' || type === 'time' || type === 'month' || type === 'week') return 'date';

    const rules = [
      [/national.*id|nid\b|passport|voter|birth.*cert/i, 'nid'],
      [/confirm.*pass|re-?type.*pass|pass.*confirm|pass.*again/i, 'password'],
      [/first.*name|given.*name|fname/i, 'name:first'],
      [/middle.*name|mname/i, 'name:middle'],
      [/last.*name|sur.*name|family.*name|lname/i, 'name:last'],
      [/full.*name|complete.*name|student.*name|applicant.*name/i, 'name:full'],
      [/(?:^|\b)name(?:\b|$)/i, 'name:full'],
      [/user.*name|username|login/i, 'name:username'],
      [/(?:phone|mobile|cell|tel|whatsapp|contact.*number|mobile.*no|phone.*no)\b/i, 'phone'],
      [/e-?mail|email.*address/i, 'email'],
      [/father|mother|parent|guardian|spouse|husband|wife/i, 'name:full'],
      [/company|organization|employer|institute|school|college|university/i, 'company'],
      [/street|address.*line|residence|permanent.*address|present.*address/i, 'address'],
      [/\bcity\b|town|municipality|upazila/i, 'address:city'],
      [/zip|post.*code|postal|pin.*code/i, 'address:zip'],
      [/country|nation(?!al)/i, 'address:country'],
      [/district|division|state|region|thana/i, 'address:city'],
      [/birth|dob|b\.?d|date.*of.*birth/i, 'date:birth'],
      [/\bdate\b|join.*date|start.*date|end.*date|expir/i, 'date'],
      [/roll|student.*id|registration.*num|reg.*no|serial/i, 'number'],
      [/age|year.*old|qty|quantity|amount|count|salary|price|gpa|cgpa/i, 'number'],
      [/desc|about|note|comment|remark|detail|message|bio|summary/i, 'textarea'],
      [/url|website|link|linkedin|facebook|github/i, 'url']
    ];
    for (const [re, t] of rules) if (re.test(ctx)) return t;
    if (el.getAttribute?.('inputmode') === 'email') return 'email';
    if (el.getAttribute?.('inputmode') === 'tel') return 'phone';
    if (el.getAttribute?.('inputmode') === 'numeric') return 'number';
    return null;
  }

  function valueFromDetected(detected, ctx, set, phoneFormat, session) {
    const [type, sub] = detected.split(':');
    const settingKey = type === 'name' ? 'name' : type;
    if (!set(settingKey)) return '';
    if (type === 'name') {
      if (!session.name) session.name = fakeName();
      const parts = session.name.split(' ');
      if (sub === 'first') return parts[0] || rand(firstNames);
      if (sub === 'last') return parts.slice(1).join(' ') || rand(lastNames);
      if (sub === 'middle') return rand(firstNames);
      if (sub === 'username') return session.name.toLowerCase().replace(/\s+/g, '') + randInt(1, 99);
      return session.name;
    }
    if (type === 'email') {
      if (!session.email) session.email = fakeEmailForContext(ctx);
      return session.email;
    }
    if (type === 'phone') {
      if (!session.phone) session.phone = phoneFormat === 'international' ? fakePhone() : fakePhoneLocal();
      return session.phone;
    }
    if (type === 'address') {
      if (sub === 'city') return fakeCity();
      if (sub === 'zip') return fakePostcode();
      if (sub === 'country') return 'Bangladesh';
      return fakeAddress();
    }
    if (type === 'date') {
      const df = getDateFormatFromContext(ctx);
      if (sub === 'birth') return fakeBirthDateFormatted(df);
      if (/admission|join|enroll/i.test(ctx)) {
        const d = new Date();
        return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
      }
      return fakeDateFormatted(df);
    }
    return getValueByType(type, ctx, { phoneFormat });
  }

  /* Framework-safe: React, Vue, Angular, Next.js all pick up native input/change. */
  function setValueAndNotify(el, value) {
    try {
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement?.prototype || HTMLInputElement.prototype, 'value')?.set;
      const nativeTextareaValueSetter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement?.prototype || HTMLTextAreaElement.prototype, 'value')?.set;
      const tag = (el.tagName || '').toLowerCase();
      if (tag === 'input' && nativeInputValueSetter) {
        nativeInputValueSetter.call(el, value);
      } else if (tag === 'textarea' && nativeTextareaValueSetter) {
        nativeTextareaValueSetter.call(el, value);
      } else {
        el.value = value;
      }
      el.dispatchEvent(new InputEvent('input', { bubbles: true, cancelable: true, inputType: 'insertText', data: value }));
      el.dispatchEvent(new Event('change', { bubbles: true }));
    } catch (e) { el.value = value; el.dispatchEvent(new Event("input", { bubbles: true })); el.dispatchEvent(new Event("change", { bubbles: true })); }
  }

  // --- Input Fills (set, customRules, phoneFormat, customFiles) ---
  function guessAndFillInput(el, set, customRules, phoneFormat, customFiles, session) {
    if (phoneFormat === undefined) phoneFormat = 'local';
    if (el.disabled || el.type === "hidden") return;
    if (el.readOnly && !el.classList.contains("flatpickr-input")) return;
    if (el.value && String(el.value).trim() && el.type !== 'checkbox' && el.type !== 'file') return;
    customFiles = customFiles || {};
    session = session || {};

    const ctx = getFieldContext(el);
    if (!set) set = () => true;

    if (el.type === "checkbox") {
      if (!set("checkbox")) return;
      el.checked = Math.random() > 0.35;
      el.dispatchEvent(new Event("input", { bubbles: true }));
      el.dispatchEvent(new Event("change", { bubbles: true }));
      return;
    }
    if (el.type === "radio") return;
    if (el.type === "file") {
      if (!set("file")) return;
      const isImage = /image|photo|picture|avatar|logo|pic/i.test(ctx);
      const isPdf = /pdf|document|resume|cv/i.test(ctx);
      const multiple = el.hasAttribute('multiple');
      const accept = (el.getAttribute('accept') || '').toLowerCase();
      const hasImageExt = /\.(jpg|jpeg|png|gif|bmp|webp|svg)/i.test(accept);
      const hasPdfExt = /\.(pdf|doc|docx)/i.test(accept);
      const hasImage = accept.includes('image') || hasImageExt || isImage;
      const hasPdf = accept.includes('pdf') || hasPdfExt || isPdf;
      
      const dataURLtoFile = (dataurl, filename) => {
        if (!dataurl) return null;
        try {
          const arr = dataurl.split(',');
          const mime = arr[0].match(/:(.*?);/)?.[1] || 'application/octet-stream';
          const bstr = atob(arr[1]);
          let n = bstr.length;
          const u8arr = new Uint8Array(n);
          while(n--) u8arr[n] = bstr.charCodeAt(n);
          return new File([u8arr], filename, {type:mime});
        } catch(e) { return null; }
      };
      
      const setFilesAndNotify = (el, files) => {
        try {
          if (!files || files.length === 0) return;
          el.files = files;
          ['input', 'change', 'blur'].forEach(ev => el.dispatchEvent(new Event(ev, { bubbles: true })));
          el.dispatchEvent(new InputEvent('input', { bubbles: true, data: '' }));
          let p = el.parentElement;
          for (let i = 0; i < 5 && p; i++) {
            p.dispatchEvent(new Event('change', { bubbles: true }));
            p = p.parentElement;
          }
        } catch(e) {}
      };
      
      try {
        const dt = new DataTransfer();
        if (hasImage) {
          if (customFiles && customFiles.image) {
            const f = dataURLtoFile(customFiles.image, customFiles.imageName || 'custom-image.png');
            if (f) dt.items.add(f);
            if (hasPdf && customFiles.pdf) {
              const pf = dataURLtoFile(customFiles.pdf, customFiles.pdfName || 'custom-doc.pdf');
              if (pf) dt.items.add(pf);
            }
            if (multiple && dt.items.length < 2 && customFiles.image) {
              const f2 = dataURLtoFile(customFiles.image, 'custom-image-2.png');
              if (f2) dt.items.add(f2);
            }
            setFilesAndNotify(el, dt.files);
          } else {
            const TINY_PNG = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==';
            const f = dataURLtoFile(TINY_PNG, 'demo-image.png');
            if (f) dt.items.add(f);
            if (hasPdf) {
              const pdfBlob = new Blob(['%PDF-1.4\n%Demo'], { type: 'application/pdf' });
              dt.items.add(new File([pdfBlob], 'demo-doc.pdf', { type: 'application/pdf' }));
            }
            if (multiple) { const f2 = dataURLtoFile(TINY_PNG, 'demo-image-2.png'); if (f2) dt.items.add(f2); }
            setFilesAndNotify(el, dt.files);
          }
        } else if (hasPdf) {
          if (customFiles && customFiles.pdf) {
            const f = dataURLtoFile(customFiles.pdf, customFiles.pdfName || 'custom-doc.pdf');
            if (f) dt.items.add(f);
            if (multiple && customFiles.doc) {
              const df = dataURLtoFile(customFiles.doc, customFiles.docName || 'custom-doc.docx');
              if (df) dt.items.add(df);
            } else if (multiple && customFiles.pdf) {
              const f2 = dataURLtoFile(customFiles.pdf, 'custom-doc-2.pdf');
              if (f2) dt.items.add(f2);
            }
          } else {
            const blob = new Blob(['%PDF-1.4\n%Demo PDF'], { type: 'application/pdf' });
            dt.items.add(new File([blob], 'demo-doc.pdf', { type: 'application/pdf' }));
            if (multiple) dt.items.add(new File([new Blob(['%PDF-1.4\n%Demo 2'], { type: 'application/pdf' })], 'demo-doc-2.pdf', { type: 'application/pdf' }));
          }
          setFilesAndNotify(el, dt.files);
        } else {
          const blob = new Blob(['Demo file content'], { type: 'text/plain' });
          dt.items.add(new File([blob], 'demo.txt', { type: 'text/plain' }));
          if (multiple) dt.items.add(new File([new Blob(['Demo file 2'], { type: 'text/plain' })], 'demo-2.txt', { type: 'text/plain' }));
          setFilesAndNotify(el, dt.files);
        }
      } catch(e) { console.error('File upload error:', e); }
      return;
    }

    let value = "";
    const rules = customRules || [];
    for (const rule of rules) {
      let match = false;
      const pat = (rule.pattern || '').replace(/[-\s]/g, '');
      const isPhoneNumber = /^(\+88)?01\d{8,9}$/.test(pat);
      const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(rule.pattern || '');
      const isDate = /^\d{1,4}[-\/]\d{1,2}[-\/]\d{1,4}$/.test(rule.pattern || '');
      const isNID = /^\d{10,13}$/.test(pat);
      const isURL = /^https?:\/\//.test(rule.pattern || '');
      const isNumber = /^\d{1,10}$/.test(pat) && !isPhoneNumber && !isNID;
      
      if (isPhoneNumber && rule.fillType === 'phone') {
        match = el.type === 'tel' || /phone|mobile|contact|cell|tel/i.test(ctx);
      } else if (isEmail && rule.fillType === 'email') {
        match = el.type === 'email' || /e?-?mail/i.test(ctx);
      } else if (isDate && rule.fillType === 'date') {
        match = el.type === 'date' || /date|birth|dob/i.test(ctx);
      } else if (isNID && rule.fillType === 'nid') {
        match = /national.*id|nid|passport/i.test(ctx);
      } else if (isURL && rule.fillType === 'url') {
        match = /url|website|link/i.test(ctx);
      } else if (isNumber && rule.fillType === 'number') {
        match = el.type === 'number' || /age|qty|quantity|amount|count|num/i.test(ctx);
      } else if (rule.regex === true) {
        try { match = new RegExp(rule.pattern, 'i').test(ctx); } catch (e) {}
      } else {
        match = ctx.toLowerCase().includes((rule.pattern || '').toLowerCase());
      }
      if (match) {
        if (rule.fillType === 'skip') return;
        if (set(rule.fillType)) value = getValueByType(rule.fillType, ctx, { fromCustomRule: true, rulePattern: rule.pattern, isRegexRule: rule.regex, phoneFormat: phoneFormat });
        break;
      }
    }

    if (!value) {
      const detected = detectFieldType(el, ctx);
      if (detected) {
        if (detected.startsWith('date') && el.type === 'date') {
          if (set('date')) value = detected === 'date:birth' ? fakeBirthDateISO() : fakeDateISO();
        } else if (detected === 'date' && el.type === 'datetime-local') {
          if (set('date')) value = new Date().toISOString().slice(0, 16);
        } else if (detected === 'date' && el.type === 'time') {
          if (set('date')) value = '09:00';
        } else if (detected === 'date' && el.type === 'month') {
          if (set('date')) value = new Date().toISOString().slice(0, 7);
        } else if (detected === 'date' && el.type === 'week') {
          if (set('date')) value = new Date().getFullYear() + '-W01';
        } else {
          value = valueFromDetected(detected, ctx, set, phoneFormat, session);
        }
      } else if (el.type === 'number' || el.getAttribute('inputmode') === 'numeric') {
        if (set('number')) value = String(randInt(1, 99));
      } else if (el.type === 'text' || el.type === 'search' || !el.type) {
        if (set('name')) value = 'Test';
      }
    }

    if (value) {
      try {
        const oldValue = el.value;
        setValueAndNotify(el, value);
        if (el.validity && !el.validity.valid) { setValueAndNotify(el, oldValue); return; }
        if (el.classList.contains("flatpickr-input") && el._flatpickr) {
          try { el._flatpickr.setDate(value, true); } catch (e) { }
        }
      } catch (e) { }
    }
  }

  function fillRadiosByGroup(root) {
    const scope = root || document;
    const groups = {};
    scope.querySelectorAll("input[type=radio]").forEach(r => {
      if (r.disabled) return;
      const name = r.name || ("__no_group__" + Math.random());
      (groups[name] ||= []).push(r);
    });
    Object.values(groups).forEach(list => {
      if (!list.length) return;
      const choice = rand(list);
      choice.checked = true;
      choice.dispatchEvent(new Event("input", { bubbles: true }));
      choice.dispatchEvent(new Event("change", { bubbles: true }));
    });
  }

  function fillSelect2() {
    if (!window.jQuery || !window.jQuery.fn.select2) return;
    try {
      window.jQuery("select.select2, .select2-hidden-accessible").each(function () {
        const $sel = window.jQuery(this);
        if ($sel.prop("disabled") || $sel.prop("readonly")) return;
        if ($sel.val() && $sel.val() !== "" && $sel.val() !== "0") return;
        const allOpts = $sel.find("option:not([disabled])");
        const opts = allOpts.filter(function () {
          const txt = window.jQuery(this).text().trim();
          const val = window.jQuery(this).val();
          return val && !/^(select|choose|pick|--|none|null)$/i.test(txt);
        });
        const choice = opts.length > 0 ? opts.eq(Math.floor(Math.random() * opts.length)) : null;
        if (choice) $sel.val(choice.val()).trigger("change").trigger("change.select2");
      });
    } catch (e) { }
  }

  /* --- Aggressive Timeout Helper --- */
  const withTimeout = (promise, ms = 1500) => new Promise(resolve => {
    const t = setTimeout(() => resolve("timeout"), ms);
    promise.then(res => { clearTimeout(t); resolve(res); })
      .catch(() => { clearTimeout(t); resolve("error"); });
  });

  function smoothScrollTo(element) {
    if (!element) return;
    try {
      element.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
    } catch (e) {
      try { element.scrollIntoView(); } catch (e2) { }
    }
  }

  /* --- Async Dropdown Processing --- */
  async function processSequentialVueSelect(input) {
    if (input.disabled || input.readOnly) return;

    const antSel = input.closest(".ant-select");
    if (antSel && !antSel.classList.contains("ant-select-disabled")) {
      const selector = antSel.querySelector(".ant-select-selector");
      if (selector) {
        return new Promise(resolve => {
          safeClick(selector);
          const tryPick = (attempt = 0) => {
            if (attempt > 12) { resolve(); return; }
            const items = document.querySelectorAll(".ant-select-dropdown .ant-select-item:not(.ant-select-item-disabled)");
            const vis = Array.from(items).filter(o => o.getBoundingClientRect().height > 0 && !isDangerousClick(o));
            if (vis.length > 0) { safeClick(rand(vis)); setTimeout(resolve, 80); return; }
            setTimeout(() => tryPick(attempt + 1), 120);
          };
          setTimeout(() => tryPick(0), 150);
        });
      }
    }

    const reactSel = input.closest(".react-select");
    if (reactSel) {
      const control = reactSel.querySelector(".react-select__control");
      if (control) {
        return new Promise(resolve => {
          safeClick(control);
          const tryPick = (attempt = 0) => {
            if (attempt > 12) { resolve(); return; }
            const opts = document.querySelectorAll(".react-select__menu .react-select__option:not([class*='disabled'])");
            const vis = Array.from(opts).filter(o => o.getBoundingClientRect().height > 0 && !isDangerousClick(o));
            if (vis.length > 0) { safeClick(rand(vis)); setTimeout(resolve, 80); return; }
            setTimeout(() => tryPick(attempt + 1), 120);
          };
          setTimeout(() => tryPick(0), 150);
        });
      }
    }

    let vselect = input.closest(".v-select, .vue-select, div[class*='select']");
    let toggle = input.closest(".vs__dropdown-toggle");

    if (!vselect && toggle) vselect = toggle.parentElement;
    if (vselect && !toggle) toggle = vselect.querySelector(".vs__dropdown-toggle");

    // Fallback logic
    if (!vselect) vselect = input.parentElement;

    const triggers = [];
    if (vselect) {
      const arrow = vselect.querySelector(".vs__open-indicator, .vs__actions");
      if (arrow) triggers.push(arrow);
    }
    if (toggle) triggers.push(toggle);
    triggers.push(input);

    if (vselect && vselect.classList.contains("vs--disabled")) return;

    const listboxId = input.getAttribute("aria-controls") || (toggle && toggle.getAttribute("aria-owns"));
    const parent = vselect ? vselect.parentElement : input.parentElement;
    let ctx = (input.placeholder || "").toLowerCase();
    const label = parent ? (parent.querySelector("label")?.textContent || "") : "";
    if (label) ctx += " " + label.toLowerCase();

    if (vselect && vselect.previousElementSibling && vselect.previousElementSibling.textContent.length < 50) {
      ctx += " " + vselect.previousElementSibling.textContent.toLowerCase();
    }

    return new Promise(resolve => {
      let attempts = 0;

      const performOpen = () => {
        let isOpen = (toggle && toggle.getAttribute("aria-expanded") === "true");
        if (isOpen) return true;
        for (const t of triggers) {
          if (isDangerousClick(t)) continue;
          t.dispatchEvent(new MouseEvent("mousedown", { bubbles: true, cancelable: true, view: window }));
          safeClick(t);
          t.dispatchEvent(new MouseEvent("mouseup", { bubbles: true, cancelable: true, view: window }));
        }
        return false;
      };

      const tryPick = () => {
        if (attempts > 12) { resolve(); return; }

        performOpen();
        attempts++;

        setTimeout(() => {
          let listbox = null;
          if (listboxId) listbox = document.getElementById(listboxId);
          if (!listbox && vselect) listbox = vselect.querySelector("ul[role=listbox]");

          if (!listbox) {
            const candidates = document.querySelectorAll("ul[role=listbox], .vs__dropdown-menu, .select2-results__options, .ant-select-dropdown, .react-select__menu, .MuiPopover-root [role=listbox], .mat-select-panel");
            listbox = Array.from(candidates).find(el => {
              const r = el.getBoundingClientRect();
              return r.width > 5 && r.height > 5 && window.getComputedStyle(el).display !== 'none';
            });
          }

          if (listbox) {
            const options = Array.from(listbox.querySelectorAll("li, .vs__dropdown-option, .select2-results__option, .ant-select-item, .react-select__option, .MuiListItem-root, .mat-option, [role=option]"))
              .filter(o => {
                const t = o.textContent.trim().toLowerCase();
                return t && !isDangerousClick(o) && !o.classList.contains("disabled") && o.getAttribute("aria-disabled") !== "true" && !t.includes("loading");
              });

            if (options.length > 0) {
              let pick = null;
              const valid = options.filter(o => !/select|choose/i.test(o.textContent?.trim() || ''));
              const pool = valid.length > 0 ? valid : options;
              if (/gender|sex/i.test(ctx)) {
                const sub = options.filter(o => /male|female/i.test(o.textContent));
                pick = sub.length > 0 ? rand(sub) : rand(pool);
              } else if (/blood/i.test(ctx)) {
                const sub = options.filter(o => /[ABO][+-]/i.test(o.textContent));
                pick = sub.length > 0 ? rand(sub) : rand(pool);
              } else if (/shift/i.test(ctx)) {
                const sub = options.filter(o => /morning|day|evening|night/i.test(o.textContent));
                pick = sub.length > 0 ? rand(sub) : rand(pool);
              } else {
                pick = rand(pool);
              }

              if (pick) {
                pick.scrollIntoView({ block: "nearest" });
                safeClick(pick);
                setTimeout(resolve, 50);
                return;
              }
            }
          }
          setTimeout(tryPick, 150);
        }, 100);
      };
      tryPick();
    });
  }

  async function processCustomDropdown(wrapper) {
    if (wrapper.getAttribute("aria-disabled") === "true") return;

    const btn = getDropdownTrigger(wrapper);
    if (!btn || (btn.disabled && btn.getAttribute?.("aria-disabled") !== "true")) return;
    if (btn.disabled && btn.tagName === "BUTTON") return;

    return new Promise(resolve => {
      safeClick(btn);
      const tryPick = (attempt = 0) => {
        if (attempt > 8) { resolve(); return; }
        const selectors = '[role="option"]:not([aria-disabled=true]), .dropdown-item:not(.disabled), .ant-select-item, .react-select__option, .MuiListItem-root, .mat-option';
        const opts = Array.from(document.querySelectorAll(selectors)).filter(o => {
          const r = o.getBoundingClientRect();
          return r.width > 2 && r.height > 2 && !isDangerousClick(o) && getComputedStyle(o).display !== 'none' && !/select|choose|loading/i.test(o.textContent?.trim() || '');
        });
        if (opts.length > 0) {
          safeClick(rand(opts));
          setTimeout(resolve, 80);
        } else setTimeout(() => tryPick(attempt + 1), 150);
      };
      setTimeout(() => tryPick(0), 200);
    });
  }

  /* --- Collect from document + Shadow DOM (Vue, Angular, Web Components) --- */
  function collectFromRoot(root, list) {
    if (!root || list.seen.has(root)) return;
    list.seen.add(root);
    const q = (sel) => Array.from((root.querySelectorAll || root.querySelector)?.call(root, sel) || []);
    q("input").forEach(el => {
      if (list.seenEl.has(el)) return;
      list.seenEl.add(el);
      if (el.type === 'file') { list.items.push({ type: 'input', el }); return; }
      const ph = (el.placeholder || "").toLowerCase();
      if (el.classList.contains("flatpickr-input")) list.items.push({ type: 'input', el });
      else if (ph.includes("select") || el.classList.contains("vs__search") || /vs__search|react-select|ant-select/i.test(el.className)) list.items.push({ type: 'vue-select', el });
      else list.items.push({ type: 'input', el });
    });
    q("textarea").forEach(el => { if (!list.seenEl.has(el)) { list.seenEl.add(el); list.items.push({ type: 'textarea', el }); } });
    q("select").forEach(el => { if (!list.seenEl.has(el)) { list.seenEl.add(el); list.items.push({ type: 'select', el }); } });
    q("[contenteditable=true]").forEach(el => { if (!list.seenEl.has(el)) { list.seenEl.add(el); list.items.push({ type: 'contenteditable', el }); } });
    q("input.vs__search, input[type=search][class*='vs__search'], input[class*='react-select'], .ant-select-selection-search-input").forEach(el => {
      if (!list.seenEl.has(el)) { list.seenEl.add(el); list.items.push({ type: 'vue-select', el }); }
    });
    q('[role="combobox"]').forEach(el => {
      if (list.seenEl.has(el)) return;
      list.seenEl.add(el);
      const hasInput = el.querySelector("input");
      if (hasInput && !list.seenEl.has(hasInput)) { list.seenEl.add(hasInput); list.items.push({ type: 'vue-select', el: hasInput }); }
      else { const btn = el.querySelector('button[type="button"], [role=button][aria-haspopup]'); if (btn && !isDangerousClick(btn)) list.items.push({ type: 'custom-dropdown', el: el }); }
    });
    q(".custom-select, .ant-select, .react-select__control, .react-select, .MuiSelect-select, mat-select, .v-select, .vue-select").forEach(el => {
      if (list.seenEl.has(el)) return;
      const input = el.querySelector("input:not([type=hidden])");
      if (input && !list.seenEl.has(input)) { list.seenEl.add(input); list.seenEl.add(el); list.items.push({ type: 'vue-select', el: input }); }
      else { const btn = getDropdownTrigger(el); if (btn) { list.seenEl.add(el); list.items.push({ type: 'custom-dropdown', el: el }); } }
    });
    try { q("*").forEach(el => { if (el.shadowRoot) collectFromRoot(el.shadowRoot, list); }); } catch (err) {}
  }

  /* --- Main Execution --- */
  window.__bengaliFakeFill = async function () {
    const r = await new Promise(res => {
      chrome.storage.sync.get(["formSettings", "customRules", "phoneFormat"], (data) => {
        res(data);
      });
    });
    const s = r.formSettings && typeof r.formSettings === 'object' ? r.formSettings : {};
    const phoneFormat = r.phoneFormat || s.phoneFormat || 'local';
    const set = (k) => s[k] !== false;
    let raw = r.customRules;
    const customRules = Array.isArray(raw) ? raw.filter(rule => rule && String(rule.pattern || '').trim() && rule.fillType).map(rule => ({
      pattern: String(rule.pattern).trim(),
      fillType: rule.fillType,
      regex: rule.regex === true
    })) : [];

    const customFilesData = await new Promise(res => {
      chrome.storage.local.get(["customFiles"], (data) => {
        const cf = data.customFiles;
        if (!cf || typeof cf !== 'object') { res({}); return; }
        const out = {};
        if (typeof cf.image === 'string' && cf.image.startsWith('data:')) { out.image = cf.image; out.imageName = cf.imageName; }
        if (typeof cf.pdf === 'string' && cf.pdf.startsWith('data:')) { out.pdf = cf.pdf; out.pdfName = cf.pdfName; }
        if (typeof cf.doc === 'string' && cf.doc.startsWith('data:')) { out.doc = cf.doc; out.docName = cf.docName; }
        res(out);
      });
    });

    const session = {};
    const endGuard = beginFillGuard();
    try {
    const fillScope = getFillScope();
    await expandDynamicSections(fillScope, 3);
    const primaryForm = getPrimaryForm();
    const scopedElements = buildScopedElements();
    for (const item of scopedElements) {
      const { type, el } = item;

      if (el.offsetParent === null && type !== 'vue-select' && el.type !== 'file') continue;
      if ((el.disabled || el.readOnly) && !el.classList.contains("flatpickr-input") && type !== 'vue-select') continue;

      const originalShadow = el.style.boxShadow;
      const originalTrans = el.style.transition;
      el.style.transition = "box-shadow 0.2s ease";
      el.style.boxShadow = "0 0 8px 2px rgba(33, 150, 243, 0.5)";

      try {
        if (type === 'vue-select') {
          if (set("select")) await withTimeout(processSequentialVueSelect(el), 2000);
        } else if (type === 'custom-dropdown') {
          if (set("select")) await withTimeout(processCustomDropdown(el), 1200);
        } else if (type === 'input') {
          guessAndFillInput(el, set, customRules, phoneFormat, customFilesData, session);
          if (el.type === 'file') await new Promise(r => setTimeout(r, 150));
          else await new Promise(r => setTimeout(r, 60));
        } else if (type === 'textarea') {
          if (set("textarea")) setValueAndNotify(el, fakeSentence());
          await new Promise(r => setTimeout(r, 60));
        } else if (type === 'select') {
          const sel = el;
          if (set("select") && !sel.disabled) {
            const ctx = getFieldContext(sel).toLowerCase();
            const allOpts = Array.from(sel.options).filter(o => !o.disabled && o.value && !/select|choose/i.test(o.textContent));
            const opts = allOpts.length ? allOpts : Array.from(sel.options).slice(1);

            if (opts.length) {
              let choice;
              if (/bangladesh/i.test(ctx)) { const sub = opts.filter(o => /bangladesh/i.test(o.textContent)); choice = sub.length > 0 ? rand(sub) : rand(opts); }
              else if (/dhaka/i.test(ctx)) { const sub = opts.filter(o => /dhaka/i.test(o.textContent)); choice = sub.length > 0 ? rand(sub) : rand(opts); }
              else choice = rand(opts);

              if (sel.multiple) {
                Array.from(sel.options).forEach(o => o.selected = false);
                choice.selected = true;
              } else {
                sel.value = choice.value;
                sel.selectedIndex = Array.from(sel.options).indexOf(choice);
              }
              sel.dispatchEvent(new Event("input", { bubbles: true }));
              sel.dispatchEvent(new Event("change", { bubbles: true }));
              if (window.jQuery) { try { window.jQuery(sel).trigger('change'); } catch (e) { } }
            }
          }
          await new Promise(r => setTimeout(r, 60));
        } else if (type === 'contenteditable') {
          if (set("textarea")) {
            el.textContent = fakeSentence();
            el.dispatchEvent(new Event("input", { bubbles: true }));
          }
        }
      } catch (e) { console.error(e); }

      // Restore
      setTimeout(() => {
        el.style.boxShadow = originalShadow;
        el.style.transition = originalTrans;
      }, 300);
    }

    if (set("radio")) fillRadiosByGroup(primaryForm);
    if (set("select")) fillSelect2();
    await new Promise(r => setTimeout(r, 400));
    } finally {
      endGuard();
    }
  };

  /* --- Keyboard Shortcut: Ctrl + Shift + V + V (controlled by storage) --- */
  let shortcutEnabled = true;
  let lastVPress = 0;

  function updateShortcut(enabled) {
    shortcutEnabled = enabled !== false;
  }
  chrome.storage.sync.get('shortcutEnabled', (r) => updateShortcut(r.shortcutEnabled));
  chrome.storage.onChanged.addListener((changes, area) => {
    if (area === 'sync' && changes.shortcutEnabled) updateShortcut(changes.shortcutEnabled.newValue);
  });

  window.addEventListener("keydown", (e) => {
    if (!shortcutEnabled) return;
    if ((e.key === "v" || e.key === "V") && (e.ctrlKey || e.metaKey) && e.shiftKey) {
      const now = Date.now();
      if (now - lastVPress < 500) {
        e.preventDefault();
        e.stopPropagation();
        if (typeof window.__bengaliFakeFill === "function") window.__bengaliFakeFill();
        lastVPress = 0;
      } else lastVPress = now;
    }
  });

})();
