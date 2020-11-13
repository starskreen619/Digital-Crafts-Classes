login

<!-- login script -->
<body>
    <form id="login">
        <input name="username">
        <input name="password" type="password">
        <input name="agree" checked type="checkbox">Agree to terms?
        <button>Login</button>
    </form>
    <script>
        let loginForm = document.querySelector("#login")
        loginForm.addEventListener("submit",(evt)=>{
            evt.preventDefault()    
                    
            let results = [...evt.target.elements]
                .filter(el=>el.name)
                .map(el=>({name:el.name, value:el.value}))
            let d = document.createElement("div")
            d.append(results[0].name, ":", results[0].value)
            document.body.append(d)
        })
    </script>
</body>

<!-- Ajax module -->
<!-- ajax.js Export -->

<script>
const ajax = (url, callback, method='GET')=>{
if(!url) return console.error("Request Required")
if(!callback) return console.error("Callback Required")
const request = new XMLHttpRequest();
request.addEventListener("readystatechange", evt=>{
let req = evt.target;
if(req.readyState !== 4) return;
if(req.status === 200) return callback(req.response)
callback("")})
request.open(method,url)
request.send()
}
export default ajax;
</script>

  <!-- ajax import -->

<script>
import ajax from "./ajax.js"

const callback = res, err)=>document.body.append(res)  
 ajax("./samples/text.txt", callback)
</script>
