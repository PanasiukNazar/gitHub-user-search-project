const $input = document.querySelector('.search-input');
const $btn = document.querySelector('.search-button');
const $userPhoto = document.querySelector('.imagen');
const $userName = document.querySelector('.name');
const $userLogin = document.querySelector('.login');
const $date = document.querySelector('.date');
const $bio = document.querySelector('.bio');
const $reposNumber = document.querySelector('#b');
const $followersNumber = document.querySelector('#d');
const $followingNumber = document.querySelector('#f');
const $location = document.querySelector('.location-text');
const $blog = document.querySelector('.blog-link');
const $network = document.querySelector('.network-text');
const $organization = document.querySelector('.organization-text');

function send() {
   const inputValue = $input.value;
   fetch(`https://api.github.com/users/${inputValue}`)
      .then((response) => (response.ok ? response : Promise.reject()))
      .then((result) => result.json())
      .then((data) => {
         fetch(data.organizations_url)
            .then((organization) => organization.json())
            .then((dataOrganization) => {
               $userName.textContent = data.name;
               $userLogin.textContent = data.login;
               $userPhoto.setAttribute('src', data.avatar_url);
               $date.textContent = data.created_at;
               $reposNumber.textContent = data.public_repos;
               $followersNumber.textContent = data.followers;
               $followingNumber.textContent = data.following;
               $blog.href = data.html_url;
               data.location === null
                  ? ($location.textContent = 'Not Avilable')
                  : ($location.textContent = data.location);
               data.bio === null
                  ? ($bio.textContent = 'Not Avilable')
                  : ($bio.textContent = data.bio);

               data.twitter_username === null
                  ? ($network.textContent = 'Not Avilable')
                  : ($network.textContent = data.twitter_username);

               dataOrganization === null
                  ? ($organization.textContent = 'Not Avilable')
                  : ($organization.textContent =
                       dataOrganization[0] && dataOrganization[0].login);
            });
      })
      .catch(() =>
         Swal.fire({
            text: `User ${inputValue} not found`,
            icon: 'error',
            confirmButtonText: 'Got it!',
            customClass: { confirmButton: 'alert-button' },
         }),
      );
}
$btn.addEventListener('click', send),
   document.body.addEventListener('keydown', (event) => {
      'Enter' == event.code && send();
   });
