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


    const cardClass = `card ${matchStatus.substr(0, 3).toLowerCase()}`;
    return (
        <div className={cardClass}>
            <div class="card-background-not-started">
                <div class="card-title">
                    <p class="card-title">{tournamentName}  -  {tournamentName.seasontypename}</p>
                    <p class="card-subtitle">{homeTeam.abbr}</p>
                </div>
                <div class="card-content">
                    <div class="match">
                        <div class="match-team1">
                            {/* <img src="" alt=""> */}
                            <p class="team1-name">{homeTeam}</p>
                            {matchStatus === "Ended" || matchStatus === "Ongoing" ?
                                <p className="match-team-result secondary-font">{result.home}</p> : ""}
                        </div>
                        <div class="match-info">
                            <p>VS</p>
                            <p>{time}</p>
                            <p> {date}</p>
                        </div>
                        <div class="match-team2">
                            {/* <img src="" alt=""> */}
                            <p class="team2-name">{awayTeam}</p>
                            {matchStatus === "Ended" || matchStatus === "Ongoing" ?
                                <p className="match-team-result secondary-font">{result.away}</p> : ""}
                        </div>
                    </div>
                    <div class="match-status">
                        <p class="card-status-text">{matchStatus}</p>
                    </div>
                </div>
            </div>
        </div>
        // </div >
    );
};

export default Card;