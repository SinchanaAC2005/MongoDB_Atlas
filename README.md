# MongoDB_Atlas
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>README Preview — MongoDB Students Example</title>
  <style>
    :root{--bg:#0f1724;--card:#0b1220;--muted:#94a3b8;--accent:#06b6d4;--glass: rgba(255,255,255,0.04)}
    *{box-sizing:border-box}
    body{margin:0;font-family:Inter,ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,"Helvetica Neue",Arial; background:linear-gradient(180deg,#071029 0%, #071a2a 100%);color:#e6eef6;line-height:1.5}
    .wrap{max-width:1000px;margin:36px auto;padding:24px}
    .header{display:flex;align-items:center;gap:16px}
    .logo{width:64px;height:64px;border-radius:12px;background:linear-gradient(135deg,var(--accent),#8b5cf6);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:20px;color:#042f3a;box-shadow:0 6px 18px rgba(8,22,36,0.6)}
    h1{margin:0;font-size:24px}
    p.lead{margin:8px 0 18px;color:var(--muted)}

    .grid{display:grid;grid-template-columns:1fr 320px;gap:20px;margin-top:18px}
    .card{background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));padding:20px;border-radius:12px;box-shadow:0 6px 18px rgba(2,6,23,0.6);border:1px solid rgba(255,255,255,0.03)}

    pre,code{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}
    pre{background:rgba(0,0,0,0.45);padding:12px;border-radius:8px;overflow:auto;color:#dbeafe}

    .meta{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px}
    .badge{background:var(--glass);padding:6px 10px;border-radius:999px;color:var(--muted);font-size:13px;border:1px solid rgba(255,255,255,0.03)}

    .btn{display:inline-flex;align-items:center;gap:8px;padding:8px 12px;border-radius:8px;border:none;background:linear-gradient(90deg,var(--accent),#8b5cf6);color:#022b32;font-weight:600;cursor:pointer}
    .btn.secondary{background:transparent;color:var(--accent);border:1px solid rgba(255,255,255,0.04)}

    .sidebar .section{margin-bottom:14px}
    .section h3{margin:0 0 8px 0;font-size:14px}
    .section p{margin:0;color:var(--muted);font-size:13px}

    .code-actions{display:flex;gap:8px;margin-bottom:10px}
    footer{margin-top:18px;color:var(--muted);font-size:13px;text-align:center}

    @media (max-width:880px){.grid{grid-template-columns:1fr}.sidebar{order:2}}
  </style>
</head>
<body>
  <div class="wrap">
    <div class="header">
      <div class="logo">MD</div>
      <div>
        <h1>MongoDB Students Example — README Preview</h1>
        <p class="lead">A styled HTML README that mirrors a GitHub README.md. Use the controls to copy or download the markdown-ready README.</p>
        <div class="meta">
          <div class="badge">Node.js · MongoDB</div>
          <div class="badge">insertOne · updateOne</div>
          <div class="badge">Template</div>
        </div>
      </div>
    </div>

    <div class="grid">
      <main class="card">
        <h2 style="margin-top:0">README (Markdown)</h2>

        <div class="code-actions">
          <button class="btn" id="copyBtn">Copy Markdown</button>
          <button class="btn secondary" id="downloadBtn">Download README.md</button>
        </div>

        <pre id="mdPreview"># 📘 MongoDB Atlas – Students Collection Example

This project demonstrates how to connect to **MongoDB Atlas** using the official MongoDB Node.js driver and perform basic CRUD operations such as:

- Connecting to MongoDB Atlas
- Inserting multiple student documents
- Fetching and displaying all documents
- Updating documents individually
- Closing the database connection

---

## 🚀 Features

- Uses **MongoClient** from the official MongoDB Node.js driver
- Inserts **20 student records** with `insertOne()`
- Updates the same 20 records using `updateOne()`
- Prints all documents stored in the `stud` collection
- Includes proper logging for all operations

---

## 📦 Requirements

Make sure you have installed:

```
Node.js (v16+)
MongoDB Node.js Driver
```

Install the MongoDB driver with:

```bash
npm install mongodb
```

---

## 🛠️ How to Run the Project

1. Clone the repository:

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

2. Install dependencies:

```bash
npm install
```

3. Replace the MongoDB URI inside the script with your own Atlas URI:

```js
const uri = "your-mongodb-uri";
```

4. Run the script:

```bash
node index.js
```

---

## 📂 Project Structure

```
project-folder/
├── index.js       # Main script with MongoDB operations
└── README.md      # Documentation
```

---

## 📑 Code Explanation

### 🔗 Connect to MongoDB Atlas

```js
const client = new MongoClient(uri);
await client.connect();
console.log("Connected to Atlas");
```

### 📝 Insert Student Documents

The script inserts 20 hardcoded student documents using:

```js
await students.insertOne({ name: "Aarav", age: 21, marks: 85 });
console.log("Inserted one document.");
```

### 📄 Retrieve All Documents

```js
const docs = await students.find().toArray();
console.log("Documents in students:", docs);
```

### ✏️ Update Student Records

Every student document is updated individually:

```js
await students.updateOne({ name: "Aarav" }, { $set: { marks: 85 } });
console.log("Updated one document.");
```

### 🔚 Close the Connection

```js
await client.close();
console.log("Connection closed.");
```

---

## 🤝 Contributing

Feel free to fork this repository and submit pull requests to improve or extend the code.

---

## 🛡️ License

This project is licensed under the **MIT License** — free to modify and use.

---

## ⭐ Support

If you found this helpful, give the repository a **star** on GitHub ⭐
</pre>

        <p style="margin-top:14px;color:var(--muted)">Preview shown above is the raw markdown. Use the buttons to copy or download the file.</p>
      </main>

      <aside class="card sidebar">
        <div class="section">
          <h3>About</h3>
          <p>This page generates a polished README.md for the MongoDB students example. It's safe to edit the markdown in the preview and download.</p>
        </div>

        <div class="section">
          <h3>Quick Tips</h3>
          <p>- Replace sensitive credentials before publishing.  <br>- Consider using environment variables for the MongoDB URI.</p>
        </div>

        <div class="section">
          <h3>Actions</h3>
          <p style="margin-top:8px"><button class="btn" id="previewMd">Toggle Raw/Pretty</button></p>
        </div>

        <div class="section">
          <h3>Keyboard</h3>
          <p>Press <kbd>Ctrl/Cmd + C</kbd> to copy selection after clicking inside the preview.</p>
        </div>
      </aside>
    </div>

    <footer class="card">Made with ❤️ · Edit the preview and download README.md</footer>
  </div>

  <script>
    const mdPreview = document.getElementById('mdPreview');
    const copyBtn = document.getElementById('copyBtn');
    const downloadBtn = document.getElementById('downloadBtn');
    const previewMd = document.getElementById('previewMd');

    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(mdPreview.textContent);
        copyBtn.textContent = 'Copied!';
        setTimeout(()=> copyBtn.textContent = 'Copy Markdown',1200);
      } catch (e) {
        alert('Copy failed — select the text and press Ctrl/Cmd+C');
      }
    });

    downloadBtn.addEventListener('click', ()=>{
      const blob = new Blob([mdPreview.textContent], { type: 'text/markdown' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'README.md';
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    });

    previewMd.addEventListener('click', ()=>{
      mdPreview.style.whiteSpace = mdPreview.style.whiteSpace === 'pre-wrap' ? 'pre' : 'pre-wrap';
      previewMd.textContent = previewMd.textContent === 'Toggle Raw/Pretty' ? 'Toggle Raw/Pretty' : 'Toggle Raw/Pretty';
    });
  </script>
</body>
</html>
