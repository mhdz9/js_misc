// Init GitHub class
const github = new GitHub;
// Init UI class
const ui = new UI;

// Event Listeners
// Search input
const searchUser = document.getElementById('searchUser');
// Search input Event Listener
searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;
    if(userText !== '') {
        // Make http call
        github.getUser(userText)
            .then(data => {
                if(data.profile.message === 'Not Found') {
                    // Show alert
                    ui.showAlert('User not found', 'alert alert-danger');
                }
                else {
                    // Show profile
                    ui.showProfile(data.profile);
                    // Show repos
                    ui.showRepos(data.repos);
                }
            })
    }
    else {
        // Clear profile
        ui.clearProfile();
    }
});