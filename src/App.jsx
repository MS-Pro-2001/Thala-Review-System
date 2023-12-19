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

      document.getElementById("thala-reaction").innerHTML = ` <video width="200" height="200" autoPlay muted loop>
        <source src="thala.mp4" type="video/mp4" />
      </video> `

      document.getElementById("thala-trigger").click()
      thala.play()
    }
    else {

      document.getElementById("thala-reaction").innerHTML = ` <img src="moye.gif" alt="" />
              `


      document.getElementById("thala-trigger").click()
      moye.play()

    }


    arr.map((item) => console.log(item))

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
      <a href="whatsapp://send?text= https://thala-review-system.onrender.com/   This is Thala Review System APP. Just for Fun!! " data-action="share/whatsapp/share"
        target="_blank"> Share on WhatsApp </a>
      <div className="footer">
        Created with <span> ❤️</span> by <strong>Mridul</strong>
        <div style={{ marginTop: '20px' }}>


        </div>

      </div>
    </div>
  )
}

export default App
