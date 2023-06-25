function modal() {
    Swal.fire({
        html: "<h1 style='font-size: 3rem;' class='titulo-socios'>Snaktural</h1><span class='mas-vendidos'>Nustro Contacto</span><p><i class='ti ti-phone-call'></i> 01 800 024 0384</p><br/><span class='mas-vendidos'>Nuestras Redes Sociales</h3><br/><a style='font-size: 20px; color: #3b5998; cursor: pointer;' class='ti ti-brand-facebook-filled'></a><a style='font-size: 20px; color: #171515; cursor: pointer; pointer; margin: 8px;' class='ti ti-brand-github-filled'></a><a style='font-size: 20px; color: #00acee; cursor: pointer;' class='ti ti-brand-twitter-filled'></a>",
        showDenyButton: true,
        showConfirmButton: false,
        denyButtonText: `Cerrar`,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__backOutDown'
        },
    })
}

function shopping() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Agregado al Carrito',
        showConfirmButton: false,
        timer: 1000
    })
}