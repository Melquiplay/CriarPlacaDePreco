getProjetos()
function getProjetos(){
    var loadingg = document.querySelector("#loading")
    
    const urlGitHub = 'https://api.gitHub.com/users/Melquiplay/repos'
    fetch(urlGitHub, {
        method: 'GET'
    })
        .then((response) => response.json())
        .then((response) => {
            loadingg.style.display = 'none'
            
            showprojects(response)
        })
        .catch((e) => {
            console.log(e)
        })
   
}

function showprojects(data){
    var list = document.getElementById('my-projects-list')

    for (let i = 0; i < data.length; i++){
        let a = document.createElement("a")
        a.href = data[i]['clone_url']
        a.target = '_blank'
        a.title = data[i]['description']
        let link = document.createTextNode(data[i]['name'])
        a.appendChild(link)
        list.appendChild(a)
    }
}

