document.body.addEventListener("dragover", event => {
  event.preventDefault();
});
document.body.addEventListener("drop", event => {
  event.stopPropagation();
  event.preventDefault();

  const { files } = event.dataTransfer;
  if (files.length > 0) run(files[0]);
});

async function run(file) {
  try {
    const { run } = await import("./pkg");
    run(file);
  } catch (e) {
    console.error(e);
  }
}
