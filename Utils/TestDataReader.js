
const fs = require('fs');
const path = require('path');

class TestDataReader {
    static readData() {
        const filePath = path.join(__dirname,'../ConfigFile/testData.json');
        return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    }
}
module.exports = { TestDataReader };
