// Code your solution here(
    function findMatching(drivers, name) {
        // Filter drivers whose name matches the input name (case-insensitive)
        return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
      }
      function fuzzyMatch(drivers, letters) {
        // Filter drivers whose name starts with the given letters
        return drivers.filter(driver => driver.startsWith(letters));
      }
      function matchName(drivers, name) {
        // Filter objects where the name property matches the input name
        return drivers.filter(driver => driver.name === name);
      }
        
