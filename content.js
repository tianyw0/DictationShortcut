let listening = false;

window.addEventListener("keydown", (e) => {
  // console.log('keydown', e);
  const editor = document.querySelector("#prompt-textarea");
  const isTyping = editor?.classList.contains("ProseMirror-focused");
  // reedit old prompt will have more than one textarea
  const len = document.querySelectorAll("textarea").length;

  if (isTyping || len > 1) return;

  if (e.code === "Space") {
    e.preventDefault();
    const btns = document.querySelectorAll(".composer-btn");
    const target = listening ? btns[3] : btns[2];
    if (target) {
      target.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      listening = !listening;
    }
  }
});

// listen for esc key to blur
window.addEventListener("keydown", (e) => {
  if (e.code === "Escape") {
    const editor = document.querySelector("#prompt-textarea");
    const isTyping = editor?.classList.contains("ProseMirror-focused");
    if (isTyping) {
      editor.blur();
    }
  }
});
