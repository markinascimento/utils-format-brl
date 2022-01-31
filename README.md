
# Funções úteis para formataçaõ no padrão do BRASIL


## Funções

- handlerToFormatCPF

- handlerToFormatCPNJ

- handlerToFormatPhone

- handlerToFormatMoneyBRL

    
## Use

```javascript

function Example() {
  console.log(handlerToFormatCPF(12345678912));
  // 123.456.789-12
}
```

```javascript

function Example() {
  console.log(handlerToFormatCPNJ(703126280020108));
  // 70.312.628/0020-108
}
```

```javascript

function Example() {
  console.log(handlerToFormatPhone(99999929993));
  // (99) 99992-9993
}
```

```javascript

function Example() {
  console.log(handlerToFormatMoneyBRL(1212.29));
  // R$ 1.212,29
}
```
