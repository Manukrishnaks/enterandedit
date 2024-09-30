const Data = require("../model/model");

const renderHome = (req, res) => {
  Data.find().then((users) => {
    res.render("home",{users});
  });
};

const addName = (req, res) => {
  const newUser = new Data({
    name: req.body.name,
    password:req.body.password,
  });
  newUser.save().then((result) => {
    res.redirect("/");
  });
};

const deleteName = (req,res)=>{
  Data.findByIdAndDelete(req.body.id).then((result) => {
    res.redirect("/")
  })
}

const getEdit = (req, res) => {
  Data.findById(req.params.id).then((user) => {
    res.render("edit", { user: user });
  });
};

const postEdit = (req, res) => {
  Data.findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { addName, renderHome, deleteName, getEdit, postEdit};