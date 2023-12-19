import './App.css'
import { useState } from 'react'

function App() {

  const [query, setQuery] = useState("")

  var thala = new Audio("thala.mp3");
  var moye = new Audio("moye.mp3");


  const hanldleThalaReaction = () => {
    setQuery("")
    thala.pause()
    moye.pause()
  }

  const checkThala = () => {

    var n = query, sum = 0;

    if (isNaN(n)) {
      sum = n.length
    } else {
      while (n != 0) {
        sum = sum + (n % 10);
        n = parseInt(n / 10);

      }

    }


    if (sum === 7) {
      // alert("Thala for a reason")
      document.getElementById("thala-reaction").innerHTML = ` <video width="auto" height="auto" autoPlay muted loop>
      <source src="thala.mp4" type="video/mp4" />
    </video> `

      document.getElementById("thala-trigger").click()
      thala.play()
    }
    else {

      document.getElementById("thala-reaction").innerHTML = `  <img src="https://reactiongifs.me/cdn-cgi/imagedelivery/S36QsAbHn6yI9seDZ7V8aA/885eebac-8987-476d-6941-8a2acdf7c000/w=398" alt="" />
              `


      document.getElementById("thala-trigger").click()
      moye.play()

    }


  }


  return (

    <div className="main-box">





      <button type="button" id="thala-trigger" className="btn btn-primary d-none" data-toggle="modal" data-target="#exampleModalCenter">
        Launch demo modal
      </button>


      <div data-backdrop="static" className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">

              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={hanldleThalaReaction}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body" id="thala-reaction">




            </div>

          </div>
        </div>
      </div>



      <div className="title">  <h2>Thala Review System 😉🥹</h2></div>
      <div className="box">
        <input type="text" className="in" value={query} onChange={e => setQuery(e.target.value)} />
        <button className="thala-review-btn" disabled={query.length === 0 ? true : false} onClick={checkThala} >Check</button>


      </div>
      <a href="whatsapp://send?text=This is Thala Review System APP. Just for Fun!!" data-action="share/whatsapp/share"
        target="_blank"> Share on WhatsApp </a>
      <div className="footer">
        Created with <span> ❤️</span> by <strong>Mridul</strong>

      </div>
    </div>
  )
}

export default App
