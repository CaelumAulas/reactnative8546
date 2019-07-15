## Gerando os fields

```js
// https://github.com/valleweb/valleForm

const fields = [
  [
    "slugdocampo",
    {
      type: "text",
      name: "cidade",
      syncValidations: [
        ["required", {}],
        ["minlength", { min: 3 }],
        ["maxlength", { max: 20 }]
      ],
      icon: "person",
      label: "Username",
      showOn: "cep"
    }
  ]
];

const validations = {
  required: () => {},
  minlength: ({ min }) => {},
  maxlength: ({ max }) => {}
};

item.syncValidations.forEach(validationArr => {
  const [validationName, param] = validationArr;
  validations[validationName](param);
});
```

## Estruturando a API

```js
/empresaId/questionarios/questionario1/
[ // perguntas
    {

    }
]

/empresaId/questionarios/questionario1/pergunta3
{ // pergunta
    fields: []
    onsuccess: {
        type: 'NEXT_QUESTION',
        value: 'pergunta5'
    },
    onerror: {
        type: 'ERROR_QUESTION',
        value: 'Você precisa preencher corretamente os campos'
    },
}

// POST
/empresaId/questionarios/questionario1/pergunta3
-> Reponde com a próxima pergunta5
```
