<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet
    version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:output method="html" encoding="UTF-8"/>

    <xsl:template match="/">

        <div class="catalogo-grid">

            <xsl:for-each select="personajes/personaje">

                <article class="personaje-card">

                    <div class="personaje-imagen">

                        <img>
                            <xsl:attribute name="src">
                                <xsl:value-of select="imagen"/>
                            </xsl:attribute>

                            <xsl:attribute name="alt">
                                <xsl:value-of select="nombre"/>
                            </xsl:attribute>
                        </img>

                    </div>

                    <div class="personaje-contenido">

                        <span class="personaje-periodo">
                            <xsl:value-of select="periodo"/>
                        </span>

                        <h2>
                            <xsl:value-of select="nombre"/>
                        </h2>

                        <h3>
                            <xsl:value-of select="cargo"/>
                        </h3>

                        <p>
                            <xsl:value-of select="descripcion"/>
                        </p>

                    </div>

                </article>

            </xsl:for-each>

        </div>

    </xsl:template>

</xsl:stylesheet>