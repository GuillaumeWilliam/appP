import React from "react";

function HomeMainPortfolio() {
    return (
        <section>
            <h1>Portfolio</h1>
            <article>
                <h2>Achète ton masque.com</h2>
                <img src="images/atmsmiley.png" alt="Achète ton masque logo"/>
                <img src="images/atmlogo.png" alt="Achète ton masque logo"/>
                <div className="atmcontent">
                    <p>
                        <a href="https://www.achetetonmasque.com" target="_blank" rel="noopener noreferrer">Accéder au site</a>
                    </p>
                    <table>
                        <td>
                            <p>&#171; <strong>Clients</strong> : Trouvez des fabricant·e·s autour de chez vous ou dans toute la France, explorez en ligne des boutiques indépendantes, commandez le modèle qui vous plaît !
                            <br/>
                            Livraison à domicile ou retrait des commandes en main propre au “point de retrait” indiqué par chaque boutique.</p>
                        </td>
                        <td>
                            <p><strong>Fabricants</strong> : Trouvez des clients autour de chez vous ou ailleurs dans le Monde, développez votre activité, cultivez votre créativité !
                            <br/>
                            Vous disposez d’une interface d’administration détaillée pour contrôler et gérer vos ventes à votre manière. &#187;
                        </p>
                        </td>
                    </table>
                </div>
                <img src="images/atmlogo.png" alt="Achète ton masque logo"/>
            </article>
        </section>
    )
}

export default HomeMainPortfolio;