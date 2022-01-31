function handlerToFormatCEP(value) {
  if(String(value).length < 8){
    return 'Por Favor, insira 8 dígitos!'
  
  }else {
    return String(value)
      .replace(/\D/g, "")
      .slice(0, 8)
      .replace(/(\d{5})(\d)/, "$1-$2");
  }
}

function handlerToFormatCPF(value){
  if(String(value).length < 8){
    return 'Por Favor, insira 11 dígitos!'
  
  }else {
    return String(value)
      .slice(0, 11)
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }
}

function handlerToFormatCPNJ(value) { 
  if(String(value).length < 15){
    return 'Por Favor, insira 15 dígitos!';

  }else { 
    return String(value)
      .slice(0, 15)
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
  }
}

function handlerToFormatPhone(value){
  if(String(value).length < 11){
    return 'Por Favor, insira 11 dígitos!';

  }else {
    return String(value)
      .slice(0, 11)
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  }
}

function handlerToFormatMoneyBRL(value){
  return value.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRl'    
  });
}

export { 
  handlerToFormatCEP, handlerToFormatCPF, handlerToFormatCPNJ, handlerToFormatPhone,handlerToFormatMoneyBRL, 
}; 