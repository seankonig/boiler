// eslint-disable-next-line unicorn/filename-case
import { readFileSync, writeFile } from 'fs';

const createClientDockerFile = (projectName: string) => {
    const fileContents = readFileSync(
        `${__dirname}/docker.client.yaml`,
        'utf8'
    );

    writeFile(`${projectName}/frontend/Dockerfile.dev`, fileContents, err => {
        if (err) {
            writeFile('tes.txt', 'test', err => {
                throw new Error(err?.message);
            });
        }
    });
};

export default createClientDockerFile;
