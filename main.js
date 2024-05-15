const URL = `https://api.currencyapi.com/v3/latest?apikey=cur_live_spPAYKeDinLbXvYjsU0dzvH5w72xS833f4hWuU3N`;

fetch(URL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    console.log(data.data.PLN);
  });
