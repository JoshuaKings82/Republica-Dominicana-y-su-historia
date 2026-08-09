document.addEventListener(
    "DOMContentLoaded",
    function () {

        const formulario =
            document.getElementById(
                "formularioContacto"
            );

        const mensaje =
            document.getElementById(
                "mensajeFormulario"
            );


        if (formulario) {

            formulario.addEventListener(
                "submit",
                function (evento) {

                    evento.preventDefault();


                    if (!formulario.checkValidity()) {

                        formulario.reportValidity();

                        return;

                    }


                    const nombre =
                        document.getElementById(
                            "nombre"
                        ).value;


                    mensaje.textContent =
                        "Gracias, " +
                        nombre +
                        ". Tu mensaje fue enviado correctamente.";


                    mensaje.style.color =
                        "#0a7a32";


                    formulario.reset();

                }
            );

        }

    }
);