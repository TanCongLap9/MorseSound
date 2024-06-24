const doGet = (e) => {
  switch (e.pathInfo) {
    case "morse":
      return HtmlLib.toHtmlOutput(HtmlService, {language: "html", file: "morse.html", params: {}});
  }
}