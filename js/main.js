const list = [
  'briz',
  'cherry',
  'ni\'gere',
  'kayla',
  'thor',
  'tracy',
  'ashley',
  'olivia',
  'nick',
  'neha',
  'sara',
  'abdo',
  'adie',
  'hunter',
  'jenny',
  'NO-CSS'
]

const select = document.createElement('select')
select.style.position = 'fixed'
select.style.right = '10px'
select.style.top = '10px'
document.body.appendChild(select)

function changeCSS (e) {
  let url = e.target.value
  document.querySelector('#style').setAttribute('href', url)
  if (!url.includes('NO-CSS')) {
    document.querySelector('#under-construction').style.display = 'none'
  } else {
    document.querySelector('#under-construction').style.display = 'inline'
  }
}

changeCSS({ target: { value: 'css/briz.css' } })

select.addEventListener('change', changeCSS)

function createOption (name) {
  const opt = document.createElement('option')
  opt.value = `css/${name}.css`
  opt.textContent = name
  select.appendChild(opt)
}

list.forEach((name) => createOption(name))
