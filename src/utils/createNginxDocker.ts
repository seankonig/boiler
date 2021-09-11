// eslint-disable-next-line unicorn/filename-case
import { readFileSync, writeFile } from 'fs';

const createNginxDocker = (projectName: string) => {
    const fileContents = readFileSync(`${__dirname}/docker.nginx.yaml`, 'utf8');

    writeFile(`${projectName}/nginx/Dockerfile.dev`, fileContents, err => {
        if (err) {
            writeFile('tes.txt', 'test', err => {
                throw new Error(err?.message);
            });
        }
    });
};

export default createNginxDocker;
