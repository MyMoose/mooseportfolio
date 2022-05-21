import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Sendgrid.png'
import IMG2 from '../../assets/Twilio.png'
import IMG3 from '../../assets/SignalR.png'
import IMG4 from '../../assets/Pagination.png'
import IMG5 from '../../assets/CRUD.jpeg'
import QR from '../../assets/frontendmentor/image-qr-code.png'


const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Send Grid Email Service Coming Soon',
        github: 'https://github.com',
        demo: 'https://google.com',
    },
    {
        id: 2,
        image: IMG2,
        title: 'Twilio Two-Factor Auth Coming Soon',
        github: 'https://github.com',
        demo: 'https://google.com',
    },
    {
        id: 3,
        image: IMG3,
        title: 'SignalR Live Chat Coming Soon',
        github: 'https://github.com',
        demo: 'https://google.com',
    },
    {
        id: 4,
        image: IMG4,
        title: 'Pagination Cards Coming Soon',
        github: 'https://github.com',
        demo: 'https://google.com',
    },
    {
        id: 5,
        image: IMG5,
        title: 'CRUD Coming Soon',
        github: 'https://github.com',
        demo: 'https://google.com',
    },
    {
        id: 6,
        image: QR,
        title: 'QR Code',
        github: 'https://github.com/MyMoose/qrcode',
        demo: 'https://mymoose.github.io/qrcode/',
    },

]

export const Portfolio = () => {
    return (
        <section id="portfolio">
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {data.map(({ id, image, title, github, demo }) => {
                    return (
                        <article key={id} className="portfolio__item">
                            <div className="portfolio__item-image">
                                <img src={image} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <div className="portfolio__item-cta">
                                <a href={github} className="btn">
                                    Github
                                </a>
                                <a href={demo} className="btn btn-primary">
                                    Live Demo
                                </a>
                            </div>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}

export default Portfolio