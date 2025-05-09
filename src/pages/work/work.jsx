import './work.css'

const Work = () => {
    const works = [
        { id: 1, src: 'web1.jpg', title: 'Project Alpha', category: 'Web Development', navigator: '/alpha' },
        { id: 2, src: 'web2.jpg', title: 'Project Beta', category: 'Web Development', navigator: '/beta' },
        { id: 3, src: 'web3.jpg', title: 'Project Gamma', category: 'Web Development', navigator: '/gamma' },
        { id: 4, src: 'web4.jpg', title: 'Project Delta', category: 'Web Development', navigator: '/delta' },
        { id: 5, src: 'web4.jpg', title: 'Project Delta', category: 'Web Development', navigator: '/delta' },
        { id: 6, src: 'web4.jpg', title: 'Project Delta', category: 'Web Development', navigator: '/delta' },
        { id: 7, src: 'web4.jpg', title: 'Project Delta', category: 'Web Development', navigator: '/delta' },
        { id: 8, src: 'web4.jpg', title: 'Project Delta', category: 'Web Development', navigator: '/delta' },
        { id: 8, src: 'web4.jpg', title: 'Project Delta', category: 'Web Development', navigator: '/delta' },
        // ... add more if needed
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
                                        <i className="ri-arrow-right-line"></i>
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
