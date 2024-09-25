const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'form.html'));
});

app.post('/calculate', (req, res) => {
    const { subject1, subject2, subject3, subject4, subject5 } = req.body;

    const marks = [
        parseInt(subject1),
        parseInt(subject2),
        parseInt(subject3),
        parseInt(subject4),
        parseInt(subject5)
    ];

    const total = marks.reduce((a, b) => a + b, 0);
    const average = total / marks.length;


    res.send(`
        <html>
        <head>
            <link rel="stylesheet" type="text/css" href="/styles.css">
        </head>
        <body>
            <div class="result-container">
                <h2>Total Marks: ${total}</h2>
                <h2>Average Marks: ${average}</h2>
                <a href="/">Go Back</a>
            </div>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
