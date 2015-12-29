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


let ui = {
  renderPosts(posts){
    let elements = posts.map( (post) => {
      let { title, lastReply } = post;
      return articleTemplate(title, lastReply);
    });
    
    let target = document.querySelector(".container");
    target.innerHTML = elements;
  }  
};


export default ui;
