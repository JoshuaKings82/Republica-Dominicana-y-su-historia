document.addEventListener("DOMContentLoaded", cargarCatalogo);


async function cargarCatalogo() {

    const contenedor =
        document.getElementById("catalogo-contenido");

    try {

        const respuestaXML =
            await fetch("xml/datos.xml");

        const respuestaXSL =
            await fetch("xml/catalogo.xsl");


        if (!respuestaXML.ok || !respuestaXSL.ok) {

            throw new Error(
                "No se pudieron cargar los archivos XML o XSLT."
            );

        }


        const textoXML =
            await respuestaXML.text();

        const textoXSL =
            await respuestaXSL.text();


        const parser =
            new DOMParser();


        const xml =
            parser.parseFromString(
                textoXML,
                "text/xml"
            );


        const xsl =
            parser.parseFromString(
                textoXSL,
                "text/xml"
            );


        const procesador =
            new XSLTProcessor();


        procesador.importStylesheet(xsl);


        const resultado =
            procesador.transformToFragment(
                xml,
                document
            );


        contenedor.innerHTML = "";

        contenedor.appendChild(resultado);

    }

    catch (error) {

        console.error(error);

        contenedor.innerHTML = `
            <div class="error-catalogo">

                <h2>
                    No se pudo cargar el catálogo
                </h2>

                <p>
                    Ejecuta el proyecto mediante un servidor local
                    o desde GitHub Pages.
                </p>

            </div>
        `;

    }

}