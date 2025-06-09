
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.static('public'));

app.get('/api/articles', (req, res) => {
  const articles = [];
  for (let i = 1; i <= 5; i++) {
    articles.push({
      title: `Generated Article ${i}`,
      content: `This is a sample auto-generated article number ${i} fetched at ${new Date().toLocaleString()}.`
    });
  }
  res.json(articles);
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
