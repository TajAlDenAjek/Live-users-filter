const ResultUI=document.getElementById('res');
const filter=document.getElementById('filter');
const input = document.querySelector('input');
const listItems=[];

getData();

document.getElementById('filter').addEventListener('input',filterData);




async function getData()
{
  const res= await fetch('https://randomuser.me/api?results=50');

  const {results} =await res.json();

  // clear results
  document.getElementById('res').innerHTML='';
  results.forEach((user) => {
    let li=document.createElement('li');
    listItems.push(li);
    li.innerHTML=`
    <img src="${user.picture.large}" alt="${user.name.first}" >
    <div class="user-info">
      <h4>${user.name.first} ${user.name.last}</h4>
      <p>${user.location.city}, ${user.location.country}</P>
    </div>
    `;
     document.getElementById('res').appendChild(li);
  });

}


function filterData(e)
{
  let temp=e.target.value;
  listItems.forEach((item) => {
    if(item.innerText.toLowerCase().includes(temp.toLowerCase()))
    {
      item.classList.remove('hide');
    }
    else
    {
      item.classList.add('hide');
    }
  });

}
