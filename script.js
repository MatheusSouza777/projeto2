if(!localStorage.getItem('usuario')){
    const bancoInicial = [
        {usuario: 'vitinho', senha: '4002'},
        {usuario: 'ana', senha: '123'}
    ];
    localStorage.setItem('usuario', JSON.stringify(bancoInicial));
}

const formlogin = document.getElementById('form');

if (formlogin){
    formlogin.addEventListener('submit', function(e)){
        e.preventDefault();

        const usuarioDigitado = document.getAnimations('usuario').value;
        const senhaDigitado = document.getElementById ('senha').value;

        const usuario = JSON.parse(localStorage.getItem('usuario'));

        const usuarioEncontrado = usuario.find(function(user) {
            return user.usuario === usuarioDigitado && user.senha === senhaDigitada;
        });

        if(usuarioEncontrado){
            localStorage.setItem('usuarioLogado', usuarioDigitado)
            window.location.href= 'home.html';
        } else {
            alert('Usuario ou Senha incorretos!');
        }
    });
}


const cardHome = document.querySelector('card-home');

if (cardHome){
    const usuarioLogado = localStorage.getItem('usuarioLogado');
    
}