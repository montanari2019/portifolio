"use client";

import React, { useState, ChangeEvent } from "react";
import * as XLSX from "xlsx";
import style from "./style.module.css";
import { JSONTYPES } from "./types";

interface JsonObject {
  [key: string]: any;
}

export default function Teste() {
  const [jsonData, setJsonData] = useState<JSONTYPES[]>([]);

  const transformKey = (key: string): string => {
    return key
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "_")
      .replace(/[áàâãä]/g, "a")
      .replace(/[éèêë]/g, "e")
      .replace(/[íìîï]/g, "i")
      .replace(/[óòôõö]/g, "o")
      .replace(/[úùûü]/g, "u")
      .replace(/[ç]/g, "c")
      .replace(/[ñ]/g, "n")
      .replace(/\//g, "_");
  };

  // Função para transformar as keys dos objetos
  const transformKeysInObject = (obj: JsonObject): JsonObject => {
    const newObj: JsonObject = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        newObj[transformKey(key)] = obj[key];
      }
    }
    return newObj;
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("convertendo file");
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target?.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: "array" });
        const firstSheetName = workbook.SheetNames[1];
        const worksheet = workbook.Sheets[firstSheetName];
        const json = XLSX.utils.sheet_to_json<JsonObject>(worksheet);
        const transformedJson = json.map(transformKeysInObject) as JSONTYPES[];
        setJsonData(transformedJson);
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const extractInfo = (historico: string, key: string): string | null => {
    if (typeof historico !== "string") return null;
    const regex = new RegExp(`${key}:\\s*([\\d\\.-/]+)\\b`, "i");
    const match = historico.match(regex);
    return match ? match[1] : null;
  };

  const formatCpfCnpj = (cpfCnpj:string) => {
    // Remove caracteres não numéricos
    const cleanValue = cpfCnpj.replace(/\D/g, '');
  
    if (cleanValue.length === 11) {
      // Formatar como CPF: 000.000.000-00
      return cleanValue.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    } else if (cleanValue.length === 14) {
      // Formatar como CNPJ: 00.000.000/0000-00
      return cleanValue.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    } else {
      // Retorna o valor original se não for um CPF ou CNPJ válido
      return cpfCnpj;
    }
  };


  const jsonToExcel = (json:any[], fileName = 'data.xlsx') => {
    // Cria uma nova planilha
    const worksheet = XLSX.utils.json_to_sheet(json);
    
    // Cria um novo workbook
    const workbook = XLSX.utils.book_new();
    
    // Adiciona a planilha ao workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    
    // Escreve o arquivo Excel e gera um blob
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    
    // Cria um link para download
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    
    // Adiciona o link ao documento e simula um clique para iniciar o download
    document.body.appendChild(link);
    link.click();
    
    // Remove o link do documento
    document.body.removeChild(link);
  };
  
  const processArray = (data: JSONTYPES[]) => {
    console.log(data[0].historico_liquidacao);

    const nwyDate = data.map((item) => {
      const historico = item.historico_liquidacao;

      if (historico) {
        console.log(historico);
        const cpfCnpjMatch = historico.match(/CPF\/CNPJ:\s([\d\._\/-]+)/i);
        const contratoMatch = historico.match(/CONTRATO:\s(\d+)/i);
        return {
          ...item,
          cpf_cnpj: cpfCnpjMatch ? formatCpfCnpj(cpfCnpjMatch[1]) : null,
          contrato: contratoMatch ? contratoMatch[1] : null,
        };
      } else {
        console.warn("historico_liquidacao is undefined or null:", item);
        return {
          ...item,
          cpf_cnpj: null,
          contrato: null,
        };
      }
    });

    const novaMae = nwyDate.map((index) => {
      return {
        data: index.data,
        historico_liquidacao:index.historico_liquidacao,
        valor: index.valor,
        data_do_recebimento: index.data_do_recebimento,
        valor_do_recebimento: index.valor_do_recebimento,
        honorarios_repassados_via_outros_creditos: index.honorarios_repassados_via_outros_creditos,
        custas: index.custas,
        recuperacao_de_prejuizo_ja_baixados_do_sistema: index.recuperacao_de_prejuizo_ja_baixados_do_sistema,
        desconto_concedido: index.desconto_concedido,
        diferenca: index.diferenca,
        cpf_cnpj: index.cpf_cnpj,
        contrato: index.contrato,
      };
    });

    console.log("--------------------------------");
    console.log("Data processed:", nwyDate[0]);

    jsonToExcel(novaMae)

    setJsonData(novaMae);
  };

  return (
    <div style={{ width: "100%", padding: "16rem" }}>
      <input
        className={style.input}
        type="file"
        accept=".xlsx, .xls"
        onChange={handleFileChange}
      />

      <button type="button" onClick={() => processArray(jsonData)}>
        TESTE
      </button>

      <pre>
        <code>{JSON.stringify(jsonData, null, 2)}</code>
      </pre>
    </div>
  );
}
