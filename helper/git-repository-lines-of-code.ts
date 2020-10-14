export const countGithub = (repo: string): Promise<number> => {
    return fetch('https://api.github.com/repos/' + repo + '/stats/contributors')
        .then((response) => response.json())
        .then((contributors) =>
            contributors.map((contributor) =>
                contributor.weeks.reduce((lineCount, week) => lineCount + week.a - week.d, 0),
            ),
        )
        .then((lineCounts) => {
            const reduce = lineCounts.reduce((lineTotal, lineCount) => lineTotal + lineCount);
            return reduce;
        });
};

export const getMainGithubLanguage = async (repo: string): Promise<string[]> => {
    return fetch('https://api.github.com/repos/' + repo + '/languages')
        .then((response: Response) => response.json())
        .then((langs) => {
            const result = [];
            for (const key in langs) {
                result.push(key);
            }
            return result;
        });
};
