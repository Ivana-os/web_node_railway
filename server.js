const express = require('express');
const app = express();

// Posluži sve datoteke iz mape "public"
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server radi na http://localhost:${PORT}`);
});
