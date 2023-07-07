import React from 'react';
import './Card.css';

const Card = ({ match }) => {
    const tournamentName = match.realcategories[0].tournaments[0].name;
    const homeTeam = match.realcategories[0].tournaments[0].matches[0].teams.home.name;
    const awayTeam = match.realcategories[0].tournaments[0].matches[0].teams.away.name;
    const time = match.realcategories[0].tournaments[0].matches[0]._dt.time;
    const date = match.realcategories[0].tournaments[0].matches[0]._dt.date;
    const matchStatus = match.realcategories[0].tournaments[0].matches[0].status.name;
    const result = match.realcategories[0].tournaments[0].matches[0].result;

    const getTeamCrestURL = teamId => {
        return `http://ls.betradar.com/ls/crest/big/${teamId}.png`;
    };


    const cardClass = `card ${matchStatus.substr(0, 3).toLowerCase()}`;
    return (
        <div className={cardClass}>
            <div className="card-header">
                <img src={getTeamCrestURL(homeTeam.uid)} alt={homeTeam} />
                <span>{tournamentName}  -  {tournamentName.seasontypename}</span>
                <span>{homeTeam.abbr}</span>
            </div>
            <div className="card-content">
                <div className="match">
                    <div className="team-names">
                        <span>{homeTeam}</span>
                        <span> VS </span>
                        <span>{awayTeam}</span>
                    </div>
                    {matchStatus === "Ended" | matchStatus === "Ongoing" ?
                        <div className="result">
                            <span>{result.home}</span>
                            <span> : </span>
                            <span>{result.away}</span>
                        </div> : ""}
                </div>

                <div className="match-time">
                    <span>{time} </span>
                    <span> {date}</span>
                </div>
                <div className="match-status">
                    {matchStatus}
                </div>
            </div>
        </div>
    );
};

export default Card;