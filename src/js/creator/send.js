const otterSend = ev => {
  if (!validation()) {
    ev.preventDefault();

    Swal.fire({
      type: "error",
      title: "Error: Check form",
      text: "Fill in URLs and/or remove empty sections"
    });
  } else {
    ev.preventDefault();

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, send it!"
    }).then(result => {
      if (result.value) {
        window.removeEventListener(
          "beforeunload",
          () => "Are you sure that you want to leave this page?"
        );
        document.querySelector("#preview-form").submit();
      }
    });
  }

  return false;
};
