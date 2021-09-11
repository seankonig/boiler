// eslint-disable-next-line unicorn/filename-case
import { readFileSync, writeFile } from 'fs';

const createServerDockerFile = (projectName: string) => {
    const fileContents = readFileSync(
        `${__dirname}/docker.server.yaml`,
        'utf8'
    );

    writeFile(`${projectName}/backend/Dockerfile.dev`, fileContents, err => {
        if (err) {
            writeFile('tes.txt', 'test', err => {
                throw new Error(err?.message);
            });
        }
    });
};

export default createServerDockerFile;
