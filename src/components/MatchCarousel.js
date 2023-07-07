import React, { useState, useEffect } from 'react';
import Card from './Card';
import './MatchCarousel.css';

const MatchCarousel = ({ sportId, max }) => {
    const [matches, setMatches] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        const fetchMatches = async () => {
            try {
                const response = await fetch(
                    'https://lmt.fn.sportradar.com/demolmt/en/Etc:UTC/gismo/event_fullfeed/0/1/12074'
                );
                const data = await response.json();

                let filteredMatches = [];
                if (data.doc?.[0]?.data[sportId]) {
                    const sportsData = data.doc[0].data;
                    if (sportId) {
                        filteredMatches = sportsData.filter(sport => sport.sportId === sportId);
                    } else {
                        filteredMatches = sportsData;
                    }
                }
                const slicedMatches = filteredMatches.slice(0, max);
                setMatches(slicedMatches);
            } catch (error) {
                console.error('Error fetching matches:', error);
            }
        };

        fetchMatches();
    }, [sportId, max]);


    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex(prevIndex =>
                prevIndex === matches.length - 1 ? 0 : prevIndex + 1
            );
        }, 300000);

        return () => {
            clearInterval(timer);
        };
    }, [matches]);

    const handleDotClick = index => {
        setActiveIndex(index);
    };

    return (
        <div className="match-carousel">
            {matches.length > 0 && (
                <div className="match-card">
                    <Card match={matches[activeIndex]} />
                </div>
            )}

            {matches.length > 1 && (
                <div className="navigation-dots">
                    {matches.map((match, index) => (
                        <span
                            key={index}
                            className={index === activeIndex ? 'active' : ''}
                            onClick={() => handleDotClick(index)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default MatchCarousel;