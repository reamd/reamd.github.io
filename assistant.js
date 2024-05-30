import fs from "fs";
import { exec } from "child_process";

function main() {
    function padding(num) {
        return String(num).padStart(2, '0');
    }
    const args = process.argv.slice(2);
    const date = new Date();
    const dateStr = `${date.getFullYear()}-${padding(date.getMonth() + 1)}-${padding(date.getDate())}`;
    const filename = `${dateStr}-${args[0]}.mdx`;
    let filePath = `./src/content/docs/article/${filename}`;
    if (args[1] === 't') {
        // 翻译类文章
        filePath = `./src/content/docs/translations/${filename}`;
    }

    fs.writeFileSync(filePath, '---\ntitle: \n---', {
        encoding: 'utf-8'
    });
    exec(`code -r ${filePath}`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`🎉已创建文件【${filePath}】✅`);
    });
}

main();