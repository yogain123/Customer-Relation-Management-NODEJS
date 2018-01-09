app.filter("countryFilter", () => {

  return (key) => {

    return key.toUpperCase();

  };

});

app.filter("uniqueId", () => {

  return (key) => {
    if (key == undefined)
      return null;
    console.log("Id is " + key);
    return key.substring(key.length - 6, key.length);
  };

});
