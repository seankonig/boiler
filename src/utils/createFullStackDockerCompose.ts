// eslint-disable-next-line unicorn/filename-case
import { readFileSync, writeFile } from 'fs';
const yaml = require('js-yaml');

const createDockerCompose = (projectName: string) => {
    const fileContents = readFileSync(`${__dirname}/docker.yaml`, 'utf8');
    const data = yaml.load(fileContents);

    writeFile(`${projectName}/docker-compose.yml`, yaml.dump(data), err => {
        if (err) {
            writeFile('tes.txt', 'test', err => {
                throw new Error(err?.message);
            });
        }
    });
};

export default createDockerCompose;
