import xss from "xss-filters";

function articleTemplate(title, lastReply){
  let safeTitle = xss.inHTMLData(title);
  let safeLastReply = xss.inHTMLData(lastReply);
  
  let template = `
    <article class="post">
      <h2 class="post-title">
        ${safeTitle}
      </h2>
      <p class="post-meta">
        last reply on ${safeLastReply}
      </p>
    </article>
  `;
  
  return template;
}

function userTemplate(name, avatar){
  let safeName = xss.inHTMLData(name);
  
  let template = `
    <div class="active-avatar">
      <img width="54" src="assets/images/${avatar}" />
      <h5 class="post-author">${safeName}</h5>
    </div>
  `;
  
  return template;
}


let ui = {
  renderPosts(posts){
    let elements = posts.map( (post) => {
      let { title, lastReply } = post;
      return articleTemplate(title, lastReply);
    });
    
    let target = document.querySelector(".container");
    target.innerHTML = elements;
  },
  
  renderUsers(users){
    let elements = users.map( (user) => {
      let { name, avatar } = user;
      
      return userTemplate(name, avatar);
    });
    
    let target = document.querySelector(".sidebar-content");
    target.innerHTML = elements;
  }
  
  
};


export default ui;
