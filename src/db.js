const mysql = require("mysql");
function getUser(req, res) {
  const id = req.params.id;
  const query = "SELECT * FROM users WHERE id = " + id;  // CWE-89 SQL injection
  mysql.query(query);
}
module.exports = { getUser };