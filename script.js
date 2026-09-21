// ==========================================
// 1. LÓGICA DO MENU MOBILE (HAMBÚRGUER)
// ==========================================
const menuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

// Adiciona o evento de clique no botão hambúrguer
menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    const icon = menuBtn.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark'); // Muda para um "X"
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars'); // Volta para as barras
    }
});

// Fecha o menu mobile automaticamente se um link for clicado
const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            const icon = menuBtn.querySelector('i');
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });
});

// ==========================================
// 2. LÓGICA DE PEDIDOS PARA O WHATSAPP
// ==========================================
const botoesAdicionar = document.querySelectorAll('.btn-add');

// Número do estabelecimento configurado
const numeroWhatsApp = "5534999999999"; 

botoesAdicionar.forEach(botao => {
    botao.addEventListener('click', (evento) => {
        // Encontra o card pai mais próximo do botão clicado
        const card = evento.target.closest('.card');
        
        // Pega o título do item dentro desse card (tag H4)
        const nomeDoItem = card.querySelector('h4').innerText;
        
        // Monta a mensagem pré-definida
        const mensagem = `Olá! Naveguei pelo site e gostaria de pedir: *${nomeDoItem}*. Pode me enviar as opções de pagamento e o tempo estimado?`;
        
        // Cria o link da API do WhatsApp com o texto codificado
        const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
        
        // Abre o WhatsApp em uma nova aba
        window.open(linkWhatsApp, '_blank');
    });
});