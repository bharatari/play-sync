export function getUpdatedProperties(o1, o2) {
  if (!o1 && !o2) {
    return [];
  } else if (o1 && !o2) {
    return Object.keys(o1);
  } else if (!o1 && o2) {
    return Object.keys(o2);
  }

  let updatedProperties = {};

  for (let property of Object.keys(o1)) {
    if (o1[property] !== o2[property]) {
      updatedProperties[property] = o2[property];
    }
  }

  return updatedProperties;
}
