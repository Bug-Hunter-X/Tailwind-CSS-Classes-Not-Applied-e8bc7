```javascript
//In your tailwind.config.js file
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

```html
<!--In your index.html file-->
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tailwind CSS Bug</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  <div class="p-4 bg-red-500">
    <h1>Hello Tailwind</h1>
  </div>
</body>
</html>
```