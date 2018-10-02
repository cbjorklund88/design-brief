import React from "react"

class App extends React.Component {

  render() {
    return (

      <div className="container">

        <div className="navbar">
          <a class="link-item" href=""> Home</a>
          <a class="link-item" href=""> Technology</a>
          <a class="link-item" href=""> Creativity</a>
          <a class="link-item" href=""> Entrepreneurship</a>
          <a class="link-item" href=""> Self</a>
          <a class="link-item" href=""> Culture</a>
          <a class="link-item" href=""> Digital Design</a>
          <a class="link-item" href=""> Popular on Medium</a>
          <a class="link-item" href=""> Politics</a>
          <a class="link-item" href=""> Culture</a>
          <a class="link-item" href=""> More</a>
          <button className="button-navbar">Get Started</button>
        </div>
        <div className="hero">
          <div className="hero-content">
            <h1>Interesting ideas that set your mind in motion</h1>
            <p>Hear directly from the people who know it best.
            From tech to politics to creativity and more — whatever your interest, we have got you covered.</p>

            <button className="buttonBlack">Get Started</button>
            <button className="buttonWhite">Learn More</button>
          </div>
          <div className="hero-image">
            <img src="./images/medium-image.png" alt="hero-image" width="380" height="350"/>
          </div>
        </div>


          <div className="articles">

            <div className="article1">
              <img className="article-image"src="./images/medium-image-puff-1.jpeg" alt="swing"/>
              <div className="article-text">
                <h2> The Boy who Tamed the Sea</h2>
                <p> At 5:30 am, on any morning i can handle it,
                I will slip out of the dark mouth of my covers and creep through the silver lig..</p>
                <div className="writerInfoAll">
                  <div className="writerInfo">
                    <img src="./images/writer-1.png"/>
                  <div className="writer-text">
                    <h6>Carl Moore</h6>
                    <p>Oct 28 &ensp; 8 min read</p>
                  </div>
                    <div className="bookmark-icon">
                      <img src="./images/bookmark.png"/>
                    </div>
                </div>
              </div>
            </div>
          </div>

            <div className="article2">
              <img className="article-image"src="./images/medium-image-puff-2.png" alt="swing"/>
              <div className="article-text">
                <h2> The Role of Human Emotions in the Future of Transport</h2>
                <p>Getting from A to B is about to feel very different</p>
                <div className="writerInfoAll">
                  <div className="writerInfo">
                    <img src="./images/writer-2.jpeg"/>
                    <div className="writer-text">
                      <h6>Ben Bland</h6>
                      <p>Nov 1 &ensp; 7 min read</p>
                    </div>
                      <div className="bookmark-icon">
                        <img src="./images/bookmark.png"/>
                      </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="article3">
              <img className="article-image"src="./images/medium-image-puff-4.jpeg" alt="swing"/>
              <div className="article-text">
                <h2> The March of the Losers</h2>
                <p>Around the world, the victims are becoming the abusers, and Donald Trump their king</p>
                <div className="writerInfoAll">
                  <div className="writerInfo">
                    <img src="./images/writer-3.jpeg"/>
                    <div className="writer-text">
                      <h6>Henry Wismeyer</h6>
                      <p>Nov 10 &ensp; 8 min read</p>
                    </div>
                      <div className="bookmark-icon">
                        <img src="./images/bookmark.png"/>
                      </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="article4">
              <img className="article-image"src="./images/medium-image-puff-3.png" alt="swing"/>
              <div className="article-text">
                <h2> The Burning Season</h2>
                <p>You cannot save everything when the fires come to Northern California</p>
                <div className="writerInfoAll">
                  <div className="writerInfo">
                    <img src="./images/writer-4.jpeg"/>
                    <div className="writer-text">
                      <h6>Lindsey Smith</h6>
                      <p>Nov 9 &ensp; 31 min read</p>
                    </div>
                      <div className="bookmark-icon">
                        <img src="./images/bookmark.png"/>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }

}

export default App
