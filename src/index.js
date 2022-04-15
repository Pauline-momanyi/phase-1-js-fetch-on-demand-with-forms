const init = () => {
  const inputForm = document.querySelector('form')
  inputForm.addEventListener('submit', event =>{
      event.preventDefault();
      console.log(event);
      const input = event.target.children[1].value
      console.log(input);

      fetch(`http://localhost:3000/movies/${input}`)
      .then(resp=>resp.json())
      .then(json=>{
          console.log(json);
          const title = document.querySelector('section#movieDetails h4')
          //const title2 = document.querySelector('h4')
          const summary = document.querySelector('section#movieDetails p')
          //console.log(summary);
          title.innerText = json.title
          summary.textContent = json.summary
          
      })
  }
  )
}

document.addEventListener('DOMContentLoaded', init);