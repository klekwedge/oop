class GridView {
  /*
   * properties
   * @param [array] _tableClass
   * @param [array] data
   * @param [array] attribute
   * @param [array] _element
   * @param [array] _header
   * @param [array] _headerClass
   */

  constructor() {
    this._header = "";
    this._headerClass = [];
    this._tableClass = [];
    this._element = "";
    this.attribute = [];
  }

  /*
   * Method set Header
   */

  set header(header) {
    if (typeof header === "string" && header.trim() !== "") {
      this._header = header;
      return true;
    }
    return false;
  }

  /*
   * Method set HeaderClass
   */

  set headerClass(headerClass) {
    if (typeof headerClass === "object") {
      this._headerClass = headerClass;
      return true;
    }
    return false;
  }

  /*
   * Method set element
   */

  set element(element) {
    if (document.querySelector(element)) {
      this._element = element;
      return true;
    }
    return false;
  }

  /*
   * Method for show GridViewTable
   */

  render(config) {
    
    this.element = config.element;
    this.header = config.header;
    this.headerClass = config.headerClass;
    this.attribute = config.attribute;
    this.data = config.data;

    //show header
    if (this._header) {
      const header = document.createElement("h1");
      header.textContent = this._header;
      this._headerClass.forEach((cssClass) => {
        header.classList.add(cssClass);
      });
      document.querySelector(this._element).append(header);
    }

    //show table
    const table = document.createElement("table");
    this._tableClass.forEach((cssClass) => {
      table.classList.add(cssClass);
    });

    // create table header
    const trHeader = document.createElement("tr");
    for (let key in this.attribute) {
      const th = document.createElement("th");
      if (this.attribute[key].label) {
        th.textContent = this.attribute[key].label;
      } else {
        th.textContent = key;
      }

      trHeader.append(th);
    }
    table.append(trHeader);

    //draw table
    for (let i = 0; i < this.data.length; i++) {
      const dataElement = this.data[i];
      const tr = document.createElement("tr");
      for (let key in this.attribute) {
        const td = document.createElement("td");
        let valueTd = dataElement[key];

        // value
        if (this.attribute[key].value) {
          valueTd = this.attribute[key].value(dataElement);
        }

        // src
        if (this.attribute[key].src) {
          td.innerHTML = valueTd;
        } else {
          td.textContent = valueTd;
        }
        tr.append(td);
      }
      table.append(tr);
    }

    document.querySelector(this._element).append(table);
  }
}
