class GridView {
  /*
   * properties
   * @param [array] _tableClass
   * @param [array] data
   * @param [array] _attribute
   * @param [array] _element
   * @param [array] _header
   * @param [array] _headerClass
   */

  constructor() {
    this._header = "";
    this._headerClass = [];
    this._tableClass = [];
    this._element = "body";
    this._attribute = [];
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
      this._element = document.querySelector(element);
      return true;
    }
    return false;
  }

  /*
   * Method for show GridViewTable
   */

  render() {}
}
