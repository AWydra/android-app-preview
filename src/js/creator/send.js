const otterSend = ev => {
  if (!validation()) {
    ev.preventDefault();
    validationListeners();
    Swal.fire({
      type: "error",
      title: "Error: Check form",
      text: "Fill in URLs and/or remove empty sections"
    });

    return false;
  }
};
