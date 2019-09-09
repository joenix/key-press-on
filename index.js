function Press(
  // Commands
  commands = {},
  // Application Areas
  targets = document,
  // Debug
  debug = undefined,
  // Secrets: w w s s a d a d b a b a
  secrets = [119, 119, 115, 115, 97, 100, 97, 100, 98, 97, 98, 97]
) {
  // Get Keys
  const keys = Object.keys(commands);
  // Reset
  const reset = () => [...secrets];
  // Cloner
  let cloner = reset();
  // Events
  document.addEventListener("keypress", e => {
    // Debug
    if (debug === true) {
      console.log(e);
    }
    // Key
    let key = e.key;
    // Code
    let code = e.which;
    // In Keys
    if (keys.includes(key)) {
      // Do Command
      commands[key](e);
    }
    // Process Reset
    if (code !== cloner.shift()) {
      // Bad
      return (cloner = reset());
    }
    // Process End
    if (!cloner.length) {
      // Reset
      cloner = reset();
      // Eggs
      typeof debug === "function"
        ? debug()
        : console.log("Joenix Congratulations !!");
    }
  });
}

export default Press;
