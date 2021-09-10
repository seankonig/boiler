// eslint-disable-next-line unicorn/filename-case
import { readFileSync, writeFile } from 'fs';
import cli from 'cli-ux';
const yaml = require('js-yaml');

const createNginxDocker = (projectName: string) => {
    const fileContents = readFileSync(`${__dirname}/docker.nginx.yaml`, 'utf8');
    const data = yaml.load(fileContents);

    writeFile(`${projectName}/nginx/Dockerfile.dev`, yaml.dump(data), err => {
        if (err) {
            writeFile('tes.txt', 'test', err => {
                throw new Error(err?.message);
            });
        }
        writeFile(
            `${projectName}/nginx/default.conf`,
            `${projectName}/nginx/nginx.txt`,
            err => {
                if (err) {
                    throw new Error(err?.message);
                }
                cli.log('🚀 Nginx Dockerfile created');
            }
        );
    });
};

export default createNginxDocker;
