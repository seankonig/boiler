// eslint-disable-next-line unicorn/filename-case
import { readFileSync, writeFile } from 'fs';
import cli from 'cli-ux';
const yaml = require('js-yaml');

const createServerDockerFile = (projectName: string) => {
    const fileContents = readFileSync(
        `${__dirname}/docker.server.yaml`,
        'utf8'
    );
    const data = yaml.load(fileContents);

    writeFile(`${projectName}/backend/Dockerfile.dev`, yaml.dump(data), err => {
        if (err) {
            writeFile('tes.txt', 'test', err => {
                throw new Error(err?.message);
            });
        }
        cli.log('🚀 Created Dockerfile for server');
    });
};

export default createServerDockerFile;
