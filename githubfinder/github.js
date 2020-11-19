class GitHub {
    constructor() {
        this.client_id = '0b72fe279c257a425f16';
        this.client_secret = 'f3e10e5765037745c0539335ba4c72b8649f6883';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    // Get user method
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}