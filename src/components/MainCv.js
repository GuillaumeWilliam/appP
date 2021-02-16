import 'bootstrap/dist/css/bootstrap.css';
import React from "react";

function MainCv() {
    return (
        <>
        <h1>Mon curriculum vitae</h1>
        <h2>Dernières expériences professionnelles</h2>
        <div className="tables">
            <table className="experiences">
                <tr>
                    <td>2019-2020</td><td>Chef de zone - personal assistant, entreprise City-One
                    <br/>Aéroport Roissy CDG, France</td><td>4 mois</td>
                </tr>
                <tr>
                    <td>2018-2019</td><td>Professeur d'anglais, entreprise Native Professional Teachers
                    <br/>Madrid, Espagne</td><td>3 mois</td>
                </tr>
                <tr>
                    <td>2017-2018</td><td>Coach de badminton, entreprise GLL
                    <br/>Hayes, Royaume-Uni</td><td>1 an</td>
                </tr>
                <tr>
                    <td>2016-2018</td><td>Agent PMR, entreprises Omniserv & Face 2 Face
                    <br/>Aéroport Heathrow LHR, Royaume-Uni</td><td>2 ans, 3 mois</td>
                </tr>
                <tr>
                    <td>2015</td><td>Agent welcome, entreprise City-One
                    <br/>Aéroport Roissy CDG, France</td><td>3 mois</td>
                </tr>
                <tr>
                    <td>2014</td><td>Agent d'assistance voyageurs à bord des compartiments TGV Air France, entreprise Serover
                    <br/>Gare Aéroport CDG 2 TGV, France</td><td>5 mois</td>
                </tr>
            </table>
            <h2>Formations et diplômes</h2>
            <table className="trainings">
                <tr>
                    <td>En cours</td><td>Diplôme Développeur(euse) Web et Web Mobile
                    <br/>
                    AFPA Créteil, France</td><td></td>
                </tr>
                <tr>
                    <td>2017-2018</td><td>IGCSE (Mathématiques, Voyage et Tourisme, Anglais, Français)
                    <br/>École Oak Heights School, Hounslow, Royaume-Uni</td><td></td>
                </tr>
                <tr>
                    <td>2015</td><td>Permis B
                    <br/>France</td><td></td>
                </tr>
                <tr>
                    <td>2014</td><td>Baccalauréat ES (spécialité Sciences politiques / option Cinéma/audiovisuel)
                    <br/>Lycée Maurice Genevoix, Montrouge, France</td><td></td>
                </tr>
            </table>
            <h2>Compétences</h2>
            <table className="skills">
                <tr>
                    <td colspan="4">&bull; Bonne maîtrise de l'informatique (Ctrl+C pour copier, Ctrl+V pour coller)</td><td></td><td></td>
                </tr>
                <tr>
                    <td rowspan="3">Langues</td><td className="langue">Français</td><td className="comprehension">Compréhension</td><td>&#9830;&#9830;&#9830;&#9830;&#9830;</td><td className="expression">Expression</td><td>&#9830;&#9830;&#9830;&#9830;&#9830;</td>
                </tr>
                <tr>
                    <td className="langue">Anglais</td><td className="comprehension">Compréhension</td><td>&#9830;&#9830;&#9830;&#9830;&#9830;</td><td className="expression">Expression</td><td>&#9830;&#9830;&#9830;&#9830;</td>
                </tr>
                <tr>
                    <td className="langue">Espagnol</td><td className="comprehension">Compréhension</td><td>&#9830;&#9830;&#9830;&#9830;</td><td className="expression">Expression</td><td>&#9830;&#9830;&#9830;</td>
                </tr>
            </table>
        </div>
        </>
    )
}

export default MainCv;