"use strict";

const dataBase = [
  {
    company: "<b>Nike</b>",
    chef: "Bob",
    country: "USA",
  },
  {
    company: "Adidas",
    chef: "Nick",
    country: "Europe",
  },
  {
    company: "Reebok",
    chef: "Li",
    country: "Japan",
  },
  {
    company: "Fila",
    chef: "Mike",
    country: "Canada",
  },
  {
    company: "Asics",
    chef: "Tom",
    country: "Finland",
  },
];

const gridView = new GridView();

const config = {
  element : 'body',
  header: "Header of table",
  headerClass: ["header"],
  attribute: {
    company: {
      label: "Компания",
      src: "Компания",
    },
    chef: {
      label: "Директор",
    },
    country: {
      label: "Страна",
      value: (initialData) => {
        if (initialData["country"] === "USA") {
          return initialData["country"] + " map";
        }
        return initialData["country"];
      },
    },
  },
  data: dataBase,
};
gridView.render(config);
