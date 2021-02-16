import 'bootstrap/dist/css/bootstrap.css';
import React from "react";

function HomeMainArticles() {
    return (
        <section>
            <h1>Articles</h1>
            <table>
                <td>
                    <article>
                        <h2>Black Friday Hébergement Web : les meilleures promos et offres 2020</h2>
                        <img src="images/blackfridayarticle.jpg" alt="Black Friday"/>
                        <p>Le Black Friday est le moment idéal pour obtenir des hébergements web de qualité à prix cassé. Voici les 3 meilleures offres Black Friday pour les hébergeurs.
                        <br/>
                        <a href="https://www.presse-citron.net/black-friday-hebergement-web/" target="_blank" rel="noopener noreferrer">Lire l'article complet</a>
                        </p>
                        <p>
                            <em>Par Florian Pauly</em>
                            <br/>
                        <strong>Le  23 novembre 2020</strong>
                        </p>
                    </article>
                </td>
                <td>
                    <article>
                        <h2>Inutile de dire merci (par Internet), ça réchauffe la planète</h2>
                        <img src="images/webchats.jpg" alt="Chats en ligne"/>
                        <p>Des chercheurs britanniques montrent que le bavardage en ligne non nécessaire contribue à augmenter les émissions de gaz à effet de serre.
                        <br/>
                        <a href="https://www.courrierinternational.com/article/climat-inutile-de-dire-merci-par-internet-ca-rechauffe-la-planete" target="_blank" rel="noopener noreferrer">Lire l'article complet</a>
                        </p>
                        <p>
                            <em>Par G. Parker, S. Venkataramakrishnan & L. Hook</em>
                            <br/>
                        <strong>Le  25 novembre 2020</strong>
                        </p>
                    </article>
                </td>
            </table>
            
            <div id="HomeMainArticles" className="local-bootstrap">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card">
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default HomeMainArticles;