/* =======================================================
   PARTE 1 — Header / Menu / Hero / Sobre
   Responsável: Lucas (Gerente do Projeto)
   Branch: feature/header-hero-sobre
   ======================================================= */

// Rolagem suave ao clicar nos links do menu
document.querySelectorAll('.nav__list a').forEach(function (link) {
  link.addEventListener('click', function (event) {
    const destino = document.querySelector(this.getAttribute('href'));
    if (destino) {
      event.preventDefault();
      destino.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* ===== FIM DA PARTE 1 ===== */


/* =======================================================
   PARTE 2 — Serviços / Contato / Footer
   Responsável: Murilo (Desenvolvedor)
   Branch: feature/servicos-contato
   ======================================================= */

// Validação simples do formulário de contato (desafio extra)
const formulario = document.getElementById('contatoForm');

if (formulario) {
  formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (!nome || !email || !mensagem) {
      alert('Por favor, preencha todos os campos antes de enviar.');
      return;
    }

    alert('Mensagem enviada com sucesso! Em breve entraremos em contato, ' + nome + '.');
    formulario.reset();
  });
}

/* ===== FIM DA PARTE 2 ===== */
