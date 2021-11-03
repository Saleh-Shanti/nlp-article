const { isValidUrl } = require("./CheckURL");
const { update } = require("./UpdateUI");


const handleSubmit = async (e) => {
  e.preventDefault();
  const input = document.getElementById('NLP-article').value;
  if (isValidUrl(input)) {
    const data = await NLP_Fetch('http://localhost:8081/result', { url: input });
    update({ data });
  } else {
    alert('Invalid URL');
  }
}



const NLP_Fetch = async (url = '', data = { url: '' }) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    const newData = await response.json();
    return newData;
  } catch (error) {
    return error;
  }
};

module.exports = {
  handleSubmit
};

