export const isEmpty = (data: any) => {
  const errs = [];
  const keys = Object.keys(data);
  console.log(keys);
  for (let i = 0; i < keys.length; i++) {
    if (data[keys[i]] == undefined || !data[keys[i]]) {
      const err = {
        field: keys[i],
        message: `${keys[i]} is required`,
        required: true,
      };
      errs.push(err);
    }
  }

  if (errs.length > 0)
    throw {
      status: 400,
      message: "Bad Request",
      errors: errs,
    };
};
