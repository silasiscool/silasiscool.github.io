let mainUpdatedText = document.getElementById('main-updated-text');

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

fetch("https://api.github.com/repos/silasiscool/silasiscool.github.io/commits")
    .then(res=>res.json())
    .then(res=>updateText(new Date(res[0].commit.author.date)))

function updateText(date) {
    console.log(date)
    let month = months[date.getMonth()];
    let day = date.getDate();
    let year = date.getFullYear();

    text = `Last Updated ${month} ${day}, ${year}`;

    mainUpdatedText.textContent = text;
}
