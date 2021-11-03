const { handleSubmit } = require('./js/submitHandler');


require('./styles/resets.scss');
require('./styles/base.scss');
require('./styles/footer.scss');
require('./styles/form.scss');
require('./styles/header.scss');


const SubmitBtn = document.getElementById('Submit');
SubmitBtn.addEventListener('click', handleSubmit);

module.exports = {
  handleSubmit,
};
