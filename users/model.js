const db = require("../data/connection.js");

module.exports = {
  add,
  find,
  findBy,
  findById,
  findRecs,
  update,
  remove
};

function add(user) {
  return db("users")
    .insert(user, "id")
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

function find() {
  return db("users").select(
    "id",
    "username",
    "password",
    "email",
    "medicinalUse",
    "tolerance",
    "medicalConditions",
    "desiredEffect"
  );
}

function findBy(filter) {
  return db("users")
    .select(
      "id",
      "username",
      "password",
      "email",
      "medicinalUse",
      "tolerance",
      "medicalConditions",
      "desiredEffect"
    )
    .where(filter);
}

function findById(id) {
  return db("users")
    .select(
      "id",
      "username",
      "password",
      "email",
      "medicinalUse",
      "tolerance",
      "medicalConditions",
      "desiredEffect"
    )
    .where({ id })
    .first();
}

function findRecs(id) {
  return db("recommendations")
    .join("users", "users.id", "recommendations.userId")
    .select(
      "recommendations.id",
      "strain",
      "type",
      "flavor",
      "description",
      "userId",
      "users.username"
    )
    .where("recommendations.userId", id)
    .orderBy("recommendations.id");
}

function update(id, changes) {
  return db("users")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("users")
    .where("id", id)
    .del();
}