import './App.css';

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://static.rfstat.com/renderforest/images/v2/logo-homepage/gradient_2.png' />
      </header>
      <nav className='nav'>
          <div><a>Profile</a></div>
          <div><a>Messages</a></div>
          <div><a>Audio</a></div>
          <div><a>News</a></div>
          <div><a>Settings</a></div>

      </nav>

      <div className='content'>
          <div>
          <img src='https://st.depositphotos.com/1003348/2724/i/600/depositphotos_27241193-stock-photo-sunset-panorama.jpg' />
          </div>
          <div>
          <img src="https://avatarko.ru/img/kartinka/16/igra_Minecraft_Endermen_15969.jpg" />
              Main content
          </div>
          <dix>
              My posts
              <div>
                  New post
              </div>
              <div>
                  post1
              </div>
              <div>
                  post2
              </div>
          </dix>
      </div>
    </div>
  );
}

export default App;
