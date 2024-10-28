<?xml version="1.0"?>
<!DOCTYPE xsl:stylesheet [
    <!ENTITY nbsp "&#160;">
]>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:bk="http://example.com/books">

    <!-- Define the template for the root element -->
    <!-- Define the template for the root element -->
    <xsl:template match="/">
        <html>
            <head>
                <title>Book Rankings</title>
                <link rel="stylesheet" type="text/css" href="../css/styleranking.css"/>
            </head>

            <body>
                <main class="container">
                    <h1>Top Books</h1>
                    <section class="t_body">
                        <table>                 
                            <tr>
                             <th class="rank">Rank</th>
                             <th class="cover">Cover</th>
                             <th class="details">Details</th>
                            </tr>
                            <!-- Apply templates to select book nodes -->
                            <xsl:apply-templates select="bk:books/bk:book">
                                <xsl:sort select="@rank" data-type="number"/>
                            </xsl:apply-templates>                     
                        </table>
                    </section>
                </main>
            </body>
        </html>
    </xsl:template>

    <!-- Define the template for processing book nodes -->
    <xsl:template match="bk:book">
        <tr class="book">
            <td class="rank"><xsl:value-of select="@rank"/></td>
            <td class="cover"><img src="{bk:cover}" alt="Book Cover"/></td>
            <td class="details">
                <h3><xsl:value-of select="bk:title"/></h3>
                <p><strong>Author:</strong> <xsl:value-of select="bk:author"/></p>
                <p><strong>Genre:</strong> <xsl:value-of select="bk:genre"/></p>
                <p><strong>Page Count:</strong> <xsl:value-of select="bk:page_count"/></p>
                <p><strong>Price:</strong> <xsl:value-of select="bk:price"/></p>
                <div class="description">
                    <xsl:value-of select="bk:description"/>
                </div>
            </td>
        </tr>
    </xsl:template>

</xsl:stylesheet>