/* eslint-disable unicorn/filename-case */
import { readFileSync, writeFile } from 'fs';

const createNginxConf = (projectName: string) => {
    const nginxFileContents = readFileSync(`${__dirname}/nginx.txt`, 'utf8');
    writeFile(`${projectName}/nginx/default.conf`, nginxFileContents, err => {
        if (err) {
            throw new Error(err?.message);
        }
    });
};

export default createNginxConf;
