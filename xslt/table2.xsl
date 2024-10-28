<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">


<xsl:template match="/">
    <html>
        <head>
            <link rel="stylesheet" type="text/css" href="../css/table.css"/>
        </head>
        <body>
            <main class = "table">
                <section class = "t_header">
                    <h1>Opening Times</h1>
                </section>
                <section class = "t_body">
                    <table>
                        <tr>
                            <th>Day</th>
                            <th>Time</th>
                        </tr>
                        <xsl:for-each select="table/value">
                            <tr>
                             <td><xsl:value-of select="day"/></td>
                             <td><xsl:value-of select="time"/></td>
                            </tr>
                        </xsl:for-each>
                    </table>
                </section>
            </main>
        </body>
    </html>
</xsl:template>

</xsl:stylesheet>