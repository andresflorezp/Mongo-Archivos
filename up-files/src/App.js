import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  state = {
    lo: false,
    co:10
  }
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleInputSubmit= this.handleInputSubmit.bind(this)
    
    
    
  }
  handleInputChange(e) {
    this.setState({
      file: e.target.files[0],
      
    });
  }

  handleInputSubmit(e) {
    this.setState({
      co:this.state.co+1

    })
    e.preventDefault()
    let data = new FormData();
    const ur = 'http://localhost:8080/api/files/upFile'+ this.state.co;
    data.append('file', this.state.file);

    axios.post(ur, data)
      .then(function (response) {
        console.log("file uploaded!", response);
        alert("file uploaded!")
        window.location.reload()
      })
      .catch(function (error) {
        console.log("failed file upload", error);
      });

  }
  
  
  
  render() {
    const uri = 'http://localhost:8080/api/files/upFile'+ this.state.co;
    
    return (
      <div>
        <input type="file" id="file" onChange={this.handleInputChange} />
        <button onClick={this.handleInputSubmit}>
          Enviar
        </button>

        <h1>Obtener Datos</h1>
        {/* <button onClick={this.handleObtain}>
          Mostrar Imagen
        </button> */}

        <img src={uri} />
      </div>



    )

  }
}

export default App;
