document.addEventListener("DOMContentLoaded", function() {
  const server = document.querySelector("#client-server");
  const username = document.querySelector("#client-username");
  const clientForm = document.querySelector("#client-btn");

  clientForm.addEventListener("click", ev => {
    ev.preventDefault();
    console.log(server.value);
    console.log(username.value);

    // Here will be AJAX script

    $("main").load("appform.html");

    return false;
  });
});
