let result = '';
const display = document.getElementsByClassName('display')[0];
function update()
{
display.value = result
}
function append(data)
{
  if(data === 'x' || data === '÷')
  {
    result += data;
  }
  else
  {
    result += data;
  }
update();
}
function displayclear()
{
  result = '';
  update();
}
function backSpace()
{
  result = result.slice(0, -1);
  update();
}
function finalresult()
{
  try
  {
    let  expression = result.replace(/x/g, '*').replace(/÷/g, '/');
    result = eval(expression).toString();
  }
  catch(e)
  {
    result = 'Error';
  }
  update();
}
update();
