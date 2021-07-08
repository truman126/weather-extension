const chk = document.getElementById("chk");

chk.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  // chrome.storage.sync.set({ darkSettings: true });

});
