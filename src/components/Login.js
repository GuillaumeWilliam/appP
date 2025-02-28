import React, {Component} from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { TiKeyOutline } from 'react-icons/ti';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            login:'',
            pass:'',
            loginError:'',
            passError:'',
            errorMessage:''
         }
    }
// // // // // // // // // // // // // // // // //
    handleChange = (event) =>{
        const {name, value} = event.target;
        let val = value;
        let err1 = '', 
            err2 = '';
        if(name === "login"){
            if(val === ''){
                err1 = <strong>Le champ login est requis</strong>
            }
        }else if(name==="pass"){
            if(val === ''){
                err2 = <strong>Le champ mot de passe est requis</strong>
            }
        }
        this.setState({loginError:err1, passError:err2 });
        this.setState({[name]:val});
    }
// // // // // // // // // // // // // // // // //
    handleSubmit = (e) => {
        e.preventDefault();
        const {login, pass} = this.state;
        if(login !== '' && pass!==''){
            if(login === 'admin' && pass ==='123'){
                const keyDate = new Date().toLocaleDateString(); 
                sessionStorage.setItem('token',keyDate);
                this.props.history.push('/admin');
                window.location.reload();
            }else{
                const error  = 'Le login et/ou le mot de passe ne correspondent pas';
                this.setState({errorMessage: error});
        }
           
        }else{
            const error  = 'Veuillez saisir les deux champs svp';
            this.setState({errorMessage: error});
        }
    }
// // // // // // // // // // // // // // // // //
    render() { 
        return ( 
            <div className="local-bootstrap">
                <div className ="row justify-content-center">
                <div className="card mt-3 w-50">
                    {this.state.errorMessage && <div className="alert alert-danger">{this.state.errorMessage}</div>}
                    <div className="bg-light rounded text-center h4">Authentification</div>
                    <div className="card-body">
                    <form onSubmit={this.handleSubmit}>
                        <div className="mb-1">
                            <label htmlFor="login" className="form-label">Login</label>
                            <input type="text" onChange={this.handleChange} className="form-control" name="login" placeholder="Entrez votre identifiant..."/>
                        </div>
                        {this.state.loginError}
                        <div className="mb-1">
                            <label htmlFor="pass" className="form-label">Mot de passe</label>
                            <input type="password" onChange={this.handleChange} className="form-control" name="pass" placeholder="Entrez votre mot de passe..."/>
                        </div>
                        {this.state.passError}
                        <button type="submit" className="btn btn-primary mt-2 col-12">Soumettre</button>
                        </form>
                    </div>
                </div> 
                </div>    
            </div>   
          );
    }
}
 
export default Login;