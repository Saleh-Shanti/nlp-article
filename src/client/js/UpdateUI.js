const update = ({ data }) => {
  document.querySelector("#agreement").innerHTML = data.agreement;
  document.querySelector("#score").innerHTML = data.score_tag;
  document.querySelector("#confid").innerHTML =data.confidence;
  document.querySelector("#subject").innerHTML = data.subjectivity;
  document.querySelector("#iron").innerHTML = data.irony;

}

module.exports = {
  update,
}