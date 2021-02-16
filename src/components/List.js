import React from "react";

const List = (props) => {
    return (
        <table className="local-bootstrap table table-striped">
            <thead className="thead dark">
                <tr>
                    <th>ID</th><th>Titre</th><th>Image</th><th>alt</th><th>Texte</th><th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.articles.map((article, index) =>{
                        return(
                            <tr key={index}>
                            <td>{article.id}</td>
                                <td>{article.title}</td>
                                <td>{article.image}</td>
                                <td>{article.alt}</td>
                                <td>{article.text}</td>
                                <td>
                                    {/* <img src={ProcessingInstruction.env.PUBLIC_URL + '/images/'+article.image} alt="..." width="100"/> */}
                                </td>
                                <td>
                                    <button className="btn btn-danger" //onClick={() =>{if(window.confirm('Etes vous sûr de  supprimer'))}}>
                                    >
                                        <i className="fa fa-trash">Supprimer</i>
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default List;