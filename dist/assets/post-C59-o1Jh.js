import{h as c}from"./headers-ahJeJWcP.js";async function i(t){try{if(!localStorage.getItem("accessToken"))throw new Error("No access token found. Please log in.");const e=await fetch(`https://v2.api.noroff.dev/social/posts/${t}`,{method:"GET",headers:c()});if(!e.ok)throw console.error("HTTP error response:",e),new Error(`HTTP error! status: ${e.status||"unknown"}`);const o=await e.json(),a=JSON.stringify(o);l(a)}catch(n){console.error("Error fetching post:",n)}}function l(t){const n=document.getElementById("post-container-wrapper");if(!n){console.error("Post container wrapper element not found");return}const e=document.createElement("div");if(e.className="post-container",!e){console.error("Post container element not found");return}e.innerHTML="",t=JSON.parse(t);const o=document.createElement("h2"),a=document.createElement("p"),s=document.createElement("p"),r=document.createElement("img");r.className="post-image",o.textContent=t.data.title||"No title available",a.textContent=t.data.body||"No content available",s.textContent=Array.isArray(t.data.tags)?t.data.tags.join(", "):"No tags available",t.data.media&&t.data.media.url?r.src=t.data.media.url:r.alt="No image available",e.appendChild(o),e.appendChild(a),e.appendChild(s),e.appendChild(r),n.appendChild(e)}function d(){const n=new URLSearchParams(window.location.search).get("id");n!==null?i(n):console.error("No post ID found in URL")}d();export{d as retrievePostID};
