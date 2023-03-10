import React from "react";
import { useEffect, useState } from "react";
import './Banniere.css'

export default function Banniere() {

    const [displayText, setDisplayText] = useState('');
    const text = "e-learning de qualité supérieure, accessible 24/7"

    useEffect(() => {
        let currentIndex = 0;
        const intervalId = setInterval(() => {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex += 1;
        if (currentIndex > text.length) {
            clearInterval(intervalId);
        }
        }, 100);
        return () => clearInterval(intervalId);
    }, [text]);

    return (
        <div className="main-banner" id="top">
            <video autoPlay muted loop id="bg-video">
                <source src="https://themewagon.github.io/training-studio/assets/images/gym-video.mp4" type="video/mp4" />
            </video>

            <div className="video-overlay header-text">
                 <div className="caption">
                    <h4>Boostez votre carrière et réalisez vos ambitions grâce à notre plateforme de <em> {displayText} </em></h4>
                </div> 
            </div>
        </div>
    )
}

/**
 * Les différentes tables pour une application de e-learning peuvent varier en fonction des fonctionnalités spécifiques de l'application. Cependant, voici quelques exemples de tables que vous pouvez trouver dans une application de e-learning :

Utilisateurs : Cette table stocke les informations sur les utilisateurs, telles que le nom, le prénom, l'adresse e-mail, le mot de passe, etc.

Cours : Cette table stocke les informations sur les différents cours disponibles dans l'application, telles que le titre, la description, le niveau de difficulté, la durée, etc.

Leçons : Cette table stocke les informations sur les différentes leçons pour chaque cours, telles que le titre, la description, les objectifs d'apprentissage, le contenu, etc.

Progression : Cette table stocke les informations sur la progression de l'utilisateur dans les différents cours et leçons, telles que le nombre de leçons terminées, le temps passé sur chaque leçon, le score, etc.

Examens : Cette table stocke les informations sur les examens disponibles dans l'application, telles que le titre, la description, la durée, le nombre de questions, les réponses possibles, etc.

Résultats : Cette table stocke les résultats des examens passés par les utilisateurs, y compris le score, le temps passé, les réponses correctes et incorrectes, etc.

Commentaires : Cette table stocke les commentaires des utilisateurs sur les différents cours et leçons, ainsi que les réponses de l'équipe enseignante.

Ces tables ne sont qu'un exemple et peuvent varier en fonction des besoins spécifiques de votre application de e-learning. Il est important de déterminer les fonctionnalités de base de votre application et de concevoir une structure de base de données qui prend en compte ces fonctionnalités.




boriskoffi175@gmail.com
quelle est la dernière version de expo
!
An error occurred. If this issue persists please contact us through our help center at help.openai.com.




 */