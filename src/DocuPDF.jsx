import { useState } from "react";
import { Document,Page, Text } from "@react-pdf/renderer";

export default function DocuPDF ({fecha, cliente, domicilio, CUIT, nroOrden}) {

  return (
    <>
      <Document>
        <Page size={"A4"}>
          <div style={{margin: '20px'}}>
            <Text style={{padding: 20, color: 'green'}}>{fecha}</Text>
          </div>
          <div>
            <Text>Señor/es: {cliente}</Text>
            <Text>Domicilio: {domicilio}</Text>
            <Text>I.V.A: Responsable Inscripto</Text>
          </div>
          <div>
            <Text>C.U.I.T N: {CUIT}</Text>
            <Text>Condicion de cobro: 30 DIAS FECHA FACTURA</Text>
            <Text>Nro. Orden: {nroOrden}</Text>
          </div>
          <div>
            <Text>
                10000   base pata sujecion plastica
            </Text>
            <Text>
                10000   pata cuerpo encastre plastica
            </Text>
          </div>
        </Page>
      </Document>
    </>
  );
}