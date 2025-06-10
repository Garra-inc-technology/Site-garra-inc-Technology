// Inicializa a biblioteca AOS (se estiver usando)
AOS.init({ duration: 1000, once: true });

// Inicializa o EmailJS com seu USER_ID
emailjs.init("xBWQDP41I_QOvcKQM");

document.getElementById('formContato').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Envia o formulário usando EmailJS
    emailjs.sendForm(
        "service_m1o6gpb",   // SERVICE_ID do serviço criado
        "template_p4wnpon",  // TEMPLATE_ID do template criado
        this                      // formulário atual (this = formContato)
    )
    .then(function() {
        alert('Mensagem enviada! Obrigado pelo contato 😊');
        e.target.reset(); // limpa o formulário
    }, function(error) {
        alert('Erro ao enviar a mensagem: ' + JSON.stringify(error));
    });
});