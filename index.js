var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return {}
}

function updateObjectWithKeyAndValue(object, key, value) {
  return ({}, recipes, { prop: '1', prop2: '2'})
}

function destructivelyUpdaateObjectKeyAndValue(object, key, value) {
  object[key] = value
  return {}
}
