const LinksSocialMedia = {
  github: 'guilhermeggloor',
  youtube: 'UC5EFuldMIC1BXCaEIIRe7Uw',
  facebook: 'guilherme.gloor',
  instagram: 'gloorguilherme',
  twitter: 'G4rcia1'
}

function changeSocialMediaLinks() {
  for (let li of socialinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())

    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
