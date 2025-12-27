function start() {
  const year = parseInt(document.getElementById("yearInput").value);
  const output = document.getElementById("output");

  output.innerHTML = "";

  if (isNaN(year)) {
    output.innerText = "Please enter a valid year.";
    return;
  }

  const filtered = incidents.filter(item => item.year >= year);

  let index = 0;

  function showNext() {
    if (index >= filtered.length) {
      output.innerHTML += `
        <br><br>
        <strong>
        कहीं तू अमर तो नहीं?<br>
        Are you immortal?
        </strong>
      `;
      return;
    }

    const p = document.createElement("p");
    p.innerText = filtered[index].year + " — " + filtered[index].text;
    output.appendChild(p);

    setTimeout(() => {
      p.remove();
      index++;
      showNext();
    }, 2500);
  }

  showNext();
}