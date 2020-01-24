function validate() {
  var user = document.getElementById("username").value;
  var pass = document.getElementById("password").value;
  if (user == "root" && pass == "admin") {
    alert("Erfolgreich eingeloggt!")
    window.open("root/storage.html")
    return false;
  } else {
    attempts--;
    alert("Anmeldung fehlgeschlagen!");
    return false;
  }
}
