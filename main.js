$(document).ready(function() {
    
    const getData = async () => {
        try {
            const response = await fetch('https://api.github.com/users/LucasPires-dev')
            const responseJson = await response.json()

            console.log(responseJson)
            return responseJson
        } catch (error) {
            console.log(error)
        }
    }

    const showInfo = async () => {
        try {
            const response = await getData()    
            // <a href="#" class="profile-link">Ver no Github</a>

            const img = `<img class="profile-avatar" src="${response['avatar_url']}" alt="."></img>`
            const h1 = `<h1 class="profile-name">${response['name']}</h1>`
            const h2 = `<h2 class="profile-username">${response['login']}</h2>`
            const a = `<a href="${response['html_url']}" class="profile-link">Ver no Github</a>`
            const ul = `
                        <ul class="numbers">
                            <li class="numbers-item">
                                <h4>Repositórios</h4>
                                ${response['public_repos']}
                            </li>
                            <li class="numbers-item">
                                <h4>Seguidores</h4>
                                ${response['followers']}
                            </li>
                            <li class="numbers-item">
                                <h4>Seguindo</h4>
                                ${response['following']}
                            </li>
                        </ul>
                        `

            

            let allInfo = img + h1 + h2 + ul + a

            $('.container').html(allInfo)

        } catch (error) {
            console.log(error)
        }
    }

    showInfo()

})