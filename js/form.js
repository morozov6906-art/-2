
const TOKEN="PASTE_TELEGRAM_TOKEN";
const CHAT_ID="PASTE_CHAT_ID";
document.addEventListener("submit",function(e){
 if(e.target.tagName!=="FORM")return;
 e.preventDefault();
 const n=e.target.name.value;
 const p=e.target.phone.value;
 fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`,{
  method:"POST",
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify({chat_id:CHAT_ID,text:`Заявка\nИмя:${n}\nТел:${p}\n${location.href}`})
 }).then(()=>alert("Заявка отправлена"));
});
