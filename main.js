/*! For license information please see main.js.LICENSE.txt */
//# sourceMappingURL=main.js.map

window.addEventListener("load", () => {
  clock();

  function clock() {
      const today = new Date();
      const hours = today.getHours();
      const minutes = today.getMinutes();
      const seconds = today.getSeconds();

      const hour = hours < 10 ? "0" + hours : hours;
      const minute = minutes < 10 ? "0" + minutes : minutes;
      const second = seconds < 10 ? "0" + seconds : seconds;

      document.getElementById("hrs").textContent = hour;
      document.getElementById("min").textContent = minute;
      document.getElementById("sec").textContent = second;
      

      setTimeout(clock, 1000);
  }
});