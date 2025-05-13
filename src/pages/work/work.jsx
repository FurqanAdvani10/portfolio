import './work.css'

const Work = () => {

    const works = [
        { id: 1, src: 'travelnmemories.png', title: 'TravelnMemories', category: 'Tour Booking', navigator: 'https://www.travelnmemories.com/' },
        { id: 2, src: 'cavecons.png', title: 'Cave Counselling', category: 'Counselling', navigator: 'https://cavecounselling.com/' },
        { id: 3, src: 'futureTrading.png', title: 'Future Trading', category: 'Trading', navigator: 'https://future-trading-psi.vercel.app/' },
        { id: 4, src: 'stlc.png', title: 'Stlc', category: 'Tuition', navigator: 'https://stlc-co.vercel.app/' },
        { id: 5, src: 'gethikma1.png', title: 'Gethikma', category: 'Tuition', navigator: 'https://gethikma.vercel.app' },
        { id: 6, src: 'chessapp.png', title: 'Chess Store', category: 'Store', navigator: 'https://chess-app-qb47.vercel.app/' },
        { id: 7, src: 'desertsafari.png', title: 'Desert Safari ', category: 'Booking App', navigator: 'https://desert-safari-weld.vercel.app/' },
        { id: 8, src: 'rfq.png', title: 'Rfq Travel', category: 'Umrah & Hajj Booking', navigator: 'https://rfq2.vercel.app/' },
    ];

    const images = import.meta.glob('../../assets/**/*', { eager: true });

    const getImg = (path) => {
        if (!path) return "";
        const fullPath = `../../assets/${path}`;
        return images[fullPath]?.default || '';
    };

    return (
        <div className='work-main section-padding'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className='services-heading'>
                            <i className='ri-asterisk'></i>
                            <h4>WORKS</h4>
                            <i className='ri-asterisk'></i>
                        </div>
                    </div>
                </div>
                <div className="row g-3 row-cols-xl-3 row-cols-lg-3 row-cols-1">
                    {works.map((item, index) => (
                        <div className="col" key={item.id}>
                            <div
                                className="work-card"
                                style={{
                                    animationDelay: `${index * 0.2}s`
                                }}
                            >
                                <div
                                    className="work-card-img"
                                    style={{
                                        backgroundImage: `url(${getImg(item.src)})`
                                    }}
                                />
                                <div className="work-card-content-container d-flex flex-row align-items-center justify-content-between">
                                    <div className="work-card-content d-flex flex-column align-items-start">
                                        <h6>{item.category}</h6>
                                        <h3>{item.title}</h3>
                                    </div>
                                    <div className="work-card-icon">
                                        <a href={`${item?.navigator}`} target="_blank">
                                            <i className="ri-arrow-right-line">
                                            </i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Work;
