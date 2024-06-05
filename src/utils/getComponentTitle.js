function getComponentTitle(component) {
  const res = component.split('').map(letter => {
    return letter === letter.toUpperCase() ? ` ${letter}` : letter.toUpperCase()
  })
  return res.join('').trim()
}

export default getComponentTitle