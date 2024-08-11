const fs = require('fs');

fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    try {
        const jsonData = JSON.parse(data);
        
        console.log('Name:', jsonData.name);
        console.log('Age:', jsonData.age);
        console.log('City:', jsonData.city);
    } catch (err) {
        console.error('Error parsing JSON:', err);
    }
});
