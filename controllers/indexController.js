exports.rootIndex = (req, res) => {
  const raw = `
      <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Title</title>
        </head>
        <body>
      
        <div id="app"></div>
        <script src="dist/bundle.js"></script>
        </body>
        </html>  
    `;
  res.send(raw);
};
