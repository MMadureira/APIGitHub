const inpRepo = document.getElementById('inpRepo');
const btnConsultar = document.getElementById('btnConsultar');

const lista = document.getElementById('lista');

// Código - Lógica ///

const apiGithub = axios.create({
    baseURL:'https://api.github.com/users/'
});

function consultaDdos(){
    let list=''
    let nomeRepo = inpRepo.value;

    apiGithub.get(nomeRepo + '/repos').then(res=>{
        console.log(res);
        const data = res.data;
        data.map(repo =>{
            list += `<li>${repo.name}</li>`;
            lista.innerHTML = list;
        });
    }).catch(error =>{console.log(error);});
};



btnConsultar.onclick = ()=>{
    consultaDdos();
};