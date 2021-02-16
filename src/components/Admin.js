import React, {Component} from "react";
import List from './List';

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            articles:[
                {id:1, title:'example1', image:'', alt:'', text:'Contenu en français...'},
                {id:2, title:'example2', image:'', alt:'', text:'Contenu en français...'},
                {id:3, title:'example3', image:'', alt:'', text:'Contenu en français...'},
                {id:4, title:'example4', image:'', alt:'', text:'Contenu en français...'}
            ],
         }
    }
    render() { 
        return ( 
            <div className="local-bootstrap">
                {this.state.articles.map((article, index) => {
                    return (
                        <table key={index} className="table">

                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Title</th>
                                    <th>Image</th>
                                    <th>Alt</th>
                                    <th>Texte</th>
                                    <th className="colspan-2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{article.id}</td>
                                    <td>{article.title}</td>
                                    <td>{article.image}</td>
                                    <td>{article.alt}</td>
                                    <td>{article.text}</td>
                                    <td>b</td>
                                    <td>a</td>
                                </tr>
                            </tbody>
                        </table>
                    )
                })}
                
                
            </div>
         );
    }
}
 
export default Admin;