
const findUserAndSendHelper = (res, data, callback) => {
    db.find({ email: data.email }).then(user => {
      callback(user);
    });
  };

  module.export ={
    findUserAndSendHelper
  }