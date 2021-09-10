// eslint-disable-next-line unicorn/filename-case
import { readFileSync, writeFile } from 'fs';
import cli from 'cli-ux';
const yaml = require('js-yaml');

const createClientDockerFile = (projectName: string) => {
    const fileContents = readFileSync(
        `${__dirname}/docker.client.yaml`,
        'utf8'
    );
    const data = yaml.load(fileContents);

    writeFile(
        `${projectName}/frontend/Dockerfile.dev`,
        yaml.dump(data),
        err => {
            if (err) {
                writeFile('tes.txt', 'test', err => {
                    throw new Error(err?.message);
                });
            }
            cli.log('🚀 Client Dockerfile created');
        }
    );
};

export default createClientDockerFile;
