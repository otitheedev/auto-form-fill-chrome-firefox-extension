# AutoForm Fill – Fake Data Generator

A browser extension for **Chrome** and **Firefox** that fills web forms with realistic fake data in one click. Built for developers, QA testers, and anyone who needs to test registration flows, admin panels, or long multi-step forms without typing the same data over and over.

**Use case:** Open a form → click **Fill form** → every visible field gets sensible test data. No backend, no account — everything runs locally in your browser.

---

## Features

| Area | What it does |
|------|----------------|
| **Smart matching** | Detects fields by `autocomplete`, HTML type, label, placeholder, name, and aria attributes |
| **Field types** | Name, email, phone, address, company, date, number, password, URL, NID, textarea, select, checkbox, radio, file upload |
| **Frameworks** | Works on plain HTML plus React, Vue, Angular, Livewire, Filament, Select2, Ant Design, React Select, MUI, and similar |
| **Dynamic forms** | Finds **Add new / Add more** buttons, opens up to 3 extra rows, then fills them |
| **Repeater-safe fill** | Blocks accidental form submit or page navigation while filling |
| **Unknown fields** | Unrecognized text → `Test`, unrecognized number → random `1–99` |
| **Bangladesh data** | Local phone (`01XXXXXXXXX`) or international (`+880…`), Bengali-style names and addresses |
| **Custom rules** | Map field patterns (text or regex) to a fill type or **Skip** |
| **Custom files** | Upload your own image/PDF/doc for file inputs (optional) |
| **Shortcut** | `Ctrl+Shift+V` then `V` again (toggle in settings) |

---

## Installation

### Chrome
1. Open `chrome://extensions`
2. Enable **Developer mode**
3. Click **Load unpacked** → select the `Chrome-Extension` folder

### Firefox
1. Open `about:debugging#/runtime/this-firefox`
2. Click **Load Temporary Add-on**
3. Select `manifest.json` inside the `Mozile-Extension` folder

> Temporary Firefox installs are removed when the browser closes. For a permanent install, use [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/auto-fill-fake-data-generator/) when published.

---

## Usage

1. Navigate to any page with a form (e.g. signup, student create, job application).
2. Click the extension icon → **Fill form**,  
   **or** press `Ctrl+Shift+V` twice on the page.
3. Fields fill top-to-bottom. Dynamic **Add new** sections expand automatically.
4. Open **Settings** from the popup or via right-click → **Options**.

**Tip:** Use settings to disable field types you do not want filled (e.g. turn off Password), or add custom rules for site-specific field names.

---

## Settings

| Tab | Options |
|-----|---------|
| **General** | Keyboard shortcut, phone format (local / international), custom upload files |
| **Fields** | Enable or disable each fill type individually |
| **Rules** | Pattern + fill type; optional regex; use **Skip** to leave a field empty |

**Example rules**

- `nickname` → Name  
- `employee_id` → Skip  
- `my_.*field` (regex) → Email  

Fixed-value patterns (e.g. a full phone number in the pattern) fill that exact value when matched.

---

## For developers

### Project structure

```
auto-form-fill-chrome-firefox-extension/
├── Chrome-Extension/     Manifest V3 — Chrome, Edge, Chromium
│   ├── content.js        Core fill logic (injected on all pages)
│   ├── popup.html/js     Toolbar popup
│   ├── options.html/js   Settings page
│   └── manifest.json
├── Mozile-Extension/     Manifest V2 — Firefox
│   └── (same layout as Chrome)
└── README.md
```

`content.js` is the main engine in both builds. Logic is kept in sync between Chrome and Firefox; Firefox uses `browser.storage` with a `chrome` fallback.

### How filling works

1. **`window.__bengaliFakeFill()`** — entry point (popup or keyboard shortcut).
2. **`beginFillGuard()`** — temporarily blocks form submit, `form.submit()`, Enter-key submit, and risky link clicks.
3. **`expandDynamicSections()`** — clicks Add-new buttons up to 3 times per button group.
4. **`collectFromRoot()`** — gathers inputs, textareas, selects, comboboxes, and shadow DOM fields; scoped to the main form (not header/nav search).
5. **`detectFieldType()`** — scores field context and picks the best fill type.
6. **`guessAndFillInput()`** / **`setValueAndNotify()`** — sets values with native property descriptors and dispatches `input` + `change` for framework compatibility.

### Storage (Chrome `storage.sync` / Firefox `storage.sync`)

| Key | Purpose |
|-----|---------|
| `formSettings` | Per-type toggles (`name`, `email`, `phone`, …) |
| `customRules` | Array of `{ pattern, fillType, regex }` |
| `shortcutEnabled` | Boolean |
| `phoneFormat` | `"local"` or `"international"` |

Custom upload files use `storage.local` key `customFiles`.

### Permissions

- **`activeTab`** + **`scripting`** (Chrome) — inject fill script on demand from popup  
- **`storage`** — save settings  
- **`<all_urls>`** content script — keyboard shortcut works on any tab  

No data is sent to any server. All fake data is generated client-side.

### Local development

1. Load the extension unpacked (see Installation).
2. Edit `content.js`, `popup.html`, or `options.html`.
3. Reload the extension in `chrome://extensions` or `about:debugging`.
4. Refresh the target page and test again.

To debug fill logic, run in the page console:

```js
window.__bengaliFakeFill()
```

---

## Important notes

- **Testing only** — do not submit fake data on production systems with real users.
- **File uploads** — enable **File** in Field types; optional custom files in General settings.
- **Sites with strict validation** — if a value is rejected, the extension restores the previous value for that field.

---

## License

Open source. Use and modify freely for personal and commercial projects.
